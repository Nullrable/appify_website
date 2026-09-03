---
title: "Come funziona la traduzione offline sul tuo iPhone"
description: "Una panoramica completa di come l'app completa una traduzione senza caricare un singolo byte di testo sorgente su un server."
date: 2026-09-03
lang: it
slug: how-offline-translation-works
---

## Come funziona la traduzione offline sul tuo iPhone

La pipeline di traduzione dell'app viene eseguita interamente sul dispositivo. Nessuna foto, nessun risultato OCR e nessuna richiesta di traduzione lascia l'iPhone. Questo articolo spiega cosa significa davvero «sul dispositivo», dove vivono i modelli e quali compromessi comporta eseguire la traduzione localmente.

## Le parti che girano sul dispositivo

Ci sono tre lavori indipendenti che si verificano sul telefono per una traduzione dalla fotocamera:

1. **OCR.** Un pacchetto `vision_text_recognition` forkato esegue il riconoscimento del testo localmente. Supporta le scritture latine, cinesi (semplificata e tradizionale), giapponese e coreana. Ogni blocco di testo riconosciuto porta il proprio rettangolo di delimitazione e il testo rilevato.
2. **Traduzione.** Il motore di traduzione sul dispositivo di Google ML Kit prende l'output OCR e produce testo tradotto. Il motore è fornito come modello linguistico scaricabile per coppia di lingue; l'app scarica i modelli su richiesta e li mette in cache sul disco.
3. **Rendering.** La pagina dei risultati dipinge ogni blocco tradotto sopra la foto originale, usando i rettangoli di delimitazione restituiti dal motore OCR. Non è necessario alcun roundtrip al server per renderizzare l'overlay — l'immagine, i blocchi sorgente e le traduzioni vivono tutti in memoria sul dispositivo.

## Perché questo è importante

- **Privacy.** Le foto di insegne stradali, contratti, moduli medici e corrispondenza personale rimangono sul dispositivo. Non c'è alcun passo di caricamento da nessuna parte, quindi non c'è nulla da far trapelare, citare in giudizio o vendere.
- **Latenza.** Nessun roundtrip di rete. L'OCR di una tipica pagina scattata con lo smartphone si completa in molto meno di un secondo su un dispositivo recente, e la traduzione dei risultati per blocco viene trasmessa man mano che ogni blocco termina.
- **Offline.** La pipeline gira in aereo, in cantina, in galleria, in treno, in un paese senza copertura. Il motore OCR e il motore di traduzione vengono scaricati una volta e riutilizzati indefinitamente; nulla viene recuperato per cattura.
- **Costo.** L'app non paga per carattere a un'API di traduzione, quindi la funzione non ha bisogno di un paywall basato sull'uso o di un limite mensile di caratteri per restare sostenibile. Il livello gratuito è la stessa pipeline.

## Dove vivono i modelli

ML Kit pubblica modelli di traduzione sul dispositivo per 19 lingue. Ogni modello è grande circa 10–50 MB. Quando scegli una lingua sorgente o di destinazione, l'app scarica il modello corrispondente nella sandbox locale dell'app al primo utilizzo. Il modello persiste attraverso i riavvii dell'app; eliminarlo recupera immediatamente lo spazio di archiviazione.

L'elenco completo delle lingue supportate: arabo, cinese (semplificato), ceco, olandese, inglese, francese, tedesco, croato, ungherese, italiano, giapponese, coreano, polacco, portoghese, rumeno, russo, slovacco, sloveno e spagnolo.

## Cosa viene caricato (e cosa no)

- **Non caricato.** Foto, testo OCR, testo tradotto, voci della cronologia, stato del modello linguistico. Nessuno di questi lascia il dispositivo.
- **Caricato.** Rapporti anonimi sugli arresti anomali e contatori aggregati (es. «richieste di traduzione al giorno»). I rapporti sugli arresti anomali non includono contenuti dell'utente; se un rapporto futuro dovesse contenere contenuti, sarebbe un bug e dovrebbe essere segnalato.

## Compromessi dell'esecuzione locale

- **Elenco di lingue limitato.** Sono supportate solo le lingue che ML Kit pubblica come modelli sul dispositivo. L'elenco è curato e attualmente ha 19 voci.
- **Download del modello richiesto.** Una prima traduzione per una coppia di lingue attiva un download una tantum. La pagina del gestore dei modelli mostra lo stato e ti permette di pre-scaricare per viaggi offline.
- **Qualità.** La qualità della traduzione sul dispositivo è comparabile alla traduzione cloud per testi brevi e ben formati. Paragrafi lunghi o gergo specifico del dominio possono differire da un motore cloud ottimizzato per quel dominio.
- **Calcolo.** L'OCR e la traduzione usano la CPU e la Neural Engine del telefono. L'impatto sulla batteria per una singola cattura è piccolo, ma misurabile per flussi di lavoro in lotti.

## Cosa significa per te

Se hai mai esitato a fotografare un documento sensibile perché la foto sarebbe finita sul server di qualcun altro, quell'esitazione è il motivo per cui l'app esiste. Ogni parte della pipeline viene eseguita localmente, e il modello di dati dell'app è costruito sul presupposto che nulla lasci il dispositivo a meno che l'utente non scelga esplicitamente di condividere un risultato.
