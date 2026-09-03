---
title: "19 lingue: copertura ML Kit, selettore e rilevamento automatico"
description: "La traduzione sul dispositivo ML Kit supporta 19 lingue. Il selettore include ricerca, usate di recente e un'opzione di rilevamento automatico per la sorgente."
date: 2026-09-03
lang: it
slug: language-coverage
icon: globe
---

L'app traduce tra 19 lingue sul dispositivo tramite Google ML Kit. Elenco completo: arabo, cinese (semplificato), ceco, olandese, inglese, francese, tedesco, croato, ungherese, italiano, giapponese, coreano, polacco, portoghese, rumeno, russo, slovacco, sloveno e spagnolo. Nuove lingue vengono aggiunte man mano che ML Kit pubblica modelli sul dispositivo per esse.

## Selettore di lingua

Il selettore è l'unico punto di ingresso per scegliere le lingue sorgente e destinazione, accessibile dalla barra delle lingue in cima alla pagina della fotocamera o alla pagina di traduzione testo.

- **Ricerca.** Digita nel campo di ricerca per filtrare per nome inglese o codice lingua. L'elenco si aggiorna mentre digiti.
- **Usate di recente.** La sezione superiore mostra le lingue che hai usato nelle ultime traduzioni. La selezione le sposta automaticamente in cima.
- **Rilevamento automatico (solo sorgente).** Appare come prima opzione nel selettore sorgente. Selezionandolo, l'app indovina la lingua sorgente per cattura (vedi sotto).
- **Tutte le lingue.** Sotto la sezione usate di recente c'è l'elenco completo delle 19 lingue supportate con le rispettive bandiere.

I selettori sorgente e destinazione possono essere aperti indipendentemente. Scegliere una sorgente uguale alla destinazione lo evidenzia nel selettore per evitare un'auto-traduzione accidentale.

## Rilevamento automatico per la sorgente

Quando la sorgente è impostata su Rilevamento automatico, l'app deve scegliere una lingua sorgente ML Kit specifica per traduzione. Vengono utilizzate due strategie:

- **Per le catture foto.** Gli hint di lingua per blocco del motore OCR vengono aggregati; la lingua maggioritaria tra i blocchi diventa la sorgente ML Kit. Le pagine mono-lingua si risolvono in modo pulito; le pagine con scritture miste ricadono su un valore predefinito.
- **Per la traduzione del testo.** Un'euristica a livello di classe di caratteri in Dart conta i caratteri per classe di scrittura: caratteri Han → cinese semplificato, kana → giapponese, hangul → coreano, latino → inglese, cirillico → russo, scrittura araba → arabo, ecc. L'input vuoto o solo spazi è predefinito in inglese.

Il rilevamento automatico non fallisce mai silenziosamente. La pagina ha sempre una lingua sorgente ML Kit specifica quando la traduzione viene eseguita.

## Perché 19 e non di più

Il conte è delimitato da ciò che ML Kit pubblica come modelli sul dispositivo. Le lingue al di fuori di questo elenco non possono essere tradotte sul dispositivo con ML Kit. L'elenco è curated: ogni voce ha un modello scaricabile da 10–50 MB. Il selettore esclude le lingue che ML Kit non supporta, anche se sono codici BCP 47 validi.

## i18n dell'interfaccia

L'interfaccia dell'app stessa (menu, impostazioni, messaggi di errore) è tradotta in 10 lingue: arabo, inglese, tedesco, coreano, francese, giapponese, russo, spagnolo, vietnamita e cinese (semplificato). Le lingue di traduzione sono un sovrainsieme dell'insieme i18n per diverse coppie comuni (en ↔ ja, en ↔ zh, en ↔ es, en ↔ fr).
