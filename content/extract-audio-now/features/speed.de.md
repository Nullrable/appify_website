---
title: "Video-Geschwindigkeit anpassen - stufenloser Regler von 0,25× bis 4×"
description: "Ein einziger Regler vom Zeitlupen-0,25× bis zum Schnelllauf-4×. Für langsame Tutorials wie für geraffte Demos. Exportiert ein neues Video, das Original bleibt unangetastet."
date: 2026-09-15
lang: de
slug: speed
---

## Video-Geschwindigkeit anpassen

Tempo passt nicht, die Geschichte kippt. Tutorial zu schnell, das Publikum kommt nicht mit. Demo zu langsam, man gähnt. Das Geschwindigkeits-Werkzeug bietet einen einzigen, stufenlosen Regler von 0,25× bis 4×. Schieben Sie ihn langsam auf das Tempo, das Ihnen passt.

### Zeitlupe

Zwischen 0,25× und 1×, perfekt um eine Bewegung in Zeitlupe zu erklären. Im Online-Kurs wird eine Handbewegung gezeigt, mit 0,5× sieht das Publikum das Detail erst richtig. Im Sportvideo eine Schlüsselszene auf 0,25×, jede Faser wird lesbar.

### Schnelllauf

Zwischen 1× und 4×, gut um Wartezeit zu komprimieren oder Unwichtiges zu überspringen. Ein 10-Minuten-Timelapse, mit 4× sieht es deutlich packender aus. Langweilige Passagen in einer Demo fliegen vorbei.

### So nutzen Sie es

Clip auswählen, ein runder Schieberegler erscheint. Auf die gewünschte Stelle ziehen — der aktuelle Multiplikator wird am Regler angezeigt. Nicht zufrieden? Loslassen, neu ziehen. Nach der Bestätigung exportieren, das Originalvideo bleibt unangetastet.

### Was passiert mit dem Ton

Die Geschwindigkeit ändert Bild und Ton gemeinsam. Wird das Bild langsamer, wird auch der Ton langsamer (die Stimme klingt langsam, die Tonhöhe sinkt). Wird das Bild schneller, wird auch der Ton schneller (die Stimme klingt gepresst, die Tonhöhe steigt). Das ist das Standardverhalten des atempo-Filters in ffmpeg: Bild und Ton ändern sich synchron, die Tonhöhe folgt dem Faktor. Möchten Sie nur das Bild ändern, ohne den Ton, nutzen Sie zunächst das Geschwindigkeits-Werkzeug für das Video, dann den Audio-Extraktor, um die Original-Tonspur aus dem Quellvideo zu sichern, und fügen Sie beides in einer Drittanbieter-App zusammen.
