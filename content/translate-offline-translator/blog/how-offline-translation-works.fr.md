---
title: "Comment fonctionne la traduction hors ligne sur votre iPhone"
description: "Un parcours complet de la manière dont l'application termine une traduction sans télécharger un seul octet de texte source sur un serveur."
date: 2026-09-03
lang: fr
slug: how-offline-translation-works
---

## Comment fonctionne la traduction hors ligne sur votre iPhone

Le pipeline de traduction de l'application s'exécute entièrement sur l'appareil. Aucune photo, aucun résultat OCR et aucune demande de traduction ne quitte l'iPhone. Cet article explique ce que « sur l'appareil » signifie réellement, où vivent les modèles et quels compromis accompagnent l'exécution locale de la traduction.

## Les éléments qui s'exécutent sur l'appareil

Il y a trois travaux indépendants qui se produisent sur le téléphone pour une traduction par caméra :

1. **OCR.** Un package `vision_text_recognition` forké exécute la reconnaissance de texte localement. Il prend en charge les écritures latine, chinoise (simplifiée et traditionnelle), japonaise et coréenne. Chaque bloc de texte reconnu porte sa propre boîte englobante et son texte détecté.
2. **Traduction.** Le moteur de traduction sur l'appareil de Google ML Kit prend la sortie OCR et produit du texte traduit. Le moteur est fourni sous forme de modèle linguistique téléchargeable par paire de langues ; l'application télécharge les modèles à la demande et les met en cache sur le disque.
3. **Rendu.** La page de résultats peint chaque bloc traduit sur la photo originale, en utilisant les boîtes englobantes renvoyées par le moteur OCR. Aucun aller-retour vers le serveur n'est nécessaire pour rendre la superposition — l'image, les blocs sources et les traductions vivent tous en mémoire sur l'appareil.

## Pourquoi c'est important

- **Confidentialité.** Les photos de panneaux de rue, contrats, formulaires médicaux et correspondance personnelle restent sur l'appareil. Il n'y a pas d'étape de téléchargement nulle part dans le pipeline, donc il n'y a rien à divulguer, à subpoenaer ou à vendre.
- **Latence.** Pas d'aller-retour réseau. L'OCR d'une page typique prise par un smartphone se termine en bien moins d'une seconde sur un appareil récent, et la traduction des résultats par bloc se diffuse au fur et à mesure que chaque bloc se termine.
- **Hors ligne.** Le pipeline fonctionne dans un avion, dans un sous-sol, dans un tunnel, dans un train, dans un pays sans couverture. Le moteur OCR et le moteur de traduction sont téléchargés une fois et réutilisés indéfiniment ; rien n'est récupéré par capture.
- **Coût.** L'application ne paie pas par caractère à une API de traduction, donc la fonction n'a pas besoin d'un paywall basé sur l'utilisation ou d'une limite mensuelle de caractères pour rester durable. Le niveau gratuit est le même pipeline.

## Où vivent les modèles

ML Kit publie des modèles de traduction sur l'appareil pour 19 langues. Chaque modèle pèse environ 10–50 Mo. Lorsque vous choisissez une langue source ou cible, l'application télécharge le modèle correspondant dans le bac à sable local de l'application lors de la première utilisation. Le modèle persiste à travers les redémarrages de l'application ; le supprimer récupère immédiatement le stockage.

La liste complète des langues prises en charge : arabe, chinois (simplifié), tchèque, néerlandais, anglais, français, allemand, croate, hongrois, italien, japonais, coréen, polonais, portugais, roumain, russe, slovaque, slovène et espagnol.

## Ce qui est téléchargé (et ce qui ne l'est pas)

- **Pas téléchargé.** Photos, texte OCR, texte traduit, entrées d'historique, état du modèle linguistique. Rien de tout cela ne quitte l'appareil.
- **Téléchargé.** Rapports d'incident anonymes et compteurs agrégés (par ex. « demandes de traduction par jour »). Les rapports d'incident n'incluent pas le contenu utilisateur ; si un futur rapport contient du contenu, ce serait un bug et devrait être signalé.

## Compromis de l'exécution locale

- **Liste de langues bornée.** Seules les langues que ML Kit publie comme modèles sur appareil sont prises en charge. La liste est curated et compte actuellement 19 entrées.
- **Téléchargement de modèle requis.** Une première translation pour une paire de langues déclenche un téléchargement unique. La page de gestion des modèles affiche l'état et vous permet de pré-télécharger pour les voyages hors ligne.
- **Qualité.** La qualité de la traduction sur appareil est comparable à la traduction cloud pour les textes courts et bien formés. Les longs paragraphes ou le jargon spécifique au domaine peuvent différer d'un moteur cloud ajusté pour ce domaine.
- **Calcul.** L'OCR et la traduction utilisent le CPU et le Neural Engine du téléphone. L'impact sur la batterie pour une seule capture est faible, mais mesurable pour les workflows par lots.

## Ce que cela signifie pour vous

Si vous avez déjà hésité à photographier un document sensible parce que la photo finirait sur le serveur de quelqu'un d'autre, cette hésitation est la raison pour laquelle l'application existe. Chaque partie du pipeline s'exécute localement, et le modèle de données de l'application est conçu autour de la prémisse que rien ne quitte l'appareil à moins que l'utilisateur ne choisisse explicitement de partager un résultat.
