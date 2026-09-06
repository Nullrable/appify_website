---
title: "CleanPhoto quét thư viện của bạn mà không tải lên một tấm ảnh nào như thế nào"
description: "Nhìn vào bên trong ba bộ phát hiện chạy trên thiết bị — trùng lặp chính xác, ảnh tương tự và ảnh chụp màn hình — cùng các quy tắc đơn giản của chúng, để bạn biết chính xác điều gì xảy ra khi nhấn Quét."
date: 2026-09-06
lang: vi
slug: how-scan-works
---

## CleanPhoto quét thư viện của bạn mà không tải lên một tấm ảnh nào như thế nào

Hầu hết các ứng dụng dọn ảnh đều yêu cầu bạn tin tưởng. CleanPhoto chọn cách tạo niềm tin bằng sự minh bạch: mọi lượt quét đều chạy trên thiết bị của bạn, chỉ dùng metadata của thư viện, và tuân theo các quy tắc đơn giản đến mức vài đoạn văn là giải thích xong. Đây là chính xác những gì xảy ra khi bạn nhấn Quét.

### Ba bộ phát hiện, ba câu hỏi

CleanPhoto có ba lượt quét, mỗi cái trả lời một câu hỏi khác nhau. Trùng lặp chính xác hỏi "ảnh này có bị lưu hai lần không?" Ảnh tương tự hỏi "đây có phải là chụp liên tiếp hay chụp lại nhanh không?" Ảnh chụp màn hình hỏi "ảnh này có chỉ là tạm thời không?" Bạn có thể chạy theo bất kỳ thứ tự nào, và mỗi kết quả đều hiển thị thành các nhóm để bạn xem lại.

### Quy tắc một: cùng kích thước, cùng giây

Bộ phát hiện trùng lặp tạo một khóa cho mỗi ảnh từ chiều rộng, chiều cao và giây chụp. Các ảnh cùng khóa nằm trong một nhóm. Ảnh được lưu lại, nhập về hoặc sinh ra từ xung đột đồng bộ đám mây giữ nguyên kích thước và dấu thời gian của bản gốc, nên cả hai bản sao gặp nhau trong cùng một nhóm. Hai ảnh khác nhau trùng kích thước trong cùng một giây là cực hiếm — vì vậy quy tắc này tìm ra bản sao thật mà không nhầm lẫn.

### Quy tắc hai: trong vòng mười giây

Bộ phát hiện ảnh tương tự xếp thư viện theo thời gian chụp rồi đi dọc dòng thời gian. Chừng nào mỗi ảnh được chụp trong vòng 10 giây sau ảnh trước, nó thuộc cùng nhóm; ngay khi khoảng cách vượt 10 giây, chuỗi đóng lại. Điều này khớp với cách chụp liên tiếp và chụp lại diễn ra ngoài đời — một loạt nhanh, rồi tạm dừng, rồi cảnh khác. Nhóm chỉ có một ảnh sẽ bị bỏ.

### Quy tắc ba: album, tiêu đề, đường dẫn

Bộ phát hiện ảnh chụp màn hình hoạt động khác nhau trên từng nền tảng. Trên iOS nó đọc trực tiếp album Screenshots của hệ thống. Trên Android, nơi lưu trữ khác nhau tùy nhà sản xuất, nó kiểm tra tên album trước; nếu không có album ảnh chụp màn hình, nó xem tiêu đề và đường dẫn file của từng ảnh để tìm các mẫu đặt tên mà thiết bị dùng. Kết quả được nhóm theo ngày, mới nhất trước.

### Dung lượng file, tải sẵn trước khi bạn xem lại

Trước khi bất kỳ màn hình xem nào mở ra, CleanPhoto đã tải sẵn dung lượng file của mỗi ảnh. Trong một nhóm, file lớn nhất gần như luôn là bản giữ nhiều chi tiết nhất, nên các mục được xếp theo dung lượng và ứng viên tốt nhất nằm trên cùng. Một tín hiệu duy nhất đó biến "trong tám tấm này tấm nào tốt nhất?" thành "tấm này có được không?"

### Những điều không bao giờ xảy ra

Không lượt quét nào đọc nội dung pixel để phân tích, không ảnh hay thumbnail nào rời khỏi thiết bị, và không cần tài khoản. Việc xóa chỉ xảy ra sau khi bạn xác nhận rõ ràng và thực hiện qua thư viện ảnh hệ thống — ứng dụng không bao giờ tự ý xóa bất cứ thứ gì. Internet chỉ dùng cho hai việc: hiển thị quảng cáo ở bản miễn phí và quản lý đăng ký Pro.
