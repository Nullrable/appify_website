---
title: "Traduction de texte : coller, taper, traduire"
description: "Une page de traduction en texte seul qui partage le même état de paire de langues avec la page caméra."
date: 2026-09-03
lang: fr
slug: text-translate
icon: keyboard
---

La page de traduction de texte est une entrée séparée de la page caméra pour les cas où la source est déjà du texte. Ouvrez-la depuis le bas de la page caméra et collez, tapez ou dictez un paragraphe ; le même moteur ML Kit renvoie une traduction.

## Pourquoi une page séparée

L'OCR de la caméra est optimisé pour les images. Quand la source est déjà du texte — un extrait d'e-mail, un message de chat, un paragraphe collé — l'étape OCR est inutile. La page de traduction de texte ignore complètement l'OCR et envoie l'entrée directement au traducteur ML Kit.

Elle permet aussi la traduction par lots en copiant et collant un paragraphe plus long au lieu de le photographier. Pour du texte dense sans page pratique à photographier, c'est plus rapide et plus précis.

## Comment ça marche

- **État de langue partagé.** La page de texte lit et écrit la même paire de langues source/cible que la page caméra. Choisir une langue cible à un endroit s'applique à l'autre ; passer de l'une à l'autre ne nécessite pas de resélectionner les langues.
- **Détection automatique pour la source.** Si la source est réglée sur « Détection auto », l'application exécute une heuristique au niveau de la classe de caractères en Dart sur le texte d'entrée pour choisir entre les langues prises en charge par ML Kit. Latin pur par défaut en anglais ; caractères Han par défaut en chinois simplifié ; écritures mixtes suivent la classe de caractères majoritaire.
- **Traduction en un seul passage.** Toute l'entrée est envoyée à ML Kit en un seul appel. Le résultat remplace la zone de saisie sous le bouton ; effacez l'entrée pour traduire à nouveau.
- **Gestion du clavier.** Taper sur Traduire ferme le clavier à l'écran afin que la zone de résultat ne soit pas cachée derrière le clavier.

## Quand l'utiliser

- **Longs paragraphes.** Tapez ou collez du texte de plusieurs phrases. Photographier un écran plein de texte introduit du bruit OCR ; coller le texte ne le fait pas.
- **Extraits de chat.** Traduisez un court message d'un ami sans quitter la conversation pour ouvrir la caméra.
- **Écrans avec du texte.** Récupérez du texte d'une capture d'écran via le partage système et collez-le dans la page de traduction de texte pour une traduction plus propre que l'OCR.
- **Dictée vocale.** Utilisez la touche de dictée système pour dicter le texte au lieu de le taper.

## Limites

- **Aucune préservation du formatage.** Texte brut uniquement. Markdown, gras, italique et autres formats sont supprimés.
- **Pas de sauvegarde automatique dans l'historique.** Contrairement aux captures caméra, les traductions de texte ne sont pas sauvegardées automatiquement. Le résultat reste dans la zone de résultat jusqu'à ce que vous tapiez Effacer ou partiez.
