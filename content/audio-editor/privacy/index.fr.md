---
title: "Politique de confidentialité - Éditeur Audio"
description: "Comment l'Éditeur Audio traite vos données. Couvre le traitement audio et vidéo sur l'appareil, l'édition et l'amélioration locales, la publicité dans la version gratuite, la gestion des abonnements via RevenueCat, ainsi que vos droits au titre du RGPD et du CCPA."
date: 2026-10-17
lang: fr
slug: index
---

**Éditeur Audio** (« **nous** ») est une application de traitement audio et vidéo sur iPhone dont le principe directeur est : vos fichiers audio et vidéo restent sur votre appareil. La présente Politique de confidentialité explique quelles données l'App traite, pourquoi, et les choix dont vous disposez.

En utilisant l'App, vous consentez aux pratiques décrites dans cette politique.

**Dernière mise à jour : 17 octobre 2026**

## 1. Résumé

- **Traitement sur l'appareil.** Tout le traitement audio et vidéo (édition, amélioration, conversion, extraction audio, compression, fusion) s'exécute localement sur votre appareil. Les fichiers audio, les fichiers vidéo et les résultats intermédiaires ne sont **jamais téléversés** sur un serveur que nous exploitons.
- **Aucun compte requis.** L'App ne nécessite pas d'inscription. Nous ne collectons ni votre nom, ni votre e-mail, ni votre numéro de téléphone, ni aucune information de contact.
- **Aucune analyse de contenu.** L'App n'analyse pas le contenu de vos fichiers audio ou vidéo ; elle ne réalise aucune classification IA, reconnaissance vocale, ni identification de locuteur.
- **Publicité (version gratuite, non personnalisée).** La version gratuite affiche des bannières publicitaires sur les écrans Accueil, Historique et Paramètres. L'App **ne demande pas** l'autorisation App Tracking Transparency et **ne lit pas** l'identifiant publicitaire d'Apple ; toutes les publicités sont diffusées en fonction du contexte en temps réel.
- **Version payante.** Lorsque vous vous abonnez à Pro, les achats sont traités par l'App Store, et RevenueCat utilise un identifiant anonyme ainsi que votre reçu de l'App Store pour vérifier l'abonnement.

## 2. Données que nous ne collectons pas

Nous **ne** collectons, transmettons ou vendons **pas** :

