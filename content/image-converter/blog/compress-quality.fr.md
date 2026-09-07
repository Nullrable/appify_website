---
title: "Comment choisir la qualité de compression : comparaison des paliers 10 à 90"
description: "Comparaison des effets réels des 9 préréglages (10/20/30/40/50/60/70/80/90) et du curseur libre 1–99, et quel palier choisir selon le scénario."
date: 2026-09-07
lang: fr
slug: compress-quality
---

## Pourquoi autant de paliers

La compression d'image est une opération avec perte : plus on abandonne de détails, plus le volume est petit, mais plus la qualité baisse. La question est « combien abandonner est-ce approprié » — les normes pour un et une photo d'impression sont totalement différentes. Image Converter propose 9 préréglages de 10 à 90, plus un curseur libre de 1 à 99, couvrant tous les scénarios, de la compression extrême au niveau archivage.

## Effets réels des 9 préréglages

### 10–30 : compression extrême

- **Volume** : 5 à 15 % de l'original
- **Qualité** : perte nettement visible à l'œil nu, adaptée aux captures d'écran purement textuelles et aux aplats de couleur
- **Scénarios typiques** : emojis WeChat, captures d'écran textuelles longues, partage temporaire

Exemple : une photo de 5 Mo compressée au palier 10 peut n'occuper que 200 à 400 Ko. Mais les détails des visages et des paysages seront flous.

### 40–60 : courant pour le partage quotidien

- **Volume** : 15 à 30 % de l'original
- **Qualité** : perte perceptible en regardant attentivement, imperceptible en navigation normale
- **Scénarios typiques** :, Weibo, partage en chat

**60 est le palier idéal pour la plupart des scénarios** — la perte de qualité est presque invisible, et le volume chute fortement.

### 70–80 : palier universellement recommandé

- **Volume** : 30 à 50 % de l'original
- **Qualité** : quasi impossible à distinguer de l'original à l'œil nu
- **Scénarios typiques** : besoin de préserver une bonne qualité tout en contrôlant le volume

Le palier 70 convient au partage professionnel, le palier 80 convient au prétraitement avant archivage de photos importantes.

### 90 : quasi sans perte

- **Volume** : 60 à 80 % de l'original
- **Qualité** : presque identique à l'original
- **Scénarios typiques** : matériel d'archivage, prétraitement avant impression

Monter au-delà de 90 n'a pas grand sens : un JPG en palier 100 est plus volumineux qu'en 90, et l'amélioration de qualité n'est plus perceptible.

## À quoi sert le curseur libre 1–99

Les 9 préréglages couvrent 90 % des scénarios, mais parfois un contrôle plus fin est nécessaire :

- **65** : un peu mieux que 60, un peu plus léger que 70
- **75** : un peu mieux que 70, un peu plus léger que 80
- **85** : un peu mieux que 80, mais encore maîtrisé
- **50 / 55** : trouver un meilleur équilibre entre 40 et 60

## Comparaison en temps réel pour décider du palier

Après avoir sélectionné une image, l'application la compresse immédiatement à la qualité actuelle et affiche :

- **Taille d'origine** vs **taille après compression** (Ko)
- **Ratio de compression** (pourcentage)
- Mise à jour en temps réel — déplacez le curseur pour voir immédiatement le nouveau résultat

Ne choisissez pas le palier à l'aveugle, **comparez à l'œil** pour déterminer le palier le mieux adapté.

## Recommandations de palier selon le type de contenu

| Type de contenu | Palier recommandé | Raison |
|---|---|---|
| Capture d'écran purement textuelle | 30–50 | netteté des bords du texte cruciale, mais fond simple |
| Photo ordinaire | 60–75 | équilibre qualité/volume |
| Portrait en gros plan | 75–85 | la texture de la peau ne supporte pas une compression faible |
| Photo de paysage | 60–80 | nombreuses transitions de couleurs, à partir de 60 pour éviter les aplats |
| Logo / design | utiliser PNG à la place | un élément vectoriel ou un aplat ne devrait pas être compressé en JPG |
| Capture d'enregistrement d'écran | 40–60 | beaucoup de texte et d'icônes, une qualité basse provoque du flou |

