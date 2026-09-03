---
title: "Bagaimana terjemahan offline bekerja di iPhone Anda"
description: "Pemaparan lengkap tentang bagaimana aplikasi menyelesaikan terjemahan tanpa mengunggah satu byte pun teks sumber ke server."
date: 2026-09-03
lang: id
slug: how-offline-translation-works
---

## Bagaimana terjemahan offline bekerja di iPhone Anda

Pipeline terjemahan aplikasi berjalan sepenuhnya di perangkat. Tidak ada foto, tidak ada hasil OCR, dan tidak ada permintaan terjemahan yang meninggalkan iPhone. Tulisan ini menjelaskan apa yang sebenarnya dimaksud «di perangkat», di mana model hidup, dan trade-off apa yang datang dengan menjalankan terjemahan secara lokal.

## Bagian yang berjalan di perangkat

Ada tiga pekerjaan independen yang terjadi di telepon untuk terjemahan kamera:

1. **OCR.** Paket `vision_text_recognition` yang di-fork menjalankan pengenalan teks secara lokal. Mendukung skrip Latin, Tionghoa (sederhana dan tradisional), Jepang, dan Korea. Setiap blok teks yang dikenali membawa bounding box dan teks yang terdeteksi sendiri.
2. **Terjemahan.** Mesin terjemahan di perangkat Google ML Kit mengambil output OCR dan menghasilkan teks yang diterjemahkan. Mesin dikemas sebagai model bahasa yang dapat diunduh per pasangan bahasa; aplikasi mengunduh model sesuai permintaan dan menyimpannya di cache di disk.
3. **Rendering.** Halaman hasil melukis setiap blok yang diterjemahkan di atas foto asli, menggunakan bounding box yang dikembalikan oleh mesin OCR. Tidak diperlukan round-trip ke server untuk merender overlay — gambar, blok sumber, dan terjemahan semuanya hidup di memori di perangkat.

## Mengapa ini penting

- **Privasi.** Foto rambu jalan, kontrak, formulir medis, dan korespondensi pribadi tetap berada di perangkat. Tidak ada langkah unggahan di mana pun dalam pipeline, jadi tidak ada yang bisa bocor, disita, atau dijual.
- **Latensi.** Tidak ada round-trip jaringan. OCR halaman tipikal yang diambil smartphone selesai dalam waktu kurang dari satu detik di perangkat terkini, dan terjemahan hasil per blok mengalir saat setiap blok selesai.
- **Offline.** Pipeline berjalan di pesawat, di ruang bawah tanah, di terowongan, di kereta, di negara tanpa jangkauan. Mesin OCR dan mesin terjemahan diunduh sekali dan digunakan kembali tanpa batas; tidak ada yang diambil per tangkapan.
- **Biaya.** Aplikasi tidak membayar per karakter ke API terjemahan, jadi fitur tersebut tidak memerlukan paywall berbasis penggunaan atau batas karakter bulanan untuk tetap berkelanjutan. Tingkat gratis adalah pipeline yang sama.

## Di mana model hidup

ML Kit menerbitkan model terjemahan di perangkat untuk 19 bahasa. Setiap model berukuran sekitar 10–50 MB. Ketika Anda memilih bahasa sumber atau target, aplikasi mengunduh model yang sesuai ke sandbox lokal aplikasi pada penggunaan pertama. Model tetap ada di seluruh restart aplikasi; menghapusnya akan memulihkan penyimpanan segera.

Daftar lengkap bahasa yang didukung: Arab, Tionghoa (Sederhana), Ceko, Belanda, Inggris, Prancis, Jerman, Kroasia, Hungaria, Italia, Jepang, Korea, Polandia, Portugis, Rumania, Rusia, Slovakia, Slovenia, dan Spanyol.

## Apa yang diunggah (dan apa yang tidak)

- **Tidak diunggah.** Foto, teks OCR, teks terjemahan, entri riwayat, status model bahasa. Tidak ada dari semua ini yang meninggalkan perangkat.
- **Diunggah.** Laporan crash anonim dan counter agregat (mis., «permintaan terjemahan per hari»). Laporan crash tidak menyertakan konten pengguna; jika laporan di masa depan pernah memuat konten, itu akan menjadi bug dan harus dilaporkan.

## Trade-off dari menjalankan secara lokal

- **Daftar bahasa terbatas.** Hanya bahasa yang ML Kit terbitkan sebagai model di perangkat yang didukung. Daftar dikurasi dan saat ini memiliki 19 entri.
- **Unduhan model diperlukan.** Terjemahan pertama untuk pasangan bahasa memicu unduhan satu kali. Halaman manajer model menunjukkan status dan memungkinkan Anda mengunduh sebelumnya untuk perjalanan offline.
- **Kualitas.** Kualitas terjemahan di perangkat sebanding dengan terjemahan cloud untuk teks pendek yang terbentuk dengan baik. Paragraf panjang atau jargon spesifik domain mungkin berbeda dari mesin cloud yang di-tune untuk domain tersebut.
- **Komputasi.** OCR dan terjemahan menggunakan CPU dan Neural Engine telepon. Dampak baterai untuk satu tangkapan kecil, tetapi terukur untuk alur kerja batch.

## Apa artinya ini bagi Anda

Jika Anda pernah ragu untuk memotret dokumen sensitif karena foto akan berakhir di server orang lain, keraguan itulah alasan aplikasi ini ada. Setiap bagian dari pipeline berjalan secara lokal, dan model data aplikasi dirancang dengan premis bahwa tidak ada yang meninggalkan perangkat kecuali pengguna secara eksplisit memilih untuk membagikan hasil.
