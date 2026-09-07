---
title: "Come scegliere la qualità di compressione: confronto dei livelli 10–90"
description: "Confronto dell'effetto reale dei 9 livelli predefiniti (10/20/30/40/50/60/70/80/90) e del cursore libero 1–99, e quale livello usare in ciascun caso."
date: 2026-09-07
lang: it
slug: compress-quality
---

## Perché ci sono così tanti livelli

La compressione delle immagini è un'operazione con perdita: più dettaglio si scarta, più piccolo è il file e peggiore è la qualità. La questione è "quanto è ragionevole scartare": i criteri per la condivisione sui social network e per la stampa fotografica sono completamente diversi. La funzione in Image Converter offre 9 livelli predefiniti da 10 a 90, più un cursore libero 1–99, coprendo dalla compressione estrema fino all'archiviazione di alta qualità.

## Effetto reale dei 9 livelli predefiniti

### 10–30: compressione estrema

- **Dimensione**: 5–15% dell'originale
- **Qualità**: perdita visibile a occhio nudo, adatta a screenshot di solo testo o blocchi di colore
- **Scenari tipici**: sticker di WeChat, screenshot lunghi di solo testo, condivisione occasionale

Esempio: una foto da 5 MB compressa al livello 10 può restare tra 200 e 400 KB. Ma i dettagli di volti e paesaggi diventano sfocati.

### 40–60: uso quotidiano per la condivisione

- **Dimensione**: 15–30% dell'originale
- **Qualità**: la perdita si nota con attenzione, impercettibile in una visione normale
- **Scenari tipici**: condivisione sui social network e in chat

**Il livello 60 è il punto ideale per la maggior parte dei casi**: la perdita di qualità è quasi impercettibile e le dimensioni si riducono molto.

### 70–80: livelli consigliati per l'uso generale

- **Dimensione**: 30–50% dell'originale
- **Qualità**: praticamente impossibile distinguere la differenza dall'originale a occhio nudo
- **Scenari tipici**: quando serve mantenere una buona qualità e allo stesso tempo controllare le dimensioni

Il livello 70 è adatto alla condivisione professionale; il livello 80 è ideale come pre-elaborazione prima di archiviare foto importanti.

### 90: praticamente senza perdita

- **Dimensione**: 60–80% dell'originale
- **Qualità**: praticamente identica all'originale
- **Scenari tipici**: materiale d'archivio e pre-elaborazione prima della stampa

Sopra 90 il guadagno di qualità non si percepisce e, inoltre, un JPG a 100 occupa più di uno a 90.

## A cosa serve il cursore libero 1–99

I 9 livelli predefiniti coprono il 90% dei casi, ma a volte serve un controllo più fine:

- **65**: un po' meglio di 60, un po' più leggero di 70
- **75**: un po' meglio di 70, un po' più leggero di 80
- **85**: un po' meglio di 80 e ancora controllabile
- **50 / 55**: per trovare un punto intermedio più preciso tra 40 e 60

## Decidi il livello confrontando in tempo reale

Dopo aver selezionato un'immagine, l'applicazione la comprime subito con la qualità corrente e mostra:

- **Dimensione originale** vs **dimensione compressa** (KB)
- **Rapporto di compressione** (percentuale)
- Aggiornamento in tempo reale: muovendo il cursore vedrai subito il nuovo risultato

Non scegliere il livello basandoti su supposizioni; **confronta con i tuoi occhi** e scegli quello più adatto.

## Livelli consigliati per tipo di contenuto

| Tipo di contenuto | Livello consigliato | Motivo |
|---|---|---|
| Screenshot solo testo | 30–50 | I bordi del testo richiedono nitidezza, ma lo sfondo è semplice |
| Foto normale | 60–75 | Equilibrio tra qualità e dimensione |
| Ritratto | 75–85 | La texture della pelle non sopporta compressioni basse |
| Foto di paesaggio | 60–80 | Ci sono molte sfumature di colore; da 60 in su non compaiono blocchi |
| Logo / grafica | Usa PNG | I vettoriali o i blocchi di colore non dovrebbero andare in JPG |
| Screenshot di registrazione schermo | 40–60 | Molto testo e icone; con qualità bassa diventano sfocati |

