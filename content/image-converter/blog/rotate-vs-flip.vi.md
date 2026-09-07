---
title: "Xoay hay lật: Khi nào dùng cái nào"
description: "Xoay 90°, xoay 180°, lật ngang, lật dọc tương ứng với tình huống nào, thẻ xoay EXIF ảnh hưởng đến kết quả cuối cùng như thế nào."
date: 2026-09-07
lang: vi
slug: rotate-vs-flip
---

## Bốn thao tác cơ bản

Image Converter cung cấp bốn thao tác xoay/lật cơ bản:

- **Xoay trái 90°**: biến ảnh dọc thành ngang
- **Xoay phải 90°**: biến ảnh ngang thành dọc
- **180°**: lật hoàn toàn ảnh
- **Lật ngang**: gương trái phải
- **Lật dọc**: gương trên dưới

Nghe thì đơn giản, nhưng khi nào nên dùng cái nào, nhiều người không phân biệt được.

## Xoay: bước 90°

### Xoay 90°

Xoay 90° là thao tác phổ biến nhất, tương ứng với các tình huống:

- **Ảnh chụp màn hình video quay ngang điện thoại**: hướng sai, cần xoay
- **Hướng bản quét tài liệu bị ngược**: hướng đặt máy quét sai, tệp thu được có hướng ngược
- **Kết hợp nhiều ảnh có hướng khác nhau**: thống nhất hướng rồi ghép

Xoay 90° là thao tác không mất dữ liệu — điểm ảnh được sắp xếp lại, nhưng không có thông tin nào bị mất.

### Xoay 180°

Hai lần xoay 90° hoặc xoay trực tiếp 180°, tương ứng với các tình huống:

- **Ảnh bị lật hoàn toàn ngược**: ví dụ lật ngược ảnh 180°
- **Ghép nhiều ảnh nhưng một ảnh có hướng ngược**: thống nhất hướng

180° cũng là thao tác không mất dữ liệu.

## Lật: ngang và dọc

### Lật ngang (gương trái phải)

- **Sửa gương ảnh tự chụp**: một số điện thoại tự động gương khi chụp tự sướng, hướng người chụp thấy ngược với hướng thực
- **Sửa chữ ngược**: chụp màn hình gương, ảnh phản chiếu qua gương
- **Hiệu ứng thiết kế**: bố cục gương, bản thiết kế cần xem trước đối xứng trái phải

### Lật dọc (gương trên dưới)

- **Hiệu ứng âm bản**: mô phỏng hiệu ứng âm bản của phim truyền thống
- **Bố cục gương**: xem trước hiệu ứng phản chiếu mặt nước
- **Nhu cầu thiết kế đặc biệt**: xem trước đối xứng trên dưới cho poster, thiết kế bao bì

## Xoay EXIF: dễ vấp nhất

Nhiều điện thoại (đặc biệt là iPhone) khi chụp **chỉ ghi thẻ xoay vào siêu dữ liệu ảnh chứ không thực sự xoay điểm ảnh**.

Điều này có nghĩa là:

- Xem trong thư viện: hướng bình thường
- Mở bằng một số ứng dụng: hướng sai
- Tải lên một số nền tảng: hướng sai

Image Converter sẽ đọc hướng xoay EXIF (thẻ Orientation), **thực sự xoay điểm ảnh** trước khi xuất, ảnh sau khi lưu mở ở bất kỳ vị trí nào cũng đúng hướng.

## Chọn xoay hay lật: so sánh tình huống

| Hiện tượng | Thao tác | Lý do |
|---|---|---|
| Ảnh chụp video ngang hiển thị dọc | Xoay 90° | Hướng video không khớp với hướng hiển thị |
| Ảnh tự chụp bị ngược trái phải | Lật ngang | Điện thoại tự động gương |
| Hướng bản quét tài liệu bị ngược | Xoay 90° | Hướng đặt máy quét sai |
| Văn bản phản chiếu trong gương | Lật ngang | Hình ảnh qua gương |
| Ảnh tổng thể bị lật ngược | Xoay 180° | Cầm điện thoại ngược khi chụp |
| Phản chiếu mặt nước bị lật trên dưới | Lật dọc | Mô phỏng hiệu ứng phản chiếu |

Nếu chỉ là vấn đề thẻ EXIF, **không cần làm gì cả** — Image Converter sẽ tự động xử lý khi chuyển đổi.

