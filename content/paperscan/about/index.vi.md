---
title: Giới thiệu Paper Scan - Hướng dẫn tính năng
description: Tìm hiểu Paper Scan làm được gì, cách mọi bộ lọc và OCR chạy trên thiết bị, và cách đồng bộ đám mây không xung đột giữ các tài liệu của bạn đồng nhất trên iPhone và iPad.
date: 2026-09-02
lang: vi
slug: index
---

Paper Scan là máy quét tài liệu được xây cho iPhone và iPad. Nó chụp trọn một tờ A4 từ khoảng cách thoải mái, chỉnh phối cảnh tự động, cho phép bạn tinh chỉnh bằng sáu bộ lọc GPU, và xuất các PDF nhiều trang có văn bản có thể tìm kiếm - tất cả không gửi đi một byte nào đến máy chủ trừ khi bạn bật đồng bộ đám mây.

## Chụp và nhận diện cạnh

Khung chụp đủ rộng để chứa trọn một tờ A4 từ khoảng cách một cánh tay. Ngay khi tờ giấy vào khung hình, nhận diện cạnh sẽ bám vào bốn góc. Khi tài liệu đứng yên, chụp tự động sẽ kích hoạt, phối cảnh được chỉnh ngay tại chỗ, và một hình thu nhỏ nhỏ xuất hiện trong khay xem xét để bạn xác nhận hoặc chụp lại.

Bạn có thể chuyển sang chế độ thủ bạn bất kỳ lúc nào. Nhấn giữ nút chụp để tắt chụp tự động, kéo tay nắm góc khi cần chỉnh cạnh, và nhấn vào hình thu nhỏ để cắt hoặc xoay trước khi cam kết trang vào tài liệu.

## Sáu bộ lọc GPU

Mọi bộ lọc trong Paper Scan đều được dựng trên GPU. Bản xem trước cập nhật tức thì ngay cả với lô nhiều trang, nên bạn có thể so sánh cường độ bộ lọc mà không cần chờ.

- **Gốc** giữ nguyên ảnh chụp, phù hợp khi bạn muốn bản ghi trung thực.
- **Tăng cường** đẩy độ tương phản và cân bằng trắng, cứu các hóa đơn giấy nhiệt đã phai và ảnh chụp dưới ánh sáng mờ.
- **Thang xám** làm phẳng nhiễu màu trên giấy màu để lớp OCR đọc chữ sạch hơn.
- **Đen trắng** đẩy ý tưởng đó thêm một bước, cho ra lớp văn bản sạch nhất để lưu trữ.
- **Làm sáng** đều hóa bóng từ ánh đèn flash, hữu ích với trang tạp chí bóng.
- **Làm nét** khôi phục chi tiết nhỏ trên hóa đơn và nhãn dán số serial.

Bộ lọc áp dụng theo từng trang, không phải theo tài liệu. Bạn có thể trộn chúng trong cùng một PDF nếu một số trang cần màu và một số cần đen trắng.

## Tổ chức

Các bản quét rơi vào một canvas được gom thành trang trong tài liệu. Bạn có thể kéo trang để sắp xếp lại, kéo trang từ tài liệu này sang tài liệu khác, đổi tên tài liệu ngay tại chỗ, và ghim những tài liệu hay dùng lên đầu thư viện.

Tìm kiếm toàn văn chạy trên mọi trang đã từng được OCR. Kết quả làm nổi từ trùng khớp trên hình thu nhỏ của trang, và chạm vào kết quả sẽ mở tài liệu ở đúng trang để bạn đọc ngữ cảnh xung quanh.

## OCR trên thiết bị

OCR dùng framework Vision của Apple. Nhận dạng văn bản diễn ra trong khu vực bảo mật của iPhone - hình ảnh không bao giờ rời thiết bị, văn bản nhận dạng được không gửi đi đâu cả, và chỉ mục OCR nằm trong bộ nhớ riêng của ứng dụng. Lớp OCR chạy theo yêu cầu và bạn có thể chạy lại trên một trang bất kỳ lúc nào nếu đổi bộ lọc.

Văn bản có thể tìm kiếm được giữ lại khi bạn xuất PDF. Bất kỳ ai mở PDF trong Preview, Adobe Reader hay bất kỳ trình xem hiện đại nào đều có thể sao chép văn bản ra thay vì gõ lại.

## Xuất PDF nhiều trang

Xuất cả tài liệu thành một PDF, hoặc chia sẻ từng trang đơn lẻ dưới dạng ảnh. Mỗi lần xuất bạn có thể chọn cỡ trang (Letter / A4 / gốc), hướng, chất lượng (Thấp / Chuẩn / Cao) và có đưa lớp văn bản OCR vào hay không. Paper Scan tự động nhúng lớp OCR khi bạn giữ chất lượng ở Chuẩn hoặc Cao.

Xuất hàng loạt cho phép bạn chọn nhiều tài liệu cùng lúc và gói chúng thành một zip nhiều PDF - rất tiện cho các đợt quyết toán cuối tháng.

## Đồng bộ đám mây không xung đột

Đồng bộ đám mây là tùy chọn. Bật iCloud và tài liệu của bạn xuất hiện trên mọi thiết bị đăng nhập cùng Apple ID; bật Google Drive và chúng xuất hiện trên mọi thiết bị đăng nhập tài khoản Google đó. Bạn có thể giữ cả hai ở trạng thái tắt và ứng dụng hoạt động như một kho lưu trữ cục bộ thuần túy.

Đồng bộ giải quyết các chỉnh sửa đồng thời mà không tạo bản trùng lặp. Mỗi trang mang điểm đánh dấu phiên bản riêng, nên phiên bản mới nhất của trang đó thắng, và các chỉnh sửa cục bộ đang thực hiện của bạn không bao giờ bị ghi đè âm thầm khi đang làm việc. Đổi tên thư mục, tài liệu và trang cũng được lan truyền, nên xóa một tài liệu trên một thiết bị sẽ xóa ở mọi nơi.

## Mặc định offline, ưu tiên quyền riêng tư

Paper Scan mặc định offline. Quét, nhận diện cạnh, bộ lọc, OCR, tìm kiếm và xuất PDF đều chạy trên thiết bị và không thực hiện bất kỳ cuộc gọi mạng nào. Tính năng duy nhất dùng mạng là đồng bộ đám mây, và chỉ khi bạn bật nó. Không yêu cầu tài khoản, không đóng gói SDK phân tích, và không có quảng cáo.

Các bản quét của bạn nằm trong bộ nhớ riêng của ứng dụng. Gỡ cài đặt ứng dụng sẽ xóa toàn bộ dữ liệu cục bộ, bao gồm chỉ mục OCR, bộ nhớ đệm tìm kiếm toàn văn và mọi chỉnh sửa chưa đồng bộ.

## Paper Scan Pro

Quét, sáu bộ lọc, OCR, xuất PDF tài liệu đơn và tìm kiếm luôn miễn phí vĩnh viễn và không có hình mờ. Paper Scan Pro thêm tài liệu không giới hạn, đồng bộ đám mây và xuất hàng loạt. Pro được bán dưới dạng nâng cấp một lần, nên một khi đã sở hữu, bạn giữ được nó trên mọi thiết bị và qua các bản cập nhật trong tương lai.
