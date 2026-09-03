---
title: "Translation history and privacy: what stays on your device"
description: "A walkthrough of what history stores, what is deleted when you delete an entry, and what is never uploaded."
date: 2026-09-03
lang: en
slug: history-and-privacy
---

## Translation history and privacy: what stays on your device

Translation history is a local artifact. Every history entry is stored in an on-device SQLite database managed by Drift, plus a JPEG thumbnail of the source photo. Nothing is uploaded to any server. This post explains what is stored, what is deleted, and what the app's privacy model is in detail.

## What history stores

Each history record contains:

- **Original photo** as a JPEG thumbnail, downscaled to fit a maximum edge. The full-resolution photo is discarded after downscaling to keep storage bounded.
- **Source language** detected by OCR (or set manually).
- **Target language** selected for the capture.
- **OCR blocks** with their bounding boxes, detected text and confidence.
- **Translations** per block and the joined full-paragraph translation.
- **Created-at timestamp** for ordering and display.

Text translations are not auto-saved. The text translate page shows the result in its result region until you tap Clear or navigate away. Camera captures and imported photos can be saved to history from the result page.

## Where it lives

History is stored in two places:

- **Database.** An on-device SQLite database managed by Drift. The database file is in the app's sandbox; it is not accessible to other apps.
- **Photos.** JPEG thumbnails in the app's sandbox filesystem under a history-specific directory.

Both are removed on app uninstall.

## What is never uploaded

- **Photos.** Not uploaded, not synced, not backed up.
- **OCR text.** Not uploaded.
- **Translation text.** Not uploaded.
- **History entries.** Not uploaded, not synced, not backed up.
- **Language preferences.** Not uploaded.

The entire history is on-device. There is no cloud copy to clean up.

## Deletion is permanent

- **Delete one.** The history page's delete button on a row removes the record and its photo thumbnail. The action is gated by a confirmation dialog to prevent accidental removal.
- **Delete all.** Uninstalling the app removes the entire history database as part of the platform uninstall.
- **No cloud copy.** Deletion is permanent. There is no cloud-side state to clean up.

## Analytics

The app emits anonymous crash reports and aggregate counters (e.g. "translations per day") for the purpose of understanding app stability and usage patterns. These do not include:

- Photo content
- OCR text
- Translation text
- History entries

If a future report ever includes content, that would be a bug and should be reported.

## A practical threat model

The app is designed for users who want to translate sensitive documents without sending them to a third party. The relevant threats are:

- **Cloud exfiltration.** Not possible because nothing is uploaded.
- **Cross-app access.** Not possible because the sandbox isolates the database and photo files.
- **Backup leakage.** Not possible because the sandbox is excluded from automatic cloud backups of the device.
- **Device loss.** History is lost with the device unless a manual backup of the device is taken; the manual backup is encrypted and accessible only to the device owner.

For users whose threat model includes state-level adversaries, the on-device pipeline eliminates the network attack surface but does not protect against a compromised device. Standard device hardening applies.

## A summary in one sentence

History is local. Photos are local. Translations are local. Deleting an entry removes it from the device; there is no cloud copy to delete.
