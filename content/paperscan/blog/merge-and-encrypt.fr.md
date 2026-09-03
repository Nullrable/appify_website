---
title: "Export PDF multi-pages avec protection par mot de passe optionnelle"
description: "Export PDF multi-pages avec protection par mot de passe optionnelle"
date: 2026-09-02
lang: fr
slug: merge-and-encrypt
---

L'export PDF de Paper Scan est conçu pour le cas où plusieurs pages scannées doivent être combinées en un seul fichier et livrées via le système de partage standard. Il prend en charge la fusion par lots, la protection optionnelle par mot de passe et le nommage, le tout sur l'appareil.

### Flux d'export standard

1. **Sélection multiple dans la liste Documents.** Appuyez longuement sur un document pour entrer en mode sélection, puis touchez les autres. Un raccourci « tout sélectionner dans le dossier » est disponible pour les lots au même endroit.
2. **Touchez le bouton Partager.** La feuille de partage système s'ouvre. L'export PDF de Paper Scan apparaît parmi les cibles.
3. **Configurez les options.** Activez la fusion pour combiner plusieurs pages, saisissez un mot de passe si nécessaire, nommez le fichier éventuellement. Touchez Exporter.
4. **Attendez le traitement.** Sur des appareils récents, un lot de 50 pages avec deux filtres se termine généralement en moins de 5 secondes. Un lot de 300 pages prend 15–30 secondes. La feuille d'export affiche un indicateur de progression ; l'application reste réactive.
5. **Partagez.** Quand le fichier est prêt, la feuille de partage standard apparaît. Le fichier peut être envoyé par e-mail, AirDrop, Drive, Slack ou toute autre application acceptant les PDF.

### Cas d'usage courants

- **Transfert de documents de réunion.** Fusionnez 50–80 pages de contrats et pièces jointes signées en un seul PDF pour examen juridique.
- **Archivage des reçus.** Fusionnez un mois de reçus en un PDF pour la comptabilité.
- **Partage de dossiers de recherche.** Compilez plusieurs documents de référence en un seul fichier pour vos collègues.
- **Archivage de projets.** Regroupez tous les documents d'un projet terminé en un seul livrable.

### Définir un mot de passe

La feuille d'export contient un seul champ de mot de passe accompagné d'un champ « confirmer le mot de passe ». L'export ne se poursuit que lorsque les deux correspondent ; les saisies non concordantes sont rejetées avant traitement.

Si le champ mot de passe reste vide, la sortie est un PDF standard sans restriction. Si un mot de passe est défini, les destinataires doivent le saisir avant d'ouvrir une page. La protection par mot de passe est recommandée pour les documents contenant des données personnelles : contrats, dossiers médicaux, états financiers.

Règle pratique : laissez vide sauf si la protection est explicitement requise. Il est difficile de retirer un mot de passe d'un PDF après coup, alors qu'un PDF non protégé peut être réexporté avec un mot de passe si nécessaire.

### Quand fusionner, quand diviser

Un seul grand PDF n'est pas toujours la bonne sortie. Divisez mieux quand : la mémoire des appareils destinataires est limitée, différents destinataires ont besoin de différentes parties du lot, ou différents mots de passe sont nécessaires. Chaque fichier exporté a son propre champ de mot de passe.

Paper Scan exporte la sélection telle quelle. Pas de fusion forcée ; la sortie reflète ce que l'utilisateur a choisi.

### Performances pour les gros lots

300+ pages prennent généralement 15–30 secondes ; la barre de progression affiche l'état. Les scans avec filtres lourds (ex. magic color sur un reçu passé) prennent environ deux fois plus que les scans propres. Le chiffrement ne ralentit pas notablement l'export sur les appareils modernes (le goulot d'étranglement est l'encodage d'images). Un gros export chiffré réchauffe l'appareil et consomme quelques pour cent de batterie, ce qui est acceptable pour un usage occasionnel.
