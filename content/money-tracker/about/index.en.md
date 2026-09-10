---
title: About Money Tracker - A Private, Local-Only Finance App
description: Money Tracker keeps every account, category and transaction on your phone. Six account types, on-device receipt OCR, a four-function amount keypad, PIN or biometric lock, and JSON backup - in 10 languages.
date: 2026-09-10
lang: en
slug: index
---

Money Tracker is a personal-finance app for iOS and Android, built for anyone who wants a clean, private record of what comes in and what goes out. Everything - accounts, categories, transactions, statistics - lives on your phone. There is no server holding your data.

The home screen shows this month's picture: income, expenses, net balance across all your accounts. Underneath, the same data is readable as a day-grouped list, a month grid, or a calendar where each date carries its own income and expense chip.

## Six account types, one ledger

Cash, bank, credit card, digital wallet, investment, savings. Each account carries its own balance, its own transaction list, and a detail view with the month's income, expense, and latest entries. Mark one account as the default for new transactions; the form opens with it pre-selected.

Deleting an account does not destroy it. The account and everything attached move to a "Deleted" section, where one tap restores them.

## Categories, ready-made and custom

The app ships with 8 expense categories and 4 income categories, already localised for English, Simplified Chinese, and Traditional Chinese. Add as many custom categories as you want, each with its own colour and icon. System and custom categories live in separate sections of the manager. Removing a custom category that still has transactions attached asks first; the soft delete means a stray tap is recoverable. Categories are shared across accounts, so a "Food" entry in cash and a "Food" entry on the credit card stay comparable in statistics.

## Receipt OCR, on your phone

Above the amount field sits a small camera card. Snap a paper receipt and Money Tracker pre-fills the total, the date, and a tentative merchant name. Recognition runs on your phone, so the photo never goes anywhere. Every pre-filled value is editable before you save. A second OCR flow lives in the account edit form for scanning a bank card or account number.

## Calculator-style amount entry

Tapping the amount field opens a four-function keypad with a live expression preview. Type `12.50 + 8.40`, see `20.90` instantly, then send to the form. Long arithmetic that would be tedious on a phone keyboard becomes one continuous motion.

## Statistics that match how you spend

The Statistics tab pairs a category pie chart with a 30-day trend line and a 12-month trend line. Filter by expense, income, or profit. Filter by account range. Tap a slice or a row to open the transactions behind it - paginated, searchable by note keyword, and swipe-to-delete. Every account has a list view and a month view, with a year view layered on top for long histories. Charts, drill-downs, and per-account lists all read from the same data, so they never disagree.

## Daily reminder, opt-in

If you want a nudge to log today's spending, subscribe the device to a daily reminder topic. The time of day is configurable in Settings (21:00 by default). Reminders are off until you turn them on, and unsubscribe the moment you turn them off. Your reminder preferences sync through a single anonymous record so the setup follows you to a new device. No transaction, account, or category data ever leaves the phone - only that one settings record.

## JSON backup, your way

The export screen writes one `money_tracker_<timestamp>.json` file with the entire database. Save it through the system folder picker - iCloud Drive, Google Drive, Files, a thumb drive, or any third-party app registered as a Documents provider. The system share sheet sits right next to it: email, messaging apps, notes, AirDrop, Nearby Share. JSON is plain text - open it in any editor to inspect. Import accepts the same file: if an imported entry shares an ID with an existing one, it overwrites in place rather than duplicating, so monthly exports merge cleanly.

## PIN and biometric lock

A 6-digit PIN can gate the app every time it returns to the foreground. Set it in Settings, pick six digits, and the PIN is asked before anything shows. On top of the PIN sits an optional biometric layer - Face ID or Touch ID on iOS, fingerprint (or face) on Android. If the biometric prompt cannot work, the OS falls back to the device passcode, not the app PIN, so the trust chain stays on the platform.

## Local-only, by design

Accounts, categories, transactions, OCR text, statistics - everything lives in a local database inside the app's private storage. Uninstalling the app removes all of it. The two optional network calls in the entire app are the reminder push and the reminder-settings sync; both are off by default. There is no analytics SDK, no advertising, no tracking.

## Languages and theme

Available in English, Simplified Chinese, Traditional Chinese, Italian, German, Japanese, Korean, Spanish, Portuguese, and French. The theme follows the device by default; a light or dark override is one tap away. The first day of the week (Monday or Sunday) is configurable, which affects how the month grid and day grid render.
