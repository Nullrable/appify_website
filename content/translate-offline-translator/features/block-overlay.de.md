---
title: "Block-Overlay: Übersetzungen werden an ihrer Position im Foto gerendert"
description: "Die Ergebnisseite zeichnet jeden übersetzten Textblock über sein Quellrechteck, sodass das ursprüngliche Layout erhalten bleibt."
date: 2026-09-03
lang: de
slug: block-overlay
icon: layers
---

Die Ergebnisseite rendert Übersetzungen über das Originalfoto, einen Overlay pro OCR-Block. Die Übersetzung jedes Blocks erscheint in genau dem Rechteck, in dem die OCR-Engine den Quelltext erkannt hat. Der Overlay unterstützt einen Transparenz-Schieberegler, sodass Benutzer Original und Übersetzung nebeneinander vergleichen können, ohne die Seite zu verlassen.

## Wie der Overlay funktioniert

1. **Pro-Block-Übersetzung.** Jeder erkannte TextBlock wird als unabhängiger Übersetzungsauftrag an ML Kit gesendet. Übersetzungen streamen in den Overlay, sobald sie fertig sind; der Benutzer sieht, wie Blöcke in der Reihenfolge "übersetzt werden", in der die Engine sie abschließt.
2. **Positionierung nach Rechteck.** Der übersetzte Text wird umgebrochen und positioniert, um in das Quellrechteck zu passen. Wenn ein Block schmal ist, wird die Übersetzung auf mehrere Zeilen umgebrochen und kann das Quellrechteck leicht überlaufen; die Engine bevorzugt Lesbarkeit vor strikter Einhaltung.
3. **Antippen zum Fokussieren.** Wenn ein übersetzter Block angetippt wird, öffnet sich ein unteres Blatt, das zum selben Block in der "Vollständige Übersetzung"-Ansicht scrollt, sodass Benutzer längere Übersetzungen lesen können, ohne in das Foto hineinzuzoomen.
4. **Anpassbare Transparenz.** Ein Schieberegler steuert die Opazität der Overlay-Schicht. Ganz transparent schieben, um das Originalfoto zu sehen, ganz deckend, um die Übersetzungen zu lesen.

## Anatomie der Ergebnisseite

- **Obere Leiste.** Eine Schließen-Schaltfläche. Keine weiteren Steuerelemente — die Ergebnisseite ist absichtlich minimal.
- **Hauptbereich.** Das Originalfoto im Vollbild, mit der darüber gerenderten Overlay-Schicht. InteractiveViewer ermöglicht Zoomen und Schwenken zur inspect.
- **Unteres Blatt.** Drei Zustände: eingeklappt (Standard), mittig (etwa halber Bildschirm), ausgeklappt (größter Teil des Bildschirms). Der eingeklappte Zustand zeigt einen kleinen Griff und eine Zusammenfassung; mittig zeigt die Pro-Block-Übersetzungen als Karten; ausgeklappt zeigt alle Block-Übersetzungen in voller Breite.
- **Zwei Tabs im Blatt.** Ein "Blocks"-Tab zeigt Übersetzungen gruppiert nach OCR-Block, und ein "Full"-Tab zeigt die zusammengefügte vollständige Absatzübersetzung.

## Warum Pro-Block-Übersetzung

- **Gemischte Schriften.** Eine Seite mit englischen Schlagzeilen und japanischen Bildunterschriften profitiert von Pro-Block-Quellsprachenhinweisen. Die Position und die Skript-Klasse des Blocks informieren die Engine, welches Quellmodell verwendet werden soll.
- **Fehlerisolierung.** Das Fehlschlagen der Übersetzung eines einzelnen Blocks blockiert nicht die übrige Seite. Der Overlay markiert fehlgeschlagene Blöcke mit einem kleinen Warnabzeichen, damit Benutzer wissen, welche manuelle Aufmerksamkeit benötigen.
- **Layout-Erhaltung.** Diejenigen, die die Quelle lesen, können die entsprechende Übersetzung mit dem Auge finden — nützlich für Menüs, Schilder und Etiketten, wo die räumliche Beziehung wichtig ist.

## Bearbeitungsverhalten

Der Overlay wird über dem Foto gerendert, nicht eingebacken. Das Speichern in der Historie speichert sowohl das Originalfoto als auch den Pro-Block-Übersetzungsdatensatz. Das Öffnen eines gespeicherten Eintrags reproduziert den Overlay genau; das Bearbeiten des Fotos wird nicht unterstützt.
