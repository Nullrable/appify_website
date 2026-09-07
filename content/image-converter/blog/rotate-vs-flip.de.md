---
title: "Drehen oder Spiegeln: Wann was verwenden?"
description: "Welche Szenarien entsprechen 90°-Drehung, 180°-Drehung, horizontalem und vertikalem Spiegeln, und wie beeinflusst die EXIF-Drehungsmarkierung das Endergebnis?"
date: 2026-09-07
lang: de
slug: rotate-vs-flip
---

## Vier Grundoperationen

Image Converter bietet vier grundlegende Dreh-/Spiegel-Operationen:

- **90° nach links drehen**: Vertikales Bild in ein horizontales verwandeln
- **90° nach rechts drehen**: Horizontales Bild in ein vertikales verwandeln
- **180°**: Bild vollständig umdrehen
- **Horizontale Spiegelung**: Spiegelung links-rechts
- **Vertikale Spiegelung**: Spiegelung oben-unten

Klingt einfach, doch viele wissen nicht, wann sie was verwenden sollen.

## Drehung: in 90°-Schritten

### 90°-Drehung

Die 90°-Drehung ist die am häufigsten verwendete Operation und passt zu diesen Szenarien:

- **Screenshot eines im Querformat aufgenommenen Videos**: Ausrichtung falsch, muss gedreht werden
- **Falsch herum gescanntes Dokument**: Der Scanner wurde verkehrt herum eingelegt, die Datei ist spiegelverkehrt
- **Mehrere Fotos unterschiedlicher Ausrichtung kombinieren**: Vor dem Zusammenfügen vereinheitlichen

Eine 90°-Drehung ist verlustfrei – die Pixel werden neu angeordnet, ohne dass Informationen verloren gehen.

### 180°-Drehung

Zwei aufeinanderfolgende 90°-Drehungen oder direkt 180° – passende Szenarien:

- **Völlig auf dem Kopf stehendes Bild**: Beispielsweise ein um 180° gedrehtes Foto
- **Mehrere Bilder zusammenfügen, eines davon falsch herum**: Ausrichtung vereinheitlichen

Auch 180° ist verlustfrei.

## Spiegelung: horizontal und vertikal

### Horizontale Spiegelung (links-rechts)

- **Selfie-Spiegelung korrigieren**: Manche Smartphones spiegeln Selfies automatisch, sodass die aufgenommene Person die umgekehrte Richtung sieht
- **Spiegelverkehrten Text korrigieren**: Durch Spiegelung fotografierte Texte, Reflexionen auf Spiegeln
- **Design-Effekt**: Gespiegelte Komposition, Designvorschau mit Links-Rechts-Symmetrie

### Vertikale Spiegelung (oben-unten)

- **Negativeffekt**: Den klassischen Filmnegativ-Effekt simulieren
- **Gespiegelte Komposition**: Vorschau eines Wasserreflex-Effekts
- **Spezielle Designanforderungen**: Oben-Unten-Symmetrie-Vorschau für Plakate und Verpackungsdesigns

## EXIF-Drehung: Die häufigste Stolperfalle

Viele Smartphones (insbesondere das iPhone) schreiben beim Aufnehmen **nur eine Drehungsmarkierung in die Metadaten, anstatt die Pixel tatsächlich zu drehen**.

Das bedeutet:

- Im Album betrachtet: Ausrichtung normal
- In manchen Apps geöffnet: Ausrichtung falsch
- Auf manchen Plattformen hochgeladen: Ausrichtung falsch

Image Converter liest die EXIF-Drehungsorientierung (Orientation-Tag) aus und **dreht die Pixel vor dem Export tatsächlich**, sodass das gespeicherte Bild überall korrekt ausgerichtet ist.

## Drehen oder Spiegeln: Szenarien im Vergleich

| Phänomen | Operation | Grund |
|---|---|---|
| Querformat-Videoscreenshot steht hochkant | 90°-Drehung | Videoausrichtung stimmt nicht mit Anzeige überein |
| Selfie links-rechts vertauscht | Horizontale Spiegelung | Telefon hat automatisch gespiegelt |
| Gescanntes Dokument falsch herum | 90°-Drehung | Scanner falsch ausgerichtet |
| Im Spiegel reflektierter Text | Horizontale Spiegelung | Abbildung durch Spiegel |
| Foto steht komplett auf dem Kopf | 180°-Drehung | Telefon beim Aufnehmen verkehrt gehalten |
| Wasserreflex steht oben-unten verkehrt | Vertikale Spiegelung | Reflexionseffekt simulieren |

Wenn es nur ein Problem der EXIF-Markierung ist, **müssen Sie nichts tun** – Image Converter erledigt das automatisch beim Konvertieren.

