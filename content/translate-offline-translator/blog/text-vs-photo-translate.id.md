---
title: "Terjemahan teks vs terjemahan foto: mana yang digunakan"
description: "Ketika sumber sudah berupa teks, lewati OCR. Ketika sumber adalah halaman cetak, terjemahan foto lebih cepat. Cara memilih."
date: 2026-09-03
lang: id
slug: text-vs-photo-translate
---

## Terjemahan teks vs terjemahan foto: mana yang digunakan

Aplikasi memiliki dua titik masuk untuk terjemahan: halaman kamera (terjemahan foto) dan halaman terjemahan teks. Mereka berbagi status pasangan bahasa yang sama dan mesin ML Kit yang sama, tetapi pipeline berbeda dalam satu langkah penting.

## Perbedaan dalam satu kalimat

Terjemahan foto menjalankan OCR pada gambar yang ditangkap dan kemudian menerjemahkan teks yang dikenali. Terjemahan teks melewati OCR sepenuhnya dan memasukkan input langsung ke mesin terjemahan.

## Kapan terjemahan teks lebih cepat

- **Sumber yang sudah berupa teks.** Email, pesan chat, cuplikan web, paragraf yang ditempel — apa pun yang ada sebagai teks daripada halaman cetak. Melewati OCR menghilangkan satu langkah dan menghilangkan kelas kesalahan OCR (karakter salah baca, pemutusan baris rusak, tata letak kacau).
- **Teks panjang dan padat.** Memotret layar penuh teks memperkenalkan噪声 OCR. Menempel teks tidak.
- **Dikte.** Tombol dikte sistem memungkinkan Anda mengucapkan input daripada mengetiknya. Akurasi dikte baik untuk ucapan jelas di lingkungan yang tenang.
- **Kamera tidak tersedia.** Jika kamera digunakan oleh aplikasi lain, atau izin kamera ditolak, terjemahan teks masih berfungsi.

## Kapan terjemahan foto lebih cepat

- **Halaman cetak.** Buku, menu, rambu, kemasan, instruksi, poster. Ini ada sebagai tinta di atas kertas; satu-satunya cara untuk menjadikannya teks adalah memotretnya.
- **Stiker dan label.** Foto stiker atau label pada produk dapat diterjemahkan di tempat tanpa menyalinnya terlebih dahulu.
- **Layar yang tidak dapat Anda pilih.** Jika sumber dirender sebagai piksel — gambar dalam PDF, tangkapan layar aplikasi lama, foto layar — tidak ada teks untuk disalin. Terjemahan foto adalah satu-satunya pilihan.
- **Rambu dwibahasa.** Menangkap kedua bahasa dalam satu foto sering kali menyelesaikan petunjuk bahasa per blok yang digunakan deteksi otomatis.

## Perbedaan akurasi

Kedua jalur menggunakan mesin ML Kit yang sama, jadi terjemahannya sendiri memiliki kualitas yang sama. Perbedaannya lebih jauh di hulu: terjemahan foto dapat memperkenalkan kebisingan OCR yang tidak diperkenalkan terjemahan teks. Jika mesin OCR salah membaca karakter, mesin terjemahan tidak punya cara untuk memulihkan teks asli.

Untuk teks yang Anda kendalikan (tulisan Anda sendiri, pesan Anda sendiri), tempelkan. Untuk teks yang hidup di atas kertas, fotolah.

## Berbagi antara mode

Pengaturan bahasa sumber dan target dibagikan antara halaman kamera dan halaman terjemahan teks. Mengalihkan bahasa di satu tempat berlaku untuk yang lain; bolak-balik tidak memerlukan pemilihan ulang bahasa.

Terjemahan teks tidak disimpan secara otomatis ke riwayat; mereka tinggal di wilayah hasil hingga Anda mengetuk Hapus atau bernavigasi pergi. Terjemahan kamera dapat disimpan ke riwayat dari halaman hasil.

## Aturan praktis

Jika Anda dapat menyalin teksnya, salinlah. Jika tidak, fotolah. Jalur salin lebih bersih karena OCR dihilangkan dari loop.
