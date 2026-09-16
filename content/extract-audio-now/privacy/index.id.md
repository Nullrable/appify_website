---
title: "Kebijakan Privasi - Extract Audio"
description: "Bagaimana Extract Audio menangani data Anda. Mencakup pemrosesan video di perangkat, ekstraksi audio lokal, iklan AdMob di versi gratis, manajemen langganan RevenueCat, dan hak GDPR serta CCPA Anda."
date: 2026-09-15
lang: id
slug: index
---

**Extract Audio** ("**kami**") adalah aplikasi pemrosesan video dan audio iPhone yang dirancang dengan satu prinsip: video dan audio Anda tetap di perangkat Anda. Kebijakan Privasi ini menjelaskan data apa yang ditangani aplikasi, mengapa, dan pilihan yang Anda punya.

Dengan menggunakan aplikasi, Anda setuju pada praktik yang dijelaskan di sini.

**Terakhir diperbarui: 15 September 2026**

## 1. Ringkasan

- **Pemrosesan di perangkat.** Semua pemrosesan video (konversi, kompres, ekstrak audio, gabung, klip, kecepatan, ubah ukuran, GIF) berjalan lokal di perangkat Anda. File video, file audio, dan hasil antara **tidak pernah diunggah** ke server mana pun yang kami operasikan.
- **Tanpa akun.** Aplikasi tidak memerlukan pendaftaran. Kami tidak mengumpulkan nama, email, nomor telepon, atau info kontak apa pun.
- **Tanpa analisis konten.** Aplikasi tidak menganalisis konten piksel video Anda - tidak ada klasifikasi AI, deteksi objek, atau pengenalan scene.
- **Periklanan (versi gratis, non-personal).** Versi gratis menampilkan iklan banner (IAB Medium Rectangle 300x250) di layar Beranda, Riwayat, dan Pengaturan, dilayani oleh Google AdMob. App **tidak meminta** izin App Tracking Transparency dan **tidak membaca** identifier iklan Apple (IDFA); semua iklan berbasis konteks waktu nyata.
- **Versi berbayar.** Saat Anda berlangganan Pro, pembelian ditangani App Store, dan RevenueCat menggunakan identifier anonim dan tanda terima toko Anda untuk memverifikasi langganan.

## 2. Data yang tidak kami kumpulkan

Kami **tidak** mengumpulkan, mentransmisikan, atau menjual:

- File video atau audio Anda, atau thumbnail apa pun darinya
- Metadata video (waktu perekaman, durasi, lokasi) atau hasil antara apa pun dari pemrosesan
- Nama, email, nomor telepon, alamat pos, atau detail kontak lainnya
- Lokasi presisi atau kasar yang terkait dengan video Anda
- Kontak, kalender, indeks pustaka foto, atau konten pribadi lainnya

## 3. Data yang diproses di perangkat Anda

### 3.1 Ekstraksi audio

Trek audio dipisahkan dari file video, di-encode ulang dalam format pilihan Anda (MP3, AAC, M4A, WAV, FLAC, OGG), ditulis secara default ke direktori sandbox app, lalu muncul perintah untuk "Save to Files" agar masuk ke app iOS Files. Seluruh alur hanya membaca file lokal dan tidak menyentuh jaringan.

### 3.2 Konversi format video

Video dibungkus ulang ke kontainer berbeda (mp4, mov, m4v, mkv, avi, flv, ts, mpg, mpeg, 3gp, 3g2). Stream video dan stream audio sendiri tidak berubah; hanya kontainer yang ditukar.

### 3.3 Kompresi video

Stream video di-encode ulang pada preset (Rendah / Sedang / Tinggi) atau bitrate kustom, mengendalikan ukuran sambil mempertahankan sebanyak mungkin detail yang terlihat.

### 3.4 Gabung, Klip, Kecepatan, Ubah ukuran

