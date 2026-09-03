---
title: "OCR trên thiết bị: văn bản có thể tìm kiếm từ mỗi trang quét"
description: "OCR trên thiết bị: văn bản có thể tìm kiếm từ mỗi trang quét"
date: 2026-09-02
lang: vi
slug: on-device-ocr
---

OCR (nhận dạng ký tự quang học) chuyển một trang đã quét thành văn bản có thể chọn, sao chép và tìm kiếm. Paper Scan chạy OCR hoàn toàn trên thiết bị bằng bộ ML kit của Apple và Google, nên không có nội dung quét nào được gửi đến máy chủ bên ngoài để nhận dạng. Các trang đã nhận dạng được lập chỉ mục trong thư viện cục bộ và trở nên có thể tìm kiếm ngay khi lưu.

### OCR mở ra gì

Khi một trang đã được nhận dạng:

- **Sao chép văn bản từ bản quét.** Nhấn giữ bất kỳ từ nào để hiển thị lớp phủ chọn bao phủ toàn trang. Văn bản được chọn có thể dán vào bất kỳ ứng dụng nào khác.
- **Tìm kiếm trong bản quét.** Thanh tìm kiếm ở đầu danh sách Tài liệu truy vấn văn bản đã nhận dạng của mọi trang, không chỉ tiêu đề và thẻ. Số điện thoại, tên, số hóa đơn và địa chỉ có thể được tìm thấy trên toàn bộ thư viện.
- **Trích dẫn và tham chiếu.** Hóa đơn đã quét, hợp đồng, ghi chú viết tay và chắn bảng trắng đều trở thành văn bản có thể trích dẫn để tham chiếu sau.

### Tại sao xử lý trên thiết bị quan trọng

- **Quyền riêng tư.** Nội dung quét không bao giờ rời khỏi thiết bị để nhận dạng. Điều này liên quan đến hóa đơn, hợp đồng, biểu mẫu y tế và mọi tài liệu chứa dữ liệu cá nhân.
- **Độ trễ.** Không có round-trip mạng. Trên các iPhone đời mới và thiết bị Android hàng đầu, OCR cho một trang tiêu chuẩn thường hoàn thành dưới một giây.
- **Khả dụng ngoại tuyang.** OCR hoạt động trên máy bay, trong tầng hầm và ở những vùng không có vùng phủ mạng. Không yêu cầu kết nối.

Độ chính xác tương đương với các dịch vụ OCR dựa trên máy chủ; sự khác biệt là tính toán chạy ở đâu.

### Thực hành tốt nhất để nhận dạng chính xác

Độ chính xác OCR phụ thuộc chủ yếu vào chất lượng đầu vào. Ba yếu tố, theo thứ tự quan trọng:

1. **Ánh sáng.** Ánh sáng gián tiếp đều từ cửa sổ hoạt động tốt hơn một đèn spotlight đơn phía trên. Bóng đổ qua trang là nguyên nhân phổ biến nhất của ký tự đọc sai.
2. **Tiêu điểm.** Nếu tự động lấy nét chọn sai đối tượng, hãy nhấn vào trung tâm văn bản trước khi chụp. Bản quét mờ hiếm khi là bản quét dùng được.
3. **Chọn bộ lọc.** Đen trắng cho văn bản sạch nhất cho biểu mẫu in. Màu ma thuật được khuyến nghị khi mực đã phai hoặc giấy đã ngả vàng. Tự động xử lý hầu hết các trường hợp hằng ngày.
4. **Trang phẳng.** Các trang cong về phía gáy sách mất ký tự gần rãnh. Hãy ấn phẳng trang bằng tay kia nếu có thể.
5. **Gợi ý ngôn ngữ.** Đặt ngôn ngữ OCR rõ ràng cho các trang đơn ngôn ngữ. Các trang hỗn hợp kịch bản hoạt động trong một lượt duy nhất mà không cần gợi ý.

### Giới hạn độ chính xác

OCR hoạt động tốt trên văn bản in (độ chính xác 95%+) nhưng kém đáng tin cậy hơn đối với chữ viết tay cursive, phông chữ rất nhỏ, phông chữ trang trí cách điệu, phản chiếu tạp chí bóng và hóa đơn cũ nơi mực đã phai vật lý. Hình ảnh gốc vẫn có sẵn trong mọi trường hợp: nếu OCR thất bại trên một trang quan trọng, bản quét vẫn có thể được đọc.

Gói miễn phí bao gồm hạn mức OCR hằng ngày đủ cho hóa đơn hằng ngày, danh thiếp và chương sách thỉnh thoảng. Pro xóa giới hạn hằng ngày và thêm khả năng OCR toàn bộ thư mục trong một thao tác.

Động cơ trên thiết bị hỗ trợ chữ Latin (tiếng Anh, Pháp, Đức, Tây Ban Nha, Bồ Đào Nha, Ý và các ngôn ngữ khác), tiếng Trung (giản thể và phồn thể), tiếng Nhật, tiếng Hàn và hầu hết các chữ viết châu Âu. Các trang hỗn hợp kịch bản được xử lý trong một lượt nhận dạng duy nhất.
