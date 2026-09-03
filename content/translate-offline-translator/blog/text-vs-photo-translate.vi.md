---
title: "Dịch văn bản vs dịch ảnh: nên dùng cái nào"
description: "Khi nguồn đã là văn bản, bỏ qua OCR. Khi nguồn là trang in, dịch ảnh nhanh hơn. Cách chọn."
date: 2026-09-03
lang: vi
slug: text-vs-photo-translate
---

## Dịch văn bản vs dịch ảnh: nên dùng cái nào

Ứng dụng có hai điểm vào cho bản dịch: trang camera (dịch ảnh) và trang dịch văn bản. Chúng chia sẻ cùng trạng thái cặp ngôn ngữ và cùng công cụ ML Kit, nhưng quy trình khác nhau ở một bước quan trọng.

## Sự khác biệt trong một câu

Dịch ảnh chạy OCR trên ảnh đã chụp rồi dịch văn bản đã nhận dạng. Dịch văn bản bỏ qua OCR hoàn toàn và đưa đầu vào trực tiếp vào công cụ dịch.

## Khi dịch văn bản nhanh hơn

- **Nguồn đã là văn bản.** Email, tin nhắn chat, đoạn trích web, đoạn văn dán — bất cứ thứ gì tồn tại dưới dạng văn bản thay vì trang in. Bỏ qua OCR loại bỏ một bước và loại bỏ một lớp lỗi OCR (ký tự đọc sai, ngắt dòng hỏng, bố cục lộn xộn).
- **Văn bản dài và dày đặc.** Chụp ảnh màn hình đầy văn bản sẽ tạo nhiễu OCR. Dán văn bản thì không.
- **Đọc chính tả.** Phím đọc chính tả của hệ thống cho phép bạn nói đầu vào thay vì gõ. Độ chính xác của đọc chính tả tốt cho giọng nói rõ trong môi trường yên tĩnh.
- **Không có camera.** Nếu camera đang được ứng dụng khác sử dụng hoặc quyền truy cập camera bị từ chối, dịch văn bản vẫn hoạt động.

## Khi dịch ảnh nhanh hơn

- **Trang in.** Sách, menu, biển báo, bao bì, hướng dẫn, áp phích. Chúng tồn tại dưới dạng mực trên giấy; cách duy nhất để đưa chúng vào văn bản là chụp ảnh.
- **Nhãn dán và nhãn mác.** Ảnh của nhãn dán hoặc nhãn mác trên sản phẩm có thể được dịch tại chỗ mà không cần sao chép trước.
- **Màn hình không thể chọn.** Nếu nguồn được hiển thị dưới dạng pixel — hình ảnh trong PDF, ảnh chụp màn hình của ứng dụng cũ, ảnh của màn hình — không có văn bản để sao chép. Dịch ảnh là lựa chọn duy nhất.
- **Biển báo song ngữ.** Chụp cả hai ngôn ngữ trong một bức ảnh thường giải quyết gợi ý ngôn ngữ theo khối mà tính năng tự động phát hiện sử dụng.

## Khác biệt về độ chính xác

Cả hai đường dẫn đều sử dụng cùng công cụ ML Kit, nên bản dịch có cùng chất lượng. Sự khác biệt nằm ở thượng nguồn: dịch ảnh có thể tạo nhiễu OCR mà dịch văn bản không tạo. Nếu công cụ OCR đọc sai một ký tự, công cụ dịch không có cách nào khôi phục văn bản gốc.

Đối với văn bản bạn kiểm soát (văn viết của riêng bạn, tin nhắn của riêng bạn), hãy dán nó. Đối với văn bản sống trên giấy, hãy chụp ảnh nó.

## Chia sẻ giữa các chế độ

Cài đặt ngôn ngữ nguồn và đích được chia sẻ giữa trang camera và trang dịch văn bản. Chuyển đổi ngôn ngữ ở một nơi sẽ áp dụng cho nơi kia; chuyển đổi qua lại không yêu cầu chọn lại ngôn ngữ.

Bản dịch văn bản không được tự động lưu vào lịch sử; chúng nằm trong vùng kết quả cho đến khi bạn nhấn Xóa hoặc điều hướng đi. Bản dịch camera có thể được lưu vào lịch sử từ trang kết quả.

## Một quy tắc thực tế

Nếu bạn có thể sao chép văn bản, hãy sao chép nó. Nếu không, hãy chụp ảnh nó. Đường dẫn sao chép sạch hơn vì OCR được loại bỏ khỏi vòng lặp.
