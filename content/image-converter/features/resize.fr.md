---
title: "Redimensionnement"
description: "Redimensionnez l'image selon la largeur et la hauteur cibles, propose des préréglages de résolution courants, prend en charge le maintien du ratio d'aspect original pour éviter la déformation."
date: 2026-09-07
lang: fr
slug: resize
---

## Redimensionnement

Une résolution trop élevée occupe de l'espace, trop basse elle apparaît floue à l'écran — le redimensionnement est un besoin fondamental du traitement d'image. Image Converter offre un outil de redimensionnement intuitif.

## Mise à l'échelle vs recadrage

Notez bien la distinction entre deux concepts :

- **Recadrage** : on découpe une partie de l'image d'origine ; le « contenu » de l'image de sortie change
- **Redimensionnement (mise à l'échelle)** : on agrandit ou réduit l'image entière proportionnellement ; le « contenu » de l'image de sortie reste inchangé

Scénarios adaptés au redimensionnement : convertir une grande image 4000×3000 en 1920×1080 pour l'adapter à un écran, unifier toutes les photos à une même taille pour un montage, compresser une image sous une résolution cible.

## Préréglages et personnalisation

L'application propose des préréglages de résolution courants (comme 1920×1080, 1280×720, 1080×1080), et permet aussi de personnaliser largeur et hauteur :

- Saisissez la largeur cible ; la hauteur est calculée automatiquement selon le ratio d'origine
- Saisissez la hauteur cible ; la largeur est calculée automatiquement selon le ratio d'origine
- Le commutateur de verrouillage du ratio d'aspect peut être désactivé pour spécifier librement largeur et hauteur (note : la spécification libre peut modifier le ratio)

## Importance du maintien du ratio d'aspect

Si le ratio d'aspect n'est pas verrouillé, l'image sera étirée ou aplatie. Les portraits seront déformés, les paysages perdront leur naturel, les textes seront tordus. Sauf besoin particulier, il est recommandé de toujours conserver le ratio d'aspect d'origine et de ne modifier que la taille.

## Mise à l'échelle effectuée localement

Le redimensionnement s'effectue localement sur l'appareil, l'image d'origine n'est pas téléchargée, et le résultat est envoyé via le panneau de partage système. Pour plus de détails sur le traitement des données, consultez la [politique de confidentialité](/fr/image-converter/privacy/).

