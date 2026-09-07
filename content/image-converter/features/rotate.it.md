---
title: "Rotazione e capovolgimento"
description: "Rotazione a passi di 90°, capovolgimento orizzontale e verticale, e correzione automatica del tag di rotazione EXIF prima dell'esportazione, così il file salvato appare corretto ovunque."
date: 2026-09-07
lang: it
slug: rotate
---

## Rotazione e capovolgimento

Foto storte, scansioni di documenti con l'orientamento sbagliato, screenshot che richiedono un ribaltamento: in tutti questi casi serve ruotare o capovolgere l'immagine. La funzione in Image Converter offre operazioni di base di rotazione e capovolgimento con un utilizzo intuitivo.

## Rotazione: passi di 90°

L'applicazione consente di ruotare le immagini a passi di 90°:

- **Ruota di 90° a sinistra**: trasforma una foto verticale in orizzontale o corregge foto etichettate in modo errato dopo uno scatto in orizzontale
- **Ruota di 90° a destra**: l'operazione inversa
- **180°**: due rotazioni di 90° consecutive

Ogni rotazione ricodifica l'immagine, così il file esportato appare nell'orientamento corretto su qualsiasi dispositivo.

## Capovolgimento: orizzontale e verticale

Oltre alla rotazione, l'applicazione supporta il ribaltamento speculare:

- **Capovolgimento orizzontale**: specchio sinistra-destra, utile per selfie e testo riflesso
- **Capovolgimento verticale**: specchio alto-basso, utile per effetto negativo o composizione speculare

## Gestione automatica della rotazione EXIF

Alcuni telefoni (soprattutto l'iPhone) si limitano a scrivere il tag di rotazione nei metadati della foto, invece di ruotare realmente i pixel. In queste foto, in alcune app "sembra giusta ma viene esportata storta".

La funzione in Image Converter legge l'orientamento EXIF (Orientation tag), corregge i pixel prima dell'esportazione e il file salvato si apre nell'orientamento corretto ovunque, senza dipendere dal riconoscimento dei metadati da parte del visualizzatore.

