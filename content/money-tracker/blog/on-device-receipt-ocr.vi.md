---
title: OCR Hóa Đơn Trên Thiết Bị - Ảnh Không Rời Khỏi Điện Thoại
description: Chạm vào thẻ máy ảnh nhỏ phía trên trường số tiền, chụp hóa đơn và Money Tracker sẽ điền sẵn số tiền, ngày và cửa hàng cho bạn — tất cả xử lý tại chỗ, không tải lên đâu cả.
date: 2026-09-10
lang: vi
slug: on-device-receipt-ocr
---

Phía trên trường số tiền trong biểu mẫu giao dịch có một thẻ máy ảnh nhỏ. Chạm vào, chụp một hóa đơn, và ba trường được điền sẵn: tổng, ngày và tên cửa hàng.

Bộ máy OCR chạy trên điện thoại của bạn. Hình ảnh hóa đơn được xử lý trong sandbox của ứng dụng và không bao giờ gửi đến dịch vụ từ xa, nên số thẻ, chi tiết cửa hàng và người đi mua cùng bạn đều chỉ ở giữa bạn và thư viện ảnh.

OCR điền trường, không ghi trường. Mỗi giá trị điền sẵn đều có thể sửa trước khi lưu — nếu bộ máy đọc sai tổng bị nhòe, bạn sửa lại. Luồng tương tự có trên biểu mẫu thẻ ngân hàng: chạm thẻ OCR ở đó để đọc số thẻ từ ảnh. Trong cả hai trường hợp, ảnh được loại khỏi bộ nhớ sau khi nhận dạng; Money Tracker lưu văn bản đã nhận, không lưu pixel.
