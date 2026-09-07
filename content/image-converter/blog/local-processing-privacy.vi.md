---
title: "Tệp không rời khỏi điện thoại: Xử lý tại chỗ bảo vệ quyền riêng tư của bạn như thế nào"
description: "Các công cụ chuyển đổi trực tuyến cần tải tệp lên, xử lý tại chỗ trên điện thoại thì không. Lấy Image Converter làm ví dụ, giải thích cách thức hoạt động của xử lý tại chỗ, vị trí lưu trữ lịch sử, và ranh giới dữ liệu của quảng cáo và đăng ký."
date: 2026-09-07
lang: vi
slug: local-processing-privacy
---

## Bạn đã tải lên bao nhiêu ảnh nhạy cảm?

Hãy hồi tưởng các công cụ chuyển đổi trực tuyến đã dùng: ảnh chứng minh thư, bản quét hợp đồng, ảnh chụp màn hình riêng tư — để biến chúng thành định dạng khác, chúng đã được tải lên một máy chủ mà bạn chưa từng nghe tên. Hầu hết dịch vụ tuyên bố "xóa ngay sau khi xử lý", nhưng bạn không có cách nào xác minh, và **bản thân hành động tải lên đã xảy ra rồi**.

## Xử lý tại chỗ nghĩa là gì

Mọi chức năng của Image Converter — chuyển đổi định dạng, nén, xoay, cắt, điều chỉnh kích thước, ghép — đều hoàn tất trên điện thoại của bạn. Cụ thể là:

- Ảnh chỉ được đọc, xử lý, xuất trong ứng dụng, **không qua bất kỳ máy chủ nào**;
- Chuyển đổi được thực thi trên chip của thiết bị, **ngay cả khi mất mạng vẫn hoàn thành được mọi chức năng**;
- Tệp đầu ra được lưu trong thư mục cục bộ của ứng dụng, bạn quyết định gửi đi đâu thông qua bảng chia sẻ hệ thống.

Nói cách khác, "tệp không rời khỏi điện thoại" không phải là khẩu hiệu, mà là kết quả trực tiếp của kiến trúc kỹ thuật — không có kênh tải lên, tự nhiên không có tải lên.

## Lịch sử được lưu ở đâu

Mỗi lần chuyển đổi đều ghi vào lịch sử ứng dụng, nội dung bao gồm trạng thái thao tác, thời gian, định dạng nguồn và đầu ra, kích thước tệp. Các bản ghi này được lưu trong cơ sở dữ liệu cục bộ của thiết bị, **chỉ có thể đọc trên máy cục bộ**.

Xóa bộ nhớ cache hoặc gỡ cài đặt ứng dụng là xóa hoàn toàn, quá trình không qua chúng tôi — thực ra, chúng tôi muốn xem cũng không xem được.

## Ranh giới dữ liệu của quảng cáo và đăng ký

Mô hình kinh doanh của ứng dụng cần được nói rõ:

- **Quảng cáo**: người dùng chưa đăng ký khi vào trang chức năng sẽ thấy quảng cáo kích thích của Google AdMob. AdMob sử dụng mã định danh quảng cáo theo chính sách của họ để phân phối quảng cáo, đây là ranh giới giữa AdMob và chúng tôi — chúng tôi không nắm giữ tệp của bạn, và quảng cáo cũng không thu thập dữ liệu cá nhân của bạn;
- **Đăng ký Pro**: thanh toán được xử lý bởi Apple App Store, xác minh đăng ký hoàn tất qua RevenueCat. Chúng tôi không tiếp cận được số thẻ, thông tin hóa đơn của bạn, cũng không lưu giữ biên lai thanh toán;
- **Quyền lợi đăng ký**: Pro loại bỏ quảng cáo, vào chức năng dùng trực tiếp, không cần xem video kích thích nữa.

## Gợi ý xử lý tệp nhạy cảm

Dù đã dùng công cụ xử lý tại chỗ, thói quen vẫn rất quan trọng:

1. **Chuyển ngay đầu ra quan trọng** — kết quả chuyển đổi được lưu vào "Tệp", iCloud hoặc đám mây qua bảng chia sẻ, không chỉ để trong thư mục ứng dụng;
2. **Cắt siêu dữ liệu trước khi gửi ra ngoài** — nếu là ảnh giấy tờ, nên dùng Image Converter chuyển đổi định dạng một lần để loại bỏ thông tin EXIF gốc;
3. **Dọn dẹp định kỳ** — lịch sử và tệp đầu ra không cần thiết, xóa bộ nhớ cache trong cài đặt, giữ thiết bị sạch sẽ.

Bảo vệ quyền riêng tư không dựa vào lời hứa, mà dựa vào kiến trúc. Trước khi chuyển đổi ảnh lần sau, hãy nghĩ một chút: **ảnh này, có cần rời khỏi điện thoại của tôi không?**

