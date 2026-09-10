---
title: Tentang Money Tracker - Aplikasi Keuangan Pribadi dan Lokal
description: Money Tracker menyimpan setiap akun, kategori, dan transaksi di ponsel Anda. Enam jenis akun, OCR struk di perangkat, keypad jumlah empat operasi, kunci PIN atau biometrik, dan cadangan JSON - dalam 10 bahasa.
date: 2026-09-10
lang: id
slug: index
---

Money Tracker adalah aplikasi keuangan pribadi untuk iOS dan Android, dibuat untuk siapa pun yang ingin catatan rapi dan privat tentang pemasukan dan pengeluaran. Semua hal - akun, kategori, transaksi, statistik - berada di ponsel Anda. Tidak ada server yang menyimpan data Anda.

Layar utama memperlihatkan gambaran bulan ini: pemasukan, pengeluaran, dan saldo bersih lintas seluruh akun Anda. Di bawahnya, data yang sama bisa dibaca sebagai daftar transaksi dikelompokkan per hari, kisi bulan, atau kalender dengan chip pemasukan dan pengeluaran di setiap tanggal.

## Enam jenis akun, satu pembukuan

Tunai, bank, kartu kredit, dompet digital, investasi, tabungan. Setiap akun punya saldonya sendiri, daftar transaksinya sendiri, dan tampilan detail yang berisi ringkasan bulan, pemasukan, pengeluaran, dan transaksi terakhir. Tandai satu akun sebagai default untuk transaksi baru; formulir akan terbuka dengan akun itu sudah terpilih.

Menghapus akun tidak memusnahkannya. Akun dan semua yang melekat padanya pindah ke bagian "Dihapus", dan satu ketukan memulihkannya.

## Kategori, bawaan dan kustom

Aplikasi membawa 8 kategori pengeluaran dan 4 kategori pemasukan, sudah dilokalkan untuk bahasa Inggris, Tionghoa Sederhana, dan Tionghoa Tradisional. Anda bisa menambahkan kategori kustom sebanyak yang dibutuhkan, masing-masing dengan warna dan ikon sendiri. Kategori sistem dan kustom tinggal di bagian terpisah di halaman kelola. Menghapus kategori kustom yang masih memiliki transaksi akan meminta konfirmasi; karena penghapusannya lembut, satu ketukan keliru bisa dipulihkan. Kategori dipakai bersama lintas akun, sehingga entri "Makanan" di tunai dan entri "Makanan" di kartu kredit tetap bisa dibandingkan di statistik.

## OCR struk, di perangkat

Di atas kolom jumlah ada kartu kamera kecil. Ambil foto struk kertas dan Money Tracker akan mengisi jumlah, tanggal, dan nama merchant sementara. Pengenalan berjalan di ponsel Anda, foto tidak ke mana-mana. Setiap nilai yang terisi otomatis bisa diubah sebelum disimpan. Alur OCR kedua berada di formulir edit akun untuk memindai kartu bank atau nomor rekening.

## Input jumlah ala kalkulator

Ketuk kolom jumlah dan terbuka keypad empat operasi dengan pratinjau ekspresi langsung. Ketik "12.50 + 8.40", langsung muncul "20.90", kirim ke formulir. Hitungan panjang yang biasanya menyebalkan di keyboard ponsel jadi satu gerakan saja.

## Statistik yang mengikuti cara Anda belanja

Tab Statistik memadukan diagram lingkar kategori dengan garis tren 30 hari dan garis tren 12 bulan. Saring berdasarkan pengeluaran, pemasukan, atau laba. Saring berdasarkan rentang akun. Ketuk irisan atau baris untuk membuka transaksi di belakangnya - mendukung halaman, pencarian berdasar kata kunci catatan, dan geser untuk hapus. Setiap akun memiliki tampilan daftar dan tampilan bulan, dengan tampilan tahun sebagai lapisan di atas untuk riwayat panjang. Diagram, rincian, dan daftar per akun semuanya berasal dari data yang sama, sehingga angka tidak pernah berbeda.

## Pengingat harian, opt-in

Kalau Anda ingin bisikan lembut untuk mencatat pengeluaran hari ini, daftarkan perangkat ke topik pengingat harian. Waktu pengingat bisa diatur di pengaturan (bawaan pukul 21.00). Pengingat mati sampai Anda menyalakannya, dan langsung berhenti berlangganan begitu Anda mematikannya. Preferensi pengingat disinkronkan lewat satu catatan anonim, jadi pengaturan ikut Anda saat memasang ulang atau pindah perangkat. Tidak ada data transaksi, akun, maupun kategori yang pernah meninggalkan ponsel - yang keluar hanya satu catatan pengaturan itu.

## Cadangan JSON, cara Anda

Layar ekspor menulis satu berkas `money_tracker_<timestamp>.json` berisi seluruh basis data. Simpan lewat pemilih folder sistem - iCloud Drive, Google Drive, Files, flashdisk, atau aplikasi pihak ketiga yang terdaftar sebagai Documents provider. Tepat di sebelahnya ada lembar bagi sistem: surel, aplikasi pesan, catatan, AirDrop, Nearby Share. JSON adalah teks biasa - buka di editor mana saja untuk memeriksa isinya. Impor menerima berkas yang sama: kalau sebuah entri yang diimpor berbagi ID dengan entri yang sudah ada, ia akan menimpa di tempat alih-alih membuat duplikat, sehingga cadangan bulanan bisa digabung dengan bersih.

## Kunci PIN dan biometrik

PIN 6 digit dapat menjaga aplikasi setiap kali kembali ke latar depan. Atur di Pengaturan, pilih enam digit, dan PIN akan diminta sebelum apa pun ditampilkan. Di atas PIN bertumpu lapisan biometrik opsional - Face ID atau Touch ID di iOS, sidik jari (atau wajah) di Android. Kalau perintah biometrik tidak bisa bekerja, sistem mundur ke kode perangkat, bukan PIN aplikasi, sehingga rantai kepercayaan tetap berpijak di platform.

## Lokal saja, by design

Akun, kategori, transaksi, teks OCR, statistik - semua tinggal di basis data lokal di penyimpanan privat aplikasi. Menghapus instalasi aplikasi menghapus semuanya. Dua panggilan jaringan opsional di seluruh aplikasi adalah push pengingat dan sinkronisasi pengaturan pengingat; keduanya mati secara bawaan. Tidak ada SDK analitik, tidak ada iklan, tidak ada pelacakan.

## Bahasa dan tema

Tersedia dalam bahasa Inggris, Tionghoa Sederhana, Tionghoa Tradisional, Italia, Jerman, Jepang, Korea, Spanyol, Portugis, dan Prancis. Tema mengikuti perangkat secara bawaan; kunci terang atau gelap dalam satu ketukan. Hari pertama minggu (Senin atau Minggu) juga dapat diatur, yang memengaruhi tampilan kisi bulan dan kisi hari.
