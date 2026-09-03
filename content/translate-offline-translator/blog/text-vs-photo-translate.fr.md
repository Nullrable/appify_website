---
title: "Traduction de texte vs traduction photo : laquelle utiliser"
description: "Quand la source est déjà du texte, sautez l'OCR. Quand la source est une page imprimée, la traduction photo est plus rapide. Comment choisir."
date: 2026-09-03
lang: fr
slug: text-vs-photo-translate
---

## Traduction de texte vs traduction photo : laquelle utiliser

L'application a deux points d'entrée pour la traduction : la page caméra (traduction photo) et la page de traduction de texte. Ils partagent le même état de paire de langues et le même moteur ML Kit, mais le pipeline diffère sur une étape importante.

## La différence en une phrase

La traduction photo exécute l'OCR sur une image capturée, puis translates le texte reconnu. La traduction de texte saute complètement l'OCR et alimente directement l'entrée dans le moteur de traduction.

## Quand la traduction de texte est plus rapide

- **Sources déjà en texte.** E-mails, messages de chat, extraits web, paragraphes collés — tout ce qui existe sous forme de texte plutôt que de page imprimée. Sauter l'OCR supprime une étape et élimine une catégorie d'erreurs OCR (caractères mal lus, coupures de ligne cassées, mise en page perturbée).
- **Texte long et dense.** Photographier un écran plein de texte introduit du bruit OCR. Coller le texte ne le fait pas.
- **Dictée.** La touche de dictée système vous permet de parler l'entrée au lieu de la taper. La précision de la dictée est bonne pour une parole claire dans un environnement silencieux.
- **Pas de caméra disponible.** Si la caméra est utilisée par une autre application, ou si l'autorisation de caméra a été refusée, la traduction de texte fonctionne toujours.

## Quand la traduction photo est plus rapide

- **Pages imprimées.** Livres, menus, panneaux, emballages, instructions, affiches. Ils existent sous forme d'encre sur papier ; le seul moyen de les transformer en texte est de les photographier.
- **Autocollants et étiquettes.** Une photo d'un autocollant ou d'une étiquette sur un produit peut être traduite en place sans transcription préalable.
- **Écrans que vous ne pouvez pas sélectionner.** Si la source est rendue sous forme de pixels — une image dans un PDF, une capture d'écran d'une ancienne application, une photo d'écran — il n'y a pas de texte à copier. La traduction photo est la seule option.
- **Panneaux bilingues.** Capturer les deux langues dans une seule photo résout souvent l'indice de langue par bloc utilisé par la détection automatique.

## Différences de précision

Les deux chemins utilisent le même moteur ML Kit, donc la traduction elle-même a la même qualité. La différence se situe en amont : la traduction photo peut introduire du bruit OCR que la traduction de texte n'introduit pas. Si le moteur OCR lit mal un caractère, le moteur de traduction n'a aucun moyen de récupérer le texte original.

Pour le texte que vous contrôlez (vos propres écrits, vos propres messages), collez-le. Pour le texte qui vit sur papier, photographiez-le.

## Partage entre les modes

Les paramètres de langue source et cible sont partagés entre la page caméra et la page de traduction de texte. Changer de langue à un endroit s'applique à l'autre ; faire des allers-retours ne nécessite pas de resélectionner les langues.

Les traductions de texte ne sont pas automatiquement sauvegardées dans l'historique ; elles restent dans la zone de résultat jusqu'à ce que vous appuyiez sur Effacer ou naviguiez ailleurs. Les traductions caméra peuvent être sauvegardées dans l'historique depuis la page de résultat.

## Une règle pratique

Si vous pouvez copier le texte, copiez-le. Sinon, photographiez-le. Le chemin de copie est plus propre car l'OCR est retiré de la boucle.
