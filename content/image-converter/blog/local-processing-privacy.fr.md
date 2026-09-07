---
title: "Les fichiers ne quittent pas le téléphone : comment le traitement local protège votre vie privée"
description: "Les outils de conversion en ligne nécessitent le téléchargement de fichiers, le traitement sur le téléphone non. En prenant Image Converter comme exemple, nous expliquons le fonctionnement du traitement local, l'emplacement de stockage de l'historique, et les frontières des données entre publicité et abonnement."
date: 2026-09-07
lang: fr
slug: local-processing-privacy
---

## Combien d'images sensibles avez-vous téléchargées ?

Repensez aux outils de conversion en ligne que vous avez utilisés : photos de pièce d'identité, contrats numérisés, captures d'écran privées — pour les convertir dans un autre format, elles ont été téléchargées sur un serveur dont vous n'avez jamais entendu parler. La plupart des services affirment « supprimer immédiatement après traitement », mais vous ne pouvez pas le vérifier, et **le téléchargement lui-même a déjà eu lieu**.

## Que signifie traitement local

Toutes les fonctionnalités d'Image Converter — conversion de format, compression, rotation, recadrage, redimensionnement, assemblage — s'effectuent sur votre téléphone. Concrètement :

- Les images sont lues, traitées et exportées uniquement dans l'app, **sans passer par aucun serveur** ;
- Le traitement s'exécute sur la puce de l'appareil, **toutes les fonctions restent disponibles hors ligne** ;
- Les fichiers de sortie sont enregistrés dans le répertoire local de l'app, et c'est vous qui décidez via le panneau de partage système où les envoyer.

Autrement dit, « les fichiers ne quittent pas le téléphone » n'est pas un slogan, mais le résultat direct de l'architecture technique — pas de canal de téléchargement, donc pas de téléchargement.

## Où est stocké l'historique

Chaque conversion écrit dans l'historique de l'application, avec l'état de l'opération, la durée, le format source et de sortie, et la taille du fichier. Ces enregistrements sont stockés dans la base de données locale de l'appareil, **lisibles uniquement en local**.

Vider le cache ou désinstaller l'application suffit pour une suppression complète, sans passer par nous — en fait, même si nous le voulions, nous ne pourrions pas les voir.

## Frontières des données entre publicité et abonnement

Le modèle économique de l'application mérite d'être clarifié :

- **Publicité** : les utilisateurs non abonnés voient des publicités de Google AdMob en entrant dans les pages de fonctionnalités. AdMob utilise, selon sa politique, des identifiants publicitaires pour diffuser des publicités — c'est la frontière entre lui et nous : nous ne détenons pas vos fichiers, et la publicité ne collecte pas vos données personnelles via nous ;
- **Abonnement Pro** : le paiement est traité par l'Apple App Store, et la vérification de l'abonnement s'effectue via RevenueCat. Nous n'avons pas accès à votre numéro de carte, ni à vos informations de facturation, et nous ne conservons aucun justificatif de paiement ;
- **Avantages de l'abonnement** : Pro supprime les publicités, accès direct aux fonctionnalités sans regarder de vidéo incitative.

## Conseils pour le traitement des fichiers sensibles

Même avec un outil de traitement local, les habitudes restent importantes :

1. **Transférez rapidement les sorties importantes** — enregistrez les résultats via le panneau de partage dans « Fichiers », iCloud ou un disque cloud, et ne les laissez pas uniquement dans le répertoire de l'app ;
2. **Supprimez les métadonnées avant envoi** — pour les photos de documents, utilisez d'abord Image Converter pour changer de format et retirer les informations EXIF d'origine ;
3. **Nettoyez régulièrement** — supprimez les historiques et fichiers de sortie inutiles, videz le cache dans les réglages, gardez l'appareil propre.

La protection de la vie privée ne repose pas sur des promesses, mais sur l'architecture. Avant votre prochaine conversion, posez-vous la question : **cette image doit-elle quitter mon téléphone ?**

