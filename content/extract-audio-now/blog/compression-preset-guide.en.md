---
title: "How to Pick a Compression Preset - Low, Medium, High, or Custom Bitrate"
description: "Three presets cover most cases, but knowing when to pick Low, when to go High, and when to drag the custom bitrate slider makes the difference. This guide explains."
date: 2026-09-15
lang: en
slug: compression-preset-guide
---

## How to pick a compression preset

The Compress tool ships with three presets - Low, Medium, and High - plus a custom bitrate slider. First-time users tend to grab whichever is closest and only notice the result wasn't what they wanted after exporting. Here's how to pick by scenario.

## What each preset actually does

**Low** - size first. A 100 MB video can shrink to around 20 MB. You'll see visible quality loss: edges get mushy, fine detail disappears. Right for: group chats, email attachments, footage where quality doesn't matter.

**Medium** - the balance. Output is roughly a third to half the original size, with no obvious difference in everyday viewing. Right for: 90% of cases. WeChat Moments, social platforms, sharing with family, work presentations - all covered.

**High** - quality first. Compression is gentle, landing around 60-70% of the original. The result looks almost identical to the source but is meaningfully smaller. Right for: footage you want to keep, key shots you might re-edit later, long-term archival.

## When the custom bitrate slider earns its keep

The three presets are a conservative choice - their parameters are tuned for "typical phone video." Some footage isn't typical:

- **Very short clips (a few seconds to a dozen)** - all three presets overshoot; a custom low bitrate is enough
- **Very high resolution (4K / 8K)** - the relative compression ratio of the presets may not be aggressive enough; drag the custom bitrate down
- **Screen recordings** - screen content compresses more cleanly than camera footage, so you can go lower
- **Animation or high-contrast imagery** - more forgiving than real-world footage; even Low looks fine

## A simple decision flow

1. Is this video meant to be sent or kept? Sent -> Medium. Kept -> High.
2. Is there a size cap? (group chat limit, email attachment) Yes -> Medium or custom.
3. Will a lot of people watch it? Yes -> Medium (best compatibility).
4. Can you accept a small loss you can't quite put your finger on? Yes -> try Low and roughly halve the size.
5. None of the above? Pick **Medium**.

## What if you over-compressed

There's no "undo compression" button after the fact - but your original isn't deleted. Just pick again with a different preset. Each compression pass is independent, so quality loss doesn't accumulate across rounds.
