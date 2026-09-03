---
title: "Block overlay explained: how translations land on the photo"
description: "The result page paints each translated text block over its source rectangle. Here is how the layout is computed."
date: 2026-09-03
lang: en
slug: block-overlay-explained
---

## Block overlay explained: how translations land on the photo

The result page renders translations back over the original photo, one overlay per OCR block. Each block's translation appears in the exact rectangle the OCR engine detected the source text in. This post explains how the overlay is laid out, how it interacts with the photo and how to read it.

## Why per-block

OCR returns a list of blocks, not a single string. Each block carries its own bounding box, detected text and a confidence score. The result page treats each block as an independent unit:

- **Layout preservation.** The translation appears in the same rectangle as the source, preserving the spatial relationship between text blocks.
- **Failure isolation.** A single block failing to translate does not block the rest of the page.
- **Mixed scripts.** A page with English headlines and Japanese captions can use per-block source language hints.

## How translations stream

Each detected block is sent to ML Kit as an independent translation job. Translations stream into the overlay as they complete; the user sees blocks "become" translated in the order the engine finishes them. The overlay updates incrementally; no blocking spinner is shown for the full page.

## How the overlay is positioned

The translated text is wrapped and positioned to fit the source block's bounding box. If a block is narrow, the translation wraps to multiple lines and may slightly overflow the source rectangle; the engine prefers legibility over strict containment.

The overlay is rendered above the photo, not baked into it. Saving to history stores both the original photo and the per-block translation record. Opening a saved entry reproduces the overlay exactly.

## Transparency slider

A slider at the top of the sheet controls the opacity of the overlay layer. Slide to fully transparent to see the original photo, fully opaque to read the translations. Half-transparency is the common setting for comparing the original and the translation side by side without leaving the page.

## Tap to focus

Tapping a translated block opens a bottom sheet that scrolls to the same block in the "full translation" view. This is useful for blocks where the on-photo translation is truncated or wrapped in a way that hides the full sentence.

## Result page anatomy

- **Top bar.** A close button. No other controls — the result page is intentionally minimal.
- **Main area.** The original photo at full screen, with the overlay layer rendered above it. InteractiveViewer allows zoom and pan for inspecting small text.
- **Bottom sheet.** Three states: collapsed (default), mid (about half of the screen), expanded (most of the screen). The collapsed state shows a small handle and a summary; mid shows the per-block translations as cards; expanded shows all block translations full-width.
- **Two tabs in the sheet.** A "Blocks" tab showing translations grouped by OCR block, and a "Full" tab showing the joined full-paragraph translation.

## Why some blocks show a warning

A warning badge appears on a block when its OCR confidence is below a threshold. The block is still translated and rendered, but the user is told to check it. Common causes: low light, glare, handwriting, decorative fonts, very small text.

## Saving

Saving to history captures the photo (compressed to a thumbnail), the OCR blocks, the per-block translations and the joined full paragraph. Opening the saved entry reproduces the overlay exactly; editing the photo is not supported.
