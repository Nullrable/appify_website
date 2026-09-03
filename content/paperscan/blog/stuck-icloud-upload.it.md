---
title: "Risoluzione dei problemi di caricamenti iCloud bloccati"
description: "Risoluzione dei problemi di caricamenti iCloud bloccati"
date: 2026-09-02
lang: it
slug: stuck-icloud-upload
---

Quando la sincronizzazione iCloud in Paper Scan appare bloccata(generalmente visualizzata come un conteggio di caricamento parziale che non cambia per diversi minuti), la causa è quasi sempre una delle quattro condizioni di configurazione o di sistema sul lato iOS. La seguente lista di controllo le copre in ordine di frequenza.

### 1. iCloud Drive non è abilitato per Paper Scan

Due interruttori indipendenti devono essere attivi. Se uno è disattivato, Paper Scan mette in coda caricamenti che iOS rifiuta silenziosamente, lasciando la barra di stato fissata al conteggio iniziale.

- **Impostazioni iOS → [il tuo nome] → iCloud → Mostra tutto → Paper Scan** deve essere attivato.
- **Impostazioni iOS → Paper Scan → iCloud Drive** deve essere attivato.

Il secondo interruttore è quello più spesso mancato. Le due impostazioni sono correlate ma distinte; entrambe devono essere abilitate affinché i caricamenti continuino.

### 2. iOS sta limitando la sincronizzazione in background

iOS limita l'attività iCloud in background in due condizioni: la modalità Risparmio Energetico è attivata(disattivala in Impostazioni iOS → Batteria), o lo spazio di archiviazione dell'iPhone è quasi pieno(iOS richiede circa 500 MB di spazio libero perché i caricamenti in background continuino; libera spazio in Impostazioni iOS → Generali → Spazio iPhone). iOS non visualizza un avviso di "spazio esaurito" in questo contesto; i caricamenti semplicemente si fermano.

### 3. La coda di caricamento è grande

Paper Scan elabora i caricamenti in sequenza. Se si è accumulato un grande arretrato, ad esempio dopo un periodo offline, la coda richiede tempo per liberarsi. Come stima approssimativa, aspettati circa 50 pagine all'ora su Wi-Fi domestico standard, più veloce su connessioni forti e più lento su cellular.

Per determinare se la coda è "lenta ma in corso" o "genuinamente bloccata", lascia l'app in background per 30-60 minuti e controlla la barra di stato. Se il conteggio è avanzato, la sincronizzazione sta funzionando. Se il conteggio è invariato, una delle altre condizioni si applica.

### 4. Lo stato dell'account iCloud è corrotto

Questo è raro ma può verificarsi dopo modifiche all'ID Apple, cicli di logout e login, o ripristino da backup. Sintomi: la barra di stato è bloccata e nessuno dei passaggi precedenti l'ha risolta.

Due passaggi di escalation: disattiva e riattiva iCloud Drive(Impostazioni iOS → [il tuo nome] → iCloud → disattiva iCloud Drive, attendi 30 secondi, riattivalo), oppure disconnettiti da iCloud e riconnettiti(Impostazioni iOS → [il tuo nome] → Esci, poi accedi di nuovo). La seconda azione è drastica ma reimposta la connessione iCloud da zero. Se la coda rimane bloccata allo stesso conteggio dopo entrambi i passaggi, il problema è probabilmente sul lato iCloud: la pagina di stato del sistema Apple su support.apple.com mostra se iCloud Drive sta attualmente subendo un'interruzione.

### Quando escalare al supporto

Nella maggior parte dei casi la causa è sul lato iOS. Paper Scan potrebbe essere in errore quando il conteggio della barra di stato non è cambiato per oltre un'ora, altre app che utilizzano iCloud sullo stesso dispositivo si stanno sincronizzando normalmente, i passaggi di configurazione sopra sono stati applicati e l'app è stata riavviata, e gli stessi documenti sono contrassegnati come in attesa di caricamento su più avvii dell'app senza progressi. Quando queste condizioni si applicano, invia una segnalazione di bug tramite **Impostazioni → Invia feedback** nell'app. La segnalazione include automaticamente il registro delle attività di sincronizzazione recenti, eliminando la necessità di descrivere il problema in dettaglio.

Diverse funzionalità in Paper Scan esistono specificamente per affrontare scenari di caricamento bloccato: la barra di stato visualizza sia il conteggio corrente che un timestamp separato dell'ultima attività, un documento che non riesce a caricarsi tre volte consecutive è contrassegnato con un'icona di avviso, e i caricamenti in background si mettono in pausa pulita quando la modalità Risparmio Energetico è attivata e riprendono quando è disattivata piuttosto che eliminare silenziosamente gli elementi in coda.
