---
title: "Privacy Policy - Extract Audio"
description: "How Extract Audio handles your data. Covers on-device video processing, local audio extraction, AdMob ads in the free version, RevenueCat subscription management, and your GDPR and CCPA rights."
date: 2026-09-15
lang: en
slug: index
---

**Extract Audio** ("**we**") is an iPhone video and audio processing app designed around one principle: your videos and audio stay on your device. This Privacy Policy explains what data the app handles, why, and the choices you have.

By using the app, you agree to the practices described here.

**Last updated: September 15, 2026**

## 1. Summary

- **On-device processing.** All video processing (convert, compress, extract audio, merge, clip, speed, resize, GIF) runs locally on your device. Video files, audio files, and intermediate results are **never uploaded** to any server we operate.
- **No account required.** The app doesn't require sign-up. We don't collect your name, email, phone number, or any contact info.
- **No content analysis.** The app doesn't analyze pixel content of your video - no AI classification, object detection, or scene recognition.
- **Advertising (free version).** The free version shows banner ads (IAB Medium Rectangle 300x250) on the Home, History, and Settings screens, served by Google AdMob. AdMob may receive device-level identifiers and contextual information used to select and measure ads, subject to your consent choices.
- **Paid version.** When you subscribe to Pro, purchase is handled by the App Store, and RevenueCat uses an anonymous identifier and your store receipt to verify the subscription.

## 2. Data we do not collect

We do **not** collect, transmit, or sell:

- Your video or audio files, or any thumbnails of them
- Video metadata (capture time, duration, location) or any intermediate results from processing
- Your name, email, phone number, postal address, or other contact details
- Precise or coarse location tied to your videos
- Your contacts, calendar, photo library index, or other personal content

## 3. Data processed on your device

### 3.1 Audio extraction

The audio track is stripped from the video, re-encoded in your chosen format (MP3, AAC, M4A, WAV, FLAC, OGG), written by default to the app's sandbox directory, then a prompt asks you to "Save to Files" to land it in the iOS Files app. The whole flow only reads local files and never touches the network.

### 3.2 Video format conversion

The video is re-wrapped into a different container (mp4, mov, m4v, mkv, avi, flv, ts, mpg, mpeg, 3gp, 3g2). The video stream and audio stream themselves stay unchanged; only the container is swapped.

### 3.3 Video compression

The video stream is re-encoded at a preset (Low / Medium / High) or a custom bitrate, controlling size while preserving as much visible detail as possible.

### 3.4 Merge, Clip, Speed, Adjust

Timeline metadata is read; a new video is produced using your specified in-point, out-point, order, multiplier, ratio, and rotation angle. The source file stays untouched through the whole run; the result is written as a new file to the library.

### 3.5 GIF

A GIF animation is generated for your specified time range and frame rate, and saved to the library.

### 3.6 History and drafts

Each task's parameters (tool type, timestamp, file path, parameter config) are written to a local database. Drafts for Clip, Speed, and Adjust auto-save while you drag. This data lives entirely on your device and is fully deleted when you uninstall the app.

## 4. Data collected by third-party services

The following third parties collect data in order to provide their services to you. Their use of data is governed by their own privacy policies.

### 4.1 Google AdMob - free version only

The free version shows banner ads (IAB Medium Rectangle 300x250) on the Home, History, and Settings screens, served by **Google AdMob**. Tasks execute as soon as they're confirmed - no ad plays before the task. AdMob may receive:

- **Advertising identifier** - on iOS, this is Apple's IDFA, provided by iOS only after you grant App Tracking Transparency permission
- **Device information**, such as device model, OS version, screen size, language, and region
- **Ad-serving metadata**, such as ad unit ID, ad type, and whether you viewed or clicked an ad
- **IP address**, used to estimate coarse location (usually country or city) and to prevent fraud

You can:

- Choose "Ask App Not to Track" in the iOS tracking prompt to decline ad personalization - app functionality is unchanged; ads just stop being personalized
- Reset or restrict IDFA in your iOS device's **Settings -> Privacy & Security -> Tracking**

