---
title: "Exact Duplicate Detection"
description: "How CleanPhoto groups photos with identical dimensions captured in the same second, and why this local rule finds true copies without false positives."
date: 2026-09-06
lang: en
slug: duplicates
---

## Exact Duplicate Detection

Exact duplicates are the easiest photos to delete and the easiest to miss. CleanPhoto finds them with a simple, transparent rule that runs entirely on your device: photos that share identical pixel dimensions and were captured in the exact same second belong together.

### How grouping works

During a scan, CleanPhoto walks through your photo library and builds a key for every photo from its width, its height and its capture second. Photos with the same key are placed in one group. A photo that was saved twice — by a re-save, an import from another device, or a cloud sync conflict — carries the same dimensions and timestamp as its twin, so both copies land in the same group with nothing else in it.

### Reviewing a group

Each group shows every copy together with its file size, so you can see at a glance which copy is the higher-quality original. Mark the copies you want to remove, confirm the deletion, and the photos are deleted through the system photo library. Photos you keep are untouched.

### Why dimensions and time instead of content analysis

Matching on dimensions and capture second is fast, predictable and private. It produces no false positives between different shots, because two different photos being saved with identical dimensions in the same second is extremely rare. And since no image content needs to be analysed or compared, the scan never has to read pixel data at all — it works from library metadata only.

### Everything stays on your device

Duplicate detection runs locally on your phone. No photo, no thumbnail and no metadata ever leaves your device, and no account is required.
