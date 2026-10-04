# Ega Guntara — portfolio

Static site: the files here are served exactly as they are, no build step.

## Publish

From your local clone of `Guntara11.github.io`:

```bash
find . -maxdepth 1 ! -name . ! -name .git -exec rm -rf {} +   # clear, keep .git
# copy everything from this folder in, then:
git add -A
git commit -m "Portfolio site"
git push origin master
```

Settings → Pages → Source must be **GitHub Actions**.

## Structure

- `index.html` — about, skills, journey, projects, contact
- `projects.html` — all 11 projects
- `projects/<slug>/index.html` — the seven write-ups, images beside them
- `assets/Ega-Guntara-CV.pdf` — linked from the contact section

## Photos

Each card image sits inside the frame the design defines, cropped to fill it.
Photos use `object-fit: cover`; diagrams and screenshots use `contain` on white so
nothing important is cut off. To swap one, replace the file and keep the filename.
