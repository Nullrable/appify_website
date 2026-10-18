---
title: "Privacy Policy - Audio Editor"
description: "How Audio Editor handles your data. Covers on-device audio and video processing, local editing and enhancement, advertising in the free version, RevenueCat subscription management, and your rights under GDPR and CCPA."
date: 2026-10-17
lang: en
slug: index
---

**Audio Editor** ("**we**") is an audio and video processing app on iPhone whose guiding principle is: your audio and video stays on your device. This Privacy Policy explains what data the App handles, why, and the choices you have.

By using the App, you consent to the practices described in this policy.

**Last updated: October 17, 2026**

## 1. Summary

- **On-device processing.** All audio and video processing (editing, enhancement, conversion, audio extraction, compression, merging) runs locally on your device. Audio files, video files, and intermediate results are **never uploaded** to any server we operate.
- **No account needed.** The App does not require sign-up. We do not collect your name, email, phone number, or any contact information.
- **No content analysis.** The App does not analyze the content of your audio or video; it performs no AI classification, speech recognition, or speaker identification.
- **Advertising (free version, non-personalized).** The free version shows banner ads on the Home, History, and Settings screens. The App does **not** request App Tracking Transparency permission and does **not** read Apple's advertising identifier; all ads are served based on real-time context.
- **Paid version.** When you subscribe to Pro, purchases are handled by the App Store, and RevenueCat uses an anonymous identifier and your store receipt to verify the subscription.

## 2. Data we do not collect

We do **not** collect, transmit, or sell:

- Your audio or video files, or any thumbnails of them
- Audio or video metadata (recording time, duration, location) or any intermediate results during processing
- Your name, email, phone number, mailing address, or other contact information
- Precise or coarse location associated with your audio or video
- Your contacts, calendar, photo library index, or other personal content

## 3. Data processed on your device

### 3.1 Multi-track editor

Audio clips are placed on the timeline and turned into new audio using the in-points, out-points, ordering, playback rate, scaling, and effect chain you specify (noise reduction, voice enhancement, loudness normalization, stereo widening, channel split/merge). The original file is never modified, and the result is written as a new file to the app's sandbox directory.

### 3.2 Audio format conversion

Reads any of the supported input formats (MP3, WAV, M4A, AAC, FLAC, OGG, Opus, AIFF, AMR, CAF) and exports as one of MP3, WAV, FLAC, OGG. The audio stream itself is re-encoded to meet the target format's requirements, and the container wrapper is swapped.

### 3.3 Audio extraction from video

Strips the audio track from MP4, MOV, M4V, AVI, MKV, WebM, FLV, and WMV video files and re-encodes it to the format you choose (one of MP3, WAV, FLAC, OGG). The video file itself is not retained - it is used only as a source for its audio track.

### 3.4 History and drafts

The parameters for each task (tool type, time, file path, parameter configuration) are written to a local database; multi-track editor drafts are auto-saved as you drag. This data is stored entirely on your device and is fully deleted when you uninstall the app.

## 4. Data collected by third-party services

The following third parties collect data when they provide services to you. Their use of data is governed by their respective privacy policies.

### 4.1 Ad SDK - free version only

The free version shows banner ads on the Home, History, and Settings screens. Ads are non-personalized:

**Ads are non-personalized.** The App does not call the App Tracking Transparency API and does not read Apple's advertising identifier. All ads are served based on real-time context, unrelated to your device usage behavior. The ad SDK may receive:

- **Device information**, such as device model, system version, screen size, language, and region
- **Ad serving metadata**, such as ad unit ID, ad type, and whether you viewed or tapped an ad
- **IP address**, used to estimate coarse location (typically country or city) and to prevent fraud

After subscribing to Pro, ads are removed, and the ad SDK no longer receives data from the App.

### 4.2 RevenueCat (subscription management)

When you subscribe to Pro, the app uses **RevenueCat** to verify your subscription and manage your entitlements. RevenueCat receives:

- A **randomly generated anonymous identifier** (the RevenueCat "App User ID")
- Your App Store receipt for purchase verification
- Product identifier, price, currency, and purchase date
- Your device locale and app version

See the [RevenueCat Privacy Policy](https://revenuecat.com/privacy).

### 4.3 Apple App Store

Purchases are handled by the Apple App Store. Its handling of purchase data is governed by the [Apple Privacy Policy](https://www.apple.com/legal/privacy/).

## 5. Permissions the App requests

| Permission | Why we request it | Required |
|---|---|---|
| **Photo library access** | Read audio or video to be processed; write processed audio | Yes, required for processing |
| **Files access (Files App)** | Read or save files in the Files App | No - used only when you actively choose Files as the source |

The App does **not** request camera, microphone (unless you explicitly start recording), contacts, location, or tracking (ATT) permissions.

## 6. Children's privacy

The App is intended for a general audience and is not directed at children under 13 (or under the minimum digital consent age in your jurisdiction). We do not knowingly collect personal data from children. Because the App does not collect any user's personal data, this commitment applies to all age groups.

## 7. International data transfers

- The **Ad SDK** may process data outside your country. The specific vendor and its data transfer policies are described in its official documentation.
- **RevenueCat** stores purchase verification data on its infrastructure located in the United States and the European Union. See the [RevenueCat Privacy Policy](https://revenuecat.com/privacy).
- **Apple** processes App Store purchases through its standard global infrastructure.

The on-device processing described in Section 3 does **not** leave your device and is therefore not subject to international data transfer rules.

## 8. Your rights

### 8.1 GDPR (European Economic Area and the United Kingdom)

If you are in the European Economic Area or the United Kingdom, you have the right to access, correct, delete, restrict, or object to the processing of your personal data, the right to data portability, the right to withdraw consent at any time, and the right to lodge a complaint with your local data protection authority.

Because the App does not maintain a server-side user profile, most of these rights are already met by the App's design:

- Your audio and video never leave your device; uninstalling the App removes everything
- Advertising is always non-personalized (see Section 4.1), so no additional controls are required
- To delete your purchase association, contact us to request deletion of any RevenueCat records tied to your receipt

### 8.2 CCPA / CPRA (California)

California residents have the right to know what personal information is collected, to delete that information, to opt out of its sale or sharing, and the right not to be discriminated against for exercising these rights. The App does **not** sell personal information and does **not** share personal information for cross-context behavioral advertising - all ads are non-personalized.

### 8.3 Other jurisdictions

Residents of other jurisdictions (for example, Brazil under LGPD, South Korea under PIPA, Canada under PIPEDA) may have similar rights. To the extent permitted by applicable law, we extend the protections above to all users regardless of location.

## 9. Data retention

- **Audio and video files:** Remain only on your device. Because nothing is transmitted to us, we perform no retention.
- **History and drafts:** Stored in your device's local database; deleted in full when you uninstall the app.
- **Purchases:** Retained by RevenueCat and the App Store per their respective retention policies.
- **Ad data:** Subject to the ad SDK provider's retention policy.

## 10. Security

The App relies on your device's built-in file protection. All processing happens locally through protected interfaces of the system photo library and local file system. Network communication with third parties uses HTTPS. However, no method of transmission or storage can be guaranteed to be 100% secure, and we cannot guarantee absolute security.

## 11. Changes to this policy

We may update this policy from time to time. The "**Last updated**" date above reflects when the most recent change takes effect. For significant changes, we will provide reasonable notice within the app or via the App Store listing.

## 12. Contact

If you have any questions about this policy, please contact us at **nhsoft.lsd@gmail.com**.
