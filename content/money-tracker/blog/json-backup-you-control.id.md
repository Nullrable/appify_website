---
title: Cadangan JSON yang Anda Kendalikan - Satu Berkas yang Bisa Anda Buka
description: Ekspor data Money Tracker Anda sebagai satu berkas JSON — akun, kategori, transaksi — dan simpan di tempat Anda sudah terbiasa menyimpan cadangan, atau kirim langsung lewat lembar berbagi sistem.
date: 2026-09-10
lang: id
slug: json-backup-you-control
---

Layar ekspor menulis satu berkas: `money_tracker_<timestamp>.json`, berisi setiap akun (dengan jenis, snapshot saldo, dan metadata), setiap kategori (sistem dan kustom), dan setiap transaksi (tanggal, jumlah, akun, kategori, catatan, jenis). Satu berkas, seluruh basis data.

Anda yang memilih ke mana tujuannya. iOS membuka pemilih dokumen, Android membuka Storage Access Framework, jadi berkas bisa mendarat di iCloud Drive, Google Drive, flashdisk USB, atau aplikasi pihak ketiga mana pun yang terdaftar sebagai Documents provider. Tidak ada yang memaksa Anda ke cloud tertentu.

Di sebelah pemilih ada lembar berbagi sistem. Dari situ berkas langsung pergi ke surel, aplikasi pesan, aplikasi catatan, AirDrop, atau Nearby Share — ujung ke ujung lewat sistem, tidak pernah lewat Money Tracker.

JSON adalah teks biasa. Buka berkas di editor mana pun dan Anda melihat strukturnya: sebuah objek dengan tiga larik `accounts`, `categories`, dan `transactions`, setiap entri catatan datar dengan kolom-kolom bernama. Tanpa blob base64, tanpa kontainer terenkripsi, tanpa skema yang terkunci versi.

Impor menerima berkas yang sama. Jika entri yang diimpor berbagi ID dengan entri yang sudah ada, impor menimpa di tempat alih-alih menduplikasi — jadi ekspor yang lebih baru di atas yang lama hanya menambahkan baris yang benar-benar baru.
