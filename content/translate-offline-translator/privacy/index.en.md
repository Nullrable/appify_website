---
title: Privacy Policy - Translate - Offline Translator
description: How Translate - Offline Translator handles your data. Covers on-device OCR and translation, local storage, permissions, AdMob and RevenueCat data flows, GDPR and CCPA rights.
date: 2026-09-01
lang: en
slug: index
---

**Translate - Offline Translator** ("**we**", "**us**", or "**our**") is designed so that your translations and images stay on your device. This Privacy Policy explains what data the App processes, why, and the choices you have.

By using the App, you agree to the practices described in this Policy.

## 1. Summary

- **On-device OCR and translation.** Image text recognition and translation run locally using Apple Vision and Google ML Kit's on-device models. Your photos and translated text are **not uploaded** to any server we operate.
- **No account.** The App does not require sign-up. We do not collect your name, email, phone number, or any contact information.
- **Local history only.** Your translation history is stored on your device and can be cleared at any time.
- **Ads (free tier).** The free tier displays ads served by Google AdMob. AdMob may receive device-level identifiers and contextual information used to select and measure ads, subject to your consent choices in iOS.
- **Paid tier.** When you subscribe or buy the one-time upgrade, your purchase is validated by RevenueCat using an anonymous identifier and your Apple App Store receipt.

## 2. Data We Do Not Collect

We do **not** collect, transmit, or sell:

- The images you scan or upload
- The text you translate or have translated
- Your name, email, phone number, mailing address, or other contact details
- Your precise or coarse location
- Your contacts, calendar, or other personal content

## 3. Data Processed on Your Device

### 3.1 Optical Character Recognition (OCR)

When you scan an image for translation, the App uses **Apple Vision** (the system `VNRecognizeTextRequest` API) to extract text from the image. Recognition happens entirely on your device. The image is processed in memory and is not sent to our servers or to Apple's servers for recognition. Original photos are read from your photo library through the standard iOS Photos picker; the App does not request full library access unless you explicitly grant it.

### 3.2 Machine Translation

The App uses **Google ML Kit's on-device translation** (`OnDeviceTranslator`) to translate text. Translation runs locally on your device. We do not transmit the text you translate to any server we operate.

