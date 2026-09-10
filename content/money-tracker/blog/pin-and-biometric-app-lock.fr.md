---
title: Verrou PIN et Biométrique - Deux Couches Avant de Voir Votre Solde
description: Money Tracker peut exiger un PIN à 6 chiffres à chaque retour au premier plan, avec Face ID, Touch ID ou empreinte digitale comme chemin plus rapide par-dessus. Définissez le PIN une fois dans les Réglages et le verrou se déclenche à chaque retour.
date: 2026-09-10
lang: fr
slug: pin-and-biometric-app-lock
---

Money Tracker est livré avec le verrou désactivé. Activez-le dans les Réglages, choisissez six chiffres comme PIN, et à partir de ce moment le PIN ferme l'accès à chaque retour dans l'app.

Le PIN est le plancher : il fonctionne sur tout appareil, sans dépendance matérielle. Au-dessus se pose une couche biométrique optionnelle — Face ID ou Touch ID sur iOS, empreinte digitale (ou visage, quand l'appareil l'expose via la même API) sur Android. Il faut définir le PIN avant d'activer la biométrie, et effacer le PIN emporte la biométrie avec. Si un doigt mouillé ou un masque empêche le prompt biométrique de fonctionner, le système retombe sur le code de l'appareil, pas sur le PIN de l'app, donc la chaîne de confiance reste ancrée à la plateforme.

Le verrou se déclenche à chaque retour au premier plan — pas seulement à l'ouverture à froid. Un changement rapide vers une autre app, un coup d'œil à une notification, une heure d'absence et un retour : chacun fait remonter le verrou. Tant que le PIN ou la biométrie n'est pas satisfait, les comptes, les transactions, les statistiques et les Réglages restent cachés.
