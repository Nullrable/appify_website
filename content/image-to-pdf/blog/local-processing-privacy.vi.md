---
title: "Tệp không rời điện thoại: xử lý cục bộ bảo vệ quyền riêng tư của bạn như thế nào"
description: "Các công cụ chuyển đổi trực tuyến cần tải tệp lên, xử lý trên thiết bị thì không. Lấy Image to PDF làm ví dụ, giải thích cách xử lý cục bộ hoạt động, lịch sử được lưu ở đâu, và ranh giới dữ liệu của quảng cáo và đăng ký."
date: 2026-09-07
lang: vi
slug: local-processing-privacy
---

## Bạn đã tải lên bao nhiêu tệp nhạy cảm?

Hãy nhớ lại những công cụ chuyển đổi trực tuyến bạn đã dùng: ảnh giấy tờ tùy thân, bản scan hợp đồng, ảnh chụp sao kê ngân hàng — để biến chúng thành PDF hoặc ảnh, chúng đã được tải lên một máy chủ nào đó bạn chưa từng nghe tên. Hầu hết dịch vụ tuyên bố "xóa ngay sau khi xử lý", nhưng bạn không có cách nào xác minh, và hành động tải lên bản thân nó đã xảy ra rồi.

## Xử lý cục bộ nghĩa là gì

Mọi tính năng của Image to PDF — ảnh sang PDF, ghép, PDF sang ảnh, gộp, mã hóa, giải mã — đều hoàn thành trên điện thoại của bạn. Cụ thể:

- Ảnh và tệp PDF chỉ được đọc, xử lý, xuất trong ứng dụng, **không đi qua bất kỳ máy chủ nào**
- Chuyển đổi chạy trên chip của thiết bị, nên ngay cả khi mất mạng vẫn có thể hoàn thành đầy đủ tính năng
- Tệp đầu ra được lưu trong thư mục cục bộ của ứng dụng, và bạn quyết định gửi đi đâu qua bảng chia sẻ hệ thống

Nói cách khác, "tệp không rời khỏi điện thoại" không phải khẩu hiệu, mà là kết quả trực tiếp của kiến trúc — không có kênh tải lên, tự nhiên không có tải lên.

## Lịch sử được lưu ở đâu

Mỗi lần chuyển đổi sẽ ghi vào lịch sử của ứng dụng, bao gồm trạng thái thao tác, thời lượng, định dạng nguồn và đầu ra, kích thước tệp. Những bản ghi này được lưu trong cơ sở dữ liệu cục bộ trên thiết bị, chỉ đọc được trên thiết bị đó. Xóa bộ nhớ đệm hoặc gỡ cài đặt ứng dụng là xóa triệt để, quá trình không đi qua chúng tôi — thực tế, chúng tôi có muốn xem cũng không xem được.

## Ranh giới dữ liệu của quảng cáo và đăng ký

Mô hình kinh doanh của ứng dụng cần nói rõ:

- **Quảng cáo**: Người dùng chưa đăng ký sẽ thấy quảng cáo có thưởng của Google AdMob khi vào màn hình tính năng. AdMob sử dụng mã định danh quảng cáo theo chính sách của họ để phân phối quảng cáo — đây là ranh giới giữa AdMob và chúng tôi. Chúng tôi không nắm giữ tệp của bạn, cũng không thu thập dữ liệu cá nhân thông qua quảng cáo
- **Đăng ký Pro**: Thanh toán do Apple App Store xử lý, xác minh đăng ký thông qua RevenueCat. Chúng tôi không tiếp cận được số thẻ, thông tin thanh toán, cũng không lưu giữ thông tin xác thực thanh toán
- **Pro mang lại**: Pro gỡ bỏ quảng cáo. Bạn vào thẳng màn hình tính năng mà không cần xem video thưởng

## Gợi ý xử lý cho tệp nhạy cảm

Ngay cả khi dùng công cụ xử lý cục bộ, thói quen vẫn quan trọng:

1. **Chuyển kịp thời các đầu ra quan trọng** — Lưu kết quả chuyển đổi qua bảng chia sẻ vào Tệp, iCloud hoặc ổ đĩa khác, đừng chỉ để trong thư mục ứng dụng
2. **Mã hóa trước khi gửi ra ngoài** — Dùng tính năng Mã hóa trên PDF nhạy cảm để đặt mật khẩu mở, truyền mật khẩu qua kênh riêng biệt với tệp
3. **Dọn dẹp định kỳ** — Xóa lịch sử và tệp đầu ra không cần trong Cài đặt, giữ thiết bị gọn gàng

Bảo vệ quyền riêng tư không dựa vào lời hứa, mà dựa vào kiến trúc. Trước khi chuyển đổi tệp lần sau, hãy tự hỏi: tệp này có cần rời khỏi điện thoại của tôi không?

