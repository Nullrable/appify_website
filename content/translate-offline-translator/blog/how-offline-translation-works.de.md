---
title: "Wie Offline-Übersetzung auf deinem iPhone funktioniert"
description: "Ein Durchgang, wie die App Übersetzungen abschließt, ohne ein einziges Byte Quelltext auf einen Server hochzuladen."
date: 2026-09-03
lang: de
slug: how-offline-translation-works
---

## Wie Offline-Übersetzung auf deinem iPhone funktioniert

Der Übersetzungspfad der App läuft vollständig auf dem Gerät. Kein Foto, kein OCR-Ergebnis und keine Übersetzungsanfrage verlässt das iPhone. Dieser Beitrag erklärt, was „auf dem Gerät" tatsächlich bedeutet, wo die Modelle leben und welche Kompromisse die lokale Ausführung der Übersetzung mit sich bringt.

## Die Teile, die auf dem Gerät laufen

Es gibt drei unabhängige Arbeitsschritte, die für eine Kameraübersetzung auf dem Telefon stattfinden:

1. **OCR.** Ein geforktes `vision_text_recognition`-Paket führt die Texterkennung lokal aus. Es unterstützt lateinische, chinesische (vereinfacht und traditionell), japanische und koreanische Schriften. Jeder erkannte Textblock trägt seine eigene Bounding-Box und seinen erkannten Text.
2. **Übersetzung.** Die On-Device-Übersetzungs-Engine von Google ML Kit nimmt die OCR-Ausgabe und erzeugt übersetzten Text. Die Engine ist als herunterladbares Sprachmodell pro Sprachpaar gebündelt; die App lädt Modelle bei Bedarf herunter und speichert sie auf dem.
3. **Rendering.** Die Ergebnisseite zeichnet jeden übersetzten Block über das Originalfoto, wobei sie die von der OCR-Engine zurückgegebenen Bounding-Boxen verwendet. Es ist kein Roundtrip zum Server erforderlich, um den Overlay zu rendern — das Bild, die Quellblöcke und die Übersetzungen befinden sich alle im Speicher des Geräts.

## Warum das wichtig ist

- **Datenschutz.** Fotos von Straßenschildern, Verträgen, medizinischen Formularen und persönlicher Korrespondenz bleiben auf dem Gerät. Es gibt keinen Upload-Schritt irgendwo in der Pipeline, also gibt es nichts zu leaken, zu subpoenen oder zu verkaufen.
- **Latenz.** Kein Netzwerk-Roundtrip. OCR einer typischen Smartphone-Seite wird auf einem aktuellen Gerät in weit weniger als einer Sekunde abgeschlossen, und die Übersetzung der Pro-Block-Ergebnisse streamt, während jeder Block fertig wird.
- **Offline.** Die Pipeline läuft im Flugzeug, im Keller, im Tunnel, im Zug, in einem Land ohne Abdeckung. Die OCR-Engine und die Übersetzungs-Engine werden einmal heruntergeladen und unbegrenzt wiederverwendet; pro Aufnahme wird nichts abgerufen.
- **Kosten.** Die App zahlt nicht pro Zeichen an eine Übersetzungs-API, sodass die Funktion keine nutzungsbasierte Bezahlschranke oder monatliche Zeichenobergrenze benötigt, um nachhaltig zu bleiben. Die kostenlose Stufe ist dieselbe Pipeline.

## Wo die Modelle leben

ML Kit veröffentlicht On-Device-Übersetzungsmodelle für 19 Sprachen. Jedes Modell ist ungefähr 10–50 MB groß. Wenn du eine Quell- oder Zielsprache auswählst, lädt die App das entsprechende Modell bei der ersten Verwendung in die lokale Sandbox der App herunter. Das Modell bleibt über App-Neustarts hinweg bestehen; durch Löschen wird der Speicher sofort zurückgewonnen.

Die vollständige Liste der unterstützten Sprachen: Arabisch, Chinesisch (vereinfacht), Tschechisch, Niederländisch, Englisch, Französisch, Deutsch, Kroatisch, Ungarisch, Italienisch, Japanisch, Koreanisch, Polnisch, Portugiesisch, Rumänisch, Russisch, Slowakisch, Slowenisch und Spanisch.

## Was hochgeladen wird (und was nicht)

- **Nicht hochgeladen.** Fotos, OCR-Text, Übersetzungstext, Verlaufseinträge, Sprachmodellstatus. Keines davon verlässt das Gerät.
- **Hochgeladen.** Anonyme Absturzberichte und aggregierte Zähler (z. B. „Übersetzungsanfragen pro Tag"). Absturzberichte enthalten keine Benutzerinhalte; wenn ein zukünftiger Bericht jemals Inhalte enthält, wäre das ein Fehler und sollte gemeldet werden.

## Kompromisse der lokalen Ausführung

- **Begrenzte Sprachenliste.** Es werden nur die Sprachen unterstützt, die ML Kit als On-Device-Modelle veröffentlicht. Die Liste ist kuratiert und enthält derzeit 19 Einträge.
- **Modelldownload erforderlich.** Eine erstmalige Übersetzung für ein Sprachpaar löst einen einmaligen Download aus. Die Modelldownload-Seite zeigt den Status und ermöglicht dir das Vorab-Laden für Offline-Reisen.
- **Qualität.** Die On-Device-Übersetzungsqualität ist für kurze, wohlgeformte Texte mit Cloud-Übersetzung vergleichbar. Lange Absätze oder domänenspezifische Fachsprache können sich von einer Cloud-Engine, die für diese Domäne optimiert ist, unterscheiden.
- **Rechenleistung.** OCR und Übersetzung nutzen die CPU und die Neural Engine des Telefons. Die Batterieauswirkung für eine einzelne Aufnahme ist gering, aber für Batch-Workflows messbar.

## Was das für dich bedeutet

Wenn du jemals gezögert hast, ein sensibles Dokument zu fotografieren, weil das Foto auf dem Server eines anderen landen würde, dann ist dieses Zögern der Grund, warum diese App existiert. Jeder Teil der Pipeline läuft lokal, und das Datenmodell der App ist auf der Prämisse aufgebaut, dass nichts das Gerät verlässt, es sei denn, der Benutzer entscheidet sich ausdrücklich, ein Ergebnis zu teilen.
