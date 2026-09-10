---
title: 你掌控的 JSON 備份 - 一個能打開看的檔案
description: 把 Money Tracker 資料匯出一個 JSON 檔案——帳戶、分類、交易——存到你已有的備份習慣所在的地方，或透過系統分享選單直接發出去。
date: 2026-09-10
lang: zh-TW
slug: json-backup-you-control
---

匯出頁寫一個檔案：`money_tracker_<timestamp>.json`，裡面是全部帳戶（帶類型、餘額快照、元資料）、全部分類（系統分類和自訂分類）、全部交易（日期、金額、帳戶、分類、備註、類型）。一個檔案，整個資料庫。

儲存位置由你決定。iOS 彈出文件選擇器，Android 彈出 Storage Access Framework，所以檔案可以落到 iCloud Drive、Google Drive、U 盤，或任何註冊成 Documents provider 的第三方 app。不會強迫你用某個特定雲。

選擇器旁邊就是系統分享選單。檔案可以一鍵發到郵件、即時通訊、筆記 app、AirDrop、附近共享——全程走系統，不經過 Money Tracker。

JSON 是純文字。在任何編輯器裡開啟檔案就能看到結構：一個帶 `accounts`、`categories`、`transactions` 三個陣列的物件，每條紀錄是帶命名欄位的扁平結構。沒有 base64 編碼、沒有加密容器、沒有版本鎖定的 schema。

匯入接受同一個檔案。如果匯入的條目和已有條目共享 ID，匯入就在原位更新而不是新增——所以把今天的新備份疊在舊的上面，只增加真正新的列。
