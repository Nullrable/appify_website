---
title: "Modèles de traduction : téléchargez une fois, gardez-les pour toujours"
description: "Gérez les 19 modèles linguistiques ML Kit depuis une page dédiée. Téléchargez une fois, supprimez pour récupérer de l'espace ; le modèle survit hors ligne."
date: 2026-09-03
lang: fr
slug: model-manager
icon: download
---

Chaque paire de langues nécessite que les modèles source et cible soient sur l'appareil avant que la traduction puisse s'exécuter. Les modèles sont téléchargés une fois, persistent à travers les redémarrages de l'application et sont réutilisés pour chaque traduction de cette paire. La page de téléchargement des modèles répertorie les 19 langues prises en charge avec leur état de téléchargement et vous permet de télécharger ou supprimer chacune d'elles.

## Pourquoi une page dédiée

ML Kit ne télécharge pas les modèles automatiquement — chaque paire de langues nécessite un téléchargement explicite de ses source et cible. La page de téléchargement des modèles expose cet état et permet à l'utilisateur de le gérer sans plonger dans le stockage de la plateforme.

Pour la plupart des utilisateurs, le flux de travail est invisible : choisissez une langue source et cible, l'application télécharge les deux modèles à la demande la première fois que vous traduisez, et les modèles restent sur l'appareil pour les exécutions ultérieures. La page dédiée est destinée aux utilisateurs qui veulent pré-télécharger pour des voyages hors ligne, supprimer des langues qu'ils n'utilisent plus, ou voir ce qui consomme du stockage.

## États du modèle par langue

- **Non téléchargé.** Un bouton Télécharger est affiché. Appuyez pour démarrer le téléchargement.
- **Téléchargement.** Un spinner indéterminé est affiché. ML Kit n'expose pas de rappels de progression, seulement l'achèvement ; le spinner se résout en Téléchargé ou Échec.
- **Téléchargé.** Un badge est affiché avec un bouton Supprimer. Appuyez pour supprimer le modèle et récupérer du stockage.
- **Échec.** Un bouton de réessai remplace Télécharger. Causes courantes : pas de réseau, cellulaire bloqué, espace disque faible. Réessayez une fois le problème sous-jacent résolu.

## File d'attente de téléchargement séquentielle

Plusieurs demandes de téléchargement à succession rapide sont mises en file d'attente, pas parallélisées. Le plugin iOS natif ne gère pas proprement les appels `manageModel` concurrents : la deuxième demande annule la première. L'application sérialise les téléchargements via un seul Future enchaîné afin que les demandes concurrentes se résolvent l'une après l'autre. L'UI n'affiche que le téléchargement actif dans l'état indéterminé ; les demandes en file d'attente attendent leur tour.

## Délais d'attente et polling de téléchargement

Si un rappel de téléchargement est manqué (observé sur iOS dans des conditions de réseau faible), le Future de téléchargement peut se bloquer. L'application se protège avec un délai d'attente de 30 secondes ; si le délai s'active, l'application interroge directement le disque via `isModelDownloaded` pour confirmer si le modèle a effectivement atterri avant de signaler la réussite ou l'échec.

## Coût de stockage

Chaque modèle ML Kit occupe environ 10–50 Mo sur le disque. Télécharger les 19 langues consomme environ 300–600 Mo. Les modèles pour la source et la cible d'une même traduction sont séparés ; un modèle peut servir soit de source soit de cible selon le rôle que l'utilisateur a sélectionné.

La suppression du modèle récupère l'espace. Il n'y a pas de nettoyage automatique. Désinstaller l'application supprime tous les modèles téléchargés dans le cadre de la désinstallation de la plateforme.
