---
title: "OCR di perangkat: teks yang dapat dicari dari setiap halaman yang dipindai"
description: "OCR di perangkat: teks yang dapat dicari dari setiap halaman yang dipindai"
date: 2026-09-02
lang: id
slug: on-device-ocr
---

OCR (pengenalan karakter optik) mengubah halaman yang dipindai menjadi teks yang dapat dipilih, disalin, dan dicari. Paper Scan menjalankan OCR sepenuhnya di perangkat menggunakan ML kit Apple dan Google, sehingga tidak ada konten pinyang yang dikirim ke server eksternal untuk pengenalan. Halaman yang dikenali diindeks dalam pustaka lokal dan dapat dicari segera setelah disimpan.

### Apa yang dibuka OCR

Setelah halaman dikenali:

- **Salin teks dari pindaian.** Tekan lama kata apa pun untuk membuka pilihan overlay yang menutupi seluruh halaman. Teks yang dipilih dapat disisipkan ke aplikasi lain mana pun.
- **Cari di dalam pindaian.** Bilah pencarian di bagian atas daftar Dokumen menanyakan teks yang dikenali dari setiap halaman, tidak hanya judul dan tag. Nomor telepon, nama, nomor faktur, dan alamat dapat ditemukan di seluruh pustaka.
- **Kutip dan referensi.** Tanda terima yang dipindai, kontrak, catatan tulisan tangan, dan tangkapan papan tulis semuanya menjadi teks yang dapat dikutip untuk dirujuk nanti.

### Mengapa pemrosesan di perangkat penting

- **Privasi.** Konten pindaian tidak pernah meninggalkan perangkat untuk pengenalan. Ini relevan untuk faktur, kontrak, formulir medis, dan dokumen apa pun yang berisi data pribadi.
- **Latensi.** Tidak ada往返 jaringan. Pada iPhone terbaru dan perangkat Android unggulan, OCR untuk halaman standar biasanya selesai dalam waktu kurang dari satu detik.
- **Ketersediaan offline.** OCR bekerja di pesawat, di ruang bawah tanah, dan di wilayah tanpa jangkauan jaringan. Tidak diperlukan konektivitas.

Akurasi sebanding dengan layanan OCR berbasis server; yang berbeda adalah tempat komputasi berjalan.

### Praktik terbaik untuk pengenalan yang akurat

Akurasi OCR bergantung terutama pada kualitas input. Tiga faktor, dalam urutan kepentingan:

1. **Pencahayaan.** Cahaya tidak langsung yang merata dari jendela berkinerja lebih baik daripada satu lampu sorot di atas. Bayangan yang melewati halaman adalah penyebab paling umum dari karakter yang salah dibaca.
2. **Fokus.** Jika fokus otomatis memilih subjek yang salah, ketuk bagian teks di tengah sebelum pengambilan. Pindaian yang buram jarang merupakan pindaian yang dapat digunakan.
3. **Pemilihan filter.** Hitam putih memberikan teks paling bersih untuk formulir cetak. Warna ajaib direkomendasikan ketika tinta sudah pudar atau kertas sudah menguning. Otomatis menangani sebagian besar kasus sehari-hari.
5. **Halaman datar.** Halaman yang melengkung ke arah tulang punggung kehilangan karakter di dekat alur. Tekan halaman datar dengan tangan lain jika memungkinkan.
6. **Petunjuk bahasa.** Atur bahasa OCR secara eksplisit untuk halaman berbahasa tunggal. Halaman skrip campuran diproses dalam satu lintasan tanpa petunjuk.

### Keterbatasan akurasi

OCR bekerja dengan baik pada teks cetak (akurasi 95%+) tetapi kurang dapat diandalkan untuk tulisan tangan cursive, font yang sangat kecil, font dekoratif bergaya, pantulan majalah mengkilap, dan tanda terima lama di mana tinta sudah pudar secara fisik. Gambar asli tetap tersedia dalam semua kasus: jika OCR gagal pada halaman kritis, pindaian itu sendiri masih dapat dibaca.

Tingkat gratis termasuk jatah OCR harian yang cukup untuk tanda terima sehari-hari, kartu nama, dan bab buku sesekali. Pro menghapus batas harian dan menambahkan kemampuan untuk OCR seluruh folder dalam satu operasi.

Mesin di perangkat mendukung skrip Latin (bahasa Inggris, Prancis, Jerman, Spanyol, Portugis, Italia, dan lain-lain), bahasa Mandarin (sederhana dan tradisional), Jepang, Korea, dan sebagian besar skrip Eropa. Halaman skrip campuran ditangani dalam satu lintasan pengenalan.
