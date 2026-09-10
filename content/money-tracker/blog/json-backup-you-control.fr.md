---
title: Sauvegarde JSON sous Votre Contrôle - Un Fichier que Vous Pouvez Ouvrir
description: Exportez vos données Money Tracker en un seul fichier JSON — comptes, catégories, transactions — et rangez-le là où vous avez déjà l'habitude de garder vos sauvegardes, ou envoyez-le directement via la feuille de partage système.
date: 2026-09-10
lang: fr
slug: json-backup-you-control
---

L'écran d'export écrit un seul fichier : `money_tracker_<timestamp>.json`, qui contient chaque compte (avec type, instantané du solde et métadonnées), chaque catégorie (système et personnalisées) et chaque transaction (date, montant, compte, catégorie, note, type). Un fichier, toute la base de données.

Vous choisissez où il va. iOS ouvre le sélecteur de documents, Android ouvre Storage Access Framework, donc le fichier peut atterrir dans iCloud Drive, Google Drive, une clé USB ou toute appli tierce enregistrée comme Documents provider. Rien ne vous force dans un cloud particulier.

Juste à côté du sélecteur se trouve la feuille de partage système. De là, le fichier part directement vers e-mail, messagerie, app de notes, AirDrop ou Nearby Share — de bout en bout via le système, jamais via Money Tracker.

JSON est du texte brut. Ouvrez le fichier dans n'importe quel éditeur et vous voyez la structure : un objet avec les tableaux `accounts`, `categories` et `transactions`, chaque entrée un enregistrement plat aux champs nommés. Pas de blobs base64, pas de conteneur chiffré, pas de schéma verrouillé par version.

L'import accepte le même fichier. Si une entrée importée partage un ID avec une entrée existante, l'import écrase sur place au lieu de dupliquer — ainsi une exportation récente par-dessus une plus ancienne n'ajoute que les lignes vraiment nouvelles.