- Vos fichiers audio ou vidéo, ni aucune de leurs vignettes
- Les métadonnées audio ou vidéo (date d'enregistrement, durée, localisation) ou tout résultat intermédiaire du traitement
- Votre nom, e-mail, numéro de téléphone, adresse postale ou toute autre information de contact
- La localisation précise ou approximative associée à votre contenu audio ou vidéo
- Vos contacts, calendrier, index de la photothèque ou tout autre contenu personnel

## 3. Données traitées sur votre appareil

### 3.1 Éditeur multipiste

Les clips audio sont placés sur la timeline et transformés en nouveau contenu audio selon les points d'entrée, points de sortie, ordre, vitesse de lecture, mise à l'échelle et chaîne d'effets que vous spécifiez (réduction de bruit, amélioration de la voix, normalisation de loudness, élargissement stéréo, séparation/fusion de canaux). Le fichier original n'est jamais modifié ; le résultat est écrit comme nouveau fichier dans le répertoire sandbox de l'app.

### 3.2 Conversion de format audio

Lit l'un des formats d'entrée pris en charge (MP3, WAV, M4A, AAC, FLAC, OGG, Opus, AIFF, AMR, CAF) et l'exporte au format MP3, WAV, FLAC ou OGG. Le flux audio lui-même est ré-encodé selon les exigences du format cible, et le conteneur est remplacé.

### 3.3 Extraction audio à partir d'une vidéo

Sépare la piste audio des fichiers vidéo MP4, MOV, M4V, AVI, MKV, WebM, FLV, WMV et la ré-encode dans le format que vous choisissez (MP3, WAV, FLAC ou OGG). Le fichier vidéo lui-même n'est pas conservé — il sert uniquement de source pour sa piste audio.

### 3.4 Historique et brouillons

Les paramètres de chaque tâche (type d'outil, heure, chemin du fichier, configuration des paramètres) sont écrits dans une base de données locale ; les brouillons de l'éditeur multipiste sont enregistrés automatiquement pendant que vous faites glisser. Ces données sont entièrement stockées sur votre appareil et entièrement supprimées lorsque vous désinstallez l'app.

## 4. Données collectées par les services tiers

Les tiers suivants collectent des données lorsqu'ils vous fournissent des services. Leur utilisation des données est régie par leurs politiques de confidentialité respectives.

### 4.1 Ad SDK — version gratuite uniquement

La version gratuite affiche des bannières publicitaires sur les écrans Accueil, Historique et Paramètres. Les publicités sont non personnalisées :

**Les publicités sont non personnalisées.** L'App n'appelle pas l'API App Tracking Transparency et ne lit pas l'identifiant publicitaire d'Apple. Toutes les publicités sont diffusées en fonction du contexte en temps réel, sans lien avec votre comportement d'utilisation de l'appareil. Le SDK publicitaire peut recevoir :

- **Informations sur l'appareil**, telles que le modèle de l'appareil, la version du système, la taille de l'écran, la langue et la région
- **Métadonnées de diffusion publicitaire**, telles que l'identifiant d'unité publicitaire, le type d'annonce, et le fait que vous avez vu ou cliqué sur une publicité
- **Adresse IP**, utilisée pour estimer une localisation approximative (généralement le pays ou la ville) et pour prévenir la fraude

Après avoir souscrit à Pro, les publicités sont supprimées et le SDK publicitaire ne reçoit plus de données de l'App.

### 4.2 RevenueCat (gestion des abonnements)

Lorsque vous vous abonnez à Pro, l'app utilise **RevenueCat** pour vérifier votre abonnement et gérer vos droits. RevenueCat reçoit :

- Un **identifiant anonyme généré aléatoirement** (le RevenueCat « App User ID »)
- Votre reçu de l'App Store pour la vérification de l'achat
- L'identifiant du produit, le prix, la devise et la date d'achat
- La locale de votre appareil et la version de l'app

Consultez la [Politique de confidentialité de RevenueCat](https://revenuecat.com/privacy).

### 4.3 Apple App Store

Les achats sont traités par l'Apple App Store. Leur traitement des données d'achat est régi par la [Politique de confidentialité d'Apple](https://www.apple.com/legal/privacy/).

## 5. Autorisations demandées par l'App

| Autorisation | Pourquoi nous la demandons | Requise |
|---|---|---|
| **Accès à la photothèque** | Lire l'audio ou la vidéo à traiter, écrire l'audio traité | Oui, requise pour le traitement |
| **Accès aux fichiers (App Fichiers)** | Lire ou enregistrer des fichiers dans l'App Fichiers | Non — utilisée uniquement lorsque vous choisissez activement Fichiers comme source |

L'App **ne demande pas** les autorisations pour la caméra, le microphone (sauf si vous lancez explicitement un enregistrement), les contacts, la localisation ou le suivi (ATT).

## 6. Confidentialité des enfants

L'App s'adresse à un public général et n'est pas destinée aux enfants de moins de 13 ans (ou sous l'âge minimal de consentement numérique dans votre juridiction). Nous ne collectons pas sciemment de données personnelles auprès d'enfants. L'App ne collectant aucune donnée personnelle d'aucun utilisateur, cet engagement s'applique à toutes les tranches d'âge.

## 7. Transferts internationaux de données

- Le **SDK publicitaire** peut traiter des données en dehors de votre pays. Le fournisseur spécifique et ses politiques de transfert de données sont décrits dans sa documentation officielle.
- **RevenueCat** stocke les données de vérification d'achat sur son infrastructure située aux États-Unis et dans l'Union européenne. Consultez la [Politique de confidentialité de RevenueCat](https://revenuecat.com/privacy).
- **Apple** traite les achats de l'App Store via son infrastructure mondiale standard.

Le traitement sur l'appareil décrit dans la section 3 **ne quitte pas** votre appareil et n'est donc pas soumis aux règles internationales de transfert de données.

## 8. Vos droits

### 8.1 RGPD (Espace économique européen et Royaume-Uni)

Si vous êtes dans l'Espace économique européen ou au Royaume-Uni, vous disposez des droits d'accès, de rectification, d'effacement, de limitation ou d'opposition au traitement de vos données personnelles, du droit à la portabilité des données, du droit de retirer votre consentement à tout moment, et du droit d'introduire une réclamation auprès de votre autorité locale de protection des données.

L'App ne maintenant pas de profil utilisateur côté serveur, la plupart de ces droits sont déjà satisfaits par la conception de l'App :

- Votre audio et votre vidéo ne quittent jamais votre appareil ; désinstaller l'App supprime tout
- La publicité est toujours non personnalisée (voir section 4.1), aucune commande supplémentaire n'est requise
- Pour supprimer l'association avec vos achats, contactez-nous afin de demander la suppression de tout enregistrement RevenueCat lié à votre reçu

### 8.2 CCPA / CPRA (Californie)

Les résidents californiens ont le droit de savoir quelles informations personnelles sont collectées, de supprimer ces informations, de refuser leur vente ou leur partage, ainsi que le droit de ne pas subir de discrimination pour avoir exercé ces droits. L'App **ne vend pas** d'informations personnelles et **ne partage pas** d'informations personnelles à des fins de publicité comportementale cross-context — toutes les publicités sont non personnalisées.

### 8.3 Autres juridictions

Les résidents d'autres juridictions (par exemple le Brésil sous LGPD, la Corée du Sud sous PIPA, le Canada sous PIPEDA) peuvent bénéficier de droits similaires. Dans la mesure permise par le droit applicable, nous étendons les protections ci-dessus à tous les utilisateurs, quel que soit leur lieu de résidence.

## 9. Conservation des données

- **Fichiers audio et vidéo :** restent uniquement sur votre appareil. Comme rien ne nous est transmis, nous n'effectuons aucune conservation.
- **Historique et brouillons :** stockés dans la base de données locale de votre appareil ; entièrement supprimés lorsque vous désinstallez l'App.
- **Achats :** conservés par RevenueCat et l'App Store selon leurs politiques de conservation respectives.
- **Données publicitaires :** soumises à la politique de conservation du fournisseur du SDK publicitaire.

## 10. Sécurité

L'App s'appuie sur la protection des fichiers intégrée à votre appareil. Tout le traitement s'effectue localement via les interfaces protégées de la photothèque système et du système de fichiers local. La communication réseau avec des tiers utilise HTTPS. Cependant, aucune méthode de transmission ou de stockage ne peut être garantie à 100 % sécurisée et nous ne pouvons pas garantir une sécurité absolue.

## 11. Modifications de cette politique

Nous pouvons mettre à jour cette politique de temps à autre. La date de « **Dernière mise à jour** » ci-dessus indique quand la modification la plus récente prend effet. Pour les changements significatifs, nous fournirons un préavis raisonnable dans l'App ou via la page App Store.

## 12. Contact

Si vous avez des questions concernant cette politique, veuillez nous contacter à **nhsoft.lsd@gmail.com**.
