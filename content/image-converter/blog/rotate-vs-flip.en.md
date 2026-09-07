---
title: "Rotate or Flip: When to Use Which"
description: "What 90° rotation, 180° rotation, horizontal flip, and vertical flip are each for, and how EXIF rotation tags affect the final result."
date: 2026-09-07
lang: en
slug: rotate-vs-flip
---

## The Four Basic Operations

Image Converter provides four fundamental rotate/flip operations:

- **Rotate left 90°**: Turn a portrait image into landscape.
- **Rotate right 90°**: Turn a landscape image into portrait.
- **180°**: Flip the image completely upside down.
- **Horizontal flip**: Mirror left and right.
- **Vertical flip**: Mirror up and down.

Sounds simple, but knowing when to use which trips many people up.

## Rotation: 90° Steps

### 90° Rotation

90° rotation is the most common operation. Scenarios include:

- **Landscape-mode video frames captured on a phone**: The orientation is wrong and needs to be rotated.
- **Scanned documents facing the wrong way**: The scanner was placed incorrectly, so the resulting file is reversed.
- **Combining photos with different orientations**: Unify the orientation before stitching.

90° rotation is lossless — pixels are rearranged but no information is lost.

### 180° Rotation

Two 90° rotations, or a single 180° rotation. Scenarios include:

- **An image that's flipped upside down**: For example, a photo rotated 180° by mistake.
- **Stitching multiple images when one faces the wrong way**: Unify the orientation.

180° is also lossless.

## Flipping: Horizontal and Vertical

### Horizontal Flip (Left-Right Mirror)

- **Selfie mirror correction**: Some phones mirror selfies automatically, so what the subject sees is reversed from reality.
- **Reversing mirrored text**: Photos of mirrors, screens, or reflective surfaces.
- **Design effects**: Mirror compositions, previewing left-right symmetric layouts.

### Vertical Flip (Up-Down Mirror)

- **Negative effect**: Simulating traditional film negatives.
- **Mirror composition**: Previewing a water-reflection look.
- **Special design needs**: Previewing top-bottom symmetry for posters or packaging.

## EXIF Rotation: The Easiest Trap to Fall Into

Many phones (especially iPhones) **only write a rotation tag into the photo's metadata instead of actually rotating the pixels**.

That means:

- It looks correct in the photo library.
- It opens at the wrong angle in some apps.
- It uploads at the wrong angle to some platforms.

Image Converter reads the EXIF Orientation tag and **truly rotates the pixels** before exporting. The saved image opens in the correct orientation anywhere.

## Rotate or Flip: Scenario Reference

| Symptom | Action | Why |
|---|---|---|
| Landscape video frame is portrait | 90° rotation | Video orientation doesn't match display orientation. |
| Selfie left-right is reversed | Horizontal flip | The phone mirrored it automatically. |
| Scanned document faces the wrong way | 90° rotation | The scanner was placed incorrectly. |
| Mirrored text in a reflection | Horizontal flip | Mirror imaging. |
| Whole photo is upside down | 180° rotation | The phone was held the wrong way. |
| Inverted water reflection | Vertical flip | Simulate a reflection effect. |

If it's just an EXIF tag issue, **there's nothing to do** — Image Converter handles it automatically during conversion.

