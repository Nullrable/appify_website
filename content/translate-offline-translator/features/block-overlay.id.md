---
title: "Overlay blok: terjemahan dirender di tempatnya pada foto"
description: "Halaman hasil melukis setiap blok teks yang diterjemahkan di atas persegi panjang sumbernya, mempertahankan tata letak asli."
date: 2026-09-03
lang: id
slug: block-overlay
icon: layers
---

Halaman hasil merender terjemahan di atas foto asli, satu overlay per blok OCR. Terjemahan setiap blok muncul di persegi panjang yang persis sama di mana mesin OCR mendeteksi teks sumber. Overlay mendukung slider transparansi sehingga pengguna dapat membandingkan aslinya dan terjemahan secara berdampingan tanpa meninggalkan halaman.

## Cara kerja overlay

1. **Terjemahan per blok.** Setiap TextBlock yang terdeteksi dikirim ke ML Kit sebagai pekerjaan terjemahan independen. Terjemahan mengalir ke overlay saat selesai; pengguna melihat blok "menjadi" diterjemahkan dalam urutan mesin menyelesaikannya.
2. **Posisi berdasarkan persegi panjang.** Teks yang diterjemahkan dibungkus dan diposisikan agar sesuai dengan persegi panjang sumber. Jika blok sempit, terjahan dibungkus menjadi beberapa baris dan mungkin sedikit meluap dari persegi panjang sumber; mesin lebih memilih keterbacaan daripada penahanan yang ketat.
3. **Ketuk untuk fokus.** Mengetuk blok yang diterjemahkan membuka lembar bawah yang menggulir ke blok yang sama dalam tampilan "Terjemahan lengkap", sehingga pengguna dapat membaca terjemahan yang lebih panjang tanpa memperbesar foto.
4. **Transparansi yang dapat disesuaikan.** Slider mengontrol opacity lapisan overlay. Geser ke fully transparent untuk melihat foto asli, fully opaque untuk membaca terjemahan.

## Anatomi halaman hasil

- **Bilah atas.** Tombol tutup. Tidak ada kontrol lain — halaman hasil sengaja minimal.
- **Area utama.** Foto asli dalam layar penuh, dengan lapisan overlay dirender di atasnya. InteractiveViewer memungkinkan zoom dan geser untuk memeriksa teks kecil.
- **Lembar bawah.** Tiga status: terlipat (default), tengah (sekitar setengah layar), terbuka (sebagian besar layar). Status terlipat menunjukkan pegangan kecil dan ringkasan; tengah menunjukkan terjemahan per blok sebagai kartu; terbuka menunjukkan semua terjemahan blok dengan lebar penuh.
- **Dua tab di lembar.** Tab "Blocks" menunjukkan terjemahan dikelompokkan berdasarkan blok OCR, dan tab "Full" menunjukkan terjemahan paragraf lengkap yang digabungkan.

## Mengapa terjemahan per blok

- **Skrip campuran.** Halaman dengan judul bahasa Inggris dan teks bahasa Jepang mendapat manfaat dari petunjuk bahasa sumber per blok. Posisi dan kelas skrip blok menginformasikan mesin model sumber mana yang digunakan.
- **Isolasi kegagalan.** Kegagalan satu blok untuk menerjemahkan tidak memblokir sisa halaman. Overlay menandai blok yang gagal dengan lencana peringatan kecil agar pengguna tahu mana yang memerlukan perhatian manual.
- **Pelestarian tata letak.** Pengguna yang membaca sumber dapat menemukan terjemahan yang sesuai dengan mata — berguna untuk menu, rambu, dan label di mana hubungan spasial penting.

## Perilaku pengeditan

Overlay dirender di atas foto, bukan dipanggang. Menyimpan ke riwayat menyimpan foto asli dan catatan terjemahan per blok. Membuka entri yang disimpan mereproduksi overlay secara persis; pengeditan foto tidak didukung.
