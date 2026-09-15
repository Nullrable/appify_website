---
title: "Cambiare velocità del video - cursore continuo da 0,25× a 4×"
description: "Un unico cursore dal rallenty 0,25× all'accelerato 4×. Per tutorial al rallentatore come per demo accelerate. Esporta un nuovo video, l'originale resta intatto."
date: 2026-09-15
lang: it
slug: speed
---

## Cambiare velocità del video

Se il ritmo non torna, la storia si sgonfia. Tutorial troppo veloce, il pubblico non segue. Demo troppo lenta, ci si annoia. Lo strumento di velocità offre un unico cursore, continuo, da 0,25× a 4×. Trascinalo piano fino al tempo che ti convince.

### Rallenty

Tra 0,25× e 1×, perfetto per spiegare un gesto al rallentatore. In una lezione online mostrano un movimento della mano, a 0,5× il pubblico vede finalmente il dettaglio. In un video sportivo, un istante chiave a 0,25×, ogni fibra diventa leggibile.

### Accelerato

Tra 1× e 4×, ottimo per comprimere attese o saltare parti inutili. Un timelapse di dieci minuti, portato a 4×, diventa più incisivo. In una demo, i passaggi noiosi si sorvolano.

### Come si usa

Scegli una clip, appare un cursore circolare. Trascinalo nella posizione che vuoi: sul cursore compare il moltiplicatore attuale. Non ti convince? Lascia e ricomincia. Dopo la conferma, esporta; il video originale resta intatto.

### E l'audio?

La velocità cambia immagine e audio insieme. Quando l'immagine rallenta, anche l'audio rallenta (la voce suona lenta, il tono scende). Quando l'immagine accelera, anche l'audio accelera (la voce suona compressa, il tono sale). È il comportamento standard del filtro atempo di ffmpeg: audio e immagine cambiano in sincrono, il tono segue il moltiplicatore. Se vuoi cambiare solo l'immagine senza toccare l'audio, usa prima lo strumento di velocità per generare il video, poi l'estrattore audio per salvare la traccia sonora originale dal video sorgente, e infine combinale in un'app di terze parti.
