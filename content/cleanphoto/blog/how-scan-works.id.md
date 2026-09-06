---
title: "Bagaimana CleanPhoto Memindai Pustaka Anda Tanpa Mengunggah Satu Foto Pun"
description: "Melihat di dalam tiga detektor on-device — duplikat persis, foto serupa, dan tangkapan layar — beserta aturan sederhana yang mereka pakai, agar Anda tahu persis apa yang terjadi saat menekan Pindai."
date: 2026-09-06
lang: id
slug: how-scan-works
---

## Bagaimana CleanPhoto Memindai Pustaka Anda Tanpa Mengunggah Satu Foto Pun

Kebanyakan pembersih foto meminta kepercayaan. CleanPhoto berusaha mendapatkannya lewat transparansi: setiap pemindaian berjalan di perangkat Anda, bekerja dari metadata pustaka, dan mengikuti aturan yang cukup sederhana untuk dijelaskan dalam beberapa paragraf. Inilah yang persisnya terjadi saat Anda menekan Pindai.

### Tiga detektor, tiga pertanyaan

CleanPhoto menjalankan tiga pemindaian, masing-masing menjawab pertanyaan berbeda. Duplikat persis bertanya "apakah foto ini tersimpan dua kali?" Foto serupa bertanya "apakah ini burst atau pengambilan ulang cepat?" Tangkapan layar bertanya "apakah gambar ini hanya sementara?" Anda bisa menjalankannya dalam urutan apa pun, dan masing-masing menyajikan hasilnya sebagai grup untuk ditinjau.

### Aturan satu: ukuran sama, detik sama

Detektor duplikat membangun kunci untuk setiap foto dari lebarnya, tingginya, dan detik pengambilannya. Foto dengan kunci sama masuk satu grup. Foto yang disimpan ulang, diimpor, atau lahir dari konflik sinkronisasi cloud membawa dimensi dan stempel waktu aslinya, sehingga kedua salinan bertemu di grup yang sama. Dua foto berbeda dengan dimensi identik pada detik yang sama sangatlah jarang — itulah mengapa aturan ini menemukan salinan sungguhan tanpa positif palsu.

### Aturan dua: dalam sepuluh detik

Detektor foto serupa mengurutkan pustaka berdasarkan waktu pengambilan lalu menelusuri lini waktu. Selama setiap foto diambil dalam 10 detik dari sebelumnya, ia bergabung ke grup yang sama; begitu jarak melebihi 10 detik, rangkaian ditutup. Ini cocok dengan cara burst dan pengambilan ulang terjadi — serangkaian cepat, jeda, lalu hal lain. Grup berisi satu foto dibuang.

### Aturan tiga: album, judul, jalur

Detektor tangkapan layar bekerja berbeda per platform. Di iOS ia membaca album Screenshots sistem secara langsung. Di Android, yang penyimpanannya bervariasi per pabrikan, ia memeriksa nama album lebih dulu dan, bila tidak ada album tangkapan layar, memeriksa judul serta jalur file setiap gambar untuk pola penamaan perangkat. Hasil dikelompokkan per hari, terbaru dulu.

### Ukuran file, dimuat sebelum Anda meninjau

Sebelum layar tinjauan apa pun terbuka, CleanPhoto memuat lebih dulu ukuran file setiap foto. Dalam satu grup, file terbesar hampir selalu salinan yang mempertahankan detail terbanyak, jadi item diurutkan berdasarkan ukuran dan kandidat terbaik berada di atas. Sinyal tunggal itu mengubah "mana yang terbaik dari delapan ini?" menjadi "apakah yang ini bagus?"

### Yang tidak pernah terjadi

Tidak ada pemindaian yang membaca konten piksel untuk analisis, tidak ada foto atau thumbnail yang meninggalkan perangkat Anda, dan tidak diperlukan akun. Penghapusan hanya terjadi setelah konfirmasi eksplisit Anda dan berjalan melalui pustaka foto sistem — aplikasi tidak pernah menghapus apa pun sendiri. Internet dipakai untuk dua hal saja: menampilkan iklan di versi gratis dan mengelola langganan Pro.
