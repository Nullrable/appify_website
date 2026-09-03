---
title: "Model terjemahan: unduh sekali, simpan selamanya"
description: "Kelola 19 model bahasa ML Kit dari halaman khusus. Unduh sekali, hapus untuk memperoleh kembali ruang; model bertahan offline."
date: 2026-09-03
lang: id
slug: model-manager
icon: download
---

Setiap pasangan bahasa требует agar model sumber dan target ada di perangkat sebelum terjemahan dapat dijalankan. Model diunduh sekali, bertahan melewati restart aplikasi, dan digunakan kembali untuk setiap terjemahan pasangan tersebut. Halaman un model download mencantumkan semua 19 bahasa yang didukung dengan статус unduhan mereka dan memungkinkan Anda mengunduh atau menghapus setiap satu.

## Mengapa halaman khusus

ML Kit не mengunduh model secara otomatis — setiap pasangan bahasa требует unduhan eksplisit dari sumber dan targetnya. Halaman un model download memaparkan статус ini dan memungkinkan pengguna mengelolanya tanpa menggali jauh ke dalam penyimpanan platform.

Bagi kebanyakan pengguna, alur kerja tidak terlihat: pilih bahasa sumber dan target, aplikasi mengunduh kedua model sesuai permintaan pertama kali Anda menerjemahkan, dan model tetap di perangkat untuk pelaksanaan berikutnya. Halaman khusus adalah untuk pengguna yang ingin mengunduh sebelumnya untuk perjalanan offline, menghapus bahasa yang tidak lagi mereka gunakan, atau melihat apa yang memakan ruang.

## Статус модели per bahasa

- **Tidak diunduh.** Tombol Unduh ditampilkan. Ketuk untuk memulai pengunduhan.
- **Mengunduh.** Spinner yang tidak определённый ditampilkan. ML Kit tidak memaparkan callback kemajuan, hanya penyelesaian; spinner решит menjadi Diunduh atau Gagal.
- **Diunduh.** Lencana ditampilkan dengan tombol Hapus. Ketuk untuk menghapus model dan memulihkan penyimpanan.
- **Gagal.** Tombol coba lagi menggantikan Unduh. Penyebab umum: tidak ada jaringan, seluler diblokir, ruang disk rendah. Coba lagi setelah penyebab mendasar diselesaikan.

## Antrean pengunduhan berurutan

Beberapa permintaan pengunduhan dalam suksesi cepat diantrekan, tidak diparalelkan. Plugin iOS asli tidak menangani panggilan `manageModel` bersamaan dengan bersih: permintaan kedua membatalkan permintaan pertama. Aplikasi membuat serial pengunduhan melalui satu Future yang dirantai sehingga permintaan bersamaan diselesaikan satu per satu. UI hanya menampilkan pengunduhan aktif dalam статус tidak определённый; permintaan yang diantrekan menunggu giliran mereka.

## Batas waktu dan polling pengunduhan

Jika callback pengunduhan terlewat (teramati pada iOS dalam kondisi jaringan rendah), Future pengunduhan dapat macet. Aplikasi melindungi dirinya sendiri dengan batas waktu 30 detik; jika batas waktu terpic, aplikasi melakukan polling disk secara langsung melalui `isModelDownloaded` untuk mengonfirmasi apakah model benar-benar mendarat sebelum melaporkan keberhasilan atau kegagalan.

## Biaya penyimpanan

Setiap model ML Kit занимает kira-kira 10–50 MB di disk. Mengunduh semua 19 bahasa mengonsumsi kira-kira 300–600 MB. Model untuk sumber dan target dari terjemahan yang sama adalah terpisah; satu satu model dapat berfungsi sebagai sumber atau target tergantung pada peran yang dipilih pengguna.

Menghapus model memulihkan ruang. Tidak ada pembersihan otomatis. Menghapus instalan aplikasi menghapus semua model yang diunduh sebagai bagian dari penghapusan instalan platform.
