---
title: "Importazione foto: traduci qualsiasi foto dalla tua libreria"
description: "Recupera qualsiasi foto già sul tuo dispositivo e traducila attraverso la stessa pipeline OCR + ML Kit di una nuova cattura."
date: 2026-09-03
lang: it
slug: photo-import
icon: photo
---

La stessa pipeline OCR e di traduzione che elabora le catture dal vivo elabora anche le foto importate dalla libreria del dispositivo. Usala per screenshot, foto salvate di cartelli o menu e immagini condivise dagli amici.

## Come funziona l'importazione

1. **Scegli dalla galleria.** Toccando l'icona della galleria nella pagina della fotocamera si apre il selettore di foto di sistema tramite `image_picker`. L'immagine selezionata viene copiata nella directory temporanea dell'app; l'originale resta al suo posto.
2. **Leggi l'orientamento fisico.** Le foto della libreria hanno un tag di orientamento EXIF affidabile, quindi il percorso di importazione usa EXIF direttamente senza toccare l'accelerometro. L'immagine viene ruotata nella corretta orientazione verticale prima dell'OCR.
3. **Stessa pipeline OCR.** L'immagine viene alimentata nello stesso motore `vision_text_recognition` forkato usato dal percorso fotocamera. Nessuna gestione speciale è necessaria per «importato» vs. «catturato» — la pagina dei risultati e il comportamento di traduzione sono identici.
4. **Salva nella cronologia.** Come le catture della fotocamera, le foto importate possono essere salvate nella cronologia locale delle traduzioni. La copia salvata è una miniatura compressa, non la foto completa della libreria, per mantenere lo spazio di archiviazione limitato.

## Quando importare invece di catturare

- **Screenshot.** Traduci stringhe UI, finestre di errore o snippet web salvati come screenshot.
- **Foto già scattate.** Traduci una foto di un viaggio, una riunione o una chat di un amico senza ri-scattare.
- **Schizzi o lavagne.** Le foto di appunti su lavagna e schizzi sono spesso più nitide di una ricattura, specialmente quando la superficie ha riflessi.
- **Documenti.** Le istantanee di ricevute, biglietti da visita ed etichette catturate da un'altra app possono essere tradotte senza cambiare strumento.

## Privacy

Le foto importate passano attraverso la stessa pipeline sul dispositivo delle foto dal vivo. Vengono elaborate in memoria e mai caricate su alcun server che gestiamo. Le copie della cronologia salvata sono archiviate solo sul dispositivo, nel database locale dell'app, e possono essere eliminate singolarmente dalla pagina della cronologia.

## Limiti

- **La rotazione esistente è rispettata.** Le foto che sono state ruotate dal sistema operativo vengono nuovamente ruotate in verticale prima dell'OCR. Questa è la causa più comune di problemi «l'OCR restituisce testo confuso» con le importazioni.
- **Gli originali grandi vengono ridotti.** Le foto sopra la risoluzione consigliata dal motore OCR vengono ridotte prima del riconoscimento. La foto originale sul dispositivo non è influenzata.
- **Nessuna importazione in batch.** Ogni foto richiede il proprio un tocco. Se devi tradurre molte foto salvate, eseguile una alla volta; l'OCR + traduzione di una singola immagine di solito si completa in pochi secondi.
