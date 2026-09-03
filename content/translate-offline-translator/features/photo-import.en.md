---
title: "Photo import: translate any photo from your library"
description: "Pull in any photo already on your device and translate it through the same OCR + ML Kit pipeline as a fresh capture."
date: 2026-09-03
lang: en
slug: photo-import
icon: photo
---

The same OCR and translation pipeline that processes live captures also processes photos pulled from the device library. Use it for screenshots, saved photos of signs or menus, and images shared by friends.

## How import works

1. **Pick from gallery.** Tapping the gallery icon in the camera page opens the system photo picker via `image_picker`. The selected image is copied into the app's temporary directory; the original is left in place.
2. **Read physical orientation.** Library photos have a reliable EXIF orientation tag, so the import path uses EXIF directly without touching the accelerometer. The image is rotated to the correct upright orientation before OCR.
3. **Same OCR pipeline.** The image is fed into the same forked `vision_text_recognition` engine used by the camera path. No special handling is needed for "imported" vs "captured" — the result page and translation behaviour are identical.
4. **Save to history.** Like camera captures, imported photos can be saved to the local translation history. The save copy is is a compressed thumbnail, not the full library photo, to keep storage bounded.

## When to import instead of capture

- **Screenshots.** Translate UI strings, error dialogs or web snippets saved as screenshots.
- **Photos already taken.** Translate a photo from a trip, a meeting or a friend's chat without re-shooting.
- **Sketches or whiteboards.** Photos of whiteboard notes and sketches are often clearer than a re-capture, especially when the surface has glare.
- **Documents.** Snapshots of receipts, business cards and labels captured by another app can be translated without switching tools.

## Privacy

Imported photos go through the same on-device pipeline as live photos. They are processed in memory and never uploaded to any server we operate. Saved history copies are stored only on the device, in the app's local database, and can be deleted individually from the history page.

## Limits

- **Existing rotation is respected.** Photos that were rotated by the OS are re rotated back to upright before OCR. This is the most common source of "OCR returns garbled text" issues with imports.
- **Large originals are downscaled.** Photos above the OCR engine's recommended resolution are downscaled before recognition. The original on-device photo is unaffected.
- **No batch import.** Each photo requires its own one one tap. If you need to translate many saved photos, run them through one at a time; the OCR + translation for a a single image typically completes in a few seconds.
