---
title: "Deteksi Duplikat Persis"
description: "Bagaimana CleanPhoto mengelompokkan foto berdimensi identik yang diambil pada detik yang sama, dan mengapa aturan lokal ini menemukan salinan sejati tanpa positif palsu."
date: 2026-09-06
lang: id
slug: duplicates
---

## Deteksi Duplikat Persis

Foto yang duplikat persis adalah foto yang paling mudah dihapus namun juga paling mudah terlewat. CleanPhoto menemukannya dengan aturan sederhana dan transparan yang berjalan sepenuhnya di perangkat Anda: foto dengan dimensi piksel yang identik dan diambil pada detik yang sama persis dikelompokkan bersama.

### Cara pengelompokan bekerja

Saat pemindaian, CleanPhoto menelusuri pustaka foto Anda dan membangun kunci untuk setiap foto dari lebarnya, tingginya, dan detik pengambilannya. Foto dengan kunci sama ditempatkan dalam satu grup. Foto yang tersimpan dua kali — karena disimpan ulang, diimpor dari perangkat lain, atau konflik sinkronisasi cloud — membawa dimensi dan stempel waktu yang sama dengan aslinya, sehingga kedua salinan masuk ke grup yang sama tanpa foto lain yang ikut tercampur.

### Meninjau grup

Setiap grup menampilkan semua salinan beserta ukuran filenya, sehingga Anda langsung melihat salinan mana yang asli dengan kualitas lebih tinggi. Tandai salinan yang ingin dihapus, konfirmasi, dan foto dihapus melalui pustaka foto sistem. Foto yang Anda simpan tidak tersentuh.

### Mengapa dimensi dan waktu, bukan analisis konten

Pencocokan dimensi dan detik pengambilan cepat, dapat diprediksi, dan menjaga privasi. Ini tidak menghasilkan positif palsu antar foto yang berbeda, karena dua foto berbeda tersimpan dengan dimensi identik pada detik yang sama sangatlah jarang. Dan karena tidak ada konten gambar yang perlu dianalisis atau dibandingkan, pemindaian tidak perlu membaca data piksel sama sekali — hanya bekerja dari metadata pustaka.

### Semuanya tetap di perangkat Anda

Deteksi duplikat berjalan secara lokal di ponsel Anda. Tidak ada foto, thumbnail, atau metadata yang pernah meninggalkan perangkat Anda, dan tidak diperlukan akun.
