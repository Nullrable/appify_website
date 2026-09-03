---
title: À propos de Paper Scan - Guide des fonctionnalités
description: Découvrez ce que fait Paper Scan, comment chaque filtre et l'OCR fonctionnent sur l'appareil, et comment la synchronisation cloud sans conflit maintient vos documents alignés entre iPhone et iPad.
date: 2026-09-02
lang: fr
slug: index
---

# À propos de Paper Scan

Paper Scan est un scanner de documents conçu pour iPhone et iPad. Il capture une page A4 entière depuis une distance confortable, corrige la perspective automatiquement, vous laisse peaufiner le résultat avec six filtres GPU et exporte des PDF multipages avec texte recherchable - le tout sans envoyer un seul octet à un serveur sauf si vous activez la synchronisation cloud.

## Capture et détection des bords

La vue de capture est suffisamment large pour cadrer une feuille A4 entière à bout de bras. Dès qu'une page entre dans le cadre, la détection des bords se verrouille sur ses coins. La capture automatique se déclenche quand le document est stable, la perspective est corrigée à la volée, et une petite miniature atterrit dans la zone de revue pour que vous confirmiez ou recommenciez.

Vous pouvez basculer en mode manuel à tout moment. Appuyez longuement sur le déclencheur pour désactiver la capture automatique, faites glisser les poignées d'angle quand les bords ont besoin d'aide, et touchez une miniature pour recadrer ou pivoter avant que la page ne soit engagée dans le document.

## Six filtres GPU

Chaque filtre dans Paper Scan est calculé sur le GPU. Les aperçus se mettent à jour instantanément même sur des lots multipages, vous pouvez donc comparer l'intensité des filtres sans attendre.

- **Original** conserve la photo telle quelle et convient quand vous voulez un enregistrement fidèle.
- **Améliorer** booste le contraste et la balance des blancs, ce qui sauve les reçus thermiques délavés et les prises en lumière tamisée.
- **Niveaux de gris** aplatit le bruit de couleur sur le papier coloré pour que la couche OCR lise le texte plus proprement.
- **Noir et blanc** pousse la même idée plus loin, produisant la couche de texte la plus propre pour les scans d'archive.
- **Éclaircir** uniformise les ombres du flash, utile sur les pages de magazines glacés.
- **Accentuer** récupère les détails fins sur les reçus et les autocollants de numéros de série.

Les filtres s'appliquent par page, pas par document. Vous pouvez les mélanger dans un même PDF si certaines pages ont besoin de couleur et d'autres de noir et blanc.

## Organisation

Les scans tombent sur un canvas groupés en pages à l'intérieur d'un document. Vous pouvez glisser les pages pour les réordonner, déposer des pages d'un document dans un autre, renommer les documents sur place, et épingler les plus utilisés en haut de la bibliothèque.

La recherche plein texte s'exécute sur chaque page jamais passée à l'OCR. Les résultats surlignent le mot trouvé sur une miniature de la page, et toucher le résultat ouvre le document à la bonne page pour lire le contexte.

## OCR sur l'appareil

L'OCR utilise le framework Vision d'Apple. La reconnaissance de texte a lieu dans l'enclave sécurisée de votre iPhone - l'image ne quitte jamais l'appareil, le texte reconnu n'est envoyé nulle part, et l'index OCR vit dans le stockage privé de l'application. La couche OCR s'exécute à la demande et vous pouvez la relancer sur n'importe quelle page à tout moment si vous changez de filtre.

Le texte recherchable est préservé quand vous exportez en PDF. Quiconque ouvre le PDF dans Preview, Adobe Reader ou n'importe quel lecteur moderne peut copier le texte au lieu de le retaper.

## Export PDF multipage

Exportez tout un document comme un PDF, ou partagez des pages individuelles comme images. Pour chaque export, vous pouvez choisir la taille de page (Letter / A4 / original), l'orientation, la qualité (Basse / Standard / Haute) et l'inclusion ou non de la couche de texte OCR. Paper Scan embarque la couche OCR automatiquement quand vous gardez la qualité Standard ou Haute.

L'export par lot vous laisse sélectionner plusieurs documents d'un coup et les expédier comme un zip multi-PDF - pratique pour les lots de notes de frais en fin de mois.

## Synchronisation cloud sans conflit

La synchronisation cloud est optionnelle. Activez iCloud et vos documents apparaissent sur tous les appareils connectés au même Apple ID ; activez Google Drive et ils apparaissent sur tous les appareils connectés à ce compte Google. Vous pouvez garder les deux désactivés et l'application se comporte comme une archive purement locale.

La synchronisation résout les éditions concurrentes sans créer de doublons. Chaque page porte son propre marqueur de révision, donc la modification la plus récente de cette page prime, et vos modifications locales en cours ne sont jamais écrasées silencieusement. Les renommages de dossiers, documents et pages se propagent aussi, donc supprimer un document sur un appareil le supprime partout.

## Hors ligne par défaut, confidentialité d'abord

Paper Scan est hors ligne par défaut. Numérisation, détection des bords, filtres, OCR, recherche et export PDF tournent tous sur l'appareil et ne font aucun appel réseau. La seule fonctionnalité qui utilise le réseau est la synchronisation cloud, et seulement quand vous l'activez. Aucun compte requis, aucun SDK analytique embarqué, et aucune publicité.

Vos scans vivent dans le stockage privé de l'application. Désinstaller l'application supprime toutes ses données locales, y compris l'index OCR, le cache de recherche plein texte et toute édition non synchronisée.

## Paper Scan Pro

La numérisation, les six filtres, l'OCR, l'export PDF d'un document unique et la recherche restent gratuits pour toujours sans filigrane. Paper Scan Pro ajoute les documents illimités, la synchronisation cloud et l'export par lot. Pro est vendu comme une mise à niveau unique, donc une fois acquis, vous le gardez sur tous les appareils et à travers les futures mises à jour.
