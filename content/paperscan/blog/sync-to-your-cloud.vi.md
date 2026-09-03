---
title: "Đồng bộ đám mây: phản chiếu thư viện của bạn vào Drive hoặc iCloud của riêng bạn"
description: "Đồng bộ đám mây: phản chiếu thư viện của bạn vào Drive hoặc iCloud của riêng bạn"
date: 2026-09-02
lang: vi
slug: sync-to-your-cloud
---

Đồng bộ đám mây của Paper Scan phản chiếu thư viện tài liệu vào một thư mục Google Drive hoặc iCloud do người dùng kiểm soát. Điện thoại là vị trí chính cho tất cả các lần quét; đám mây đóng vai trò là bản sao lưu mà người dùng sở hữu và có thể truy cập độc lập. Đồng bộ đám mây là một tính năng Pro.

### Tính năng này làm gì

Khi được bật, đồng bộ đám mây sẽ tải các lần quét lên bộ nhớ đám mây của riêng người dùng khi chúng được lưu. Các lần quét mới được tải lên trong nền. Các lần quét hiện có được tải lên trong lần chạy đồng bộ ban đầu.

Các byte di chuyển trực tiếp giữa điện thoại và nhà cung cấp đám mây. Paper Scan không vận hành máy chủ chuyển tiếp và không có bản sao của các lần quét được giữ trên cơ sở hạ tầng của Paper Scan.

### Các trường hợp sử dụng

- **Thay thế thiết bị.** Chuyển sang điện thoại mới, cài đặt Paper Scan, đăng nhập vào nhà cung cấp đám mây và khôi phục thư viện từ bản sao đám mây. Không cần truyền qua cáp hoặc công cụ sao lưu của bên thứ ba.
- **Mất thiết bị.** Nếu điện thoại bị mất hoặc hỏng, các lần quét được bảo quản trong bản sao đám mây và thư viện có thể được khôi phục trên thiết bị thay thế.
- **Duyệt trên nhiều thiết bị.** Mở thư mục đám mây trong bất kỳ trình duyệt nào để xem các lần quét được tổ chức theo cấu trúc thư mục được thiết lập trên điện thoại. Các tệp có thể được chia sẻ, đính kèm vào email hoặc chuyển sang các ứng dụng khác trực tiếp từ thư mục đám mây.
- **Sao lưu ngoài trang.** Duy trì một bản sao độc lập của thư viện tài liệu để dự phòng.

### Cấu hình

1. Mở **Settings → Cloud** trong Paper Scan.
2. Chọn Google Drive hoặc iCloud. Nhà cung cấp có thể được thay đổi sau; cả hai nhà cung cấp đều sử dụng cùng một công cụ đồng bộ.
3. Đăng nhập vào tài khoản đám mây. Paper Scan yêu cầu các quyền tối thiểu cần thiết: chỉ truy cập vào thư mục của riêng nó, không phải vào toàn bộ tài khoản Drive hoặc iCloud.
4. Chọn thư mục cục bộ nào để phản chiếu. Toàn bộ thư viện được phản chiếu theo mặc định; các thư mục cụ thể có thể bị loại trừ nếu một số lần quét nhất định chỉ nên ở trên thiết bị.
5. Nhấn **Start Sync**. Lần chạy đầu tiên tải lên thư viện hiện có; các lần quét tiếp theo được tải lên tự động khi chúng được lưu.

Để tắt đồng bộ đám mây, hãy tắt tính năng này trong cùng màn hình Cài đặt. Paper Scan không xóa các tệp khỏi đám mây khi đồng bộ bị tắt. Bản sao đám mây vẫn còn cho đến khi người dùng chọn xóa nó.

### Phạm vi quyền

Paper Scan yêu cầu phạm vi quyền cần thiết để đọc và ghi thư mục của riêng nó trong Google Drive hoặc iCloud. Nó không nhận được khả năng hiển thị đối với các tệp khác trong bộ nhớ đám mây của người dùng, cũng như không nhận được mã thông báo cho phép truy cập vào các tệp đó. Để xác minh, hãy xem danh sách các ứng dụng được kết nối trong cài đặt tài khoản Google hoặc Apple: Paper Scan xuất hiện với quyền truy cập được giới hạn ở thư mục ứng dụng được chỉ định của nó, không phải cho toàn bộ tài khoản.

### Khôi phục

Khôi phục là một hoạt động riêng biệt với đồng bộ. Nó được bắt đầu thủ công khi người dùng muốn xây dựng lại thư viện cục bộ từ bản sao đám mây.

1. Cài đặt Paper Scan trên thiết bị mới và đăng nhập.
2. Mở **Settings → Cloud → Restore**.
3. Chọn nhà cung cấp và đích.
4. Đợi quá trình khôi phục hoàn tất. Thư viện vài trăm lần quét thường hoàn thành trong vài phút; thư viện vài nghìn mất nhiều thời gian hơn. Thanh tiến trình phản ánh tiến trình thực tế.

Khôi phục là hoạt động duy nhất trong đó ứng dụng truy xuất các tệp từ đám mây. Nó không chạy tự động hoặc trong nền.

### Chuyển đổi nhà cung cấp và tắt đồng bộ

Bạn có thể chuyển đổi giữa Google Drive và iCloud bằng cách tắt nhà cung cấp hiện tại, bật nhà cung cấp mới và đăng nhập: lần đồng bộ tiếp theo bắt đầu mới ở phía mới. Các tệp trước đây được phản chiếu tới nhà cung cấp cũ vẫn ở đó cho đến khi người dùng xóa chúng. Tắt đồng bộ sẽ dừng tải lên mới nhưng không xóa các tệp đã tải lên; thư viện cục bộ không bị ảnh hưởng. Tắt và bật lại đồng bộ sẽ tiếp tục từ nơi nó dừng lại và các lần quét được thêm vào trong thời gian bị tắt sẽ được tải lên trong lần chạy đồng bộ tiếp theo.

Paper Scan hoạt động đầy đủ mà không cần đồng bộ đám mây. Quét, OCR, thư mục, thẻ và xuất PDF đều hoạt động giống nhau có hoặc không có đồng bộ được bật.
