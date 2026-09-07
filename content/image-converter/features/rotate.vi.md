---
title: "Xoay và lật"
description: "Xoay theo bước 90°, hỗ trợ lật ngang / lật dọc, tự động sửa hướng xoay EXIF trước khi xuất, ảnh sau khi lưu mở ở đâu cũng đúng hướng."
date: 2026-09-07
lang: vi
slug: rotate
---

## Xoay và lật

Ảnh chụp bị nghiêng, bản scan tài liệu bị sai hướng, ảnh chụp màn hình cần xử lý gương — những tình huống này đều cần xoay hoặc lật. Image Converter cung cấp các chức năng xoay và lật cơ bản, thao tác trực quan.

## Xoay: bước 90°

Ứng dụng hỗ trợ xoay ảnh theo bước 90°:

- **Xoay trái 90°**: biến ảnh dọc thành ngang, hoặc sửa ảnh bị gắn nhãn sai sau khi chụp ngang
- **Xoay phải 90°**: ngược với xoay trái
- **180°**: xoay 90° liên tiếp hai lần

Mỗi lần xoay đều mã hóa lại ảnh, đảm bảo tệp sau khi xuất mở ở bất kỳ thiết bị nào cũng đúng hướng.

## Lật: ngang / dọc

Ngoài xoay, ứng dụng còn hỗ trợ lật gương:

- **Lật ngang**: gương trái phải, thường dùng cho ảnh tự chụp, văn bản ngược
- **Lật dọc**: gương trên dưới, thường dùng cho hiệu ứng âm bản hoặc bố cục gương

## Tự động xử lý xoay EXIF

Một số điện thoại (đặc biệt là iPhone) khi chụp chỉ ghi thẻ xoay vào siêu dữ liệu ảnh chứ không thực sự xoay điểm ảnh. Loại ảnh này ở một số ứng dụng "nhìn thì đúng, xuất ra lệch".

Image Converter sẽ đọc hướng xoay EXIF (thẻ Orientation), sửa điểm ảnh trước khi xuất. Tệp sau khi lưu mở ở bất kỳ vị trí nào cũng đúng hướng, không cần phụ thuộc vào phần mềm đọc ảnh nhận diện siêu dữ liệu.