The first time you translate between a given pair of languages, the App downloads the corresponding translation model. Model downloads are fetched from Google's servers and are subject to Google's [Privacy Policy](https://policies.google.com/privacy). This is the only network call the App makes for translation-related processing.

### 3.3 Translation History

Your translation history is stored in a local SQLite database using the Drift framework. This data lives only on your device, is encrypted at rest by iOS file protection, and is never uploaded. You can clear your history at any time from the App's settings.

### 3.4 In-App Purchases and Subscriptions

When you make a purchase, the App uses **RevenueCat** to validate the transaction and unlock features. RevenueCat receives:

- A **randomly generated anonymous identifier** (the RevenueCat "App User ID")
- The Apple App Store receipt (or its signed JWS representation) for purchase validation
- The product identifier, price, currency, and purchase date
- Your device locale and app version

RevenueCat uses this data to determine which entitlements (such as `removeAds`) apply to your device and to forward aggregated sales reports to us. See the [RevenueCat Privacy Policy](https://revenuecat.com/privacy).

## 4. Data Collected by Third-Party Services

The following third parties collect data when you use their features in the App. Their use of data is governed by their own privacy policies.

### 4.1 Google Mobile Ads (AdMob) - Free Tier Only

The free tier shows ads served by **Google Mobile Ads (AdMob)**. AdMob may receive:

- **Advertising identifiers**, including Apple's Identifier for Advertisers (IDFA), which iOS only provides after you grant the App Tracking Transparency permission
- **Device information** such as device model, OS version, screen size, language, and locale
- **Ad-serving metadata** such as the ad unit ID, ad type, and whether you viewed or tapped an ad
- **IP address** used to estimate coarse location (typically country or city) and to prevent fraud

You can:

- Decline ad personalization by choosing "Ask App Not to Track" on the iOS tracking prompt
- Reset or limit the IDFA through **Settings -> Privacy & Security -> Tracking** on your device
- Enable **Limit Ad Tracking** in iOS Settings

If you purchase a subscription or the one-time upgrade, the `removeAds` entitlement suppresses ads from AdMob.

For details, see the [Google Privacy Policy](https://policies.google.com/privacy) and the [AdMob privacy information](https://support.google.com/admob/answer/6128543).

### 4.2 Google ML Kit (Model Download)

The first time you use a language pair, the App downloads the corresponding translation model from Google. This request includes standard network metadata (IP address, user agent) visible to Google. Once downloaded, the model is cached locally and used offline.

### 4.3 Apple App Store

Purchases are processed by Apple. Apple's handling of purchase data is governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

## 5. Permissions the App Requests

| Permission | Why we ask | Required? |
|---|---|---|
| **Camera** | To capture a photo to scan and translate | Only when you tap "Scan" |
| **Photo Library (limited)** | To import an existing photo from your library through the system picker | Only when you tap "Choose Photo" |
| **Network** | To download translation models and to serve ads on the free tier | Yes, for first-time model setup and ads |

The App does **not** request microphone, contacts, location, or background-tracking permissions.

## 6. Children's Privacy

The App is intended for general audiences and is not directed to children under 13 (or under the minimum digital-consent age in your jurisdiction). We do not knowingly collect personal data from children. Because the App does not collect personal data from any user, this commitment holds for all age groups.

If you believe a child has provided personal data through a third-party feature (for example, by entering text into a translation that is later surfaced through a RevenueCat debug log), please contact us so we can address it.

## 7. International Data Transfers

- **Google services** may process data in countries other than yours. See [Google's data-transfer policies](https://policies.google.com/privacy) for details.
- **RevenueCat** stores purchase-validation data on infrastructure operated in the United States and the European Union. See the [RevenueCat Privacy Policy](https://revenuecat.com/privacy).
- **Apple** processes App Store purchases through its standard global infrastructure.

The on-device translation, OCR, and translation history described in Section 3 do **not** leave your device and are therefore not subject to international data-transfer rules.

## 8. Your Rights

### 8.1 GDPR (European Economic Area and United Kingdom)

If you are in the EEA or UK, you have the right to:

- **Access** the personal data we hold about you
- **Rectification** of inaccurate data
- **Erasure** ("right to be forgotten")
- **Restriction** or **objection** to processing
- **Data portability** in a machine-readable format
- **Withdraw consent** at any time, without affecting prior processing
- **Lodge a complaint** with your local data-protection authority

Because the App does not maintain a server-side user profile, most of these rights are satisfied automatically by the design of the App:

- To erase translation history, clear it from in-app settings
- To stop ad personalization, use the iOS tracking controls described in Section 4.1
- To delete your purchase association, use "Restore Purchases" with a new anonymous ID or contact us to request server-side deletion of any RevenueCat records linked to your receipt

### 8.2 CCPA / CPRA (California)

California residents have the right to:

- **Know** what personal information is collected and whether it is sold or shared
- **Delete** personal information held about them
- **Opt out of sale or sharing** of personal information
- **Limit** the use of sensitive personal information
- **Non-discrimination** for exercising these rights

The App does **not** sell personal information. "Sharing" for cross-context behavioral advertising is governed by your choices on the iOS tracking prompt.

### 8.3 Other Jurisdictions

Residents of other jurisdictions (for example, Brazil under the LGPD, South Korea under the PIPA, Canada under the PIPEDA) may have similar rights. We extend the protections described above to all users regardless of location, to the extent permitted by applicable law.

## 9. Data Retention

- **Translation history:** Retained on your device until you clear it from settings or uninstall the App.
- **Purchases:** Retained by RevenueCat and Apple according to their respective retention policies.
- **Ad data:** Governed by Google's retention policies for AdMob.
- **Server-side logs (ours):** We do not maintain server-side logs of user activity because the App does not transmit translation content to our servers.

## 10. Security

The App relies on iOS file protection to safeguard locally stored data. Network communication uses HTTPS. Purchase validation is performed against Apple's signed receipts through RevenueCat's authenticated API. No method of transmission or storage, however, is 100% secure, and we cannot guarantee absolute security.

## 11. Changes to This Policy

We may update this Policy from time to time. The "**Last updated**" date at the top of this page reflects when the latest changes took effect. If changes are material, we will provide reasonable notice through the App Store listing or within the App.

## 12. Contact

If you have any questions about this Policy, please contact us through the App's support channel listed on its App Store page.
