---
title: "Crittografia PDF"
description: "Istruzioni per l'uso della funzione di crittografia di Image to PDF: imposta password di apertura e password proprietario, controlla le autorizzazioni di stampa, copia e modifica, adotta la crittografia AES-256 per impostazione predefinita."
date: 2026-09-07
lang: it
slug: pdf-encrypt
---

## Crittografia PDF

Aggiungi un blocco con password al PDF. Prima di inviare contratti, scansioni di documenti d'identità e materiali finanziari via e-mail o strumenti di chat, crittografa prima per garantire che solo le persone con la password possano aprire.

## Due tipi di password, ciascuno con la propria funzione

- **Password utente (password di apertura)**: una volta impostata, chiunque apra questo PDF deve inserire questa password — questa è la prima porta del file;
- **Password proprietario (opzionale)**: impostata separatamente dalla password utente; chi possiede la password proprietario può modificare la configurazione delle autorizzazioni del file.

## Controllo preciso delle autorizzazioni

Quando si attiva la crittografia, puoi anche controllare quali operazioni sono consentite per questo PDF:

- **Consenti stampa** (abilitato per impostazione predefinita): se è consentito stampare questo file;
- **Consenti copia** (disabilitato per impostazione predefinita): se è consentito copiare il testo o le immagini in esso contenuti;
- **Consenti modifica** (disabilitato per impostazione predefinita): se è consentito modificare il contenuto del file.

Ad esempio, quando invii un报价单 all'esterno, puoi abilitare la stampa, disabilitare la copia e la modifica, comodo per l'altra parte per rivedere e riducendo il rischio di utilizzo diretto del contenuto.

## Standard di crittografia AES

La crittografia utilizza **AES-256** per impostazione predefinita, e può anche essere commutata su AES-128 per una migliore compatibilità. La crittografia viene eseguita localmente sul dispositivo; il contenuto del PDF non verrà caricato su alcun server.
