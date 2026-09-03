---
title: "Dépannage des téléchargements iCloud bloqués"
description: "Dépannage des téléchargements iCloud bloqués"
date: 2026-09-02
lang: fr
slug: stuck-icloud-upload
---

Lorsque la synchronisation iCloud dans Paper Scan semble bloquée(généralement affichée comme un nombre de téléchargements partiels qui ne change pas sur plusieurs minutes), la cause est presque toujours l'une des quatre conditions de configuration ou de système côté iOS. La liste de contrôle suivante les couvre par ordre de fréquence.

### 1. iCloud Drive n'est pas activé pour Paper Scan

Deux bascules indépendantes doivent être activées. Si l'une est désactivée, Paper Scan met en file d'attente des téléchargements qu'iOS rejette silencieusement, laissant la barre d'état bloquée au nombre initial.

- **Réglages iOS → [votre nom] → iCloud → Afficher tout → Paper Scan** doit être activé.
- **Réglages iOS → Paper Scan → iCloud Drive** doit être activé.

La deuxième bascule est la plus souvent manquée. Les deux réglages sont liés mais distincts; les deux doivent être activés pour que les téléchargements continuent.

### 2. iOS limite la synchronisation en arrière-plan

iOS limite l'activité iCloud en arrière-plan dans deux conditions: le mode Économie d'énergie est activé(désactivez-le dans Réglages iOS → Batterie), ou le stockage de l'iPhone est presque plein(iOS nécessite environ 500 Mo d'espace libre pour que les téléchargements en arrière-plan continuent; libérez de l'espace dans Réglages iOS → Général → Stockage iPhone). iOS n'affiche pas d'avertissement "stockage plein" dans ce contexte; les téléchargements s'arrêtent simplement.

### 3. La file d'attente de téléchargement est volumineuse

Paper Scan traite les téléchargements séquentiellement. Si un important backlog s'est accumulé, par exemple après une période hors ligne, la file d'attente nécessite du temps pour se vider. En estimation grossière, attendez environ 50 pages par heure sur Wi-Fi domestique standard, plus rapide sur des connexions solides et plus lent sur cellular.

Pour déterminer si la file d'attente est "lente mais progresse" ou "réellement bloquée", laissez l'application en arrière-plan pendant 30 à 60 minutes et vérifiez la barre d'état. Si le nombre a avancé, la synchronisation fonctionne. Si le nombre est inchangé, l'une des autres conditions s'applique.

### 4. L'état du compte iCloud est corrompu

C'est rare mais peut se produire après des modifications d'identifiant Apple, des cycles de déconnexion et reconnexion, ou une restauration à partir d'une sauvegarde. Symptômes: la barre d'état est bloquée et aucune des étapes ci-dessus ne l'a résolu.

Deux étapes d'escalade: désactivez et réactivez iCloud Drive(Réglages iOS → [votre nom] → iCloud → désactiver iCloud Drive, attendre 30 secondes, réactiver), ou déconnectez-vous d'iCloud et reconnectez-vous(Réglages iOS → [votre nom] → Déconnexion, puis reconnectez-vous). La seconde action est radicale mais réinitialise la connexion iCloud de bout en bout. Si la file d'attente reste bloquée au même nombre après les deux étapes, le problème est probablement côté iCloud: la page d'état du système Apple sur support.apple.com indique si iCloud Drive rencontre actuellement une panne.

### Quand escalader vers le support

Dans la majorité des cas, la cause est côté iOS. Paper Scan peut être en faute lorsque le nombre de la barre d'état n'a pas changé depuis plus d'une heure, que d'autres applications utilisant iCloud sur le même appareil se synchronisent normalement, que les étapes de configuration ci-dessus ont été appliquées et que l'application a été redémarrée, et que les mêmes documents sont marqués comme en attente de téléchargement sur plusieurs lancements d'application sans progrès. Lorsque ces conditions s'appliquent, soumettez un rapport de bug via **Réglages → Envoyer des commentaires** dans l'application. Le rapport inclut automatiquement le journal d'activité de synchronisation récent, éliminant le besoin de décrire le problème en détail.

Plusieurs fonctionnalités de Paper Scan existent spécifiquement pour traiter les scénarios de téléchargement bloqué: la barre d'état affiche à la fois le nombre actuel et un horodatage distinct de dernière activité, un document qui échoue au téléchargement trois fois consécutives est marqué d'une icône d'avertissement, et les téléchargements en arrière-plan s'interrompent proprement lorsque le mode Économie d'énergie est activé et reprennent lorsqu'il est désactivé plutôt que de supprimer silencieusement les éléments en file d'attente.
