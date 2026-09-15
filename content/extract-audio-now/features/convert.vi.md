---
title: "Chuyển đổi định dạng video - mp4, mov, m4v, mkv, avi, flv, ts, mpg, mpeg, 3gp, 3g2"
description: "Chuyển bất kỳ video nào sang mp4, mov, m4v, mkv, avi, flv, ts, mpg, mpeg, 3gp hoặc 3g2. Chọn nhiều, xử lý tuần tự, tệp gốc không động vào, tệp mới chỉ ghi khi đã xác nhận."
date: 2026-09-15
lang: vi
slug: convert
---

## Chuyển đổi định dạng video

Thiết bị, nền tảng và ứng dụng khác nhau nhận các vùng chứa video khác nhau. Ném video vào trình phát không nhận vùng chứa đó, chín lần trên mười sẽ báo lỗi. Chuyển đổi định dạng làm một việc đơn giản: mã hóa lại video thành dạng thiết bị đích có thể chạy. Công cụ hỗ trợ **11 định dạng đầu ra**: **mp4, mov, m4v, mkv, avi, flv, ts, mpg, mpeg, 3gp, 3g2**.

### Vùng chứa là gì

Tệp video thực ra là một "chiếc hộp" chứa stream video, stream âm thanh, phụ đề. Hộp (vùng chứa) có nhiều kích cỡ khác nhau: mp4 phổ quát, mov của Apple, mkv chứa được nhiều track âm thanh, ts cho phát sóng, 3gp là định dạng điện thoại cũ. Khi đổi hộp từ loại này sang loại khác, nội dung được mã hóa lại - video thống nhất dùng H.264, âm thanh thống nhất AAC, chỉ mpg và mpeg là ngoại lệ (dùng MPEG-2 phần mềm + MP2, vì H.264 không nhét vừa hai vùng chứa cũ này).

### Cách dùng

Chọn một hoặc nhiều video. Sau khi chọn, một hàng chip định dạng hiện lên trên - chọn đích bạn muốn. Chọn xong bấm bắt đầu, xử lý tuần tự, cái này xong rồi đến cái tiếp theo. Video gốc không động vào; bạn có thể dừng bất kỳ lúc nào trước khi video mới ghi xuống đĩa.

### Ai cần nó

- Điện thoại Android cũ chỉ nhận 3gp / 3g2 — chuyển video gia đình cho chúng
- Phần mềm dựng chỉ nhận mov — chuyển mp4 quay bằng điện thoại sang mov để nhập
- Nền tảng trực tuyến yêu cầu vùng chứa cụ thể — chuyển hàng loạt trước khi tải lên
- Đính kèm email giới hạn kích thước — chuyển sang vùng chứa nhỏ hơn

### Thời gian xử lý phụ thuộc độ dài, không phải vùng chứa

Chuyển đổi mã hóa lại video và âm thanh, thời gian chủ yếu do độ dài quyết định. Video ngắn mất vài giây, video 4K một phút có thể mất một hai phút. Khác biệt thực tế giữa các vùng chứa (H.264 ↔ MPEG-2 chẳng hạn) lớn hơn bạn tưởng - cùng một video chuyển sang mp4 và mpeg, sau có thể chậm hơn vài lần, vì MPEG-2 là mã hóa phần mềm. Nếu bạn chỉ quan tâm "đổi vỏ mà giữ nguyên hình," dùng Nén - Nén có thể chỉ chỉnh bitrate mà không động vùng chứa.

### Hình ảnh có thay đổi không

Có, vì video được mã hóa lại. Từ nguồn H.264 sang mp4 (mp4 mặc định H.264 + AAC), lý thuyết hình ảnh gần nguyên bản; nhưng bitrate và preset của H.264 sẽ được quyết lại, hoàn toàn lossless là không thể. Nếu cần lossless tuyệt đối, dùng Clip - Clip dùng stream copy, khung hình video gốc được chuyển nguyên byte.
