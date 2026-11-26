"""Upload reviewed Pages assets by content and configure the staged site."""

import argparse
import base64
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass
from hashlib import md5, sha256
import json
import os
from pathlib import Path
import re
from urllib.parse import urlsplit
from urllib.request import Request, urlopen


BUCKET = "astraia-assets"
SITE = "https://miracleqihe.github.io/astraia/"
MARKER = '<script id="astraia-r2-assets" type="application/json">{}</script>'
ENTRYPOINTS = ("index.html", "syzygy/index.html")
IMAGES = {".avif", ".gif", ".jpg", ".jpeg", ".png", ".svg", ".webp"}
SHARD = re.compile(r"(?:graph|book)-[a-f0-9]{12}-[0-9]{2}-[a-f0-9]{16}\.json")
LEXICON_SHARD = re.compile(r"(?P<domain>[a-z0-9_]+)-(?P<hash>[a-f0-9]{12})\.json")
PREVIEW = re.compile(r'(<meta (?:property="og:image"|name="twitter:image") content=")('
                     + re.escape(SITE) + r'og/[^"]+)(")')
MIME_TYPES = {
    ".avif": "image/avif", ".gif": "image/gif", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
    ".json": "application/json", ".pdf": "application/pdf", ".png": "image/png",
    ".svg": "image/svg+xml", ".webp": "image/webp",
}


@dataclass(frozen=True)
class Asset:
    path: Path
    name: str
    key: str
    length: int
    digest: str

    @staticmethod
    def read(path: Path, name: str):
        content_hash = sha256()
        transport_hash = md5(usedforsecurity=False)
        with path.open("rb") as content:
            while chunk := content.read(1024 * 1024):
                content_hash.update(chunk)
                transport_hash.update(chunk)
        suffix = path.suffix.lower()
        return Asset(path, name, f"assets/{content_hash.hexdigest()}{suffix}", path.stat().st_size,
                     transport_hash.hexdigest())


