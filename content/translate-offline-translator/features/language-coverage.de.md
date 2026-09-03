---
title: "19 Sprachen: ML Kit-Abdeckung, Picker und Auto-Erkennung"
description: "ML Kit On-Device-Übersetzung unterstützt 19 Sprachen. Der Picker enthält Suche, zuletzt verwendet und und eine Auto-Erkennungs-Option für die Quelle."
date: 2026-09-03
lang: de
slug: language-coverage
icon: globe
---

Die App übersetzt 19 Sprachen auf dem Gerät über Google ML Kit. Vollständige Liste: Arabisch, Chinesisch (vereinfacht), Tschechisch, Niederländisch, Englisch, Französisch, Deutsch, Kroatisch, Ungarisch, Italienisch, Japanisch, Koreanisch, Polnisch, Portugiesisch, Rumänisch, Russisch, Slowakisch, Slowenisch und Spanisch. Neue Sprachen werden hinzugefügt, sobald ML Kit On-Device-Modelle dafür veröffentlicht.

## Sprachen-Picker

Der Picker ist der einzige Einstiegspunkt zur Auswahl von Quell- und Zielsprache, zugänglich über die Sprachleiste oben auf der Kameraseite oder der Textübersetzungsseite.

- **Suche.** Tippe in das Suchfeld, um nach englischem Namen oder Sprachcode zu filtern. Die Liste aktualisiert sich beim Tippen.
- **Zuletzt verwendet.** Der obere Abschnitt zeigt die Sprachen, die du in den letzten Übersetzungen verwendet hast. Die Auswahl verschiebt sie automatisch nach oben.
- **Auto-Erkennung (nur Quelle).** Erscheint als erste Option im Quell-Picker. Die Auswahl lässt die App die Quellsprache pro Aufnahme erraten (siehe unten).
- **Alle Sprachen.** Unter dem Bereich "Zuletzt verwendet" befindet sich die vollständige Liste der 19 unterstützten Sprachen mit ihren Länderflaggen.

Quell- und Ziel-Picker können unabhängig geöffnet werden. Die Auswahl einer Quelle, die gleich dem Ziel ist, hebt dies im Picker hervor, um eine versehentliche Selbstanwendung zu verhindern.

## Auto-Erkennung für die Quelle

Wenn die Quelle auf Auto-Erkennung gesetzt ist, muss die App pro Übersetzung eine bestimmte ML Kit-Quellsprache auswählen. Zwei Strategien werden verwendet:

- **Für Fotoaufnahmen.** Die pro-Block-Sprachhinweise der OCR-Engine werden aggregiert; die Mehrheitssprache über Blöcke wird zur ML Kit-Quelle. Einsprachige Seiten lösen sich sauber auf; Seiten mit gemischten Schriften fallen auf einen Standard zurück.
- **Für Textübersetzung.** Eine Dart-Schicht-Heuristik zählt Zeichen nach Skript-Klasse: Han-Zeichen → vereinfachtes Chinesisch, Kana → Japanisch, Hangul → Koreanisch, Latein → Englisch, Kyrillisch → Russisch, arabische Schrift → Arabisch usw. Leere oder nur-Leerzeichen-Eingabe wird standardmäßig auf Englisch gesetzt.

Die Auto-Erkennung schlägt nie still fehl. Die Seite hat beim Ausführen der Übersetzung immer eine bestimmte ML Kit-Quellsprache.

## Warum 19 und nicht mehr

Die Anzahl ist durch das begrenzt, was ML Kit als On-Device-Modelle veröffentlicht. Sprachen außerhalb dieser Liste können nicht on-device mit ML Kit übersetzt werden. Die Liste ist kuratiert: Jeder Eintrag hat ein herunterladbares Modell von 10–50 MB. Der Picker schließt Sprachen aus, die ML Kit nicht unterstützt, selbst wenn es gültige BCP 47-Codes sind.

## i18n der UI

Die eigene Oberfläche der App (Menüs, Einstellungen, Fehlermeldungen) ist in 10 Sprachen übersetzt: Arabisch, Englisch, Deutsch, Koreanisch, Französisch, Japanisch, Russisch, Spanisch, Vietnamesisch und Chinesisch (vereinfacht). Die Übersetzungssprachen sind eine Obermenge des i18n-Sets für mehrere gängige Paare (en ↔ ja, en ↔ zh, en ↔ es, en ↔ fr).
