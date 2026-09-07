---
title: "Đặt mật khẩu cho PDF: chọn mật khẩu người dùng, mật khẩu chủ sở hữu và quyền hạn"
description: "Hai loại mật khẩu PDF khác nhau ở đâu? Cách đặt quyền in, sao chép, chỉnh sửa? Lấy tính năng Mã hóa của Image to PDF làm ví dụ, giải thích rõ từng tùy chọn AES-256."
date: 2026-09-07
lang: vi
slug: pdf-password-protection
---

## Đặt mật khẩu cho PDF không chỉ là chọn một chuỗi ký tự

Đặt mật khẩu cho bản scan hợp đồng, tài liệu tài chính là thao tác chuẩn trước khi gửi tệp nhạy cảm. Nhưng mã hóa PDF thực sự có hai lớp: kiểm soát "ai có thể mở" và kiểm soát "có thể làm gì sau khi mở". Hiểu sự khác biệt của hai lớp này mới bảo vệ tệp đúng cách.

## Mật khẩu người dùng: kiểm soát ai có thể mở

**Mật khẩu người dùng** (còn gọi là mật khẩu mở) là cánh cửa đầu tiên. Sau khi đặt, bất kỳ ai mở PDF này đều phải nhập mật khẩu, không có mật khẩu thì tệp không mở được.

Tình huống phù hợp: gửi bản scan giấy tờ cho bên trung gian hoặc đại lý, gửi tài liệu nội bộ ra ngoài qua email. Truyền mật khẩu qua kênh khác (như điện thoại hoặc cửa sổ chat khác) để báo cho bên nhận.

## Mật khẩu chủ sở hữu: kiểm soát có thể làm gì sau khi mở

**Mật khẩu chủ sở hữu** là cánh cửa thứ hai, đặt riêng với mật khẩu người dùng. Nó quản lý ba loại quyền:

- **Cho phép in** — bên nhận có thể in tệp không
- **Cho phép sao chép** — có thể sao chép văn bản và hình ảnh trong tệp không
- **Cho phép chỉnh sửa** — có thể chỉnh sửa nội dung tệp không

Khi gửi báo giá, hồ sơ đấu thầu, một cấu hình phổ biến là: bật in (tiện cho bên nhận lưu), tắt sao chép và chỉnh sửa (giảm rủi ro nội dung bị lấy trực tiếp).

Trong Image to PDF, ba quyền này có công tắc riêng, in mặc định bật, sao chép và chỉnh sửa mặc định tắt — tức cấu hình bảo thủ "xem và in được, nhưng không lấy đi không sửa được".

## AES-256 là gì

Về thuật toán mã hóa, ứng dụng mặc định dùng **AES-256**, đây là tiêu chuẩn mã hóa PDF主流 hiện tại, mạnh hơn các thuật toán thế hệ trước; nếu thiết bị hoặc phần mềm cũ của bên nhận không mở được, có thể chuyển sang AES-128 tương thích hơn.

## Sau khi mã hóa

Mã hóa hoàn thành trên thiết bị cục bộ, tệp và mật khẩu đều không qua máy chủ. Bên nhận mật khẩu nếu muốn gỡ bỏ giới hạn, có thể dùng tính năng Giải mã PDF trong ứng dụng để gỡ mã hóa, khôi phục thành PDF thường rồi chỉnh sửa hoặc gộp.

Một gợi ý thực tế: mật khẩu đừng dùng các tổ hợp dễ đoán như ngày sinh, số điện thoại; đặt mật khẩu khác nhau cho các tệp khác nhau; truyền mật khẩu và tệp qua các kênh riêng biệt — tệp qua email, mật khẩu qua tin nhắn, hai thứ không cùng rơi vào một hộp thư.

