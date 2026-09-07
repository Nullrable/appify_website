---
title: "Drehen und Spiegeln"
description: "Drehung in 90°-Schritten, horizontales/vertikales Spiegeln, EXIF-Drehung wird vor dem Export automatisch korrigiert – die gespeicherte Datei ist überall korrekt ausgerichtet."
date: 2026-09-07
lang: de
slug: rotate
---

## Drehen und Spiegeln

Ein schief aufgenommenes Foto, ein falsch ausgerichteter Scan, ein Screenshot, der gespiegelt werden muss – all diese Fälle erfordern Drehen oder Spiegeln. Image Converter bietet grundlegende Funktionen zum Drehen und Spiegeln mit intuitiver Bedienung.

## Drehung: in 90°-Schritten

Die App unterstützt das Drehen des Bildes in 90°-Schritten:

- **90° nach links drehen**: Aus einem Hochformatfoto ein Querformat machen oder ein im Querformat falsch markiertes Foto korrigieren
- **90° nach rechts drehen**: Gegenstück zur Linksdrehung
- **180°**: Zwei aufeinanderfolgende 90°-Drehungen

Bei jeder Drehung wird das Bild neu kodiert, sodass die exportierte Datei auf jedem Gerät in der korrekten Ausrichtung angezeigt wird.

## Spiegelung: horizontal / vertikal

Zusätzlich zur Drehung unterstützt die App das Spiegeln:

- **Horizontale Spiegelung**: Spiegelung links-rechts, häufig verwendet bei Selfies und seitenverkehrten Texten
- **Vertikale Spiegelung**: Spiegelung oben-unten, häufig für Negativeffekte oder gespiegelte Kompositionen

## Automatische EXIF-Drehungsverarbeitung

Manche Smartphones (insbesondere das iPhone) schreiben beim Aufnehmen nur eine Drehungsmarkierung in die Metadaten des Fotos, anstatt die Pixel tatsächlich zu drehen. Solche Fotos wirken in manchen Apps „richtig beim Anschauen, aber schräg beim Exportieren".

Image Converter liest die EXIF-Drehungsorientierung (Orientation-Tag) aus, korrigiert die Pixel vor dem Export und die gespeicherte Datei ist überall korrekt ausgerichtet, ohne dass die Bildanzeigesoftware die Metadaten auswerten muss.

