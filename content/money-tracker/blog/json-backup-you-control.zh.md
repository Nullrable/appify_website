---
title: 你掌控的 JSON 备份 - 一个能打开看的文件
description: 把 Money Tracker 数据导出一个 JSON 文件——账户、分类、交易——存到你已有的备份习惯所在的地方，或通过系统分享菜单直接发出去。
date: 2026-09-10
lang: zh
slug: json-backup-you-control
---

导出页写一个文件：`money_tracker_<timestamp>.json`，里面是全部账户（带类型、余额快照、元数据）、全部分类（系统分类和自定义分类）、全部交易（日期、金额、账户、分类、备注、类型）。一个文件，整个数据库。

保存位置由你决定。iOS 弹出文档选择器，Android 弹出 Storage Access Framework，所以文件可以落到 iCloud Drive、Google Drive、U 盘，或任何注册成 Documents provider 的第三方 app。不会强迫你用某个特定云。

选择器旁边就是系统分享菜单。文件可以一键发到邮件、即时通讯、笔记 app、AirDrop、附近共享——全程走系统，不经过 Money Tracker。

JSON 是纯文本。在任何编辑器里打开文件就能看到结构：一个带 `accounts`、`categories`、`transactions` 三个数组的对象，每条记录是带命名字段的扁平结构。没有 base64 编码、没有加密容器、没有版本锁定的 schema。

导入接受同一个文件。如果导入的条目和已有条目共享 ID，导入就在原位更新而不是新增——所以把今天的新备份叠在旧的上面，只增加真正新的行。
