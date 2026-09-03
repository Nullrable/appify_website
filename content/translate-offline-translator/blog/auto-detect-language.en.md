---
title: "Auto-detect language: how the app picks a source language"
description: "When the source picker is set to Auto Detect, the app guesses the source language per translation. Here is how the guess is made."
date: 2026-09-03
lang: en
slug: auto-detect-language
---

## Auto-detect language: how the app picks a source language

Auto Detect is the first option in the source language picker. Selecting it does not mean the app has no opinion about the source — it means the app will pick a specific ML Kit source language per translation, using either OCR per-block language hints (for photos) or a Dart-layer character-set heuristic (for text).

## Why per translation

ML Kit's on-device translator requires a specific source language to be downloaded before translation can run. Auto Detect cannot mean "translate from any language"; it has to resolve to one of the 19 supported languages per translation. The app does this resolution automatically.

## How it works for photos

For camera captures, the OCR engine emits a per-block language hint for each recognised block. The hints are aggregated across the page; the majority language becomes the ML Kit source language for that translation.

Single-language pages resolve cleanly: a page of Korean captions resolves to Korean, a page of French body text resolves to French. Mixed-script pages fall back to a default if no single language dominates.

Per-block translation uses these hints more granularly. A page with English headlines and Japanese captions can be translated with the appropriate source per block, even when the majority language is unclear.

## How it works for text

For text translations, the app runs a Dart-layer heuristic that counts characters by script class:

- Han characters → Simplified Chinese
- Kana → Japanese
- Hangul → Korean
- Latin → English
- Cyrillic → Russian
- Arabic script → Arabic

Mixed input follows the majority character class. Empty or whitespace-only input defaults to English.

The heuristic is fast (a single linear scan over the input) and runs before the ML Kit call. The picked source language is then used for the translation request.

## When auto-detect fails

- **Latin without diacritics.** A Latin-only snippet of 10 characters could be English, French, German, Italian, Portuguese, Spanish, Dutch, Polish, Czech or several others. The heuristic picks English as the default; if the source is not English, the translation quality may suffer. Pin the source language manually for short Latin snippets.
- **Cyrillic without specifics.** Cyrillic could be Russian, Ukrainian or another Slavic script. The app picks Russian.
- **Han script ambiguity.** Simplified and Traditional Chinese share most of their characters. A short snippet of Han characters cannot be resolved to one without a longer context. The app picks Simplified Chinese.

For these cases, pin the source language manually from the picker.

## Auto-detect is never silent

The page always has a specific ML Kit source language when the translation runs. If the heuristic returns a default that is wrong, the translation may be wrong; if it returns the right language, the translation works. There is no mode in which the app "fails to pick a language" — it falls through to a default and translates.

## Practical advice

For long, single-language documents, auto-detect works. For short snippets or mixed-script pages, pin the source language manually from the picker. The picker remembers your recent languages at the top, so the second use of a language is one tap.
