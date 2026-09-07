---
title: "Files Never Leave Your Phone: How Local Processing Protects Your Privacy"
description: "Online conversion tools require uploads; on-device processing does not. Using Image Converter as an example, this post explains how local processing works, where the history is stored, and the data boundaries between ads and subscriptions."
date: 2026-09-07
lang: en
slug: local-processing-privacy
---

## How Many Sensitive Images Have You Uploaded?

Think back over the online conversion tools you've used: photos of your ID, scans of contracts, private screenshots. To convert them to a different format, they were uploaded to some server you've never heard of. Most services claim they "delete after processing," but you have no way to verify that — and **the upload itself has already happened**.

## What Local Processing Means

Every feature in Image Converter — format conversion, compression, rotation, cropping, resize, and stitching — runs on your phone. Specifically:

- Images are read, processed, and output inside the app, **never through any server**;
- Conversion runs on the device's silicon, **so every feature works fully offline**;
- Output files are saved to the app's local directory, and you decide where they go through the system share sheet.

In other words, "files never leave your phone" is not a slogan — it's a direct consequence of the architecture. With no upload channel, there's no upload.

## Where the History Is Stored

Every conversion writes an entry into the app's history, including status, duration, source and output formats, and file size. These records live in the device's local database, **readable only on this device**.

Clearing the cache or uninstalling the app deletes everything completely — the process does not go through us. In fact, we can't see it even if we wanted to.

## Where the Ads and Subscription Data Boundaries Lie

The app's business model deserves a clear explanation:

- **Ads**: Non-subscribers see Google AdMob rewarded ads when entering feature pages. AdMob uses advertising identifiers to serve ads according to its own policies — that's the boundary between AdMob and us. We don't have access to your files, and we don't collect your personal data through ads.
- **Pro subscription**: Payments are handled by Apple App Store, and subscription verification is done through RevenueCat. We never see your card number or billing info, and we don't keep any payment records.
- **Subscription benefits**: Pro removes ads. Feature pages open directly, with no rewarded video to watch.

## Suggestions for Handling Sensitive Files

Even with a local processing tool, habits still matter:

1. **Move important outputs promptly** — send the converted result via the share sheet to Files, iCloud, or a cloud drive. Don't leave it only in the app's directory.
2. **Strip metadata before sharing** — if it's a photo of an ID, convert it once in Image Converter to drop the original EXIF information.
3. **Clean up regularly** — clear the cache for history entries and output files you no longer need, in Settings.

Privacy protection comes from architecture, not promises. Next time you convert an image, ask yourself: **does this picture need to leave my phone?**

