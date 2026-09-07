---
title: "Ruotare o capovolgere: quando usare quale"
description: "Quando usare la rotazione di 90°, di 180°, il capovolgimento orizzontale e verticale, e come il tag di rotazione EXIF influisce sul risultato finale."
date: 2026-09-07
lang: it
slug: rotate-vs-flip
---

## Quattro operazioni di base

La funzione in Image Converter offre quattro operazioni di base di rotazione e capovolgimento:

- **Ruota di 90° a sinistra**: trasforma un'immagine verticale in orizzontale
- **Ruota di 90° a destra**: trasforma un'immagine orizzontale in verticale
- **180°**: ribalta completamente l'immagine
- **Capovolgimento orizzontale**: specchio sinistra-destra
- **Capovolgimento verticale**: specchio alto-basso

Sembra semplice, ma molti non sanno quale usare in ogni caso.

## Rotazione: passi di 90°

### Rotazione di 90°

La rotazione di 90° è l'operazione più comune e si applica in questi casi:

- **Screenshot di un video registrato in orizzontale sul telefono**: l'orientamento non corrisponde e va ruotato
- **Documento scansionato con orientamento invertito**: lo scanner è stato posizionato al contrario e il file esce invertito
- **Combinare foto con orientamenti diversi**: si unifica l'orientamento prima di unirle

Ruotare di 90° è un'operazione senza perdita: i pixel vengono riordinati, ma non si perde informazione.

### Rotazione di 180°

Due rotazioni di 90° o una rotazione diretta di 180°, applicabile in questi casi:

- **Immagine completamente capovolta**: ad esempio una foto girata di 180°
- **Combinare più immagini quando una è capovolta**: si unifica l'orientamento

Anche la rotazione di 180° è un'operazione senza perdita.

## Capovolgimento: orizzontale e verticale

### Capovolgimento orizzontale (specchio sinistra-destra)

- **Correzione dello specchio nei selfie**: alcuni telefoni applicano automaticamente lo specchio nei selfie e la direzione vista dall'utente non corrisponde a quella reale
- **Correzione del testo riflesso**: screenshot attraverso uno specchio o riflessi su superfici riflettenti
- **Effetti di design**: composizioni speculari o anteprima simmetrica di un design

### Capovolgimento verticale (specchio alto-basso)

- **Effetto negativo**: simula il negativo di una pellicola tradizionale
- **Composizione speculare**: anteprima del riflesso sull'acqua
- **Esigenze specifiche di design**: anteprima simmetrica verticale di poster o packaging

## La rotazione EXIF: la trappola più comune

Molti telefoni (soprattutto l'iPhone) durante lo scatto **scrivono solo il tag di rotazione nei metadati, invece di ruotare davvero i pixel**.

Questo significa che:

- Nell'album si vede con l'orientamento corretto
- In alcune app si apre con orientamento sbagliato
- In alcune piattaforme viene caricato con orientamento sbagliato

La funzione in Image Converter legge l'orientamento EXIF (Orientation tag) e, prima dell'esportazione, **ruota davvero i pixel**, così l'immagine salvata appare con l'orientamento corretto ovunque.

## Ruotare o capovolgere: guida per scenario

| Fenomeno | Operazione | Motivo |
|---|---|---|
| Screenshot di video orizzontale che appare verticale | Ruota 90° | L'orientamento del video non corrisponde a quello di visualizzazione |
| Selfie con sinistra e destra invertite | Capovolgimento orizzontale | Il telefono ha applicato automaticamente lo specchio |
| Documento scansionato con orientamento invertito | Ruota 90° | Lo scanner è stato posizionato al contrario |
| Testo riflesso in uno specchio | Capovolgimento orizzontale | L'immagine è stata generata per riflessione |
| Foto completamente capovolta | Ruota 180° | Il telefono è stato tenuto al contrario durante lo scatto |
| Riflesso sull'acqua invertito alto-basso | Capovolgimento verticale | Simulare l'effetto del riflesso |

Se si tratta solo del tag EXIF, **non devi fare nulla**: la funzione in Image Converter lo gestisce automaticamente durante la conversione.