Metadata timeline dibaca; video baru dihasilkan menggunakan titik masuk, titik keluar, urutan, pengganda, rasio, dan sudut rotasi yang Anda tentukan. File sumber tetap tidak tersentuh sepanjang proses; hasilnya ditulis sebagai file baru ke pustaka.

### 3.5 GIF

Animasi GIF dihasilkan untuk rentang waktu dan frame rate yang Anda tentukan, dan disimpan ke pustaka.

### 3.6 Riwayat dan draf

Parameter tiap tugas (jenis alat, timestamp, path file, konfigurasi parameter) ditulis ke database lokal; draf untuk Klip, Kecepatan, dan Ubah ukuran tersimpan otomatis saat Anda menyeret. Data ini sepenuhnya tinggal di perangkat Anda dan dihapus seluruhnya saat Anda menghapus instalasi app.

## 4. Data yang dikumpulkan oleh layanan pihak ketiga

Pihak ketiga berikut mengumpulkan data untuk memberikan layanan mereka kepada Anda. Penggunaan data mereka diatur oleh kebijakan privasi mereka sendiri.

### 4.1 Google AdMob - hanya versi gratis

Versi gratis menampilkan iklan banner (IAB Medium Rectangle 300x250) di layar Beranda, Riwayat, dan Pengaturan, dilayani oleh **Google AdMob**. Tugas dijalankan segera setelah dikonfirmasi - tidak ada iklan yang tayang sebelum tugas.

**Iklan bersifat non-personal.** App tidak memanggil API App Tracking Transparency dan tidak membaca identifier iklan Apple (IDFA). Semua iklan ditayangkan berdasarkan konteks waktu nyata, tanpa tautan ke perilaku penggunaan perangkat Anda. AdMob dapat menerima:

- **Informasi perangkat**, seperti model perangkat, versi OS, ukuran layar, bahasa, dan wilayah
- **Metadata penayangan iklan**, seperti ID unit iklan, jenis iklan, dan apakah Anda melihat atau mengklik iklan
- **Alamat IP**, digunakan untuk memperkirakan lokasi kasar (biasanya negara atau kota) dan mencegah penipuan

Setelah berlangganan Pro, iklan dihapus dan AdMob tidak lagi menerima data dari app ini.

