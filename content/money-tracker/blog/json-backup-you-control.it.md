---
title: Backup JSON Sotto il Tuo Controllo - Un File che Puoi Aprire
description: Esporta i dati di Money Tracker come un unico file JSON — conti, categorie, transazioni — e salvalo dove sei già abituato a tenere i backup, o invialo direttamente dal foglio di condivisione di sistema.
date: 2026-09-10
lang: it
slug: json-backup-you-control
---

La schermata di esportazione scrive un unico file: `money_tracker_<timestamp>.json`, che contiene ogni conto (con tipo, istantanea del saldo e metadati), ogni categoria (di sistema e personalizzate) e ogni transazione (data, importo, conto, categoria, nota, tipo). Un file, l'intero database.

Scegli tu dove va. iOS apre il selettore documenti, Android apre Storage Access Framework, quindi il file può finire in iCloud Drive, Google Drive, una chiavetta USB o qualsiasi app di terze parti registrata come Documents provider. Niente ti obbliga a un cloud specifico.

Accanto al selettore c'è il foglio di condivisione di sistema. Da lì il file va diretto a email, app di messaggistica, app di note, AirDrop o Nearby Share, da un capo all'altro tramite il sistema, mai tramite Money Tracker.

JSON è testo puro. Apri il file in qualsiasi editor e vedi la struttura: un oggetto con gli array `accounts`, `categories` e `transactions`, ogni voce un record piatto con campi nominati. Niente blob base64, niente contenitore cifrato, niente schema vincolato alla versione.

L'importazione accetta lo stesso file. Se una voce importata condivide un ID con una esistente, l'import la sovrascrive sul posto invece di duplicarla, così un'esportazione recente sopra una più vecchia aggiunge solo le righe davvero nuove.
