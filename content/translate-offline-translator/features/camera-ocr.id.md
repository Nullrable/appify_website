---
title: "OCR kamera: arahkan, ambil, terjemahkan"
description: "OCR di perangkat melalui vision_text_recognition dengan orientasi akurat tingkat perangkat keras, bahkan saat UI perangkat terkunci pada potret."
date: 2026-09-03
lang: id
slug: camera-ocr
icon: camera
---

OCR kamera menjalankan OCR secara lokal menggunakan paket `vision_text_recognition` yang di-fork yang mendukung aksara Latin, Tionghoa (sederhana dan tradisional), Jepang, dan Korea. Tidak ada yang diunggah untuk pengenalan. Setiap blok yang dikembalikan oleh mesin OCR membawa bounding box dan teks yang terdeteksi sendiri; halaman hasil melukis terjemahan di atas koordinat yang sama sehingga tata letak asli dipertahankan.

## Alur ambil gambar

1. **Inisialisasi kamera.** Pengontrol kamera diinisialisasi secara asinkron dengan status eksplisit `initializing / ready / failed`. Saat gagal, tombol coba lagi ditampilkan untuk menjalankan inisialisasi ulang tanpa masuk kembali ke penjaga `initializing`.
2. **Orientasi nyata.** `DeviceOrientation` dan EXIF iOS tidak dapat diandalkan saat aplikasi terkunci potret. Aplikasi membaca akselerometer mentah melalui `sensors_plus` dan menyimpan frame terbaru, sehingga rana menangkap arah pegangan yang sebenarnya meskipun UI terkunci. Orientasi EXIF kemudian direkonsiliasi dengan kebenaran lapangan ini.
3. **Rana.** Ketuk untuk menangkap dengan rasio aspek pratinjau saat ini. Frame yang ditangkap diturunkan skalanya ke tepi maksimum yang dapat dikonfigurasi sebelum OCR — kebanyakan halaman memerlukan 1500–2000 piksel di tepi panjang agar mesin dapat membaca teks kecil tanpa membengkakkan memori.
4. **Flash.** Empat mode di jendela bidik — otomatis, mati, hidup, dan senter — dengan sakelar terikat pada API flash sistem.

## Apa yang dikembalikan OCR

- **Bounding box per blok.** Setiap TextBlock memiliki persegi panjang sendiri. Halaman hasil menggunakannya untuk memposisikan teks terjemahan persis di atas teks sumber.
- **Teks dan urutan blok.** Teks bahasa sumber per blok, dalam urutan yang dikeluarkan mesin (atas ke bawah, kiri ke kanan secara default).
- **Keyakinan.** Setiap blok membawa keyakinannya sendiri. Blok di bawah ambang batas dirender di halaman hasil tetapi ditandai sebagai "keyakinan rendah" agar pengguna dapat memverifikasi.

## Mengapa di perangkat

- **Privasi.** Foto rambu jalan, kontrak, atau formulir medis tidak pernah meninggalkan perangkat untuk OCR.
- **Latensi.** Tidak ada round-trip jaringan. OCR halaman tipikal yang diambil ponsel selesai dalam waktu kurang dari satu detik di perangkat terkini.
- **Offline.** OCR bekerja di pesawat, di ruang bawah tanah, dan di wilayah tanpa jangkauan. Mesin yang sama yang menjalankan pengenalan bekerja sepenuhnya dari model di perangkat.

## Praktik terbaik untuk OCR yang akurat

1. **Cahaya merata dan tidak langsung.** Cahaya jendela mengungguli lampu sorot langit-langit. Bayangan yang melintasi halaman adalah penyebab paling umum dari karakter yang salah dibaca.
2. **Ketuk untuk fokus.** Jika fokus otomatis memilih subjek yang salah (meja, jari, tepi halaman), ketuk tengah teks sebelum mengambil.
4. **Halaman datar.** Halaman yang melengkung ke arah punggung buku kehilangan karakter di dekat jahitan. Tekan halaman agar datar dengan tangan lain jika memungkinkan.
4. **Satu bahasa per pengambilan.** Halaman dengan aksara campuran bekerja dalam satu lintasan, tetapi halaman yang memadukan Latin dengan Jepang vertikal paling baik dibagi menjadi dua pengambilan.
