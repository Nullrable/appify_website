---
title: Über Money Tracker - Eine Private, Lokale Finanz-App
description: Money Tracker bewahrt jedes Konto, jede Kategorie und jede Transaktion auf Ihrem Telefon. Sechs Kontoarten, Beleg-OCR auf dem Gerät, Vier-Funktionen-Betragstastatur, PIN- oder Biometrie-Sperre und JSON-Backup, in 10 Sprachen.
date: 2026-09-10
lang: de
slug: index
---

Money Tracker ist eine persönliche Finanz-App für iOS und Android, gebaut für alle, die eine saubere, private Aufzeichnung dessen wollen, was reinkommt und was rausgeht. Alles — Konten, Kategorien, Transaktionen, Statistik — lebt auf Ihrem Telefon. Es gibt keinen Server, der Ihre Daten hält.

Der Startbildschirm zeigt das Bild des Monats: Einnahmen, Ausgaben, Nettosaldo über alle Ihre Konten. Darunter lesen sich dieselben Daten als tageweise gruppierte Liste, als Monatsraster oder als Kalender, in dem jedes Datum seine eigene Einnahmen- und Ausgaben-Markierung trägt.

## Sechs Kontoarten, ein Hauptbuch

Bargeld, Bank, Kreditkarte, Digitalwallet, Investition, Sparen. Jedes Konto trägt seinen eigenen Saldo, seine eigene Transaktionsliste und eine Detailansicht mit den Einnahmen, Ausgaben und letzten Einträgen des Monats. Markieren Sie ein Konto als Standard für neue Transaktionen; das Formular öffnet es vorausgewählt.

Ein Konto zu löschen bedeutet nicht, es zu zerstören. Das Konto und alles, was daran hängt, wandert in einen Bereich „Gelöscht", von wo ein Tippen es wiederherstellt.

## Kategorien, fertig und benutzerdefiniert

Die App bringt 8 Ausgaben- und 4 Einnahmenkategorien mit, bereits lokalisiert für Englisch, vereinfachtes Chinesisch und traditionelles Chinesisch. Fügen Sie beliebig viele benutzerdefinierte Kategorien hinzu, jede mit eigener Farbe und eigenem Symbol. System- und benutzerdefinierte Kategorien leben in getrennten Bereichen des Managers. Das Entfernen einer benutzerdefinierten Kategorie, an der noch Transaktionen hängen, fragt erst nach; das Löschen ist weich, also bleibt ein Versehen wiederherstellbar. Kategorien werden zwischen Konten geteilt, sodass ein „Essen"-Eintrag im Bargeld und ein „Essen"-Eintrag auf der Kreditkarte in der Statistik vergleichbar bleiben.

## Beleg-OCR, auf Ihrem Telefon

Über dem Betragsfeld sitzt eine kleine Kamera-Karte. Fotografieren Sie einen Papierbeleg, und Money Tracker füllt Gesamtsumme, Datum und einen vorläufigen Händlernamen vorab. Die Erkennung läuft auf Ihrem Telefon, also geht das Foto nirgendwo hin. Jeder vorab ausgefüllte Wert lässt sich vor dem Speichern bearbeiten. Ein zweiter OCR-Ablauf lebt im Konto-Bearbeitungsformular zum Scannen einer Bankkarte oder Kontonummer.

## Taschenrechner-Stil Betragseingabe

Ein Tippen auf das Betragsfeld öffnet eine Vier-Funktionen-Tastatur mit Live-Ausdrucksvorschau. Tippen Sie `12.50 + 8.40`, sehen Sie `20.90` sofort und senden Sie es ans Formular. Lange Arithmetik, die auf einer Telefontastatur mühselig wäre, wird zu einer durchgehenden Bewegung.

## Statistik, die zu Ihrem Ausgabeverhalten passt

