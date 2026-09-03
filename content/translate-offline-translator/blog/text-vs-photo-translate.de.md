---
title: "Textübersetzung vs Fotoübersetzung: Welche verwenden"
description: "Wenn die Quelle bereits Text ist, überspringe OCR. Wenn die Quelle eine gedruckte Seite ist, ist Fotoübersetzung schneller. Wie man wählt."
date: 2026-09-03
lang: de
slug: text-vs-photo-translate
---

## Textübersetzung vs Fotoübersetzung: Welche verwenden

Die App hat zwei Einstiegspunkte für die Übersetzung: die Kameraseite (Fotoübersetzung) und die Textübersetzungsseite. Sie teilen sich denselben Sprachpaarstatus und dieselbe ML Kit-Engine, aber die Pipeline unterscheidet sich in einem wichtigen Schritt.

## Der Unterschied in einem Satz

Fotoübersetzung führt OCR über ein aufgenommenes Bild aus und übersetzt dann den erkannten Text. Textübersetzung überspringt OCR vollständig und füttert die Eingabe direkt in die Übersetzungs-Engine.

## Wann Textübersetzung schneller ist

- **Bereits-Text-Quellen.** E-Mails, Chat-Nachrichten, Webausschnitte, eingefügte Absätze — alles, was als Text und nicht als gedruckte Seite existiert. Das Überspringen von OCR entfernt einen Schritt und beseitigt eine Klasse von OCR-Fehlern (falsch gelesene Zeichen, gebrochener Zeilenumbruch, fehlerhaftes Layout).
- **Langer, dichter Text.** Das Fotografieren eines Bildschirms voller Text führt OCR-Rauschen ein. Das Einfügen von Text nicht.
- **Diktat.** Die Systemdiktat-Taste ermöglicht es dir, die Eingabe zu sprechen statt zu tippen. Die Diktatgenauigkeit ist bei klarer Sprache in ruhiger Umgebung gut.
- **Keine Kamera verfügbar.** Wenn die Kamera von einer anderen App verwendet wird oder die Kameraberechtigung verweigert wurde, funktioniert die Textübersetzung trotzdem.

## Wann Fotoübersetzung schneller ist

- **Gedruckte Seiten.** Bücher, Menüs, Schilder, Verpackungen, Anleitungen, Poster. Diese existieren als Tinte auf Papier; der einzige Weg, sie in Text zu bekommen, ist sie zu fotografieren.
- **Aufkleber und Etiketten.** Ein Foto eines Aufklebers oder Etiketts auf einem Produkt kann direkt übersetzt werden, ohne es zuerst zu transkribieren.
- **Bildschirme, die du nicht auswählen kannst.** Wenn die Quelle als Pixel gerendert wird — ein Bild in einem PDF, ein Screenshot einer alten App, ein Foto eines Bildschirms — gibt es keinen Text zum Kopieren. Fotoübersetzung ist die einzige Option.
- **Zweisprachige Schilder.** Das Erfassen beider Sprachen in einem einzigen Foto löst oft den blockweisen Sprachhinweis, den die automatische Erkennung verwendet.

## Genauigkeitsunterschiede

Beide Pfade verwenden dieselbe ML Kit-Engine, daher hat die Übersetzung selbst die gleiche Qualität. Der Unterschied liegt weiter upstream: Fotoübersetzung kann OCR-Rauschen einführen, das Textübersetzung nicht. Wenn die OCR-Engine ein Zeichen falsch liest, hat die Übersetzungs-Engine keine Möglichkeit, den Originaltext wiederherzustellen.

Für Text, den du kontrollierst (deine eigenen Schriften, deine eigenen Nachrichten), füge ihn ein. Für Text, der auf Papier lebt, fotografiere ihn.

## Teilen zwischen Modi

Die Quell- und Zielspracheinstellungen werden zwischen der Kameraseite und der Textübersetzungsseite geteilt. Das Wechseln der Sprache an einer Stelle gilt für die andere; das Hin- und Herwechseln erfordert keine erneute Sprachauswahl.

Textübersetzungen werden nicht automatisch im Verlauf gespeichert; sie bleiben im Ergebnisbereich, bis du auf Löschen tippst oder weg navigierst. Kameraübersetzungen können von der Ergebnisseite aus im Verlauf gespeichert werden.

## Eine praktische Regel

Wenn du den Text kopieren kannst, kopiere ihn. Wenn nicht, fotografiere ihn. Der Kopierpfad ist sauberer, weil OCR aus der Schleife entfernt wird.
