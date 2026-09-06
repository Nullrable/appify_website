---
title: "Pulizia foto e privacy: cosa resta sul tuo dispositivo"
description: "Una libreria foto è il dataset più personale del tuo telefono. Una scomposizione onesta di ciò che CleanPhoto legge, cosa non legge mai, cosa lascia il tuo dispositivo — e cosa no."
date: 2026-09-06
lang: it
slug: photo-privacy
---

## Pulizia foto e privacy: cosa resta sul tuo dispositivo

Dare a un'app l'accesso alle tue foto significa consegnarle il dataset più personale del telefono: la famiglia, la casa, i documenti, gli ultimi dieci anni. Questo accesso è necessario perché qualsiasi pulitore funzioni — ed è esattamente per questo che la domanda "che cosa ci fa l'app?" merita una risposta concreta, non uno slogan. Questa è quella di CleanPhoto.

### Cosa legge l'app

Le scansioni lavorano dai metadati della libreria: timestamp di scatto, dimensioni delle immagini, nomi degli album, titoli e percorsi file, più le dimensioni dei file caricate per ordinare gli elementi per dimensione dentro un gruppo. Su iOS, il rilevamento screenshot legge l'album dedicato. Su Android controlla i nomi degli album e, se serve, titoli e percorsi file delle immagini in cerca di pattern di nomi da screenshot. Questo è l'inventario completo.

### Cosa l'app non legge mai

Nessuna scansione analizza il contenuto dei pixel. La regola dei duplicati è dimensioni più timestamp; quella delle foto simili il momento dello scatto; quella degli screenshot album e nomi file. Niente classificazione dei contenuti con IA, niente rilevamento dei volti, niente analisi della posizione, niente "punteggio di qualità foto" — non perché siano difficili, ma perché non serve nessuna, e ognuna significherebbe leggere il contenuto reale delle tue foto.

### Cosa lascia il tuo dispositivo

Le tue foto no. La scansione e la revisione non caricano nessuna foto, anteprima o metadato, e non richiedono alcun account. Ciò che usa la rete è l'impiantistica ordinaria dell'app: nella versione gratuita, la pubblicità viene caricata da una rete pubblicitaria (Google AdMob); se scegli Pro, l'abbonamento è processato tramite lo store, con RevenueCat che gestisce il diritto. Questi servizi ricevono i loro dati standard — come in qualunque app che mostra pubblicità o vende abbonamenti — ma mai le tue foto o i risultati delle scansioni.

### Come funziona l'eliminazione

L'app non può eliminare nulla in silenzio. Ogni eliminazione passa dalla tua conferma esplicita e viene eseguita tramite la libreria foto di sistema — lo stesso percorso protetto di quando elimini una foto tu stesso. Su iOS vale il permesso di sistema di Apple per l'eliminazione delle foto: è il sistema stesso a chiederti di autorizzare le eliminazioni.

### Permessi, in lista

Accesso alla libreria foto: necessario per scansionare e mostrare i gruppi. Su iOS vedrai anche il prompt di permesso di tracciamento (ATT) richiesto dalle reti pubblicitarie per servire annunci pertinenti — puoi rifiutare e l'app funziona uguale, senza pubblicità personalizzata. Questa è la lista completa.

### Il punto

La pulizia delle foto non richiede cloud, account o analisi dei contenuti. Richiede metadati, regole trasparenti e la tua conferma. È tutto ciò che CleanPhoto usa — e se un pulitore chiedesse più di così, varrebbe la pena chiedergli a cosa gli serve.
