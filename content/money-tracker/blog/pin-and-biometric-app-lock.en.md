---
title: PIN and Biometric Lock - Two Layers Before You See Your Balance
description: Money Tracker can require a 6-digit PIN every time the app returns to the foreground, with Face ID, Touch ID, or fingerprint as a faster path on top. Set the PIN once in Settings and the lock fires on every return.
date: 2026-09-10
lang: en
slug: pin-and-biometric-app-lock
---

Money Tracker ships with the lock off. Turn it on in Settings, pick any six digits as your PIN, and from then on the PIN gates the app every time you return to it.

You set the PIN first; biometrics come on top of it. Face ID or Touch ID on iOS, fingerprint (or face, where the device exposes it through the same API) on Android. If a wet finger or a mask keeps the biometric prompt from working, the OS falls back to the device passcode, not the app PIN, so the trust chain stays on the platform. Clearing the PIN takes biometrics with it.

The lock fires every time the app comes back to the foreground - including a quick app switch or a glance at a notification. Until PIN or biometric is satisfied, the accounts, transactions, stats, and Settings stay hidden.
