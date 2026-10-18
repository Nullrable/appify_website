---
title: "Liste complète des formats - 10 entrées audio + 4 sorties audio + 8 vidéo"
description: "Tous les formats pris en charge par l'éditeur audio en un seul endroit. 10 entrées audio : MP3, WAV, M4A, AAC, FLAC, OGG, Opus, AIFF, AMR, CAF. 4 sorties audio : MP3, WAV, FLAC, OGG. 8 conteneurs vidéo : MP4, MOV, M4V, AVI, MKV, WebM, FLV, WMV."
date: 2026-10-17
lang: fr
slug: supported-formats
---

## Liste complète des formats

Cette page est un aide-mémoire - chaque format audio et vidéo pris en charge par l'éditeur audio, et quand choisir lequel.

Entrée et sortie sont deux ensembles distincts : l'app peut lire 10 formats audio, mais n'en écrit que 4. Les vidéos sont en lecture seule et ne sont pas ouvertes directement par l'éditeur.

## Formats d'entrée audio (10)

L'éditeur ouvre ces 10 fichiers audio - l'édition multipiste, l'amélioration et la conversion (compress / merge) les acceptent tous en entrée :

| Format | Cas d'usage |
|---|---|
| **MP3** | Lecteurs universels, systèmes auto, pièces jointes e-mail. Choix par défaut. |
| **WAV** | Master sans perte, idéal pour le mixage, l'archivage ou le remontage. |
| **M4A** | La version conteneur d'AAC, courante dans l'écosystème Apple. |
| **AAC** | Standard de l'écosystème Apple, excellent détail pour une petite taille. |
| **FLAC** | Sans perte mais compressé - environ la moitié de la taille d'un WAV. |
| **OGG** | Conteneur open source, préféré par certains lecteurs professionnels. |
| **Opus** | Codec moderne à faible latence, courant en visioconférence, podcasts et streaming. |
| **AIFF** | Standard de l'écosystème macOS / Logic, sans perte. |
| **AMR** | Ancien format d'enregistrement d'appels mobiles, norme 3GPP. |
| **CAF** | Conteneur Apple Core Audio, idéal pour le post-traitement iOS. |

## Formats de sortie audio (4)

L'éditeur, l'amélioration multipiste et la conversion ne peuvent écrire qu'un seul de ces 4 formats à l'export :

| Format | Cas d'usage |
|---|---|
| **MP3** | Standard universel, reconnu par pratiquement tous les appareils et lecteurs. |
| **WAV** | Master sans perte, idéal pour le remontage ou l'archivage. |
| **FLAC** | Sans perte mais compressé, environ la moitié de la taille d'un WAV. |
| **OGG** | Conteneur open source, préféré par certains équipements professionnels. |

## Formats vidéo (8)

Les fichiers vidéo ne sont **pas** ouverts directement par l'éditeur. Ils servent uniquement de « source de pistes audio » :

| Format | Cas d'usage |
|---|---|
| **MP4** | Universel, reconnu par pratiquement tous les appareils et lecteurs. |
| **MOV** | Standard de l'écosystème Apple - iMovie, Final Cut, Logic l'acceptent. |
| **M4V** | Conteneur vidéo de l'époque iTunes, se comporte comme MP4 sur les appareils Apple. |
| **AVI** | Conteneur historique, meilleure compatibilité avec les anciennes apps Windows. |
| **MKV** | Conteneur open source, peut contenir plusieurs pistes audio et sous-titres. Idéal pour l'archivage HD. |
| **WebM** | Format vidéo web courant, open source. |
| **FLV** | Ancien format de streaming de l'ère Flash, utile pour les vidéos d'archive. |
| **WMV** | Windows Media Video, écosystème Windows. |

## Comment choisir

- **Partage universel** -> audio MP3, vidéo MP4
- **Deuxième passe dans l'écosystème Apple** -> vidéo MOV
- **Archivage sans perte** -> audio WAV ou FLAC
- **Workflows web ou open source** -> audio OGG, vidéo WebM

## Les vidéos ne sont pas éditées

La timeline de l'éditeur n'accepte que des clips audio. Les fichiers vidéo ne peuvent servir que de « source de pistes » - l'éditeur lui-même ne les coupe pas.

## 100 % local

Audio comme vidéo, tout le décodage, encodage et réécriture se fait sur l'iPhone. Les fichiers ne quittent jamais l'appareil.
