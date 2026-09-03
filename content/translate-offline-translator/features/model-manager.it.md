---
title: "Modelli di traduzione: scarica una volta, mantieni per sempre"
description: "Gestisci i 19 modelli di lingua ML Kit da una pagina dedicata. Scarica una volta, elimina per recuperare spazio; il modello sopravvive offline."
date: 2026-09-03
lang: it
slug: model-manager
icon: download
---

Ogni coppia di lingue richiede che i modelli sorgente e destinazione siano sul dispositivo prima che la traduzione possa essere eseguita. I modelli vengono scaricati una volta, persistono attraverso i riavvii dell'app e vengono riutilizzati per ogni traduzione di quella coppia. La pagina di download dei modelli elenca tutte le 19 lingue supportate con il loro stato di download e ti permette di scaricare o eliminare ciascuna.

## Perché una pagina dedicata

ML Kit non scarica i modelli automaticamente — ogni coppia di lingue richiede un download esplicito della sua sorgente e destinazione. La pagina di download dei modelli espone questo stato e consente all'utente di gestirlo senza approfondire l'archiviazione della piattaforma.

Per la maggior parte degli utenti, il flusso di lavoro è invisibile: scegli una lingua sorgente e destinazione, l'app scarica entrambi i modelli su richiesta la prima volta che traduci, e i modelli rimangono sul dispositivo per le esecuzioni successive. La pagina dedicata è per gli utenti che vogliono pre-scaricare per viaggi offline, eliminare lingueze che non usano più, o vedere cosa sta consumando archiviazione.

## Stati del modello per lingua

- **Non scaricato.** Viene mostrato un pulsante Scarica. Tocca per avviare il download.
- **Download in corso.** Viene mostrato uno spinner indeterminato. ML Kit non espone callback di progresso, solo il completamento; lo spinner si risolve in Scaricato o Fallito.
- **Scaricato.** Viene mostrato un badge con un pulsante Elimina. Tocca per rimuovere il modello e recuperare archiviazione.
- **Fallito.** Un pulsante Riprova sostituisce Scarica. Cause comuni: nessuna rete, cellulare bloccato, poco spazio su disco. Riprova una volta risolta la causa sottostante.

## Coda di download sequenziale

Più richieste di download in rapida successione vengono messe in coda, non parallelizzate. Il plugin iOS nativo non gestisce chiamate `manageModel` concorrenti in modo pulito: la seconda richiesta annulla la prima. L'app serializza i download attraverso un singolo Future concatenato in modo che le richieste concorrenti si risolvano una dopo l'altra. La UI mostra solo il download attivo nello stato indeterminato; le richieste in coda aspettano il loro turno.

## Timeout e polling del download

Se un callback di download viene perso (osservato su iOS in condizioni di rete scarsa), il Future di download può bloccarsi. L'app si protegge con un timeout di 30 secondi; se il timeout si attiva, l'app interroga direttamente il disco tramite `isModelDownloaded` per confermare se il modello è effettivamente arrivato prima di riportare successo o fallimento.

## Costo di archiviazione

Ogni modello ML Kit occupa circa 10–50 MB su disco. Scaricare tutte le 19 lingue consuma circa 300–600 MB. I modelli per sorgente e destinazione della stessa traduzione sono separati; un modello può servire come sorgente o destinazione a seconda del ruolo selezato dal utente.

Eliminare il modello libera lo spazio. Non c'è pulizia automatica. La disinstallazione dell'app rimuove tutti i modelli scaricati come parte della disinstallazione della piattaforma.
