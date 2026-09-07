---
title: "Cara memilih kualitas kompresi: Perbandingan tingkat 10–90"
description: "Perbandingan efek aktual dari 9 preset (10/20/30/40/50/60/70/80/90) dan slider bebas 1–99, skenario mana yang harus memilih tingkat mana."
date: 2026-09-07
lang: id
slug: compress-quality
---

## Mengapa ada begitu banyak tingkat

Kompresi gambar adalah operasi lossy, semakin banyak detail yang dibuang, semakin kecil ukuran, semakin buruk kualitas. Pertanyaannya adalah "berapa banyak yang boleh dibuang" — standar untuk berbagi Moments dan foto cetakan sepenuhnya berbeda. Image Converter menyediakan 9 preset 10–90, ditambah slider bebas 1–99, mencakup semua skenario dari kompresi ekstrem hingga tingkat pengarsipan.

## Efek aktual dari 9 preset

### 10–30: kompresi ekstrem

- **Ukuran**: 5–15% dari gambar asli
- **Kualitas**: kehilangan yang jelas terlihat oleh mata telanjang, cocok untuk tangkapan layar teks murni, gambar blok warna
- **Skenario tipikal**: emoji WeChat, tangkapan layar panjang teks murni, berbagi sementara

Contoh: foto 5MB dikompresi ke tingkat 10 mungkin hanya 200–400KB. Tetapi detail wajah dan pemandangan akan menjadi buram.

### 40–60: sering digunakan untuk berbagi harian

- **Ukuran**: 15–30% dari gambar asli
- **Kualitas**: kehilangan dapat terdeteksi jika dilihat dengan teliti, tidak terasa saat (menjelajah) normal
- **Skenario tipikal**: Moments, Weibo, berbagi di obrolan

**60 adalah tingkat optimal untuk kebanyakan skenario** — kehilangan kualitas hampir tidak terlihat, sementara ukuran berkurang drastis.

### 70–80: tingkat rekomendasi universal

- **Ukuran**: 30–50% dari gambar asli
- **Kualitas**: hampir tidak dapat dibedakan dari gambar asli dengan mata telanjang
- **Skenario tipikal**: membutuhkan kualitas yang lebih baik sambil mengontrol ukuran

Tingkat 70 cocok untuk berbagi profesional, tingkat 80 cocok untuk (pra-pemrosesan) sebelum pengarsipan foto penting.

### 90: mendekati lossless

- **Ukuran**: 60–80% dari gambar asli
- **Kualitas**: hampir konsisten dengan gambar asli
- **Skenario tipikal**: materi arsip, pra-pemrosesan sebelum pencetakan

Melebihi tingkat 90 kurang berarti, JPG yang dihasilkan pada 100 memiliki ukuran lebih besar dari 90, tetapi peningkatan kualitas sudah tidak dapat dirasakan.

## Untuk apa slider bebas 1–99

9 preset mencakup 90% skenario, tetapi kadang-kadang membutuhkan kontrol yang lebih halus:

- **65**: sedikit lebih baik dari 60, sedikit lebih hemat dari 70
- **75**: sedikit lebih baik dari 70, sedikit lebih hemat dari 80
- **85**: sedikit lebih baik dari 80 tetapi masih dapat dikontrol
- **50 / 55**: menemukan titik keseimbangan yang lebih sesuai di antara 40–60

## Bandingkan secara real-time untuk menentukan tingkat

Setelah memilih satu gambar, aplikasi akan langsung mengompresi sesuai kualitas saat ini dan menampilkan:

- **Ukuran asli** vs **Ukuran setelah kompresi** (KB)
- **Rasio kompresi** (persentase)
- Penyegaran real-time — seret slider dan langsung melihat hasil baru

Jangan memilih tingkat berdasarkan (imajinasi), **bandingkan dengan mata** untuk menentukan tingkat yang paling sesuai.

## Rekomendasi tingkat untuk berbagai jenis konten

| Jenis konten | Tingkat yang direkomendasikan | Alasan |
|---|---|---|
| Tangkapan layar teks murni | 30–50 | Persyaratan tinggi untuk ketajaman tepi teks, tetapi latar belakang sederhana |
| Foto biasa | 60–75 | Keseimbangan kualitas dan ukuran |
| Potret close-up | 75–85 | Tekstur kulit tidak tahan terhadap kompresi berkualitas rendah |
| Foto pemandangan | 60–80 | Banyak transisi warna, mulai dari 60 untuk menghindari blok warna |
| Logo / draf desain | Gunakan PNG sebagai gantinya | Vektor atau blok warna murni seharusnya tidak menggunakan JPG |
| Tangkapan layar rekaman layar | 40–60 | Banyak teks dan ikon, kualitas rendah akan buram |

