(function () {
  "use strict";

  const content = window.SITE_CONTENT && typeof window.SITE_CONTENT === "object" ? window.SITE_CONTENT : {};
  const profile = content.profile && typeof content.profile === "object" ? content.profile : {};
  const sections = content.sections && typeof content.sections === "object" ? content.sections : {};
  const friends = Array.isArray(content.friends) ? content.friends : [];
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const primaryNav = document.getElementById("primary-nav");

  document.documentElement.dataset.pageMode = "public";

  function setText(id, value) {
    const node = document.getElementById(id);
    if (node) node.textContent = value || "";
  }

  function safeWebsiteUrl(value) {
    const url = String(value || "").trim();
    return /^https?:\/\//i.test(url) && !/[\r\n]/.test(url) ? url : "";
  }

  function safeAvatarUrl(value) {
    const url = String(value || "").trim();
    if (/^data:image\/(png|jpe?g|webp|gif);base64,/i.test(url)) return url;
    if (/^https?:\/\//i.test(url)) return url;
    if (/^(assets\/|\.\/|\.\.\/)/i.test(url) && !/[\r\n]/.test(url)) return url;
    return "";
  }

  function initials(name) {
    const pieces = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!pieces.length) return "FR";
    if (pieces.length === 1) return pieces[0].slice(0, 2).toUpperCase();
    return (pieces[0][0] + pieces[pieces.length - 1][0]).toUpperCase();
  }

  function domainLabel(url) {
    try {
      return new URL(url).hostname.replace(/^www\./i, "");
    } catch (error) {
      return "";
    }
  }

  function icon(name) {
    const node = document.createElement("i");
    node.setAttribute("data-lucide", name);
    node.setAttribute("aria-hidden", "true");
    return node;
  }

  function refreshIcons(root) {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons({ attrs: { "aria-hidden": "true" }, root: root || document });
    }
  }

  function friendEntry(friend, index) {
    const url = safeWebsiteUrl(friend.url);
    const entry = document.createElement(url ? "a" : "article");
    entry.className = "friend-card" + (url ? "" : " is-disabled");
    entry.style.setProperty("--friend-delay", Math.min(index * 65, 390) + "ms");
    if (url) {
      entry.href = url;
      entry.target = "_blank";
      entry.rel = "noopener noreferrer";
      entry.setAttribute("aria-label", "Visit " + (friend.name || domainLabel(url)));
    }

    const avatar = document.createElement("div");
    avatar.className = "friend-avatar";
    const avatarUrl = safeAvatarUrl(friend.avatar);
    if (avatarUrl) {
      const image = document.createElement("img");
      image.src = avatarUrl;
      image.alt = (friend.name || "Friend") + " avatar";
      image.loading = "lazy";
      avatar.append(image);
    } else {
      avatar.textContent = initials(friend.name);
      avatar.setAttribute("aria-hidden", "true");
    }

    const copy = document.createElement("div");
    copy.className = "friend-copy";
    const heading = document.createElement("div");
    heading.className = "friend-heading-row";
    const name = document.createElement("h2");
    name.textContent = friend.name || domainLabel(url) || "Friend";
    const domain = document.createElement("span");
    domain.className = "friend-domain";
    domain.textContent = domainLabel(url);
    heading.append(name);
    if (domain.textContent) heading.append(domain);
    copy.append(heading);

    if (friend.description) {
      const description = document.createElement("p");
      description.className = "friend-description";
      description.textContent = friend.description;
      copy.append(description);
    }

    const arrow = document.createElement("span");
    arrow.className = "friend-arrow";
    arrow.append(icon("arrow-up-right"));
    entry.append(avatar, copy, arrow);
    return entry;
  }

  function renderFriends() {
    const list = document.getElementById("friends-list");
    const visibleFriends = friends.filter((friend) => friend && (friend.name || friend.description || friend.url || friend.avatar));
    list.replaceChildren();
    if (!visibleFriends.length) {
      const empty = document.createElement("p");
      empty.className = "friends-empty";
      empty.textContent = "Friend links will appear here.";
      list.append(empty);
      return;
    }
    visibleFriends.forEach((friend, index) => list.append(friendEntry(friend, index)));
  }

  function setMenuState(isOpen) {
    header.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
    menuToggle.replaceChildren(icon(isOpen ? "x" : "menu"));
    refreshIcons(menuToggle);
  }

  const name = profile.name || "Keheng Zhu";
  setText("nav-name", name);
  setText("footer-name", name);
  setText("friends-title", sections.friendsTitle || "Friends");
  setText("friends-intro", sections.friendsIntro || "Personal websites and thoughtful corners of the web maintained by friends.");
  document.title = (sections.friendsTitle || "Friends") + " | " + name;
  document.getElementById("copyright-year").textContent = new Date().getFullYear();

  menuToggle.addEventListener("click", () => setMenuState(!header.classList.contains("menu-open")));
  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuState(false);
  });

  renderFriends();
  refreshIcons();
})();
