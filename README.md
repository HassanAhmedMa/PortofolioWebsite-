# Hassan Ahmed Portfolio

First iteration of a scalable Computer Science portfolio website. The site is static, data-driven, and designed so you can keep adding projects, screenshots, videos, collaborators, and resume updates without redesigning the whole thing.

## Files that matter most

- `index.html`: landing page
- `project.html`: reusable project detail page
- `styles.css`: full shared design system and animations
- `site-data.js`: all editable content in one place
- `assets/profile/`: your headshot goes here
- `assets/projects/`: each project gets its own folder
- `assets/resume/`: your PDF resume lives here

## How to update your personal info

Open `site-data.js` and edit the `profile` object.

- `photo`: change this path after adding your real photo
- `contacts`: update your phone number and email
- `links`: update resume, LinkedIn, and GitHub if needed
- `intro` and `passions`: tune your personal summary

## How to replace your profile photo

1. Put your image inside `assets/profile/`
2. Name it something like `hassan-photo.jpg`
3. In `site-data.js`, change:

```js
photo: "assets/profile/profile-placeholder.svg"
```

to:

```js
photo: "assets/profile/hassan-photo.jpg"
```

## How to upload a new project

All projects are controlled from the `projects` array in `site-data.js`.

1. Create a new folder inside `assets/projects/`
2. Use a simple slug, for example `assets/projects/my-new-app/`
3. Put your images or videos there
4. Duplicate one project object inside `site-data.js`
5. Update the fields

Starter template:

```js
{
  slug: "my-new-app",
  title: "My New App",
  subtitle: "One-line project subtitle.",
  summary: "Short card description for the landing page.",
  year: "2026",
  projectType: "Personal Project",
  role: "Software Engineer",
  deliverable: "Web application",
  outcome: "What the final result achieved.",
  problem: "What problem you solved.",
  approach: "How you built it.",
  languages: ["JavaScript"],
  libraries: ["React"],
  skillsLearned: ["Routing", "Responsive UI"],
  contributors: [
    {
      name: "Teammate Name",
      url: "https://www.linkedin.com/in/teammate",
      referenceLabel: "LinkedIn"
    },
    {
      name: "Another Collaborator",
      url: "https://collaborator-portfolio.example",
      referenceLabel: "Portfolio"
    }
  ],
  media: [
    {
      type: "image",
      src: "assets/projects/my-new-app/cover.jpg",
      alt: "Cover image for My New App"
    },
    {
      type: "video",
      src: "assets/projects/my-new-app/demo.mp4",
      poster: "assets/projects/my-new-app/poster.jpg",
      alt: "Demo video for My New App"
    }
  ]
}
```

## How media works

- If you have one image, keep one object in `media`
- If you have many screenshots, add more `image` objects
- If you have a demo video, add a `video` object
- If a project has no media yet, point it to `assets/projects/shared/project-placeholder.svg`

## How collaborators work

- If `contributors` has plain names, the detail page shows them as text
- If `contributors` uses objects with `name`, `url`, and `referenceLabel`, the collaborator becomes clickable
- If `contributors` is empty (`[]`), the page automatically shows `Personal project`

## How to update your resume PDF

1. Replace `assets/resume/hassan-ahmed-resume.pdf` with your real resume
2. Keep the same filename, or change the path inside `site-data.js`

## How to open the site

Double-click `index.html` to open the portfolio directly in your browser.

If you already use a local static server tool, you can also serve this folder that way, but this first iteration does not require one.
