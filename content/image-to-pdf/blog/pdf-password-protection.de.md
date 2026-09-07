---
title: "PDF mit Passwort versehen: So wählen Sie zwischen Benutzerpasswort, Besitzerpasswort und Berechtigungseinstellungen"
description: "Was ist der Unterschied zwischen den beiden Passwortarten bei der PDF-Verschlüsselung? Wie richten Sie Druck-, Kopier- und Änderungsrechte ein? Am Beispiel der Verschlüsselungsfunktion von Image to PDF werden die einzelnen AES-256-Verschlüsselungsoptionen erläutert."
date: 2026-09-07
lang: de
slug: pdf-password-protection
---

## Ein PDF mit einem Passwort zu versehen, ist nicht nur eine Zeichenfolge festzulegen

Das Hinzufügen eines Passworts zu Vertragsscans und Finanzunterlagen eine Standardmaßnahme vor dem Senden sensibler Dateien. Aber die PDF-Verschlüsselung hat eigentlich zwei Schichten: die Kontrolle darüber, "wer öffnen kann" und "was nach dem Öffnen getan werden kann". Den Unterschied zwischen diesen beiden Schichten zu verstehen, ist der Schlüssel zur korrekten Dateischutz.

## Benutzerpasswort: Kontrolle, wer öffnen kann

Das **Benutzerpasswort** (auch Öffnungspasswort genannt) ist die erste Tür. Nach dem Festlegen muss jeder, der dieses PDF öffnet, das Passwort eingeben; ohne Passwort kann man die Datei nur aus der Ferne betrachten.

Geeignete Szenarien: Senden von Ausweis-Scans an Vermittler oder Erfüllungsagenturen, Senden interner Unterlagen per E-Mail. Das Passwort wird dem Empfänger über einen separen Kanal (wie Telefon oder ein anderes Chat-Fenster) mitgeteilt.

## Besitzerpasswort: Kontrolle, was nach dem Öffnen getan werden kann

Das **Besitzerpasswort** ist die zweite Tür, separat vom Benutzerpasswort festgelegt. Es verwaltet drei Arten von Berechtigungen:

- **Druck zulassen** — ob die andere Partei die Datei drucken kann
- **Kopieren zulassen** — ob Text und Bilder in der Datei kopiert werden können
- **Änderung zulassen** — ob der Dateiinhalt bearbeitet werden kann

Beim Senden von报价单 oder Angebotsunterlagen ist eine häufige Konfiguration: Drucken aktivieren (um dem Empfänger die Aufbewahrung zu erleichtern), Kopieren und Änderung deaktivieren (um das Risiko einer direkten Verwendung des Inhalts zu verringern).

In Image to PDF hat jede dieser drei Berechtigungen einen separaten Schalter — Drucken ist standardmäßig aktiviert, Kopieren und Änderung standardmäßig deaktiviert — also die konservative Konfiguration "kann angesehen und gedruckt werden, kann nicht verschoben oder geändert werden".

## Was ist AES-256

Verschlüsselungsalgorithmus verwendet die App standardmäßig **AES-256**, was der aktuelle Mainstream-Standard für die PDF-Verschlüsselung ist und stärker als frühere Algorithmen; wenn alte Geräte oder Software des Empfängers es nicht öffnen können, können Sie auf AES-128 umschalten, das besser kompatibel ist.

## Nach der Verschlüsselung

Die Verschlüsselung erfolgt lokal auf dem Gerät; Dateien und Passwörter durchlaufen keinen Server. Wenn die Partei, die das Passwort erhält, die Einschränkungen aufheben möchte, kann sie die PDF-Entschlüsselungsfunktion in der App verwenden, um die Verschlüsselung zu entfernen und sie für die Bearbeitung oder Zusammenführung wieder in ein normales PDF zu verwandeln.

Praktischer Vorschlag: Verwenden Sie keine leicht zu erratenden Passwortkombinationen wie Geburtstage oder Telefonnummern; legen Sie für verschiedene Dateien unterschiedliche Passwörter fest; übertragen Sie Passwörter und Dateien über getrennte Kanäle — Datei per E-Mail, Passwort per Nachricht, beides fällt nicht gleichzeitig in dasselbe Posteingangsfach des Empfängers.
