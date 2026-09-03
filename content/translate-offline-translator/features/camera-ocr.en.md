---
title: "Camera OCR: point, capture, translate"
description: "On-device OCR via vision_text_recognition with hardware-accurate orientation, even when the device UI is locked to portrait."
date: 2026-09-03
lang: en
slug: camera-ocr
icon: camera
---

Camera OCR runs OCR locally using a forked `vision_text_recognition` package that supports Latin, Chinese (Simplified and Traditional), Japanese and Korean scripts. Nothing is uploaded for recognition. Each block returned by the OCR engine carries its own bounding box and detected text; the result page paints the translation back over the same coordinates so the original layout is preserved.

## Capture pipeline

1. **Camera initialisation.** The camera controller is initialised asynchronously with explicit `initializing / ready / failed` states. Failure displays a retry button that re-runs initialisation without re-entering the `initializing` guard.
2. **Real orientation.** iOS's `DeviceOrientation` and EXIF are unreliable when the app is portrait-locked. The app reads the raw accelerometer via `sensors_plus` and caches the most recent frame so the shutter captures the true grip direction even if the UI is locked. EXIF orientation is then reconciled against this ground truth.
3. **Shutter.** Tap captures at the current preview aspect ratio. The captured frame is downscaled to a configurable max edge before OCR — most pages need 1500–2000 px on the long edge for the engine to read fine print without bloating memory.
4. **Flash.** Four modes are exposed in the viewfinder — auto, off, on and torch — with the toggle bound to the system flash API.

## What the OCR returns

- **Bounding boxes per block.** Each TextBlock has its own rectangle. The result page uses these to position the translated text exactly over the source text.
- **Block text and ordering.** Source-language text per block, in the order the engine emitted them (top-to-bottom, left-to-right by default).
- **Confidence.** Each block carries its own confidence. Blocks below a threshold are rendered in the result page but flagged as "low confidence" so users can verify.

## Why on-device

- **Privacy.** Photos of street signs, contracts or medical forms never leave the device for OCR.
- **Latency.** No network round-trip. OCR of a typical phone-shot page completes in well under one second on a recent device.
- **Offline.** OCR works on aircraft, in basements and in regions without coverage. The same engine that runs the recognition runs entirely from the on-device model.

## Best practices for accurate OCR

1. **Even, indirect light.** Window light outperforms overhead spotlights. Shadows crossing the page are the most common cause of misread characters.
2. **Tap to focus.** If auto-focus selects the wrong subject (the desk, a finger, the page edge), tap the centre of the text before capture.
3. **Flat pages.** Pages that bow toward a book spine lose characters near the gutter. Press the page flat with the other hand where possible.
4. **One language per capture.** Mixed-script pages work in a single pass, but a page that mixes Latin with vertical Japanese is best split into two captures.
