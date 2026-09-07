---
title: "Rotation et retournement"
description: "Rotation par pas de 90°, prend en charge le retournement horizontal/vertical, corrige automatiquement l'orientation EXIF avant l'exportation, l'image enregistrée s'affiche correctement partout."
date: 2026-09-07
lang: fr
slug: rotate
---

## Rotation et retournement

Une photo prise de travers, un document numérisé dans le mauvais sens, une capture d'écran nécessitant un effet miroir — ces scénarios requièrent rotation ou retournement. Image Converter offre des fonctions de base de rotation et de retournement, avec des opérations intuitives.

## Rotation : par pas de 90°

L'application prend en charge la rotation par pas de 90° :

- **Rotation de 90° vers la gauche** : transforme une photo verticale en horizontale, ou corrige une photo marquée à tort après une prise en mode paysage
- **Rotation de 90° vers la droite** : l'inverse de la rotation vers la gauche
- **180°** : deux rotations consécutives de 90°

Chaque rotation réencode l'image, garantissant que le fichier exporté s'affiche dans la bonne orientation sur tout appareil.

## Retournement : horizontal / vertical

En plus de la rotation, l'application prend en charge le retournement miroir :

- **Retournement horizontal** : miroir gauche-droite, courant pour les selfies et le texte inversé
- **Retournement vertical** : miroir haut-bas, courant pour un effet négatif ou une composition en miroir

## Traitement automatique de la rotation EXIF

Certains téléphones (notamment l'iPhone) n'écrivent, lors de la prise de vue, qu'une marque de rotation dans les métadonnées de la photo au lieu de faire pivoter réellement les pixels. Ces photos « semblent correctes à l'affichage mais inclinées à l'exportation » dans certaines applications.

Image Converter lit l'orientation EXIF (balise Orientation), corrige les pixels avant l'exportation, et le fichier enregistré s'affiche dans la bonne orientation partout, sans dépendre d'un logiciel de lecture qui reconnaîtrait les métadonnées.

