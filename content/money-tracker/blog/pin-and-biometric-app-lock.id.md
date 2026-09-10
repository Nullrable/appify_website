---
title: Kunci PIN dan Biometrik - Dua Lapis Sebelum Anda Melihat Saldo
description: Money Tracker dapat meminta PIN 6 digit setiap kali kembali ke latar depan, dengan Face ID, Touch ID, atau sidik jari sebagai jalur lebih cepat di atas. Atur PIN sekali di Pengaturan, kunci akan aktif setiap kali kembali.
date: 2026-09-10
lang: id
slug: pin-and-biometric-app-lock
---

Money Tracker yang dirilis dengan kunci mati. Aktifkan di Pengaturan, pilih enam digit sebagai PIN, dan sejak saat itu PIN menutup jalan masuk setiap kali Anda kembali ke aplikasi.

PIN adalah lantai: ia bekerja di setiap perangkat, tanpa bergantung pada perangkat keras. Di atasnya ada lapisan biometrik opsional — Face ID atau Touch ID di iOS, sidik jari (atau wajah, ketika perangkat mengeksposnya melalui API yang sama) di Android. PIN harus diatur sebelum Anda dapat mengaktifkan biometrik, dan menghapus PIN akan menarik biometrik bersamanya. Jika jari basah atau masker membuat prompt biometrik gagal, sistem jatuh ke kode sandi perangkat, bukan PIN aplikasi, sehingga rantai kepercayaan tetap berlabuh di platform.

Kunci aktif setiap kali aplikasi kembali ke latar depan — bukan hanya saat dibuka dari awal. Perpindahan cepat ke aplikasi lain, sekilas ke notifikasi, pergi satu jam lalu kembali: setiap kali mengembalikan kunci. Sampai PIN atau biometrik terpenuhi, akun, transaksi, statistik, dan Pengaturan tetap tersembunyi.
