---
title: Fehlerbehebung: hängende iCloud-Uploads
description: Troubleshooting stalled iCloud uploads
date: 2026-09-02
lang: de
slug: stuck-icloud-upload
---

## Troubleshooting: hängende iCloud-Uploads

Wenn der iCloud-Sync in Paper Scan hängenbleibt (typischerweise als Teil-Uploadzahl, die sich über mehrere Minuten nicht ändert), liegt die Ursache fast immer in einer von vier Konfigurationen oder Systemzuständen auf iOS-Seite. Die folgende Checkliste führt sie in der Reihenfolge ihrer Häufigkeit auf.

### 1. iCloud Drive ist für Paper Scan nicht aktiviert

Zwei unabhängige Schalter müssen eingeschaltet sein. Ist einer aus, reiht Paper Scan Uploads in die Warteschlange, die iOS still ablehnt, sodass die Statusleiste an der Anfangszahl klebt.

- **iOS-Einstellungen → [Ihr Name] → iCloud → Alle anzeigen → Paper Scan** muss aktiviert sein.
- **iOS-Einstellungen → Paper Scan → iCloud Drive** muss aktiviert sein.

Der zweite Schalter wird am häufigsten übersehen. Die beiden Einstellungen sind verwandt, aber getrennt; beide müssen aktiviert sein, damit Uploads laufen.

### 2. iOS drosselt die Hintergrundsynchronisierung

iOS begrenzt die iCloud-Hintergrundaktivität unter zwei Bedingungen: Der Energiesparmodus ist aktiviert (schalten Sie ihn in iOS-Einstellungen → Batterie aus; bei aktivem Energiesparmodus verzögert oder pausiert iOS Hintergrunduploads, um Akku zu sparen), oder der iPhone-Speicher ist nahezu voll (iOS benötigt etwa 500 MB freien Speicher für fortlaufende Hintergrunduploads; schaffen Sie Platz in iOS-Einstellungen → Allgemein → iPhone-Speicher. iOS zeigt in diesem Kontext keine „Speicher voll“-Warnung; Uploads bleiben einfach stehen).

### 3. Die Upload-Warteschlange ist groß

Paper Scan verarbeitet Uploads sequenziell. Hat sich ein großer Rückstau angesammelt — etwa nach einer Offline-Phase — braucht die Warteschlange Zeit, um sich zu leeren. Als grobe Schätzung rechnen Sie mit etwa 50 Seiten pro Stunde im normalen Heim-WLAN, bei starker Verbindung schneller, im Mobilfunk langsamer.

Um zu unterscheiden, ob die Warteschlange „langsam, aber fortschreitet“ oder „wirklich hängt“, lassen Sie die App 30 bis 60 Minuten im Hintergrund und prüfen die Statusleiste. Ist die Zahl vorgerückt, läuft der Sync. Bleibt sie gleich, liegt eine der anderen Bedingungen vor.

### 4. Der iCloud-Kontozustand ist beschädigt

Dies ist selten, kann aber nach Apple-ID-Änderungen, Abmelde/Anmelde-Zyklen oder Wiederherstellung aus Backup auftreten. Symptom: Die Statusleiste hängt und keine der obigen Maßnahmen hat geholfen.

Zwei Eskalationsschritte: iCloud Drive aus- und wieder einschalten (iOS-Einstellungen → [Ihr Name] → iCloud → iCloud Drive ausschalten, 30 Sekunden warten, wieder einschalten — das zwingt iOS, die iCloud-Sitzung neu auszuhandeln), oder aus iCloud abmelden und wieder anmelden (iOS-Einstellungen → [Ihr Name] → Abmelden, dann erneut anmelden — setzt die iCloud-Verbindung Ende-zu-Ende zurück). Der zweite Schritt ist hart, aber effektiv. Bleibt die Warteschlange nach beiden Schritten bei derselben Zahl stehen, liegt das Problem wahrscheinlich auf iCloud-Seite. Apples Systemstatus-Seite unter support.apple.com zeigt, ob bei iCloud Drive derzeit eine Störung vorliegt.

### Wann an den Support eskalieren

In der Mehrheit der Fälle liegt die Ursache auf iOS-Seite. Paper Scan ist möglicherweise schuld, wenn die Statusleiste-Zahl seit über einer Stunde unverändert ist, andere iCloud-Apps auf demselben Gerät normal synchronisieren, die oben genannten Konfigurationsschritte angewendet und die App neu gestartet wurde, und dieselben Dokumente über mehrere App-Starts hinweg als „Upload ausstehend“ markiert bleiben, ohne Fortschritt. Wenn diese Bedingungen zutreffen, senden Sie über **Einstellungen → Feedback senden** in der App einen Bug-Report. Der Report enthält automatisch das aktuelle Sync-Aktivitätsprotokoll, sodass Sie das Problem nicht im Detail beschreiben müssen.

Mehrere Funktionen in Paper Scan zielen gezielt auf hängende Uploads: Die Statusleiste zeigt sowohl die aktuelle Zahl als auch einen separaten Zeitstempel der letzten Aktivität; ein Dokument, das drei Uploads in Folge fehlschlägt, erhält ein Warnsymbol statt weiter als „Wird hochgeladen“ zu erscheinen; Hintergrunduploads pausieren sauber, wenn der Energiesparmodus aktiviert wird, und setzen beim Deaktivieren fort, ohne Warteschlangenelemente still zu verwerfen.
