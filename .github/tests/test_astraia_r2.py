import json
import os
from email.message import Message
from hashlib import sha256
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
import astraia_r2


def encoded(value):
    return (json.dumps(value, ensure_ascii=False, separators=(",", ":")) + "\n").encode("utf-8")


class Response:
    def __init__(self, body):
        self.body = body
        self.status = 200
        self.headers = Message()
        self.headers["Content-Type"] = "application/json"
        self.headers["Access-Control-Allow-Origin"] = "*"

    def __enter__(self):
        return self

    def __exit__(self, *_args):
        return False

    def read(self):
        return self.body


class TaxonomyR2Tests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.site = Path(self.temp.name).resolve()
        for name in ("data", "knowledge", "syzygy/lexicon", "syzygy/shards"):
            (self.site / name).mkdir(parents=True)
        (self.site / "knowledge/handbook.pdf").write_bytes(b"%PDF-test")
        (self.site / "data/graph_data.json").write_bytes(b"{}\n")
        (self.site / "data/graph_details.json").write_bytes(b"{}\n")
        (self.site / "data/graph_index.json").write_bytes(encoded({"snapshot_id": "test-snapshot"}))
        (self.site / "syzygy/boot.json").write_bytes(encoded({"snapshot_id": "test-snapshot"}))
        for name in astraia_r2.ENTRYPOINTS:
            (self.site / name).write_text(astraia_r2.MARKER, encoding="utf-8")

    def tearDown(self):
        self.temp.cleanup()

    def write_taxonomy(self):
        domains = []
        manifest_domains = {}
        for i in range(7):
            domain = f"domain_{i}"
            content = encoded({"domain_id": domain, "entries": [{"id": f"entry_{i}", "term": "辞条"}]})
            digest = sha256(content).hexdigest()
            filename = f"lexicon/{domain}-{digest[:12]}.json"
            (self.site / "syzygy" / filename).write_bytes(content)
            info = {"file": filename, "sha256": digest, "count": 1, "bytes": len(content)}
            manifest_domains[domain] = info
            domains.append({"id": domain, "lexicon_count": 1, "lexicon_shard": {key: info[key] for key in ("file", "sha256", "count")}})
        manifest = encoded({"domains": manifest_domains})
        (self.site / "syzygy/lexicon/manifest.json").write_bytes(manifest)
        taxonomy = {"snapshot_id": "test-snapshot", "lexicon_manifest_sha256": sha256(manifest).hexdigest(), "domains": domains}
        (self.site / "syzygy/taxonomy.json").write_bytes(encoded(taxonomy))
        return taxonomy

    def test_legacy_site_without_taxonomy_remains_supported(self):
        self.assertEqual(astraia_r2.taxonomy_assets(self.site), [])

    def test_all_seven_shards_are_uploaded_and_resolved(self):
        taxonomy = self.write_taxonomy()
        assets = list(astraia_r2.assets_in(self.site))
        names = {asset.name for asset in assets}
        self.assertEqual(sum(name.startswith("syzygy/lexicon/") for name in names), 7)
        origin = "https://r2.example"
        payloads = {f"{origin}/{asset.key}": asset.path.read_bytes() for asset in assets}
        requested = []

        def fake_urlopen(request, timeout):
            requested.append(request.full_url)
            return Response(payloads[request.full_url])

        with patch.object(astraia_r2, "urlopen", side_effect=fake_urlopen):
            astraia_r2.check_taxonomy_delivery(self.site, assets, origin)
        self.assertEqual(len(requested), 7)

        astraia_r2.activate(self.site, assets, origin)
        for page in astraia_r2.ENTRYPOINTS:
            html = (self.site / page).read_text(encoding="utf-8")
            config = json.loads(html.split('type="application/json">', 1)[1].split("</script>", 1)[0])
            self.assertEqual(config["origin"], origin)
            for domain in taxonomy["domains"]:
                self.assertIn("syzygy/" + domain["lexicon_shard"]["file"], config["files"])
        self.assertTrue((self.site / "syzygy/taxonomy.json").is_file())
        self.assertTrue((self.site / "syzygy/lexicon/manifest.json").is_file())
        self.assertFalse((self.site / "syzygy" / taxonomy["domains"][0]["lexicon_shard"]["file"]).exists())

    def test_missing_or_tampered_shard_stops_deployment(self):
        taxonomy = self.write_taxonomy()
        path = self.site / "syzygy" / taxonomy["domains"][0]["lexicon_shard"]["file"]
        path.write_bytes(b"tampered")
        with self.assertRaisesRegex(ValueError, "integrity"):
            astraia_r2.taxonomy_assets(self.site)
        path.unlink()
        with self.assertRaisesRegex(ValueError, "Missing"):
            astraia_r2.taxonomy_assets(self.site)

    def test_inconsistent_snapshot_or_manifest_stops_deployment(self):
        self.write_taxonomy()
        (self.site / "syzygy/boot.json").write_bytes(encoded({"snapshot_id": "other-snapshot"}))
        with self.assertRaisesRegex(ValueError, "snapshots"):
            astraia_r2.taxonomy_assets(self.site)
        (self.site / "syzygy/boot.json").write_bytes(encoded({"snapshot_id": "test-snapshot"}))
        (self.site / "syzygy/lexicon/manifest.json").write_bytes(b"{}")
        with self.assertRaisesRegex(ValueError, "manifest"):
            astraia_r2.taxonomy_assets(self.site)

    def test_worker_bytes_are_checked_before_activation(self):
        self.write_taxonomy()
        assets = list(astraia_r2.assets_in(self.site))
        with patch.object(astraia_r2, "urlopen", return_value=Response(b"wrong bytes")):
            with self.assertRaisesRegex(ValueError, "different lexicon bytes"):
                astraia_r2.check_taxonomy_delivery(self.site, assets, "https://r2.example")

    def test_reuse_requires_a_matching_content_address_and_keeps_new_files_local(self):
        self.write_taxonomy()
        assets = list(astraia_r2.assets_in(self.site))
        origin = "https://r2.example"
        graph = next(asset for asset in assets if asset.name == "data/graph_data.json")
        details = next(asset for asset in assets if asset.name == "data/graph_details.json")
        config = {"origin": origin, "files": {
            graph.name: graph.key.removeprefix("assets/"),
            # Same path with old content must not be sent to R2.
            details.name: "old-content.json",
        }}
        reused = astraia_r2.reusable_assets(assets, config, origin)
        self.assertEqual([asset.name for asset in reused], [graph.name])
        astraia_r2.activate(self.site, reused, origin)
        self.assertFalse(graph.path.exists())
        self.assertTrue(details.path.is_file())
        page = (self.site / "index.html").read_text(encoding="utf-8")
        activated = json.loads(page.split('type="application/json">', 1)[1].split("</script>", 1)[0])
        self.assertIn(graph.name, activated["files"])
        self.assertNotIn(details.name, activated["files"])

    def test_reuse_preserves_unmapped_social_preview_url(self):
        story = self.site / "s" / "case_example"
        story.mkdir(parents=True)
        image_url = astraia_r2.SITE + "og/shared.png"
        page = story / "index.html"
        page.write_text(f'<meta property="og:image" content="{image_url}">', encoding="utf-8")
        graph = next(asset for asset in astraia_r2.assets_in(self.site) if asset.name == "data/graph_data.json")
        astraia_r2.activate(self.site, [graph], "https://r2.example")
        self.assertIn(image_url, page.read_text(encoding="utf-8"))

    def test_reuse_skips_preview_hashing_but_migration_keeps_previews(self):
        previews = self.site / 'og'
        previews.mkdir()
        (previews / 'shared.png').write_bytes(b'preview')
        self.assertNotIn('og/shared.png', {asset.name for asset in astraia_r2.assets_in(self.site, include_previews=False)})
        self.assertIn('og/shared.png', {asset.name for asset in astraia_r2.assets_in(self.site)})

    def test_reuse_rejects_a_different_origin_or_no_matching_assets(self):
        assets = list(astraia_r2.assets_in(self.site))
        with self.assertRaisesRegex(ValueError, "mapping"):
            astraia_r2.reusable_assets(assets, {"origin": "https://other.example", "files": {}}, "https://r2.example")
        with self.assertRaisesRegex(ValueError, "No current assets"):
            astraia_r2.reusable_assets(assets, {"origin": "https://r2.example", "files": {}}, "https://r2.example")

    def test_locally_retained_new_taxonomy_shard_does_not_require_r2(self):
        taxonomy = self.write_taxonomy()
        assets = list(astraia_r2.assets_in(self.site))
        shards = [asset for asset in assets if asset.name.startswith("syzygy/lexicon/")]
        reused = shards[:6]
        origin = "https://r2.example"
        payloads = {f"{origin}/{asset.key}": asset.path.read_bytes() for asset in reused}
        with patch.object(astraia_r2, "urlopen", side_effect=lambda request, timeout: Response(payloads[request.full_url])):
            astraia_r2.check_taxonomy_delivery(self.site, reused, origin, allow_local=True)
        self.assertEqual(len(taxonomy["domains"]), 7)
        self.assertTrue(shards[6].path.is_file())

    def test_projected_capacity_counts_new_local_content_and_entrypoint_mappings(self):
        assets = list(astraia_r2.assets_in(self.site))
        graph = next(asset for asset in assets if asset.name == "data/graph_data.json")
        total = sum(path.stat().st_size for path in self.site.rglob("*") if path.is_file())
        projected = astraia_r2.projected_pages_bytes(self.site, [graph], "https://r2.example")
        self.assertGreater(projected, total - graph.length)
        self.assertLess(projected, total + 1000)

    def test_no_upload_below_threshold_but_upload_at_threshold(self):
        assets = list(astraia_r2.assets_in(self.site))
        graph = next(asset for asset in assets if asset.name == "data/graph_data.json")
        origin = "https://r2.example"
        config = {"origin": origin, "files": {graph.name: graph.key.removeprefix("assets/")}}
        env = {"ASTRAIA_R2_ASSET_ORIGIN": origin,
               "ASTRAIA_R2_ENDPOINT": "https://" + "a" * 32 + ".r2.cloudflarestorage.com"}
        argv = ["publish", str(self.site), "--upload", "--artifact-root", str(self.site), "--reuse-until-bytes"]
        with patch.dict(os.environ, env), patch.object(astraia_r2, "published_config", return_value=config), \
                patch.object(astraia_r2, "check_delivery"), patch.object(astraia_r2, "check_taxonomy_delivery"), \
                patch.object(astraia_r2, "activate"), patch.object(astraia_r2, "upload_assets") as upload:
            with patch.object(sys, "argv", argv + ["800000000"]):
                astraia_r2.main()
            upload.assert_not_called()
            with patch.object(sys, "argv", argv + ["1"]):
                astraia_r2.main()
            upload.assert_called_once()


if __name__ == "__main__":
    unittest.main()
