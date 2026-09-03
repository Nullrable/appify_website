---
title: "Deteksi bahasa otomatis: bagaimana aplikasi memilih bahasa sumber"
description: "Ketika pemilih sumber disetel ke Deteksi Otomatis, aplikasi menebak bahasa sumber per terjemahan. Beginilah cara tebakannya dilakukan."
date: 2026-09-03
lang: id
slug: auto-detect-language
---

## Deteksi bahasa otomatis: bagaimana aplikasi memilih bahasa sumber

Deteksi Otomatis adalah opsi pertama di pemilih bahasa sumber. Memilihnya tidak berarti aplikasi tidak memiliki pendapat tentang sumber — itu berarti aplikasi akan memilih bahasa sumber ML Kit tertentu per terjemahan, menggunakan petunjuk bahasa per blok OCR (untuk foto) atau heuristik set karakter di lapisan Dart (untuk teks).

    ## Mengapa per terjemahan

    Penerjemah pada perangkat ML Kit mengharuskan bahasa sumber tertentu diunduh sebelum terjemahan dapat dijalankan. Deteksi Otomatis tidak dapat berarti «terjemahkan dari bahasa apa pun»; itu harus diselesaikan ke salah satu dari 19 bahasa yang didukung per terjemahan. Aplikasi melakukan resolusi ini secara otomatis.

    ## Cara kerjanya untuk foto

    Untuk tangkapan kamera, mesin OCR memancarkan petunjuk bahasa per blok untuk setiap blok yang dikenali. Petunjuk diagregasi di seluruh halaman; bahasa mayoritas menjadi bahasa sumber ML Kit untuk terjemahan itu.

    Halaman satu bahasa teresolusi dengan bersih: halaman teks bahasa Korea teresolusi ke bahasa Korea, halaman teks bahasa Prancis teresolusi ke bahasa Prancis. Halaman dengan skrip campuran kembali ke default jika tidak ada satu bahasa pun yang dominan.

    Terjemahan per blok menggunakan petunjuk ini secara lebih granular. Halaman dengan judul bahasa Inggris dan teks bahasa Jepang dapat diterjemahkan dengan sumber yang sesuai per blok, bahkan ketika bahasa mayoritas tidak jelas.

    ## Cara kerjanya untuk teks

    Untuk terjemahan teks, aplikasi menjalankan heuristik lapisan Dart yang menghitung karakter menurut kelas skrip:

    - Karakter Han → Mandarin Sederhana
    - Kana → Jepang
    - Hangul → Korea
    - Latin → Inggris
    - Kiril → Rusia
    - Arab → Arab

    Input campuran mengikuti kelas karakter mayoritas. Input kosong atau hanya-spasi menjadi default ke Inggris.

    Heuristiknya cepat (pemindaian linier tunggal atas input) dan berjalan sebelum panggilan ML Kit. Bahasa sumber yang dipilih kemudian digunakan untuk permintaan terjemahan.

    ## Kapan deteksi otomatis gagal

    - **Latin tanpa diakritik.** Cuplikan murni Latin dari 10 karakter bisa berupa bahasa Inggris, Jerman, Italia, Portugis, Spanyol, Belanda, Polandia, Ceko, atau beberapa lainnya. Heuristik memilih Inggris sebagai default; jika sumber bukan bahasa Inggris, kualitas terjemahan mungkin menderita. Tetapkan bahasa sumber secara manual untuk cuplikan Latin pendek.
    - **Kiril tanpa kekhususan.** Kiril bisa berupa bahasa Rusia, Ukraina, atau skrip Slavia lainnya. Aplikasi memilih bahasa Rusia.
    - **Ambiguitas skrip Han.** Mandarin Sederhana dan Tradisional berbagi sebagian besar karakter mereka. Cuplikan pendek karakter Han tidak dapat diselesaikan menjadi satu tanpa konteks yang lebih panjang. Aplikasi memilih Mandarin Sederhana.

    Untuk kasus-kasus ini, tetapkan bahasa sumber secara manual dari pemilih.

    ## Deteksi otomatis tidak pernah diam

    Halaman selalu memiliki bahasa sumber ML Kit tertentu ketika terjemahan berjalan. Jika heuristik mengembalikan default yang salah, terjemahan mungkin salah; jika mengembalikan bahasa yang benar, terjemahan berfungsi. Tidak ada mode di mana aplikasi «gagal memilih bahasa» — itu jatuh ke default dan menerjemahkan.

    ## Saran praktis

    Untuk dokumen panjang dan satu bahasa, deteksi otomatis berfungsi. Untuk cuplikan pendek atau halaman dengan skrip campuran, tetapkan bahasa sumber secara manual dari pemilih. Pemilih mengingat bahasa-bahasa terbaru Anda di atas, jadi penggunaan kedua bahasa adalah satu ketukan.
