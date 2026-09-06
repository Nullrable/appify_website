---
title: "Détection des doublons exacts"
description: "Comment CleanPhoto regroupe les photos de dimensions identiques prises dans la même seconde, et pourquoi cette règle locale trouve les vraies copies sans faux positifs."
date: 2026-09-06
lang: fr
slug: duplicates
---

## Détection des doublons exacts

Les doublons exacts sont les photos les plus faciles à supprimer et les plus faciles à rater. CleanPhoto les repère avec une règle simple et transparente qui s'exécute entièrement sur votre appareil : les photos de dimensions en pixels identiques, prises dans la même seconde exactement, appartiennent au même groupe.

### Comment fonctionne le regroupement

Lors d'un scan, CleanPhoto parcourt votre photothèque et construit une clé pour chaque photo à partir de sa largeur, sa hauteur et sa seconde de prise de vue. Les photos partageant la même clé sont placées dans un groupe. Une photo enregistrée deux fois — par un ré-enregistrement, un import depuis un autre appareil ou un conflit de synchronisation cloud — porte les mêmes dimensions et le même horodatage que l'originale, donc les deux copies atterrissent dans le même groupe, sans rien d'autre.

### Passer un groupe en revue

Chaque groupe affiche toutes les copies avec leur taille de fichier, pour voir d'un coup d'œil quelle copie est l'originale de meilleure qualité. Marquez les copies à supprimer, confirmez, et les photos sont supprimées via la photothèque du système. Les photos conservées ne sont pas modifiées.

### Pourquoi dimensions et temps plutôt qu'une analyse de contenu

L'appariement sur dimensions et seconde de capture est rapide, prévisible et respectueux de la vie privée. Il ne produit aucun faux positif entre photos différentes : que deux photos distinctes soient enregistrées avec des dimensions identiques dans la même seconde reste extrêmement rare. Et comme aucun contenu d'image n'a besoin d'être analysé ou comparé, le scan ne lit même pas les données de pixels — il fonctionne uniquement à partir des métadonnées de la photothèque.

### Tout reste sur votre appareil

La détection de doublons s'exécute localement sur votre téléphone. Aucune photo, aucune vignette, aucune métadonnée ne quitte jamais votre appareil, et aucun compte n'est requis.
