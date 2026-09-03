---
title: "Übersetzungsmodelle: Einmal herunterladen, für immer behalten"
description: "Verwalte die 19 ML Kit-Sprachmodelle auf einer eigenen Seite. Einmal herunterladen, löschen, um Speicherplatz zurückzugewinnen; das Modell bleibt offline erhalten."
date: 2026-09-03
lang: de
slug: model-manager
icon: download
---

Jedes Sprachpaar erfordert, dass die Quell- und Zielmodelle auf dem Gerät vorhanden sind, bevor die Übersetzung ausgeführt werden kann. Modelle werden einmal heruntergeladen, bleiben über App-Neustarts hinweg bestehen und werden für jede Übersetzung dieses Paares wiederverwendet. Die Modelldownload-Seite listet alle 19 unterstützten Sprachen mit ihrem Download-Status auf und ermöglicht es dir, jede einzelne herunterzuladen oder zu löschen.

## Warum eine eigene Seite

ML Kit lädt Modelle nicht automatisch herunter — jedes Sprachpaar erfordert einen expliziten Download seiner Quelle und seines Ziels. Die Modelldownload-Seite macht diesen Status sichtbar und ermöglicht es dem Benutzer, ihn zu verwalten, ohne sich in den Plattformspeicher zu vertiefen.

Für die meisten Benutzer ist der Workflow unsichtbar: Wähle eine Quell- und Zielsprache, die App lädt beide Modelle bei Bedarf herunter, wenn du zum ersten Mal übersetzt, und die Modelle bleiben für zukünige weitere Übersungen auf dem Gerät. Die eigene Seite ist für Benutzer gedacht, die für Offline-Reisen vorab herunterladen möchten, Sprachen löschen möchten, die sie nicht mehr verwenden, oder sehen möchten, was Speicherplatz verbraucht.

## Modellzustände pro Sprache

- **Nicht heruntergeladen.** Eine Schaltfläche „Herunterladen" wird angezeigt. Antippen, um den Download zu starten.
- **Wird heruntergeladen.** Ein unbestimmter Spinner wird angezeigt. ML Kit legt keine Fortschrittsrückrufe offen, nur den Abschluss; der Spinner löst sich zu „Heruntergeladen" oder „Fehlgeschlagen" auf.
- **Heruntergeladen.** Ein Abzeichen mit einer Lösch-Schaltfläche wird angezeigt. Antippen, um das Modell zu entfernen und Speicher zurückzugewinnen.
- **Fehlgeschlagen.** Eine Wiederholen-Schaltfläche ersetzt „Herunterladen". Häufige Ursachen: kein Netzwerk, Mobilfunk blockiert, wenig Speicherplatz. Behebe das zugrunde liegende Problem und versuche es dann erneut.

## Sequenzielle Download-Warteschlange

Mehrere Download-Anfragen in schneller Folge werden in die Warteschlange gestellt, nicht parallelisiert. Das native iOS-Plugin verarbeitet gleichzeitige `manageModel`-Aufrufe nicht sauber: Die zweite Anfrage bricht die erste ab. Die App serialisiert Downloads durch eine einzelne verkettete Future, sodass gleichzeitige Anfragen nacheinander aufgelöst werden. Die Benutzeroberfläche zeigt nur den aktiven Download im unbestimmten Zustand; Anfragen in der Warteschlange warten, bis sie an der Reihe sind.

## Download-Timeouts und Polling

Wenn ein Download-Callback verpasst wird (auf iOS unter schlechten Netzwerkbedingungen beobachtet), kann die Download-Future hängen bleiben. Die App schützt sich davor mit einem 30-Sekunden-Timeout; wenn der Timeout ausgelöst wird, fragt die App die Festplatte direkt über `isModelDownloaded` ab, um zu bestätigen, ob das Modell tatsächlich gelandet ist, bevor sie Erfolg oder Fehlschlag meldet.

## Speicherkosten

Jedes ML Kit-Modell belegt auf der Festplatte etwa 10–50 MB. Das Herunterladen aller 19 Sprachen verbraucht etwa 300–600 MB. Modelle für Quelle und Ziel derselben Übersetzung sind getrennt; ein Modell kann je nach gewählter Rolle als Quelle oder Ziel dienen.

Das Löschen des Modells gibt den Speicherplatz frei. Es gibt keine automatische Bereinigung. Das Deinstallieren der App entfernt alle heruntergeladenen Modelle als Teil der Plattform-Deinstallation.