def taxonomy_assets(site: Path):
    """Validate the active taxonomy and retain content-addressed older shards."""
    taxonomy_path = site / "syzygy/taxonomy.json"
    lexicon_dir = site / "syzygy/lexicon"
    manifest_path = lexicon_dir / "manifest.json"
    if not taxonomy_path.exists() and not manifest_path.exists():
        if lexicon_dir.exists() and any(lexicon_dir.glob("*.json")):
            raise ValueError("Lexicon shards exist without their taxonomy and manifest")
        return []
    for path in (taxonomy_path, manifest_path):
        if path.is_symlink() or not path.is_file() or not path.resolve().is_relative_to(site):
            raise ValueError(f"Invalid taxonomy index: {path}")
    if lexicon_dir.is_symlink():
        raise ValueError("Lexicon directory cannot be a symbolic link")
    taxonomy = json.loads(taxonomy_path.read_text(encoding="utf-8"))
    manifest_bytes = manifest_path.read_bytes()
    manifest = json.loads(manifest_bytes.decode("utf-8"))
    if taxonomy.get("lexicon_manifest_sha256") != sha256(manifest_bytes).hexdigest():
        raise ValueError("Taxonomy and lexicon manifest do not match")
    graph_index = json.loads((site / "data/graph_index.json").read_text(encoding="utf-8"))
    boot = json.loads((site / "syzygy/boot.json").read_text(encoding="utf-8"))
    if not taxonomy.get("snapshot_id") or taxonomy["snapshot_id"] != graph_index.get("snapshot_id") or taxonomy["snapshot_id"] != boot.get("snapshot_id"):
        raise ValueError("Taxonomy and published graph snapshots do not match")
    domains = taxonomy.get("domains")
    manifest_domains = manifest.get("domains")
    if not isinstance(domains, list) or not domains or not isinstance(manifest_domains, dict):
        raise ValueError("Invalid taxonomy domains")
    active = {}
    for domain in domains:
        if not isinstance(domain, dict):
            raise ValueError("Invalid taxonomy domain")
        domain_id = domain.get("id")
        shard = domain.get("lexicon_shard")
        entry = manifest_domains.get(domain_id)
        if not isinstance(domain_id, str) or domain_id in active or not isinstance(shard, dict) or not isinstance(entry, dict):
            raise ValueError("Missing or duplicate taxonomy domain shard")
        file_name = shard.get("file")
        digest = shard.get("sha256")
        count = shard.get("count")
        if not isinstance(file_name, str) or not file_name.startswith("lexicon/") or not isinstance(digest, str) or not re.fullmatch(r"[a-f0-9]{64}", digest):
            raise ValueError(f"Invalid lexicon metadata for {domain_id}")
        basename = file_name.removeprefix("lexicon/")
        name_match = LEXICON_SHARD.fullmatch(basename)
        if not name_match or name_match.group("domain") != domain_id or name_match.group("hash") != digest[:12]:
            raise ValueError(f"Invalid lexicon filename for {domain_id}")
        if entry.get("file") != file_name or entry.get("sha256") != digest or entry.get("count") != count or domain.get("lexicon_count") != count:
            raise ValueError(f"Lexicon indexes disagree for {domain_id}")
        path = lexicon_dir / basename
        if path.is_symlink() or not path.is_file() or not path.resolve().is_relative_to(site):
            raise ValueError(f"Missing or invalid lexicon shard: {domain_id}")
        data = path.read_bytes()
        if sha256(data).hexdigest() != digest or entry.get("bytes") != len(data):
            raise ValueError(f"Lexicon shard failed integrity verification: {domain_id}")
        payload = json.loads(data.decode("utf-8"))
        if payload.get("domain_id") != domain_id or not isinstance(payload.get("entries"), list) or len(payload["entries"]) != count or payload.get("count", count) != count:
            raise ValueError(f"Invalid lexicon shard content: {domain_id}")
        active[domain_id] = path
    if set(active) != set(manifest_domains):
        raise ValueError("Taxonomy and lexicon domains differ")
    paths = []
    for path in sorted(lexicon_dir.glob("*.json")):
        if path.name == "manifest.json":
            continue
        match = LEXICON_SHARD.fullmatch(path.name)
        if not match or path.is_symlink() or not path.is_file() or not path.resolve().is_relative_to(site):
            raise ValueError(f"Invalid lexicon object: {path}")
        if not sha256(path.read_bytes()).hexdigest().startswith(match.group("hash")):
            raise ValueError(f"Lexicon filename hash mismatch: {path.name}")
        paths.append(path)
    if not set(active.values()).issubset(paths):
        raise ValueError("Not all active lexicon shards were selected")
    return paths


def assets_in(site: Path):
    names = ("knowledge/handbook.pdf", "data/graph_data.json", "data/graph_details.json")
    files = [site / name for name in names]
    files.extend((site / "knowledge/pages").glob("*.webp"))
    files.extend((site / "knowledge/inline-figures").glob("*.svg"))
    files.extend(path for path in (site / "knowledge/figures").rglob("*") if path.suffix.lower() in IMAGES)
    files.extend((site / "og").glob("*.png"))
    files.extend(path for path in (site / "syzygy/shards").glob("*.json") if SHARD.fullmatch(path.name))
    files.extend(taxonomy_assets(site))
    for path in sorted(files):
        if path.is_symlink() or not path.is_file() or not path.resolve().is_relative_to(site):
            raise ValueError(f"Invalid Pages asset {path}")
        yield Asset.read(path, path.relative_to(site).as_posix())


def matches(remote, asset: Asset):
    length = remote.get("ContentLength", remote.get("Size"))
    return length == asset.length and remote["ETag"].strip('"') == asset.digest


