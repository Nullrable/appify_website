---
title: "Files that never leave your phone: how local processing protects your privacy"
description: "Online conversion tools upload your files. On-device processing doesn't. Using Image to PDF as an example, here's how local processing works, where history is stored, and where the data boundary sits for ads and subscriptions."
date: 2026-09-07
lang: en
slug: local-processing-privacy
---

## How Many Sensitive Files Have You Uploaded?

Think back to the online conversion tools you've used: ID photos, scanned contracts, bank-statement screenshots. To turn them into a PDF or an image, they were uploaded to a server you've never heard of. Most services claim they "delete immediately after processing", but you have no way to verify that, and the upload itself already happened.

## What "Local Processing" Means

Every feature of Image to PDF — image to PDF, stitching, PDF to image, merge, encrypt, decrypt — runs on your phone. Specifically:

- Images and PDF files are read, processed, and output inside the App only, **never passing through any server**
- Conversions run on the device's chip, so the full feature set works offline
- Output files are saved to the App's local directory, and you decide where they go through the system share sheet

In other words, "files never leave your phone" isn't a slogan — it's a direct result of the architecture. With no upload channel, there is no upload.

## Where History Is Stored

Every conversion writes to the App's history: operation status, duration, source and output formats, file size. These records live in a local database on the device, and are only readable on that device. Clear the cache or uninstall the App, and they're gone — without going through us. In fact, we couldn't see them if we wanted to.

## The Data Boundary Around Ads and Subscriptions

The App's business model is worth spelling out:

- **Advertising**: Users who haven't subscribed to Pro see rewarded ads from Google AdMob when entering feature screens. AdMob uses advertising identifiers to serve ads under its own policy — that's the boundary between it and us. We don't have your files, and we don't collect personal data through advertising.
- **Pro subscription**: Payment is handled by Apple App Store, and subscription validation goes through RevenueCat. We never see your card number or billing info, and we keep no payment credentials.
- **What Pro unlocks**: Pro removes ads. You go straight into a feature without watching a rewarded video.

## Habits for Sensitive Files

Even with a local-processing tool, habits still matter:

1. **Move important output in time.** Save conversion results through the share sheet to Files, iCloud, or another drive. Don't leave them only in the App directory.
2. **Encrypt before sending out.** Use Encrypt on sensitive PDFs to set an opening password, and send the password through a separate channel.
3. **Clean up regularly.** Clear history and output files you don't need in Settings to keep your device tidy.

Privacy isn't protected by promises — it's protected by architecture. Next time you're about to convert a file, ask yourself: does this file need to leave my phone?