Lihat [Kebijakan Privasi Google](https://policies.google.com/privacy) dan [Informasi privasi AdMob](https://support.google.com/admob/answer/6128543).

### 4.2 RevenueCat (manajemen langganan)

Saat Anda berlangganan Pro, app menggunakan **RevenueCat** untuk memverifikasi langganan dan mengelola hak Anda. RevenueCat menerima:

- **Identifier anonim yang dihasilkan secara acak** (RevenueCat "App User ID")
- Tanda terima App Store Anda, untuk verifikasi pembelian
- Identifier produk, harga, mata uang, dan tanggal pembelian
- Lokal perangkat dan versi app Anda

Lihat [Kebijakan Privasi RevenueCat](https://revenuecat.com/privacy).

### 4.3 Apple App Store

Pembelian ditangani oleh Apple App Store. Penanganan data pembeliannya diatur oleh [Kebijakan Privasi Apple](https://www.apple.com/legal/privacy/).

## 5. Izin yang diminta app

| Izin | Mengapa diminta | Wajib |
|---|---|---|
| **Akses pustaka foto** | Membaca video yang akan diproses, menulis video atau audio yang diproses | Ya - wajib untuk pemrosesan |
| **Akses file (app Files)** | Membaca atau menyimpan file di app iOS Files | Tidak - hanya digunakan saat Anda aktif memilih Files sebagai sumber |

App **tidak** meminta izin kamera, mikrofon, kontak, lokasi, atau pelacakan (ATT).

## 6. Privasi anak-anak

App ini untuk pengguna umum dan tidak ditujukan untuk anak di bawah 13 tahun (atau di bawah usia persetujuan digital minimum di yurisdiksi Anda). Kami tidak dengan sengaja mengumpulkan data pribadi anak. Karena app tidak mengumpulkan data pribadi pengguna mana pun, komitmen ini berlaku untuk semua usia.

## 7. Transfer data internasional

- **Layanan Google** (AdMob) dapat memproses data di wilayah di luar negara Anda. Lihat [Kebijakan transfer data Google](https://policies.google.com/privacy).
- **RevenueCat** menyimpan data verifikasi pembelian di infrastrukturnya di AS dan UE. Lihat [Kebijakan Privasi RevenueCat](https://revenuecat.com/privacy).
- **Apple** memproses pembelian App Store melalui infrastruktur global standarnya.

Pemrosesan di perangkat yang dijelaskan di Bagian 3 **tidak** meninggalkan perangkat Anda dan karena itu tidak tunduk pada aturan transfer data internasional.

## 8. Hak Anda

### 8.1 GDPR (Wilayah Ekonomi Eropa dan Inggris)

Jika Anda di EEA atau Inggris, Anda punya hak untuk mengakses, memperbaiki, menghapus, membatasi, atau menolak pemrosesan data pribadi Anda; hak atas portabilitas data; hak untuk menarik persetujuan kapan saja; dan hak untuk mengajukan keluhan ke otoritas perlindungan data lokal Anda.

Karena app tidak memelihara profil pengguna sisi server, kebanyakan hak di atas sudah terpenuhi secara otomatis oleh desain app:

- Video dan audio Anda tidak pernah meninggalkan perangkat; menghapus instalasi app menghilangkan semuanya
- Iklan selalu non-personal (lihat Bagian 4.1); tidak perlu kontrol tambahan
- Untuk menghapus asosiasi pembelian Anda, hubungi kami dan minta penghapusan catatan RevenueCat yang terkait dengan tanda terima Anda

### 8.2 CCPA / CPRA (California)

Penduduk California punya hak untuk tahu informasi pribadi apa yang dikumpulkan, untuk menghapus informasi itu, untuk keluar dari penjualan atau pembagiannya, dan hak untuk tidak didiskriminasi karena menjalankan hak-hak ini. App **tidak** menjual informasi pribadi, dan **tidak** membagikan informasi pribadi untuk iklan perilaku lintas-konteks — semua iklan bersifat non-personal.

### 8.3 Yurisdiksi lain

Penduduk yurisdiksi lain (mis. LGPD Brasil, PIPA Korea, PIPEDA Kanada) mungkin punya hak serupa. Sejauh diizinkan oleh hukum yang berlaku, kami memperluas perlindungan di atas ke semua pengguna, di mana pun mereka berada.

## 9. Retensi data

- **File video dan audio:** hanya tinggal di perangkat Anda. Karena tidak ada yang dikirimkan ke kami, kami tidak menyimpan apa pun.
- **Riwayat dan draf:** disimpan di database lokal perangkat Anda; menghapus instalasi app menghapusnya semua.
- **Pembelian:** disimpan oleh RevenueCat dan App Store sesuai kebijakan retensi mereka sendiri.
- **Data iklan:** diatur oleh kebijakan retensi AdMob Google.

## 10. Keamanan

App mengandalkan perlindungan file bawaan perangkat Anda. Semua pemrosesan terjadi secara lokal melalui antarmuka yang dilindungi dari pustaka foto sistem dan sistem file lokal. Komunikasi jaringan dengan pihak ketiga menggunakan HTTPS. Namun, tidak ada metode transmisi atau penyimpanan yang bisa menjamin keamanan 100%, dan kami tidak bisa menjamin keamanan absolut.

## 11. Perubahan pada kebijakan ini

Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Tanggal "**Terakhir diperbarui**" di atas mencerminkan kapan perubahan terbaru berlaku. Untuk perubahan signifikan, kami akan memberikan pemberitahuan yang wajar di dalam app atau lewat daftar App Store.

## 12. Kontak

Jika Anda punya pertanyaan tentang kebijakan ini, hubungi kami di **nhsoft.lsd@gmail.com**.
