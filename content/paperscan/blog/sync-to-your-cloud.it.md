---
title: "Sincronizzazione cloud: rispecchia la tua libreria sul tuo Drive o iCloud"
description: "Sincronizzazione cloud: rispecchia la tua libreria sul tuo Drive o iCloud"
date: 2026-09-02
lang: it
slug: sync-to-your-cloud
---

La sincronizzazione cloud di Paper Scan rispecchia la libreria di documenti in una cartella Google Drive o iCloud controllata dall'utente. Il telefono rimane la posizione principale per tutte le scansioni; il cloud funge da backup di proprietà dell'utente a cui è possibile accedere in modo indipendente. La sincronizzazione cloud è una funzionalità Pro.

### Cosa fa la funzione

Quando abilitata, la sincronizzazione cloud carica le scansioni nello spazio di archiviazione cloud dell'utente mentre vengono salvate. Le nuove scansioni vengono caricate in background. Le scansioni esistenti vengono caricate durante l'esecuzione iniziale di sincronizzazione.

I byte viaggiano direttamente tra il telefono e il provider cloud. Paper Scan non gestisce un server di inoltro e nessuna copia delle scansioni viene conservata sull'infrastruttura Paper Scan.

### Casi d'uso

- **Sostituzione del dispositivo.** Passa a un nuovo telefono, installa Paper Scan, accedi al provider cloud e ripristina la libreria dal mirror cloud. Non è richiesto alcun trasferimento via cavo o strumento di backup di terze parti.
- **Perdita del dispositivo.** Se il telefono viene perso o danneggiato, le scansioni vengono conservate nel mirror cloud e la libreria può essere ripristinata su un dispositivo sostitutivo.
- **Navigazione tra dispositivi.** Apri la cartella cloud in qualsiasi browser per visualizzare le scansioni organizzate in base alla struttura delle cartelle configurata sul telefono. I file possono essere condivisi, allegati a e-mail o trasferiti ad altre applicazioni direttamente dalla cartella cloud.
- **Backup fuori sede.** Mantieni una copia indipendente della libreria di documenti per ridondanza.

### Configurazione

1. Apri **Settings → Cloud** in Paper Scan.
2. Seleziona Google Drive o iCloud. Il provider può essere modificato in seguito; entrambi i provider utilizzano lo stesso motore di sincronizzazione.
3. Accedi all'account cloud. Paper Scan richiede solo le autorizzazioni minime necessarie: accesso solo alla propria cartella, non all'intero account Drive o iCloud.
4. Seleziona quali cartelle locali rispecchiare. L'intera libreria viene rispecchiata per impostazione predefinita; cartelle specifiche possono essere escluse se alcune scansioni devono rimanere solo sul dispositivo.
5. Tocca **Start Sync**. La prima esecuzione carica la libreria esistente; le scansioni successive vengono caricate automaticamente mentre vengono salvate.

Per disabilitare la sincronizzazione cloud, disattiva la funzione nella stessa schermata Impostazioni. Paper Scan non elimina i file dal cloud quando la sincronizzazione è disabilitata. La copia cloud rimane al suo posto fino a quando l'utente sceglie di rimuoverla.

### Ambito delle autorizzazioni

Paper Scan richiede l'ambito di autorizzazione necessario per leggere e scrivere la propria cartella all'interno di Google Drive o iCloud. Non riceve visibilità su altri file nello spazio di archiviazione cloud dell'utente, né ottiene token che consentirebbero l'accesso a tali file. Per verificare, esamina l'elenco delle applicazioni connesse nelle impostazioni dell'account Google o Apple: Paper Scan appare con accesso limitato alla cartella dell'app designata, non all'account completo.

### Ripristino

Il ripristino è un'operazione separata dalla sincronizzazione. Viene avviato manualmente quando l'utente desidera ricostruire la libreria locale dalla copia cloud.

1. Installa Paper Scan sul nuovo dispositivo e accedi.
2. Apri **Settings → Cloud → Restore**.
3. Seleziona il provider e la destinazione.
4. Attendi il completamento del ripristino. Una libreria di poche centinaia di scansioni viene solitamente completata in pochi minuti; una libreria di diverse migliaia richiede più tempo. La barra di avanzamento riflette l'avanzamento effettivo.

Il ripristino è l'unica operazione in cui l'app recupera file dal cloud. Non viene eseguito automaticamente o in background.

### Cambio di provider e disabilitazione della sincronizzazione

Puoi passare da Google Drive a iCloud disabilitando il provider corrente, abilitando quello nuovo e accedendo: la sincronizzazione successiva ricomincia da zero sul nuovo lato. I file precedentemente rispecchiati sul vecchio provider rimangono lì fino a quando l'utente li rimuove. La disabilitazione della sincronizzazione interrompe i nuovi caricamenti ma non rimuove i file già caricati; la libreria locale non è influenzata. La disabilitazione e la riabilitazione della sincronizzazione riprendono da dove era stata interrotta e le scansioni aggiunte durante il periodo di disabilitazione vengono caricate nella successiva esecuzione di sincronizzazione.

Paper Scan funziona completamente senza sincronizzazione cloud. Scansione, OCR, cartelle, tag ed esportazione PDF funzionano tutti in modo identico con o senza sincronizzazione abilitata.
