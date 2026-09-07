---
title: "Điều chỉnh kích thước"
description: "Phóng to / thu nhỏ ảnh theo chiều rộng và chiều cao mục tiêu, cung cấp các cài sẵn độ phân giải phổ biến, hỗ trợ giữ tỷ lệ khung hình gốc để tránh biến dạng."
date: 2026-09-07
lang: vi
slug: resize
---

## Điều chỉnh kích thước

Độ phân giải ảnh quá lớn chiếm dung lượng, quá nhỏ thì mờ trên màn hình — điều chỉnh kích thước là nhu cầu cơ bản của xử lý ảnh. Image Converter cung cấp công cụ điều chỉnh kích thước trực quan.

## Phóng to/thu nhỏ vs cắt

Cần phân biệt hai khái niệm:

- **Cắt**: cắt một phần từ ảnh gốc, "nội dung" của ảnh đầu ra thay đổi
- **Điều chỉnh kích thước (phóng to/thu nhỏ)**: phóng to hoặc thu nhỏ toàn bộ ảnh theo tỷ lệ, "nội dung" của ảnh đầu ra không đổi

Tình huống phù hợp để điều chỉnh kích thước: đổi ảnh lớn 4000×3000 thành 1920×1080 để vừa màn hình, thống nhất tất cả ảnh về cùng kích thước để ghép, nén ảnh xuống dưới độ phân giải mục tiêu.

## Cài sẵn và tùy chỉnh

Ứng dụng cung cấp các cài sẵn độ phân giải phổ biến (như 1920×1080, 1280×720, 1080×1080, v.v.), đồng thời hỗ trợ chiều rộng và chiều cao tùy chỉnh:

- Nhập chiều rộng mục tiêu, chiều cao sẽ tự động tính theo tỷ lệ ảnh gốc
- Nhập chiều cao mục tiêu, chiều rộng sẽ tự động tính theo tỷ lệ ảnh gốc
- Có thể tắt công tắc khóa tỷ lệ khung hình để tự do chỉ định chiều rộng và chiều cao (lưu ý: chỉ định tự do có thể thay đổi tỷ lệ khung hình)

## Tầm quan trọng của việc giữ tỷ lệ khung hình

Nếu không khóa tỷ lệ khung hình, ảnh sẽ bị kéo giãn hoặc nén lại. Chân dung sẽ biến dạng, phong cảnh sẽ méo mó, chữ sẽ bị cong. Trừ khi có nhu cầu đặc biệt, nên luôn giữ tỷ lệ khung hình gốc và chỉ thay đổi kích thước.

## Phóng to/thu nhỏ hoàn tất trên thiết bị

Quá trình điều chỉnh kích thước hoàn tất trên thiết bị, ảnh gốc không bị tải lên. Kết quả phóng to/thu nhỏ được gửi qua bảng chia sẻ hệ thống. Xem chi tiết cách xử lý dữ liệu trong [chính sách quyền riêng tư](/vi/image-converter/privacy/).

