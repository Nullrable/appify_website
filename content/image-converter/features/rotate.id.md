---
title: "Rotasi dan balik"
description: "Rotasi dengan langkah 90°, mendukung pembalikan horizontal/vertikal, secara otomatis mengoreksi arah rotasi EXIF sebelum ekspor, file yang disimpan tampil tegak di mana pun dibuka."
date: 2026-09-07
lang: id
slug: rotate
---

## Rotasi dan balik

Foto miring, hasil pindaian dokumen arahnya salah, tangkapan layar perlu diproses pencerminan — semua skenario ini memerlukan rotasi atau pembalikan. Image Converter menyediakan fungsi dasar rotasi dan pembalikan dengan pengoperasian yang intuitif.

## Rotasi: langkah 90°

Aplikasi mendukung rotasi gambar dengan langkah 90°:

- **Putar kiri 90°**: mengubah foto vertikal menjadi horizontal, atau mengoreksi foto yang ditandai salah setelah pengambilan horizontal
- **Putar kanan 90°**: kebalikan dari putar kiri
- **180°**: rotasi 90° dua kali berturut-turut

Setiap rotasi akan mengkodekan ulang gambar, memastikan file yang diekspor tampil dengan arah yang benar di perangkat mana pun.

## Pembalikan: horizontal / vertikal

Selain rotasi, aplikasi juga mendukung pembalikan cermin:

- **Pembalikan horizontal**: pencerminan kiri-kanan, umumnya digunakan untuk swafoto, teks terbalik
- **Pembalikan vertikal**: pencerminan atas-bawah, umumnya digunakan untuk efek negatif atau komposisi cermin

## Pemrosesan otomatis rotasi EXIF

Sebagian telepon (terutama iPhone) saat memotret hanya menulis tag rotasi di metadata foto, bukan benar-benar memutar piksel. Foto seperti ini di beberapa aplikasi "terlihat benar di layar, miring saat diekspor".

Image Converter akan membaca arah rotasi EXIF (tag Orientation), mengoreksi piksel sebelum ekspor. File yang disimpan tampil dengan arah yang benar di mana pun dibuka, tanpa bergantung pada perangkat lunak pembaca gambar untuk mengenali metadata.

