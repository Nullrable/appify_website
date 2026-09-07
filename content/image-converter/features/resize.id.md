---
title: "Penyesuaian ukuran"
description: "Perbesar/perkecil gambar menurut lebar dan tinggi target, menyediakan preset resolusi umum, mendukung mempertahankan rasio aspek asli untuk menghindari distorsi."
date: 2026-09-07
lang: id
slug: resize
---

## Penyesuaian ukuran

Resolusi gambar terlalu besar memakan ruang, terlalu kecil menjadi buram di layar — penyesuaian ukuran adalah kebutuhan dasar dalam pemrosesan gambar. Image Converter menyediakan alat penyesuaian ukuran yang intuitif.

## Perbesar/perkecil vs pangkas

Perhatikan perbedaan dua konsep berikut:

- **Pangkas**: memotong sebagian dari gambar asli, "isi" dari gambar keluaran berubah
- **Penyesuaian ukuran (perbesar/perkecil)**: memperbesar atau memperkecil seluruh gambar secara proporsional, "isi" dari gambar keluaran tidak berubah

Skenario yang cocok untuk penyesuaian ukuran: mengubah gambar besar 4000×3000 menjadi 1920×1080 untuk (menyesuaikan layar), menyeragamkan semua foto ke ukuran yang sama untuk kolase, mengompresi gambar di bawah resolusi target.

## Preset dan kustom

Aplikasi menyediakan preset resolusi umum (seperti 1920×1080, 1280×720, 1080×1080, dll.), juga mendukung lebar dan tinggi kustom:

- Masukkan lebar target, tinggi akan dihitung otomatis sesuai rasio gambar asli
- Masukkan tinggi target, lebar akan dihitung otomatis sesuai rasio gambar asli
- Sakelar kunci rasio aspek dapat dimatikan, tentukan lebar dan tinggi secara bebas (perhatian: penentuan bebas dapat mengubah rasio aspek)

## Pentingnya mempertahankan rasio aspek

Jika rasio aspek tidak dikunci, gambar akan tertarik atau tertekan. Potret akan berubah bentuk, pemandangan akan terdistorsi, teks akan melengkung. Kecuali ada kebutuhan khusus, disarankan untuk selalu mempertahankan rasio aspek asli dan hanya mengubah ukuran.

## Perbesar/perkecil selesai secara lokal

Proses penyesuaian ukuran dilakukan secara lokal di perangkat, gambar asli tidak diunggah. Hasil perbesar/perkecil dikirim melalui panel berbagi sistem. Lihat penjelasan lengkap tentang pemrosesan data di [kebijakan privasi](/id/image-converter/privacy/).

