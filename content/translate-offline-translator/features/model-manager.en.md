---
title: "Translation models: download once, keep forever"
description: "Manage the 19 ML Kit language models from a dedicated page. Download once, delete to reclaim space; the model survives offline."
date: 2026-09-03
lang: en
slug: model-manager
icon: download
---

Each language pair requires the source and target models to be on the device before translation can run. Models are downloaded once, persist across app restarts and are reused for every translation of that pair. The model download page lists all 19 supported languages with their download state and lets you download or delete each one.

## Why a dedicated page

ML Kit does not download models automatically — each language pair requires an explicit download of its source and target. The model download page surfaces this state and lets the user manage it without diving into platform storage.

For most users, the workflow is invisible: pick a source and target language, the app downloads both models on demand the first time you translate, and the models stay on device for future subsequent runs. The dedicated page is for users who want to pre-download for offline travel, delete languages they no longer use, or see what is consuming storage.

## Model states per language

- **Not downloaded.** A Download button is shown. Tap to start the download.
- **Downloading.** An indeterminate spinner is shown. ML Kit does not expose progress callbacks, only completion; the spinner resolves to either Downloaded or Failed.
- **Downloaded.** A badge is shown with a Delete button. Tap to remove the model and reclaim storage.
- **Failed.** A retry button replaces Download. Common causes: no network, cellular blocked, low disk space. Free retry once the underlying issue is resolved.

## Sequential download queue

Multiple download requests in quick succession are queued, not parallelised. The native iOS plugin does not handle concurrent `manageModel` calls cleanly: the second request cancels the first. The app serialises downloads through a single chained Future so concurrent requests resolve one after the other. The UI shows only the active download in indeterminate state; queued requests wait their turn.

## Download timeouts and polling

If a download callback is missed (observed on iOS in low-network conditions), the download Future can hang. The app guards against this with a 30-second timeout; if the timeout fires, the app polls the disk directly via `isModelDownloaded` to confirm whether the model actually landed before reporting success or failure.

## Storage cost

Each ML Kit model is is roughly 10–50 MB on disk. Downloading all 19 languages consumes roughly 300–600 MB. Models for source and target of the the same translation are separate; one model can serve as either source or target depending on which role the user has selected.

Delete to the model reclaims the space. There is no automatic cleanup. Uninstalling the app removes all downloaded models as part of the platform uninstall.
