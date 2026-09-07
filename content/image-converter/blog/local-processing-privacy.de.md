---
title: "Dateien verlassen das Handy nicht: Wie lokale Verarbeitung Ihre Privatsphäre schützt"
description: "Online-Konvertierungstools erfordern Datei-Uploads, die lokale Verarbeitung auf dem Handy nicht. Am Beispiel von Image Converter erläutern wir, wie lokale Verarbeitung funktioniert, wo der Verlauf gespeichert wird und wo die Datengrenzen zwischen Werbung und Abonnement liegen."
date: 2026-09-07
lang: de
slug: local-processing-privacy
---

## Wie viele sensible Bilder haben Sie hochgeladen?

Denken Sie an die Online-Konvertierungstools, die Sie genutzt haben: Ausweisfotos, Vertragsscans, private Screenshots – damit sie in ein anderes Format umgewandelt werden, wurden sie auf einen Server hochgeladen, von dem Sie noch nie gehört haben. Die meisten Dienste behaupten „sofort nach der Verarbeitung gelöscht", aber Sie können das nicht überprüfen, und **der Upload selbst hat bereits stattgefunden**.

## Was bedeutet lokale Verarbeitung?

Alle Funktionen von Image Converter – Formatkonvertierung, Komprimierung, Drehung, Zuschnitt, Größenanpassung, Zusammenfügen – finden auf Ihrem Handy statt. Konkret:

- Bilder werden ausschließlich innerhalb der App gelesen, verarbeitet und ausgegeben, **ohne irgendeinen Server zu durchlaufen**;
- Die Verarbeitung erfolgt auf dem Geräte-Chip, **alle Funktionen funktionieren auch ohne Netzverbindung**;
- Die Ausgabedateien werden im lokalen App-Verzeichnis gespeichert; über die System-Freigabe entscheiden Sie, wohin sie gesendet werden.

Mit anderen Worten: „Dateien verlassen das Handy nicht" ist keine Floskel, sondern die direkte Folge der technischen Architektur – ohne Upload-Kanal gibt es keinen Upload.

## Wo wird der Verlauf gespeichert?

Bei jeder Konvertierung wird ein Eintrag im App-Verlauf geschrieben, der den Operationsstatus, die Dauer, Quell- und Ausgabeformat sowie die Dateigröße enthält. Diese Einträge werden in der lokalen Datenbank des Geräts gespeichert und **sind nur lokal lesbar**.

Das Leeren des Caches oder das Deinstallieren der App genügt für eine vollständige Löschung, ohne dass wir eingebunden werden – wir könnten sie nicht einmal sehen, selbst wenn wir wollten.

## Datengrenzen zwischen Werbung und Abonnement

Das Geschäftsmodell der App sollte klar sein:

- **Werbung**: Nicht-Pro-Abonnenten sehen beim Betreten der Funktionsseiten Anreizwerbung von Google AdMob. AdMob verwendet gemäß seiner Richtlinie Werbe-IDs zur Auslieferung von Werbung – das ist die Grenze zwischen ihm und uns: Wir besitzen Ihre Dateien nicht, und die Werbung erhebt über uns keine personenbezogenen Daten;
- **Pro-Abonnement**: Die Zahlung wird über den Apple App Store abgewickelt, die Abonnementverifikation erfolgt über RevenueCat. Wir haben keinen Zugriff auf Ihre Kartennummer oder Rechnungsdaten und bewahren keine Zahlungsbelege auf;
- **Abonnementvorteile**: Pro entfernt die Werbung, der Zugriff auf Funktionen erfolgt direkt, ohne Anreizvideos.

## Empfehlungen für den Umgang mit sensiblen Dateien

Auch bei einem lokalen Verarbeitungstool sind Gewohnheiten wichtig:

1. **Wichtige Ergebnisse zeitnah sichern** – Speichern Sie die Ergebnisse über die Freigabe in „Dateien", iCloud oder einem Cloud-Speicher, nicht nur im App-Verzeichnis;
2. **Metadaten vor dem Versand entfernen** – Bei Ausweisfotos empfiehlt es sich, sie zunächst mit Image Converter in ein anderes Format zu konvertieren, um die ursprünglichen EXIF-Informationen zu entfernen;
3. **Regelmäßig aufräumen** – Löschen Sie nicht benötigte Verlaufseinträge und Ausgabedateien, leeren Sie den Cache in den Einstellungen, halten Sie das Gerät sauber.

Der Schutz der Privatsphäre beruht nicht auf Versprechen, sondern auf der Architektur. Bevor Sie das nächste Mal ein Bild konvertieren, fragen Sie sich: **Muss dieses Bild mein Handy verlassen?**

