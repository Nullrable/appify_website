---
title: Informazioni su Paper Scan - Guida alle funzioni
description: Scopri cosa fa Paper Scan, come ogni filtro e l'OCR girano sul dispositivo, e come la sincronizzazione cloud senza conflitti mantiene i tuoi documenti allineati tra iPhone e iPad.
date: 2026-09-02
lang: it
slug: index
---

# Informazioni su Paper Scan

Paper Scan è uno scanner di documenti pensato per iPhone e iPad. Cattura un'intera pagina A4 da una distanza comoda, raddrizza la prospettiva automaticamente, ti permette di rifinire il risultato con sei filtri GPU ed esporta PDF multipagina con testo ricercabile, il tutto senza inviare un solo byte a un server a meno che tu non attivi la sincronizzazione cloud.

## Acquisizione e rilevamento bordi

La vista di acquisizione è abbastanza ampia da inquadrare un intero foglio A4 a distanza di un braccio. Nel momento in cui una pagina entra nell'inquadratura, il rilevamento dei bordi si aggancia ai suoi angoli. L'acquisizione automatica parte quando il documento è fermo, la prospettiva viene corretta sul posto, e una piccola miniatura atterra nel vassoio di revisione per la conferma o un nuovo scatto.

Puoi passare alla modalità manuale in qualsiasi momento. Tieni premuto l'otturatore per disabilitare l'acquisizione automatica, trascina le maniglie degli angoli quando i bordi hanno bisogno di aiuto, e tocca una miniatura per ritagliare o ruotare prima che la pagina venga consolidata nel documento.

## Sei filtri GPU

Ogni filtro in Paper Scan è renderizzato sulla GPU. Le anteprime si aggiornano all'istante anche su lotti multipagina, quindi puoi confrontare l'intensità dei filtri senza aspettare.

- **Originale** mantiene la foto catturata intatta, ed è la scelta giusta quando vuoi una registrazione fedele.
- **Migliora** aumenta contrasto e bilanciamento del bianco, recuperando scontrini termici sbiaditi e scatti in luce fioca.
- **Scala di grigi** appiattisce il disturbo di colore sulla carta colorata così che lo strato OCR legga il testo più pulito.
- **Bianco e nero** porta la stessa idea un passo oltre, producendo lo strato di testo più pulito per le scansioni d'archivio.
- **Schiarisci** uniforma le ombre del flash del telefono, utile per pagine di riviste lucide.
- **Nitidezza** recupera i dettagli fini su scontrini e adesivi con numeri seriali.

I filtri si applicano per pagina, non per documento. Puoi mescolarli in un unico PDF se alcune pagine hanno bisogno di colore e altre di bianco e nero.

## Organizzazione

Le scansioni finiscono su una tela raggruppate come pagine all'interno di un documento. Puoi trascinare le pagine per riordinarle, spostare pagine da un documento all'altro, rinominare i documenti sul posto, e fissare quelli usati di frequente in cima alla libreria.

La ricerca full-text gira su ogni pagina che hai mai passato all'OCR. I risultati evidenziano la parola corrispondente su una miniatura della pagina, e toccando il risultato si apre il documento alla pagina giusta così puoi leggere il contesto circostante.

## OCR sul dispositivo

L'OCR usa il framework Vision di Apple. Il riconoscimento del testo avviene dentro l'enclave sicura del tuo iPhone: l'immagine non lascia mai il dispositivo, il testo riconosciuto non viene inviato da nessuna parte, e l'indice OCR vive nello storage privato dell'app. Lo strato OCR gira su richiesta e puoi rilanciarlo su qualsiasi pagina in qualsiasi momento se cambi filtro.

Il testo ricercabile viene conservato quando esporti in PDF. Chiunque apra il PDF in Preview, Adobe Reader o un visualizzatore moderno può copiare il testo invece di ridigitarlo.

## Esportazione PDF multipagina

Esporta un intero documento come un PDF, o condividi pagine singole come immagini. Per ogni esportazione puoi scegliere formato pagina (Letter / A4 / originale), orientamento, qualità (Bassa / Standard / Alta) e se includere lo strato di testo OCR. Paper Scan incorpora lo strato OCR automaticamente quando mantieni la qualità su Standard o Alta.

L'esportazione in blocco ti permette di scegliere più documenti insieme e spedirli come un unico zip multi-PDF, utile per i lotti di note spese mensili.

## Sincronizzazione cloud senza conflitti

La sincronizzazione cloud è opzionale. Attiva iCloud e i tuoi documenti appaiono su ogni dispositivo connesso con lo stesso Apple ID; attiva Google Drive e appaiono su ogni dispositivo connesso a quell'account Google. Puoi tenere entrambe spente e l'app si comporta come un archivio puramente locale.

La sincronizzazione risolve le modifiche concorrenti senza creare duplicati. Ogni pagina porta il proprio marcatore di revisione, quindi vince la versione più recente di quella pagina, e le tue modifiche locali in corso non vengono mai sovrascritte silenziosamente. Anche le rinominazioni di cartelle, documenti e pagine si propagano, quindi cancellare un documento su un dispositivo lo rimuove ovunque.

## Offline per impostazione predefinita, privacy prima di tutto

Paper Scan è offline per impostazione predefinita. Scansione, rilevamento bordi, filtri, OCR, ricerca ed esportazione PDF girano tutti sul dispositivo e non fanno alcuna chiamata di rete. L'unica funzione che usa la rete è la sincronizzazione cloud, e solo quando la attivi. Nessun account richiesto, nessun SDK analitico integrato, e nessuna pubblicità.

Le tue scansioni vivono nello storage privato dell'app. Disinstallando l'app rimuovi tutti i suoi dati locali, inclusi l'indice OCR, la cache di ricerca full-text e qualsiasi modifica non sincronizzata.

## Paper Scan Pro

Scansione, i sei filtri, OCR, esportazione PDF di un singolo documento e ricerca restano gratuiti per sempre senza filigrana. Paper Scan Pro aggiunge documenti illimitati, sincronizzazione cloud ed esportazione in blocco. Pro è venduto come upgrade una tantum, quindi una volta acquistato lo conservi su tutti i dispositivi e attraverso gli aggiornamenti futuri.
