---
title: "Pemecahan masalah upload iCloud yang macet"
description: "Pemecahan masalah upload iCloud yang macet"
date: 2026-09-02
lang: id
slug: stuck-icloud-upload
---

Ketika sinkronisasi iCloud di Paper Scan tampak macet(biasanya ditampilkan sebagai jumlah upload parsial yang tidak berubah selama beberapa menit), penyebabnya hampir selalu salah satu dari empat kondisi konfigurasi atau sistem di sisi iOS. Daftar periksa berikut mencakup semuanya dalam urutan frekuensi.

### 1. iCloud Drive tidak diaktifkan untuk Paper Scan

Dua sakelar independen harus aktif. Jika salah satu mati, Paper Scan akan mengantrekan upload yang ditolak secara diam-diam oleh iOS, meninggalkan bilah status pada jumlah awal.

- **Pengaturan iOS → [nama Anda] → iCloud → Tampilkan Semua → Paper Scan** harus diaktifkan.
- **Pengaturan iOS → Paper Scan → iCloud Drive** harus diaktifkan.

Sakelar kedua adalah yang paling sering terlewat. Kedua pengaturan terkait tetapi berbeda; keduanya harus diaktifkan agar upload berlanjut.

### 2. iOS membatasi sinkronisasi latar belakang

iOS membatasi aktivitas iCloud latar belakang dalam dua kondisi: Mode Daya Rendah diaktifkan(nonaktifkan di Pengaturan iOS → Baterai), atau penyimpanan iPhone hampir penuh(iOS memerlukan sekitar 500 MB ruang kosong agar upload latar belakang berlanjut; kosongkan ruang di Pengaturan iOS → Umum → Penyimpanan iPhone). iOS tidak menampilkan peringatan "penyimpanan penuh" dalam konteks ini; upload hanya berhenti.

### 3. Antrean upload besar

Paper Scan memproses upload secara berurutan. Jika backlog besar telah terkumpul, misalnya setelah periode offline, antrean memerlukan waktu untuk dihapus. Sebagai perkiraan kasar, harapkan sekitar 50 halaman per jam pada Wi-Fi rumah standar, lebih cepat pada koneksi kuat dan lebih lambat pada cellular.

Untuk menentukan apakah antrean "lambat tapi berlanjut" atau "benar-benar macet", biarkan aplikasi di latar belakang selama 30 hingga 60 menit dan periksa bilah status. Jika jumlah telah maju, sinkronisasi berfungsi. Jika jumlah tidak berubah, salah satu kondisi lain berlaku.

### 4. Status akun iCloud rusak

Ini jarang terjadi tetapi dapat terjadi setelah perubahan ID Apple, siklus keluar dan masuk, atau pemulihan dari cadangan. Gejala: bilah status macet dan tidak ada langkah di atas yang menyelesaikannya.

Dua langkah eskalasi: matikan dan hidupkan iCloud Drive(Pengaturan iOS → [nama Anda] → iCloud → matikan iCloud Drive, tunggu 30 detik, hidupkan kembali), atau keluar dari iCloud dan masuk kembali(Pengaturan iOS → [nama Anda] → Keluar, lalu masuk lagi). Tindakan kedua bersifat tegas tetapi mengatur ulang koneksi iCloud dari awal. Jika antrean tetap macet pada jumlah yang sama setelah kedua langkah, masalah mungkin ada di sisi iCloud: halaman status sistem Apple di support.apple.com menunjukkan apakah iCloud Drive saat ini mengalami pemadaman.

### Kapan harus dieskalasi ke dukungan

Dalam sebagian besar kasus, penyebabnya ada di sisi iOS. Paper Scan mungkin salah ketika jumlah bilah status tidak berubah selama lebih dari satu jam, aplikasi lain yang menggunakan iCloud pada perangkat yang sama menyinkronkan secara normal, langkah konfigurasi di atas telah diterapkan dan aplikasi telah dimulai ulang, dan dokumen yang sama ditandai sebagai menunggu upload di beberapa peluncuran aplikasi tanpa kemajuan. Ketika kondisi ini berlaku, kirim laporan bug melalui **Pengaturan → Kirim Umpan Balik** di aplikasi. Laporan secara otomatis menyertakan log aktivitas sinkronisasi terbaru, menghilangkan kebutuhan untuk menggambarkan masalah secara rinci.

Beberapa fitur di Paper Scan ada secara khusus untuk menangani skenario upload yang macet: bilah status menampilkan jumlah saat ini dan stempel waktu aktivitas terakhir secara terpisah, dokumen yang gagal diunggah tiga kali berturut-turut ditandai dengan ikon peringatan, dan upload latar belakang berhenti dengan rapi ketika Mode Daya Rendah diaktifkan dan dilanjutkan ketika dinonaktifkan daripada diam-diam menjatuhkan item antrean.
