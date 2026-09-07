---
title: "Enkripsi PDF"
description: "Petunjuk penggunaan fitur enkripsi Image to PDF: mengatur kata sandi buka dan kata sandi pemilik, mengontrol izin cetak, salin, dan改, default menggunakan enkripsi AES-256."
date: 2026-09-07
lang: id
slug: pdf-encrypt
---

## Enkripsi PDF

Tambahkan kunci kata sandi ke PDF. Sebelum mengirim kontrak, salinan identitas pindaian, dan materi keuangan melalui email atau alat obrolan, enkripsi terlebih dahulu untuk memastikan hanya mereka yang memiliki kata sandi yang dapat membuka.

## Dua Jenis Kata Sandi, Masing-masing dengan Tugasnya

- **Kata sandi pengguna (kata sandi buka)**: setelah diatur, siapa pun yang membuka PDF ini perlu memasukkan kata sandi ini — ini adalah gerbang pertama untuk file;
- **Kata sandi pemilik (opsional)**: diatur terpisah dari kata sandi pengguna; mereka yang memiliki kata sandi pemilik dapat改 konfigurasi izin file.

## Kontrol Izin yang Halus

Saat mengaktifkan enkripsi, Anda juga dapat mengontrol operasi mana yang diizinkan untuk PDF ini:

- **Izinkan cetak** (default aktif): apakah file ini boleh dicetak;
- **Izinkan salin** (default nonaktif): apakah teks atau gambar di dalamnya boleh disalin;
- **Izinkan改** (default nonaktif): apakah konten file boleh diedit.

Sebagai contoh, saat mengirim报价单 keluar, Anda dapat mengaktifkan cetak, menonaktifkan salin dan改 —方便对方查看 又减少内容被直接挪用的风险。

## Standar Enkripsi AES

Enkripsi secara default采用 **AES-256**, dan juga dapat dialihkan ke AES-128 untuk kompatibilitas yang lebih baik. Enkripsi dilakukan secara lokal di perangkat; konten PDF tidak akan diunggah ke server mana pun.
