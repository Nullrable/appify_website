---
title: "Elenco completo dei formati - 10 ingressi audio + 4 uscite audio + 8 video"
description: "Ogni formato supportato dall'editor audio in un unico posto. 10 ingressi audio: MP3, WAV, M4A, AAC, FLAC, OGG, Opus, AIFF, AMR, CAF. 4 uscite audio: MP3, WAV, FLAC, OGG. 8 contenitori video: MP4, MOV, M4V, AVI, MKV, WebM, FLV, WMV."
date: 2026-10-17
lang: it
slug: supported-formats
---

## Elenco completo dei formati

Questa pagina è un cheat sheet - ogni formato audio e video supportato dall'editor audio, e quando scegliere quale.

Ingresso e uscita sono due insiemi distinti: l'app può leggere 10 formati audio, ma ne scrive solo 4. I video sono in sola lettura e non vengono aperti direttamente dall'editor.

## Formati di ingresso audio (10)

L'editor apre questi 10 file audio - l'editing multitraccia, il miglioramento e la conversione (compress / merge) li accettano tutti come ingresso:

| Formato | Quando usarlo |
|---|---|
| **MP3** | Lettori universali, impianti auto, allegati email. Scelta predefinita. |
| **WAV** | Master lossless, ideale per missaggio, archiviazione o re-editing. |
| **M4A** | La variante contenitore di AAC, comune nell'ecosistema Apple. |
| **AAC** | Standard dell'ecosistema Apple, ottimo dettaglio in dimensioni ridotte. |
| **FLAC** | Lossless ma compresso, circa la metà della dimensione di WAV. |
| **OGG** | Contenitore open source, preferito da alcuni lettori professionali. |
| **Opus** | Codec moderno a bassa latenza, comune in riunioni vocali, podcast e streaming. |
| **AIFF** | Standard dell'ecosistema macOS / Logic, lossless. |
| **AMR** | Formato di registrazione delle vecchie telefonate mobili, standard 3GPP. |
| **CAF** | Contenitore Apple Core Audio, ideale per la post-elaborazione su iOS. |

## Formati di uscita audio (4)

L'editor, il miglioramento multitraccia e la conversione possono scrivere solo uno di questi 4 formati in esportazione:

| Formato | Quando usarlo |
|---|---|
| **MP3** | Standard universale, riconosciuto praticamente da ogni dispositivo e lettore. |
| **WAV** | Master lossless, ideale per re-editing o archiviazione. |
| **FLAC** | Lossless ma compresso, circa la metà della dimensione di WAV. |
| **OGG** | Contenitore open source, preferito da alcune apparecchiature professionali. |

## Formati video (8)

I file video **non** vengono aperti direttamente dall'editor. Servono solo come "fonte di tracce audio":

| Formato | Quando usarlo |
|---|---|
| **MP4** | Universale, riconosciuto praticamente da ogni dispositivo e lettore. |
| **MOV** | Standard dell'ecosistema Apple: iMovie, Final Cut, Logic lo accettano. |
| **M4V** | Contenitore video dell'era iTunes, si comporta come MP4 sui dispositivi Apple. |
| **AVI** | Contenitore storico, migliore compatibilità con le vecchie app Windows. |
| **MKV** | Contenitore open source, può contenere più tracce audio e sottotitoli. Ottimo per l'archiviazione HD. |
| **WebM** | Formato video web diffuso, open source. |
| **FLV** | Vecchio formato di streaming dell'era Flash, utile per materiale d'archivio. |
| **WMV** | Windows Media Video, ecosistema Windows. |

## Come scegliere

- **Condivisione universale** -> audio MP3, video MP4
- **Secondo passaggio nell'ecosistema Apple** -> video MOV
- **Archiviazione lossless** -> audio WAV o FLAC
- **Flussi web o open source** -> audio OGG, video WebM

## I video non vengono editati

La timeline dell'editor accetta solo clip audio. I file video possono solo fare da "fonte di tracce": l'editor non li taglia.

## Completamente locale

Che si tratti di audio o di video, tutta la decodifica, codifica e riscrittura avviene sull'iPhone. I file non lasciano il dispositivo.