def upload_assets(assets, endpoint):
    import boto3
    from botocore.config import Config
    from botocore.exceptions import ClientError

    client = boto3.client("s3", endpoint_url=endpoint, region_name="auto", config=Config(
        max_pool_connections=16, retries={"mode": "standard", "max_attempts": 6},
        request_checksum_calculation="when_required",
    ))
    remote = {item["Key"]: item
              for page in client.get_paginator("list_objects_v2").paginate(Bucket=BUCKET, Prefix="assets/")
              for item in page.get("Contents", [])}
    unique = {asset.key: asset for asset in assets}
    missing = []
    for key, asset in unique.items():
        if key not in remote:
            missing.append(asset)
        elif not matches(remote[key], asset):
            raise ValueError(f"Existing R2 object failed integrity verification: {key}")

    def put(asset):
        try:
            with asset.path.open("rb") as body:
                response = client.put_object(
                    Bucket=BUCKET, Key=asset.key, Body=body, ContentLength=asset.length,
                    ContentMD5=base64.b64encode(bytes.fromhex(asset.digest)).decode("ascii"),
                    ContentType=MIME_TYPES[asset.path.suffix.lower()], CacheControl="public, max-age=31536000, immutable",
                    IfNoneMatch="*",
                )
        except ClientError as error:
            if error.response["Error"]["Code"] not in ("PreconditionFailed", "412"):
                raise
            response = client.head_object(Bucket=BUCKET, Key=asset.key)
            if not matches(response, asset):
                raise ValueError(f"Concurrent R2 object failed integrity verification: {asset.key}") from error
        if response["ETag"].strip('"') != asset.digest:
            raise ValueError(f"R2 returned a different checksum for {asset.key}")

    with ThreadPoolExecutor(max_workers=12) as pool:
        for count, _ in enumerate(pool.map(put, missing), 1):
            if count % 250 == 0:
                print(f"R2 uploaded {count}/{len(missing)} new objects", flush=True)
    print(f"R2 verified {len(unique)} distinct objects ({len(missing)} uploaded)", flush=True)


def check_delivery(assets, origin, *, ranged_pdf=False):
    samples = {}
    for asset in assets:
        samples.setdefault(asset.path.suffix.lower(), asset)
    for suffix, asset in samples.items():
        ranged = ranged_pdf and suffix == ".pdf"
        headers = {"User-Agent": "Astraia-Pages-publish/1.0", "Origin": "https://miracleqihe.github.io"}
        if ranged:
            headers["Range"] = "bytes=0-1023"
        request = Request(f"{origin}/{asset.key}", method="GET" if ranged else "HEAD", headers=headers)
        with urlopen(request, timeout=25) as response:
            expected = 206 if ranged else 200
            if response.status != expected or response.headers.get("Access-Control-Allow-Origin") not in ("*", headers["Origin"]):
                raise ValueError(f"Worker returned unexpected status or CORS headers for {asset.name}")
            if response.headers.get_content_type() != MIME_TYPES[suffix]:
                raise ValueError(f"Worker returned an unexpected content type for {asset.name}")
            if ranged:
                with asset.path.open("rb") as source:
                    if response.headers.get("Content-Range") != f"bytes 0-1023/{asset.length}" or response.read() != source.read(1024):
                        raise ValueError("Worker did not return the correct PDF bytes")
            elif int(response.headers["Content-Length"]) != asset.length:
                raise ValueError(f"Worker returned an unexpected length for {asset.name}")


