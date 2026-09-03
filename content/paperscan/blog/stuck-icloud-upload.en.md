---
title: Troubleshooting stalled iCloud uploads
description: Troubleshooting stalled iCloud uploads
date: 2026-09-02
lang: en
slug: stuck-icloud-upload
---

## Troubleshooting stalled iCloud uploads

When iCloud sync in Paper Scan appears stuck (typically displayed as a partial upload count that does not change over several minutes), the cause is almost always one of four configuration or system conditions on the iOS side. The following checklist covers them in order of frequency.

### 1. iCloud Drive is not enabled for Paper Scan

Two independent toggles must be on. Either being off causes Paper Scan to queue uploads that iOS silently rejects, leaving the status bar pinned at the initial count.

- **iOS Settings → [your name] → iCloud → Show All → Paper Scan** must be toggled on.
- **iOS Settings → Paper Scan → iCloud Drive** must be toggled on.

The second toggle is the one most frequently missed. The two settings are related but distinct; both must be enabled for uploads to proceed.

### 2. iOS is throttling background sync

iOS limits background iCloud activity in two conditions: Low Power Mode is enabled (toggle it off in iOS Settings → Battery), or iPhone storage is nearly full (iOS requires approximately 500 MB of free space for background uploads to continue; free up space in iOS Settings → General → iPhone Storage). iOS does not display a "storage full" warning in this context; uploads simply stall.

### 3. The upload queue is large

Paper Scan processes uploads sequentially. If a large backlog has accumulated, for example after a period offline, the queue requires time to clear. As a rough estimate, expect approximately 50 pages per hour on standard home Wi-Fi, faster on strong connections and slower on cellular.

To determine whether the queue is "slow but progressing" or "genuinely stuck", leave the app in the background for 30 to 60 minutes and check the status bar. If the count has advanced, sync is working. If the count is unchanged, one of the other conditions applies.

### 4. iCloud account state is corrupted

This is rare but can occur after Apple ID changes, sign-out and sign-in cycles, or restoration from backup. Symptoms: the status bar is stuck and none of the above steps have resolved it.

Two escalation steps: toggle iCloud Drive off and on (iOS Settings → [your name] → iCloud → toggle iCloud Drive off, wait 30 seconds, toggle it back on), or sign out of iCloud and sign back in (iOS Settings → [your name] → Sign Out, then sign in again). The second action is heavy-handed but resets the iCloud connection end-to-end. If the queue remains stuck at the same count after both steps, the issue is likely on the iCloud side: Apple's system status page at support.apple.com shows whether iCloud Drive is currently experiencing an outage.

### When to escalate to support

In the majority of cases the cause is on the iOS side. Paper Scan may be at fault when the status bar count has not changed for over an hour, other iCloud-using applications on the same device are syncing normally, the configuration steps above have been applied and the app has been restarted, and the same documents are marked as pending upload across multiple app launches with no progress. When these conditions apply, submit a bug report through **Settings → Send Feedback** in the app. The report automatically includes the recent sync activity log, eliminating the need to describe the issue in detail.

Several features in Paper Scan exist specifically to address stuck-upload scenarios: the status bar displays both the current count and a separate last-activity timestamp, a document that fails to upload three consecutive times is marked with a warning icon, and background uploads pause cleanly when Low Power Mode is enabled and resume when it is disabled rather than silently dropping queued items.
