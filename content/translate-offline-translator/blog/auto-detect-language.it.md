---
title: "Rilevamento automatico della lingua: come l'app sceglie una lingua sorgente"
description: "Quando il selettore sorgente è impostato su Rilevamento automatico, l'app indovina la lingua sorgente per traduzione. Ecco come viene fatta l'indovinata."
date: 2026-09-03
lang: it
slug: auto-detect-language
---

## Rilevamento automatico della lingua: come l'app sceglie una lingua sorgente

Rilevamento automatico è la prima opzione nel selettore della lingua sorgente. Selezionarla non significa che l'app non abbia un'opinione sulla sorgente — significa che l'app sceglierà una lingua sorgente ML Kit specifica per traduzione, usando suggerimenti di lingua per blocco OCR (per le foto) o un'euristica del set di caratteri a livello Dart (per il testo).

    ## Perché per traduzione

    Il traduttore on-device di ML Kit richiede che una lingua sorgente specifica venga scaricata prima che la traduzione possa essere eseguita. Rilevamento automatico non può significare «traduci da qualsiasi lingua»; deve risolversi in una delle 19 lingue supportate per traduzione. L'app esegue questa risoluzione automaticamente.

    ## Come funziona per le foto

    Per le catture della fotocamera, il motore OCR emette un suggerimento di lingua per blocco per ogni blocco riconosciuto. I suggerimenti vengono aggregati nella pagina; la lingua maggioritaria diventa la lingua sorgente ML Kit per quella traduzione.

    Le pagine monolingue si risolvono in modo pulito: una pagina di sottotitoli coreani si risolve in coreano, una pagina di testo francese si risolve in francese. Le pagine con script misti ricadono su un valore predefinito se nessuna singola lingua domina.

    La traduzione per blocco usa questi suggerimenti in modo più granulare. Una pagina con titoli inglesi e sottotitoli giapponesi può essere tradotta con la sorgente appropriata per blocco, anche quando la lingua maggioritaria non è chiara.

    ## Come funziona per il testo

    Per le traduzioni di testo, l'app esegue un'euristica a livello Dart che conta i caratteri per classe di script:

    - Caratteri Han → Cinese semplificato
    - Kana → Giapponese
    - Hangul → Coreano
    - Latino → Inglese
    - Cirillico → Russo
    - Arabo → Arabo

    L'input misto segue la classe di caratteri maggioritaria. L'input vuoto o solo spazi è predefinito in inglese.

    L'euristica è veloce (una singola scansione lineare sull'input) e viene eseguita prima della chiamata ML Kit. La lingua sorgente scelta viene quindi utilizzata per la richiesta di traduzione.

    ## Quando il rilevamento automatico fallisce

    - **Latino senza segni diacritici.** Uno snippet puramente latino di 10 caratteri potrebbe essere inglese, francese, tedesco, italiano, portoghese, spagnolo, olandese, polacco, ceco o molti altri. L'euristica sceglie l'inglese come predefinito; se la sorgente non è inglese, la qualità della traduzione potrebbe risentirne. Fissa manualmente la lingua sorgente per snippet latini brevi.
    - **Cirillico senza specificità.** Il cirillico potrebbe essere russo, ucraino o un'altra scrittura slava. L'app sceglie il russo.
    - **Ambiguità dello script Han.** Il cinese semplificato e tradizionale condividono la maggior parte dei loro caratteri. Un breve snippet di caratteri Han non può essere risolto in uno senza un contesto più lungo. L'app sceglie il cinese semplificato.

    Per questi casi, fissa manualmente la lingua sorgente dal selettore.

    ## Il rilevamento automatico non è mai silenzioso

    La pagina ha sempre una lingua sorgente ML Kit specifica quando la traduzione viene eseguita. Se l'euristica restituisce un predefinito errato, la traduzione potrebbe essere sbagliata; se restituisce la lingua giusta, la traduzione funziona. Non c'è una modalità in cui l'app «non riesce a scegliere una lingua» — ricade su un predefinito e traduce.

    ## Consiglio pratico

    Per documenti lunghi e monolingue, il rilevamento automatico funziona. Per snippet brevi o pagine con script misti, fissa manualmente la lingua sorgente dal selettore. Il selettore ricorda le tue lingue recenti in alto, quindi il secondo utilizzo di una lingua è un solo tocco.
