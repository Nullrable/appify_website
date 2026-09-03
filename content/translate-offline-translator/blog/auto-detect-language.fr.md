---
title: "Détection automatique de la langue : comment l'application choisit une langue source"
description: "Lorsque le sélecteur de source est réglé sur Détection automatique, l'application devine la langue source par traduction. Voici comment la devinette est faite."
date: 2026-09-03
lang: fr
slug: auto-detect-language
---

## Détection automatique de la langue : comment l'application choisit une langue source

Détection automatique est la première option du sélecteur de langue source. La sélectionner ne signifie pas que l'application n'a pas d'opinion sur la source — cela signifie que l'application choisira une langue source ML Kit spécifique par traduction, en utilisant soit des indices de langue par bloc OCR (pour les photos), soit une heuristique de jeu de caractères au niveau Dart (pour le texte).

## Pourquoi par traduction

Le traducteur sur appareil de ML Kit nécessite qu'une langue source spécifique soit téléchargée avant que la traduction puisse s'exécuter. Détection automatique ne peut pas signifier « traduire depuis n'importe quelle langue » ; elle doit se résoudre à l'une des 19 langues prises en charge par traduction. L'application effectue cette résolution automatiquement.

## Comment cela fonctionne pour les photos

Pour les captures de caméra, le moteur OCR émet un indice de langue par bloc pour chaque bloc reconnu. Les indices sont agrégés sur la page ; la langue majoritaire devient la langue source ML Kit pour cette traduction.

Les pages monolingues se résolvent proprement : une page de légendes coréennes se résout en coréen, une page de texte français se résout en français. Les pages à scripts mixtes se rabattent sur une valeur par défaut si aucune langue unique ne domine.

La traduction par bloc utilise ces indices de manière plus granulaire. Une page avec des titres anglais et des légendes japonaises peut être traduite avec la source appropriée par bloc, même lorsque la langue majoritaire n'est pas claire.

## Comment cela fonctionne pour le texte

Pour les traductions de texte, l'application exécute une heuristique au niveau Dart qui compte les caractères par classe de script :

- Caractères Han → Chinois simplifié
- Kana → Japonais
- Hangul → Coréen
- Latin → Anglais
- Cyrillique → Russe
- Arabe → Arabe

L'entrée mixte suit la classe de caractères majoritaire. Une entrée vide ou contenant uniquement des espaces est par défaut en anglais.

L'heuristique est rapide (un seul balayage linéaire sur l'entrée) et s'exécute avant l'appel ML Kit. La langue source choisie est ensuite utilisée pour la requête de traduction.

## Quand la détection automatique échoue

- **Latin sans signes diacritiques.** Un extrait purement latin de 10 caractères pourrait être de l'anglais, du français, de l'allemand, de l'italien, du portugais, de l'espagnol, du néerlandais, du polonais, du tchèque ou plusieurs autres. L'heuristique choisit l'anglais par défaut ; si la source n'est pas l'anglais, la qualité de la traduction peut en souffrir. Fixez manuellement la langue source pour les courts extraits latins.
- **Cyrillique sans spécificité.** Le cyrillique pourrait être du russe, de l'ukrainien ou un autre script slave. L'application choisit le russe.
- **Ambiguïté du script Han.** Le chinois simplifié et traditionnel partagent la plupart de leurs caractères. Un court extrait de caractères Han ne peut pas être résolu à l'un sans contexte plus long. L'application choisit le chinois simplifié.

Pour ces cas, fixez manuellement la langue source à partir du sélecteur.

## La détection automatique n'est jamais silencieuse

La page a toujours une langue source ML Kit spécifique lorsque la traduction s'exécute. Si l'heuristique renvoie une valeur par défaut erronée, la traduction peut être erronée ; si elle renvoie la bonne langue, la traduction fonctionne. Il n'y a aucun mode dans lequel l'application « ne parvient pas à choisir une langue » — elle tombe sur une valeur par défaut et traduit.

## Conseil pratique

Pour les longs documents monolingues, la détection automatique fonctionne. Pour les courts extraits ou les pages à scripts mixtes, fixez manuellement la langue source à partir du sélecteur. Le sélecteur mémorise vos langues récentes en haut, donc la deuxième utilisation d'une langue est un seul appui.
