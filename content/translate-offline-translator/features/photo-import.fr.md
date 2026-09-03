---
title: "Importation de photos : traduisez n'importe quelle photo de votre bibliothèque"
description: "Importez n'importe quelle photo déjà présente sur votre appareil et traduisez-la via la même pipeline OCR + ML Kit qu'une nouvelle capture."
date: 2026-09-03
lang: fr
slug: photo-import
icon: photo
---

La même pipeline OCR et de traduction qui traite les captures en direct traite également les photos importées de la bibliothèque de l'appareil. Utilisez-la pour les captures d'écran, les photos enregistrées de panneaux ou de menus et les images partagées par des amis.

## Comment fonctionne l'importation

1. **Choisir depuis la galerie.** Taper sur l'icône de la galerie dans la page de la caméra ouvre le sélecteur de photos système via `image_picker`. L'image sélectionnée est copiée dans le répertoire temporaire de l'application ; l'original reste en place.
2. **Lire l'orientation physique.** Les photos de la bibliothèque ont une étiquette EXIF d'orientation fiable, donc le chemin d'importation utilise EXIF directement sans toucher à l'accéléromètre. L'image est tournée vers la bonne orientation droite avant l'OCR.
3. **Même pipeline OCR.** L'image est introduite dans le même moteur forké `vision_text_recognition` utilisé par le chemin caméra. Aucune gestion spéciale n'est nécessaire pour « importé » ou « capturé » — la page de résultats et le comportement de traduction sont identiques.
4. **Enregistrer dans l'historique.** Comme les captures de caméra, les photos importées peuvent être enregistrées dans l'historique de traduction local. La copie enregistrée est une vignette compressée, pas la photo complète de la bibliothèque, pour maintenir le stockage limité.

## Quand importer au lieu de capturer

- **Captures d'écran.** Traduisez des chaînes d'interface, des dialogues d'erreur ou des extraits web enregistrés en captures d'écran.
- **Photos déjà prises.** Traduisez une photo de voyage, de réunion ou d'un chat d'ami sans la reprendre.
- **Croquis ou tableaux blancs.** Les photos de notes sur tableau blanc et de croquis sont souvent plus nettes qu'une nouvelle capture, surtout quand la surface a des reflets.
- **Documents.** Les instantanés de reçus, cartes de visite et étiquettes captured par une autre application peuvent être traduits sans changer d'outil.

## Confidentialité

Les photos importées passent par la même pipeline sur l'appareil que les photos en direct. Elles sont traitées en mémoire et ne sont jamais téléchargées sur un serveur que nous exploitons. Les copies d'historique enregistrées ne sont stockées que sur l'appareil, dans la base de données locale de l'application, et peuvent être supprimées individuellement depuis la page d'historique.

## Limites

- **La rotation existante est respectée.** Les photos qui ont été tournées par l'OS sont re-tournées à la verticale avant l'OCR. C'est la source la plus fréquente de problèmes « l'OCR renvoie du texte brouillé » avec les importations.
- **Les originaux de grande taille sont sous-échantillonnés.** Les photos au-dessus de la résolution recommandée par le moteur OCR sont sous-échantillonnées avant la reconnaissance. La photo d'origine sur l'appareil n'est pas affectée.
- **Pas d'importation par lots.** Chaque photo nécessite sa propre un seul tapotement. Si vous devez traduire de nombreuses photos enregistrées, exécutez-les une par une ; l'OCR + traduction pour une seule image se termine généralement en quelques secondes.
