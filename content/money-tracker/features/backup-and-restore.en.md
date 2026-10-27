---
title: "JSON Backup and Restore You Control"
description: "Export the whole database as one readable JSON file, save it wherever you keep backups or send it through the system share sheet, and import it back without creating duplicates."
date: 2026-10-27
lang: en
slug: backup-and-restore
---

Your data lives on your device. That is excellent for privacy and terrible for peace of mind, unless the backup is one tap away.

## Export in one file

The export screen writes a single `money_tracker_<timestamp>.json` file containing the entire database: every account with its type and metadata, every category, and every transaction with its date, amount, account, category, note and type.

## You choose the destination

On iOS the system document picker opens; on Android the Storage Access Framework does. The file can land in iCloud Drive, Google Drive, a file on the device, a USB drive, or any third-party app that registers as a documents provider. Nothing forces you into one particular cloud.

## Or share it straight away

Next to the export button sits the system share sheet: email, a messaging app, a notes app, AirDrop, Nearby Share. The file travels end to end through the operating system and never passes through Money Tracker.

## A format you can read

JSON is plain text. Open the file in any editor and you can see the structure - `accounts`, `categories` and `transactions` arrays, each entry a flat record with named fields. No base64 blobs, no encrypted container, no version-locked schema.

## Import that merges instead of duplicating

Import accepts the same file format. If an imported entry carries an ID that already exists locally, the import overwrites the existing record rather than adding a second copy of it - so importing a fresh export on top of an older one adds only the new rows.
