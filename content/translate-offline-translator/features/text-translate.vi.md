---
title: "Dịch văn bản: dán, gõ, dịch"
description: "Một trang dịch chỉ văn bản độc lập chia sẻ cùng trạng thái cặp ngôn ngữ với trang camera."
date: 2026-09-03
lang: vi
slug: text-translate
icon: keyboard
---

Trang dịch văn bản là một lối vào riêng biệt từ trang camera cho các trường hợp nguồn đã là văn bản. Mở nó từ dưới cùng của trang camera và dán, gõ hoặc đọc chính tả một đoạn; cùng một công cụ ML Kit trả về bản dịch.

## Tại sao một trang riêng

OCR của camera được tối ưu cho hình ảnh. Khi nguồn đã là văn bản — đoạn email, tin nhắn chat, đoạn văn dán vào — bước OCR là thừa. Trang dịch văn bản bỏ qua OCR hoàn toàn và đưa đầu vào thẳng đến trình dịch ML Kit.

Nó cũng cho phép bạn dịch hàng loạt bằng cách sao chép và dán một đoạn dài thay vì chụp ảnh chúng. Đối với văn bản dày đặc không có trang thuận tiện để chụp, cách này nhanh hơn và chính xác hơn.

## Cách hoạt động

- **Trạng thái ngôn ngữ chia sẻ.** Trang văn bản đọc và ghi cùng cặp ngôn ngữ nguồn/đích như trang camera. Chọn ngôn ngữ đích ở một nơi sẽ áp dụng cho nơi kia; chuyển qua lại không cần chọn lại ngôn ngữ.
- **Tự động phát hiện cho nguồn.** Nếu nguồn được đặt thành «Tự động phát hiện», ứng dụng chạy phương pháp heuristic cấp lớp ký tự trong Dart trên văn bản đầu vào để chọn giữa các ngôn ngữ được ML Kit hỗ trợ. Latin thuần mặc định là tiếng Anh; ký tự Hán mặc định là tiếng Trung giản thể; hệ chữ hỗn hợp theo lớp ký tự đa số.
- **Dịch một lượt.** Toàn bộ đầu vào được gửi đến ML Kit trong một lần gọi. Kết quả thay thế vùng nhập liệu dưới nút; xóa đầu vào để dịch lại.
- **Xử lý bàn phím.** Nhấn vào Dịch sẽ đóng bàn phím trên màn hình để vùng kết quả không bị ẩn sau bàn phím.

## Khi nào sử dụng

- **Đoạn văn dài.** Gõ hoặc dán văn bản nhiều câu. Chụp ảnh một màn hình đầy văn bản gây nhiễu OCR; dán văn bản thì không.
- **Đoạn chat.** Dịch một tin nhắn ngắn từ bạn bè mà không cần rời cuộc trò chuyện để mở camera.
- **Màn hình có văn bản.** Kéo văn bản từ ảnh chụp màn hình qua chia sẻ hệ thống và dán vào trang dịch văn bản để có bản dịch sạch hơn OCR.
- **Đọc chính tả bằng giọng nói.** Dùng phím đọc chính tả của hệ thống để đọc chính tả văn bản thay vì gõ.

## Giới hạn

- **Không giữ định dạng.** Chỉ văn bản thuần. Markdown, in đậm, in nghiêng và các định dạng khác bị loại bỏ.
- **Không tự động lưu vào lịch sử.** Không giống như ảnh chụp camera, bản dịch văn bản không được tự động lưu. Kết quả vẫn trong vùng kết quả cho đến khi bạn nhấn Xóa hoặc điều hướng đi.
