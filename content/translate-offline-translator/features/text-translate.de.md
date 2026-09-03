---
title: "Textübersetzung: einfügen, tippen, übersetzen"
description: "Eine eigenständige Textübersetzungsseite, die denselben Sprachpaarzustand mit der Kameraseite teilt."
date: 2026-09-03
lang: de
slug: text-translate
icon: keyboard
---

Die Textübersetzungsseite ist ein separater Einstiegspunkt für Fälle, in denen die Quelle bereits Text ist. Öffne sie vom unteren Rand der Kameraseite und füge einen Absatz ein, tippe oder diktiere ihn; dieselbe ML Kit-Engine liefert die Übersetzung.

## Warum eine separate Seite

Kamera-OCR ist für Bilder optimiert. Wenn die Quelle bereits Text ist — ein E-Mail-Snippet, eine Chat-Nachricht, ein eingefügter Absatz — ist der OCR-Schritt überflüssig. Die Textübersetzungsseite überspringt OCR vollständig und gibt die Eingabe direkt an den ML Kit-Übersetzer weiter.

Sie ermöglicht auch das Stapelübersetzen durch Kopieren und Einfügen eines längeren Absatzes statt durch Fotografieren. Für dichten Text ohne bequeme zu fotografierende Seite ist dies schneller und genauer.

## So funktioniert es

- **Geteilter Sprachzustand.** Die Textseite liest und schreibt dasselbe Quell-/Zielsprachenpaar wie die Kameraseite. Die Auswahl einer Zielsprache an einer Stelle gilt für die andere; das Hin- und Herwechseln erfordert keine erneute Sprachauswahl.
- **Auto-Erkennung für die Quelle.** Wenn die Quelle auf „Auto-Erkennung" gesetzt ist, führt die App eine Heuristik auf Zeichenklassenebene in Dart über den Eingabetext aus, um zwischen den von ML Kit unterstützten Sprachen zu wählen. Reines Latein standardmäßig auf Englisch; Han-Zeichen standardmäßig auf vereinfachtem Chinesisch; gemischte Schriften folgen der Mehrheitszeichenklasse.
- **Einmalige Übersetzung.** Die gesamte Eingabe wird in einem Aufruf an ML Kit gesendet. Das Ergebnis ersetzt den Eingabebereich unter der Schaltfläche; Eingabe löschen, um erneut zu übersetzen.
- **Tastaturbehandlung.** Tippen auf "Übersetzen" schließt die Bildschirmtastatur, sodass der Ergebnisbereich nicht hinter der Tastatur versteckt wird.

## Wann es zu verwenden ist

- **Lange Absätze.** Mehrere Sätze eingeben oder einfügen. Das Fotografieren eines bildschirmfüllenden Textes führt zu OCR-Rauschen; das Einfügen des Textes nicht.
- **Chat-Snippets.** Übersetze eine kurze Nachricht von einem Freund, ohne das Gespräch zu verlassen, um die Kamera zu öffnen.
- **Bildschirme mit Text.** Ziehe Text aus einem Screenshot per Systemfreigabe und füge ihn in die Textübersetzungsseite für eine sauberere Übersetzung als OCR ein.
- **Sprachdiktat.** Verwende die Systemdiktattaste, um Text zu diktieren statt zu tippen.

## Grenzen

- **Keine Formatierungserhaltung.** Nur reiner Text. Markdown, Fett, Kursiv und andere Formatierungen werden verworfen.
- **Keine automatische Verlaufsspeicherung.** Anders als Kameraaufnahmen werden Textübersetzungen nicht automatisch gespeichert. Das Ergebnis bleibt im Ergebnisbereich, bis du "Löschen" antippst oder wegnavigierst.
