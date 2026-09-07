---
title: "PDF-Verschlüsselung"
description: "Anleitung zur Verschlüsselungsfunktion von Image to PDF: Öffnungspasswort und Besitzerpasswort festlegen, Druck-, Kopier- und Änderungsrechte steuern, standardmäßig AES-256-Verschlüsselung."
date: 2026-09-07
lang: de
slug: pdf-encrypt
---

## PDF-Verschlüsselung

Fügen Sie dem PDF eine Passwortsperre hinzu. Bevor Sie Verträge, Ausweis-Scans und Finanzunterlagen per E-Mail oder Chat-Tools versenden, verschlüsseln Sie sie zuerst, um sicherzustellen, dass nur Personen mit dem Passwort sie öffnen können.

## Zwei Passworttypen, jeder mit eigener Aufgabe

- **Benutzerpasswort (Öffnungspasswort)**: Nach dem Festlegen muss jeder, der dieses PDF öffnet, dieses Passwort eingeben — dies ist die erste Tür der Datei;
- **Besitzerpasswort (optional)**: Separat vom Benutzerpasswort festgelegt; wer das Besitzerpasswort besitzt, kann die Berechtigungskonfiguration der Datei ändern.

## Fein abgestimmte Berechtigungssteuerung

Beim Aktivieren der Verschlüsselung können Sie auch steuern, welche Vorgänge für dieses PDF zulässig sind:

- **Druck zulassen** (standardmäßig aktiviert): ob diese Datei gedruckt werden darf;
- **Kopieren zulassen** (standardmäßig deaktiviert): ob der darin enthaltene Text oder die Bilder kopiert werden dürfen;
- **Änderung zulassen** (standardmäßig deaktiviert): ob der Dateiinhalt bearbeitet werden darf.

Zum Beispiel beim Versenden einer报价单 nach außen können Sie Druck aktivieren, Kopieren und Änderung deaktivieren — bequem für den Empfänger zur Ansicht und reduziert das Risiko einer direkten Verwendung des Inhalts.

## AES-Verschlüsselungsstandard

Die Verschlüsselung verwendet standardmäßig **AES-256** und kann für eine bessere Kompatibilität auch auf AES-128 umgeschaltet werden. Die Verschlüsselung erfolgt lokal auf dem Gerät; PDF-Inhalte werden auf keinen Server hochgeladen.
