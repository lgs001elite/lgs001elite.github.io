# lgs001elite.github.io

Personal academic website of **Gaosheng Liu (刘高生)** — <https://lgs001elite.github.io>

The site is built by GitHub Pages (Jekyll) directly from the **`liu`** branch.
Every push to `liu` rebuilds and publishes it within a minute or two; nothing else needs to run.
You can make all routine updates in the GitHub web editor.

## Where things live

| What you want to change | File |
|---|---|
| Bio, quote, "job market" note | `_pages/Main.md` |
| News items | `_news/` — one file per item |
| Selected publications | `_data/publications.yml` |
| Name, contact details, profile links, CV file name | `_config.yml` |
| CV (PDF) | `assets/pdf/resume_lgs.pdf` |
| Profile photo | `assets/img/gaosheng9527.jpg` |
| Colors | `_sass/_variables.scss` |
| Page structure (rarely) | `_layouts/`, `_includes/` |
| Full BibTeX of all papers (reference only, not shown on the site) | `_bibliography/papers.bib` |

## Common tasks

### Add a news item
Create a file in `_news/` named `YYYY-MM-DD-short-topic.md`, for example
`_news/2026-12-01-best-paper.md`:

```markdown
---
date: 2026-12-01
---
Paper [Title of the paper](https://doi.org/...) accepted by **Conference 2027**.
```

The newest 6 items are shown; older ones fold under "Show all news"
(change `news_limit` in `_config.yml`). Links to other sites open in a new tab automatically.

### Add a selected publication
Copy an entry in `_data/publications.yml` and edit it. Entries appear in the order listed,
your name is bolded automatically, and `links` become small buttons (`DOI`, `arXiv`, `PDF`, `Code`, …).
To link a PDF hosted on the site, put it in `assets/pdf/` and use `PDF: /assets/pdf/file.pdf`.

### Update the CV
Replace `assets/pdf/resume_lgs.pdf` with a file of the same name.
(If you use a new file name, update `cv_file` in `_config.yml`.)

### Change contact details
Edit the `email`, profile IDs, and `contact:` block in `_config.yml`. An empty value hides that line or icon.

### Add another page (e.g. Projects)
Create `_pages/projects.md`:

```markdown
---
layout: page
title: Projects
permalink: /projects/
nav: true        # show it in the top menu
nav_order: 2
---
Content in Markdown...
```

## Preview locally (optional)

Requires Ruby. From the repository folder:

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>. The `Gemfile` uses the `github-pages` gem, so the local
build matches what GitHub runs.

## Credits

Based on the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme (MIT License, see `LICENSE`).
