---
title: "Privacy Policy - CleanPhoto"
description: "How CleanPhoto handles your data. Covers on-device metadata scanning, photo deletion through the system library, AdMob ads in the free tier, RevenueCat subscription management, and your GDPR and CCPA rights."
date: 2026-01-26
lang: en
slug: index
---

**CleanPhoto** ("**we**", "**us**", or "**our**") is a photo cleanup app designed so that your photos stay on your device. This Privacy Policy explains what data the App processes, why, and the choices you have.

By using the App, you agree to the practices described in this Policy.

**Last updated: January 26, 2026**

## 1. Summary

- **On-device scanning.** All scans (duplicates, similar photos, screenshots) run locally on your device using your photo library's metadata. Your photos, thumbnails, and scan results are **never uploaded** to any server we operate.
- **No account.** The App does not require sign-up. We do not collect your name, email, phone number, or any contact information.
- **No content analysis.** The App does not analyze the pixel content of your photos. There is no AI classification, face detection, or location analysis of any kind.
- **You control deletion.** The App cannot silently delete anything. Every deletion requires your explicit confirmation and is executed through the system photo library.
- **Ads (free tier).** The free tier displays ads served by Google AdMob before a confirmed deletion completes. AdMob may receive device-level identifiers and contextual information used to select and measure ads, subject to your consent choices.
- **Paid tier.** When you subscribe to Pro, the purchase is processed by your app store, with RevenueCat validating the subscription using an anonymous identifier and your store receipt.

## 2. Data We Do Not Collect

We do **not** collect, transmit, or sell:

- Your photos or any thumbnails of them
- Scan results or any metadata derived from your photo library
- Your name, email, phone number, mailing address, or other contact details
- Your precise or coarse location as it relates to your photos
- Your contacts, calendar, or other personal content

## 3. Data Processed on Your Device

### 3.1 Duplicate Scanning

The duplicate detector groups photos by their image dimensions (width and height) and capture timestamp. Photos that share the same dimensions and were captured in the same second are grouped together for your review. This comparison uses only library metadata.

### 3.2 Similar-Photo Scanning

The similar-photo detector sorts your library by capture time and chains together photos taken within 10 seconds of each other. This matches how burst shots and rapid retakes occur. Groups containing a single photo are discarded. This rule uses capture timing only.

### 3.3 Screenshot Detection

On iOS, the App reads the system Screenshots album directly. On Android, where storage locations vary by manufacturer, the App checks album names and, when needed, image titles and file paths for screenshot naming patterns. Results are grouped by capture day.

### 3.4 File Sizes

To help you pick the best copy within a group, the App loads each photo's file size before the review screen opens, and sorts items by size. This value is read from your device and is not transmitted anywhere.

## 4. How Deletion Works

The App cannot silently delete anything. Every deletion:

1. Requires your **explicit confirmation** in the App
2. Is executed through the **system photo library** — the same protected path used when you delete a photo yourself
3. On iOS, is additionally subject to **Apple's system permission for deleting photos**, under which the system itself asks you to authorize deletions

Deleted photos go to your system's "Recently Deleted" area, where they are subject to your device's own recovery and permanent-deletion rules.

## 5. Data Collected by Third-Party Services

The following third parties collect data when you use their features in the App. Their use of data is governed by their own privacy policies.

### 5.1 Google AdMob - Free Tier Only

The free tier shows ads served by **Google AdMob**. When you confirm a deletion in the free tier, a short ad plays first, and the deletion completes right after it. AdMob may receive:

- **Advertising identifiers** — on iOS, Apple's Identifier for Advertisers (IDFA), which iOS only provides after you grant the App Tracking Transparency permission; on Android, the Google Advertising ID
- **Device information** such as device model, OS version, screen size, language, and locale
- **Ad-serving metadata** such as the ad unit ID, ad type, and whether you viewed or tapped an ad
- **IP address** used to estimate coarse location (typically country or city) and to prevent fraud

You can:

- Decline ad personalization by choosing "Ask App Not to Track" on the iOS tracking prompt — the App works exactly the same, minus personalized ads
- Reset or limit the IDFA through **Settings -> Privacy & Security -> Tracking** on your iOS device
- Opt out of ad personalization in your Android device's Google Ads settings

