---
title: "Changement de vitesse vidéo - curseur continu de 0,25× à 4×"
description: "Un curseur unique, du ralenti 0,25× à l'accéléré 4×. Pour les tutoriels au ralenti comme pour les démos accélérées. Exporte une nouvelle vidéo, l'original reste intact."
date: 2026-09-15
lang: fr
slug: speed
---

## Changement de vitesse vidéo

Rythme mal calé, récit qui dérape. Tutoriel trop rapide, le public perd le fil. Démo trop lente, on baille. L'outil de vitesse offre un curseur unique, continu de 0,25× à 4×. Vous glissez lentement jusqu'au tempo qui vous convient.

### Ralenti

Entre 0,25× et 1×, parfait pour expliquer un geste au ralenti. Un cours en ligne montre un mouvement de main : passé à 0,5×, le public voit enfin le détail. Un instant sportif fort, passé à 0,25×, chaque fibre devient lisible.

### Accéléré

Entre 1× et 4×, parfait pour compresser une attente ou sauter un passage. Un timelapse de dix minutes, passé en 4×, devient percutant. Une démo avec des moments plats, on les survole.

### Comment l'utiliser

Choisissez un clip, un curseur en forme de point apparaît. Glissez-le à la position voulue — le multiplicateur courant s'affiche. Pas satisfait ? Lâchez, recommencez. Validez pour exporter, la vidéo source reste intacte.

### Et l'audio

La vitesse change l'image et le son ensemble. Quand l'image ralentit, le son ralentit aussi (la voix devient lente, la hauteur baisse). Quand l'image accélère, le son accélère aussi (la voix est compressée, la hauteur monte). C'est le comportement standard du filtre atempo de ffmpeg : audio et image changent ensemble, la hauteur suit le multiplicateur. Si vous voulez modifier uniquement l'image, passez d'abord par l'outil de vitesse pour générer la vidéo, puis par l'extracteur audio pour récupérer la bande-son d'origine depuis la vidéo source, enfin combinez les deux dans une application tierce.
