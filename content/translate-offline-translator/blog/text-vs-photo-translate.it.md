---
title: "Traduzione testo vs traduzione foto: quale usare"
description: "Quando la sorgente è già testo, salta OCR. Quando la sorgente è una pagina stampata, la traduzione foto è più veloce. Come scegliere."
date: 2026-09-03
lang: it
slug: text-vs-photo-translate
---

## Traduzione testo vs traduzione foto: quale usare

L'app ha due punti di ingresso per la traduzione: la pagina fotocamera (traduzione foto) e la pagina di traduzione testo. Condividono lo stesso stato di coppia di lingue e lo stesso motore ML Kit, ma la pipeline differisce in un passaggio importante.

## La differenza in una frase

La traduzione foto esegue OCR su un'immagine catturata e poi traduce il testo riconosciuto. La traduzione testo salta completamente l'OCR e alimenta l'input direttamente nel motore di traduzione.

## Quando la traduzione testo è più veloce

- **Sorgenti già testo.** Email, messaggi di chat, frammenti web, paragrafi incollati — qualsiasi cosa esista come testo piuttosto che come pagina stampata. Saltare l'OCR rimuove un passaggio ed elimina una classe di errori OCR (caratteri letti male, interruzioni di riga rotte, layout incasinato).
- **Testo lungo e denso.** Fotografare uno schermo pieno di testo introduce rumore OCR. Incollare il testo no.
- **Dettatura.** Il tasto di dettatura di sistema ti permette di dettare l'input invece di digitarlo. L'accuratezza della dettatura è buona per voce chiara in un ambiente silenzioso.
- **Fotocamera non disponibile.** Se la fotocamera è in uso da un'altra app, o se il permesso della fotocamera è stato negato, la traduzione testo funziona comunque.

## Quando la traduzione foto è più veloce

- **Pagine stampate.** Libri, menu, insegne, imballaggi, istruzioni, poster. Esistono come inchiostro su carta; l'unico modo per portarli in testo è fotografarli.
- **Adesivi ed etichette.** Una foto di un adesivo o etichetta su un prodotto può essere tradotta sul posto senza trascriverla prima.
- **Schermi che non puoi selezionare.** Se la sorgente è renderizzata come pixel — un'immagine in un PDF, uno screenshot di una vecchia app, una foto di uno schermo — non c'è testo da copiare. La traduzione foto è l'unica opzione.
- **Insegne bilingue.** Catturare entrambe le lingue in una singola foto spesso risolve il suggerimento di lingua per blocco che usa il rilevamento automatico.

## Differenze di accuratezza

Entrambi i percorsi usano lo stesso motore ML Kit, quindi la traduzione stessa ha la stessa qualità. La differenza è più a monte: la traduzione foto può introdurre rumore OCR che la traduzione testo non introduce. Se il motore OCR legge male un carattere, il motore di traduzione non ha modo di recuperare il testo originale.

Per testo che controlli (i tuoi scritti, i tuoi messaggi), incollalo. Per testo che vive sulla carta, fotografalo.

## Condivisione tra modalità

Le impostazioni della lingua sorgente e di destinazione sono condivise tra la pagina fotocamera e la pagina di traduzione testo. Cambiare lingua in un punto si applica all'altra; passare da una all'altra non richiede di riselezionare le lingue.

Le traduzioni di testo non vengono salvate automaticamente nella cronologia; vivono nell'area del risultato finché non tocchi Pulisci o navighi via. Le traduzioni della fotocamera possono essere salvate nella cronologia dalla pagina dei risultati.

## Una regola pratica

Se puoi copiare il testo, copialo. Se non puoi, fotografalo. Il percorso di copia è più pulito perché l'OCR viene rimosso dal ciclo.
