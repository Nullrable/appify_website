---
title: Blocco PIN e Biometrico - Due Strati Prima di Vedere il Saldo
description: Money Tracker può richiedere un PIN a 6 cifre ogni volta che torna in primo piano, con Face ID, Touch ID o impronta digitale come percorso più rapido sopra. Imposta il PIN una volta nelle Impostazioni e il blocco scatta a ogni ritorno.
date: 2026-09-10
lang: it
slug: pin-and-biometric-app-lock
---

Money Tracker esce dalla fabbrica con il blocco disattivato. Attivalo nelle Impostazioni, scegli sei cifre come PIN, e da quel momento il PIN sbarra l'ingresso a ogni ritorno nell'app.

Il PIN è il pavimento: funziona su qualsiasi dispositivo, senza dipendere dall'hardware. Sopro si stende uno strato biometrico opzionale: Face ID o Touch ID su iOS, impronta digitale (o volto, quando il dispositivo lo espone tramite la stessa API) su Android. Il PIN va impostato prima di poter attivare la biometria, e cancellare il PIN porta via anche la biometria. Se un dito bagnato o una mascherina impedisce al prompt biometrico di funzionare, il sistema ripiega sul codice del dispositivo, non sul PIN dell'app, quindi la catena di fiducia resta ancorata alla piattaforma.

Il blocco scatta ogni volta che l'app torna in primo piano, non solo all'apertura a freddo. Un passaggio veloce a un'altra app, un'occhiata a una notifica, un'ora fuori e poi il ritorno: ognuno riporta su il blocco. Finché il PIN o la biometria non sono soddisfatti, i conti, le transazioni, le statistiche e le Impostazioni restano nascosti.
