---
title: "Chiffrement PDF"
description: "Instructions d'utilisation de la fonction de chiffrement d'Image to PDF : définition du mot de passe d'ouverture et du mot de passe propriétaire, contrôle des autorisations d'impression, de copie et de modification, chiffrement AES-256 par défaut."
date: 2026-09-07
lang: fr
slug: pdf-encrypt
---

## Chiffrement PDF

Ajoutez un verrou par mot de passe au PDF. Avant d'envoyer des contrats, des numérisations de pièces d'identité et des documents financiers par e-mail ou via des outils de chat, chiffrez d'abord pour vous assurer que seules les personnes ayant le mot de passe peuvent ouvrir.

## Deux types de mots de passe, chacun avec sa fonction

- **Mot de passe utilisateur (mot de passe d'ouverture)** : après définition, toute personne ouvrant ce PDF doit saisir ce mot de passe — c'est la première porte du fichier ;
- **Mot de passe propriétaire (optionnel)** : défini séparément du mot de passe utilisateur ; les personnes détenant le mot de passe propriétaire peuvent modifier la configuration des autorisations du fichier.

## Contrôle fin des autorisations

Lors de l'activation du chiffrement, vous pouvez également contrôler les opérations autorisées pour ce PDF :

- **Autoriser l'impression** (activé par défaut) : s'il est autorisé à imprimer ce fichier ;
- **Autoriser la copie** (désactivé par défaut) : s'il est autorisé à copier le texte ou les images qu'il contient ;
- **Autoriser la modification** (désactivé par défaut) : s'il est autorisé à modifier le contenu du fichier.

Par exemple, lors de l'envoi d'un devis à l'extérieur, vous pouvez activer l'impression, désactiver la copie et la modification, à la fois pratique pour l'autre partie pour查看 et réduisant le risque d'utilisation directe du contenu.

## Norme de chiffrement AES

Le chiffrement utilise par défaut **AES-256**, et peut également être basculé sur AES-128 pour une meilleure compatibilité. Le chiffrement s'effectue localement sur l'appareil ; le contenu PDF ne sera pas téléchargé vers aucun serveur.
