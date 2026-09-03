---
title: Folders and tags: organising a scannable library
description: Folders and tags: organising a scannable library
date: 2026-09-02
lang: en
slug: folders-vs-tags
---

## Folders and tags: organising a scannable library

The Documents list in Paper Scan supports both nested folders and multi-tags. The two models are not redundant: folders answer *where does this document live*, while tags answer *what is this document*. Used together, they make a library of several hundred documents findable without manual searching.

### Folder model

Folders form a tree. Each document lives in exactly one folder. Folders work best for dimensions that are stable, hierarchical and one-per-document: time-based archives (year / quarter / month), project structures (client / project / phase), physical locations (house / boiler / manuals), and single-relationship accounts and vendors.

Folder hierarchies are recommended to stay at four levels or fewer. Deeper nesting usually indicates that two dimensions are being encoded into a single tree, which makes retrieval brittle.

### Tag model

Tags are flat and additive. A document may carry any number of tags. Tags answer cross-cutting questions that do not fit a single folder: document type (`receipt`, `contract`, `manual`, `warranty`), action status (`urgent`, `to-review`, `to-file`), time-bound grouping (`tax-2024`, `tax-2025`), and source (`scanned-here`, `imported`).

The tag view groups all matching documents across folders. This is the primary mechanism for answering questions like "show me every receipt from last quarter" or "everything I scanned this week".

### Recommended workflow

1. Scan directly into the appropriate folder. Use the existing hierarchy rather than creating new folders during capture.
2. Apply tags that cross folder boundaries. A document in `2026 / Q2 / Acme / contracts` may also carry `urgent` and `q2-renewal` so it can be retrieved across all clients at renewal time.
3. Sweep the tag view periodically to file documents that were scanned in a hurry.

The combined search supports both folder and tag filters together, which is the main advantage of using both models.

### Patterns to avoid

- **Excessive tagging.** Two to three tags per document is the practical limit. More tags dilute their meaning and reduce search precision.
- **Years in tags.** Years belong in folders because they form a natural tree. Tags should describe *what* a document is, not *when* it happened.
- **Deep folder nesting.** Four levels is the practical maximum. Past that, split out a dimension as a tag.
- **Renaming folders.** Folder paths are referenced by share links, exports and sync. Rename only when necessary; prefer tagging for re-classification.

For libraries under 100 documents that fall into obvious categories, folders alone are sufficient until the library grows large enough that cross-cutting searches become common, typically around 200 documents.
