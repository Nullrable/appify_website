---
title: "Daftar lengkap format - 10 input audio + 4 output audio + 8 video"
description: "Setiap format yang didukung editor audio dalam satu tempat. 10 input audio: MP3, WAV, M4A, AAC, FLAC, OGG, Opus, AIFF, AMR, CAF. 4 output audio: MP3, WAV, FLAC, OGG. 8 wadah video: MP4, MOV, M4V, AVI, MKV, WebM, FLV, WMV."
date: 2026-10-17
lang: id
slug: supported-formats
---

## Daftar lengkap format

Halaman ini adalah lembar contekan — setiap format audio dan video yang didukung editor audio, serta kapan memilih yang mana.

Input dan output adalah dua himpunan yang berbeda: aplikasi dapat membaca 10 format audio, tetapi hanya menulis 4. Video hanya-baca dan tidak dibuka langsung oleh editor.

## Format input audio (10)

Editor membuka 10 berkas audio ini — penyuntingan multi-track, peningkatan, dan konversi (compress / merge) semuanya menerima mereka sebagai input:

| Format | Kapan digunakan |
|---|---|
| **MP3** | Pemutar universal, sistem mobil, lampiran email. Pilihan bawaan. |
| **WAV** | Master lossless, ideal untuk mixing, pengarsipan, atau penyuntingan ulang. |
| **M4A** | Versi wadah dari AAC, lazim di ekosistem Apple. |
| **AAC** | Bawaan ekosistem Apple, detail bagus pada ukuran kecil. |
| **FLAC** | Lossless tetapi terkompresi — sekitar separuh ukuran WAV. |
| **OGG** | Wadah sumber terbuka, disukai sebagian pemutar profesional. |
| **Opus** | Codec modern berlatensi rendah, lazim dalam rapat suara, podcast, dan streaming. |
| **AIFF** | Bawaan ekosistem macOS / Logic, lossless. |
| **AMR** | Format perekaman panggilan ponsel awal, standar 3GPP. |
| **CAF** | Wadah Apple Core Audio, ideal untuk pascaproses di iOS. |

## Format output audio (4)

Editor, peningkatan multi-track, dan konversi hanya dapat menulis salah satu dari 4 format ini saat mengekspor:

| Format | Kapan digunakan |
|---|---|
| **MP3** | Bawaan universal, dikenali oleh hampir setiap perangkat dan pemutar. |
| **WAV** | Master lossless, ideal untuk penyuntingan ulang atau pengarsipan. |
| **FLAC** | Lossless tetapi terkompresi, sekitar separuh ukuran WAV. |
| **OGG** | Wadah sumber terbuka, disukai sebagian peralatan profesional. |

## Format video (8)

Berkas video **tidak** dibuka langsung oleh editor. Mereka hanya berfungsi sebagai "sumber trek audio":

| Format | Kapan digunakan |
|---|---|
| **MP4** | Universal, dikenali oleh hampir setiap perangkat dan pemutar. |
| **MOV** | Bawaan ekosistem Apple — iMovie, Final Cut, Logic semuanya menerima. |
| **M4V** | Wadah video era iTunes, berperilaku seperti MP4 di perangkat Apple. |
| **AVI** | Wadah klasik, kompatibilitas terbaik dengan aplikasi Windows lawas. |
| **MKV** | Wadah sumber terbuka, dapat memuat banyak trek audio dan subtitle. Cocok untuk pengarsipan HD. |
| **WebM** | Format video web yang umum, sumber terbuka. |
| **FLV** | Format streaming lawas era Flash, berguna untuk materi lawas. |
| **WMV** | Windows Media Video, ekosistem Windows. |

## Cara memilih

- **Berbagi universal** -> audio MP3, video MP4
- **Pemrosesan lanjutan di ekosistem Apple** -> video MOV
- **Pengarsipan lossless** -> audio WAV atau FLAC
- **Alur kerja web atau sumber terbuka** -> audio OGG, video WebM

## Video tidak disunting

Lini masa editor hanya menerima klip audio. Berkas video hanya dapat berperan sebagai "sumber trek" — editor sendiri tidak memotongnya.

## Sepenuhnya lokal

Baik audio maupun video, semua pendekodean, pengodean, dan penulisan ulang terjadi di iPhone. Berkas tidak pernah meninggalkan perangkat.
