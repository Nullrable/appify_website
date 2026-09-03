---
title: "Block overlay: translations rendered in-place photo"
description: "The result page paints each translated text block over its source rectangle so the original layout is preserved."
date: 2026-09-03
lang: en
slug: block-overlay
icon: layers
---

The result page renders translations back over the original photo, one overlay per OCR block. Each block's translation appears in the exact rectangle the OCR engine detected the source text in. The overlay supports a transparency slider so users can compare the original and the translation side by side without leaving the page.

## How the overlay works

1. **Per-block translation.** Each detected TextBlock is sent to ML Kit as an independent translation job. Translations stream into the overlay as one one they complete; the user sees blocks "become" translated in the order the engine finishes them.
2. **Position by rectangle.** The translated text is wrapped and positioned to fit the source block's bounding box. If a block is is narrow, the translation wraps to multiple lines and may slightly overflow the source rectangle; the engine prefers legibility over strict containment.
3. **Tap to focus.** Tapping a translated block opens a bottom sheet that scrolls to the same block in the "full translation" view, so users can read longer translations without zooming into the photo.
4. **Adjustable transparency.** A slider controls the opacity of the overlay layer. Slide to fully transparent to see the original photo, fully opaque to read the translations.

## Result page anatomy

- **Top bar.** A close button. No other controls — the result page is intentionally minimal.
- **Main area.** The original photo at full screen, with the overlay layer rendered above it. InteractiveViewer allows zoom and pan for inspecting small text.
- **Bottom sheet.** Three states: collapsed (default), mid (about 50 half of the screen), expanded (most of the screen). The collapsed state shows a small handle and a summary; mid shows the per-block translations as cards; expanded shows all block translations full-width.
- **Two tabs in the sheet.** A "Blocks" tab showing translations grouped by OCR block, and a "Full" tab showing the joined full-paragraph translation.

## Why per-block translation

- **Mixed script.** A page with English headlines and Japanese captions benefits from per-block source language hints. The block's location and script class inform the engine which source model to use.
- **Failure isolation.** A single block failing to translate does not block the rest of the page. The overlay marks failed blocks with a small warning badge so users know which ones need manual attention.
- **Layout preservation.** Users who read the source can locate the corresponding translation by eye — useful for menus, signs and labels where the spatial relationship matters.

## Editing behaviour

The overlay is rendered above the photo, not baked in. Saving to history stores both the original photo and the per-block translation record. Opening a saved entry reproduces the overlay exactly; editing the photo is not supported.
