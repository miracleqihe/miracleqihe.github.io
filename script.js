(function () {
  "use strict";

  const STORAGE_KEY = "miracleqihe-homepage-content-v1";
  const defaultContent = clone(window.SITE_CONTENT || {});
  let content = loadContent();
  let draft = null;
  let previousFocus = null;
  let toastTimer = null;
  let previewFrame = null;

  const elements = {
    header: document.getElementById("site-header"),
    menuToggle: document.getElementById("menu-toggle"),
    primaryNav: document.getElementById("primary-nav"),
    editor: document.getElementById("editor"),
    editorBackdrop: document.getElementById("editor-backdrop"),
    editorForm: document.getElementById("editor-form"),
    toast: document.getElementById("toast"),
    profileFields: document.getElementById("profile-fields"),
    educationFields: document.getElementById("education-fields"),
    paperFields: document.getElementById("paper-fields"),
    workFields: document.getElementById("work-fields")
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function mergeDefaults(base, incoming) {
    if (Array.isArray(base)) {
      return Array.isArray(incoming) ? clone(incoming) : clone(base);
    }

    if (base && typeof base === "object") {
      const source = incoming && typeof incoming === "object" && !Array.isArray(incoming) ? incoming : {};
      const result = {};
      Object.keys(base).forEach((key) => {
        result[key] = mergeDefaults(base[key], source[key]);
      });
      Object.keys(source).forEach((key) => {
        if (!(key in result)) result[key] = clone(source[key]);
      });
      return result;
    }

    return incoming === undefined || incoming === null ? base : incoming;
  }

  function normalizeContent(value) {
    const normalized = mergeDefaults(defaultContent, value || {});
    normalized.education = Array.isArray(normalized.education) ? normalized.education : [];
    normalized.papers = Array.isArray(normalized.papers) ? normalized.papers : [];
    normalized.works = Array.isArray(normalized.works) ? normalized.works : [];
    return normalized;
  }

  function loadContent() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return normalizeContent(stored ? JSON.parse(stored) : defaultContent);
    } catch (error) {
      return normalizeContent(defaultContent);
    }
  }

  function getPath(object, path) {
    return path.split(".").reduce((value, key) => (value == null ? undefined : value[key]), object);
  }

  function setPath(object, path, value) {
    const keys = path.split(".");
    let target = object;
    keys.slice(0, -1).forEach((key) => {
      if (target[key] == null) target[key] = {};
      target = target[key];
    });
    target[keys[keys.length - 1]] = value;
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
    const profile = data.profile || {};
    const sections = data.sections || {};
    const links = data.links || {};
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
    document.getElementById("hero-media").style.backgroundImage = 'url("' + escapedHeroImage + '")';

    const avatar = document.getElementById("profile-avatar");
    const avatarUrl = safeUrl(profile.avatar, true);
    avatar.alt = name + " 的个人头像";
    if (avatarUrl) {
      avatar.src = avatarUrl;
      avatar.hidden = false;
      document.getElementById("portrait-fallback").hidden = true;
    } else {
      avatar.removeAttribute("src");
      avatar.hidden = true;
      document.getElementById("portrait-fallback").hidden = false;
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

    renderEducation(data.education || []);
    renderPapers(data.papers || []);
    renderWorks(data.works || []);
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
    const sameAs = Object.values(data.links || {}).map((url) => safeUrl(url, false)).filter((url) => /^https?:\/\//i.test(url));
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
      alumniOf: (data.education || []).filter((item) => item.institution).map((item) => ({
        "@type": "EducationalOrganization",
        name: item.institution
      })),
      hasPart: (data.papers || []).filter((paper) => paper.title).map((paper) => ({
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
    const definitions = [
      ["GitHub", links.github],
      ["Google Scholar", links.scholar],
      ["ORCID", links.orcid],
      ["LinkedIn", links.linkedin],
      ["CV", links.cv]
    ];
    definitions.forEach(([label, url]) => {
      const link = document.createElement("a");
      if (!configureExternalLink(link, url)) return;
      link.textContent = label;
      container.append(link);
    });
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("BibTeX 已复制");
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
      showToast("BibTeX 已复制");
    }
  }

  function editorField(label, path, options) {
    const config = options || {};
    const wrapper = document.createElement("label");
    wrapper.className = "editor-field";
    const labelRow = document.createElement("span");
    labelRow.append(document.createTextNode(label));
    if (config.hint) {
      const hint = document.createElement("small");
      hint.textContent = config.hint;
      labelRow.append(hint);
    }
    const control = config.multiline ? document.createElement("textarea") : document.createElement("input");
    if (!config.multiline) control.type = config.type || "text";
    if (config.placeholder) control.placeholder = config.placeholder;
    if (config.rows) control.rows = config.rows;
    control.value = getPath(draft, path) || "";
    control.dataset.bind = path;
    control.autocomplete = "off";
    wrapper.append(labelRow, control);
    return wrapper;
  }

  function fieldGrid() {
    const grid = document.createElement("div");
    grid.className = "field-grid";
    Array.from(arguments).forEach((field) => grid.append(field));
    return grid;
  }

  function groupTitle(text) {
    const title = document.createElement("h3");
    title.className = "editor-group-title";
    title.textContent = text;
    return title;
  }

  function divider() {
    const line = document.createElement("hr");
    line.className = "editor-divider";
    return line;
  }

  function mediaUpload(label, path, options) {
    const config = options || {};
    const section = document.createElement("div");
    const title = document.createElement("p");
    title.className = "editor-field";
    const titleText = document.createElement("span");
    titleText.textContent = label;
    title.append(titleText);

    const row = document.createElement("div");
    row.className = "media-upload-row";
    const preview = document.createElement("div");
    preview.className = "media-preview" + (config.wide ? " wide" : "");
    const currentUrl = safeUrl(getPath(draft, path), true);
    if (currentUrl) {
      const image = document.createElement("img");
      image.src = currentUrl;
      image.alt = "";
      preview.append(image);
    } else {
      preview.textContent = draft.profile.initials || initialsFromName(draft.profile.name);
    }

    const controls = document.createElement("div");
    controls.className = "upload-controls";
    const inputId = "media-" + path.replace(/\./g, "-");
    const input = document.createElement("input");
    input.id = inputId;
    input.type = "file";
    input.accept = "image/png,image/jpeg,image/webp";
    const uploadLabel = document.createElement("label");
    uploadLabel.className = "upload-label";
    uploadLabel.htmlFor = inputId;
    uploadLabel.append(icon("image-up"), document.createTextNode("选择图片"));
    const clear = document.createElement("button");
    clear.type = "button";
    clear.className = "icon-text-button";
    clear.append(icon("trash-2"), document.createTextNode("清除"));
    clear.disabled = !currentUrl;

    input.addEventListener("change", async () => {
      const file = input.files && input.files[0];
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        showToast("请选择图片文件");
        return;
      }
      try {
        showToast("正在处理图片…");
        const dataUrl = await resizeImage(file, config.maxWidth || 1000, config.quality || 0.86);
        setPath(draft, path, dataUrl);
        applyContent(draft);
        renderProfileFields();
        showToast("图片已加入预览");
      } catch (error) {
        showToast("图片处理失败，请换一张图片重试");
      }
    });

    clear.addEventListener("click", () => {
      setPath(draft, path, config.fallback || "");
      applyContent(draft);
      renderProfileFields();
      showToast("图片已清除");
    });

    controls.append(input, uploadLabel, clear);
    row.append(preview, controls);
    section.append(title, row);
    return section;
  }

  function resizeImage(file, maxDimension, quality) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      const objectUrl = URL.createObjectURL(file);
      image.onload = () => {
        const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
        const width = Math.max(1, Math.round(image.naturalWidth * scale));
        const height = Math.max(1, Math.round(image.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.fillStyle = "#faf9fb";
        context.fillRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        URL.revokeObjectURL(objectUrl);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      image.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("Unable to read image"));
      };
      image.src = objectUrl;
    });
  }

  function renderProfileFields() {
    elements.profileFields.replaceChildren();
    elements.profileFields.append(
      groupTitle("个人资料"),
      fieldGrid(
        editorField("英文姓名", "profile.name", { placeholder: "Your Name" }),
        editorField("中文姓名", "profile.nameZh", { placeholder: "你的名字" })
      ),
      fieldGrid(
        editorField("头像缩写", "profile.initials", { placeholder: "YN", hint: "最多 3 字符" }),
        editorField("所在地", "profile.location", { placeholder: "City, Country" })
      ),
      editorField("身份 / 研究方向", "profile.role", { placeholder: "Researcher · Educator · Creator" }),
      editorField("院系与学校", "profile.institution", { placeholder: "Department · University" }),
      editorField("个人简介", "profile.bio", { multiline: true, rows: 4 }),
      editorField("邮箱", "profile.email", { type: "email", placeholder: "name@university.edu" }),
      mediaUpload("个人头像", "profile.avatar", { maxWidth: 900, quality: 0.88 }),
      mediaUpload("首屏背景", "profile.heroImage", { maxWidth: 1800, quality: 0.82, wide: true, fallback: "assets/campus.jpg" }),
      divider(),
      groupTitle("版块标题"),
      fieldGrid(
        editorField("教育经历标题", "sections.educationTitle"),
        editorField("Papers 标题", "sections.papersTitle")
      ),
      editorField("教育经历说明", "sections.educationIntro"),
      editorField("Papers 说明", "sections.papersIntro"),
      editorField("Other Works 标题", "sections.worksTitle"),
      editorField("Other Works 说明", "sections.worksIntro"),
      divider(),
      groupTitle("联系版块"),
      editorField("联系标题", "sections.contactTitle"),
      editorField("联系说明", "sections.contactText", { multiline: true, rows: 3 })
    );
    refreshIcons(elements.profileFields);
  }

  function repeaterToolbar(label, arrayName, index, rerender) {
    const toolbar = document.createElement("div");
    toolbar.className = "repeater-toolbar";
    const title = document.createElement("p");
    title.className = "repeater-label";
    title.textContent = label;
    const actions = document.createElement("div");
    actions.className = "repeater-actions";

    const up = actionButton("arrow-up", "上移", index === 0, () => {
      swap(draft[arrayName], index, index - 1);
      rerender();
    });
    const down = actionButton("arrow-down", "下移", index === draft[arrayName].length - 1, () => {
      swap(draft[arrayName], index, index + 1);
      rerender();
    });
    const remove = actionButton("trash-2", "删除", false, () => {
      draft[arrayName].splice(index, 1);
      applyContent(draft);
      rerender();
    });
    remove.classList.add("danger-button");
    actions.append(up, down, remove);
    toolbar.append(title, actions);
    return toolbar;
  }

  function actionButton(iconName, label, disabled, handler) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "icon-button";
    button.disabled = disabled;
    button.setAttribute("aria-label", label);
    button.title = label;
    button.append(icon(iconName));
    button.addEventListener("click", handler);
    return button;
  }

  function swap(array, first, second) {
    if (second < 0 || second >= array.length) return;
    const value = array[first];
    array[first] = array[second];
    array[second] = value;
    applyContent(draft);
  }

  function renderEducationFields() {
    elements.educationFields.replaceChildren();
    draft.education.forEach((item, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "repeater-item";
      wrapper.append(
        repeaterToolbar("教育经历 " + (index + 1), "education", index, renderEducationFields),
        fieldGrid(
          editorField("时间", "education." + index + ".period", { placeholder: "2023 — Present" }),
          editorField("地点", "education." + index + ".location", { placeholder: "City, Country" })
        ),
        editorField("学位", "education." + index + ".degree"),
        editorField("学校 / 机构", "education." + index + ".institution"),
        editorField("补充信息", "education." + index + ".description", { multiline: true, rows: 3 })
      );
      elements.educationFields.append(wrapper);
    });
    refreshIcons(elements.educationFields);
  }

  function renderPaperFields() {
    elements.paperFields.replaceChildren();
    draft.papers.forEach((paper, index) => {
      const path = "papers." + index + ".";
      const wrapper = document.createElement("div");
      wrapper.className = "repeater-item";
      wrapper.append(
        repeaterToolbar("论文 " + (index + 1), "papers", index, renderPaperFields),
        editorField("题目", path + "title"),
        editorField("作者", path + "authors", { hint: "按论文署名顺序" }),
        fieldGrid(
          editorField("期刊 / 会议", path + "venue"),
          editorField("年份", path + "year")
        ),
        fieldGrid(
          editorField("状态", path + "status", { placeholder: "Published / Preprint / Under review" }),
          editorField("卷号", path + "volume")
        ),
        fieldGrid(
          editorField("期号", path + "issue"),
          editorField("页码", path + "pages")
        ),
        editorField("DOI 链接", path + "doiUrl", { type: "url", placeholder: "https://doi.org/..." }),
        editorField("PDF 链接", path + "pdfUrl", { type: "url" }),
        editorField("代码链接", path + "codeUrl", { type: "url" }),
        editorField("项目页链接", path + "projectUrl", { type: "url" }),
        editorField("摘要 / 贡献说明", path + "abstract", { multiline: true, rows: 4 }),
        editorField("BibTeX", path + "bibtex", { multiline: true, rows: 5 })
      );
      elements.paperFields.append(wrapper);
    });
    refreshIcons(elements.paperFields);
  }

  function renderWorkFields() {
    elements.workFields.replaceChildren();
    draft.works.forEach((work, index) => {
      const path = "works." + index + ".";
      const wrapper = document.createElement("div");
      wrapper.className = "repeater-item";
      wrapper.append(
        repeaterToolbar("作品 " + (index + 1), "works", index, renderWorkFields),
        fieldGrid(
          editorField("类型", path + "type", { placeholder: "Project / Talk / Teaching" }),
          editorField("年份", path + "year")
        ),
        editorField("标题", path + "title"),
        editorField("说明", path + "description", { multiline: true, rows: 4 }),
        fieldGrid(
          editorField("链接文字", path + "linkLabel", { placeholder: "View project" }),
          editorField("链接 URL", path + "linkUrl", { type: "url" })
        )
      );
      elements.workFields.append(wrapper);
    });
    refreshIcons(elements.workFields);
  }

  function renderLinkFields() {
    const container = document.getElementById("link-fields");
    container.replaceChildren(
      groupTitle("学术与社交链接"),
      editorField("GitHub", "links.github", { type: "url", placeholder: "https://github.com/..." }),
      editorField("Google Scholar", "links.scholar", { type: "url" }),
      editorField("ORCID", "links.orcid", { type: "url", placeholder: "https://orcid.org/..." }),
      editorField("LinkedIn", "links.linkedin", { type: "url" }),
      editorField("CV / 简历", "links.cv", { type: "url", hint: "可填写仓库中的 PDF 相对路径" })
    );
  }

  function renderEditor() {
    renderProfileFields();
    renderEducationFields();
    renderPaperFields();
    renderWorkFields();
    renderLinkFields();
  }

  function selectEditorTab(tabName) {
    document.querySelectorAll(".editor-tab").forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.tab === tabName);
    });
    document.querySelectorAll(".editor-panel").forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.panel === tabName);
    });
    elements.editorForm.scrollTop = 0;
  }

  function openEditor(tabName) {
    previousFocus = document.activeElement;
    draft = clone(content);
    renderEditor();
    selectEditorTab(tabName || "profile");
    elements.editor.hidden = false;
    elements.editorBackdrop.hidden = false;
    document.body.classList.add("editor-open");
    document.getElementById("close-editor").focus();
  }

  function closeEditor(keepPreview) {
    elements.editor.hidden = true;
    elements.editorBackdrop.hidden = true;
    document.body.classList.remove("editor-open");
    if (!keepPreview) applyContent(content);
    draft = null;
    if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  }

  function saveDraft() {
    content = normalizeContent(draft);
    window.SITE_CONTENT = clone(content);
    let savedLocally = true;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (error) {
      savedLocally = false;
    }
    applyContent(content);
    closeEditor(true);
    showToast(savedLocally ? "预览已保存到当前浏览器" : "预览已更新；图片较大，无法写入浏览器存储");
  }

  function schedulePreview() {
    if (previewFrame) cancelAnimationFrame(previewFrame);
    previewFrame = requestAnimationFrame(() => {
      previewFrame = null;
      applyContent(draft);
    });
  }

  function addEducation() {
    draft.education.push({ period: "", degree: "", institution: "", location: "", description: "" });
    renderEducationFields();
    applyContent(draft);
  }

  function addPaper() {
    draft.papers.push({
      title: "", authors: "", venue: "", year: "", status: "", volume: "", issue: "", pages: "",
      doiUrl: "", pdfUrl: "", codeUrl: "", projectUrl: "", abstract: "", bibtex: ""
    });
    renderPaperFields();
    applyContent(draft);
  }

  function addWork() {
    draft.works.push({ type: "", title: "", year: "", description: "", linkLabel: "", linkUrl: "" });
    renderWorkFields();
    applyContent(draft);
  }

  function exportContent() {
    const exportData = normalizeContent(draft || content);
    const source = "window.SITE_CONTENT = " + JSON.stringify(exportData, null, 2) + ";\n";
    const blob = new Blob([source], { type: "text/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "content.js";
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("content.js 已导出");
  }

  function parseImportedContent(text) {
    let source = String(text || "").replace(/^\uFEFF/, "").trim();
    if (/^window\.SITE_CONTENT\s*=/.test(source)) {
      source = source.replace(/^window\.SITE_CONTENT\s*=\s*/, "").replace(/;\s*$/, "");
    }
    return normalizeContent(JSON.parse(source));
  }

  function importContent(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        draft = parseImportedContent(reader.result);
        applyContent(draft);
        renderEditor();
        showToast("内容已导入，请检查后保存");
      } catch (error) {
        showToast("无法读取该文件，请选择本站导出的 content.js 或 JSON 文件");
      }
    };
    reader.onerror = () => showToast("文件读取失败");
    reader.readAsText(file, "utf-8");
  }

  function resetContent() {
    if (!window.confirm("恢复示例内容？当前浏览器中的编辑内容将被替换。")) return;
    draft = clone(defaultContent);
    localStorage.removeItem(STORAGE_KEY);
    applyContent(draft);
    renderEditor();
    showToast("已恢复示例内容，保存后生效");
  }

  function showToast(message) {
    clearTimeout(toastTimer);
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
    document.getElementById("hero-media").style.setProperty("--hero-shift", shift + "px");
  }

  function setMenuState(isOpen) {
    elements.header.classList.toggle("menu-open", isOpen);
    elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
    elements.menuToggle.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
    elements.menuToggle.replaceChildren(icon(isOpen ? "x" : "menu"));
    refreshIcons(elements.menuToggle);
  }

  document.getElementById("open-editor").addEventListener("click", () => openEditor("profile"));
  document.getElementById("portrait-edit").addEventListener("click", () => openEditor("profile"));
  document.getElementById("close-editor").addEventListener("click", () => closeEditor(false));
  elements.editorBackdrop.addEventListener("click", () => closeEditor(false));
  document.getElementById("save-content").addEventListener("click", saveDraft);
  document.getElementById("add-education").addEventListener("click", addEducation);
  document.getElementById("add-paper").addEventListener("click", addPaper);
  document.getElementById("add-work").addEventListener("click", addWork);
  document.getElementById("export-content").addEventListener("click", exportContent);
  document.getElementById("import-content").addEventListener("click", () => document.getElementById("content-file-input").click());
  document.getElementById("reset-content").addEventListener("click", resetContent);
  document.getElementById("content-file-input").addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) importContent(file);
    event.target.value = "";
  });

  document.querySelectorAll(".editor-tab").forEach((tab) => {
    tab.addEventListener("click", () => selectEditorTab(tab.dataset.tab));
  });

  elements.editorForm.addEventListener("input", (event) => {
    const path = event.target.dataset.bind;
    if (!path || !draft) return;
    setPath(draft, path, event.target.value);
    schedulePreview();
  });

  elements.editor.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeEditor(false);
    if (event.key !== "Tab") return;
    const focusable = Array.from(elements.editor.querySelectorAll("button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [href]"))
      .filter((node) => !node.hidden && node.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  elements.menuToggle.addEventListener("click", () => {
    setMenuState(!elements.header.classList.contains("menu-open"));
  });

  elements.primaryNav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    setMenuState(false);
  });

  window.addEventListener("scroll", () => requestAnimationFrame(updateScrollState), { passive: true });
  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY || !event.newValue || !elements.editor.hidden) return;
    try {
      content = normalizeContent(JSON.parse(event.newValue));
      applyContent(content);
    } catch (error) {
      // Ignore malformed storage updates from another tab.
    }
  });

  document.getElementById("copyright-year").textContent = new Date().getFullYear();
  applyContent(content);
  initReveal();
  updateScrollState();
})();
