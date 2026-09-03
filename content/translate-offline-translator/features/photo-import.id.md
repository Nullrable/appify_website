---
title: "Impor foto: terjemahkan foto apa pun dari pustaka Anda"
description: "Ambil foto apa pun yang sudah ada di perangkat Anda dan terjemahkan melalui pipeline OCR + ML Kit yang sama seperti tangkapan baru."
date: 2026-09-03
lang: id
slug: photo-import
icon: photo
---

Pipeline OCR dan terjemahan yang sama yang memproses tangkapan langsung juga memproses foto yang diimpor dari pustaka perangkat. Gunakan untuk tangkapan layar, foto tersimpan dari rambu atau menu, dan gambar yang dibagikan teman.

## Bagaimana impor bekerja

1. **Pilih dari galeri.** Mengetuk ikon galeri di halaman kamera membuka pemilih foto sistem melalui `image_picker`. Gambar yang dipilih disalin ke direktori sementara aplikasi; yang asli dibiarkan di tempatnya.
2. **Baca orientasi fisik.** Foto pustaka memiliki tag orientasi EXIF yang andal, jadi jalur impor menggunakan EXIF secara langsung tanpa menyentuh akselerometer. Gambar diputar ke orientasi tegak yang benar sebelum OCR.
3. **Pipeline OCR yang sama.** Gambar dimasukkan ke mesin `vision_text_recognition` yang di-fork dan sama dengan yang digunakan jalur kamera. Tidak diperlukan penanganan khusus untuk "diimpor" vs. "ditangkap" — halaman hasil dan perilaku terjemahan identik.
4. **Simpan ke riwayat.** Seperti tangkapan kamera, foto yang diimpor dapat disimpan ke riwayat terjemahan lokal. Salinan yang disimpan adalah thumbnail yang dikompresi, bukan foto pustaka lengkap, untuk menjaga penyimpanan tetap terbatas.

## Kapan mengimpor alih-alih menangkap

- **Tangkapan layar.** Terjemahkan string UI, dialog kesalahan, atau cuplikan web yang disimpan sebagai tangkapan layar.
- **Foto yang sudah diambil.** Terjemahkan foto dari perjalanan, rapat, atau obrolan teman tanpa memotret ulang.
- **Sketsa atau papan tulis.** Foto catatan papan tulis dan sketsa seringkali lebih jelas daripada tangkapan ulang, terutama saat permukaannya memiliki silau.
- **Dokumen.** Snapshot tanda terima, kartu nama, dan label yang ditangkap oleh aplikasi lain dapat diterjemahkan tanpa berpindah alat.

## Privasi

Foto yang diimpor melewati pipeline di perangkat yang sama seperti foto langsung. Foto diproses dalam memori dan tidak pernah diunggah ke server mana pun yang kami operasikan. Salinan riwayat yang disimpan hanya disimpan di perangkat, di database lokal aplikasi, dan dapat dihapus satu per satu dari halaman riwayat.

## Batasan

- **Rotasi yang ada dihormati.** Foto yang dirotasi oleh OS dirotasi kembali ke tegak sebelum OCR. Ini adalah sumber paling umum dari masalah "OCR mengembalikan teks kacau" dengan impor.
- **Asli yang besar diskalakan.** Foto di atas resolusi yang direkomendasikan oleh mesin OCR diskalakan sebelum pengenalan. Foto asli di perangkat tidak terpengaruh.
- **Tidak ada impor batch.** Setiap foto memerlukan satu ketukan sendiri. Jika Anda perlu menerjemahkan banyak foto yang disimpan, jalankan satu per satu; OCR + terjemahan untuk satu gambar biasanya selesai dalam beberapa detik.
