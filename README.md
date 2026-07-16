# how to talk to robots

Plain-English answers to "how do I actually use AI?" — a free, open-source AI
literacy resource built by educators and engineers.

**Live site:** https://www.talktorobots.org

## Stack

- [Astro 5](https://astro.build) — static site, zero JS by default
- [Pagefind](https://pagefind.app) — client-side search, indexed at build time
- GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- Fonts self-hosted via Fontsource (Young Serif, Ubuntu, Ubuntu Mono)

## Develop

```bash
npm install
npm run dev       # localhost:4321 (search UI only works after a build)
npm run build     # builds site + Pagefind index into dist/
npm run preview   # serve dist/ locally — search works here
```

## Add a resource to the library

Every library entry is a markdown file in `src/content/library/`. Copy an
existing file and edit the frontmatter:

```yaml
---
title: "How do I use AI to …?"   # phrased as the question people ask
description: "One or two sentences for search results and the card."
topics: [planning, writing]       # freeform topic tags
domains: [teachers]               # teachers | parents | business | students | everyone
type: prompt                      # guide | prompt | framework | tool
prompt: |                         # optional: shown with a copy button
  Your copy-paste prompt here.
date: 2026-07-05
featured: false                   # true = eligible for the homepage
draft: false                      # true = hidden from the site
---

Body: when to use it, how to use it, what to watch out for. Keep it plain.
```

Open a pull request — that's it.

## Deploy notes

- `public/CNAME` holds the custom domain for GitHub Pages.
- Old Wix slugs (`/prompts`, `/socraticai`, `/blog`) redirect via
  `astro.config.mjs`.
- DNS cutover: point A records for the apex to GitHub Pages
  (185.199.108–111.153) and `www` CNAME to `thirdspaced.github.io`.
