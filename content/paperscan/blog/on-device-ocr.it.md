---
title: "OCR sul dispositivo: testo ricercabile da ogni pagina scansionata"
description: "OCR sul dispositivo: testo ricercabile da ogni pagina scansionata"
date: 2026-09-02
lang: it
slug: on-device-ocr
---

OCR (riconoscimento ottico dei caratteri) converte una pagina scansionata in testo che può essere selezionato, copiato e cercato. Paper Scan esegue OCR interamente sul dispositivo utilizzando i kit ML di Apple e Google, quindi nessun contenuto scansionato viene trasmesso a server esterni per il riconoscimento. Le pagine riconosciute vengono indicizzate nella libreria locale e diventano ricercabili nel momento in cui vengono salvate.

### Cosa sblocca l'OCR

Una volta che una pagina è stata riconosciuta:

- **Copia testo dalla scansione.** Premi a lungo su qualsiasi parola per visualizzare una sovrapposizione di selezione che copre l'intera pagina. Il testo selezionato può essere incollato in qualsiasi altra applicazione.
- **Cerca dentro le scansioni.** La barra di ricerca in cima all'elenco Documenti interroga il testo riconosciuto di ogni pagina, non solo titoli e tag. Numeri di telefono, nomi, numeri di fattura e indirizzi possono essere individuati nell'intera libreria.
- **Cita e fai riferimento.** Ricevute scansionati, contratti, note manoscritte e catture di lavagna diventano tutti testo citabile che può essere referenziato in seguito.

### Perché l'elaborazione sul dispositivo è importante

- **Privacy.** Il contenuto scansionato non lascia mai il dispositivo per il riconoscimento. Questo è rilevante per fatture, contratti, moduli medici e qualsiasi documento contenente dati personali.
- **Latenza.** Nessun round-trip di rete. Su iPhone recenti e dispositivi Android di punta, l'OCR per una pagina standard viene completato in genere in meno di un secondo.
- **Disponibilità offline.** L'OCR funziona in aereo, in seminterrati e in regioni senza copertura di rete. Non è richiesta alcuna connettività.

La precisione è paragonabile ai servizi OCR basati su server; la differenza è dove viene eseguito il calcolo.

### Migliori pratiche per un riconoscimento accurato

La precisione dell'OCR dipende principalmente dalla qualità dell'input. Tre fattori, in ordine di importanza:

1. **Illuminazione.** Una luce indiretta e uniforme da una finestra funziona meglio di un singolo faretto a soffitto. Le ombre che attraversano la pagina sono la causa più comune di caratteri letti erroneamente.
2. **Messa a fuoco.** Se la messa a fuoco automatica seleziona il soggetto sbagliato, tocca il centro del testo prima dell'acquisizione. Una scansione sfocata è raramente una scansione utilizzabile.
3. **Selezione del filtro.** Il bianco e nero fornisce il testo più pulito per i moduli stampati. Magic Color è consigliato quando l'inchiostro è sbiadito o la carta è ingiallita. Auto gestisce la maggior parte dei casi quotidiani.
4. **Pagine piatte.** Le pagine che si curvano verso il dorso perdono caratteri vicino alla gola. Premi la pagina piatta con l'altra mano dove possibile.
5. **Suggerimento lingua.** Imposta esplicitamente la lingua OCR per pagine monolingue. Le pagine con script misti funzionano in un unico passaggio senza suggerimento.

### Limiti di precisione

L'OCR funziona bene sul testo stampato (95%+ di precisione) ma è meno affidabile per la scrittura corsiva manoscritta, caratteri molto piccoli, caratteri decorativi stilizzati, riflessi di riviste lucide e ricevute vecchie dove l'inchiostro è fisicamente sbiadito. L'immagine originale rimane disponibile in tutti i casi: se l'OCR fallisce su una pagina critica, la scansione stessa può ancora essere letta.

Il livello gratuito include un'allocazione OCR giornaliera sufficiente per ricevute quotidiane, biglietti da visita e capitoli di libri occasionali. Pro rimuove il limite giornaliero e aggiunge la possibilità di eseguire OCR su un'intera cartella in una singola operazione.

Il motore sul dispositivo supporta le scritture latine (inglese, francese, tedesco, spagnolo, portoghese, italiano e altre), cinese (semplificato e tradizionale), giapponese, coreano e la maggior parte delle scritture europee. Le pagine con script misti vengono gestite in un unico passaggio di riconoscimento.
