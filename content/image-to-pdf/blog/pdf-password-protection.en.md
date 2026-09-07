---
title: "Password-protecting a PDF: choosing between user password, owner password, and permissions"
description: "What's the difference between the two PDF passwords? How do you set print, copy, and modify permissions? Using Image to PDF's Encrypt feature, here's what every AES-256 option does."
date: 2026-09-07
lang: en
slug: pdf-password-protection
---

## Password-Protecting a PDF Is More Than Just Picking a String

Adding a password to scanned contracts and financial files is the standard step before sending anything sensitive. But PDF encryption really has two layers: controlling who can open the file, and controlling what they can do after opening. Understanding both layers is what lets you protect a file properly.

## User Password: Who Can Open

The **user password** (also called the open password) is the first gate. Once set, anyone opening this PDF must enter the password. Without it, the file stays locked.

Common scenarios: sending ID scans to an agent or service bureau, emailing internal documents externally. Pass the password through a separate channel (phone call, a different chat window).

## Owner Password: What Can Be Done After Opening

The **owner password** is the second gate, set separately from the user password. It governs three categories of permission:

- **Allow printing** — whether the other party can print the file
- **Allow copying** — whether text and images inside can be copied
- **Allow modifying** — whether the file contents can be edited

When sending a quote or tender document, a common configuration is: allow printing (so they can keep a copy), disallow copying and modifying (to reduce the risk of content being lifted directly).

In Image to PDF, each of these three permissions has its own toggle. Printing is on by default, copying and modifying are off by default — a conservative "viewable and printable, but not removable or editable" setup.

## What AES-256 Is

For the encryption algorithm, the App uses **AES-256** by default. This is the current mainstream PDF encryption standard and is stronger than older algorithms. If the recipient's older device or older software can't open it, you can switch to AES-128 for better compatibility.

## After Encryption

Encryption runs locally on your device. The file and the password never pass through a server. If the recipient wants to remove the protection, they can use the App's PDF Decrypt feature to strip encryption and get back a normal PDF that's editable or mergeable.

A practical recommendation: don't use birthdays or phone numbers as passwords (too easy to guess); set different passwords for different files; and send the file and the password through separate channels — file via email, password via messaging — so they don't land in the same inbox.

