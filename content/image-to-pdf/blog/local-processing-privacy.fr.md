---
title: "Les fichiers ne quittent pas le téléphone : comment le traitement local protège votre vie privée"
description: "Les outils de conversion en ligne nécessitent de télécharger les fichiers ; le traitement local sur le téléphone ne le nécessite pas. En prenant Image to PDF comme exemple, expliquez le fonctionnement du traitement local, où l'historique est stocké et les limites des données publicitaires et d'abonnement."
date: 2026-09-07
lang: fr
slug: local-processing-privacy
---

## Combien de fichiers sensibles avez-vous téléchargés ?

Repensez aux outils de conversion en ligne que vous avez utilisés : photos de pièces d'identité, contrats numérisés, captures d'écran de relevés bancaires — pour les transformer en PDF ou en images, ils ont été téléchargés vers un serveur dont vous n'avez jamais entendu parler. La plupart des services prétendent « supprimer immédiatement après traitement », mais vous ne pouvez pas le vérifier, et l'acte de téléchargement a déjà eu lieu.

## Que signifie le traitement local

Toutes les fonctionnalités d'Image to PDF — images vers PDF, assemblage, PDF vers images, fusion, chiffrement, déchiffrement — sont effectuées sur votre téléphone. Plus précisément :

- Les images et fichiers PDF sont uniquement lus, traités et générés dans l'application, **sans passer par aucun serveur** ;
- Les conversions sont effectuées sur la puce de l'appareil et peuvent être entièrement réalisées même hors ligne ;
- Les fichiers de sortie sont enregistrés dans le répertoire local de l'application, et c'est vous qui décidez où les envoyer via le panneau de partage système.

Autrement dit, « les fichiers ne quittent pas le téléphone » n'est pas un slogan, mais le résultat direct de l'architecture technique — sans canal de téléchargement, il n'y a naturellement aucun téléchargement.

## Où l'historique est stocké

Chaque conversion est écrite dans l'historique de l'application, y compris l'état de l'opération, la durée, les formats source et sortie, la taille du fichier. Ces enregistrements sont stockés dans une base de données locale sur l'appareil et ne sont lisibles que sur cet appareil. Vider le cache ou désinstaller l'application les supprime complètement, sans passer par nous — en fait, nous ne pouvons même pas les voir.

## Limites des données publicitaires et d'abonnement

Le modèle commercial de cette application doit être clarifié :

- **Publicités** : les utilisateurs non abonnés verront des publicités rewarded de Google AdMob lors de l'entrée dans les pages de fonctionnalités. AdMob utilise des identifiants publicitaires selon ses propres politiques pour diffuser des publicités ; c'est la limite entre nous et AdMob — nous n'avons pas vos fichiers et nous ne collectons pas sciemment vos données personnelles via les publicités ;
- **Abonnement Pro** : le paiement est traité par Apple App Store, la vérification de l'abonnement se fait via RevenueCat. Nous n'accédons pas à votre numéro de carte ou à vos informations de facturation, et nous ne conservons aucune preuve de paiement ;
- **Droits d'abonnement** : Pro supprime les publicités, permettant l'utilisation des fonctionnalités directement sans regarder de vidéos rewarded.

## Suggestions pour traiter les fichiers sensibles

Même avec des outils de traitement local, les habitudes restent importantes :

1. **Transférez rapidement les sorties importantes** — envoyez les résultats de conversion via le panneau de partage vers « Fichiers », iCloud ou un disque cloud, ne les laissez pas uniquement dans le répertoire de l'application ;
2. **Chiffrez avant l'envoi externe** — utilisez la fonction de chiffrement pour définir un mot de passe d'ouverture pour les PDF sensibles, envoyez le mot de passe et le fichier via des canaux séparés ;
3. **Nettoyez régulièrement** — supprimez les historiques et fichiers de sortie inutiles dans les paramètres, maintenez l'appareil propre.

La protection de la vie privée ne repose pas sur des promesses, mais sur l'architecture. Avant de convertir un fichier la prochaine fois, réfléchissez : ce fichier doit-il quitter mon téléphone ?