After subscribing to Pro, ads are removed and AdMob no longer receives data from this app.

See [Google's Privacy Policy](https://policies.google.com/privacy) and [AdMob privacy information](https://support.google.com/admob/answer/6128543).

### 4.2 RevenueCat (subscription management)

When you subscribe to Pro, the app uses **RevenueCat** to verify the subscription and manage your entitlements. RevenueCat receives:

- A **randomly generated anonymous identifier** (the RevenueCat "App User ID")
- Your App Store receipt, for purchase verification
- Product identifier, price, currency, and purchase date
- Your device locale and app version

See [RevenueCat's Privacy Policy](https://revenuecat.com/privacy).

### 4.3 Apple App Store

Purchases are handled by the Apple App Store. Its handling of purchase data is governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).

## 5. Permissions the app requests

| Permission | Why it's requested | Required |
|---|---|---|
| **Photo library access** | Read videos to process, write processed video or audio | Yes - required for processing |
| **File access (Files app)** | Read or save files in the iOS Files app | No - only used when you actively choose Files as a source |
| **Tracking (ATT, iOS only)** | Required for the ad network to show personalized ads in the free version | No - you can decline; the app still works, just showing non-personalized ads |

The app does **not** request camera, microphone, contacts, or location permission.

## 6. Children's privacy

The app is for general users and is not directed at children under 13 (or below the minimum digital consent age in your jurisdiction). We do not knowingly collect personal data from children. Because the app does not collect any user's personal data, this commitment applies to all ages.

## 7. International data transfers

- **Google services** (AdMob) may process data in regions outside your country. See [Google's data transfer policy](https://policies.google.com/privacy).
- **RevenueCat** stores purchase verification data on its infrastructure in the US and EU. See [RevenueCat's Privacy Policy](https://revenuecat.com/privacy).
- **Apple** processes App Store purchases through its standard global infrastructure.

The on-device processing described in Section 3 **does not** leave your device and is therefore not subject to international data transfer rules.

## 8. Your rights

### 8.1 GDPR (European Economic Area and UK)

If you're in the EEA or UK, you have the right to access, correct, delete, restrict, or object to the processing of your personal data; the right to data portability; the right to withdraw consent at any time; and the right to lodge a complaint with your local data protection authority.

Because the app does not maintain any server-side user profile, most of the rights above are already satisfied by the app's design:

- Your videos and audio never leave your device; uninstalling the app removes them all
- To stop ad personalization, use the tracking controls described in Section 4.1
- To delete your purchase association, contact us and request deletion of any RevenueCat records tied to your receipt

### 8.2 CCPA / CPRA (California)

California residents have the right to know what personal information is collected, to delete that information, to opt out of its sale or sharing, and the right not to be discriminated against for exercising these rights. The app does **not** sell personal information. "Sharing" for cross-context behavioral advertising is governed by your choice in the tracking prompt.

### 8.3 Other jurisdictions

Residents of other jurisdictions (e.g. Brazil's LGPD, Korea's PIPA, Canada's PIPEDA) may have similar rights. To the extent permitted by applicable law, we extend the protections above to all users, regardless of location.

## 9. Data retention

- **Video and audio files:** stay only on your device. Because nothing is transmitted to us, we retain nothing.
- **History and drafts:** stored in your device's local database; uninstalling the app deletes them all.
- **Purchases:** retained by RevenueCat and the App Store under their own retention policies.
- **Ad data:** governed by Google's AdMob retention policy.

## 10. Security

The app relies on your device's built-in file protection. All processing happens locally through the protected interfaces of the system photo library and local file system. Network communication with third parties uses HTTPS. However, no method of transmission or storage can guarantee 100% security, and we cannot guarantee absolute security.

## 11. Changes to this policy

We may update this policy from time to time. The "**Last updated**" date at the top reflects when the most recent change took effect. For significant changes, we will provide reasonable notice within the app or via the App Store listing.

## 12. Contact

If you have any questions about this policy, contact us at **nhsoft.lsd@gmail.com**.
