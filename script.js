(function () {
  "use strict";

  const content = normalizeContent(window.SITE_CONTENT);
  const elements = {
    header: document.getElementById("site-header"),
    menuToggle: document.getElementById("menu-toggle"),
    primaryNav: document.getElementById("primary-nav"),
    heroMedia: document.getElementById("hero-media"),
    toast: document.getElementById("toast")
  };
  let toastTimer = null;

  document.documentElement.dataset.pageMode = "public";

  function normalizeContent(value) {
    const source = value && typeof value === "object" ? value : {};
    return {
      profile: source.profile && typeof source.profile === "object" ? source.profile : {},
      sections: source.sections && typeof source.sections === "object" ? source.sections : {},
      education: Array.isArray(source.education) ? source.education : [],
      papers: Array.isArray(source.papers) ? source.papers : [],
      works: Array.isArray(source.works) ? source.works : [],
      links: source.links && typeof source.links === "object" ? source.links : {}
    };
  }

  function setText(id, value) {
    const node = document.getElementById(id);
    if (node) node.textContent = value || "";
  }

  function safeUrl(value, allowImageData) {
    const url = String(value || "").trim();
    if (!url) return "";
    if (allowImageData && /^data:image\/(png|jpe?g|webp|gif);base64,/i.test(url)) return url;
    if (/^https?:\/\//i.test(url)) return url;
    if (/^(mailto:|#|\/|\.\/|\.\.\/)/i.test(url)) return url;
    if (!/^[a-z][a-z0-9+.-]*:/i.test(url) && !url.startsWith("//") && !/[\r\n]/.test(url)) return url;
    return "";
  }

  function emailHref(email) {
    const cleaned = String(email || "").trim().replace(/[\r\n]/g, "");
    return cleaned ? "mailto:" + cleaned : "#contact";
  }

  function icon(name) {
    const node = document.createElement("i");
    node.setAttribute("data-lucide", name);
    node.setAttribute("aria-hidden", "true");
    return node;
  }

  function refreshIcons(root) {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons({
        attrs: { "aria-hidden": "true" },
        root: root || document
      });
    }
  }

  function configureExternalLink(link, url) {
    const safe = safeUrl(url, false);
    if (!safe) return false;
    link.href = safe;
    if (/^https?:\/\//i.test(safe)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    return true;
  }

  function applyContent(data) {
    const profile = data.profile;
    const sections = data.sections;
    const links = data.links;
    const name = profile.name || "Your Name";
    const nameZh = profile.nameZh || "";
    const initials = profile.initials || initialsFromName(name);
    const pageFocus = profile.role || "Geometric Topology";
    const pageTitle = name + " | " + pageFocus;

    document.documentElement.lang = /[\u3400-\u9fff]/.test(name + nameZh) ? "zh-CN" : "en";
    document.title = pageTitle;

    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (description) description.content = profile.bio || "Academic personal homepage";
    if (ogTitle) ogTitle.content = pageTitle;
    if (ogDescription) ogDescription.content = profile.bio || "Research, publications, and selected works.";

    setText("nav-name", name);
    setText("hero-name", name);
    setText("hero-name-zh", nameZh);
    document.getElementById("hero-name-zh").hidden = !nameZh;
    setText("hero-role", profile.role);
    setText("hero-institution", profile.institution);
    setText("hero-bio", profile.bio);
    setText("profile-location", profile.location);
    setText("portrait-fallback", initials);
    setText("footer-name", name);
    setText("education-title", sections.educationTitle);
    setText("education-intro", sections.educationIntro);
    setText("papers-title", sections.papersTitle);
    setText("papers-intro", sections.papersIntro);
    setText("works-title", sections.worksTitle);
    setText("works-intro", sections.worksIntro);
    setText("contact-title", sections.contactTitle);
    setText("contact-text", sections.contactText);

    const heroImage = safeUrl(profile.heroImage, true) || "assets/campus.jpg";
    const escapedHeroImage = heroImage.replace(/["\\]/g, "\\$&");
    elements.heroMedia.style.backgroundImage = 'url("' + escapedHeroImage + '")';

    const avatar = document.getElementById("profile-avatar");
    const avatarFallback = document.getElementById("portrait-fallback");
    const avatarUrl = safeUrl(profile.avatar, true);
    avatar.alt = name + " profile portrait";
    if (avatarUrl) {
      avatar.src = avatarUrl;
      avatar.hidden = false;
      avatarFallback.hidden = true;
    } else {
      avatar.removeAttribute("src");
      avatar.hidden = true;
      avatarFallback.hidden = false;
    }

    const mailHref = emailHref(profile.email);
    const heroEmail = document.getElementById("email-link");
    const contactEmail = document.getElementById("contact-email");
    heroEmail.href = mailHref;
    contactEmail.href = mailHref;
    contactEmail.querySelector("span").textContent = profile.email || "Add your email";

    const scholarHero = document.getElementById("scholar-hero-link");
    if (safeUrl(links.scholar, false)) {
      scholarHero.href = links.scholar;
      scholarHero.target = "_blank";
      scholarHero.rel = "noopener noreferrer";
      scholarHero.querySelector("span").textContent = "Google Scholar";
    } else {
      scholarHero.href = "#papers";
      scholarHero.removeAttribute("target");
      scholarHero.removeAttribute("rel");
      scholarHero.querySelector("span").textContent = "View publications";
    }

    renderEducation(data.education);
    renderPapers(data.papers);
    renderWorks(data.works);
    renderSocialLinks(links);
    updateStructuredData(data);
    refreshIcons();
  }

  function updateStructuredData(data) {
    let node = document.getElementById("structured-data");
    if (!node) {
      node = document.createElement("script");
      node.id = "structured-data";
      node.type = "application/ld+json";
      document.head.append(node);
    }

    const sameAs = Object.values(data.links)
      .map((url) => safeUrl(url, false))
      .filter((url) => /^https?:\/\//i.test(url));
    const bio = String(data.profile.bio || "").toLowerCase();
    const knownTopics = [
      ["Geometric topology", "geometric topology"],
      ["Borel conjecture", "borel conjecture"],
      ["Non-positive curvature", "non-positive curvature"],
      ["Probability", "probability"],
      ["Mathematical physics", "mathematical physics"],
      ["Combinatorics", "combinatorics"]
    ].filter((topic) => bio.includes(topic[1])).map((topic) => topic[0]);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: data.profile.name || "Your Name",
      alternateName: data.profile.nameZh || undefined,
      url: "https://miracleqihe.github.io/",
      email: data.profile.email ? emailHref(data.profile.email) : undefined,
      jobTitle: data.profile.role || undefined,
      affiliation: data.profile.institution ? { "@type": "Organization", name: data.profile.institution } : undefined,
      knowsAbout: knownTopics,
      sameAs,
      alumniOf: data.education.filter((item) => item.institution).map((item) => ({
        "@type": "EducationalOrganization",
        name: item.institution
      })),
      hasPart: data.papers.filter((paper) => paper.title).map((paper) => ({
        "@type": "ScholarlyArticle",
        headline: paper.title,
        author: paper.authors || undefined,
        datePublished: paper.year || undefined,
        isPartOf: paper.venue ? { "@type": "Periodical", name: paper.venue } : undefined,
        identifier: safeUrl(paper.doiUrl, false) || undefined,
        url: safeUrl(paper.projectUrl || paper.doiUrl || paper.pdfUrl, false) || undefined,
        abstract: paper.abstract || undefined
      }))
    };
    node.textContent = JSON.stringify(schema);
  }

  function initialsFromName(name) {
    const pieces = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!pieces.length) return "YN";
    if (pieces.length === 1) return pieces[0].slice(0, 2).toUpperCase();
    return (pieces[0][0] + pieces[pieces.length - 1][0]).toUpperCase();
  }

  function emptyState(text) {
    const node = document.createElement("p");
    node.className = "empty-state";
    node.textContent = text;
    return node;
  }

  function renderEducation(items) {
    const list = document.getElementById("education-list");
    list.replaceChildren();
    if (!items.length) {
      list.append(emptyState("Education entries will appear here."));
      return;
    }

    items.forEach((item) => {
      const entry = document.createElement("article");
      entry.className = "timeline-entry";
      const period = document.createElement("p");
      period.className = "timeline-period";
      period.textContent = item.period || "";
      const body = document.createElement("div");
      body.className = "timeline-content";
      const degree = document.createElement("h3");
      degree.textContent = item.degree || "Untitled degree";
      const school = document.createElement("p");
      school.className = "timeline-school";
      school.textContent = item.institution || "";
      const location = document.createElement("p");
      location.className = "timeline-location";
      location.textContent = item.location || "";
      const detail = document.createElement("p");
      detail.className = "timeline-description";
      detail.textContent = item.description || "";

      body.append(degree);
      if (item.institution) body.append(school);
      if (item.location) body.append(location);
      if (item.description) body.append(detail);
      entry.append(period, body);
      list.append(entry);
    });
  }

  function citationText(paper) {
    const journalParts = [];
    if (paper.volume) journalParts.push("vol. " + paper.volume);
    if (paper.issue) journalParts.push("no. " + paper.issue);
    if (paper.pages) journalParts.push("pp. " + paper.pages);
    const detail = journalParts.length ? ", " + journalParts.join(", ") : "";
    return (paper.year ? " (" + paper.year + ")" : "") + detail;
  }

  function paperLink(label, url, iconName) {
    const link = document.createElement("a");
    link.className = "paper-link";
    if (!configureExternalLink(link, url)) return null;
    link.append(icon(iconName), document.createTextNode(label));
    return link;
  }

  function renderPapers(items) {
    const list = document.getElementById("paper-list");
    list.replaceChildren();
    if (!items.length) {
      list.append(emptyState("Publication entries will appear here."));
      return;
    }

    items.forEach((paper) => {
      const entry = document.createElement("article");
      entry.className = "paper-entry";
      const number = document.createElement("div");
      number.className = "paper-number";
      number.setAttribute("aria-hidden", "true");
      const main = document.createElement("div");
      main.className = "paper-main";
      const title = document.createElement("h3");
      title.textContent = paper.title || "Untitled publication";
      const authors = document.createElement("p");
      authors.className = "paper-authors";
      authors.textContent = paper.authors || "";
      const citation = document.createElement("p");
      citation.className = "paper-citation";
      if (paper.venue) {
        const venue = document.createElement("em");
        venue.textContent = paper.venue;
        citation.append(venue);
      }
      citation.append(document.createTextNode(citationText(paper)));

      main.append(title);
      if (paper.authors) main.append(authors);
      if (paper.venue || paper.year || paper.volume || paper.issue || paper.pages) main.append(citation);
      if (paper.status) {
        const status = document.createElement("span");
        status.className = "status-badge";
        status.textContent = paper.status;
        main.append(status);
      }
      if (paper.abstract) {
        const details = document.createElement("details");
        details.className = "paper-abstract";
        const summary = document.createElement("summary");
        summary.textContent = "Abstract";
        const abstract = document.createElement("p");
        abstract.textContent = paper.abstract;
        details.append(summary, abstract);
        main.append(details);
      }

      const links = document.createElement("div");
      links.className = "paper-links";
      [
        paperLink("DOI", paper.doiUrl, "badge-check"),
        paperLink("PDF", paper.pdfUrl, "file-text"),
        paperLink("Code", paper.codeUrl, "github"),
        paperLink("Project", paper.projectUrl, "external-link")
      ].filter(Boolean).forEach((link) => links.append(link));
      if (paper.bibtex) {
        const bibtex = document.createElement("button");
        bibtex.type = "button";
        bibtex.className = "bibtex-button";
        bibtex.append(icon("copy"), document.createTextNode("BibTeX"));
        bibtex.addEventListener("click", () => copyText(paper.bibtex));
        links.append(bibtex);
      }

      entry.append(number, main, links);
      list.append(entry);
    });
  }

  function renderWorks(items) {
    const list = document.getElementById("works-list");
    list.replaceChildren();
    if (!items.length) {
      list.append(emptyState("Selected work will appear here."));
      return;
    }

    items.forEach((work) => {
      const entry = document.createElement("article");
      entry.className = "work-entry";
      const meta = document.createElement("p");
      meta.className = "work-meta";
      const type = document.createElement("span");
      type.textContent = work.type || "Selected work";
      const year = document.createElement("span");
      year.textContent = work.year || "";
      meta.append(type, year);
      const title = document.createElement("h3");
      title.textContent = work.title || "Untitled work";
      const description = document.createElement("p");
      description.className = "work-description";
      description.textContent = work.description || "";
      entry.append(meta, title);
      if (work.description) entry.append(description);

      const linkUrl = safeUrl(work.linkUrl, false);
      if (linkUrl) {
        const link = document.createElement("a");
        link.className = "text-link";
        configureExternalLink(link, linkUrl);
        link.append(document.createTextNode(work.linkLabel || "View work"), icon("arrow-up-right"));
        entry.append(link);
      }
      list.append(entry);
    });
  }

  function renderSocialLinks(links) {
    const container = document.getElementById("social-links");
    container.replaceChildren();
    [
      ["GitHub", links.github],
      ["Google Scholar", links.scholar],
      ["ORCID", links.orcid],
      ["LinkedIn", links.linkedin],
      ["CV", links.cv]
    ].forEach(([label, url]) => {
      const link = document.createElement("a");
      if (!configureExternalLink(link, url)) return;
      link.textContent = label;
      container.append(link);
    });
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("BibTeX copied");
    } catch (error) {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.append(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
      showToast("BibTeX copied");
    }
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.hidden = false;
    toastTimer = window.setTimeout(() => {
      elements.toast.hidden = true;
    }, 2800);
  }

  function initReveal() {
    const sections = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));
  }

  function updateScrollState() {
    const y = window.scrollY;
    elements.header.classList.toggle("is-scrolled", y > 28);
    const shift = Math.min(52, y * 0.08);
    elements.heroMedia.style.setProperty("--hero-shift", shift + "px");
  }

  function setMenuState(isOpen) {
    elements.header.classList.toggle("menu-open", isOpen);
    elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
    elements.menuToggle.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
    elements.menuToggle.replaceChildren(icon(isOpen ? "x" : "menu"));
    refreshIcons(elements.menuToggle);
  }

  elements.menuToggle.addEventListener("click", () => {
    setMenuState(!elements.header.classList.contains("menu-open"));
  });
  elements.primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuState(false);
  });
  window.addEventListener("scroll", () => window.requestAnimationFrame(updateScrollState), { passive: true });

  document.getElementById("copyright-year").textContent = new Date().getFullYear();
  applyContent(content);
  initReveal();
  updateScrollState();
})();
