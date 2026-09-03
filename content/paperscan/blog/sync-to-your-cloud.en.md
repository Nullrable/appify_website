---
title: Cloud sync: mirror your library to your own Drive or iCloud
description: Cloud sync: mirror your library to your own Drive or iCloud
date: 2026-09-02
lang: en
slug: sync-to-your-cloud
---

## Cloud sync: mirror your library to your own Drive or iCloud

Paper Scan's cloud sync mirrors the document library to a Google Drive or iCloud folder controlled by the user. The phone remains the primary location for all scans; the cloud serves as a backup that the user owns and can access independently. Cloud sync is a Pro feature.

### What the feature does

When enabled, cloud sync uploads scans to the user's own cloud storage as they are saved. New scans upload in the background. Existing scans are uploaded during the initial sync run.

The bytes travel directly between the phone and the cloud provider. Paper Scan does not operate a relay server, and no copy of the scans is held on Paper Scan infrastructure.

### Use cases

- **Device replacement.** Switch to a new phone, install Paper Scan, sign in to the cloud provider, and restore the library from the cloud mirror. No cable transfer or third-party backup tool is required.
- **Device loss.** If the phone is lost or damaged, scans are preserved in the cloud mirror and the library can be restored on a replacement device.
- **Cross-device browsing.** Open the cloud folder in any browser to view scans organised by the folder structure set up on the phone. Files can be shared, attached to emails or transferred to other applications from the cloud folder directly.
- **Off-site backup.** Maintain an independent copy of the document library for redundancy.

### Configuration

1. Open **Settings → Cloud** in Paper Scan.
2. Select Google Drive or iCloud. The provider can be changed later; both providers use the same sync engine.
3. Sign in to the cloud account. Paper Scan requests the minimum permissions required: access to its own folder only, not to the full Drive or iCloud account.
4. Select which local folders to mirror. The entire library is mirrored by default; specific folders can be excluded if certain scans should remain device-only.
5. Tap **Start Sync**. The first run uploads the existing library; subsequent scans upload automatically as they are saved.

To disable cloud sync, toggle the feature off in the same Settings screen. Paper Scan does not delete files from the cloud when sync is disabled. The cloud copy remains in place until the user chooses to remove it.

### Permissions scope

Paper Scan requests the permission scope required to read and write its own folder within Google Drive or iCloud. It does not receive visibility into other files in the user's cloud storage, nor does it obtain tokens that would permit access to those files. To verify, review the connected applications list in Google or Apple account settings: Paper Scan appears with access limited to its designated app folder, not to the full account.

### Restore

Restore is a separate operation from sync. It is initiated manually when the user wants to rebuild the local library from the cloud copy.

1. Install Paper Scan on the new device and sign in.
2. Open **Settings → Cloud → Restore**.
3. Select the provider and destination.
4. Wait for the restore to complete. A library of a few hundred scans typically completes in a few minutes; a library of several thousand takes longer. The progress bar reflects actual progress.

Restore is the only operation in which the app retrieves files from the cloud. It does not run automatically or in the background.

### Switching providers and disabling sync

You can switch between Google Drive and iCloud by disabling the current provider, enabling the new one and signing in: the next sync begins fresh on the new side. Files previously mirrored to the old provider remain there until the user removes them. Disabling sync stops new uploads but does not remove files already uploaded; the local library is unaffected. Disabling and re-enabling sync resumes from where it left off, and scans added during the disabled period upload on the next sync run.

Paper Scan functions fully without cloud sync. Scanning, OCR, folders, tags and PDF export all operate identically with or without sync enabled.