def check_taxonomy_delivery(site: Path, assets, origin):
    """Read every active shard through the public worker before Pages deploys."""
    taxonomy_path = site / "syzygy/taxonomy.json"
    if not taxonomy_path.exists():
        return
    taxonomy = json.loads(taxonomy_path.read_text(encoding="utf-8"))
    by_name = {asset.name: asset for asset in assets}
    for domain in taxonomy["domains"]:
        shard = domain["lexicon_shard"]
        name = "syzygy/" + shard["file"]
        asset = by_name[name]
        request = Request(f"{origin}/{asset.key}", headers={
            "User-Agent": "Astraia-Pages-publish/1.0", "Origin": "https://miracleqihe.github.io"})
        with urlopen(request, timeout=25) as response:
            if response.status != 200 or response.headers.get("Access-Control-Allow-Origin") not in ("*", "https://miracleqihe.github.io"):
                raise ValueError(f"Worker returned unexpected status or CORS headers for {name}")
            if response.headers.get_content_type() != "application/json":
                raise ValueError(f"Worker returned an unexpected content type for {name}")
            body = response.read()
        if len(body) != asset.length or sha256(body).hexdigest() != shard["sha256"]:
            raise ValueError(f"Worker returned different lexicon bytes for {name}")
    print(f"R2 verified {len(taxonomy['domains'])} active taxonomy shards via the public worker", flush=True)


def activate(site: Path, assets, origin):
    pages = {site / name: (site / name).read_text(encoding="utf-8") for name in ENTRYPOINTS}
    markers = [html.count(MARKER) for html in pages.values()]
    if not any(markers):
        print("R2 copied the published assets. This build still uses the Pages URLs.", flush=True)
        return
    if any(count != 1 for count in markers):
        raise ValueError("Mismatched R2 config markers in Pages entrypoints")

    links = {asset.name: asset.key.removeprefix("assets/") for asset in assets if not asset.name.startswith("og/")}
    config = json.dumps({"origin": origin, "files": links}, separators=(",", ":")).replace("<", "\\u003c")
    markup = MARKER.replace("{}", config)
    for path, html in pages.items():
        path.write_text(html.replace(MARKER, markup), encoding="utf-8", newline="\n")

    preview_keys = {asset.name: asset.key for asset in assets if asset.name.startswith("og/")}
    for page in (site / "s").glob("*/index.html"):
        html = page.read_text(encoding="utf-8")
        replaced = PREVIEW.sub(lambda match: match[1] + origin + "/" + preview_keys[match[2].removeprefix(SITE)]
                               + match[3], html)
        if replaced != html:
            page.write_text(replaced, encoding="utf-8", newline="\n")

    removed = 0
    for asset in assets:
        # Retain the old PDF and social image URLs for existing links.
        if asset.name != "knowledge/handbook.pdf" and not asset.name.startswith("og/"):
            asset.path.unlink()
            removed += asset.length
    print(f"Pages uses R2. Retired {removed:,} bytes from the staged Pages artifact.", flush=True)


def https_origin(value):
    parsed = urlsplit(value)
    if parsed.scheme != "https" or not parsed.hostname or parsed.netloc != parsed.hostname or parsed.path not in ("", "/") or parsed.query or parsed.fragment:
        raise ValueError("An HTTPS origin without a path is required")
    return value.rstrip("/")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("site", type=Path, help="The existing published /astraia directory inside the staged Pages site")
    parser.add_argument("--upload", action="store_true")
    args = parser.parse_args()
    site = args.site.resolve()
    assets = list(assets_in(site))
    unique = {asset.key: asset for asset in assets}
    print(f"Selected {len(assets)} published paths, {len(unique)} distinct objects, "
          f"{sum(asset.length for asset in assets):,} bytes", flush=True)
    if args.upload:
        endpoint = https_origin(os.environ["ASTRAIA_R2_ENDPOINT"])
        if not re.fullmatch(r"https://[a-f0-9]{32}\.r2\.cloudflarestorage\.com", endpoint):
            raise ValueError("Expected the Cloudflare R2 S3 endpoint")
        origin = https_origin(os.environ["ASTRAIA_R2_ASSET_ORIGIN"])
        upload_assets(assets, endpoint)
        check_delivery(assets, origin, ranged_pdf=True)
        check_taxonomy_delivery(site, assets, origin)
        activate(site, assets, origin)


if __name__ == "__main__":
    main()
