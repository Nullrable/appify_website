---
title: "Video Compression - Low / Medium / High Presets + Custom Bitrate"
description: "Shrink a video to a fraction of its original size. The three presets (Low / Medium / High) cover most cases, and a custom bitrate slider gives you the last degree of freedom."
date: 2026-09-15
lang: en
slug: compress
---

## Video compression

A 4K, one-minute video can easily eat a few hundred MB. When phone storage runs low, video is usually one of the biggest offenders. The Compress tool does one thing: make the video smaller without obviously throwing away picture detail.

### Three presets

The presets come in Low, Medium, and High:

- **Low** - smallest size. Good for email attachments, chat sends. Visible quality loss, suitable for footage where you don't care.
- **Medium** - the sweet spot for most cases. Output is roughly a third to half the original size, no obvious difference in everyday viewing.
- **High** - mild compression, quality first. Right for footage you want to keep, archive, or re-edit later.

The difference between the three isn't a brute-force "more quality = bigger file" scale; it's a judgment call about which matters more in your scenario.

### Custom bitrate

When the presets don't quite fit, drag the custom bitrate slider. Bitrate directly controls how much data goes into each second: higher bitrate -> better quality but larger file; lower bitrate -> smaller file but maybe mushy. Pick a number that looks good to you, then go.

### Batch processing

You can compress multiple videos at once; they're processed sequentially. Each video is compressed independently - the next one starts after the previous one finishes. Processing time depends on video length and target bitrate - a one-minute clip at Low finishes in seconds.

### Compress vs. Convert

Compress changes the bitrate, so the picture moves; Convert only swaps the container, so the picture stays put. Need to slim down before sharing? Compress. Need a format your player accepts? Convert.
