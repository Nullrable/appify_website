---
title: "Menambahkan Kata Sandi ke PDF: Cara Memilih Antara Kata Sandi Pengguna, Kata Sandi Pemilik, dan Pengaturan Izin"
description: "Apa perbedaan dua jenis kata sandi dalam enkripsi PDF? Bagaimana mengatur izin cetak, salin, dan改? Mengambil fitur enkripsi Image to PDF sebagai contoh, jelaskan setiap opsi enkripsi AES-256."
date: 2026-09-07
lang: id
slug: pdf-password-protection
---

## Menambahkan Kata Sandi ke PDF Bukan Hanya Mengatur Serangkaian Karakter

Menambahkan kata sandi ke pemindaian kontrak dan materi keuangan adalah tindakan standar sebelum mengirim berkas sensitif. Tapi enkripsi PDF sebenarnya memiliki dua lapisan: mengontrol "siapa yang dapat membuka" dan "apa yang dapat dilakukan setelah dibuka". Memahami perbedaan kedua lapisan ini adalah kunci untuk melindungi berkas dengan benar.

## Kata Sandi Pengguna: Mengontrol Siapa yang Dapat Membuka

**Kata sandi pengguna** (juga disebut kata sandi buka) adalah gerbang pertama. Setelah diatur, siapa pun yang membuka PDF ini harus memasukkan kata sandi; tanpa kata sandi, mereka hanya dapat melihat dari kejauhan.

Skenario yang sesuai: mengirim salinan identitas pindaian ke perantara atau agen代办, mengirim materi internal melalui email. Kata sandi disampaikan kepada pihak lain melalui saluran lain (seperti telepon atau jendela obrolan lain).

## Kata Sandi Pemilik: Mengontrol Apa yang Dapat Dilakukan Setelah Dibuka

**Kata sandi pemilik** adalah gerbang kedua, diatur terpisah dari kata sandi pengguna. Ini mengelola tiga jenis izin:

- **Izinkan cetak** — apakah pihak lain dapat mencetak berkas
- **Izinkan salin** — apakah teks dan gambar dalam berkas dapat disalin
- **Izinkan改** — apakah konten berkas dapat diedit

Saat mengirim报价单 atau berkas tender, konfigurasi yang umum adalah: aktifkan cetak (memudahkan pihak lain menyimpan), nonaktifkan salin dan改 (mengurangi risiko konten digunakan langsung).

Di Image to PDF, ketiga izin ini memiliki sakelar independen — cetak默认 aktif, salin dan改默认 nonaktif — yaitu konfigurasi konservatif "dapat dilihat dan dicetak, tidak dapat dipindahkan atau diubah".

## Apa itu AES-256

Dalam hal algoritma enkripsi, aplikasi secara default menggunakan **AES-256**, yang merupakan standar utama enkripsi PDF saat ini, dengan kekuatan lebih tinggi daripada algoritma awal; jika perangkat atau perangkat lunak lama penerima tidak dapat membukanya, Anda dapat beralih ke AES-128 yang lebih kompatibel.

## Setelah Enkripsi

Enkripsi dilakukan secara lokal di perangkat; berkas dan kata sandi tidak melewati server. Jika pihak yang menerima kata sandi ingin解除限制, mereka dapat menggunakan fitur dekripsi PDF dalam aplikasi untuk menghapus enkripsi, memulihkannya menjadi PDF biasa untuk diedit atau digabungkan.

Saran praktis: jangan gunakan kombinasi yang mudah ditebak seperti ulang tahun atau nomor ponsel untuk kata sandi; atur kata sandi berbeda untuk berkas berbeda; kirim kata sandi dan berkas melalui saluran terpisah — berkas lewat email, kata sandi lewat pesan, keduanya tidak masuk ke kotak surat penerima yang sama secara bersamaan.
