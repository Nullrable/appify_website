---
title: "Riwayat terjemahan: hanya lokal, dapat dihapus kapan saja"
description: "Riwayat tinggal di database Drift di perangkat. Tidak ada salinan yang diunggah; entri dapat dihapus satu per satu atau secara massal."
date: 2026-09-03
lang: id
slug: translation-history
icon: history
---

Setiap tangkapan kamera dapat disimpan ke riwayat terjemahan lokal. Setiap entri menyimpan foto asli (terkompresi), bahasa sumber yang terdeteksi, bahasa target, blok OCR, dan terjemahan per blok. Membuka entri yang disimpan mereproduksi halaman hasil dalam mode hanya-baca.

## Apa yang disimpan

Setiap catatan riwayat berisi:

- **Foto asli** sebagai thumbnail JPEG, diskalakan agar pas dengan tepi maksimum. Foto resolusi penuh dibuang setelah penskalaan untuk menjaga penyimpanan tetap terbatas.
- **Bahasa sumber** terdeteksi oleh OCR (atau diatur manual).
- **Bahasa target** dipilih untuk tangkapan.
- **Blok OCR** dengan kotak pembatas, teks terdeteksi, dan keyakinan.
- **Terjemahan** per blok dan terjemahan paragraf lengkap yang digabungkan.
- **Stempel waktu pembuatan** untuk pengurutan dan tampilan.

Tidak ada salinan foto atau teks terjemahan yang diunggah ke server mana pun yang kami operasikan. Seluruh riwayat disimpan dalam database SQLite di perangkat yang dikelola oleh Drift.

## Bagaimana riwayat diisi

- **Tangkapan kamera.** Setelah OCR + terjemahan selesai, halaman hasil menawarkan tindakan Simpan. Menyimpan entri описанный di atas.
- **Foto yang diimpor.** Alur yang sama: setelah terjemahan, halaman hasil dapat menyimpan entri ke history.
- **Terjemahan teks.** Tidak disimpan secara otomatis. Terjemahan teks hanya muncul di area hasil halaman terjemahan teks dan hilang saat Hapus atau navigasi. Gunakan kamera atau impor jika Anda ingin catatan persisten.

## Menjelajah dan menghapus

- **Tampilan daftar.** Halaman riwayat menunjukkan entri terbaru terlebih dahulu dengan thumbnail foto, cuplikan sumber, cuplikan target, dan stempel waktu.
- **Ketuk untuk membuka.** Mengetuk baris membuka halaman hasil dalam mode hanya-baca. Overlay direproduksi dengan terjemahan yang disimpan; ML Kit tidak dijalankan ulang.
- **Hapus.** Setiap baris memiliki tombol hapus. Penghapusan dijaga oleh dialog konfirmasi untuk mencegah penghapusan tidak sengaja. Penghapusan menghapus catatan dan thumbnail fotonya dari perangkat; tidak ada yang dikirim keluar dari perangkat.
- **Status kosong.** Ketika riwayat kosong, placeholder menjelaskan cara mengisinya.

## Privasi

Riwayat adalah artefak lokal. Model privasi aplikasi:

- **Tanpa unggahan.** Riwayat tidak pernah diunggah, disinkronkan, atau dicadangkan ke server mana pun.
- **Tanpa analitik tentang konten riwayat.** Laporan kerusakan dan analitik penggunaan anonim tidak menyertakan konten riwayat, teks OCR, atau teks terjemahan.
- **Penghapusan bersifat permanen.** Menghapus entri riwayat akan menghapusnya secara permanen dari database di perangkat. Tidak ada salinan cloud untuk dibersihkan.

## Pertumbuhan penyimpanan

Setiap entri занимает kira-kira 50–500 KB tergantung pada ukuran foto. Riwayat beberapa ratus entri biasanya tetap di bawah 50 MB. Foto dikompresi saat disimpan; original resolusi penuh tidak pernah dipertahankan.

Untuk mengosongkan ruang: buka halaman riwayat dan hapus entri yang tidak Anda butuhkan lagi. Menghapus instalan aplikasi menghapus seluruh database riwayat sebagai bagian dari penghapusan instalan platform.
