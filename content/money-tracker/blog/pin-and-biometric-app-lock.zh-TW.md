---
title: PIN 和生物辨識鎖 - 在你看到餘額之前觸發的兩層
description: Money Tracker 可以在每次回到前景時要求輸入 6 位 PIN，Face ID、Touch ID 或指紋作為更快的路徑疊加在 PIN 之上。設定一次 PIN，每次回到前景都會觸發鎖屏。
date: 2026-09-10
lang: zh-TW
slug: pin-and-biometric-app-lock
---

Money Tracker 出廠時鎖是關閉的。在設定裡打開它、任選 6 位數字設為 PIN，從那一刻起，每次回到應用都要先輸入 PIN。

PIN 是兜底層：任何裝置都能用，不依賴硬體。在它之上是可選的生物辨識層——iOS 用 Face ID 或 Touch ID，Android 用指紋（同一 API 暴露人臉辨識的裝置也支援人臉）。必須先設 PIN 才能開生物辨識；清掉 PIN 也會同時清掉生物辨識。如果濕手指或口罩讓生物辨識無法辨識，系統會回退到裝置密碼而不是你的應用 PIN，所以信任鏈始終錨定在系統層。

鎖在每次回到前景時都會觸發——不只是冷啟動，包括快速切一下 app、看一眼通知，過一個小時再回來。每次觸發時，帳戶、交易、統計、設定都先藏在鎖屏後面。
