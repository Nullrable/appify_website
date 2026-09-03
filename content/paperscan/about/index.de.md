---
title: Über Paper Scan - Funktionsübersicht
description: Erfahren Sie, was Paper Scan kann, wie jeder Filter und die OCR geräteseitig laufen und wie die konfliktfreie Cloud-Synchronisierung Ihre Dokumente zwischen iPhone und iPad in Sync hält.
date: 2026-09-02
lang: de
slug: index
---

Paper Scan ist ein Dokumentenscanner für iPhone und iPad. Er erfasst eine komplette A4-Seite aus bequemer Entfernung, korrigiert die Perspektive automatisch, lässt Sie das Ergebnis mit sechs GPU-Filtern verfeinern und exportiert mehrseitige PDFs mit durchsuchbarem Text - alles ohne ein einziges Byte an einen Server zu senden, sofern Sie die Cloud-Synchronisierung nicht einschalten.

## Aufnahme und Kantenerkennung

Die Aufnahmesicht ist breit genug, um ein komplettes A4-Blatt auf Armeslänge einzufangen. Sobald eine Seite im Rahmen erscheint, rastet die Kantenerkennung an ihren Ecken ein. Die automatische Aufnahme löst aus, wenn das Dokument still ist, die Perspektive wird sofort korrigiert und ein kleines Vorschaubild landet im Überprüfungsbereich, damit Sie es bestätigen oder neu aufnehmen können.

Sie können jederzeit in den manuellen Modus wechseln. Drücken Sie den Auslöser lange, um die automatische Aufnahme zu deaktivieren, ziehen Sie die Eckenziehpunkte, wenn die Kanten Hilfe brauchen, und tippen Sie auf ein Vorschaubild, um es zuzuschneiden oder zu drehen, bevor die Seite im Dokument übernommen wird.

## Sechs GPU-Filter

Jeder Filter in Paper Scan wird auf der GPU gerendert. Vorschauen aktualisieren sich sofort, auch bei mehrseitigen Stapeln, sodass Sie die Filterstärke ohne Wartezeit vergleichen können.

- **Original** belässt das aufgenommene Foto unverändert und ist die richtige Wahl, wenn Sie eine getreue Aufzeichnung wollen.
- **Verbessern** hebt Kontrast und Weißabgleich, was verblasste Thermobonbons und Aufnahmen bei schwachem Licht rettet.
- **Graustufen** glättet Farbrauschen auf farbigem Papier, sodass die OCR-Schicht Text sauberer liest.
- **Schwarzweiß** treibt denselben Gedanken einen Schritt weiter und erzeugt die sauberste Textschicht für Archivscans.
- **Aufhellen** glättet Schatten durch Blitzlicht und ist nützlich für glänzende Magazinseiten.
- **Schärfen** stellt feine Details auf Bons und Seriennummer-Aufklebern wieder her.

Filter werden pro Seite angewendet, nicht pro Dokument. Sie können sie in einem einzigen PDF mischen, wenn manche Seiten Farbe und andere Schwarzweiß brauchen.

## Organisation

Scans landen auf einer Leinwand, gruppiert als Seiten innerhalb eines Dokuments. Sie können Seiten per Drag-and-drop neu anordnen, Seiten von einem Dokument in ein anderes ziehen, Dokumente direkt umbenennen und häufig verwendete an die Spitze der Bibliothek heften.

Die Volltextsuche läuft über jede Seite, die jemals OCR durchlaufen hat. Ergebnisse heben das passende Wort auf einem Seitenvorschaubild hervor, und ein Tippen auf das Ergebnis öffnet das Dokument auf der richtigen Seite, damit Sie den umgebenden Kontext lesen können.

## Geräteseitige OCR

Die OCR nutzt Apples Vision-Framework. Die Texterkennung findet in der sicheren Enklave Ihres iPhones statt - das Bild verlässt das Gerät nie, der erkannte Text wird nirgendwohin gesendet und der OCR-Index liegt im privaten Speicher der App. Die OCR-Schicht wird bedarfsgesteuert ausgeführt und Sie können sie auf einer Seite jederzeit erneut laufen lassen, wenn Sie den Filter wechseln.

Durchsuchbarer Text bleibt erhalten, wenn Sie PDFs exportieren. Wer das PDF in Preview, Adobe Reader oder einem modernen Betrachter öffnet, kann den Text kopieren statt neu einzutippen.

## Mehrseitiger PDF-Export

Exportieren Sie ein ganzes Dokument als ein PDF oder teilen Sie einzelne Seiten als Bilder. Pro Export können Sie Seitengröße (Letter / A4 / Original), Ausrichtung, Qualität (Niedrig / Standard / Hoch) und das Einbetten der OCR-Textschicht wählen. Paper Scan bettet die OCR-Schicht automatisch ein, wenn Sie die Qualität auf Standard oder Hoch halten.

Der Stapelexport lässt Sie mehrere Dokumente auf einmal auswählen und als ZIP mit mehreren PDFs verschicken - praktisch für Spesenbelege am Monatsende.

## Konfliktfreie Cloud-Synchronisierung

Die Cloud-Synchronisierung ist optional. Schalten Sie iCloud ein und Ihre Dokumente erscheinen auf jedem Gerät, das mit derselben Apple ID angemeldet ist; schalten Sie Google Drive ein und sie erscheinen auf jedem Gerät, das mit diesem Google-Konto angemeldet ist. Sie können beide ausgeschaltet lassen und die App verhält sich wie ein rein lokales Archiv.

Die Synchronisierung löst gleichzeitige Bearbeitungen ohne Duplikate. Jede Seite trägt ihre eigene Revisionsmarkierung, sodass die neueste Version dieser Seite gewinnt und Ihre laufenden lokalen Bearbeitungen nie stillschweigend überschrieben werden. Umbenennungen von Ordnern, Dokumenten und Seiten werden ebenfalls übertragen, sodass das Löschen eines Dokuments auf einem Gerät es überall entfernt.

## Offline standardmäßig, Privatsphäre zuerst

Paper Scan ist standardmäßig offline. Scannen, Kantenerkennung, Filter, OCR, Suche und PDF-Export laufen alle geräteseitig und tätigen keinen Netzwerkaufruf. Die einzige Funktion, die das Netz nutzt, ist die Cloud-Synchronisierung, und auch nur, wenn Sie sie einschalten. Kein Konto erforderlich, kein Analyse-SDK gebündelt, keine Werbung.

Ihre Scans leben im privaten Speicher der App. Das Deinstallieren der App entfernt alle lokalen Daten, einschließlich OCR-Index, Volltextsuch-Cache und nicht synchronisierter Bearbeitungen.

## Paper Scan Pro

Scannen, die sechs Filter, OCR, Einzel-PDF-Export und Suche bleiben für immer kostenlos und ohne Wasserzeichen. Paper Scan Pro fügt unbegrenzte Dokumente, Cloud-Synchronisierung und Stapelexport hinzu. Pro wird als einmaliges Upgrade verkauft, sodass Sie es nach dem Kauf auf allen Geräten und über zukünftige Updates hinweg behalten.
