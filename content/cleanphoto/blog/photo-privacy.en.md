---
title: "Photo Cleanup and Privacy: What Stays on Your Device"
description: "A photo library is the most personal dataset on your phone. An honest breakdown of what CleanPhoto reads, what it never reads, what leaves your device, and what does not."
date: 2026-09-06
lang: en
slug: photo-privacy
---

## Photo Cleanup and Privacy: What Stays on Your Device

Give an app access to your photos, and you have handed it the most personal dataset on your phone: your family, your home, your documents, your last ten years. That access is necessary for any photo cleaner to work — which is exactly why the question "what does the app do with it?" deserves a concrete answer, not a slogan. Here is CleanPhoto's, in specifics.

### What the app reads

The scans work from your library's metadata: capture timestamps, image dimensions, album names, titles and file paths, plus file sizes loaded so items can be sorted by size within a group. On iOS, screenshot detection reads the dedicated Screenshots album. On Android, it checks album names and, when needed, image titles and file paths for screenshot naming patterns. That is the full inventory.

### What the app never reads

No scan analyses pixel content. The duplicate rule is dimensions-plus-timestamp; the similar-photo rule is capture timing; the screenshot rule is albums and file names. There is no AI content classification, no face detection, no location analysis, no "photo quality scoring" — not because those would be hard, but because none of them are needed, and each would mean reading the actual content of your photos.

### What leaves your device

Your photos do not. No photo, no thumbnail, no metadata is ever uploaded by the scanning or review process, and no account is required for any of it. What does use the network is ordinary app plumbing: in the free version, ads are loaded from an ad network (Google AdMob), and if you choose Pro, the subscription is processed through the app store with RevenueCat handling the entitlement. Those services receive their own standard data — as they would in any app that shows ads or sells subscriptions — but never your photos or scan results.

### How deletion works

The app cannot silently delete anything. Every deletion goes through your explicit confirmation and is executed through the system photo library, which means the same protected path as when you delete a photo yourself. On iOS, Apple's system permission for deleting photos applies — the system itself asks you to authorize deletions.

### Permissions, listed

Photo library access: needed to scan and to display groups. On iOS you will also see the tracking permission prompt (ATT) required by ad networks to serve relevant ads — you can decline and the app works the same, minus personalized ads. That is the complete list.

### The point

Photo cleanup does not require a cloud, an account, or content analysis. It requires metadata, transparent rules, and your confirmation. That is all CleanPhoto uses — and if a cleaner ever asks for more than that, it is worth asking what it wants it for.
