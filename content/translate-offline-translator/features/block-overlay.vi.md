---
title: "Lớp phủ theo khối: bản dịch được hiển thị đúng vị trí trên ảnh"
description: "Trang kết quả vẽ mỗi khối văn bản đã dịch lên trên hình chữ nhật nguồn của nó, giữ nguyên bố cục ban đầu."
date: 2026-09-03
lang: vi
slug: block-overlay
icon: layers
---

Trang kết quả hiển thị các bản dịch trên ảnh gốc, một lớp phủ cho mỗi khối OCR. Bản dịch của mỗi khối xuất hiện trong đúng hình chữ nhật nơi công cụ OCR phát hiện văn bản nguồn. Lớp phủ hỗ trợ thanh trượt độ trong suốt để người dùng có thể so sánh bản gốc và bản dịch cạnh nhau mà không cần rời trang.

## Cách lớp phủ hoạt động

1. **Dịch theo khối.** Mỗi TextBlock được phát hiện được gửi đến ML Kit như một tác vụ dịch độc lập. Các bản dịch truyền vào lớp phủ khi hoàn thành; người dùng thấy các khối "trở thành" được dịch theo thứ tự công cụ hoàn thành chúng.
2. **Định vị theo hình chữ nhật.** Văn bản đã dịch được ngắt dòng và định vị để vừa với hình chữ nhật nguồn. Nếu một khối hẹp, bản dịch ngắt dòng thành nhiều dòng và có thể tràn nhẹ ra ngoài hình chữ nhật nguồn; công cụ ưu tiên khả năng đọc hơn là chứa chặt.
3. **Nhấn để lấy nét.** Nhấn vào một khối đã dịch sẽ mở một trang dưới cuộn đến cùng khối trong chế độ xem "Bản dịch đầy đủ", để người dùng có thể đọc các bản dịch dài hơn mà không cần phóng to ảnh.
4. **Độ trong suốt có thể điều chỉnh.** Thanh trượt kiểm soát độ mờ của lớp phủ. Trượt đến hoàn toàn trong suốt để xem ảnh gốc, hoàn toàn mờ để đọc các bản dịch.

## Giải phẫu trang kết quả

- **Thanh trên cùng.** Nút đóng. Không có điều khiển nào khác — trang kết quả cố ý tối giản.
- **Vùng chính.** Ảnh gốc toàn màn hình, với lớp phủ được hiển thị phía trên. InteractiveViewer cho phép phóng to và xoay để kiểm tra văn bản nhỏ.
- **Trang dưới.** Ba trạng thái: thu gọn (mặc định), giữa (khoảng nửa màn hình), mở rộng (hầu hết màn hình). Trạng thái thu gọn hiển thị một tay cầm nhỏ và tóm tắt; giữa hiển thị các bản dịch theo khối dưới dạng thẻ; mở rộng hiển thị tất cả bản dịch khối ở chiều rộng đầy đủ.
- **Hai tab trong trang.** Tab "Blocks" hiển thị các bản dịch được nhóm theo khối OCR, và tab "Full" hiển thị bản dịch đầy đủ của đoạn văn đã nối.

## Tại sao dịch theo khối

- **Hệ chữ hỗn hợp.** Trang có tiêu đề tiếng Anh và chú thích tiếng Nhật được hưởng lợi từ các gợi ý ngôn ngữ nguồn theo khối. Vị trí và lớp chữ của khối cho công cụ biết mô hình nguồn nào sử dụng.
- **Cô lập lỗi.** Một khối đơn lẻ dịch thất bại không chặn phần còn lại của trang. Lớp phủ đánh dấu các khối thất bại bằng một huy hiệu cảnh báo nhỏ để người dùng biết cái nào cần chú ý thủ công.
- **Bảo toàn bố cục.** Người dùng đọc nguồn có thể định vị bản dịch tương ứng bằng mắt — hữu ích cho menu, biển báo và nhãn khi mối quan hệ không gian quan trọng.

## Hành vi chỉnh sửa

Lớp phủ được hiển thị trên ảnh, không được gắn vào. Lưu vào lịch sử lưu trữ cả ảnh gốc và bản ghi dịch theo khối. Mở một mục đã lưu sẽ tái tạo chính xác lớp phủ; chỉnh sửa ảnh không được hỗ trợ.
