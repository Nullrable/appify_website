---
title: "Traduzione testo: incolla, digita, traduci"
description: "Una pagina di traduzione solo testo che condivide lo stesso stato di coppia di lingue con la pagina della fotocamera."
date: 2026-09-03
lang: it
slug: text-translate
icon: keyboard
---

La pagina di traduzione testo è un ingresso separato dalla pagina della fotocamera per i casi in cui la sorgente è già testo. Aprila dal fondo della pagina della fotocamera e incolla, digita o detta un paragrafo; lo stesso motore ML Kit restituisce una traduzione.

## Perché una pagina separata

L'OCR della fotocamera è ottimizzato per le immagini. Quando la sorgente è già testo — un frammento di email, un messaggio di chat, un paragrafo incollato — il passaggio OCR è overhead. La pagina di traduzione testo salta completamente l'OCR e alimenta l'input direttamente al traduttore ML Kit.

Permette anche la traduzione in batch copiando e incollando un paragrafo più lungo anziché fotografarlo. Per testo denso senza una pagina comoda da fotografare, questo è più veloce e più accurato.

## Come funziona

- **Stato della lingua condiviso.** La pagina di testo legge e scrive la stessa coppia di lingue sorgente/destinazione della pagina della fotocamera. Scegliere una lingua di destinazione in un posto si applica all'altra; passare avanti e indietro non richiede di riselezionare le lingue.
- **Rilevamento automatico per la sorgente.** Se la sorgente è impostata su «Rilevamento automatico», l'app esegue un'euristica a livello di classe di caratteri in Dart sul testo di input per scegliere tra le lingue supportate da ML Kit. Latino puro predefinito in inglese; caratteri Han predefiniti in cinese semplificato; scritture miste seguono la classe di caratteri maggioritaria.
- **Traduzione a passaggio singolo.** Tutto l'input viene inviato a ML Kit in una sola chiamata. Il risultato sostituisce l'area di input sotto il pulsante; cancella l'input per tradurre di nuovo.
- **Gestione della tastiera.** Toccare Traduci chiude la tastiera su schermo così che l'area del risultato non sia nascosta dietro di essa.

## Quando usarla

- **Paragrafi lunghi.** Digita o incolla testo con più frasi. Fotografare uno schermo pieno di testo introduce rumore OCR; incollare il testo no.
- **Frammenti di chat.** Traduci un breve messaggio di un amico senza lasciare la conversazione per aprire la fotocamera.
- **Schermi con testo.** Estrai testo da uno screenshot tramite la condivisione di sistema e incollalo nella pagina di traduzione testo per una traduzione più pulita dell'OCR.
- **Dettatura vocale.** Usa il tasto di dettatura di sistema per dettare il testo invece di digitarlo.

## Limiti

- **Nessuna conservazione della formattazione.** Solo testo semplice. Markdown, grassetto, corsivo e altre formattazioni vengono scartati.
- **Nessun salvataggio automatico nella cronologia.** A differenza delle catture della fotocamera, le traduzioni di testo non vengono salvate automaticamente. Il risultato rimane nell'area del risultato finché non tocchi Cancella o esci.
