---
title: "19 langues : couverture ML Kit, sélecteur et détection automatique"
description: "La traduction sur l'appareil ML Kit prend en charge 19 langues. Le sélecteur inclut la recherche, les langues récemment utilisées et une option de détection automatique pour la source."
date: 2026-09-03
lang: fr
slug: language-coverage
icon: globe
---

L'application traduit entre 19 langues sur l'appareil via Google ML Kit. La liste complète : arabe, chinois (simplifié), tchèque, néerlandais, anglais, français, allemand, croate, hongrois, italien, japonais, coréen, polonais, portugais, roumain, russe, slovaque, slovène et espagnol. De nouvelles langues sont ajoutées à mesure que ML Kit publie des modèles sur l'appareil pour celles-ci.

## Sélecteur de langue

Le sélecteur est le point d'entrée unique pour choisir les langues source et cible, accessible depuis la barre de langue en haut de la page caméra ou de la page de traduction de texte.

- **Recherche.** Tapez dans le champ de recherche pour filtrer par nom anglais ou code de langue. La liste se met à jour à mesure que vous tapez.
- **Récemment utilisées.** La section supérieure montre les langues que vous avez utilisées lors des dernières traductions. La sélection les déplace automatiquement en haut.
- **Détection automatique (source uniquement).** Apparaît comme la première option dans le sélecteur de source. La sélectionner fait que l'application devine la langue source par capture (voir ci-dessous).
- **Toutes les langues.** Sous la section récemment utilisées se trouve la liste complète des 19 langues prises en charge avec leurs drapeaux de pays.

Les sélecteurs source et cible peuvent être ouverts indépendamment. Choisir une source identique à la cible le met en évidence dans le sélecteur pour éviter une traduction accidentelle de soi à soi.

## Détection automatique pour la source

Lorsque la source est réglée sur Détection automatique, l'application doit choisir une langue source ML Kit spécifique par traduction. Deux stratégies sont utilisées :

- **Pour les captures photo.** Les indices de langue par bloc du moteur OCR sont agrégés ; la langue majoritaire entre les blocs devient la source ML Kit. Les pages monolingues se résolvent proprement ; les pages à écritures mixtes reviennent à une valeur par défaut.
- **Pour la traduction de texte.** Une heuristique au niveau de la classe de caractères en Dart compte les caractères par classe d'écriture : caractères Han → chinois simplifié, kana → japonais, hangul → coréen, latin → anglais, cyrillique → russe, écriture arabe → arabe, etc. Une entrée vide ou uniquement des espaces passe par défaut à l'anglais.

La détection automatique n'échoue jamais en silence. La page a toujours une langue source ML Kit spécifique lorsque la traduction s'exécute.

## Pourquoi 19 et pas plus

Le décompte est limité par ce que ML Kit publie comme modèles sur l'appareil. Les langues hors de cette liste ne peuvent pas être traduites sur l'appareil avec ML Kit. La liste est curated : chaque entrée a un modèle téléchargeable de 10–50 Mo. Le sélecteur exclut les langues que ML Kit ne prend pas en charge, même si ce sont des codes BCP 47 valides.

## i18n de l'interface

L'interface de l'application elle-même (menus, paramètres, messages d'erreur) est traduite en 10 langues : arabe, anglais, allemand, coréen, français, japonais, russe, espagnol, vietnamien et chinois (simplifié). Les langues de traduction sont un sur-ensemble de l'ensemble i18n pour plusieurs paires courantes (en ↔ ja, en ↔ zh, en ↔ es, en ↔ fr).
