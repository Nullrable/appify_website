---
title: "Wie CleanPhoto Ihre Bibliothek scannt, ohne ein einziges Foto hochzuladen"
description: "Ein Blick in die drei On-Device-Detektoren — exakte Duplikate, ähnliche Fotos und Screenshots — und die einfachen Regeln, die sie verwenden, damit Sie genau wissen, was beim Drücken von Scannen passiert."
date: 2026-09-06
lang: de
slug: how-scan-works
---

## Wie CleanPhoto Ihre Bibliothek scannt, ohne ein einziges Foto hochzuladen

Die meisten Foto-Reiniger verlangen Vertrauen. CleanPhoto versucht, es durch Transparenz zu verdienen: Jeder Scan läuft auf Ihrem Gerät, arbeitet mit den Metadaten der Bibliothek und folgt Regeln, die so einfach sind, dass sie sich in wenigen Absätzen erklären lassen. Das passiert genau, wenn Sie auf Scannen drücken.

### Drei Detektoren, drei Fragen

CleanPhoto führt drei Scans aus, die jeweils eine andere Frage beantworten. Exakte Duplikate fragen: „Wurde dieses Foto zweimal gespeichert?" Ähnliche Fotos fragen: „War das eine Serie oder eine schnelle Nachnahme?" Screenshots fragen: „Ist dieses Bild nur temporär?" Sie können sie in beliebiger Reihenfolge starten, und jeder stellt seine Ergebnisse als Gruppen zur Durchsicht bereit.

### Regel eins: gleiche Größe, gleiche Sekunde

Der Duplikat-Detektor bildet für jedes Foto einen Schlüssel aus Breite, Höhe und Aufnahmesekunde. Fotos mit demselben Schlüssel landen in einer Gruppe. Ein erneut gespeichertes, importiertes oder durch einen Cloud-Sync-Konflikt entstandenes Foto behält Abmessungen und Zeitstempel des Originals, sodass beide Kopien in derselben Gruppe aufeinandertreffen. Zwei verschiedene Fotos mit identischen Abmessungen in derselben Sekunde sind äußerst selten — deshalb findet diese Regel echte Kopien ohne Fehltreffer.

### Regel zwei: innerhalb von zehn Sekunden

Der Detektor für ähnliche Fotos sortiert die Bibliothek nach Aufnahmezeit und wandert dann die Chronik entlang. Solange jedes Foto innerhalb von 10 Sekunden nach dem vorherigen aufgenommen wurde, gehört es zur selben Gruppe; sobald der Abstand 10 Sekunden übersteigt, schließt sich die Kette. Das entspricht dem realen Ablauf von Serien und Nachnahmen — eine schnelle Folge, eine Pause, dann etwas anderes. Gruppen mit nur einem Foto werden verworfen.

### Regel drei: Album, Titel, Pfad

Der Screenshot-Detektor arbeitet plattformabhängig. Auf iOS liest er das System-Album Screenshots direkt ein. Auf Android, wo der Speicherort je nach Hersteller variiert, prüft er zunächst Albennamen und untersucht ohne Screenshot-Album den Titel und den Dateipfad jedes Bildes auf die Namensmuster der Geräte. Die Ergebnisse werden nach Tag gruppiert, der jüngste zuerst.

### Dateigrößen, geladen bevor Sie durchsehen

Bevor irgendein Durchsichtsbildschirm geöffnet wird, lädt CleanPhoto die Dateigröße jedes Fotos vorab. In einer Gruppe ist die größte Datei fast immer die Kopie mit den meisten erhaltenen Details — die Einträge werden also nach Größe sortiert, und der beste Kandidat steht oben. Dieses eine Signal verwandelt „Welche dieser acht ist die beste?" in „Ist diese gut?"

### Was nie passiert

Kein Scan liest Pixelinhalte zur Analyse, kein Foto und keine Vorschau verlässt Ihr Gerät, und kein Konto ist nötig. Löschungen erfolgen nur nach Ihrer ausdrücklichen Bestätigung und laufen über die System-Fotomediathek — die App entfernt nie etwas von selbst. Das Internet wird für nur zwei Dinge genutzt: das Einblenden von Werbung in der Gratisversion und die Verwaltung des Pro-Abos.
