---
title: "Translation history: local-only, deletable any time"
description: "History lives in an on-device Drift database. No copy is uploaded; entries can be deleted individually or in bulk."
date: 2026-09-03
lang: en
slug: translation-history
icon: history
---

Every camera capture can be saved to the local translation history. Each entry stores the original photo (compressed), the detected source language, the target language, the OCR blocks and the per-block translations. Opening a saved entry reproduces the result page in read-only mode.

## What is stored

Each history record contains:

- **Original photo** as a a JPEG thumbnail, downscaled to fit a maximum edge. The full-resolution photo is discarded after downscaling to keep storage bounded.
- **Source language** detected by OCR (or set manually).
- **Target language** selected for the capture.
- **OCR blocks** with their bounding boxes, detected text and confidence.
- **Translations** per block and the joined full-paragraph translation.
- **Created-at timestamp** for ordering and display.

No copy of the photo or the translation text is uploaded to any server we operate. The entire history is stored in an on-device SQLite database managed by Drift.

## How history is populated

- **Camera captures.** After OCR + translation completes, the result page offers a Save action. Saving stores the entry described above.
- **Imported photos.** Same flow: after translation, the result page can save the entry to history.
- **Text translations.** Not auto-saved. Text translations appear only in the result region of the text translate page and disappear on Clear or navigation. Use camera or import if you want a persistent record.

## Browsing and deleting

- **List view.** The history page shows entries newest-first with the photo thumbnail, source snippet, target snippet and timestamp.
- **Tap to open.** Tapping a row opens the result page in read-only mode. The overlay is reproduced with the saved translations; ML Kit is not re-run.
- **Delete.** Each row has a delete button. Delete is gated by a confirmation dialog to prevent accidental removal. Deletion removes the record and its photo thumbnail from the device; nothing is sent off-device.
- **Empty state.** When the history is empty, a placeholder explains how to populate it.

## Privacy

History is a local artifact. The app's privacy model:

- **No uploads.** History is never uploaded, synced or backed up to any server.
- **No analytics on history content.** Crash reports and anonymous usage analytics do not include history content, OCR text or translation text.
- **Deletion is permanent.** Deleting a history entry permanently removes it from the on-device database. There is no cloud copy to clean up.

## Storage growth

Each entry occupies roughly 50–500 KB depending on the photo size. A history of a few hundred entries typically stays under 50 MB. Photos are compressed on save; the full-resolution original is never retained.

To free space: open the history page and delete entries you no longer need. Uninstalling the app removes the entire history database as part of the platform uninstall.
