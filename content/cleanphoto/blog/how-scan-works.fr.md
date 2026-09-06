---
title: "Comment CleanPhoto scanne votre photothèque sans télécharger une seule photo"
description: "Un regard à l'intérieur des trois détecteurs sur appareil — doublons exacts, photos similaires et captures d'écran — et les règles simples qu'ils appliquent, pour savoir exactement ce qui se passe quand vous appuyez sur Scanner."
date: 2026-09-06
lang: fr
slug: how-scan-works
---

## Comment CleanPhoto scanne votre photothèque sans télécharger une seule photo

La plupart des nettoyeurs de photos demandent la confiance. CleanPhoto essaie de la mériter par la transparence : chaque scan tourne sur votre appareil, travaille à partir des métadonnées de la photothèque et suit des règles assez simples pour tenir en quelques paragraphes. Voici exactement ce qui se passe quand vous appuyez sur Scanner.

### Trois détecteurs, trois questions

CleanPhoto exécute trois scans, chacun répondant à une question différente. Les doublons exacts demandent « cette photo a-t-elle été enregistrée deux fois ? » Les photos similaires demandent « était-ce une rafale ou une reprise rapide ? » Les captures d'écran demandent « cette image n'est-elle que temporaire ? » Vous pouvez les lancer dans n'importe quel ordre, et chacun présente ses résultats en groupes à passer en revue.

### Règle un : même taille, même seconde

Le détecteur de doublons construit une clé pour chaque photo à partir de sa largeur, sa hauteur et sa seconde de prise de vue. Les photos partageant la même clé se retrouvent dans un groupe. Une photo ré-enregistrée, importée ou née d'un conflit de synchronisation cloud conserve dimensions et horodatage de l'originale, donc les deux copies se rencontrent dans le même groupe. Deux photos différentes aux dimensions identiques dans la même seconde, c'est extrêmement rare — voilà pourquoi cette règle trouve de vraies copies sans faux positifs.

### Règle deux : dans les dix secondes

Le détecteur de photos similaires trie la photothèque par date de prise de vue puis parcourt la chronologie. Tant que chaque photo est prise dans les 10 secondes suivant la précédente, elle rejoint le même groupe ; dès que l'écart dépasse 10 secondes, la chaîne se referme. Cela correspond à la réalité des rafales et reprises — une série rapide, une pause, puis autre chose. Les groupes d'une seule photo sont écartés.

### Règle trois : album, titre, chemin

Le détecteur de captures fonctionne différemment selon la plateforme. Sur iOS, il lit directement l'album Captures d'écran du système. Sur Android, où le stockage varie selon le fabricant, il vérifie d'abord les noms d'albums et, sans album de captures, inspecte le titre et le chemin de fichier de chaque image pour repérer les motifs de nommage des appareils. Les résultats sont regroupés par jour, le plus récent d'abord.

### Des tailles de fichier chargées avant la revue

Avant l'ouverture de tout écran de revue, CleanPhoto précharge la taille de fichier de chaque photo. Dans un groupe, le fichier le plus lourd est presque toujours la copie qui a gardé le plus de détails : les éléments sont donc triés par taille et le meilleur candidat figure en tête. Ce signal unique fait passer la question de « laquelle de ces huit est la meilleure ? » à « celle-ci est-elle bonne ? »

### Ce qui n'arrive jamais

Aucun scan ne lit le contenu des pixels pour analyse, aucune photo ni vignette ne quitte votre appareil, et aucun compte n'est requis. Les suppressions n'ont lieu qu'après votre confirmation explicite et passent par la photothèque du système — l'application ne retire jamais rien seule. Internet sert à deux choses seulement : afficher les publicités de la version gratuite et gérer l'abonnement Pro.
