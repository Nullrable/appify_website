---
title: "Sinkronisasi cloud: mirrorkan pustaka Anda ke Drive atau iCloud Anda sendiri"
description: "Sinkronisasi cloud: mirrorkan pustaka Anda ke Drive atau iCloud Anda sendiri"
date: 2026-09-02
lang: id
slug: sync-to-your-cloud
---

Sinkronisasi cloud Paper Scan mencerminkan pustaka dokumen ke folder Google Drive atau iCloud yang dikontrol pengguna. Ponsel tetap menjadi lokasi utama untuk semua pindaian; cloud berfungsi sebagai cadangan yang dimiliki pengguna dan dapat diakses secara independen. Sinkronisasi cloud adalah fitur Pro.

### Apa yang dilakukan fitur ini

Saat diaktifkan, sinkronisasi cloud mengunggah pindaian ke penyimpanan cloud milik pengguna sendiri saat disimpan. Pindaian baru diunggah di latar belakang. Pindaian yang ada diunggah selama proses sinkronisasi awal.

Byte bergerak langsung antara ponsel dan penyedia cloud. Paper Scan tidak mengoperasikan server relai, dan tidak ada salinan pindaian yang disimpan di infrastruktur Paper Scan.

### Kasus penggunaan

- **Penggantian perangkat.** Beralih ke ponsel baru, instal Paper Scan, masuk ke penyedia cloud, dan pulihkan pustaka dari cermin cloud. Tidak diperlukan transfer kabel atau alat pencadangan pihak ketiga.
- **Kehilangan perangkat.** Jika ponsel hilang atau rusak, pindaian dipertahankan dalam cermin cloud dan pustaka dapat dipulihkan pada perangkat pengganti.
- **Penjelajahan lintas perangkat.** Buka folder cloud di browser mana pun untuk melihat pindaian yang diatur berdasarkan struktur folder yang disiapkan di ponsel. File dapat dibagikan, dilampirkan ke email, atau ditransfer ke aplikasi lain langsung dari folder cloud.
- **Pencadangan di luar situs.** Pertahankan salinan independen dari pustaka dokumen untuk redundansi.

### Konfigurasi

1. Buka **Settings → Cloud** di Paper Scan.
2. Pilih Google Drive atau iCloud. Penyedia dapat diubah nanti; kedua penyedia menggunakan mesin sinkronisasi yang sama.
3. Masuk ke akun cloud. Paper Scan meminta izin minimum yang diperlukan: akses hanya ke folder miliknya sendiri, bukan ke akun Drive atau iCloud penuh.
4. Pilih folder lokal mana yang akan dicerminkan. Seluruh pustaka dicerminkan secara default; folder tertentu dapat dikecualikan jika pindaian tertentu harus tetap hanya di perangkat.
5. Ketuk **Start Sync**. Proses pertama mengunggah pustaka yang ada; pindaian berikutnya diunggah secara otomatis saat disimpan.

Untuk menonaktifkan sinkronisasi cloud, alihkan fitur ke nonaktif di layar Pengaturan yang sama. Paper Scan tidak menghapus file dari cloud saat sinkronisasi dinonaktifkan. Salinan cloud tetap di tempatnya sampai pengguna memilih untuk menghapusnya.

### Cakupan izin

Paper Scan meminta cakupan izin yang diperlukan untuk membaca dan menulis folder miliknya sendiri dalam Google Drive atau iCloud. Itu tidak menerima visibilitas ke file lain di penyimpanan cloud pengguna, juga tidak mendapatkan token yang akan memungkinkan akses ke file tersebut. Untuk memverifikasi, tinjau daftar aplikasi terhubung di pengaturan akun Google atau Apple: Paper Scan muncul dengan akses terbatas ke folder aplikasi yang ditunjuk, bukan ke akun penuh.

### Pulihkan

Pulihkan adalah operasi terpisah dari sinkronisasi. Ini dimulai secara manual ketika pengguna ingin membangun kembali pustaka lokal dari salinan cloud.

1. Instal Paper Scan di perangkat baru dan masuk.
2. Buka **Settings → Cloud → Restore**.
3. Pilih penyedia dan tujuan.
4. Tunggu pemulihan selesai. Pustaka beberapa ratus pindaian biasanya selesai dalam beberapa menit; pustaka beberapa ribu memakan waktu lebih lama. Bilah kemajuan mencerminkan kemajuan aktual.

Pulihkan adalah satu-satunya operasi di mana aplikasi mengambil file dari cloud. Itu tidak berjalan secara otomatis atau di latar belakang.

### Beralih penyedia dan menonaktifkan sinkronisasi

Anda dapat beralih antara Google Drive dan iCloud dengan menonaktifkan penyedia saat ini, mengaktifkan yang baru, dan masuk: sinkronisasi berikutnya dimulai baru di sisi baru. File yang sebelumnya dicerminkan ke penyedia lama tetap di sana sampai pengguna menghapusnya. Menonaktifkan sinkronisasi menghentikan unggahan baru tetapi tidak menghapus file yang sudah diunggah; pustaka lokal tidak terpengaruh. Menonaktifkan dan mengaktifkan kembali sinkronisasi dilanjutkan dari tempat dihentikan, dan pindaian yang ditambahkan selama periode nonaktif diunggah pada proses sinkronisasi berikutnya.

Paper Scan berfungsi penuh tanpa sinkronisasi cloud. Pemindaian, OCR, folder, tag, dan ekspor PDF semuanya beroperasi sama dengan atau tanpa sinkronisasi diaktifkan.
