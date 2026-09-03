---
title: "OCR qua camera: chỉ, chụp, dịch"
description: "OCR trên thiết bị qua vision_text_recognition với hướng chính xác ở cấp phần cứng, ngay cả khi giao diện thiết bị bị khóa ở chế độ dọc."
date: 2026-09-03
lang: vi
slug: camera-ocr
icon: camera
---

OCR của camera chạy nhận dạng văn bản cục bộ bằng gói `vision_text_recognition` đã fork hỗ trợ chữ Latin, Trung Quốc (giản thể và phồn thể), Nhật và Hàn. Không có gì được tải lên để nhận dạng. Mỗi khối do công cụ OCR trả về đều mang hộp giới hạn và văn bản phát hiện riêng; trang kết quả vẽ bản dịch lên cùng tọa độ để giữ nguyên bố cục gốc.

## Quy trình chụp

1. **Khởi tạo camera.** Bộ điều khiển camera được khởi tạo không đồng bộ với các trạng thái rõ ràng `initializing / ready / failed`. Khi thất bại, nút thử lại sẽ chạy lại quá trình khởi tạo mà không cần vào lại bảo vệ `initializing`.
2. **Hướng thực sự.** `DeviceOrientation` và EXIF của iOS không đáng tin khi ứng dụng bị khóa dọc. Ứng dụng đọc gia tốc kế thô qua `sensors_plus` và lưu cache khung hình gần nhất, để màn trập chụp theo hướng cầm thực ngay cả khi UI bị khóa. Hướng EXIF sau đó được đối chiếu với sự thật này.
3. **Màn trập.** Chạm để chụp theo tỉ lệ khung hình hiện tại của bản xem trước. Khung đã chụp được giảm xuống cạnh tối đa có thể cấu hình trước khi OCR — hầu hết các trang cần 1500–2000 px ở cạnh dài để công cụ đọc chữ nhỏ mà không làm phình bộ nhớ.
4. **Đèn flash.** Bốn chế độ trong khung ngắm — tự động, tắt, bật và đèn pin — với công tắc liên kết với API flash của hệ thống.

## Những gì OCR trả về

- **Hộp giới hạn cho mỗi khối.** Mỗi TextBlock có hình chữ nhật riêng. Trang kết quả sử dụng chúng để đặt văn bản đã dịch chính xác lên văn bản nguồn.
- **Văn bản và thứ tự khối.** Văn bản ngôn ngữ nguồn theo khối, theo thứ tự công cụ phát ra (từ trên xuống dưới, từ trái sang phải theo mặc định).
- **Độ tin cậy.** Mỗi khối mang độ tin cậy riêng. Các khối dưới ngưỡng sẽ được hiển thị trong trang kết quả nhưng được gắn cờ là "độ tin cậy thấp" để người dùng xác minh.

## Tại sao trên thiết bị

- **Quyền riêng tư.** Ảnh biển đường, hợp đồng hoặc biểu mẫu y tế không bao giờ rời khỏi thiết bị để OCR.
- **Độ trễ.** Không có round-trip mạng. OCR của một trang điển hình chụp bằng điện thoại hoàn tất trong chưa đầy một giây trên thiết bị gần đây.
- **Ngoại tuyến.** OCR hoạt động trên máy bay, trong tầng hầm và ở những vùng không có sóng. Cùng một công cụ chạy nhận dạng hoạt động hoàn toàn từ mô hình trên thiết bị.

## Thực hành tốt nhất để có OCR chính xác

1. **Ánh sáng đều, gián tiếp.** Ánh sáng từ cửa sổ tốt hơn đèn rọi trần. Bóng tối đi ngang trang là nguyên nhân phổ biến nhất khiến ký tự bị đọc sai.
2. **Chạm để lấy nét.** Nếu lấy nét tự động chọn sai chủ thể (mặt bàn, ngón tay, mép trang), hãy chạm vào giữa văn bản trước khi chụp.
3. **Trang phẳng.** Các trang cong về phía gáy sách sẽ mất ký tự gần rãnh. Dùng tay kia ấn phẳng trang khi có thể.
4. **Một ngôn ngữ mỗi lần chụp.** Các trang có hệ chữ hỗn hợp hoạt động trong một lần quét, nhưng trang trộn chữ Latin với tiếng Nhật dọc thì tốt nhất nên chia thành hai lần chụp.
