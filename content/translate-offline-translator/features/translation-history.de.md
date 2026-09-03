---
title: "Übersetzungsverlauf: nur lokal, jederzeit löschbar"
description: "Der Verlauf lebt in einer On-Device-Drift-Datenbank. Es wird keine Kopie hochgeladen; Einträge können einzeln oder in großen Mengen gelöscht werden."
date: 2026-09-03
lang: de
slug: translation-history
icon: history
---

Jede Kameraaufnahme kann im lokalen Übersetzungsverlauf gespeichert werden. Jeder Eintrag speichert das Originalfoto (komprimiert), die erkannte Quellsprache, die Zielsprache, die OCR-Blöcke und die Pro-Block-Übersetzungen. Das Öffnen eines gespeicherten Eintrags reproduziert die Ergebnisseite im schreibgeschützten Modus.

## Was gespeichert wird

Jeder Verlaufsdatensatz enthält:

- **Originalfoto** als JPEG-Miniaturbild, herunterskaliert auf eine maximale Kante. Das Foto in voller Auflösung wird nach der Skalierung verworfen, um den Speicher begrenzt zu halten.
- **Quellsprache**, erkannt von OCR (oder manuell eingestellt).
- **Zielsprache**, ausgewählt für die Aufnahme.
- **OCR-Blöcke** mit ihren Bounding-Boxen, erkanntem Text und Konfidenz.
- **Übersetzungen** pro Block und die zusammengefügte vollständige Absatzübersetzung.
- **Erstellt-Zeitstempel** für Sortierung und Anzeige.

Es wird keine Kopie des Fotos oder des Übersetzungstextes auf einen von uns betriebenen Server hochgeladen. Der gesamte Verlauf wird in einer On-Device-SQLite-Datenbank gespeichert, die von Drift verwaltet wird.

## Wie der Verlauf gefüllt wird

- **Kameraaufnahmen.** Nachdem OCR + Übersetzung abgeschlossen sind, bietet die Ergebnisseite eine Speicheraktion an. Das Speichern speichert den oben beschriebenen Eintrag.
- **Importierte Fotos.** Gleicher Ablauf: Nach der Übersetzung kann die Ergebnisseite den Eintrag im Verlauf speichern.
- **Textübersetzungen.** Nicht automatisch gespeichert. Textübersetzungen erscheinen nur im Ergebnisbereich der Textübersetzungsseite und verschwinden bei „Löschen" oder Navigation. Verwende Kamera oder Import, wenn du eine dauerhafte Aufzeichnung möchtest.

## Durchsuchen und Löschen

- **Listenansicht.** Die Verlaufsseite zeigt Einträge in neuester Reihenfolge mit Foto-Miniaturbild, Quell-Snippet, Ziel-Snippet und Zeitstempel.
- **Tippen zum Öffnen.** Wenn du auf eine Zeile tippst, öffnet sich die Ergebnisseite im schreibgeschützten Modus. Der Overlay wird mit den gespeicherten Übersetzungen reproduziert; ML Kit wird nicht erneut ausgeführt.
- **Löschen.** Jede Zeile hat eine Lösch-Schaltfläche. Das Löschen ist durch einen Bestätigungsdialog gesichert, um versehentliches Löschen zu verhindern. Das Löschen entfernt den Datensatz und sein Foto-Miniaturbild vom Gerät; nichts wird off-device gesendet.
- **Leerer Zustand.** Wenn der Verlauf leer ist, erklärt ein Platzhalter, wie er gefüllt wird.

## Datenschutz

Verlauf ist ein lokales Artefakt. Das Datenschutzmodell der App:

- **Keine Uploads.** Der Verlauf wird niemals hochgeladen, synchronisiert oder auf einem Server gesichert.
- **Keine Analysen zum Verlaufsinhalt.** Absturzberichte und anonyme Nutzungsanalysen enthalten keine Verlaufsinhalte, OCR-Texte oder Übersetzungstexte.
- **Löschung ist dauerhaft.** Das Löschen eines Verlaufseintrags entfernt ihn dauerhaft aus der On-Device-Datenbank. Es gibt keine Cloud-Kopie zum Aufräumen.

## Speicherwachstum

Jeder Eintrag belegt je nach Fotogröße etwa 50–500 KB. Ein Verlauf mit einigen hundert Einträgen bleibt typischerweise unter 50 MB. Fotos werden beim Speichern komprimiert; das Original in voller Auflösung wird nie beibehalten.

Um Speicherplatz freizugeben: Öffne die Verlaufsseite und lösche Einträge, die du nicht mehr brauchst. Das Deinstallieren der App entfernt die gesamte Verlaufsdatenbank als Teil der Plattform-Deinstallation.
