---
title: "Nhập ảnh: dịch bất kỳ ảnh nào trong thư viện của bạn"
description: "Lấy vào bất kỳ ảnh nào đã có trên thiết bị của bạn và dịch nó qua cùng quy trình OCR + ML Kit như một lần chụp mới."
date: 2026-09-03
lang: vi
slug: photo-import
icon: photo
---

Cùng một quy trình OCR và dịch xử lý các lần chụp trực tiếp cũng xử lý các ảnh được nhập từ thư viện thiết bị. Sử dụng cho ảnh chụp màn hình, ảnh đã lưu của biển báo hoặc thực đơn và hình ảnh do bạn bè chia sẻ.

## Cách thức hoạt động của nhập

1. **Chọn từ thư viện.** Nhấn vào biểu tượng thư viện trong trang camera sẽ mở trình chọn ảnh hệ thống qua `image_picker`. Hình ảnh được chọn được sao chép vào thư mục tạm của ứng dụng; bản gốc được giữ nguyên tại chỗ.
2. **Đọc hướng vật lý.** Ảnh thư viện có thẻ hướng EXIF đáng tin cậy, vì vậy đường dẫn nhập sử dụng EXIF trực tiếp mà không động vào gia tốc kế. Hình ảnh được xoay về hướng thẳng đứng chính xác trước khi OCR.
3. **Cùng quy trình OCR.** Hình ảnh được đưa vào cùng một công cụ `vision_text_recognition` đã fork được sử dụng bởi đường dẫn camera. Không cần xử lý đặc biệt cho "đã nhập" so với "đã chụp" — trang kết quả và hành vi dịch là giống hệt nhau.
4. **Lưu vào lịch sử.** Giống như các lần chụp camera, ảnh đã nhập có thể được lưu vào lịch sử dịch cục bộ. Bản sao được lưu là hình thu nhỏ đã nén, không phải ảnh thư viện đầy đủ, để giữ dung lượng ở mức vừa phải.

## Khi nào nhập thay vì chụp

- **Ảnh chụp màn hình.** Dịch các chuỗi UI, hộp thoại lỗi hoặc đoạn web được lưu dưới dạng ảnh chụp màn hình.
- **Ảnh đã chụp.** Dịch một bức ảnh từ chuyến đi, cuộc họp hoặc cuộc trò chuyện của bạn bè mà không cần chụp lại.
- **Phác thảo hoặc bảng trắng.** Ảnh chụp ghi chú bảng trắng và phác thảo thường rõ hơn so với chụp lại, đặc biệt khi bề mặt có ánh sáng chói.
- **Tài liệu.** Ảnh chụp nhanh biên lai, danh thiếp và nhãn do ứng dụng khác chụp có thể được dịch mà không cần chuyển công cụ.

## Quyền riêng tư

Các ảnh đã nhập đi qua cùng quy trình trên thiết bị như ảnh trực tiếp. Chúng được xử lý trong bộ nhớ và không bao giờ được tải lên bất kỳ máy chủ nào mà chúng tôi vận hành. Các bản sao lịch sử đã lưu chỉ được lưu trữ trên thiết bị, trong cơ sở dữ liệu cục bộ của ứng dụng, và có thể bị xóa riêng lẻ từ trang lịch sử.

## Giới hạn

- **Xoay hiện có được tôn trọng.** Ảnh đã được hệ điều hành xoay sẽ được xoay lại về thẳng đứng trước khi OCR. Đây là nguồn phổ biến nhất của sự cố "OCR trả về văn bản bị rối" với các lần nhập.
- **Bản gốc lớn được thu nhỏ.** Ảnh trên độ phân giải khuyến nghị của công cụ OCR sẽ được thu nhỏ trước khi nhận dạng. Ảnh gốc trên thiết bị không bị ảnh hưởng.
- **Không nhập hàng loạt.** Mỗi ảnh yêu cầu một lần nhấn riêng. Nếu bạn cần dịch nhiều ảnh đã lưu, hãy chạy từng cái một; OCR + dịch cho một hình ảnh thường hoàn tất trong vài giây.
