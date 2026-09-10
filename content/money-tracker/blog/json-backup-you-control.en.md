---
title: JSON Backup You Control - A File You Can Open
description: Export your Money Tracker data as a single JSON file - accounts, categories, transactions - and save it wherever you already keep backups, or send it through the system share sheet.
date: 2026-09-10
lang: en
slug: json-backup-you-control
---

The export screen writes one file: `money_tracker_<timestamp>.json`, containing every account (with type, balance snapshot, metadata), every category (system and custom), and every transaction (date, amount, account, category, note, type). One file, the whole database.

You pick where it goes. iOS opens the document picker, Android opens Storage Access Framework, so the file can land in iCloud Drive, Google Drive, a thumb drive, or any third-party app that registers as a Documents provider. Nothing forces you into a specific cloud.

Right next to the picker sits the system share sheet. From there the file goes straight to email, a messaging app, a notes app, AirDrop, or Nearby Share - end to end through the OS, never through Money Tracker.

JSON is plain text. Open the file in any editor and you see the structure: an object with `accounts`, `categories`, and `transactions` arrays, each entry a flat record with named fields. No base64 blobs, no encrypted container, no version-locked schema.

Import accepts the same file. If an imported entry shares an ID with an existing one, the import overwrites the existing record rather than creating a duplicate - so importing a fresh export on top of an older one adds only the new rows.
