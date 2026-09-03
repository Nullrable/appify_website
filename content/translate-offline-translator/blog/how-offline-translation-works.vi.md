---
title: "Cách bản dịch ngoại tuyến hoạt động trên iPhone của bạn"
description: "Hướng dẫn đầy đủ về cách ứng dụng hoàn thành bản dịch mà không tải lên một byte văn bản nguồn nào lên máy chủ."
date: 2026-09-03
lang: vi
slug: how-offline-translation-works
---

## Cách bản dịch ngoại tuyến hoạt động trên iPhone của bạn

Quy trình dịch của ứng dụng chạy hoàn toàn trên thiết bị. Không có ảnh, không có kết quả OCR và không có yêu cầu dịch nào rời khỏi iPhone. Bài viết này giải thích «trên thiết bị» thực sự có nghĩa là gì, các mô hình sống ở đâu và những đánh đổi nào đi kèm với việc chạy dịch cục bộ.

## Các phần chạy trên thiết bị

Có ba công việc độc lập xảy ra trên điện thoại cho một bản dịch qua camera:

1. **OCR.** Một gói `vision_text_recognition` đã fork chạy nhận dạng văn bản cục bộ. Nó hỗ trợ chữ Latin, Trung Quốc (giản thể và phồn thể), Nhật và Hàn. Mỗi khối văn bản được nhận dạng mang hộp giới hạn và văn bản được phát hiện riêng.
2. **Dịch.** Công cụ dịch trên thiết bị của Google ML Kit lấy đầu ra OCR và tạo văn bản dịch. Công cụ được đóng gói dưới dạng mô hình ngôn ngữ có thể tải xuống cho mỗi cặp ngôn ngữ; ứng dụng tải mô hình theo yêu cầu và lưu vào bộ nhớ đệm trên đĩa.
3. **Kết xuất.** Trang kết quả vẽ mỗi khối đã dịch lên trên ảnh gốc, sử dụng các hộp giới hạn được trả về bởi công cụ OCR. Không cần round-trip tới máy chủ để kết xuất lớp phủ — hình ảnh, các khối nguồn và bản dịch đều sống trong bộ nhớ trên thiết bị.

## Tại sao điều này quan trọng

- **Quyền riêng tư.** Ảnh của biển đường, hợp đồng, biểu mẫu y tế và thư từ cá nhân vẫn nằm trên thiết bị. Không có bước tải lên nào ở bất kỳ đâu trong quy trình, vì vậy không có gì để rò rỉ, trát đòi hoặc bán.
- **Độ trễ.** Không có round-trip mạng. OCR của một trang điển hình chụp bằng điện thoại hoàn tất trong chưa đầy một giây trên thiết bị gần đây, và bản dịch của các kết quả theo khối được truyền khi mỗi khối hoàn tất.
- **Ngoại tuyến.** Quy trình chạy trên máy bay, trong tầng hầm, trong đường hầm, trên tàu, ở một quốc gia không có vùng phủ sóng. Công cụ OCR và công cụ dịch được tải xuống một lần và tái sử dụng vô hạn; không có gì được tìm nạp cho mỗi lần chụp.
- **Chi phí.** Ứng dụng không trả tiền theo ký tự cho API dịch, vì vậy tính năng không cần paywall dựa trên sử dụng hoặc giới hạn ký tự hàng tháng để duy trì tính bền vững. Cấp miễn phí là cùng một quy trình.

## Các mô hình sống ở đâu

ML Kit xuất bản các mô hình dịch trên thiết bị cho 19 ngôn ngữ. Mỗi mô hình có dung lượng khoảng 10–50 MB. Khi bạn chọn ngôn ngữ nguồn hoặc đích, ứng dụng sẽ tải mô hình tương ứng vào sandbox cục bộ của ứng dụng khi sử dụng lần đầu. Mô hình vẫn tồn tại qua các lần khởi động lại ứng dụng; việc xóa nó sẽ lấy lại dung lượng ngay lập tức.

Danh sách đầy đủ các ngôn ngữ được hỗ trợ: tiếng Ả Rập, tiếng Trung (giản thể), tiếng Séc, tiếng Hà Lan, tiếng Anh, tiếng Pháp, tiếng Đức, tiếng Croatia, tiếng Hungary, tiếng Ý, tiếng Nhật, tiếng Hàn, tiếng Ba Lan, tiếng Bồ Đào Nha, tiếng Romania, tiếng Nga, tiếng Slovak, tiếng Slovenia và tiếng Tây Ban Nha.

## Cái gì được tải lên (và cái gì không)

- **Không được tải lên.** Ảnh, văn bản OCR, văn bản dịch, các mục lịch sử, trạng thái mô hình ngôn ngữ. Không có gì trong số này rời khỏi thiết bị.
- **Được tải lên.** Báo cáo sự cố ẩn danh và các bộ đếm tổng hợp (ví dụ: «yêu cầu dịch mỗi ngày»). Báo cáo sự cố không bao gồm nội dung người dùng; nếu báo cáo trong tương lai từng chứa nội dung, đó sẽ là lỗi và nên được báo cáo.

## Đánh đổi của việc chạy cục bộ

- **Danh sách ngôn ngữ có giới hạn.** Chỉ những ngôn ngữ mà ML Kit xuất bản dưới dạng mô hình trên thiết bị được hỗ trợ. Danh sách được tuyển chọn và hiện có 19 mục.
- **Yêu cầu tải mô hình.** Bản dịch đầu tiên cho một cặp ngôn ngữ kích hoạt một lần tải xuống. Trang trình quản lý mô hình hiển thị trạng thái và cho phép bạn tải trước cho chuyến đi ngoại tuyến.
- **Chất lượng.** Chất lượng dịch trên thiết bị có thể so sánh với dịch trên đám mây cho văn bản ngắn, được định dạng tốt. Các đoạn văn dài hoặc thuật ngữ cụ thể theo miền có thể khác với công cụ đám mây được điều chỉnh cho miền đó.
- **Tính toán.** OCR và dịch sử dụng CPU và Neural Engine của điện thoại. Tác động đến pin cho một lần chụp là nhỏ, nhưng có thể đo lường được đối với quy trình hàng loạt.

## Điều này có ý nghĩa gì với bạn

Nếu bạn đã từng do dự không chụp ảnh một tài liệu nhạy cảm vì ảnh sẽ kết thúc trên máy chủ của người khác, thì sự do dự đó là lý do ứng dụng này tồn tại. Mọi phần của quy trình đều chạy cục bộ, và mô hình dữ liệu của ứng dụng được thiết kế xoay quanh giả định rằng không có gì rời khỏi thiết bị trừ khi người dùng chọn rõ ràng chia sẻ kết quả.
