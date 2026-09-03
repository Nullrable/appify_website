---
title: "How offline translation works on your iPhone"
description: "A walkthrough of how the app translates without uploading a single byte of source text to a server."
date: 2026-09-03
lang: en
slug: how-offline-translation-works
---

## How offline translation works on your iPhone

The app's translation path is entirely on-device. No photo, no OCR result and no translation request leaves the iPhone. This post explains what "on-device" actually means, where the models live and what trade-offs come with running translation locally.

## The pieces that run on the device

There are three independent pieces of work that happen on the phone for a camera translation:

1. **OCR.** A forked `vision_text_recognition` package runs text recognition locally. It supports Latin, Chinese (Simplified and Traditional), Japanese and Korean scripts. Each recognised text block carries its own bounding box and detected text.
2. **Translation.** Google ML Kit's on-device translation engine takes the OCR output and produces translated text. The engine is bundled as a downloadable language model per language pair; the app downloads models on demand and caches them on disk.
3. **Rendering.** The result page paints each translated block back over the original photo, using the bounding boxes the OCR engine returned. No round-trip to a server is needed to render the overlay — the image, the source blocks and the translations all live in memory on the device.

## Why this matters

- **Privacy.** Photos of street signs, contracts, medical forms and personal correspondence stay on the device. There is no upload step anywhere in the pipeline, so there is nothing to leak, subpoena or sell.
- **Latency.** There is no network round-trip. OCR of a typical phone-shot page completes in well under one second on a recent device, and translation of the per-block results streams in as each block finishes.
- **Offline.** The pipeline runs on a plane, in a basement, in a tunnel, on a train, in a country without coverage. The OCR engine and the translation engine are downloaded once and reused indefinitely; nothing is fetched per capture.
- **Cost.** The app does not pay per-character to a translation API, so the feature does not need a usage-based paywall or monthly character cap to stay sustainable. The free tier is the same pipeline as Pro.

## Where the models live

ML Kit publishes on-device translation models for 19 languages. Each model is roughly 10–50 MB. When you pick a source or target language, the app downloads the corresponding model into the app's local sandbox on first use. The model persists across app restarts; deleting it reclaims the storage immediately.

The full list of supported languages: Arabic, Chinese (Simplified), Czech, Dutch, English, French, German, Croatian, Hungarian, Italian, Japanese, Korean, Polish, Portuguese, Romanian, Russian, Slovak, Slovenian and Spanish.

## What is uploaded (and what is not)

- **Not uploaded.** Photos, OCR text, translation text, history entries, language model state. None of this leaves the device.
- **Uploaded.** Anonymous crash reports and aggregate counters (e.g. "translation requests per day"). Crash reports do not include user content; if a future report ever contains content, that would be a bug and should be reported.

## Trade-offs of running locally

- **Bounded language list.** Only languages ML Kit publishes as on-device models are supported. The list is curated and currently has 19 entries.
- **Model download required.** A first-time translation for a language pair triggers a one-time download. The model manager page surfaces the state and lets you pre-download for offline travel.
- **Quality.** On-device translation quality is comparable to cloud translation for short, well-formed text. Long paragraphs or domain-specific jargon may differ from a cloud engine tuned for that domain.
- **Compute.** OCR and translation use the phone's CPU and Neural Engine. Battery impact is small for a single capture but measurable for batch workflows.

## What this means for you

If you have ever hesitated to photograph a sensitive document because the photo would end up on someone else's server, that hesitation is the reason the app exists. Every part of the pipeline runs locally, and the app's data model is designed around the premise that nothing leaves the device unless the user explicitly chooses to share a result.
