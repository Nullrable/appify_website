---
title: "Rotate and Flip"
description: "Rotate in 90° steps and flip horizontally or vertically. EXIF rotation tags are corrected before export, so the saved file opens in the correct orientation anywhere."
date: 2026-09-07
lang: en
slug: rotate
---

## Rotate and Flip

Photos taken at an awkward angle, scanned documents facing the wrong way, screenshots that need mirroring — these situations all call for rotation or flipping. Image Converter provides straightforward rotation and flip tools.

## Rotate in 90° Steps

The app supports rotating images in 90° increments:

- **Rotate left 90°**: Turn a portrait photo into landscape, or fix a sideways-tagged image from a horizontal capture.
- **Rotate right 90°**: The opposite of left.
- **180°**: Two consecutive 90° rotations.

Every rotation re-encodes the image, ensuring the exported file opens in the correct orientation on any device.

## Flip: Horizontal or Vertical

In addition to rotation, the app supports mirror flips:

- **Horizontal flip**: Mirrors left and right. Useful for selfies or reversing mirrored text.
- **Vertical flip**: Mirrors up and down. Useful for negative-style effects or mirrored compositions.

## EXIF Rotation Handled Automatically

Many phones (especially iPhones) only write a rotation tag into the photo's metadata instead of actually rotating the pixels. In some apps, the result is "looks right but exports sideways".

Image Converter reads the EXIF Orientation tag and fixes the pixels before export. The saved file opens in the correct orientation anywhere, with no need for the viewing software to interpret metadata.

