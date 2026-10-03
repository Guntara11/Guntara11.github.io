# Portfolio — Ega Guntara

Project write-ups, built with [Eleventy](https://www.11ty.dev/) and published free on GitHub Pages.
Articles are plain Markdown; images sit next to the article that uses them.

---

## Publish it

This is the `Guntara11.github.io` repository, so the site will be live at
**https://guntara11.github.io** — no path prefix needed.

1. **Commit and push.** The old template site is replaced; it stays in the git history.

   ```bash
   git add -A
   git commit -m "Replace template site with project write-ups"
   git push origin master
   ```

2. **Switch Pages to Actions.** Repo → **Settings → Pages → Build and deployment → Source:
   GitHub Actions**. The old site was served straight from the branch; the new one is built first,
   so this setting has to change or nothing will update.

3. Watch the **Actions** tab. The first build takes about a minute.

The workflow (`.github/workflows/deploy.yml`) runs on every push to `master`.

---

## Work on it locally

```bash
npm install     # once
npm start       # http://localhost:8080, reloads as you edit
npm run build   # writes _site/
```

Node 20 or newer.

---

## Add a new project

1. Create `src/projects/<slug>/index.md`.
2. Copy its images into the same folder and reference them by filename: `![caption](my-photo.png)`.
3. Give it this front matter:

```yaml
---
layout: project.njk
tags: project
title: "The headline — what the piece is about"
subtitle: "Project name, Version 1 — the one-line technical description"
order: 8                      # position in the list on the home page
year: "2026"
role: "Project lead"
client: "Personal project"
stack:
  - "ESP32"
  - "MQTT"
problem: "One sentence."
built: "One sentence."
result: "One sentence, with a number in it."
trace: "tank"                 # any key from src/_data/traces.json
resultShort: "The line shown under the title on the home page."
---
```

Commit, push, and it's live. Nothing else to configure.

The little line drawing beside each project on the home page comes from `trace`. The shapes live in
`src/_data/traces.json` — reuse one, or add a new key with an SVG path drawn in a 220×48 box.

---

## Replace the placeholder images

Twenty-nine figures are generated placeholders. Each says what it should show and names a file like
`placeholder-fig-2.png`.

To replace one: put the real image in the same folder **with the same filename** and push. Nothing
else changes — the caption and layout stay as they are.

`notes/placeholder-index.md` (in the articles bundle) lists all of them in one table.

Before you upload screenshots of the work tools, check them for: keys, ICCIDs, IMSIs, MSISDNs, EIDs,
internal hostnames or URLs, service accounts, and customer data.

---

## Use your own domain (optional)

1. Buy the domain, then add a `CNAME` file to `src/` containing just the domain, e.g. `egaguntara.dev`.
2. At your registrar, point an `A` record at GitHub's Pages IPs, or a `CNAME` record for `www` at
   `guntara11.github.io`.
3. Repo → Settings → Pages → Custom domain → enter it, then tick **Enforce HTTPS**.

---

## What's where

```
src/
  index.njk              home page — hero and the project list
  about.md               about page
  _includes/base.njk     page shell: head, nav, footer
  _includes/project.njk  project page: title, spec panel, article, prev/next
  _data/site.json        name, role, email, links
  _data/traces.json      the line drawings on the home page
  assets/style.css       all styling, light and dark
  assets/ega-guntara-cv.pdf
  projects/<slug>/       one folder per write-up: index.md + its images
```
