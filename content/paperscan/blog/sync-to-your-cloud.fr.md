---
title: "Synchronisation cloud: mettre en miroir votre bibliothèque sur votre propre Drive ou iCloud"
description: "Synchronisation cloud: mettre en miroir votre bibliothèque sur votre propre Drive ou iCloud"
date: 2026-09-02
lang: fr
slug: sync-to-your-cloud
---

La synchronisation cloud de Paper Scan met en miroir la bibliothèque de documents dans un dossier Google Drive ou iCloud contrôlé par l'utilisateur. Le téléphone reste l'emplacement principal de toutes les numérisations; le cloud sert de sauvegarde que l'utilisateur possède et à laquelle il peut accéder indépendamment. La synchronisation cloud est une fonctionnalité Pro.

### Ce que fait la fonctionnalité

Lorsqu'elle est activée, la synchronisation cloud télécharge les numérisations vers le stockage cloud de l'utilisateur au fur et à mesure qu'elles sont enregistrées. Les nouvelles numérisations sont téléchargées en arrière-plan. Les numérisations existantes sont téléchargées lors de la première exécution de synchronisation.

Les octets voyagent directement entre le téléphone et le fournisseur cloud. Paper Scan n'exploite pas de serveur relais et aucune copie des numérisations n'est conservée sur l'infrastructure Paper Scan.

### Cas d'utilisation

- **Remplacement de l'appareil.** Passez à un nouveau téléphone, installez Paper Scan, connectez-vous au fournisseur cloud et restaurez la bibliothèque à partir du mirror cloud. Aucun transfert par câble ou outil de sauvegarde tiers n'est requis.
- **Perte d'appareil.** Si le téléphone est perdu ou endommagé, les numérisations sont préservées dans le mirror cloud et la bibliothèque peut être restaurée sur un appareil de remplacement.
- **Navigation multi-appareils.** Ouvrez le dossier cloud dans n'importe quel navigateur pour afficher les numérisations organisées selon la structure de dossiers configurée sur le téléphone. Les fichiers peuvent être partagés, joints à des e-mails ou transférés vers d'autres applications directement depuis le dossier cloud.
- **Sauvegarde hors site.** Maintenez une copie indépendante de la bibliothèque de documents pour la redondance.

### Configuration

1. Ouvrez **Settings → Cloud** dans Paper Scan.
2. Sélectionnez Google Drive ou iCloud. Le fournisseur peut être modifié ultérieurement; les deux fournisseurs utilisent le même moteur de synchronisation.
3. Connectez-vous au compte cloud. Paper Scan demande les autorisations minimales requises: l'accès uniquement à son propre dossier, et non au compte Drive ou iCloud complet.
4. Sélectionnez les dossiers locaux à mettre en miroir. La bibliothèque entière est mise en miroir par défaut; des dossiers spécifiques peuvent être exclus si certaines numérisations doivent rester uniquement sur l'appareil.
5. Appuyez sur **Start Sync**. La première exécution télécharge la bibliothèque existante; les numérisations suivantes sont téléchargées automatiquement au fur et à mesure qu'elles sont enregistrées.

Pour désactiver la synchronisation cloud, désactivez la fonctionnalité dans le même écran Paramètres. Paper Scan ne supprime pas les fichiers du cloud lorsque la synchronisation est désactivée. La copie cloud reste en place jusqu'à ce que l'utilisateur choisisse de la supprimer.

### Portée des autorisations

Paper Scan demande la portée d'autorisation requise pour lire et écrire dans son propre dossier dans Google Drive ou iCloud. Il ne reçoit pas de visibilité sur les autres fichiers du stockage cloud de l'utilisateur, ni n'obtient de jetons qui permettraient l'accès à ces fichiers. Pour vérifier, examinez la liste des applications connectées dans les paramètres du compte Google ou Apple: Paper Scan apparaît avec un accès limité à son dossier d'application désigné, et non au compte complet.

### Restauration

La restauration est une opération distincte de la synchronisation. Elle est lancée manuellement lorsque l'utilisateur souhaite reconstruire la bibliothèque locale à partir de la copie cloud.

1. Installez Paper Scan sur le nouvel appareil et connectez-vous.
2. Ouvrez **Settings → Cloud → Restore**.
3. Sélectionnez le fournisseur et la destination.
4. Attendez que la restauration soit terminée. Une bibliothèque de quelques centaines de numérisations se termine généralement en quelques minutes; une bibliothèque de plusieurs milliers prend plus de temps. La barre de progression reflète la progression réelle.

La restauration est la seule opération dans laquelle l'application récupère des fichiers depuis le cloud. Elle ne s'exécute pas automatiquement ni en arrière-plan.

### Changement de fournisseur et désactivation de la synchronisation

Vous pouvez basculer entre Google Drive et iCloud en désactivant le fournisseur actuel, en activant le nouveau et en vous connectant: la synchronisation suivante commence à zéro du nouveau côté. Les fichiers précédemment mis en miroir sur l'ancien fournisseur y restent jusqu'à ce que l'utilisateur les supprime. La désactivation de la synchronisation arrête les nouveaux téléchargements mais ne supprime pas les fichiers déjà téléchargés; la bibliothèque locale n'est pas affectée. La désactivation et la réactivation de la synchronisation reprennent là où elle s'était arrêtée, et les numérisations ajoutées pendant la période désactivée sont téléchargées lors de la prochaine exécution de synchronisation.

Paper Scan fonctionne entièrement sans synchronisation cloud. La numérisation, l'OCR, les dossiers, les étiquettes et l'exportation PDF fonctionnent tous de manière identique avec ou sans synchronisation activée.
