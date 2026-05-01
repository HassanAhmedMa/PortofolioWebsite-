(function () {
  const data = window.PORTFOLIO_DATA;

  if (!data) {
    return;
  }

  const heroContent = document.getElementById("hero-content");
  const heroActions = document.getElementById("hero-actions");
  const heroHighlights = document.getElementById("hero-highlights");
  const aboutPanel = document.getElementById("about-panel");
  const quickFacts = document.getElementById("quick-facts");
  const projectGrid = document.getElementById("project-grid");
  const skillsTrack = document.getElementById("skills-track");
  const skillsGrid = document.getElementById("skills-grid");
  const contactCard = document.getElementById("contact-card");
  const linksCard = document.getElementById("links-card");
  const footerCopy = document.getElementById("footer-copy");
  const footerLinks = document.getElementById("footer-links");
  const profilePhoto = document.getElementById("profile-photo");

  const { profile, skillCategories, projects } = data;

  document.title = `${profile.name} | ${profile.role} Portfolio`;
  profilePhoto.src = profile.photo;

  heroContent.innerHTML = `
    <h1>${profile.name}<span class="headline-accent">${profile.role}</span></h1>
    <p class="hero-lead">${profile.headline}</p>
    <p class="hero-lead">${profile.subheadline}</p>
    <div class="hero-meta">
      <span class="meta-pill">${profile.location}</span>
      <span class="meta-pill">${projects.length} showcased projects and counting</span>
    </div>
  `;

  heroActions.innerHTML = `
    <a class="button-link" href="#projects">Explore Projects</a>
    <a class="ghost-link" href="${profile.links[0][1]}" target="_blank" rel="noreferrer">Open Resume PDF</a>
  `;

  heroHighlights.innerHTML = `
    <h3>At a glance</h3>
    <div class="stat-list">
      ${profile.heroHighlights
        .map(
          ({ label, value }) =>
            `<div class="stat-row"><strong>${label}</strong><span>${value}</span></div>`
        )
        .join("")}
    </div>
  `;

  aboutPanel.innerHTML = `
    <h3>About Me</h3>
    <p>${profile.intro}</p>
    <p>${profile.passions}</p>
    <span class="inline-note">This portfolio is intentionally focused on Computer Science work only.</span>
  `;

  quickFacts.innerHTML = `
    <h3>Quick Facts</h3>
    <ul class="facts-list">
      ${profile.quickFacts
        .map(([label, value]) => `<li><strong>${label}</strong><span>${value}</span></li>`)
        .join("")}
    </ul>
  `;

  projectGrid.innerHTML = projects
    .map((project) => {
      const preview = project.media[0];
      return `
        <article class="project-card reveal">
          <div class="project-card-media">
            ${renderMedia(preview, false)}
          </div>
          <div class="project-card-body">
            <div class="project-card-top">
              <div>
                <div class="project-card-tags">
                  <span class="project-tag">${project.projectType}</span>
                  <span class="project-tag">${project.deliverable}</span>
                </div>
                <h3>${project.title}</h3>
              </div>
            </div>
            <p class="project-summary">${project.summary}</p>
            <div class="project-meta">
              <span>${project.role}</span>
              <span>${project.year}</span>
              <span>${project.contributors.length ? `${project.contributors.length} collaborator${project.contributors.length > 1 ? "s" : ""}` : "Personal build"}</span>
            </div>
            <div class="project-card-actions">
              <a class="button-link" href="project.html?slug=${encodeURIComponent(project.slug)}">View Project</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  const skillItems = skillCategories.flatMap((category) => category.items);
  const marqueeItems = [...skillItems, ...skillItems]
    .map((item) => `<span class="skill-tag">${item}</span>`)
    .join("");

  skillsTrack.innerHTML = marqueeItems;

  skillsGrid.innerHTML = skillCategories
    .map(
      (category) => `
        <article class="skill-card reveal">
          <h3>${category.title}</h3>
          <div class="skill-tags">
            ${category.items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  contactCard.innerHTML = `
    <h3>Contact Details</h3>
    <div class="contact-list">
      ${profile.contacts
        .map(
          ([label, value]) => `
            <div class="contact-item">
              <strong class="contact-label">${label}</strong>
              <span>${value}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  linksCard.innerHTML = `
    <h3>Resume + Links</h3>
    <div class="links-list">
      ${profile.links
        .map(
          ([label, url]) => `
            <div class="links-item">
              <strong class="link-label">${label}</strong>
              <a href="${url}" target="_blank" rel="noreferrer">${formatLinkLabel(url)}</a>
            </div>
          `
        )
        .join("")}
    </div>
    <div class="hero-actions" style="margin-top: 18px;">
      <a class="button-link" href="${profile.links[0][1]}" target="_blank" rel="noreferrer">Download Resume</a>
      <a class="ghost-link" href="${profile.links[1][1]}" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
    </div>
  `;

  footerCopy.textContent = `© ${new Date().getFullYear()} ${profile.name}. Built to showcase software engineering work, project growth, and collaboration.`;
  footerLinks.innerHTML = profile.links
    .map(
      ([label, url]) =>
        `<a class="chip-link" href="${url}" target="_blank" rel="noreferrer">${label}</a>`
    )
    .join("");

  revealOnScroll();

  function renderMedia(media, autoplay) {
    if (!media) {
      return `<img src="assets/projects/shared/project-placeholder.svg" alt="Project placeholder media" />`;
    }

    if (media.type === "video") {
      return `<video ${autoplay ? "autoplay muted loop playsinline controls" : "muted playsinline"} src="${media.src}" poster="${media.poster || ""}"></video>`;
    }

    return `<img src="${media.src}" alt="${media.alt || "Project media"}" />`;
  }

  function formatLinkLabel(url) {
    if (url.endsWith(".pdf")) {
      return "Open PDF";
    }

    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
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
