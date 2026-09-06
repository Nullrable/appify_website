---
title: "Phát hiện trùng lặp chính xác"
description: "CleanPhoto nhóm các ảnh cùng kích thước chụp trong cùng một giây như thế nào, và vì sao quy tắc cục bộ này tìm ra bản sao thật mà không nhầm lẫn."
date: 2026-09-06
lang: vi
slug: duplicates
---

## Phát hiện trùng lặp chính xác

Ảnh trùng lặp hoàn toàn là loại ảnh dễ xóa nhất nhưng cũng dễ bị bỏ sót nhất. CleanPhoto tìm ra chúng bằng một quy tắc đơn giản và minh bạch, chạy hoàn toàn trên thiết bị của bạn: các ảnh có kích thước pixel giống hệt nhau và được chụp trong đúng cùng một giây sẽ thuộc cùng một nhóm.

### Cách nhóm ảnh

Khi quét, CleanPhoto duyệt qua thư viện ảnh của bạn và tạo một khóa cho mỗi ảnh dựa trên chiều rộng, chiều cao và giây chụp. Các ảnh có cùng khóa được đặt vào một nhóm. Ảnh bị lưu hai lần — do lưu lại, nhập từ thiết bị khác hoặc xung đột đồng bộ đám mây — mang cùng kích thước và dấu thời gian với bản gốc, nên cả hai bản sao đều rơi vào cùng một nhóm và không có ảnh nào khác lẫn vào.

### Xem lại nhóm

Mỗi nhóm hiển thị tất cả các bản sao cùng kích thước file, giúp bạn nhận ra ngay bản sao nào là bản gốc chất lượng cao hơn. Đánh dấu các bản sao muốn xóa, xác nhận và ảnh sẽ bị xóa qua thư viện ảnh hệ thống. Những ảnh bạn giữ lại không bị ảnh hưởng.

### Tại sao dùng kích thước + thời gian thay vì phân tích nội dung

Khớp theo kích thước và giây chụp nhanh, dự đoán được và bảo vệ quyền riêng tư. Nó không tạo ra kết quả sai giữa các ảnh khác nhau, vì hai ảnh khác nhau vừa trùng kích thước vừa được lưu trong cùng một giây là cực hiếm. Và vì không cần phân tích hay so sánh nội dung ảnh, quá trình quét không cần đọc dữ liệu pixel — nó chỉ dựa vào metadata của thư viện.

### Mọi thứ đều trên thiết bị của bạn

Việc phát hiện trùng lặp chạy cục bộ trên điện thoại của bạn. Không ảnh, thumbnail hay metadata nào rời khỏi thiết bị, và không cần tài khoản.