Der Statistik-Tab verbindet ein Kategorie-Kreisdiagramm mit einer 30-Tage- und einer 12-Monats-Trendlinie. Filtern Sie nach Ausgaben, Einnahmen oder Gewinn. Filtern Sie nach Kontenbereich. Tippen Sie auf einen Anteil oder eine Zeile, um die Transaktionen dahinter zu öffnen — paginiert, mit Suche nach Notiz-Schlüsselwort und Wisch-zum-Löschen. Jedes Konto hat eine Listenansicht und eine Monatsansicht, mit einer Jahresansicht darüber für lange Verläufe. Diagramme, Drill-Downs und kontobezogene Listen lesen aus denselben Daten, also widersprechen sie sich nie.

## Tägliche Erinnerung, optional

Wenn Sie einen sanften Stupser wollen, die heutigen Ausgaben festzuhalten, abonnieren Sie das Gerät auf ein tägliches Erinnerungs-Thema. Die Uhrzeit ist in den Einstellungen konfigurierbar (21:00 standardmäßig). Erinnerungen bleiben aus, bis Sie sie einschalten, und melden sich sofort ab, wenn Sie sie wieder ausschalten. Ihre Erinnerungs-Präferenzen synchronisieren sich über einen einzigen anonymen Datensatz, sodass die Einstellung Ihnen auf ein neues Gerät folgt. Keine Transaktions-, Konto- oder Kategoriedaten verlassen das Telefon — nur dieser Einstellungs-Datensatz tut es.

## JSON-Backup, auf Ihre Weise

Der Export-Bildschirm schreibt eine einzige `money_tracker_<timestamp>.json`-Datei mit der gesamten Datenbank. Speichern Sie sie über die System-Orderauswahl — iCloud Drive, Google Drive, Dateien, USB-Stick oder jede Drittanbieter-App, die als Documents Provider registriert ist. Das System-Share-Sheet sitzt direkt daneben: E-Mail, Messenger, Notizen, AirDrop, Nearby Share. JSON ist Klartext — öffnen Sie es in einem beliebigen Editor zur Inspektion. Der Import akzeptiert die gleiche Datei: Teilt sich ein importierter Eintrag eine ID mit einem bestehenden, wird er an Ort und Stelle überschrieben statt dupliziert, sodass sich monatliche Exporte sauber zusammenführen.

## PIN- und Biometrie-Sperre

Eine 6-stellige PIN kann die App bei jeder Rückkehr in den Vordergrund versperren. Legen Sie sie in den Einstellungen fest, wählen Sie sechs Ziffern, und die PIN wird vor jeder Anzeige abgefragt. Über der PIN liegt eine optionale Biometrie-Schicht — Face ID oder Touch ID auf iOS, Fingerabdruck (oder Gesicht) auf Android. Wenn die Biometrie-Abfrage nicht funktionieren kann, fällt das System auf den Gerätecode zurück, nicht auf die App-PIN, sodass die Vertrauenskette auf der Plattform verankert bleibt.

## Nur lokal, by Design

Konten, Kategorien, Transaktionen, OCR-Text, Statistik — alles lebt in einer lokalen Datenbank im privaten Speicher der App. Die App zu deinstallieren entfernt alles. Die einzigen zwei optionalen Netzwerkaufrufe in der gesamten App sind der Erinnerungs-Push und die Erinnerungs-Einstellungs-Synchronisation; beide sind standardmäßig aus. Keine Analytics-SDK, keine Werbung, kein Tracking.

## Sprachen und Design

Verfügbar in Englisch, vereinfachtem Chinesisch, traditionellem Chinesisch, Italienisch, Deutsch, Japanisch, Koreanisch, Spanisch, Portugiesisch und Französisch. Das Thema folgt standardmäßig dem Gerät; ein Tipper und Sie können Hell oder Dunkel erzwingen. Der erste Wochentag (Montag oder Sonntag) ist ebenfalls konfigurierbar und beeinflusst die Darstellung des Monats- und Tagesrasters.
