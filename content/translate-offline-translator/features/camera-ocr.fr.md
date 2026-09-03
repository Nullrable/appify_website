---
title: "OCR caméra : pointer, capturer, traduire"
description: "OCR sur l'appareil via vision_text_recognition avec une orientation précise au niveau matériel, même lorsque l'interface de l'appareil est verrouillée en portrait."
date: 2026-09-03
lang: fr
slug: camera-ocr
icon: camera
---

L'OCR de la caméra exécute l'OCR localement à l'aide d'un package forké `vision_text_recognition` qui prend en charge les écritures latine, chinoise (simplifiée et traditionnelle), japonaise et coréenne. Rien n'est téléchargé pour la reconnaissance. Chaque bloc renvoyé par le moteur OCR porte sa propre boîte englobante et son texte détecté ; la page de résultats peint la traduction sur les mêmes coordonnées, préservant ainsi la mise en page d'origine.

## Pipeline de capture

1. **Initialisation de la caméra.** Le contrôleur de caméra est initialisé de manière asynchrone avec des états explicites `initializing / ready / failed`. En cas d'échec, un bouton de réessai s'affiche et ré-exécute l'initialisation sans rentrer dans la garde `initializing`.
2. **Orientation réelle.** Le `DeviceOrientation` et l'EXIF d'iOS ne sont pas fiables lorsque l'application est verrouillée en portrait. L'application lit l'accéléromètre brut via `sensors_plus` et met en cache la frame la plus récente, de sorte que l'obturateur capture la véritable direction de préhension même si l'interface est verrouillée. L'orientation EXIF est ensuite rapprochée de cette vérité terrain.
3. **Obturateur.** Le tap capture au rapport d'aspect actuel de l'aperçu. La frame capturée est sous-échantillonnée à une arête maximale configurable avant l'OCR — la plupart des pages ont besoin de 1500–2000 px sur la longue arête pour que le moteur lise les petits caractères sans gonfler la mémoire.
4. **Flash.** Quatre modes sont exposés dans le viseur — automatique, désactivé, activé et torche — avec le commutateur lié à l'API flash système.

## Ce que renvoie l'OCR

- **Boîtes englobantes par bloc.** Chaque TextBlock a son propre rectangle. La page de résultats les utilise pour positionner le texte traduit exactement sur le texte source.
- **Texte et ordre des blocs.** Texte de la langue source par bloc, dans l'ordre émis par le moteur (de haut en bas, de gauche à droite par défaut).
- **Confiance.** Chaque bloc porte sa propre confiance. Les blocs en dessous d'un seuil sont rendus dans la page de résultats mais marqués comme « faible confiance » pour que l'utilisateur puisse vérifier.

## Pourquoi sur l'appareil

- **Confidentialité.** Les photos de panneaux, contrats ou formulaires médicaux ne quittent jamais l'appareil pour l'OCR.
- **Latence.** Pas d'aller-retour réseau. L'OCR d'une page typique prise par un smartphone se termine en moins d'une seconde sur un appareil récent.
- **Hors ligne.** L'OCR fonctionne dans un avion, dans un sous-sol et dans des régions sans couverture. Le même moteur qui exécute la reconnaissance fonctionne entièrement à partir du modèle sur l'appareil.

## Meilleures pratiques pour une OCR précise

1. **Lumière uniforme et indirecte.** La lumière de la fenêtre surpasse les plafonniers. Les ombres traversant la page sont la cause la plus fréquente de caractères mal lus.
2. **Tap pour mettre au point.** Si l'autofocus sélectionne le mauvais sujet (le bureau, un doigt, le bord de la page), tapez au centre du texte avant la capture.
3. **Pages plates.** Les pages qui se courbent vers le dos d'un livre perdent des caractères près du pli. Aplatissez la page avec l'autre main lorsque c'est possible.
4. **Une langue par capture.** Les pages à écritures mixtes fonctionnent en un seul passage, mais une page qui mélange le latin avec le japonais vertical est mieux divisée en deux captures.
