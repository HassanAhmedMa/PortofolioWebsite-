(function () {
  const data = window.PORTFOLIO_DATA;

  if (!data) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = data.projects.find((entry) => entry.slug === slug) || data.projects[0];
  const root = document.getElementById("project-root");
  const footerCopy = document.getElementById("footer-copy");
  const footerLinks = document.getElementById("footer-links");
  const currentMedia = { index: 0 };

  document.title = `${project.title} | ${data.profile.name}`;

  root.innerHTML = `
    <section class="project-shell">
      <div class="project-headline reveal">
        <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 24px; flex-wrap: wrap;">
          <a class="ghost-link" href="index.html#projects" style="margin-top: 0;">Back to portfolio</a>
          ${project.projectUrl ? `<a class="button-link" href="${project.projectUrl}" target="_blank" rel="noreferrer" style="min-height: 48px; margin-top: 0; display: inline-flex; align-items: center; justify-content: center; padding: 0 24px;">${project.projectUrlLabel || "Visit Live Page"}</a>` : ""}
        </div>
        <div>
          <p class="eyebrow">${project.projectType}</p>
          <h1>${project.title}</h1>
          <p class="hero-lead">${project.subtitle}</p>
          <div class="hero-meta">
            <span class="project-pill">${project.role}</span>
            <span class="project-pill">${project.deliverable}</span>
            <span class="project-pill">${project.year}</span>
          </div>
        </div>
      </div>

      <div class="project-overview">
        <div class="reveal">
          <div class="gallery-main" id="gallery-main"></div>
          <div class="thumbnail-strip" id="thumbnail-strip"></div>
        </div>
        <div class="detail-stack reveal">
          <article class="detail-card">
            <h3>Project Summary</h3>
            <div class="detail-body">
              <div>
                <strong>Outcome</strong>
                <p>${project.outcome}</p>
              </div>
              <div>
                <strong>Problem</strong>
                <p>${project.problem}</p>
              </div>
              <div>
                <strong>Approach</strong>
                <p>${project.approach}</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <section class="detail-grid reveal">
        <article class="detail-card">
          <h3>Stack</h3>
          <div class="detail-body">
            ${renderStackGroup("Programming Languages", project.languages)}
            ${renderStackGroup("Libraries / Tools", project.libraries)}
            ${renderStackGroup("Skills Learned", project.skillsLearned)}
          </div>
        </article>
        <article class="detail-card">
          <h3>Contributors</h3>
          ${renderContributors(project.contributors)}
        </article>
      </section>

      <section class="detail-card reveal">
        <h3>More Projects</h3>
        <div class="project-nav">
          ${data.projects
            .filter((entry) => entry.slug !== project.slug)
            .map(
              (entry) =>
                `<a class="chip-link" href="project.html?slug=${encodeURIComponent(entry.slug)}">${entry.title}</a>`
            )
            .join("")}
        </div>
      </section>
    </section>
  `;

  footerCopy.textContent = `© ${new Date().getFullYear()} ${data.profile.name}. Consistent design system across landing and project pages.`;
  footerLinks.innerHTML = data.profile.links
    .map(
      ([label, url]) =>
        `<a class="chip-link" href="${url}" target="_blank" rel="noreferrer">${label}</a>`
    )
    .join("");

  renderGallery();
  revealOnScroll();

  function renderGallery() {
    const galleryMain = document.getElementById("gallery-main");
    const thumbnailStrip = document.getElementById("thumbnail-strip");
    const alternateMedia = project.media.filter((_, index) => index !== currentMedia.index);
    const activeMedia =
      project.media[currentMedia.index] || {
        type: "image",
        src: "assets/projects/shared/project-placeholder.svg",
        alt: "Project placeholder media"
      };

    galleryMain.innerHTML = renderMedia(activeMedia, true);

    thumbnailStrip.innerHTML = alternateMedia
      .map(
        (item) => `
          <button class="thumbnail-button" type="button" data-index="${project.media.indexOf(item)}">
            ${renderMedia(item, false)}
            <span class="thumb-label">${item.type === "video" ? "Video" : `Media ${project.media.indexOf(item) + 1}`}</span>
          </button>
        `
      )
      .join("");

    thumbnailStrip.querySelectorAll("[data-index]").forEach((button) => {
      button.addEventListener("click", () => {
        currentMedia.index = Number(button.getAttribute("data-index"));
        renderGallery();
      });
    });
  }

  function renderMedia(media, autoplay) {
    if (media.type === "video") {
      return `<video ${autoplay ? "autoplay muted loop playsinline controls" : "muted playsinline"} src="${media.src}" poster="${media.poster || ""}"></video>`;
    }

    return `<img src="${media.src}" alt="${media.alt || "Project media"}" />`;
  }

  function renderStackGroup(label, items) {
    if (!items || !items.length) {
      return `<div class="stack-group"><strong>${label}</strong><span>Not specified yet.</span></div>`;
    }

    return `
      <div class="stack-group">
        <strong>${label}</strong>
        <div class="skill-tags">
          ${items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
        </div>
      </div>
    `;
  }

  function renderContributors(contributors) {
    if (!contributors.length) {
      return `
        <div class="detail-body">
          <p>This page is currently marked as a personal project.</p>

        </div>
      `;
    }

    return `
      <ul class="contributor-list">
        ${contributors
          .map((person) => {
            if (typeof person === "string") {
              return `<li>${person}</li>`;
            }

            const label = person.referenceLabel || "Open reference";
            if (!person.url) {
              return `<li>${person.name || "Unnamed contributor"}</li>`;
            }

            return `
              <li>
                <span>${person.name || "Unnamed contributor"}</span>
                <a class="contributor-link" href="${person.url}" target="_blank" rel="noreferrer">${label}</a>
              </li>
            `;
          })
          .join("")}
      </ul>
    `;
  }

  function revealOnScroll() {
    const revealItems = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  }
})();
