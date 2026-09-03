---
title: "Fotoimport: Jedes Foto aus deiner Bibliothek übersetzen"
description: "Lade jedes bereits auf deinem Gerät vorhandene Foto und übersetze es durch dieselbe OCR- und ML-Kit-Pipeline wie bei einer neuen Aufnahme."
date: 2026-09-03
lang: de
slug: photo-import
icon: photo
---

Dieselbe OCR- und Übersetzungs-Pipeline, die Live-Aufnahmen verarbeitet, verarbeitet auch Fotos aus der Gerätebibliothek. Verwende sie für Screenshots, gespeicherte Fotos von Schildern oder Speisekarten und für Bilder, die Freunde geteilt haben.

## So funktioniert der Import

1. **Aus Galerie auswählen.** Tippe auf das Galerie-Symbol auf der Kameraseite, um die Systemfotoauswahl über `image_picker` zu öffnen. Das ausgewählte Bild wird in das temporäre Verzeichnis der App kopiert; das Original bleibt unverändert.
2. **Physikalische Orientierung lesen.** Bibliotheksfotos haben ein zuverlässiges EXIF-Orientierungs-Tag, daher verwendet der Import-Pfad EXIF direkt, ohne den Beschleunigungsmesser anzufassen. Das Bild wird vor der OCR in die korrekte aufrechte Ausrichtung gedreht.
3. **Dieselbe OCR-Pipeline.** Das Bild wird in dieselbe geforkte `vision_text_recognition`-Engine eingespeist, die auch der Kamera-Pfad verwendet. Keine Sonderbehandlung für "importiert" vs. "aufgenommen" — die Ergebnisseite und das Übersetzungsverhalten sind identisch.
4. **Im Verlauf speichern.** Wie Kameraaufnahmen können importierte Fotos im lokalen Übersetzungsverlauf gespeichert werden. Die gespeicherte Kopie ist ein komprimiertes Miniaturbild, nicht das vollständige Bibliotheksfoto, um den Speicher begrenzt zu halten.

## Wann importieren statt aufnehmen

- **Screenshots.** Übersetze UI-Strings, Fehlerdialoge oder Web-Snippets, die als Screenshots gespeichert sind.
- **Bereits aufgenommene Fotos.** Übersetze ein Foto von einer Reise, einem Meeting oder dem Chat eines Freundes, ohne es erneut aufzunehmen.
- **Sketches oder Whiteboards.** Fotos von Whiteboard-Notizen und Skizzen sind oft klarer als eine Neuaufnahme, besonders wenn die Oberfläche Blendung aufweist.
- **Dokumente.** Schnappschüsse von Belegen, Visitenkarten und Etiketten, die von einer anderen App erfasst wurden, können ohne Werkzeugwechsel übersetzt werden.

## Datenschutz

Importierte Fotos durchlaufen dieselbe On-Device-Pipeline wie Live-Fotos. Sie werden im Speicher verarbeitet und nie auf einen von uns betriebenen Server hochgeladen. Gespeicherte Verlaufskopien werden nur auf dem Gerät in der lokalen Datenbank der App gespeichert und können auf der Verlaufsseite einzeln gelöscht werden.

## Grenzen

- **Bestehende Drehung wird respektiert.** Fotos, die vom Betriebssystem gedreht wurden, werden vor der OCR wieder in die aufrechte Position gedreht. Dies ist die häufigste Ursache für "OCR liefert wirren Text" bei Importen.
- **Große Originale werden herunterskaliert.** Fotos über der vom OCR-Modul empfohlenen Auflösung werden vor der Erkennung herunterskaliert. Das Originalfoto auf dem Gerät bleibt unberührt.
- **Kein Batch-Import.** Jedes Foto erfordert eine eigene eine Tippen. Wenn du viele gespeicherte Fotos übersetzen musst, führe sie einzeln durch; die OCR + Übersetzung für ein einzelnes Bild dauert in der Regel wenige Sekunden.
