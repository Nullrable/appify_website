---
title: "Text translate vs photo translate: which one to use"
description: "When the source is already text, skip OCR. When the source is a printed page, photo translate is faster. How to choose."
date: 2026-09-03
lang: en
slug: text-vs-photo-translate
---

## Text translate vs photo translate: which one to use

The app has two entry points for translation: the camera page (photo translate) and the text translate page. They share the same language pair state and the same ML Kit engine, but the pipeline differs in one important step.

## The difference in one sentence

Photo translate runs OCR over a captured image and then translates the recognised text. Text translate skips OCR entirely and feeds the input directly to the translation engine.

## When text translate is faster

- **Already-text sources.** Emails, chat messages, web snippets, pasted paragraphs — anything that exists as text rather than as a printed page. Skipping OCR removes a step and removes a class of OCR errors (misread characters, broken line wrapping, garbled layout).
- **Long, dense text.** Photographing a screen full of text introduces OCR noise. Pasting the text does not.
- **Dictation.** The system dictation key lets you speak the input rather than type it. The dictation accuracy is good for clear speech in a quiet environment.
- **No camera available.** If the camera is in use by another app, or the camera permission was denied, text translate still works.

## When photo translate is faster

- **Printed pages.** Books, menus, signs, packaging, instructions, posters. These exist as ink on paper; the only way to get them into text is to photograph them.
- **Stickers and labels.** A photograph of a sticker or label on a product can be translated in place without transcribing it first.
- **Screens you cannot select.** If the source is rendered as pixels — an image in a PDF, a screenshot of an old app, a photo of a screen — there is no text to copy. Photo translate is the only option.
- **Bilingual signs.** Capturing both languages in a single photograph often resolves the per-block language hint that auto-detect uses.

## Accuracy differences

Both paths use the same ML Kit engine, so the translation itself has the same quality. The difference is upstream: photo translate can introduce OCR noise that text translate does not. If the OCR engine misreads a character, the translation engine has no way to recover the original.

For text that you control (your own writing, your own messages), paste it. For text that lives on paper, photograph it.

## Sharing between modes

The source and target language settings are shared between the camera page and the text translate page. Switching languages in one place applies to the other; switching back and forth does not require re-selecting languages.

Text translations are not auto-saved to history; they live in the result region until you tap Clear or navigate away. Camera translations can be saved to history from the result page.

## A practical rule

If you can copy the text, copy it. If you cannot, photograph it. The copy path is cleaner because OCR is removed from the loop.
