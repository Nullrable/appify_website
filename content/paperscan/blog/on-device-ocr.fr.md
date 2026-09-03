---
title: "OCR sur appareil: texte indexable à partir de chaque page numérisée"
description: "OCR sur appareil: texte indexable à partir de chaque page numérisée"
date: 2026-09-02
lang: fr
slug: on-device-ocr
---

L'OCR (reconnaissance optique de caractères) convertit une page numérisée en texte qui peut être sélectionné, copié et recherché. Paper Scan exécute l'OCR entièrement sur l'appareil à l'aide des kits ML d'Apple et de Google, donc aucun contenu numérisé n'est transmis à des serveurs externes pour la reconnaissance. Les pages reconnues sont indexées dans la bibliothèque locale et deviennent consultables dès qu'elles sont enregistrées.

### Ce que l'OCR débloque

Une fois une page reconnue:

- **Copier le texte de la numérisation.** Appuyez longuement sur n'importe quel mot pour faire apparaître une superposition de sélection couvrant toute la page. Le texte sélectionné peut être collé dans toute autre application.
- **Rechercher dans les numérisations.** La barre de recherche en haut de la liste Documents interroge le texte reconnu de chaque page, pas seulement les titres et les étiquettes. Les numéros de téléphone, noms, numéros de facture et adresses peuvent être localisés dans toute la bibliothèque.
- **Citer et référencer.** Les reçus numérisés, contrats, notes manuscrites et captures de tableau blanc deviennent tous du texte citable qui peut être référencé plus tard.

### Pourquoi le traitement sur appareil est important

- **Confidentialité.** Le contenu numérisé ne quitte jamais l'appareil pour la reconnaissance. Ceci est pertinent pour les factures, contrats, formulaires médicaux et tout document contenant des données personnelles.
- **Latence.** Pas d'aller-retour réseau. Sur les iPhone récents et les appareils Android phares, l'OCR pour une page standard se termine généralement en moins d'une seconde.
- **Disponibilité hors ligne.** L'OCR fonctionne en avion, dans les sous-sols et dans les régions sans couverture réseau. Aucune connectivité n'est requise.

La précision est comparable à celle des services OCR basés sur serveur; la différence est l'endroit où le calcul s'exécute.

### Meilleures pratiques pour une reconnaissance précise

La précision de l'OCR dépend principalement de la qualité de l'entrée. Trois facteurs, par ordre d'importance:

1. **Éclairage.** Une lumière indirecte et uniforme d'une fenêtre fonctionne mieux qu'un seul projecteur au plafond. Les ombres traversant la page sont la cause la plus fréquente de caractères mal lus.
2. **Mise au point.** Si la mise au point automatique sélectionne le mauvais sujet, appuyez sur le centre du texte avant la capture. Une numérisation floue est rarement une numérisation utilisable.
3. **Sélection du filtre.** Le noir et blanc donne le texte le plus propre pour les formulaires imprimés. La couleur magique est recommandée lorsque l'encre s'est estompée ou que le papier a jauni. L'auto gère la plupart des cas quotidiens.
4. **Pages plates.** Les pages qui se courbent vers la reliure perdent des caractères près du creux. Appuyez à plat sur la page avec l'autre main si possible.
5. **Indication de langue.** Définissez explicitement la langue OCR pour les pages monolingues. Les pages à scripts mixtes fonctionnent en une seule passe sans indication.

### Limites de précision

L'OCR fonctionne bien sur le texte imprimé (précision de 95%+) mais est moins fiable pour l'écriture cursive manuscrite, les très petites polices, les polices décoratives stylisées, les reflets de magazines brillants et les reçus anciens où l'encre s'est physiquement estompée. L'image originale reste disponible dans tous les cas: si l'OCR échoue sur une page critique, la numérisation elle-même peut toujours être lue.

Le niveau gratuit inclut une allocation OCR quotidienne suffisante pour les reçus quotidiens, les cartes de visite et les chapitres de livres occasionnels. Pro supprime la limite quotidienne et ajoute la possibilité d'exécuter l'OCR sur un dossier entier en une seule opération.

Le moteur sur appareil prend en charge les écritures latines (anglais, français, allemand, espagnol, portugais, italien et autres), le chinois (simplifié et traditionnel), le japonais, le coréen et la plupart des écritures européennes. Les pages à scripts mixtes sont traitées en une seule passe de reconnaissance.
