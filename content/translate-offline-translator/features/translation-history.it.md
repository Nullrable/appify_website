---
title: "Cronologia delle traduzioni: solo locale, eliminabile in qualsiasi momento"
description: "La cronologia vive in un database Drift sul dispositivo. Nessuna copies viene caricata; le voci possono essere rimosse singolarmente o in massa."
date: 2026-09-03
lang: it
slug: translation-history
icon: history
---

Ogni cattura della fotocamera può essere salvata nella cronologia locale delle traduzioni. Ogni voce memorizza la foto originale (compressa), la lingua sorgente rilevata, la lingua di destinazione, i blocchi OCR e le traduzioni per blocco. L'apertura di una voce salvata riproduce la pagina dei risultati in modalità di sola lettura.

## Cosa viene memorizzato

Ogni record della cronologia contiene:

- **Foto originale** come miniatura JPEG, ridimensionata per adattarsi a un bordo massimo. La foto a risoluzione piena viene scartata dopo il ridimensionamento per mantenere lo spazio di archiviazione limitato.
- **Lingua sorgente** rilevata dall'OCR (o impostata manualmente).
- **Lingua di destinazione** selezionata per la cattura.
- **Blocchi OCR** con i loro rettangoli di delimitazione, testo rilevato e confidenza.
- **Traduzioni** per blocco e la traduzione completa del paragrafo joined.
- **Timestamp di creazione** per l'ordinamento e la visualizzazione.

Nessuna copies della foto o del testo tradotto viene caricata su alcun server che gestiamo. L'intera cronologia è memorizzata in un database SQLite sul dispositivo gestito da Drift.

## Come viene popolata la cronologia

- **Catture della fotocamera.** Dopo che OCR + traduzione sono completati, la pagina dei risultati offre un'azione Salva. Il salvataggio memorizza la voce descritta sopra.
- **Foto importate.** Stesso flusso: dopo la traduzione, la pagina dei risultati può salvare la voce nella cronologia.
- **Traduzioni di testo.** Non vengono salvate automaticamente. Le traduzioni di testo appaiono solo nell'area del risultato della pagina di traduzione testo e scompaiono su Cancella o navigazione. Usa la fotocamera o l'importazione se vuoi un record persistente.

## Sfogliare ed eliminare

- **Vista elenco.** La pagina della cronologia mostra le voci più recenti prima con la miniatura della foto, lo snippet sorgente, lo snippet di destinazione e il timestamp.
- **Tocca per aprire.** Toccare una riga apre la pagina dei risultati in modalità di sola lettura. L'overlay viene riprodotto con le traduzioni salvate; ML Kit non viene rieseguito.
- **Elimina.** Ogni riga ha un pulsante di eliminazione. L'eliminazione è protetta da una finestra di dialogo di conferma per evitare rimozioni accidentali. L'eliminazione rimuove il record e la miniatura della foto dal dispositivo; nulla viene inviato fuori dal dispositivo.
- **Stato vuoto.** Quando la cronologia è vuota, un segnaposto spiega come popolarla.

## Privacy

La cronologia è un artefatto locale. Il modello di privacy dell'app:

- **Nessun caricamento.** La cronologia non viene mai caricata, sincronizzata o sottoposta a backup su alcun server.
- **Nessuna analisi sul contenuto della cronologia.** I rapporti sugli arresti anomali e le analisi anonime sull'uso non includono contenuti della cronologia, testo OCR o testo tradotto.
- **L'eliminazione è permanente.** L'eliminazione di una voce della cronologia la rimuove permanentemente dal database sul dispositivo. Non c'è copies cloud da pulire.

## Crescita dell'archiviazione

Ogni voce occupa circa 50–500 KB a seconda della dimensione della foto. Una cronologia di poche centinaia di voci tipicamente resta sotto i 50 MB. Le foto vengono compresse al salvataggio; l'originale a piena risoluzione non viene mai conservato.

Per liberare spazio: apri la pagina della cronologia ed elimina le voci che non ti servono più. La disinstallazione dell'app rimuove l'intero database della cronologia come parte della disinstallazione della piattaforma.
