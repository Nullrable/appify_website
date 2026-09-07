---
title: "PDF Encrypt"
description: "How to use Image to PDF's Encrypt feature: set an open password and an owner password, control print, copy, and modify permissions, default to AES-256 encryption."
date: 2026-09-07
lang: en
slug: pdf-encrypt
---

## PDF Encrypt

Add a password lock to a PDF. Before sending contracts, ID scans, or financial documents via email or chat, encrypt them so only the people who have the password can open them.

## Two Passwords, Two Jobs

- **User password (open password)**: Once set, anyone opening this PDF must enter this password. It's the first gate of the file.
- **Owner password (optional)**: Set separately from the user password. Whoever has the owner password can change the file's permission configuration.

## Fine-Grained Permission Control

Alongside encryption, you control which operations this PDF allows:

- **Allow printing** (on by default): whether the file can be printed
- **Allow copying** (off by default): whether text or images inside can be copied
- **Allow modifying** (off by default): whether the file content can be edited

For example, when sending out a quote, you might allow printing but disallow copying and modifying. The recipient can view and print, but the content is harder to lift directly.

## AES Encryption Standard

Encryption uses **AES-256** by default, with the option to switch to AES-128 for better compatibility. Encryption runs locally on your device, so the PDF content is never uploaded to any server.

