---
title: "Kamera-OCR: Zielen, Auslösen, Übersetzen"
description: "On-Device-OCR über vision_text_recognition mit hardwarenaher Orientierung, selbst wenn die Geräte-UI auf Hochformat gesperrt ist."
date: 2026-09-03
lang: de
slug: camera-ocr
icon: camera
---

Die Kamera-OCR führt OCR lokal mit einem geforkten `vision_text_recognition`-Paket aus, das lateinische, chinesische (vereinfacht und traditionell), japanische und koreanische Schriften unterstützt. Für die Erkennung wird nichts hochgeladen. Jeder vom OCR-Engine zurückgegebene Block trägt seine eigene Bounding-Box und seinen erkannten Text; die Ergebnisseite zeichnet die Übersetzung über den gleichen Koordinaten, sodass das ursprüngliche Layout erhalten bleibt.

## Erfassungs-Pipeline

1. **Kamera-Initialisierung.** Der Kamera-Controller wird asynchron mit expliziten `initializing / ready / failed`-Zuständen initialisiert. Bei einem Fehler wird eine Wiederholen-Schaltfläche angezeigt, die die Initialisierung erneut ausführt, ohne den `initializing`-Schutz erneut zu betreten.
2. **Echte Orientierung.** iOS-`DeviceOrientation` und EXIF sind unzuverlässig, wenn die App hochformatgesperrt ist. Die App liest den Roh-Beschleunigungsmesser über `sensors_plus` und speichert den letzten Frame zwischen, sodass der Auslöser die tatsächliche Griffrichtung erfasst, auch wenn die UI gesperrt ist. Die EXIF-Orientierung wird dann mit diesem Bezugswert abgeglichen.
3. **Auslöser.** Tippen erfasst im aktuellen Vorschau-Seitenverhältnis. Der erfasste Frame wird vor der OCR auf eine konfigurierbare maximale Kantenlänge herunterskaliert — die meisten Seiten benötigen 1500–2000 px an der langen Kante, damit die Engine kleine Schrift lesen kann, ohne den Speicher zu überlasten.
4. **Blitz.** Im Sucher werden vier Modi angezeigt — automatisch, aus, ein und Taschenlampe — gebunden an die System-Blitz-API.

## Was die OCR liefert

- **Bounding-Boxen pro Block.** Jeder TextBlock hat sein eigenes Rechteck. Die Ergebnisseite verwendet diese, um den übersetzten Text genau über dem Quelltext zu positionieren.
- **Blocktext und Reihenfolge.** Quellsprachentext pro Block, in der Reihenfolge, in der die Engine sie ausgegeben hat (standardmäßig von oben nach unten, von links nach rechts).
- **Konfidenz.** Jeder Block hat seine eigene Konfidenz. Blöcke unterhalb eines Schwellenwerts werden in der Ergebnisseite gerendert, aber als "niedrige Konfidenz" markiert, damit Benutzer sie überprüfen können.

## Warum On-Device

- **Datenschutz.** Fotos von Straßenschildern, Verträgen oder medizinischen Formularen verlassen das Gerät nicht für die OCR.
- **Latenz.** Kein Netzwerk-Roundtrip. OCR einer typischen Smartphone-Seite wird auf einem aktuellen Gerät in deutlich unter einer Sekunde abgeschlossen.
- **Offline.** OCR funktioniert im Flugzeug, im Keller und in Regionen ohne Netzabdeckung. Dieselbe Engine, die die Erkennung ausführt, läuft vollständig aus dem On-Device-Modell.

## Best Practices für genaue OCR

1. **Gleichmäßiges, indirektes Licht.** Fensterlicht übertrifft Deckenstrahler. Schatten, die über die Seite ziehen, sind die häufigste Ursache für falsch gelesene Zeichen.
2. **Tippen zum Fokussieren.** Wenn der Autofokus das falsche Motiv (den Schreibtisch, einen Finger, den Seitenrand) auswählt, tippen Sie vor der Aufnahme auf die Mitte des Textes.
3. **Flache Seiten.** Seiten, die sich zur Buchmitte hin wölben, verlieren Zeichen in der Nähe des Falzes. Drücken Sie die Seite nach Möglichkeit mit der anderen Hand flach.
4. **Eine Sprache pro Aufnahme.** Seiten mit gemischten Schriften funktionieren in einem Durchgang, aber eine Seite, die Latein mit vertikalem Japanisch mischt, wird am besten in zwei Aufnahmen aufgeteilt.
