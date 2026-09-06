---
title: "Rilevamento duplicati esatti"
description: "Come CleanPhoto raggruppa le foto con dimensioni identiche scattate nello stesso secondo, e perché questa regola locale trova le vere copie senza falsi positivi."
date: 2026-09-06
lang: it
slug: duplicates
---

## Rilevamento duplicati esatti

I duplicati esatti sono le foto più facili da eliminare e le più facili da lasciarsi sfuggire. CleanPhoto li trova con una regola semplice e trasparente che gira interamente sul tuo dispositivo: le foto con dimensioni in pixel identiche e scattate nello stesso identico secondo appartengono allo stesso gruppo.

### Come funziona il raggruppamento

Durante una scansione, CleanPhoto scorre la tua libreria foto e costruisce una chiave per ogni foto a partire da larghezza, altezza e secondo di scatto. Le foto con la stessa chiave vengono collocate in un gruppo. Una foto salvata due volte — da un nuovo salvataggio, un'importazione da un altro dispositivo o un conflitto di sincronizzazione cloud — porta le stesse dimensioni e lo stesso timestamp dell'originale, quindi entrambe le copie finiscono nello stesso gruppo, senza nient'altro dentro.

### Rivedere un gruppo

Ogni gruppo mostra tutte le copie con la loro dimensione del file, così vedi a colpo d'occhio quale copia è l'originale di qualità più alta. Segna le copie da rimuovere, confermi, e le foto vengono eliminate tramite la libreria foto di sistema. Le foto che conservi non vengono toccate.

### Perché dimensioni e tempo invece dell'analisi del contenuto

L'abbinamento su dimensioni e secondo di scatto è veloce, prevedibile e privato. Non produce falsi positivi tra foto diverse: che due foto diverse vengano salvate con dimensioni identiche nello stesso secondo è estremamente raro. E poiché non serve analizzare o confrontare il contenuto delle immagini, la scansione non legge nemmeno i dati dei pixel — funziona solo dai metadati della libreria.

### Tutto resta sul tuo dispositivo

Il rilevamento duplicati gira localmente sul tuo telefono. Nessuna foto, nessuna anteprima e nessun metadato lascia mai il tuo dispositivo, e non è richiesto alcun account.
