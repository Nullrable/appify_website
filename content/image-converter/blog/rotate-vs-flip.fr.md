---
title: "Rotation ou retournement : quand utiliser lequel"
description: "À quels scénarios correspondent la rotation 90°, 180°, le retournement horizontal, le retournement vertical, et comment la marque de rotation EXIF affecte le résultat final."
date: 2026-09-07
lang: fr
slug: rotate-vs-flip
---

## Quatre opérations de base

Image Converter propose quatre opérations de rotation/retournement :

- **Rotation de 90° à gauche** : transformer une image verticale en horizontale
- **Rotation de 90° à droite** : transformer une image horizontale en verticale
- **180°** : retourner complètement l'image
- **Retournement horizontal** : miroir gauche-droite
- **Retournement vertical** : miroir haut-bas

Cela paraît simple, mais beaucoup ne savent pas quand utiliser quoi.

## Rotation : par pas de 90°

### Rotation de 90°

La rotation de 90° est l'opération la plus courante, correspondant aux scénarios :

- **Capture d'écran d'une vidéo filmée horizontalement sur le téléphone** : orientation incorrecte, nécessite une rotation
- **Document numérisé dans le mauvais sens** : le scanner était placé dans le mauvais sens, le fichier obtenu est inversé
- **Combinaison de plusieurs photos d'orientations différentes** : unifier l'orientation avant assemblage

La rotation de 90° est une opération sans perte — les pixels sont réarrangés sans aucune perte d'information.

### Rotation de 180°

Deux rotations de 90° successives ou 180° direct, pour les scénarios :

- **Image entièrement à l'envers** : par exemple une photo basculée à 180°
- **Assemblage de plusieurs images dont une est dans le mauvais sens** : unifier l'orientation

180° est également sans perte.

## Retournement : horizontal et vertical

### Retournement horizontal (miroir gauche-droite)

- **Correction du miroir selfie** : certains téléphones effectuent un miroir automatique sur les selfies, le sujet voit une direction opposée à la direction réelle
- **Correction de texte inversé** : photos prises à travers un miroir, reflets sur surface miroir
- **Effet de design** : composition miroir, aperçu symétrique gauche-droite pour un design

### Retournement vertical (miroir haut-bas)

- **Effet négatif** : simule l'effet négatif d'un film traditionnel
- **Composition miroir** : aperçu d'effet de reflet d'eau
- **Besoins de design spécifiques** : aperçu de symétrie haut-bas pour affiches et emballages

## Rotation EXIF : le piège le plus courant

De nombreux téléphones (notamment l'iPhone) lors de la prise de vue **n'écrivent qu'une marque de rotation dans les métadonnées, sans faire pivoter réellement les pixels**.

Cela signifie :

- Vu dans l'album : orientation normale
- Ouvert avec certaines applications : orientation incorrecte
- Téléversé sur certaines plateformes : orientation incorrecte

Image Converter lit l'orientation EXIF (balise Orientation) et **fait réellement pivoter les pixels** avant l'exportation. L'image enregistrée s'affiche dans la bonne orientation partout.

## Rotation ou retournement : référence par scénario

| Phénomène | Opération | Raison |
|---|---|---|
| Capture vidéo paysage en vertical | Rotation 90° | orientation vidéo incompatible avec l'affichage |
| Selfie inversé gauche-droite | Retournement horizontal | miroir automatique du téléphone |
| Document numérisé inversé | Rotation 90° | scanner mal orienté |
| Texte reflété dans un miroir | Retournement horizontal | image formée par miroir |
| Photo entièrement à l'envers | Rotation 180° | téléphone tenu à l'envers lors de la prise |
| Reflet d'eau inversé haut-bas | Retournement vertical | simulation d'effet de reflet |

S'il s'agit juste d'un problème de marque EXIF, **rien à faire** — Image Converter le traite automatiquement lors de la conversion.

