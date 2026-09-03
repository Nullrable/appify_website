---
title: About Paper Scan - Feature Guide
description: Learn what Paper Scan does, how every filter and OCR works on-device, and how conflict-free cloud sync keeps your documents in sync across iPhone and iPad.
date: 2026-09-02
lang: en
slug: index
---

Paper Scan is a document scanner built for iPhone and iPad. It captures an entire A4 page from a comfortable distance, straightens perspective, lets you polish the result with six GPU filters, and exports multi-page PDFs with searchable text - all without sending a single byte to a server unless you turn on cloud sync.

## Capture and edge detection

The capture view is wide enough to fit a full A4 sheet from arm's length. The moment a page enters the frame, edge detection snaps to its corners. Auto-capture fires when the document is steady, perspective is corrected in place, and a small thumbnail lands in the review tray for you to confirm or re-shoot.

You can switch to manual mode at any time. Long-press the shutter to disable auto-capture, drag the corner handles when edges need help, and tap a thumbnail to crop or rotate before the scan is committed to the page.

## Six GPU filters

Every filter in Paper Scan renders on the GPU. Previews update instantly even on multi-page batches, so you can compare filter strength without waiting.

- **Original** keeps the captured photo untouched and is the right choice when you want a faithful record.
- **Enhance** boosts contrast and white balance, which rescues faded thermal-paper receipts and dim room lighting.
- **Grayscale** flattens colour noise on coloured paper so the OCR layer reads text more cleanly.
- **Black & White** pushes the same idea one step further, producing the cleanest text layer for archival scans.
- **Lighten** evens out shadows from phone-flash glare, useful for glossy magazine pages.
- **Sharpen** recovers fine detail on receipts and serial-number stickers.

Filters apply per page, not per document. You can mix them inside a single PDF if some pages need colour and others need black-and-white.

## Organisation

Scans land on a canvas grouped as pages inside a document. You can drag pages to reorder, drop pages from one document into another, rename documents in place, and pin frequently used ones to the top of the library.

Full-text search runs across every page you have ever OCR'd. Results highlight the matched word on a thumbnail of the page, and tapping the result opens the document at the right page so you can read the surrounding context.

## On-device OCR

OCR uses Apple's Vision framework. Text recognition happens inside your iPhone's secure enclave - the image never leaves the device, the recognised text is never sent anywhere, and the OCR index lives in the app's private storage. The OCR layer runs on demand and you can re-run it on a page at any time if you change the filter.

Searchable text is preserved when you export PDFs. Anyone opening the PDF in Preview, Adobe Reader or any modern viewer can copy text out of it instead of re-typing.

## Multi-page PDF export

Export a whole document as one PDF, or share individual pages as images. Per export you can choose page size (Letter, A4 or original), orientation, quality (Low / Standard / High) and whether to include the OCR text layer. Paper Scan embeds the OCR layer automatically when you keep the quality at Standard or High.

Batch export lets you pick several documents at once and ship them as a single multi-PDF zip - useful for end-of-month expense batches.

## Conflict-free cloud sync

Cloud sync is opt-in. Turn on iCloud and your documents appear on every device signed in to the same Apple ID; turn on Google Drive and they appear on every device signed in to that Google account. You can keep both off entirely and the app behaves like a local-only archive.

Sync resolves concurrent edits without creating duplicates. Each page carries its own revision marker, so the newest version of that page wins, and your in-flight local edits are never silently overwritten while you are working. Folder, document, and page renames propagate too, so deleting a document on one device removes it everywhere.

## Privacy and offline by default

Paper Scan is offline by default. Scanning, edge detection, filters, OCR, search and PDF export all run on-device and never make a network call. The only feature that uses the network is cloud sync, and only when you switch it on. No account is required, no analytics SDK is bundled, and there is no advertising.

Your scans live in the app's private storage. Uninstalling the app removes all of its local data, including the OCR index, the full-text search cache and any unsynced edits.

## Paper Scan Pro

Scanning, the six filters, OCR, single-document PDF export and search stay free forever with no watermark. Paper Scan Pro adds unlimited documents, cloud sync and batch export. Pro is sold as a one-time upgrade, so once you own it you keep it across devices and across future updates.
