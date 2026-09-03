---
title: "Ekspor PDF multi-halaman dengan perlindungan kata sandi opsional"
description: "Ekspor PDF multi-halaman dengan perlindungan kata sandi opsional"
date: 2026-09-02
lang: id
slug: merge-and-encrypt
---

Ekspor PDF Paper Scan dirancang untuk kasus menggabungkan beberapa halaman pindaian menjadi satu file dan mengirimkannya lewat share sheet standar sistem. Mendukung penggabungan batch, perlindungan kata sandi opsional, dan penamaan — semuanya berjalan di perangkat.

### Alur ekspor standar

1. **Pilih banyak di daftar Dokumen.** Tekan lama satu dokumen untuk masuk mode pilih, lalu ketuk yang lain. Ada pintasan "pilih semua di folder" untuk batch yang berada di satu tempat.
2. **Ketuk tombol bagikan.** Share sheet sistem terbuka. Ekspor PDF Paper Scan muncul di antara target.
3. **Konfigurasikan opsi.** Aktifkan penggabungan jika menggabungkan banyak halaman, masukkan kata sandi bila perlu, beri nama file secara opsional. Ketuk Ekspor.
4. **Tunggu pemrosesan.** Di perangkat terbaru, batch 50 halaman dengan dua filter biasanya selesai dalam 5 detik. Batch 300 halaman butuh 15–30 detik. Lembar ekspor menampilkan indikator progres; aplikasi tetap responsif.
5. **Bagikan.** Saat file siap, share sheet standar muncul. File dapat dikirim lewat email, AirDrop, Drive, Slack, atau aplikasi lain yang menerima PDF.

### Penggunaan umum

- **Meneruskan materi rapat.** Gabungkan 50–80 halaman kontrak dan lampiran bertanda tangan menjadi satu untuk tinjauan hukum.
- **Mengarsipkan tanda terima biaya.** Gabungkan tanda terima satu bulan menjadi satu PDF untuk akuntansi.
- **Berbagi paket riset.** Kompilasi beberapa dokumen referensi menjadi satu file untuk kolega.
- **Mengarsipkan proyek.** Bundel semua dokumen terkait proyek yang selesai menjadi satu deliverable.

### Mengatur kata sandi

Lembar ekspor berisi satu kolom kata sandi disertai kolom "konfirmasi kata sandi" untuk verifikasi. Ekspor hanya berlanjut saat kedua entri cocok; entri yang tidak cocok ditolak sebelum pemrosesan.

Saat kolom kata sandi kosong, keluarannya PDF standar tanpa batasan. Saat diaktifkan, penerima harus memasukkan kata sandi sebelum membuka halaman mana pun. Perlindungan kata sandi direkomendasikan untuk dokumen berisi data pribadi: kontrak, rekam medis, laporan keuangan.

Panduan praktis: kosongkan kecuali perlindungan benar-benar dibutuhkan. Menghapus kata sandi dari PDF setelahnya sulit, sedangkan PDF tanpa perlindungan dapat diekspor ulang dengan kata sandi bila perlu.

### Kapan menggabungkan, kapan memisahkan

Satu PDF besar tidak selalu benar. Pemisahan lebih baik saat: perangkat penerima memorinya terbatas, penerima berbeda butuh bagian berbeda dari batch, atau butuh kata sandi berbeda. Setiap file ekspor memiliki kolom kata sandi sendiri.

Paper Scan mengekspor pilihan apa adanya. Tidak ada penggabungan paksa; output mencerminkan apa yang dipilih pengguna.

### Performa batch besar

300+ halaman biasanya butuh 15–30 detik; progress bar menunjukkan status. Pindaian dengan filter berat (mis. magic color pada tanda terima pudar) butuh sekitar dua kali lipat pindaian bersih. Enkripsi tidak memperlambat ekspor secara nyata pada perangkat modern (bottleneck adalah encoding gambar). Ekspor terenkripsi besar menghangatkan perangkat dan menghabiskan beberapa persen baterai, tetapi dapat diterima untuk penggunaan sesekali.
