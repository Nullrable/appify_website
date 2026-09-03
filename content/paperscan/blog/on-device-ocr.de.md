---
title: "On-Device-OCR: durchsuchbarer Text von jeder gescannten Seite"
description: "On-Device-OCR: durchsuchbarer Text von jeder jeder gescannten Seite"
date: 2026-09-02
lang: de
slug: on-device-ocr
---

OCR (Texterkennung) wandelt eine gescannte Seite in Text um, der ausgewählt, kopiert und durchsucht werden kann. Paper Scan führt OCR vollständig auf dem Gerät mit den ML-Kits von Apple und Google aus, sodass keine Scaninhalte zur Erkennung an externe Server übertragen werden. Erkannte Seiten werden in der lokalen Bibliothek indiziert und sind sofort nach dem Speichern durchsuchbar.

### Was OCR freischaltet

Sobald eine Seite erkannt wurde:

- **Text aus dem Scan kopieren.** Drücken Sie lange auf ein beliebiges Wort, um ein Auswahl-Overlay zu öffnen, das die gesamte Seite abdeckt. Der ausgewählte Text kann in eine andere App eingefügt werden.
- **In Scans suchen.** Die Suchleiste oben in der Dokumentenliste durchsucht den erkannten Text jeder Seite, nicht nur Titel und Tags. Telefonnummern, Namen, Rechnungsnummern und Adressen können in der gesamten Bibliothek gefunden werden.
- **Zitieren und referenzieren.** Gescannte Belege, Verträge, handschriftliche Notizen und Whiteboard-Aufnahmen werden alle zu zitierbarem Text, auf den später verwiesen werden kann.

### Warum Verarbeitung auf dem Gerät wichtig ist

- **Datenschutz.** Scaninhalte verlassen das Gerät nie zur Erkennung. Dies ist relevant für Rechnungen, Verträge, medizinische Formulare und alle Dokumente mit personenbezogenen Daten.
- **Latenz.** Kein Netzwerk-Roundtrip. Auf neueren iPhones und Flaggschiff-Android-Geräten ist die OCR für eine Standardseite normalerweise in unter einer Sekunde abgeschlossen.
- **Offline-Verfügbarkeit.** OCR funktioniert in Flugzeugen, Kellern und in Regionen ohne Netzabdeckung. Es ist keine Verbindung erforderlich.

Die Genauigkeit ist mit serverbasierten OCR-Diensten vergleichbar; der Unterschied besteht darin, wo die Berechnung läuft.

### Best Practices für genaue Erkennung

Die OCR-Genauigkeit hängt hauptsächlich von der Qualität der Eingabe ab. Drei Faktoren, in der Reihenfolge ihrer Wichtigkeit:

1. **Beleuchtung.** Gleichmäßiges, indirektes Licht von einem Fenster ist besser als ein einzelner Deckenstrahler. Schatten, die über die Seite laufen, sind die häufigste Ursache für falsch gelesene Zeichen.
2. **Fokus.** Wenn der Autofokus das falsche Motiv auswählt, tippen Sie vor der Aufnahme auf die Mitte des Textes. Ein verschwommener Scan ist selten ein brauchbarer Scan.
3. **Filterauswahl.** Schwarzweiß liefert den saubersten Text für gedruckte Formulare. Magic Color wird empfohlen, wenn die Tinte verblasst ist oder das Papier vergilbt ist. Auto behandelt die meisten alltäglichen Fälle.
4. **Flache Seiten.** Seiten, die sich zum Buchrücken hin wölben, verlieren Zeichen in der Nähe des Falzes. Drücken Sie die Seite nach Möglichkeit mit der anderen Hand flach.
5. **Sprachhinweis.** Legen Sie die OCR-Sprache für einsprachige Seiten explizit fest. Seiten mit gemischten Skripten werden in einem Durchgang ohne Hinweis verarbeitet.

### Genauigkeitsgrenzen

OCR arbeitet gut mit gedrucktem Text (95%+ Genauigkeit), ist aber weniger zuverlässig bei handschriftlicher Schreibschrift, sehr kleinen Schriftarten, stilisierten dekorativen Schriftarten, glänzenden Zeitschriftenreflexionen und alten Belegen, bei denen die Tinte physisch verblasst ist. Das Originalbild bleibt in allen Fällen verfügbar: Wenn OCR bei einer wichtigen Seite fehlschlägt, kann der Scan selbst trotzdem gelesen werden.

Die kostenlose Stufe enthält ein tägliches OCR-Kontingent, das für alltägliche Belege, Visitenkarten und gelegentliche Buchkapitel ausreicht. Pro entfernt das tägliche Limit und fügt die Möglichkeit hinzu, OCR auf einen ganzen Ordner in einem Vorgang anzuwenden.

Die On-Device-Engine unterstützt lateinische Schriften (Englisch, Französisch, Deutsch, Spanisch, Portugiesisch, Italienisch und andere), Chinesisch (vereinfacht und traditionell), Japanisch, Koreanisch und die meisten europäischen Schriften. Seiten mit gemischten Skripten werden in einem Erkennungsdurchgang verarbeitet.
