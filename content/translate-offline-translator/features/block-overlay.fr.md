---
title: "Overlay de blocs : traductions rendues à leur place sur la photo"
description: "La page de résultats peint chaque bloc de texte traduit sur son rectangle source, préservant ainsi la mise en page d'origine."
date: 2026-09-03
lang: fr
slug: block-overlay
icon: layers
---

La page de résultats rend les traductions par-dessus la photo d'origine, une superposition par bloc OCR. La traduction de chaque bloc apparaît dans le rectangle exact où le moteur OCR a détecté le texte source. La superposition prend en charge un curseur de transparence afin que les utilisateurs puissent comparer l'original et la traduction côte à côté sans quitter la page.

## Comment fonctionne la superposition

1. **Traduction par bloc.** Chaque TextBlock détecté est envoyé à ML Kit en tant que tâche de traduction indépendante. Les traductions affluent dans la superposition au fur et à mesure qu'elles se terminent ; l'utilisateur voit les blocs « devenir » traduits dans l'ordre où le moteur les termine.
2. **Positionnement par rectangle.** Le texte traduit est renvoyé à la ligne et positionné pour s'adapter au rectangle source. Si un bloc est étroit, la traduction passe sur plusieurs lignes et peut légèrement déborder du rectangle source ; le moteur privilégie la lisibilité à la stricte inclusion.
3. **Toucher pour focus.** Toucher un bloc traduit ouvre une feuille en bas qui fait défiler jusqu'au même bloc dans la vue « traduction complète », afin que les utilisateurs puissent lire des traductions plus longues sans zoomer dans la photo.
4. **Transparence réglable.** Un curseur contrôle l'opacité de la couche de superposition. Glissez à totalement transparent pour voir la photo d'origine, totalement opaque pour lire les traductions.

## Anatomie de la page de résultats

- **Barre supérieure.** Un bouton de fermeture. Pas d'autres contrôles — la page de résultats est volontairement minimale.
- **Zone principale.** La photo d'origine en plein écran, avec la couche de superposition rendue au-dessus. InteractiveViewer permet le zoom et le panoramique pour inspecter les petits textes.
- **Feuille inférieure.** Trois états : collapsed (par défaut), milieu (environ la moitié de l'écran), expanded (la majeure partie de l'écran). L'état collapsed montre une petite poignée et un résumé ; milieu montre les traductions par bloc sous forme de cartes ; expanded montre toutes les traductions de bloc en pleine largeur.
- **Deux onglets dans la feuille.** Un onglet « Blocks » montrant les traductions groupées par bloc OCR, et un onglet « Full » montrant la traduction complète du paragraphe jointe.

## Pourquoi la traduction par bloc

- **Écritures mixtes.** Une page avec des titres anglais et des légendes japonaises bénéficie d'indices de langue source par bloc. La position et la classe d'écriture du bloc indiquent au moteur quel modèle source utiliser.
- **Isolation des échecs.** L'échec de traduction d'un seul bloc ne bloque pas le reste de la page. La superposition marque les blocs échoués d'un petit badge d'avertissement pour que les utilisateurs sachent lesquels nécessitent une attention manuelle.
- **Préservation de la mise en page.** Les utilisateurs qui lisent la source peuvent localiser la traduction correspondante à l'œil — utile pour les menus, panneaux et étiquettes où la relation spatiale compte.

## Comportement d'édition

La superposition est rendue par-dessus la photo, non intégrée. L'enregistrement dans l'historique stocke à la fois la photo d'origine et l'enregistrement de traduction par bloc. L'ouverture d'une entrée enregistrée reproduit la superposition exactement ; l'édition de la photo n'est pas prise en charge.