If you subscribe to Pro, ads are removed and AdMob no longer receives data from the App.

For details, see the [Google Privacy Policy](https://policies.google.com/privacy) and the [AdMob privacy information](https://support.google.com/admob/answer/6128543).

### 5.2 RevenueCat (Subscription Management)

When you subscribe to Pro, the App uses **RevenueCat** to validate the subscription and manage your entitlement. RevenueCat receives:

- A **randomly generated anonymous identifier** (the RevenueCat "App User ID")
- Your app store receipt for purchase validation
- The product identifier, price, currency, and purchase date
- Your device locale and app version

See the [RevenueCat Privacy Policy](https://revenuecat.com/privacy).

### 5.3 Apple App Store / Google Play

Purchases are processed by Apple or Google, depending on your platform. Their handling of purchase data is governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/) and [Google's Privacy Policy](https://policies.google.com/privacy).

## 6. Permissions the App Requests

| Permission | Why we ask | Required? |
|---|---|---|
| **Photo library access** | To scan your library and display photo groups for review | Yes, for scanning |
| **Delete photos (iOS system permission)** | To execute deletions you have explicitly confirmed | Yes, for deleting |
| **Tracking (ATT, iOS only)** | Required by ad networks to serve personalized ads in the free tier | No — you can decline and the App works the same, with non-personalized ads |

The App does **not** request camera, microphone, contacts, or location permissions.

## 7. Children's Privacy

The App is intended for general audiences and is not directed to children under 13 (or under the minimum digital-consent age in your jurisdiction). We do not knowingly collect personal data from children. Because the App does not collect personal data from any user, this commitment holds for all age groups.

## 8. International Data Transfers

- **Google services** (AdMob) may process data in countries other than yours. See [Google's data-transfer policies](https://policies.google.com/privacy) for details.
- **RevenueCat** stores purchase-validation data on infrastructure operated in the United States and the European Union. See the [RevenueCat Privacy Policy](https://revenuecat.com/privacy).
- **Apple** and **Google** process app store purchases through their standard global infrastructure.

The on-device scanning described in Section 3 does **not** leave your device and is therefore not subject to international data-transfer rules.

## 9. Your Rights

### 9.1 GDPR (European Economic Area and United Kingdom)

If you are in the EEA or UK, you have the right to access, rectify, erase, restrict, or object to the processing of your personal data, to data portability, to withdraw consent at any time, and to lodge a complaint with your local data-protection authority.

Because the App does not maintain a server-side user profile, most of these rights are satisfied automatically by the design of the App:

- Your photos and scan results never leave your device; uninstalling the App removes all of them
- To stop ad personalization, use the tracking controls described in Section 5.1
- To delete your purchase association, contact us to request server-side deletion of any RevenueCat records linked to your receipt

### 9.2 CCPA / CPRA (California)

California residents have the right to know what personal information is collected, to delete it, to opt out of its sale or sharing, and to not be discriminated against for exercising these rights. The App does **not** sell personal information. "Sharing" for cross-context behavioral advertising is governed by your choices on the tracking prompt.

### 9.3 Other Jurisdictions

Residents of other jurisdictions (for example, Brazil under the LGPD, South Korea under the PIPA, Canada under the PIPEDA) may have similar rights. We extend the protections described above to all users regardless of location, to the extent permitted by applicable law.

## 10. Data Retention

- **Photos and scan results:** Retained on your device only. Nothing is retained by us because nothing is transmitted to us.
- **Purchases:** Retained by RevenueCat and your app store according to their respective retention policies.
- **Ad data:** Governed by Google's retention policies for AdMob.

## 11. Security

The App relies on your device's built-in file protection. All scanning and deletion happen locally through the system photo library's protected interfaces. Network communication with third parties uses HTTPS. No method of transmission or storage, however, is 100% secure, and we cannot guarantee absolute security.

## 12. Changes to This Policy

We may update this Policy from time to time. The "**Last updated**" date above reflects when the latest changes took effect. If changes are material, we will provide reasonable notice through the App Store listing or within the App.

## 13. Contact

If you have any questions about this Policy, please contact us at **nhsoft.lsd@gmail.com**.
