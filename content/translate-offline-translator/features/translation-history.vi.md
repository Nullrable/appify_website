---
title: "Lịch sử dịch: chỉ cục bộ, có thể xóa bất kỳ lúc nào"
description: "Lịch sử nằm trong cơ sở dữ liệu Drift trên thiết bị. Không có bản sao nào được tải lên; các mục có thể bị xóa riêng lẻ hoặc hàng loạt."
date: 2026-09-03
lang: vi
slug: translation-history
icon: history
---

Mỗi lần chụp camera có thể được lưu vào lịch sử dịch cục bộ. Mỗi mục lưu trữ ảnh gốc (đã nén), ngôn ngữ nguồn được phát hiện, ngôn ngữ đích, các khối OCR và bản dịch theo khối. Mở một mục đã lưu sẽ tái tạo trang kết quả ở chế độ chỉ đọc.

## Những gì được lưu trữ

Mỗi bản ghi lịch sử chứa:

- **Ảnh gốc** dưới dạng hình thu nhỏ JPEG, được thu nhỏ để vừa cạnh tối đa. Ảnh độ phân giải đầy đủ bị loại bỏ sau khi thu nhỏ để giữ dung lượng ở mức vừa phải.
- **Ngôn ngữ nguồn** được phát hiện bởi OCR (hoặc đặt thủ công).
- **Ngôn ngữ đích** được chọn cho lần chụp.
- **Các khối OCR** với các hộp giới hạn, văn bản được phát hiện và độ tin cậy.
- **Bản dịch** theo khối và bản dịch đầy đủ của đoạn văn đã nối.
- **Dấu thời gian tạo** để sắp xếp và hiển thị.

Không có bản sao nào của ảnh hoặc văn bản dịch được tải lên bất kỳ máy chủ nào chúng tôi vận hành. Toàn bộ lịch sử được lưu trữ trong cơ sở dữ liệu SQLite trên thiết bị do Drift quản lý.

## Lịch sử được lấp đầy như thế nào

- **Ảnh chụp camera.** Sau khi OCR + dịch hoàn tất, trang kết quả cung cấp hành động Lưu. Lưu trữ mục được mô tả ở trên.
- **Ảnh đã nhập.** Cùng quy trình: sau khi dịch, trang kết quả có thể lưu mục vào lịch sử.
- **Bản dịch văn bản.** Không được tự động lưu. Bản dịch văn bản chỉ xuất hiện trong vùng kết quả của trang dịch văn bản và biến mất khi Xóa hoặc điều hướng. Sử dụng camera hoặc nhập nếu bạn muốn bản ghi liên tục.

## Duyệt và xóa

- **Chế độ xem danh sách.** Trang lịch sử hiển thị các mục mới nhất trước với hình thu nhỏ của ảnh, đoạn trích nguồn, đoạn trích đích và dấu thời gian.
- **Nhấn để mở.** Nhấn vào một hàng sẽ mở trang kết quả ở chế độ chỉ đọc. Lớp phủ được tái tạo với các bản dịch đã lưu; ML Kit không được chạy lại.
- **Xóa.** Mỗi hàng có nút xóa. Xóa được bảo vệ bởi hộp thoại xác nhận để tránh xóa ngoài ý muốn. Xóa sẽ xóa bản ghi và hình thu nhỏ ảnh của nó khỏi thiết bị; không có gì được gửi ra ngoài thiết bị.
- **Trạng thái trống.** Khi lịch sử trống, phần giữ chỗ giải thích cách lấp đầy nó.

## Quyền riêng tư

Lịch sử là một tạo tác cục bộ. Mô hình quyền riêng tư của ứng dụng:

- **Không tải lên.** Lịch sử không bao giờ được tải lên, đồng bộ hóa hoặc sao lưu lên bất kỳ máy chủ nào.
- **Không phân tích nội dung lịch sử.** Các báo cáo sự cố và phân tích sử dụng ẩn danh không bao gồm nội dung lịch sử, văn bản OCR hoặc văn bản dịch.
- **Xóa là vĩnh viễn.** Xóa một mục lịch sử sẽ xóa vĩnh viễn nó khỏi cơ sở dữ liệu trên thiết bị. Không có bản sao đám mây để dọn dẹp.

## Tăng trưởng lưu trữ

Mỗi mục chiếm khoảng 50–500 KB tùy thuộc vào kích thước ảnh. Một lịch sử vài trăm mục thường duy trì dưới 50 MB. Ảnh được nén khi lưu; bản gốc ở độ phân giải đầy đủ không bao giờ được giữ lại.

Để giải phóng dung lượng: mở trang lịch sử và xóa các mục bạn không cần nữa. Gỡ cài đặt ứng dụng sẽ xóa toàn bộ cơ sở dữ liệu lịch sử như một phần của gỡ cài đặt nền tảng.
