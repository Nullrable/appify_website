---
title: "Automatische Spracherkennung: Wie die App eine Quellsprache wählt"
description: "Wenn die Quellauswahl auf Auto Detect steht, rät die App pro Übersetzung eine Quellsprache. So funktioniert das Raten."
date: 2026-09-03
lang: de
slug: auto-detect-language
---

## Automatische Spracherkennung: Wie die App eine Quellsprache wählt

Auto Detect ist die erste Option in der Quellsprachenauswahl. Sie auszuwählen bedeutet nicht, dass die App keine Meinung zur Quelle hat — es bedeutet, dass die App pro Übersetzung eine bestimmte ML Kit-Quellsprache auswählt, entweder mithilfe von OCR-Blocksprachenhinweisen (für Fotos) oder einer Dart-Layer-Zeichensatz-Heuristik (für Text).

## Warum pro Übersetzung

Der On-Device-Übersetzer von ML Kit erfordert, dass eine bestimmte Quellsprache heruntergeladen wird, bevor die Übersetzung ausgeführt werden kann. Auto Detect kann nicht „aus jeder Sprache übersetzen" bedeuten; es muss pro Übersetzung auf eine der 19 unterstützten Sprachen aufgelöst werden. Die App führt diese Auflösung automatisch durch.

## Wie es für Fotos funktioniert

Bei Kameraaufnahmen gibt die OCR-Engine für jeden erkannten Block einen blocksprachlichen Hinweis aus. Die Hinweise werden über die gesamte Seite aggregiert; die Mehrheitssprache wird zur ML Kit-Quellsprache für diese Übersetzung.

Einsprachige Seiten lösen sich sauber auf: Eine Seite mit koreanischen Bildunterschriften wird zu Koreanisch, eine Seite mit französischem Fließtext wird zu Französisch. Bei Seiten mit gemischten Schriften wird auf einen Standard zurückgegriffen, wenn keine einzelne Sprache dominiert.

Die blockweise Übersetzung verwendet diese Hinweise granularer. Eine Seite mit englischen Überschriften und japanischen Bildunterschriften kann mit der entsprechenden Quelle pro Block übersetzt werden, selbst wenn die Mehrheitssprache unklar ist.

## Wie es für Text funktioniert

Für Textübersetzungen führt die App eine Dart-Layer-Heuristik aus, die Zeichen nach Schriftklasse zählt:

- Han-Zeichen → Vereinfachtes Chinesisch
- Kana → Japanisch
- Hangul → Koreanisch
- Latein → Englisch
- Kyrillisch → Russisch
- Arabisch → Arabisch

Gemischte Eingaben folgen der Mehrheitszeichenklasse. Leere oder nur Whitespace-Eingaben werden standardmäßig auf Englisch gesetzt.

Die Heuristik ist schnell (ein einzelner linearer Scan über die Eingabe) und wird vor dem ML Kit-Aufruf ausgeführt. Die ausgewählte Quellsprache wird dann für die Übersetzungsanfrage verwendet.

## Wann Auto Detect fehlschlägt

- **Latein ohne Diakritika.** Ein lateinisches Snippet von 10 Zeichen könnte Englisch, Französisch, Deutsch, Italienisch, Portugiesisch, Spanisch, Niederländisch, Polnisch, Tschechisch oder mehrere andere sein. Die Heuristik wählt Englisch als Standard; wenn die Quelle nicht Englisch ist, kann die Übersetzungsqualität leiden. Lege die Quellsprache für kurze lateinische Snippets manuell fest.
- **Kyrillisch ohne Spezifika.** Kyrillisch könnte Russisch, Ukrainisch oder eine andere slawische Schrift sein. Die App wählt Russisch.
- **Mehrdeutigkeit der Han-Schrift.** Vereinfachtes und Traditionelles Chinesisch teilen die meisten ihrer Zeichen. Ein kurzes Snippet von Han-Zeichen kann ohne längeren Kontext nicht aufgelöst werden. Die App wählt Vereinfachtes Chinesisch.

Lege in diesen Fällen die Quellsprache manuell in der Auswahl fest.

## Auto Detect ist nie still

Die Seite hat immer eine bestimmte ML Kit-Quellsprache, wenn die Übersetzung ausgeführt wird. Wenn die Heuristik einen falschen Standard zurückgibt, kann die Übersetzung falsch sein; wenn sie die richtige Sprache zurückgibt, funktioniert die Übersetzung. Es gibt keinen Modus, in dem die App „keine Sprache auswählen kann" — sie fällt auf einen Standard zurück und übersetzt.

## Praktischer Rat

Für lange, einsprachige Dokumente funktioniert Auto Detect. Für kurze Snippets oder Seiten mit gemischten Schriften lege die Quellsprache manuell in der Auswahl fest. Die Auswahl merkt sich deine letzten Sprachen oben, sodass die zweite Verwendung einer Sprache ein Tipp ist.
