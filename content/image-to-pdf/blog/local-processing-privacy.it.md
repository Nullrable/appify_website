---
title: "I file non lasciano il telefono: come l'elaborazione locale protegge la tua privacy"
description: "Gli strumenti di conversione online richiedono il caricamento dei file; l'elaborazione locale sul telefono no. Usando Image to PDF come esempio, spiega come funziona l'elaborazione locale, dove viene memorizzata la cronologia e i limiti dei dati di annunci e abbonamenti."
date: 2026-09-07
lang: it
slug: local-processing-privacy
---

## Quanti file sensibili hai caricato?

Pensa agli strumenti di conversione online che hai usato: foto di documenti d'identità, scansioni di contratti, screenshot di estratti conto bancari — per trasformarli in PDF o immagini, sono stati caricati su un server di cui non hai mai sentito parlare. La maggior parte dei servizi dichiara di "eliminare immediatamente dopo l'elaborazione", ma non puoi verificarlo, e l'atto del caricamento è già avvenuto.

## Cosa significa elaborazione locale

Tutte le funzioni di Image to PDF — immagini in PDF, unione, PDF in immagini, fusione, crittografia, decrittografia — vengono eseguite sul tuo telefono. Più precisamente:

- Le immagini e i file PDF vengono letti, elaborati e generati solo all'interno dell'applicazione, **senza passare per alcun server**;
- Le conversioni vengono eseguite sul chip del dispositivo e possono essere completate anche offline;
- I file di output vengono salvati nella directory locale dell'applicazione, e tu decidi dove inviarli tramite il pannello di condivisione di sistema.

In altre parole, "i file non lasciano il telefono" non è uno slogan, ma il risultato diretto dell'architettura tecnica — senza canale di caricamento, naturalmente non c'è caricamento.

## Dove viene memorizzata la cronologia

Ogni conversione viene scritta nella cronologia dell'applicazione, inclusi stato dell'operazione, durata, formati di origine e output, dimensione del file. Questi record vengono memorizzati in un database locale sul dispositivo e sono leggibili solo su quel dispositivo. Svuotare la cache o disinstallare l'applicazione li elimina completamente, senza passare per noi — infatti, non possiamo nemmeno vederli.

## Limiti dei dati di annunci e abbonamenti

Il modello di business di questa applicazione deve essere chiarito:

- **Annunci**: gli utenti non abbonati vedranno annunci rewarded di Google AdMob quando entrano nelle pagine delle funzioni. AdMob utilizza identifier pubblicitari secondo le sue politiche per erogare annunci; questo è il limite tra noi e ad Proprio — non abbiamo i tuoi file e non raccogliamo consapevolmente i tuoi dati personali tramite gli annunci;
- **Abbonamento Pro**: il pagamento è gestito da Apple App Store, la verifica dell'abbonamento viene effettuata tramite RevenueCat. Non accediamo al tuo numero di carta o alle informazioni di fatturazione, e non conserviamo prove di pagamento;
- **Vantaggi dell'abbonamento**: Pro rimuove gli annunci, consentendo l'uso diretto delle funzioni senza guardare video rewarded.

## Suggerimenti per gestire file sensibili

Anche con strumenti di elaborazione locale, le abitudini rimangono importanti:

1. **Trasferisci rapidamente gli output importanti** — invia i risultati di conversione tramite il pannello di condivisione a "File", iCloud o un disco cloud, non lasciarli solo nella directory dell'applicazione;
2. **Crittografa prima dell'invio esterno** — usa la funzione di crittografia per impostare una password di apertura per PDF sensibili, invia la password e il file tramite canali separati;
3. **Pulisci regolarmente** — elimina la cronologia e i file di output non necessari nelle impostazioni, mantieni il dispositivo pulito.

La protezione della privacy non si basa su promesse, ma sull'architettura. Prima di convertire un file la prossima volta, pensa: questo file deve lasciare il mio telefono?
