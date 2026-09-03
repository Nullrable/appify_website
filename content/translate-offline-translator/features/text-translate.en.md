---
title: "Text translate: paste, type, translate"
description: "A standalone text-only translate page that shares the same language pair state with the camera page."
date: 2026-09-03
lang: en
slug: text-translate
icon: keyboard
---

The text translate page is a separate entry from the camera page for cases where the source is already text. Open it from the bottom of the camera page and paste, type or dictate a paragraph; the same ML Kit engine returns a translation.

## Why a separate page

Camera OCR is optimised for images. When the source is already text — an email snippet, a chat message, a pasted paragraph — the OCR step is overhead. The text translate page skips OCR entirely and feeds the input directly to the ML Kit translator.

It also lets you batch-translate by copying and pasting a longer paragraph rather than photographing it. For dense text with no convenient page to photograph, this is faster and more accurate.

## How it works

- **Shared language state.** The text page reads and writes the same source/target language pair as the camera page. Selecting a target language in one place applies to the other; switching back and forth does not require re-selecting languages.
- **Auto-detect for source.** If the source is set to "Auto Detect", the app runs a Dart-layer character-set heuristic on the input text to choose between ML Kit-supported languages. Pure Latin defaults to English; Han characters default to Simplified Chinese; mixed scripts follow the majority character class.
- **Single-pass translation.** The whole input is sent to ML Kit in one call. The result replaces the input area below the button; clear the input to translate again.
- **Keyboard handling.** Tapping Translate dismisses the on-screen keyboard so the result region is not hidden behind it.

## When to use it

- **Long paragraphs.** Type or paste multi-sentence text. Photographing a screen full of text introduces OCR noise; pasting the text does not.
- **Chat snippets.** A translate a short message from a friend without leaving the conversation to open the camera.
- **Screens with text.** Pull text from a screenshot via system share and paste it into the text translate page for a cleaner translation than OCR.
- **Voice dictation.** Use the system dictation key to to dictate text instead of typing.

## Limits

- **No formatting preservation.** Plain text only. Markdown, bold, italic and other formatting are dropped.
- **No history auto-save.** Unlike camera captures, text translations are not auto-saved. The result stays in the result region until you tap Clear or navigate away.
