---
title: À propos de Money Tracker - Une App de Finances Privée et Locale
description: Money Tracker conserve chaque compte, chaque catégorie et chaque transaction sur votre téléphone. Six types de compte, OCR de reçus sur l'appareil, clavier de saisie à quatre fonctions, verrou PIN ou biométrique et sauvegarde JSON, en 10 langues.
date: 2026-09-10
lang: fr
slug: index
---

Money Tracker est une app de finances personnelles pour iOS et Android, pensée pour quiconque veut un relevé propre et privé de ce qui entre et sort. Tout — comptes, catégories, transactions, statistiques — vit sur votre téléphone. Aucun serveur ne garde vos données.

L'écran d'accueil montre la vue du mois : revenus, dépenses, solde net cumulé sur tous vos comptes. En dessous, ces mêmes données se lisent en liste groupée par jour, en grille mensuelle ou en calendrier où chaque date porte sa propre étiquette de revenu et de dépense.

## Six types de compte, un seul grand livre

Espèces, banque, carte de crédit, portefeuille numérique, investissement, épargne. Chaque compte porte son propre solde, sa propre liste de transactions et une vue de détail avec les revenus, dépenses et dernières écritures du mois. Marquez n'importe quel compte comme défaut pour les nouvelles transactions ; le formulaire l'ouvre pré-sélectionné.

Supprimer un compte ne le détruit pas. Le compte et tout ce qui s'y rattache passent dans une section « Supprimés », d'où un tap les restaure.

## Catégories, prêtes à l'emploi et personnalisées

L'app embarque 8 catégories de dépense et 4 de revenu, déjà localisées en anglais, chinois simplifié et chinois traditionnel. Ajoutez autant de catégories personnalisées que vous voulez, chacune avec sa couleur et son icône. Catégories système et personnalisées vivent dans des sections séparées du gestionnaire. Supprimer une catégorie personnalisée qui a encore des transactions attachées demande confirmation ; la suppression est douce, donc un tap de trop reste récupérable. Les catégories sont partagées entre comptes, donc une saisie « Alimentation » en espèces et une saisie « Alimentation » sur la carte de crédit restent comparables dans les statistiques.

## OCR de reçus, sur votre téléphone

Au-dessus du champ montant se trouve une petite carte appareil photo. Photographiez un reçu papier et Money Tracker pré-remplit le total, la date et un nom de commerce provisoire. La reconnaissance tourne sur votre téléphone, donc la photo ne va nulle part. Chaque valeur pré-remplie est éditable avant la sauvegarde. Un second flux d'OCR vit dans le formulaire d'édition de compte, pour scanner une carte bancaire ou un numéro de compte.

## Saisie de montant style calculatrice

Toucher le champ montant ouvre un clavier à quatre fonctions avec aperçu en direct de l'expression. Tapez `12.50 + 8.40`, voyez `20.90` instantanément, puis envoyez au formulaire. Une arithmétique longue, pénible sur le clavier d'un téléphone, devient un seul mouvement continu.

## Statistiques qui collent à votre façon de dépenser

L'onglet Statistiques associe un diagramme en camembert des catégories à une courbe de tendance sur 30 jours et une sur 12 mois. Filtrez par dépense, revenu ou bénéfice. Filtrez par plage de comptes. Touchez une part ou une ligne pour ouvrir les transactions derrière — paginées, avec recherche par mot-clé dans la note et suppression par glissement. Chaque compte a une vue liste et une vue mensuelle, avec une vue annuelle superposée pour les longs historiques. Graphiques, drill-downs et listes par compte lisent les mêmes données, donc ils ne se contredisent jamais.

## Rappel quotidien, opt-in

Si vous voulez un coup de pouce pour enregistrer les dépenses du jour, abonnez l'appareil à un sujet de rappel quotidien. L'heure est configurable dans les Réglages (21:00 par défaut). Les rappels restent éteints tant que vous ne les activez pas, et se désabonnent à l'instant où vous les coupez. Vos préférences de rappel se synchronisent via un seul enregistrement anonyme, donc le paramétrage vous suit sur un nouvel appareil. Aucune donnée de transaction, de compte ou de catégorie ne quitte le téléphone — seul ce réglage-là en sort.

## Sauvegarde JSON, à votre façon

L'écran d'export écrit un seul fichier `money_tracker_<timestamp>.json` contenant toute la base. Rangez-le via le sélecteur de dossiers du système : iCloud Drive, Google Drive, Fichiers, une clé USB ou toute appli tierce enregistrée comme Documents provider. La feuille de partage système est juste à côté : e-mail, messagerie, notes, AirDrop, Nearby Share. JSON est du texte brut — ouvrez-le dans n'importe quel éditeur pour l'inspecter. L'import accepte le même fichier : si une entrée importée partage un ID avec une existante, elle est écrasée sur place au lieu d'être dupliquée, donc les sauvegardes mensuelles se fusionnent proprement.

## Verrou PIN et biométrique

Un PIN à 6 chiffres peut garder l'app à chaque retour au premier plan. Définissez-le dans les Réglages, choisissez six chiffres, et le PIN est demandé avant tout affichage. Sur le PIN se pose une couche biométrique optionnelle — Face ID ou Touch ID sur iOS, empreinte digitale (ou visage) sur Android. Si le prompt biométrique ne peut aboutir, le système retombe sur le code de l'appareil, pas sur le PIN de l'app, donc la chaîne de confiance reste ancrée à la plateforme.

## Local uniquement, par conception

Comptes, catégories, transactions, texte OCR, statistiques — tout vit dans une base locale dans le stockage privé de l'app. Désinstaller l'app efface tout. Les deux seuls appels réseau optionnels dans toute l'app sont le push de rappel et la synchronisation des réglages de rappel ; les deux sont désactivés par défaut. Pas de SDK analytics, pas de publicité, pas de pistage.

## Langues et thème

Disponible en anglais, chinois simplifié, chinois traditionnel, italien, allemand, japonais, coréen, espagnol, portugais et français. Le thème suit l'appareil par défaut ; un tap vous permet de forcer clair ou sombre. Le premier jour de la semaine (lundi ou dimanche) est aussi configurable et influe sur le rendu de la grille mensuelle et quotidienne.
