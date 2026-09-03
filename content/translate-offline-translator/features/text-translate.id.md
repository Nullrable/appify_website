---
title: "Terjemahan teks: tempel, ketik, terjemahkan"
description: "Halaman terjemahan khusus teks yang berbagi status pasangan bahasa yang sama dengan halaman kamera."
date: 2026-09-03
lang: id
slug: text-translate
icon: keyboard
---

Halaman terjemahan teks adalah pintu masuk terpisah dari halaman kamera untuk kasus di mana sumber sudah berupa teks. Buka dari bawah halaman kamera dan tempel, ketik, atau dikte paragraf; mesin ML Kit yang sama mengembalikan terjemahan.

## Mengapa halaman terpisah

OCR kamera dioptimalkan untuk gambar. Ketika sumber sudah berupa teks — cuplikan email, pesan chat, paragraf yang ditempel — langkah OCR menjadi mubazir. Halaman terjemahan teks melewati OCR sepenuhnya dan memasukkan input langsung ke penerjemah ML Kit.

Ini juga memungkinkan Anda menerjemahkan secara batch dengan menyalin dan menempel paragraf yang lebih panjang daripada memotretnya. Untuk teks padat tanpa halaman yang nyaman untuk difoto, ini lebih cepat dan lebih akurat.

## Cara kerjanya

- **Status bahasa bersama.** Halaman teks membaca dan menulis pasangan bahasa sumber/target yang sama dengan halaman kamera. Memilih bahasa target di satu tempat berlaku untuk yang lain; bolak-balik tidak требует memilih ulang bahasa.
- **Deteksi otomatis untuk sumber.** Jika sumber diatur ke «Deteksi Otomatis», aplikasi menjalankan heuristik tingkat kelas karakter di Dart pada teks input untuk memilih di antara bahasa yang didukung ML Kit. Latin murni default ke bahasa Inggris; karakter Han default ke Cina Sederhana; skrip campuran mengikuti kelas karakter mayoritas.
- **Terjemahan satu lintasan.** Seluruh input dikirim ke ML Kit dalam satu panggilan. Hasil menggantikan area input di bawah tombol; kosongkan input untuk menerjemahkan lagi.
- **Penanganan keyboard.** Mengetuk Terjemahkan menutup keyboard di layar sehingga area hasil tidak tersembunyi di belakangnya.

## Kapan menggunakannya

- **Paragraf panjang.** Ketik atau tempel teks multi-kalimat. Memfoto layar penuh teks menimbulkan kebisingan OCR; menempel teks tidak.
- **Cuplikan chat.** Terjemahkan pesan singkat dari teman tanpa meninggalkan percakapan untuk membuka kamera.
- **Layar dengan teks.** Tarik teks dari tangkapan layar melalui pembagian sistem dan tempel ke halaman terjemahan teks untuk terjemahan yang lebih bersih daripada OCR.
- **Dikte suara.** Gunakan tombol dikte sistem untuk mendiktekan teks alih-alih mengetik.

## Batasan

- **Tidak ada pelestarian format.** Hanya teks biasa. Markdown, tebal, miring, dan format lain dibuang.
- **Tidak ada simpan otomatis ke riwayat.** Berbeda dengan tangkapan kamera, terjemahan teks tidak disimpan otomatis. Hasil tetap di area hasil hingga Anda mengetuk Hapus atau menavigasi pergi.
