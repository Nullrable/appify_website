---
title: "Historique de traduction : local uniquement, supprimable à tout moment"
description: "L'historique vit dans une base de données Drift sur l'appareil. Aucune copie n'est téléchargée ; les entrées peuvent être supprimées individuellement ou en masse."
date: 2026-09-03
lang: fr
slug: translation-history
icon: history
---

Chaque capture de caméra peut être sauvegardée dans l'historique de traduction local. Chaque entrée stocke la photo originale (compressée), la langue source détectée, la langue cible, les blocs OCR et les traductions par bloc. Ouvrir une entrée sauvegardée reproduit la page de résultats en mode lecture seule.

## Ce qui est stocké

Chaque enregistrement d'historique contient :

- **Photo originale** sous forme de vignette JPEG, mise à l'échelle pour s'adapter à une arête maximale. La photo en pleine résolution est jetée après la mise à l'échelle pour maintenir le stockage borné.
- **Langue source** détectée par l'OCR (ou définie manuellement).
- **Langue cible** sélectionnée pour la capture.
- **Blocs OCR** avec leurs boîtes englobantes, leur texte détecté et leur confiance.
- **Traductions** par bloc et la traduction complète du paragraphe jointe.
- **Horodatage de création** pour le tri et l'affichage.

Aucune copie de la photo ou du texte traduit n'est téléchargée sur un serveur que nous exploitons. L'historique entier est stocké dans une base de données SQLite sur l'appareil gérée par Drift.

## Comment l'historique est rempli

- **Captures de caméra.** Une fois l'OCR + traduction terminée, la page de résultats propose une action Enregistrer. L'enregistrement stocke l'entrée décrite ci-dessus.
- **Photos importées.** Même flux : après la traduction, la page de résultats peut enregistrer l'entrée dans l'historique.
- **Traductions de texte.** Pas enregistrées automatiquement. Les traductions de texte n'apparaissent que dans la zone de résultat de la page de traduction de texte et disparaissent sur Effacer ou navigation. Utilisez la caméra ou l'importation si vous voulez un enregistrement persistant.

## Parcourir et supprimer

- **Vue liste.** La page d'historique affiche les entrées les plus récentes en premier avec la vignette de la photo, l'extrait source, l'extrait cible et l'horodatage.
- **Tapez pour ouvrir.** Taper sur une ligne ouvre la page de résultats en mode lecture seule. La superposition est reproduite avec les traductions enregistrées ; ML Kit n'est pas ré-exécuté.
- **Supprimer.** Chaque ligne a un bouton de suppression. La suppression est gardée par une boîte de dialogue de confirmation pour éviter les suppressions accidentelles. La suppression supprime l'enregistrement et sa vignette de photo de l'appareil ; rien n'est envoyé hors appareil.
- **État vide.** Lorsque l'historique est vide, un espace réservé explique comment le remplir.

## Confidentialité

L'historique est un artefact local. Le modèle de confidentialité de l'application :

- **Pas de téléchargements.** L'historique n'est jamais téléchargé, synchronisé ni sauvegardé sur un serveur.
- **Pas d'analyses sur le contenu de l'historique.** Les rapports d'incident et les analyses d'utilisation anonymes n'incluent pas le contenu de l'historique, le texte OCR ou le texte traduit.
- **La suppression est permanente.** La suppression d'une entrée d'historique la supprime définitivement de la base de données sur l'appareil. Il n'y a pas de copie cloud à nettoyer.

## Croissance du stockage

Chaque entrée occupe environ 50–500 Ko selon la taille de la photo. Un historique de quelques centaines d'entrées reste généralement sous 50 Mo. Les photos sont compressées à l'enregistrement ; l'original pleine résolution n'est jamais conservé.

Pour libérer de l'espace : ouvrez la page d'historique et supprimez les entrées dont vous n'avez plus besoin. Désinstaller l'application supprime toute la base de données d'historique dans le cadre de la désinstallation de la plateforme.
