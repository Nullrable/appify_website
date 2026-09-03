---
title: On-device OCR: searchable text from every scanned page
description: On-device OCR: searchable text from every scanned page
date: 2026-09-02
lang: en
slug: on-device-ocr
---

## On-device OCR: searchable text from every scanned page

OCR (optical character recognition) converts a scanned page into text that can be selected, copied and searched. Paper Scan runs OCR entirely on the device using Apple and Google on-device ML kits, so no scan content is transmitted to external servers for recognition. Recognised pages are indexed in the local library and become searchable the moment they are saved.

### What OCR unlocks

Once a page has been recognised:

- **Copy text out of the scan.** Long-press any word to bring up a selection overlay covering the entire page. The selected text can be pasted into any other application.
- **Search inside scans.** The search bar at the top of the Documents list queries the recognised text of every page, not only titles and tags. Phone numbers, names, invoice numbers and addresses can be located across the entire library.
- **Quote and reference.** Scanned receipts, contracts, handwritten notes and whiteboard captures all become quotable text that can be referenced later.

### Why on-device processing matters

- **Privacy.** Scanned content never leaves the device for recognition. This is relevant for invoices, contracts, medical forms and any document containing personal data.
- **Latency.** No network round-trip. On recent iPhones and flagship Android devices, OCR for a standard page typically completes in under one second.
- **Offline availability.** OCR works on aircraft, in basements and in regions without network coverage. No connectivity is required.

Accuracy is comparable to server-based OCR services; the difference is where the computation runs.

### Best practices for accurate recognition

OCR accuracy depends primarily on the quality of the input. Three factors, in order of importance:

1. **Lighting.** Even, indirect light from a window performs better than a single overhead spotlight. Shadows crossing the page are the most common cause of misread characters.
2. **Focus.** If auto-focus selects the wrong subject, tap the centre of the text before capture. A blurred scan is rarely a usable scan.
3. **Filter selection.** Black & white gives the cleanest text for printed forms. Magic color is recommended when the ink has faded or the paper is yellowed. Auto handles most everyday cases.
4. **Flat pages.** Pages that bow toward the spine lose characters near the gutter. Press the page flat with the other hand where possible.
5. **Language hint.** Set the OCR language explicitly for single-language pages. Mixed-script pages work in a single pass without a hint.

### Accuracy limitations

OCR performs well on printed text (95%+ accuracy) but is less reliable for handwritten cursive, very small fonts, stylised decorative fonts, glossy magazine reflections and aged receipts where the ink has physically faded. The original image remains available in all cases: if OCR fails on a critical page, the scan itself can still be read.

The free tier includes a daily OCR allowance that is enough for everyday receipts, business cards and occasional book chapters. Pro removes the daily cap and adds the ability to OCR an entire folder in a single operation.

The on-device engine supports Latin scripts (English, French, German, Spanish, Portuguese, Italian and others), Chinese (simplified and traditional), Japanese, Korean and most European scripts. Mixed-script pages are handled in a single recognition pass.
