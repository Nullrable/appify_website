---
title: JSON-Backup in Ihrer Kontrolle - Eine Datei, die Sie Öffnen Können
description: Exportieren Sie Ihre Money-Tracker-Daten als einzelne JSON-Datei — Konten, Kategorien, Transaktionen — und speichern Sie sie dort, wo Sie bereits Backups aufbewahren, oder senden Sie sie direkt über das System-Share-Sheet.
date: 2026-09-10
lang: de
slug: json-backup-you-control
---

Der Export-Bildschirm schreibt eine einzige Datei: `money_tracker_<timestamp>.json`, die jedes Konto (mit Art, Saldo-Schnappschuss und Metadaten), jede Kategorie (System und benutzerdefiniert) und jede Transaktion (Datum, Betrag, Konto, Kategorie, Notiz, Art) enthält. Eine Datei, die gesamte Datenbank.

Sie wählen, wohin sie geht. iOS öffnet die Dokumentenauswahl, Android öffnet Storage Access Framework, sodass die Datei in iCloud Drive, Google Drive, einem USB-Stick oder jeder Drittanbieter-App landen kann, die als Documents Provider registriert ist. Nichts zwingt Sie in eine bestimmte Cloud.

Neben der Auswahl sitzt das System-Share-Sheet. Von dort geht die Datei direkt an E-Mail, Messenger, Notizen-App, AirDrop oder Nearby Share — Ende zu Ende durch das System, nie durch Money Tracker.

JSON ist Klartext. Öffnen Sie die Datei in einem beliebigen Editor und sehen Sie die Struktur: ein Objekt mit den Arrays `accounts`, `categories` und `transactions`, jeder Eintrag ein flacher Datensatz mit benannten Feldern. Keine Base64-Blobs, kein verschlüsselter Container, kein versionsgebundenes Schema.

Der Import akzeptiert die gleiche Datei. Teilt sich ein importierter Eintrag eine ID mit einem bestehenden, überschreibt der Import ihn an Ort und Stelle statt zu duplizieren — so ergänzt ein neuer Export über einem älteren nur die wirklich neuen Zeilen.
