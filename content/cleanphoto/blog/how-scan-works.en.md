---
title: "How CleanPhoto Scans Your Library Without Uploading a Single Photo"
description: "A look inside the three on-device detectors — exact duplicates, similar photos and screenshots — and the simple rules they use, so you know exactly what happens when you press Scan."
date: 2026-09-06
lang: en
slug: how-scan-works
---

## How CleanPhoto Scans Your Library Without Uploading a Single Photo

Most photo cleaners ask for trust. CleanPhoto tries to earn it with transparency: every scan runs on your device, works from library metadata, and follows rules simple enough to explain in a few paragraphs. Here is exactly what happens when you press Scan.

### Three detectors, three questions

CleanPhoto runs three scans, each answering a different question. Exact duplicates ask "was this photo saved twice?" Similar photos ask "was this a burst or a rapid retake?" Screenshots ask "is this image only temporary?" You can run them in any order, and each one presents its results as groups for you to review.

### Rule one: same size, same second

The duplicate detector builds a key for every photo from its width, its height and its capture second. Photos with the same key land in one group. A re-saved photo, an import or a cloud-sync conflict keeps the original's dimensions and timestamp, so both copies meet in the same group. Two different photos sharing identical dimensions in the same second is extremely rare — which is why this rule finds real copies without false positives.

### Rule two: within ten seconds

The similar-photo detector sorts your library by capture time and walks the timeline. As long as each photo was taken within 10 seconds of the previous one, it joins the same group; the moment the gap exceeds 10 seconds, the chain closes. That matches how bursts and retakes actually happen — a quick series, then a pause, then something else. Groups of one are dropped.

### Rule three: album, title, path

The screenshot detector works differently per platform. On iOS it reads the system Screenshots album directly. On Android, where storage varies by manufacturer, it first checks album names and, if no screenshot album exists, inspects each image's title and file path for the naming patterns devices use. Results are grouped by day, newest first.

### File sizes, loaded before you review

Before any review screen opens, CleanPhoto preloads each photo's file size. Within a group, the largest file is almost always the copy that kept the most detail, so items are sorted by size and the best candidate sits at the top. That single signal turns "which of these eight is best?" into "is this one good?"

### What never happens

No scan reads pixel content for analysis, no photo or thumbnail leaves your device, and no account is required. Deletions only happen after your explicit confirmation and run through the system photo library — the app never removes anything on its own. The internet is used for just two things: showing ads in the free version and managing the Pro subscription.
