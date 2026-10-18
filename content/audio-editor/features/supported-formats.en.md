---
title: "Complete Format List - 10 Audio Inputs + 4 Audio Outputs + 8 Video"
description: "Every format the Audio Editor supports in one place. 10 audio inputs: MP3, WAV, M4A, AAC, FLAC, OGG, Opus, AIFF, AMR, CAF. 4 audio outputs: MP3, WAV, FLAC, OGG. 8 video containers: MP4, MOV, M4V, AVI, MKV, WebM, FLV, WMV."
date: 2026-10-17
lang: en
slug: supported-formats
---

## Complete format list

This page is a cheat sheet - every audio and video format the Audio Editor supports, and when to pick which.

Input and output are two different sets: the app can read 10 audio formats, but only writes 4. Videos are read-only and aren't opened directly by the editor.

## Audio input formats (10)

The editor opens these 10 audio files - multi-track editing, enhancement, and conversion (compress / merge) all accept them as input:

| Format | When to use |
|---|---|
| **MP3** | Universal players, car systems, email attachments. Default pick. |
| **WAV** | Lossless master, ideal for mixing, archival, or re-editing. |
| **M4A** | The container version of AAC, common in the Apple ecosystem. |
| **AAC** | Apple ecosystem default, great detail at small size. |
| **FLAC** | Lossless but compressed - roughly half the size of WAV. |
| **OGG** | Open-source container, preferred by some professional players. |
| **Opus** | Modern low-latency codec, common in voice meetings, podcasts, and streaming. |
| **AIFF** | macOS / Logic ecosystem default, lossless. |
| **AMR** | Early mobile call-recording format, 3GPP standard. |
| **CAF** | Apple Core Audio container, ideal for iOS post-processing. |

## Audio output formats (4)

The editor, multi-track enhancement, and conversion can only write one of these 4 formats on export:

| Format | When to use |
|---|---|
| **MP3** | Universal default, recognized by virtually every device and player. |
| **WAV** | Lossless master, ideal for re-editing or archival. |
| **FLAC** | Lossless but compressed, roughly half the size of WAV. |
| **OGG** | Open-source container, preferred by some professional devices. |

## Video formats (8)

Video files are **not** opened directly by the editor. They only serve as a "source of audio tracks":

| Format | When to use |
|---|---|
| **MP4** | Universal, recognized by virtually every device and player. |
| **MOV** | Apple ecosystem default - iMovie, Final Cut, Logic all take it. |
| **M4V** | iTunes-era video container, behaves like MP4 on Apple devices. |
| **AVI** | Old-school container, best compatibility with legacy Windows apps. |
| **MKV** | Open-source container, can hold multiple audio tracks and subtitles. Good for HD archival. |
| **WebM** | Common web video format, open source. |
| **FLV** | Old Flash-era streaming format, useful for legacy footage. |
| **WMV** | Windows Media Video, Windows ecosystem. |

## How to choose

- **Universal sharing** -> MP3 audio, MP4 video
- **Second pass in the Apple ecosystem** -> MOV video
- **Lossless archival** -> WAV or FLAC audio
- **Web or open-source workflows** -> OGG audio, WebM video

## Videos aren't edited

The editor's timeline only accepts audio clips. Video files can only act as a "track source" - the editor itself does not cut them.

## Fully local

Whether audio or video, all decoding, encoding, and rewriting happens on the iPhone. Files never leave the device.
