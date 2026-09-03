---
title: "19 ngôn ngữ: phủ sóng ML Kit, bộ chọn và tự động phát hiện"
description: "Bản dịch trên thiết bị ML Kit hỗ trợ 19 ngôn ngữ. Bộ chọn bao gồm tìm kiếm, ngôn ngữ đã dùng gần đây và tùy chọn tự động phát hiện cho nguồn."
date: 2026-09-03
lang: vi
slug: language-coverage
icon: globe
---

Ứng dụng dịch giữa 19 ngôn ngữ trên thiết bị thông qua Google ML Kit. Danh sách đầy đủ: tiếng Ả Rập, tiếng Trung (giản thể), tiếng Séc, tiếng Hà Lan, tiếng Anh, tiếng Pháp, tiếng Đức, tiếng Croatia, tiếng Hungary, tiếng Ý, tiếng Nhật, tiếng Hàn, tiếng Ba Lan, tiếng Bồ Đào Nha, tiếng Romania, tiếng Nga, tiếng Slovak, tiếng Slovenia và tiếng Tây Ban Nha. Các ngôn ngữ mới được thêm khi ML Kit phát hành mô hình trên thiết bị cho chúng.

## Bộ chọn ngôn ngữ

Bộ chọn là điểm vào duy nhất để chọn ngôn ngữ nguồn và đích, có thể truy cập từ thanh ngôn ngữ ở đầu trang camera hoặc trang dịch văn bản.

- **Tìm kiếm.** Nhập vào trường tìm kiếm để lọc theo tên tiếng Anh hoặc mã ngôn ngữ. Danh sách cập nhật khi bạn nhập.
- **Đã dùng gần đây.** Phần trên cùng hiển thị các ngôn ngữ bạn đã sử dụng trong các bản dịch gần đây. Lựa chọn tự động di chuyển chúng lên đầu.
- **Tự động phát hiện (chỉ nguồn).** Xuất hiện là tùy chọn đầu tiên trong bộ chọn nguồn. Chọn nó làm cho ứng dụng đoán ngôn ngữ nguồn cho mỗi lần chụp (xem bên dưới).
- **Tất cả ngôn ngữ.** Bên dưới phần đã dùng gần đây là danh sách đầy đủ 19 ngôn ngữ được hỗ trợ với cờ quốc gia của chúng.

Các bộ chọn nguồn và đích có thể được mở độc lập. Chọn nguồn giống với đích sẽ làm nổi bật điều này trong bộ chọn để ngăn bản dịch tự-nhân tình cờ.

## Tự động phát hiện cho nguồn

Khi nguồn được đặt thành Tự động phát hiện, ứng dụng cần chọn một ngôn ngữ nguồn ML Kit cụ thể cho mỗi bản dịch. Hai chiến lược được sử dụng:

- **Đối với chụp ảnh.** Các gợi ý ngôn ngữ theo khối của công cụ OCR được tổng hợp; ngôn ngữ đa số qua các khối trở thành nguồn ML Kit. Các trang đơn ngôn ngữ giải quyết sạch sẽ; các trang hệ chữ hỗn hợp quay về mặc định.
- **Đối với dịch văn bản.** Phương pháp heuristic cấp lớp ký tự trong Dart đếm ký tự theo lớp chữ: ký tự Hán → tiếng Trung giản thể, kana → tiếng Nhật, hangul → tiếng Hàn, latinh → tiếng Anh, kirin → tiếng Nga, chữ Ả Rập → tiếng Ả Rập, v.v. Đầu vào trống hoặc chỉ khoảng trắng mặc định là tiếng Anh.

Tự động phát hiện không bao giờ âm thầm thất bại. Trang luôn có một ngôn ngữ nguồn ML Kit cụ thể khi bản dịch chạy.

## Tại sao 19 chứ không nhiều hơn

Số lượng bị giới hạn bởi những gì ML Kit xuất bản dưới dạng mô hình trên thiết bị. Các ngôn ngữ ngoài danh sách này không thể được dịch trên thiết bị bằng ML Kit. Danh sách được tuyển chọn: mỗi mục có một mô hình có thể tải xuống từ 10–50 MB. Bộ chọn loại trừ các ngôn ngữ mà ML Kit không hỗ trợ, ngay cả khi chúng là mã BCP 47 hợp lệ.

## i18n của giao diện

Giao diện của chính ứng dụng (menu, cài đặt, thông báo lỗi) được dịch sang 10 ngôn ngữ: tiếng Ả Rập, tiếng Anh, tiếng Đức, tiếng Hàn, tiếng Pháp, tiếng Nhật, tiếng Nga, tiếng Tây Ban Nha, tiếng Việt và tiếng Trung (giản thể). Các ngôn ngữ dịch là tập siêu của tập i18n cho một số cặp phổ biến (en ↔ ja, en ↔ zh, en ↔ es, en ↔ fr).
