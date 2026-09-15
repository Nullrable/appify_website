---
title: "Extract Audio from Video - MP3, AAC, M4A, WAV, FLAC, OGG"
description: "Pull the audio track out of any video and export it as MP3, AAC, M4A, WAV, FLAC or OGG. Up to 20 clips at once, fully local, ready in seconds."
date: 2026-09-15
lang: en
slug: extract-audio
---

## Extract audio from video

What hits you in a video is often just a piece of the sound. Stripping the video down to pure audio - so you can listen later, drop it into an edit, or feed it to a podcast - is way easier than carrying the picture around. Extract Audio supports six output formats: **MP3, AAC, M4A, WAV, FLAC, OGG**.

### Pick clips and a format

Pick one or more videos from Photos or Files. Up to 20 clips at a time. After you pick, a row of format chips appears at the top - MP3 is universal, AAC fits the Apple ecosystem, WAV keeps the lossless master, FLAC is lossless but compressed, OGG is what open-source players want. Pick whichever; the choice is yours.

### Sequential processing

The 20 clips don't all run at once - the encoder takes them one by one, starting the next only after the previous finishes. Processing time depends mostly on video length and output format. Short clips finish in seconds; a queue of lecture screen recordings will take its time, but you can go refill your coffee in the meantime.

### Where the output goes

When done, the audio file is first written to the app's sandbox folder (named after the source video, with the new extension), then a prompt asks you to pick "Save to Files" - the iOS Files app lets you choose a destination folder. The extracted MP3/AAC/M4A/WAV/FLAC/OGG files don't go into the Photos library directly (iOS Photos only accepts the three video containers mp4/mov/m4v). The original video isn't modified - you can run the tool on it again any time.

### Audio quality

The audio bitrate follows the format: MP3, AAC, M4A default to 192 kbps, OGG to 160 kbps, WAV and FLAC preserve the original lossless stream (no bitrate cap). There's no manual bitrate slider at the moment - the format itself has already picked the balance point.

### Local processing

Audio extraction runs entirely on your iPhone. Videos aren't uploaded, audio isn't sent out. Even with no signal on the subway, you can export as usual.
