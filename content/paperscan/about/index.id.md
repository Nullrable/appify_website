---
title: Tentang Paper Scan - Panduan Fitur
description: Pelajari apa yang dapat dilakukan Paper Scan, bagaimana setiap filter dan OCR berjalan di perangkat, dan bagaimana sinkronisasi cloud tanpa konflik menjaga dokumen tetap selaras di iPhone dan iPad.
date: 2026-09-02
lang: id
slug: index
---

Paper Scan adalah pemindai dokumen yang dibuat untuk iPhone dan iPad. Ia dapat menangkap satu halaman A4 utuh dari jarak yang nyaman, meluruskan perspektif secara otomatis, memungkinkan Anda menghaluskan hasilnya dengan enam filter GPU, dan mengekspor PDF multi-halaman dengan teks yang dapat dicari - semuanya tanpa mengirim satu byte pun ke server kecuali Anda mengaktifkan sinkronisasi cloud.

## Pengambilan dan deteksi tepi

Tampilan pengambilan cukup lebar untuk memuat satu lembar A4 penuh dari panjang lengan. Saat halaman masuk ke dalam bingkai, deteksi tepi langsung menempel di sudutnya. Pengambilan otomatis terpicu saat dokumen stabil, perspektif dikoreksi di tempat, dan sebuah thumbnail kecil masuk ke baki tinjauan untuk Anda konfirmasi atau ambil ulang.

Anda dapat beralih ke mode manual kapan saja. Tekan lama tombol shutter untuk menonaktifkan pengambilan otomatis, seret handle sudut saat tepi perlu dibantu, dan ketuk thumbnail untuk memotong atau memutar sebelum halaman dikomit ke dokumen.

## Enam filter GPU

Setiap filter di Paper Scan dirender pada GPU. Pratinjau diperbarui seketika bahkan pada batch multi-halaman, sehingga Anda dapat membandingkan kekuatan filter tanpa menunggu.

- **Asli** mempertahankan foto yang diambil apa adanya dan merupakan pilihan tepat saat Anda ingin rekaman yang setia.
- **Perkuat** meningkatkan kontras dan white balance, menyelamatkan struk kertas termal yang pudar dan pengambilan di pencahayaan redup.
- **Skala abu** meratakan noise warna pada kertas berwarna sehingga lapisan OCR membaca teks lebih bersih.
- **Hitam & Putih** mendorong ide yang sama selangkah lebih maju, menghasilkan lapisan teks paling bersih untuk pemindaian arsip.
- **Terangkan** meratakan bayangan dari kilat lampu ponsel, berguna untuk halaman majalah mengilap.
- **Pertajam** memulihkan detail halus pada struk dan stiker nomor seri.

Filter diterapkan per halaman, bukan per dokumen. Anda dapat mencampurnya dalam satu PDF jika sebagian halaman butuh warna dan sebagian lain butuh hitam-putih.

## Organisasi

Pemindaian jatuh ke sebuah kanvas yang dikelompokkan sebagai halaman di dalam dokumen. Anda dapat menyeret halaman untuk mengurutkan ulang, menjatuhkan halaman dari satu dokumen ke dokumen lain, mengubah nama dokumen di tempat, dan menyematkan yang sering dipakai ke puncak perpustakaan.

Pencarian teks lengkap berjalan di setiap halaman yang pernah di-OCR. Hasil menyorot kata yang cocok pada thumbnail halaman, dan mengetuk hasil membuka dokumen pada halaman yang tepat agar Anda dapat membaca konteks di sekitarnya.

## OCR di perangkat

OCR menggunakan framework Vision dari Apple. Pengenalan teks terjadi di dalam enclave aman iPhone Anda - gambar tidak pernah meninggalkan perangkat, teks yang dikenali tidak pernah dikirim ke mana pun, dan indeks OCR berada di penyimpanan privat aplikasi. Lapisan OCR berjalan sesuai permintaan dan dapat dijalankan ulang pada halaman kapan saja jika Anda mengganti filter.

Teks yang dapat dicari dipertahankan saat Anda mengekspor PDF. Siapa pun yang membuka PDF di Preview, Adobe Reader, atau penampil modern mana pun dapat menyalin teksnya alih-alih mengetik ulang.

## Ekspor PDF multi-halaman

Ekspor seluruh dokumen sebagai satu PDF, atau bagikan halaman individual sebagai gambar. Per ekspor Anda dapat memilih ukuran halaman (Letter / A4 / asli), orientasi, kualitas (Rendah / Standar / Tinggi), dan apakah akan menyertakan lapisan teks OCR. Paper Scan menyertakan lapisan OCR secara otomatis saat Anda menjaga kualitas di Standar atau Tinggi.

Ekspor batch memungkinkan Anda memilih beberapa dokumen sekaligus dan mengirimnya sebagai multi-PDF zip tunggal - berguna untuk batch pengeluaran akhir bulan.

## Sinkronisasi cloud tanpa konflik

Sinkronisasi cloud bersifat opsional. Aktifkan iCloud dan dokumen Anda muncul di setiap perangkat yang masuk dengan Apple ID yang sama; aktifkan Google Drive dan dokumen muncul di setiap perangkat yang masuk ke akun Google tersebut. Anda dapat menonaktifkan keduanya seluruhnya dan aplikasi berperilaku seperti arsip lokal saja.

Sinkronisasi menyelesaikan edit bersamaan tanpa membuat duplikat. Setiap halaman membawa penanda revisinya sendiri, sehingga versi terbaru halaman itu yang menang, dan edit lokal yang sedang Anda kerjakan tidak pernah ditimpa secara diam-diam. Pengubahan nama folder, dokumen, dan halaman juga merambat, sehingga menghapus dokumen di satu perangkat menghapusnya di mana-mana.

## Privat secara default, offline secara default

Paper Scan offline secara default. Pemindaian, deteksi tepi, filter, OCR, pencarian, dan ekspor PDF semuanya berjalan di perangkat dan tidak pernah melakukan panggilan jaringan. Satu-satunya fitur yang menggunakan jaringan adalah sinkronisasi cloud, dan hanya saat Anda menyalakannya. Tidak perlu akun, tidak ada SDK analitik yang dibundel, dan tidak ada iklan.

Pemindaian Anda berada di penyimpanan privat aplikasi. Menghapus instalan aplikasi menghapus semua data lokalnya, termasuk indeks OCR, cache pencarian teks lengkap, dan edit yang belum disinkronkan.

## Paper Scan Pro

Pemindaian, enam filter, OCR, ekspor PDF satu dokumen, dan pencarian tetap gratis selamanya tanpa tanda air. Paper Scan Pro menambahkan dokumen tanpa batas, sinkronisasi cloud, dan ekspor batch. Pro dijual sebagai peningkatan satu kali, jadi setelah Anda memilikinya Anda mempertahankannya di seluruh perangkat dan pembaruan mendatang.
