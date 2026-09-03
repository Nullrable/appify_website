---
title: "Cloud-Sync: Bibliothek in Ihr eigenes Drive oder iCloud spiegeln"
description: "Cloud-Sync: Bibliothek in Ihr eigenes Drive oder iCloud spiegeln"
date: 2026-09-02
lang: de
slug: sync-to-your-cloud
---

Die Cloud-Synchronisierung von Paper Scan spiegelt die Dokumentbibliothek in einen vom Benutzer verwalteten Google Drive- oder iCloud-Ordner. Das Telefon bleibt der primäre Speicherort für alle Scans; die Cloud dient als Backup, das dem Benutzer gehört und auf das er unabhängig zugreifen kann. Cloud-Synchronisierung ist eine Pro-Funktion.

### Was die Funktion tut

Wenn aktiviert, lädt die Cloud-Synchronisierung Scans in den eigenen Cloud-Speicher des Benutzers hoch, sobald sie gespeichert werden. Neue Scans werden im Hintergrund hochgeladen. Vorhandene Scans werden beim ersten Synchronisierungslauf hochgeladen.

Die Bytes wandern direkt zwischen dem Telefon und dem Cloud-Anbieter. Paper Scan betreibt keinen Relay-Server, und es wird keine Kopie der Scans in der Paper Scan-Infrastruktur aufbewahrt.

### Anwendungsfälle

- **Gerätewechsel.** Wechseln Sie auf ein neues Telefon, installieren Sie Paper Scan, melden Sie sich beim Cloud-Anbieter an und stellen Sie die Bibliothek aus dem Cloud-Spiegel wieder her. Es ist keine Kabelübertragung oder ein Backup-Tool eines Drittanbieters erforderlich.
- **Geräteverlust.** Wenn das Telefon verloren geht oder beschädigt wird, sind die Scans im Cloud-Spiegel erhalten und die Bibliothek kann auf einem Ersatzgerät wiederhergestellt werden.
- **Geräteübergreifendes Browsen.** Öffnen Sie den Cloud-Ordner in einem beliebigen Browser, um Scans anzuzeigen, die nach der auf dem Telefon eingerichteten Ordnerstruktur organisiert sind. Dateien können direkt aus dem Cloud-Ordner freigegeben, an E-Mails angehängt oder an andere Anwendungen übertragen werden.
- **Off-Site-Backup.** Pflegen Sie eine unabhängige Kopie der Dokumentbibliothek zur Redundanz.

### Konfiguration

1. Öffnen Sie **Settings → Cloud** in Paper Scan.
2. Wählen Sie Google Drive oder iCloud. Der Anbieter kann später gewechselt werden; beide Anbieter verwenden dieselbe Synchronisierungs-Engine.
3. Melden Sie sich beim Cloud-Konto an. Paper Scan fordert nur die minimal erforderlichen Berechtigungen an: Zugriff nur auf den eigenen Ordner, nicht auf das gesamte Drive- oder iCloud-Konto.
4. Wählen Sie aus, welche lokalen Ordner gespiegelt werden sollen. Die gesamte Bibliothek wird standardmäßig gespiegelt; bestimmte Ordner können ausgeschlossen werden, wenn bestimmte Scans nur auf dem Gerät verbleiben sollen.
5. Tippen Sie auf **Start Sync**. Der erste Lauf lädt die vorhandene Bibliothek hoch; nachfolgende Scans werden automatisch hochgeladen, sobald sie gespeichert werden.

Um die Cloud-Synchronisierung zu deaktivieren, schalten Sie die Funktion im selben Einstellungsbildschirm aus. Paper Scan löscht keine Dateien aus der Cloud, wenn die Synchronisierung deaktiviert wird. Die Cloud-Kopie bleibt an Ort und Stelle, bis der Benutzer sie entfernt.

### Berechtigungsumfang

Paper Scan fordert den Berechtigungsumfang an, der zum Lesen und Schreiben des eigenen Ordners in Google Drive oder iCloud erforderlich ist. Es erhält keine Sichtbarkeit für andere Dateien im Cloud-Speicher des Benutzers und erhält auch keine Token, die Zugriff auf diese Dateien ermöglichen würden. Überprüfen Sie dazu die Liste der verbundenen Anwendungen in den Google- oder Apple-Kontoeinstellungen: Paper Scan erscheint mit Zugriff, der auf seinen bestimmten App Folder beschränkt ist, nicht auf das gesamte Konto.

### Wiederherstellung

Wiederherstellung ist ein separater Vorgang von der Synchronisierung. Sie wird manuell gestartet, wenn der Benutzer die lokale Bibliothek aus der Cloud-Kopie neu erstellen möchte.

1. Installieren Sie Paper Scan auf dem neuen Gerät und melden Sie sich an.
2. Öffnen Sie **Settings → Cloud → Restore**.
3. Wählen Sie den Anbieter und das Ziel aus.
4. Warten Sie, bis die Wiederherstellung abgeschlossen ist. Eine Bibliothek von wenigen hundert Scans ist normalerweise in wenigen Minuten abgeschlossen; eine Bibliothek von mehreren tausend dauert länger. Der Fortschrittsbalken spiegelt den tatsächlichen Fortschritt wider.

Die Wiederherstellung ist der einzige Vorgang, bei dem die App Dateien aus der Cloud abruft. Sie wird nicht automatisch oder im Hintergrund ausgeführt.

### Anbieter wechseln und Synchronisierung deaktivieren

Sie können zwischen Google Drive und iCloud wechseln, indem Sie den aktuellen Anbieter deaktivieren, den neuen aktivieren und sich anmelden: Die nächste Synchronisierung beginnt auf der neuen Seite von vorne. Zuvor auf den alten Anbieter gespiegelte Dateien bleiben dort, bis der Benutzer sie entfernt. Das Deaktivieren der Synchronisierung stoppt neue Uploads, entfernt jedoch keine bereits hochgeladenen Dateien; die lokale Bibliothek ist nicht betroffen. Das Deaktivieren und erneute Aktivieren der Synchronisierung wird dort fortgesetzt, wo sie aufgehört hat, und Scans, die während der Deaktivierungsperiode hinzugefügt wurden, werden beim nächsten Synchronisierungslauf hochgeladen.

Paper Scan funktioniert vollständig ohne Cloud-Synchronisierung. Scannen, OCR, Ordner, Tags und PDF-Export funktionieren alle identisch mit oder ohne aktivierte Synchronisierung.
