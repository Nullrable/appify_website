---
title: Multi-page PDF export with optional password protection
description: Multi-page PDF export with optional password protection
date: 2026-09-02
lang: en
slug: merge-and-encrypt
---

## Multi-page PDF export with optional password protection

Paper Scan's PDF export is designed for the case where multiple scanned pages need to be combined into a single file and delivered through the standard system share sheet. The export supports batch merge, optional password protection and naming, and runs entirely on the device.

### Standard export flow

1. **Multi-select in the Documents list.** Long-press a document to enter selection mode, then tap the rest. A "select all in folder" shortcut is available for batches that reside in one location.
2. **Tap the share button.** The system share sheet opens. Paper Scan's PDF export appears among the targets.
3. **Configure options.** Toggle the merge option if combining multiple pages, enter a password if required, and optionally name the file. Tap Export.
4. **Wait for processing.** A 50-page batch with two filters applied typically completes in under five seconds on recent devices. A 300-page batch may take 15 to 30 seconds. The export sheet displays a progress indicator; the app remains responsive throughout.
5. **Share.** When the file is ready, the standard share sheet appears. The file can be sent via email, AirDrop, Drive, Slack or any other application that accepts PDF files.

### Common use cases

- **Forwarding meeting materials.** Combine 50 to 80 pages of contracts and signed attachments into a single PDF for legal review.
- **Filing expense receipts.** Merge a month's worth of scanned receipts into one PDF for accounting.
- **Sharing research packets.** Compile multiple reference documents into one file for colleagues.
- **Archiving projects.** Bundle all documents associated with a completed project into a single deliverable.

### Setting a password

The export sheet contains a single password field, accompanied by a "confirm password" field for entry verification. The export proceeds only when both entries match; mismatched entries are rejected before processing.

When the password field is left blank, the output is a standard PDF with no restrictions. When a password is set, recipients must enter it before they can open any page. Password protection is recommended for documents containing personal data: contracts, medical records, financial statements, and any content that should not be transmitted as an unprotected attachment.

A practical guideline: leave the password blank unless protection is explicitly required. Passwords are difficult to remove from a PDF after the fact, while unprotected PDFs can be re-exported with a password later if needed.

### When to merge, when to split

A single large PDF is not always the right output. Splitting is preferable when recipients have devices with limited memory, different recipients need different parts of the batch, or different parts require different passwords. Each exported file has its own password field.

Paper Scan exports the selection as-is. There is no forced merge; the output reflects what the user has selected.

### Large-batch performance

300+ pages typically take 15 to 30 seconds for merge and write, and the progress bar shows current status. Filter-heavy scans (for example, magic color on a faded receipt) take roughly twice the processing time of clean scans. Encryption does not noticeably slow export on modern devices: the bottleneck is image encoding, not the cryptographic operation. Large encrypted exports warm the device and consume several percent of battery, which is acceptable for occasional use.
