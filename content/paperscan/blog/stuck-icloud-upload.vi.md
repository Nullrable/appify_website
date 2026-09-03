---
title: "Khắc phục sự cố tải lên iCloud bị treo"
description: "Khắc phục sự cố tải lên iCloud bị treo"
date: 2026-09-02
lang: vi
slug: stuck-icloud-upload
---

Khi đồng bộ iCloud trong Paper Scan có vẻ bị treo(thường được hiển thị dưới dạng số lượng tải lên một phần không thay đổi trong vài phút), nguyên nhân gần như luôn là một trong bốn điều kiện cấu hình hoặc hệ thống ở phía iOS. Danh sách kiểm tra sau đây đề cập đến chúng theo thứ tự tần suất.

### 1. iCloud Drive không được bật cho Paper Scan

Hai nút chuyển độc lập phải được bật. Bất kỳ nút nào tắt sẽ khiến Paper Scan xếp hàng đợi các lần tải lên mà iOS lặng lẽ từ chối, để thanh trạng thái dừng ở số lượng ban đầu.

- **Cài đặt iOS → [tên của bạn] → iCloud → Hiển thị tất cả → Paper Scan** phải được bật.
- **Cài đặt iOS → Paper Scan → iCloud Drive** phải được bật.

Nút chuyển thứ hai là nút thường bị bỏ lỡ nhất. Hai cài đặt có liên quan nhưng khác biệt; cả hai phải được bật để tải lên tiếp tục.

### 2. iOS đang điều chỉnh đồng bộ nền

iOS giới hạn hoạt động iCloud nền trong hai điều kiện: Chế độ Năng lượng thấp được bật(tắt nó trong Cài đặt iOS → Pin), hoặc bộ nhớ iPhone gần đầy(iOS yêu cầu khoảng 500 MB dung lượng trống để tải lên nền tiếp tục; giải phóng dung lượng trong Cài đặt iOS → Chung → Bộ nhớ iPhone). iOS không hiển thị cảnh báo "hết bộ nhớ" trong ngữ cảnh này; tải lên chỉ đơn giản là dừng lại.

### 3. Hàng đợi tải lên lớn

Paper Scan xử lý tải lên tuần tự. Nếu một lượng lớn tồn đọng đã tích lũy, ví dụ sau một khoảng thời gian ngoại tuyến, hàng đợi cần thời gian để xóa. Theo ước tính sơ bộ, mong đợi khoảng 50 trang mỗi giờ trên Wi-Fi gia đình tiêu chuẩn, nhanh hơn trên kết nối mạnh và chậm hơn trên cellular.

Để xác định xem hàng đợi đang "chậm nhưng tiến triển" hay "thực sự bị treo", hãy để ứng dụng trong nền từ 30 đến 60 phút và kiểm tra thanh trạng thái. Nếu số lượng đã tiến triển, đồng bộ đang hoạt động. Nếu số lượng không thay đổi, một trong các điều kiện khác được áp dụng.

### 4. Trạng thái tài khoản iCloud bị hỏng

Điều này hiếm khi xảy ra nhưng có thể xảy ra sau các thay đổi ID Apple, chu kỳ đăng xuất và đăng nhập, hoặc khôi phục từ bản sao lưu. Triệu chứng: thanh trạng thái bị kẹt và không có bước nào ở trên đã giãi quyết nó.

Hai bước leo thang: tắt và bật iCloud Drive(Cài đặt iOS → [tên của bạn] → iCloud → tắt iCloud Drive, đợi 30 giây, bật lại), hoặc đăng xuất khỏi iCloud và đăng nhập lại(Cài đặt iOS → [tên của bạn] → Đăng xuất, sau đó đăng nhập lại). Hành động thứ hai mạnh mẽ nhưng đặt lại kết nối iCloud từ đầu. Nếu hàng đợi vẫn bị kẹt ở cùng số lượng sau cả hai bước, vấn đề có thể ở phía iCloud: trang trạng thái hệ thống của Apple tại support.apple.com cho biết liệu iCloud Drive hiện đang gặp sự cố hay không.

### Khi nào leo thang lên hỗ trợ

Trong hầu hết các trường hợp, nguyên nhân ở phía iOS. Paper Scan có thể bị lỗi khi số thanh trạng thái không thay đổi trong hơn một giờ, các ứng dụng sử dụng iCloud khác trên cùng thiết bị đang đồng bộ bình thường, các bước cấu hình ở trên đã được áp dụng và ứng dụng đã được khởi động lại, và các tài liệu tương tự được đánh dấu là đang chờ tải lên qua nhiều lần khởi động ứng dụng mà không có tiến triển. Khi các điều kiện này được áp dụng, hãy gửi báo cáo lỗi thông qua **Cài đặt → Gửi phản hồi** trong ứng dụng. Báo cáo tự động bao gồm nhật ký hoạt động đồng bộ gần đây, loại bỏ nhu cầu mô tả chi tiết vấn đề.

Một số tính năng trong Paper Scan tồn tại đặc biệt để giải quyết các tình huống tải lên bị treo: thanh trạng thái hiển thị cả số lượng hiện tại và dấu thời gian hoạt động cuối cùng riêng biệt, tài liệu không tải lên được ba lần liên tiếp được đánh dấu bằng biểu tượng cảnh báo, và tải lên nền tạm dừng gọn gàng khi Chế độ Năng lượng thấp được bật và tiếp tục khi bị tắt thay vì thả các mục đang chờ trong im lặng.
