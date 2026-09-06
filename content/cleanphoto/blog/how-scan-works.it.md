---
title: "Come CleanPhoto scansiona la tua libreria senza caricare nemmeno una foto"
description: "Uno sguardo dentro i tre rilevatori su dispositivo — duplicati esatti, foto simili e screenshot — e le regole semplici che usano, per sapere esattamente cosa succede quando premi Scansiona."
date: 2026-09-06
lang: it
slug: how-scan-works
---

## Come CleanPhoto scansiona la tua libreria senza caricare nemmeno una foto

La maggior parte dei pulitori di foto chiede fiducia. CleanPhoto prova a guadagnarsela con la trasparenza: ogni scansione gira sul tuo dispositivo, lavora dai metadati della libreria e segue regole abbastanza semplici da spiegare in pochi paragrafi. Ecco esattamente cosa succede quando premi Scansiona.

### Tre rilevatori, tre domande

CleanPhoto esegue tre scansioni, ognuna risponde a una domanda diversa. I duplicati esatti chiedono "questa foto è stata salvata due volte?" Le foto simili chiedono "era una raffica o un rapido ritento?" Gli screenshot chiedono "questa immagine è solo temporanea?" Puoi lanciarle in qualsiasi ordine, e ognuna presenta i risultati come gruppi da rivedere.

### Regola uno: stessa dimensione, stesso secondo

Il rilevatore di duplicati costruisce una chiave per ogni foto a partire da larghezza, altezza e secondo di scatto. Le foto con la stessa chiave finiscono in un gruppo. Una foto salvata di nuovo, importata o nata da un conflitto di sincronizzazione cloud mantiene dimensioni e timestamp dell'originale, quindi entrambe le copie si incontrano nello stesso gruppo. Due foto diverse con dimensioni identiche nello stesso secondo è rarissimo — ecco perché questa regola trova copie vere senza falsi positivi.

### Regola due: entro dieci secondi

Il rilevatore di foto simili ordina la libreria per orario di scatto e percorre la timeline. Finché ogni foto è scattata entro 10 secondi dalla precedente, entra nello stesso gruppo; appena l'intervallo supera i 10 secondi, la catena si chiude. Corrisponde a come avvengono davvero raffiche e ritenti — una serie rapida, una pausa, poi qualcos'altro. I gruppi da una foto sola vengono scartati.

### Regola tre: album, titolo, percorso

Il rilevatore di screenshot funziona in modo diverso per piattaforma. Su iOS legge direttamente l'album Screenshot di sistema. Su Android, dove lo storage varia per produttore, controlla prima i nomi degli album e, senza un album di screenshot, ispeziona titolo e percorso file di ogni immagine alla ricerca dei pattern di nomi dei dispositivi. I risultati sono raggruppati per giorno, il più recente prima.

### Dimensioni dei file, caricate prima della revisione

Prima che si apra qualsiasi schermata di revisione, CleanPhoto precarica la dimensione del file di ogni foto. In un gruppo, il file più grande è quasi sempre la copia che ha conservato più dettagli, quindi gli elementi sono ordinati per dimensione e il candidato migliore sta in cima. Questo unico segnale trasforma "quale di queste otto è la migliore?" in "questa va bene?".

### Cosa non succede mai

Nessuna scansione legge il contenuto dei pixel per analizzarlo, nessuna foto o anteprima lascia il tuo dispositivo, e non serve alcun account. Le eliminazioni avvengono solo dopo la tua conferma esplicita e passano dalla libreria foto di sistema — l'app non rimuove mai nulla da sola. Internet serve solo a due cose: mostrare pubblicità nella versione gratuita e gestire l'abbonamento Pro.
