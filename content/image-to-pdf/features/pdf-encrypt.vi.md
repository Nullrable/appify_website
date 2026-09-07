---
title: "Mã hóa PDF"
description: "Hướng dẫn tính năng Mã hóa của Image to PDF: đặt mật khẩu mở và mật khẩu chủ sở hữu, kiểm soát quyền in, sao chép, chỉnh sửa, mặc định dùng mã hóa AES-256."
date: 2026-09-07
lang: vi
slug: pdf-encrypt
---

## Mã hóa PDF

Thêm một khóa mật khẩu cho PDF. Hợp đồng, bản scan giấy tờ, tài liệu tài chính trước khi gửi qua email hoặc công cụ chat, mã hóa trước để đảm bảo chỉ người có mật khẩu mới mở được.

## Hai loại mật khẩu, mỗi loại một vai trò

- **Mật khẩu người dùng (mật khẩu mở)**: Sau khi đặt, bất kỳ ai mở PDF này đều phải nhập mật khẩu này, đây là cánh cửa đầu tiên của tệp
- **Mật khẩu chủ sở hữu (tùy chọn)**: Đặt riêng với mật khẩu người dùng. Người giữ mật khẩu chủ sở hữu có thể thay đổi cấu hình quyền của tệp

## Kiểm soát quyền chi tiết

Cùng với mã hóa, bạn kiểm soát thao tác nào được phép với PDF này:

- **Cho phép in** (mặc định bật): Có cho phép in tệp không
- **Cho phép sao chép** (mặc định tắt): Có cho phép sao chép văn bản hoặc hình ảnh bên trong không
- **Cho phép chỉnh sửa** (mặc định tắt): Có cho phép chỉnh sửa nội dung tệp không

Ví dụ khi gửi báo giá ra ngoài, có thể bật in, tắt sao chép và chỉnh sửa, vừa thuận tiện cho bên nhận xem, vừa giảm rủi ro nội dung bị lấy trực tiếp.

## Tiêu chuẩn mã hóa AES

Mã hóa mặc định dùng **AES-256**, cũng có thể chuyển sang AES-128 tương thích hơn. Mã hóa chạy trên thiết bị cục bộ, nội dung PDF không tải lên bất kỳ máy chủ nào.

