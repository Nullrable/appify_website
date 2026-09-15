---
title: "Video Speed - Continuous Slider from 0.25x to 4x"
description: "One slider, from 0.25x slow motion to 4x fast forward - works for slow-mo tutorials and quick demos. Export a new video, original untouched."
date: 2026-09-15
lang: en
slug: speed
---

## Video speed

The rhythm is wrong, the story slips. A tutorial runs too fast, the audience can't keep up; a demo runs too slow, viewers get drowsy. The Speed tool gives you one slider, continuously from 0.25x to 4x - drag it slowly to where you want the rhythm.

### Slow down

Between 0.25x and 1x - good for shots where you want to explain in detail. Demonstrating a hand gesture in an online class, slowed to 0.5x, is when viewers actually see the key point. In sports footage, a highlight slowed to 0.25x reveals every detail.

### Speed up

Between 1x and 4x - good for compressing waits or skipping irrelevant stretches. A ten-minute time-lapse, accelerated to 4x, hits harder. Boring stretches in a process demo can fly by.

### How to use it

Pick a video, and a dot slider appears. Drag it to where you want - the slider shows the current multiplier. If it feels wrong, let go and drag again. Confirm to start the export. The original video isn't touched.

### What about the audio?

Speed changes both the picture and the audio at once. When the picture slows down, the audio slows down too - you'll hear a slow drawl, with the pitch dropping along with it; when the picture speeds up, the audio speeds up, sounding squished and high-pitched. This is the standard behavior of ffmpeg's atempo filter: audio and video change speed together, pitch shifts with the multiplier. If you only want to change the picture without touching the audio, use Speed to generate the new video, then use Extract Audio on the original to save a copy of the original sound track, and combine them in a third-party app.
