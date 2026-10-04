# Ega Guntara — portfolio

Static site. No build step: the files here are served as they are.

## Publish

From your local clone of `Guntara11.github.io`:

```bash
# 1. remove the old site (keeps .git)
find . -maxdepth 1 ! -name . ! -name .git -exec rm -rf {} +
# 2. copy everything from this folder in, then:
git add -A
git commit -m "New portfolio site"
git push origin master
```

Settings → Pages → Source must be **GitHub Actions**. The workflow in
`.github/workflows/deploy.yml` publishes the repository root on every push to `master`.

## Structure

- `index.html` — home: about, skills, journey, projects, contact
- `projects.html` — all 11 projects
- `projects/<slug>/index.html` — the seven write-ups, with their images beside them
- `assets/Ega-Guntara-CV.pdf` — CV linked from the contact section

## Adding or replacing a photo

Every image lives in the folder of the page that uses it. Replace the file, keep the
name, commit. Pages still showing a dashed "photo pending" box need a real photo —
drop it into that project folder and reference it in place of the box.
