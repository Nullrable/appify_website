---
title: "Free vs Pro: what changes when you subscribe"
description: "The free tier includes the full translation pipeline. Pro removes ads and unlocks the subscription badge. Here is what is and is not gated."
date: 2026-09-03
lang: en
slug: free-vs-pro
---

## Free vs Pro: what changes when you subscribe

The free tier of the app includes every translation feature: camera OCR, photo import, text translate, block overlay, the model manager, history and the per-block translation streaming. There is no usage cap, no per-character limit and no language restriction in the free tier. Pro removes ads and adds a Pro badge to the subscription bar.

## What is free

- **All 19 languages.** Every ML Kit-supported language is available in the free tier.
- **Unlimited translations.** No usage cap, no monthly reset, no per-character limit.
- **All entry points.** Camera OCR, photo import, text translate, history, model manager.
- **On-device pipeline.** No upload of photos or text. Privacy is the same in free and Pro.
- **Local history.** Save and browse translations locally; delete any time.

## What Pro adds

- **No ads.** The bottom banner ad that appears in some entry points for free users is removed for Pro users.
- **Pro badge.** The subscription bar shows a Pro · Active state instead of an upgrade prompt.

That is the full difference. The translation pipeline itself is the same.

## Why this structure

Translation cost is paid per character by cloud APIs. The app does not use a cloud API; it runs ML Kit on-device, so the marginal cost of a translation is compute on the user's own phone. The free tier can therefore include the full pipeline without a paywall.

Ads and the Pro subscription exist to fund continued development, not to gate features.

## What is not gated

- **No language restriction.** All 19 ML Kit languages work in the free tier.
- **No feature restriction.** Camera OCR, photo import, text translate, block overlay, history, model manager — all in free.
- **No usage cap.** Unlimited translations, unlimited history entries.
- **No priority queue.** Translation speed is the same for free and Pro users; both run on the same on-device engine.
- **No analytics on translation content.** Crash reports and aggregate counters do not include photo content, OCR text or translation text. Privacy is the same.

## How to subscribe

The subscription bar in the camera page (bottom) and the settings page (top) opens the paywall. The Pro tier is sold as a subscription via the platform's standard in-app purchase flow. The subscription auto-renews until cancelled in the platform subscription settings.

## How to restore a previous subscription

If you reinstall the app or switch devices, the subscription entry icon in the settings page top bar restores the previous purchase via the platform's standard receipt validation. No account is required.

## How to check current status

The subscription bar shows Pro · Active if you are subscribed. The subscription entry icon in the camera page top bar and the settings page top bar shows the same state.

## A summary in one sentence

Free is the full app with ads. Pro is the full app without ads and with a Pro badge. Nothing in the translation pipeline is gated.
