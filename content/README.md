# Content Directory

Markdown content for each App, organized by App ID.

```
content/{appId}/{section}/{slug}.{lang}.md
```

## Sections

| Section   | Route                          | Purpose                        |
| --------- | ------------------------------ | ------------------------------ |
| `about`   | `/:lang/:appId/about/`         | Product / feature introduction |
| `blog`    | `/:lang/:appId/blog/`          | Blog posts                     |
| `terms`   | `/:lang/:appId/terms/`         | Terms of Service               |
| `privacy` | `/:lang/:appId/privacy/`       | Privacy Policy                 |

Terms and Privacy are **per-App** (App Store review requires each App to declare its own).

## App IDs

`work-hours-tracker`, `image-to-pdf`, `image-converter`, `money-tracker`, `cleanphoto`

Must match the `id` field in `src/data/apps.ts`.

## File naming

`{slug}.{lang}.md` — lowercase kebab-case slug, language code from `languages` in `src/data/apps.ts`.

```
content/work-hours-tracker/blog/overtime-calculation.en.md
content/work-hours-tracker/blog/overtime-calculation.zh.md
content/work-hours-tracker/terms/index.en.md
```

Single-document sections (`terms`, `privacy`) use the slug `index`.

## Front matter

```markdown
---
title: How to Calculate Overtime Pay
description: A practical guide to overtime rules across 18 countries.
date: 2026-09-01
lang: en
---

Body content starts here.
```

| Field         | Required | Notes                                     |
| ------------- | -------- | ----------------------------------------- |
| `title`       | yes      | Used as `<h1>` and `<title>`              |
| `description` | yes      | Used as `meta description` (150-160 chars)|
| `date`        | yes      | `YYYY-MM-DD`, drives sitemap `lastmod`    |
| `lang`        | yes      | Must match the filename language suffix   |

## Current status

Directories are placeholders. Routes exist and render a "coming soon" page marked
`noindex,follow`, and are excluded from `sitemap.xml`.

Once real content lands, see the `SECTIONS` constant and the `loadAppContent`
extension point in `scripts/prerender-seo.mjs` to switch a section to
`index,follow` and include it in the sitemap.
