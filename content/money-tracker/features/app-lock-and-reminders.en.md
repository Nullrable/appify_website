---
title: "PIN Lock, Biometrics and the Daily Reminder"
description: "Gate the app behind a 6-digit PIN with an optional Face ID, Touch ID or fingerprint layer on top, and subscribe to a daily spending reminder that stays off until you turn it on."
date: 2026-10-27
lang: en
slug: app-lock-and-reminders
---

Two small features that decide whether the App fits into your routine: it stays closed when you do not want to see it, and it nudges you when you forget to record something.

## Two layers in front of your balance

The lock ships turned off. Turn it on in Settings, pick any six digits as your PIN, and from then on the PIN gates the app every time it returns to the foreground. On top of the PIN sits an optional biometric layer - Face ID or Touch ID on iOS, fingerprint (or face, where the device exposes it through the same API) on Android.

## The platform stays in charge

If a wet finger or a mask keeps the biometric prompt from working, the operating system falls back to the device passcode, not to the app PIN, so the trust chain never leaves the platform. The App does not store your fingerprint, your face, or your PIN - it only asks the system to verify them. Clearing the PIN takes the biometric layer with it.

## The lock fires on every return

The lock applies whenever the app comes back to the foreground, including a quick app switch or a glance at a notification. Until the PIN or the biometric check succeeds, accounts, transactions, statistics and the settings stay hidden.

## A daily reminder, opt-in

If you want a nudge to log today's spending, subscribe the device to the daily reminder topic. The time of day is configurable in Settings, 21:00 by default. Reminders are off until you switch them on, and unsubscribing happens the moment you switch them off. Your reminder preferences sync through a single anonymous record so the setup follows you to a new device - no transaction, account, or category data ever leaves the phone.
