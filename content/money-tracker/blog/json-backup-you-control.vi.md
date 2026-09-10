---
title: Sao Lưu JSON Bạn Kiểm Soát - Một Tệp Có Thể Mở Ra
description: Xuất dữ liệu Money Tracker thành một tệp JSON duy nhất — tài khoản, danh mục, giao dịch — và lưu ở nơi bạn đã có thói quen sao lưu, hoặc gửi thẳng qua bảng chia sẻ hệ thống.
date: 2026-09-10
lang: vi
slug: json-backup-you-control
---

Màn hình xuất ghi một tệp duy nhất: `money_tracker_<timestamp>.json`, chứa mỗi tài khoản (kèm loại, ảnh chụp số dư và siêu dữ liệu), mỗi danh mục (hệ thống và tự tạo) và mỗi giao dịch (ngày, số tiền, tài khoản, danh mục, ghi chú, loại). Một tệp, toàn bộ cơ sở dữ liệu.

Bạn chọn nơi nó đến. iOS mở bộ chọn tài liệu, Android mở Storage Access Framework, nên tệp có thể rơi vào iCloud Drive, Google Drive, USB, hoặc bất kỳ ứng dụng bên thứ ba nào đăng ký làm Documents provider. Không ép bạn vào một đám mây cụ thể.

Ngay cạnh bộ chọn là bảng chia sẻ hệ thống. Từ đó tệp đi thẳng đến email, ứng dụng nhắn tin, ứng dụng ghi chú, AirDrop hoặc Nearby Share — đầu cuối qua hệ thống, không qua Money Tracker.

JSON là văn bản thuần. Mở tệp trong bất kỳ trình soạn nào và bạn thấy cấu trúc: một đối tượng với ba mảng `accounts`, `categories` và `transactions`, mỗi mục là một bản ghi phẳng với các trường có tên. Không có blob base64, không có vùng chứa mã hóa, không có lược đồ khóa theo phiên bản.

Nhập chấp nhận cùng tệp đó. Nếu một mục nhập chia sẻ ID với mục hiện có, phần nhập sẽ ghi đè tại chỗ thay vì tạo bản sao — nên một bản xuất mới đặt lên trên bản cũ chỉ thêm những dòng thực sự mới.
