---
title: "Overlay a blocchi: traduzioni rese nella loro posizione sulla foto"
description: "La pagina dei risultati dipinge ogni blocco di testo tradotto sopra il suo rettangolo sorgente, preservando il layout originale."
date: 2026-09-03
lang: it
slug: block-overlay
icon: layers
---

La pagina dei risultati rende le traduzioni sopra la foto originale, un overlay per blocco OCR. La traduzione di ogni blocco appare nel rettangolo esatto in cui il motore OCR ha rilevato il testo sorgente. L'overlay supporta un cursore di trasparenza in modo che gli utenti possano confrontare l'originale e la traduzione fianco a fianco senza lasciare la pagina.

## Come funziona l'overlay

1. **Traduzione per blocco.** Ogni TextBlock rilevato viene inviato a ML Kit come lavoro di traduzione indipendente. Le traduzioni confluiscono nell'overlay man mano che vengono completate; l'utente vede i blocchi «diventare» tradotti nell'ordine in cui il motore li termina.
2. **Posizionamento per rettangolo.** Il testo tradotto va a capo e viene posizionato per adattarsi al rettangolo sorgente. Se un blocco è stretto, la traduzione va a capo su più righe e può leggermente traboccare dal rettangolo sorgente; il motore preferisce la leggibilità alla stretta aderenza.
3. **Tocca per mettere a fuoco.** Toccare un blocco tradotto apre un foglio inferiore che scorre fino allo stesso blocco nella vista «Traduzione completa», così che gli utenti possano leggere traduzioni più lunghe senza zoomare sulla foto.
4. **Trasparenza regolabile.** Un cursore controlla l'opacità dello strato overlay. Scorrere a completamente trasparente per vedere la foto originale, completamente opaco per leggere le traduzioni.

## Anatomia della pagina dei risultati

- **Barra superiore.** Un pulsante di chiusura. Nessun altro controllo — la pagina dei risultati è volutamente minimal.
- **Area principale.** La foto originale a schermo intero, con lo strato overlay reso sopra. InteractiveViewer permette zoom e pan per inspect il testo piccolo.
- **Foglio inferiore.** Tre stati: compresso (predefinito), medio (circa metà schermo), espanso (la maggior parte dello schermo). Lo stato compresso mostra una piccola maniglia e un riepilogo; medio mostra le traduzioni per blocco come schede; espanso mostra tutte le traduzioni di blocco a larghezza intera.
- **Due schede nel foglio.** Una scheda «Blocks» mostra le traduzioni raggruppate per blocco OCR, e una scheda «Full» mostra la traduzione completa del paragrafo joined.

## Perché la traduzione per blocco

- **Scritture miste.** Una pagina con titoli in inglese e didascalie in giapponese beneficia di suggerimenti di lingua sorgente per blocco. La posizione e la classe di scrittura del blocco informano il motore su quale modello sorgente usare.
- **Isolamento dei fallimenti.** Il fallimento di un singolo blocco non blocca il resto della pagina. L'overlay contrassegna i blocchi falliti con un piccolo badge di avvertimento per far sapere agli utenti quali richiedono attenzione manuale.
- **Preservazione del layout.** Gli utenti che leggono la sorgente possono localizzare la traduzione corrispondente a occhio — utile per menu, cartelli ed etichette dove la relazione spaziale conta.

## Comportamento di modifica

L'overlay viene reso sopra la foto, non incorporato. Il salvataggio nella cronologia memorizza sia la foto originale che il record di traduzione per blocco. L'apertura di una voce salvata riproduce l'overlay esattamente; la modifica della foto non è supportata.
