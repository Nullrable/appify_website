---
title: "I file non lasciano il telefono: come l'elaborazione locale protegge la tua privacy"
description: "Gli strumenti di conversione online devono caricare i file; l'elaborazione locale sul telefono, no. Prendendo Image Converter come esempio, spieghiamo come funziona l'elaborazione locale, dove viene conservata la cronologia e i confini dei dati tra pubblicità e abbonamento."
date: 2026-09-07
lang: it
slug: local-processing-privacy
---

## Quante immagini sensibili hai già caricato?

Pensa agli strumenti di conversione online che hai usato: foto del documento d'identità, scansioni di contratti, screenshot privati... per convertirli in un altro formato sono stati caricati su un server di cui non hai mai sentito parlare. La maggior parte dei servizi dichiara che "vengono eliminati dopo l'elaborazione", ma non puoi verificarlo, e **il gesto di caricarli è già avvenuto**.

## Cosa significa elaborazione locale

Tutte le funzioni di Image Converter (conversione di formato, compressione, rotazione, ritaglio, ridimensionamento e unione) vengono eseguite sul tuo telefono. Nello specifico:

- Le immagini vengono lette, elaborate ed esportate solo all'interno dell'applicazione, **senza passare per alcun server**;
- La conversione viene eseguita sul processore del dispositivo, **e tutte le funzioni restano disponibili anche offline**;
- I file di output vengono salvati nella directory locale dell'applicazione e, tramite il pannello di condivisione di sistema, sei tu a decidere dove inviarli.

In altre parole, "i file non lasciano il telefono" non è uno slogan, ma una conseguenza diretta dell'architettura: non c'è un canale di upload, quindi nulla viene caricato.

## Dove viene conservata la cronologia

Ogni conversione scrive un record nella cronologia dell'applicazione, con lo stato dell'operazione, la durata, i formati di origine e di destinazione e la dimensione del file. Questi record sono memorizzati nel database locale del dispositivo, **e sono leggibili solo su di esso**.

Cancellando la cache o disinstallando l'applicazione vengono eliminati del tutto, senza passare per noi; anzi, non potremmo vederli nemmeno volendo.

## Confini dei dati tra pubblicità e abbonamento

Il modello di business dell'applicazione è chiarito:

- **Pubblicità**: agli utenti che non hanno sottoscritto Pro viene mostrata pubblicità incentivata di Google AdMob all'ingresso nelle pagine delle funzioni. AdMob utilizza, secondo la sua politica, identificatori pubblicitari per servire annunci; questo è il confine tra AdMob e noi: non abbiamo accesso ai tuoi file e non raccogliamo dati personali tramite la pubblicità;
- **Abbonamento Pro**: il pagamento è gestito tramite Apple App Store e la verifica dell'abbonamento è effettuata da RevenueCat. Non abbiamo accesso al numero della tua carta, ai dati di fatturazione e non conserviamo ricevute di pagamento;
- **Vantaggi dell'abbonamento**: Pro elimina la pubblicità; entrando nelle funzioni si accede direttamente, senza dover guardare video incentivati.

## Consigli per trattare file sensibili

Anche con strumenti di elaborazione locale, le abitudini sono importanti:

1. **Trasferisci tempestivamente i risultati importanti**: invia i file convertiti dal pannello di condivisione a "File", iCloud o un servizio cloud; non lasciarli solo nella directory dell'applicazione;
2. **Rimuovi i metadati prima di condividere**: se si tratta di foto di documenti d'identità, conviene prima convertirle con Image Converter in un altro formato per eliminare le informazioni EXIF originali;
3. **Pulisci periodicamente**: elimina dalle impostazioni la cronologia e i file di output che non ti servono più, per mantenere il dispositivo pulito.

La protezione della privacy non si basa sulle promesse, ma sull'architettura. Prima della prossima conversione di un'immagine, vale la pena chiedersi: **questa immagine deve lasciare il mio telefono?**

