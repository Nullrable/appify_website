---
title: "Rotasi atau balik: Kapan menggunakan yang mana"
description: "Rotasi 90°, rotasi 180°, pembalikan horizontal, pembalikan vertikal masing-masing sesuai dengan skenario apa, dan bagaimana tag rotasi EXIF memengaruhi hasil akhir."
date: 2026-09-07
lang: id
slug: rotate-vs-flip
---

## Empat operasi dasar

Image Converter menyediakan empat operasi dasar rotasi/balik:

- **Putar kiri 90°**: mengubah gambar vertikal menjadi horizontal
- **Putar kanan 90°**: mengubah gambar horizontal menjadi vertikal
- **180°**: membalik gambar sepenuhnya
- **Pembalikan horizontal**: pencerminan kiri-kanan
- **Pembalikan vertikal**: pencerminan atas-bawah

Terdengar sederhana, tetapi kapan harus menggunakan yang mana, banyak orang tidak dapat membedakannya.

## Rotasi: langkah 90°

### Rotasi 90°

Rotasi 90° adalah operasi yang paling umum digunakan, sesuai dengan skenario:

- **Tangkapan layar video yang direkam dengan telepon dalam orientasi horizontal**: arahnya salah, perlu diputar
- **Arah dokumen pindaian terbalik**: arah penempatan pemindai salah, file yang diperoleh arahnya terbalik
- **Menggabungkan beberapa foto dengan arah berbeda**: menyeragamkan arah lalu membuat kolase

Rotasi 90° adalah operasi lossless — piksel disusun ulang, tetapi tidak ada informasi yang hilang.

### Rotasi 180°

Dua kali rotasi 90° atau langsung 180°, sesuai dengan skenario:

- **Gambar yang sepenuhnya terbalik**: misalnya foto yang dibalik 180°
- **Menjahit beberapa gambar tetapi salah satunya arahnya terbalik**: menyeragamkan arah

180° juga merupakan operasi lossless.

## Pembalikan: horizontal dan vertikal

### Pembalikan horizontal (pencerminan kiri-kanan)

- **Koreksi cermin swafoto**: sebagian telepon secara otomatis mencerminkan saat swafoto, arah yang dilihat oleh pemfoto berlawanan dengan arah sebenarnya
- **Koreksi teks terbalik**: menangkap layar cermin, foto refleksi cermin
- **Efek desain**: komposisi cermin, draf desain membutuhkan pratinjau simetris kiri-kanan

### Pembalikan vertikal (pencerminan atas-bawah)

- **Efek negatif**: mensimulasikan efek negatif film tradisional
- **Komposisi cermin**: pratinjau efek refleksi permukaan air
- **Kebutuhan desain khusus**: pratinjau simetris atas-bawah untuk poster, desain kemasan

## Rotasi EXIF: jebakan yang paling mudah

Banyak telepon (terutama iPhone) saat memotret **hanya menulis tag rotasi di metadata foto, bukan benar-benar memutar piksel**.

Ini (berarti):

- Dilihat di album: arah normal
- Dibuka dengan beberapa aplikasi: arah salah
- Diunggah ke beberapa platform: arah salah

Image Converter akan membaca arah rotasi EXIF (tag Orientation), **benar-benar memutar piksel** sebelum ekspor, gambar yang disimpan akan tampil dengan arah yang benar di mana pun dibuka.

## Memilih rotasi atau balik: perbandingan skenario

| Fenomena | Operasi | Alasan |
|---|---|---|
| Tangkapan layar video horizontal ditampilkan vertikal | Rotasi 90° | Arah video tidak konsisten dengan arah tampilan |
| Swafoto kiri-kanan terbalik | Pembalikan horizontal | Telepon otomatis mencerminkan |
| Arah dokumen pindaian terbalik | Rotasi 90° | Arah penempatan pemindai salah |
| Teks refleksi di cermin | Pembalikan horizontal | Pencitraan cermin |
| Foto secara keseluruhan terbalik | Rotasi 180° | Telepon dipegang terbalik saat pemotretan |
| Refleksi permukaan air yang terbalik atas-bawah | Pembalikan vertikal | Mensimulasikan efek refleksi |

Jika hanya masalah tag EXIF, **tidak perlu melakukan apa pun** — Image Converter akan secara otomatis menanganinya saat konversi.

