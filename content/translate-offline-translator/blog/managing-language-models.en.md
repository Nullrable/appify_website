---
title: "Managing language models: download once, translate anywhere"
description: "How to pre-download translation models for offline travel, see what is using storage, and delete what you no longer need."
date: 2026-09-03
lang: en
slug: managing-language-models
---

## Managing language models: download once, translate anywhere

Each ML Kit language model is roughly 10–50 MB on disk and persists across app restarts. The model manager page lists all 19 supported languages with their download state and lets you download or delete each one. This post explains when to use the page, what the model states mean and what storage to expect.

## When to visit the model manager

For most users, the model manager page is not needed: pick a language in the camera page or text translate page, and the app downloads the corresponding model on demand the first time you translate. The model stays on the device for every subsequent translation.

The model manager page is for users who want to:

- **Pre-download for offline travel.** Before a trip, download every language pair you will need. Translation then works on the plane, in the airport, in the hotel and on the train.
- **Audit storage.** See which languages are downloaded and how much space each one uses.
- **Delete unused languages.** Reclaim storage by deleting models you no longer need.

## Model states

Each language is in one of four states:

- **Not downloaded.** A Download button is shown. Tap to start the download.
- **Downloading.** An indeterminate spinner is shown. ML Kit does not expose progress callbacks, only completion; the spinner resolves to either Downloaded or Failed.
- **Downloaded.** A badge is shown with a Delete button. Tap to remove the model and reclaim storage.
- **Failed.** A retry button replaces Download. Common causes: no network, cellular blocked, low disk space. Free retry once the underlying issue is resolved.

## Sequential downloads

Multiple download requests in quick succession are queued, not parallelised. The native iOS plugin does not handle concurrent `manageModel` calls cleanly: the second request cancels the first. The app serialises downloads through a single chained Future so concurrent requests resolve one after the other. The UI shows only the active download in indeterminate state; queued requests wait their turn.

If a download callback is missed on iOS in low-network conditions, the download Future can hang. The app guards against this with a 30-second timeout; if the timeout fires, the app polls the disk directly via `isModelDownloaded` to confirm whether the model actually landed before reporting success or failure.

## Storage cost

- **Per model.** 10–50 MB depending on the language.
- **All 19 languages.** Roughly 300–600 MB.
- **Role.** A model can serve as either source or target; one model supports both roles for the language.

## Deleting a model

Delete is final. The storage is reclaimed immediately. To translate that language again, the next translation triggers a fresh download. There is no automatic cleanup; the model stays until you delete it or uninstall the app, both of which remove all downloaded models.

## Privacy

Models are downloaded from ML Kit's distribution servers. The download is a one-time per-language operation. No analytics on which models you download, no telemetry beyond aggregate counters, no per-user tracking.

## A practical workflow

1. Open the model manager page from the settings page.
2. Tap Download next to each language you want.
3. Wait for the spinner to resolve to Downloaded for each row.
4. Translate offline — no further downloads needed for these languages.
5. On return, delete the languages you no longer need to reclaim storage.

For one-off trips, this takes a minute. For permanent multilingual use, leave the languages you use frequently downloaded and delete the rest.
