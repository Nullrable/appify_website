---
title: "OCR della fotocamera: punta, cattura, traduci"
description: "OCR sul dispositivo tramite vision_text_recognition con orientamento accurato a livello hardware, anche quando l'interfaccia del dispositivo è bloccata in verticale."
date: 2026-09-03
lang: it
slug: camera-ocr
icon: camera
---

L'OCR della fotocamera esegue il riconoscimento localmente utilizzando un pacchetto `vision_text_recognition` forkato che supporta le scritture latine, cinesi (semplificata e tradizionale), giapponese e coreana. Nulla viene caricato per il riconoscimento. Ogni blocco restituito dal motore OCR porta il proprio rettangolo di delimitazione e il testo rilevato; la pagina dei risultati dipinge la traduzione sulle stesse coordinate, preservando il layout originale.

## Pipeline di acquisizione

1. **Inizializzazione della fotocamera.** Il controller della fotocamera viene inizializzato in modo asincrono con stati espliciti `initializing / ready / failed`. In caso di fallimento viene mostrato un pulsante di ripetizione che esegue nuovamente l'inizializzazione senza rientrare nella guardia `initializing`.
2. **Orientamento reale.** `DeviceOrientation` di iOS ed EXIF non sono affidabili quando l'app è bloccata in verticale. L'app legge l'accelerometro grezzo tramite `sensors_plus` e memorizza nella cache il frame più recente, in modo che l'otturatore catturi la vera direzione di impugnatura anche se l'UI è bloccata. L'orientamento EXIF viene quindi riconciliato con questa verità di terra.
3. **Otturatore.** Il tocco cattura con l'attuale rapporto di aspetto dell'anteprima. Il frame catturato viene ridotto a un bordo massimo configurabile prima dell'OCR — la maggior parte delle pagine ha bisogno di 1500–2000 px sul bordo lungo affinché il motore legga i caratteri piccoli senza gonfiare la memoria.
4. **Flash.** Nel mirino sono esposti quattro modalità — automatico, off, on e torcia — con il commutatore collegato all'API flash di sistema.

## Cosa restituisce l'OCR

- **Riquadri di delimitazione per blocco.** Ogni TextBlock ha il proprio rettangolo. La pagina dei risultati li utilizza per posizionare il testo tradotto esattamente sopra il testo sorgente.
- **Testo e ordine dei blocchi.** Testo della lingua sorgente per blocco, nell'ordine in cui il motore li ha emessi (dall'alto verso il basso, da sinistra a destra per impostazione predefinita).
- **Confidenza.** Ogni blocco porta la propria confidenza. I blocchi al di sotto di una soglia vengono renderizzati nella pagina dei risultati ma contrassegnati come "bassa confidenza" in modo che l'utente possa verificarli.

## Perché sul dispositivo

- **Privacy.** Le foto di insegne, contratti o moduli medici non lasciano mai il dispositivo per l'OCR.
- **Latenza.** Nessun round-trip di rete. L'OCR di una tipica pagina scattata col telefono si completa in meno di un secondo su un dispositivo recente.
- **Offline.** L'OCR funziona in aereo, in cantina e in zone senza copertura. Lo stesso motore che esegue il riconoscimento funziona interamente dal modello sul dispositivo.

## Migliori pratiche per un OCR accurato

1. **Luce uniforme e indiretta.** La luce della finestra supera i faretti a soffitto. Le ombre che attraversano la pagina sono la causa più comune di caratteri letti in modo errato.
2. **Tocca per mettere a fuoco.** Se l'autofocus seleziona il soggetto sbagliato (la scrivania, un dito, il bordo della pagina), tocca il centro del testo prima della cattura.
3. **Pagine piatte.** Le pagine che si incurvano verso il dorso del libro perdono caratteri vicino alla rilegatura. Premi la pagina piatta con l'altra mano quando possibile.
4. **Una lingua per cattura.** Le pagine con scritture miste funzionano in un unico passaggio, ma una pagina che mescola latino con giapponese verticale è meglio suddividerla in due catture.
