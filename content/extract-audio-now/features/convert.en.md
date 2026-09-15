---
title: "Video Format Conversion - mp4, mov, m4v, mkv, avi, flv, ts, mpg, mpeg, 3gp, 3g2"
description: "Convert any video to mp4, mov, m4v, mkv, avi, flv, ts, mpg, mpeg, 3gp or 3g2. Multi-select, sequential processing, original file untouched, new file only written after you're ready."
date: 2026-09-15
lang: en
slug: convert
---

## Video format conversion

Different devices, platforms, and apps take different video containers. Throw a video at a player that doesn't know its container, and you'll get an error nine times out of ten. Format conversion does one simple thing: re-encode the video into something the target device can play. It supports **11 output formats**: **mp4, mov, m4v, mkv, avi, flv, ts, mpg, mpeg, 3gp, 3g2**.

### What a container is

A video file is actually a "box" holding video streams, audio streams, and subtitles. Boxes (containers) come in different shapes: mp4 is universal, mov is Apple's, mkv holds multiple audio tracks, ts is for broadcast, 3gp is the old phone format. When you swap one box for another, the contents get re-encoded - video is always H.264, audio is always AAC, with only mpg and mpeg as exceptions (software MPEG-2 + MP2, because H.264 doesn't fit in those two legacy containers).

### How to use it

Pick one or more videos. A row of format chips appears at the top - pick your target. Tap start, and they're processed sequentially: one finishes, then the next begins. The original video isn't touched; you can cancel any time before the new video writes to disk.

### Who needs it

- Old Android phones only take 3gp / 3g2 - convert family footage for them
- Editing software only takes mov - convert phone-recorded mp4 to mov for import
- Online platforms demand a specific container - batch-convert before uploading
- Email attachments have size limits - convert to a smaller container

### Processing time depends on length, not the container

Conversion re-encodes video and audio, so time is mostly a function of duration. Short videos take seconds; a 4K minute may take a minute or two. The actual gap between containers (H.264 vs. MPEG-2, for example) is bigger than you'd think - the same video converted to mp4 vs. mpeg can be several times slower for mpeg, because MPEG-2 is software-encoded. If all you want is "different wrapper, same picture," use Compress instead - Compress can tweak just the bitrate without touching the container.

### Does the picture change?

Yes, because the video is re-encoded. From an H.264 source to mp4 (mp4 defaults to H.264 + AAC), the picture should look close to the original; but H.264's bitrate and preset get re-decided, so true lossless is impossible. If you need absolute lossless, use Clip - Clip uses stream copy, so the original video frames move over byte-for-byte.
