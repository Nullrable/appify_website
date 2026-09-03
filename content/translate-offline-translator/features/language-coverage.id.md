---
title: "19 bahasa: cakupan ML Kit, pemetik, dan deteksi otomatis"
description: "Terjemahan di perangkat ML Kit mendukung 19 bahasa. Pemetik mencakup pencarian, yang baru digunakan, dan opsi deteksi otomatis untuk sumber."
date: 2026-09-03
lang: id
slug: language-coverage
icon: globe
---

Aplikasi menerjemahkan antara 19 bahasa di perangkat melalui Google ML Kit. Daftar lengkap: Arab, Tionghoa (Sederhana), Ceko, Belanda, Inggris, Prancis, Jerman, Kroasia, Hungaria, Italia, Jepang, Korea, Polandia, Portugis, Rumania, Rusia, Slovakia, Slovenia, dan Spanyol. Bahasa baru ditambahkan saat ML Kit menerbitkan model di perangkat untuk mereka.

## Pemetik bahasa

Pemetik adalah satu-satunya titik masuk untuk memilih bahasa sumber dan target, diakses dari bilah bahasa di atas halaman kamera atau halaman terjemahan teks.

- **Pencarian.** Ketik di kolom pencarian untuk memfilter berdasarkan nama bahasa Inggris atau kode bahasa. Daftar diperbarui saat Anda mengetik.
- **Baru digunakan.** Bagian atas menunjukkan bahasa yang Anda gunakan dalam terjemahan terakhir. Pemilihan secara otomatis memindahkannya ke atas.
- **Deteksi otomatis (hanya sumber).** Muncul sebagai opsi pertama di pemetik sumber. Memilihnya membuat aplikasi menebak bahasa sumber per tangkapan (lihat di bawah).
- **Semua bahasa.** Di bawah bagian yang baru digunakan adalah daftar lengkap 19 bahasa yang didukung dengan bendera negara mereka.

Pemetik sumber dan target dapat dibuka secara independen. Memilih sumber yang sama dengan target menyoroti ini di pemetik untuk mencegah terjemahan-ke-diri-sendiri yang tidak disengaja.

## Deteksi otomatis untuk sumber

Ketika sumber set to otomatis, aplikasi perlu memilih bahasa sumber ML Kit spesifik per terjemahan. Dua strategi digunakan:

- **Untuk tangkapan foto.** Petunjuk bahasa per blok dari mesin OCR diagregasi; bahasa mayoritas lintas blok menjadi sumber ML Kit. Halaman satu bahasa terurai dengan bersih; halaman skrip campuran kembali ke default.
- **Untuk terjemahan teks.** Heuristik tingkat kelas karakter di Dart menghitung karakter menurut kelas skrip: karakter Han → Tionghoa Sederhana, kana → Jepang, hangul → Korea, Latin → Inggris, Sirilik → Rusia, aksara Arab → Arab, dll. Input kosong atau hanya spasi default ke bahasa Inggris.

Deteksi otomatis tidak pernah gagal secara diam-diam. Halaman selalu memiliki bahasa sumber ML Kit spesifik saat terjemahan berjalan.

## Mengapa 19 dan tidak lebih

Jumlahnya dibatasi oleh apa yang ML Kit terbitkan sebagai model di perangkat. Bahasa di luar daftar ini tidak dapat diterjemahkan di perangkat dengan ML Kit. Daftar dikurasi: setiap entri memiliki model yang dapat diunduh sebesar 10–50 MB. Pemetik mengecualikan bahasa yang tidak didukung ML Kit, meskipun itu kode BCP 47 yang valid.

## i18n UI

Antarmuka aplikasi itu sendiri (menu, pengaturan, pesan kesalahan) diterjemahkan ke 10 bahasa: Arab, Inggris, Jerman, Korea, Prancis, Jepang, Rusia, Spanyol, Vietnam, dan Tionghoa (Sederhana). Bahasa terjemahan adalah superset dari set i18n untuk beberapa pasangan umum (en ↔ ja, en ↔ zh, en ↔ es, en ↔ fr).
