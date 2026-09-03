---
title: "19 languages: ML Kit coverage, picker and auto-detect"
description: "ML Kit on-device translation supports 19 languages. The picker includes search, recently used and an auto-detect option for source."
date: 2026-09-03
lang: en
slug: language-coverage
icon: globe
---

The app translates between 19 languages on-device via Google ML Kit. The full list: Arabic, Chinese (Simplified), Czech, Dutch, English, French, German, Croatian, Hungarian, Italian, Japanese, Korean, Polish, Portuguese, Romanian, Russian, Slovak, Slovenian and Spanish. New languages are added as ML Kit publishes on-device models for them.

## Language picker

The picker is the single entry point for choosing source and target languages, accessed from the language bar at the top of the camera page or text translate page.

- **Search.** Type in the search field to filter by English name or language code. The list updates as you type.
- **Recently used.** The top section shows the languages you have used in the last several translations. Selection moves them to the the top automatically.
- **Auto Detect (source only).** Appears as the first option in the source picker. Selecting it makes the app guess the source language per capture (see below).
- **All languages.** Below the recently-used section, is the full list of 19 supported languages with their country flags.

The source and target pickers can be opened independently. Choosing a source that is the the same as the target highlights this in the picker to prevent an accidental same-to-translation.

## Auto-detect for source

When source is set to Auto Detect, the app needs to pick a specific ML Kit source language per translation. Two strategies are used:

- **For photo captures.** The OCR engine's per-block language hints are aggregated; the majority language across blocks becomes the ML Kit source. Single-language pages resolve cleanly; mixed-script pages fall back to a default.
- **For text translate.** A Dart-layer heuristic counts characters by script class: Han characters → Simplified Chinese, Kana → Japanese, Hangul → Korean, Latin → English, Cyrillic → Russian, Arabic-script → Arabic, etc. Empty or whitespace-only input defaults to English.

Auto-detect never falls through silently. The page always has a specific ML Kit source language when the translation runs.

## Why 19 and not more

The count is bounded by what ML Kit publishes as on-device models. Languages outside this list cannot be translated on-device with ML Kit. The list is curated: every entry has a downloadable model of 10–50 MB. The picker excludes languages that ML Kit does not support, even if they are valid BCP 47 codes.

## i18n of the UI

The app's own interface (menus, settings, error messages) is translated into 10 languages: Arabic, English, German, Korean, French, Japanese, Russian, Spanish, Vietnamese and Chinese (Simplified). The translation languages are a superset of the i18n set for several common pairs (en ↔ ja, en ↔ zh, en ↔ es, en ↔ fr).
