---
title: "Đổi tốc độ video - Thanh trượt liên tục từ 0.25x đến 4x"
description: "Một thanh trượt, từ 0.25x chuyển động chậm đến 4x tua nhanh - dùng cho hướng dẫn slow-mo hoặc demo nhanh. Xuất video mới, tệp gốc không động vào."
date: 2026-09-15
lang: vi
slug: speed
---

## Đổi tốc độ video

Nhịp không đúng, câu chuyện lệch đi. Hướng dẫn nói quá nhanh, khán giả không theo kịp; demo quá chậm, người xem buồn ngủ. Công cụ Tốc độ cho bạn một thanh trượt, liên tục từ 0.25x đến 4x — kéo từ từ đến nhịp bạn muốn.

### Chuyển động chậm

Từ 0.25x đến 1x, hợp các cảnh cần giải thích chậm. Trong bài giảng trực tuyến, demo một động tác tay, chậm đến 0.5x người xem mới thấy được điểm then chốt. Trong video thể thao, khoảnh khắc đẹp chậm đến 0.25x, chi tiết hiện ra từng chút.

### Tua nhanh

Từ 1x đến 4x, hợp nén thời gian chờ hoặc bỏ qua đoạn không liên quan. Đoạn timelapse mười phút, tăng tốc lên 4x trông có lực hơn. Phần nhàm chán trong demo quy trình lướt qua nhanh.

### Cách dùng

Chọn một video, một thanh trượt dạng chấm tròn hiện ra. Kéo đến vị trí bạn muốn — thanh trượt hiện hệ số hiện tại. Thấy chưa đúng, thả ra kéo lại. Xác nhận để bắt đầu xuất, video gốc không động vào.

### Âm thanh thì sao

Đổi tốc độ thay đổi cả hình và âm thanh cùng lúc. Hình chậm thì âm thanh cũng chậm theo, bạn nghe cảm giác nói ì ạch (cao độ cũng hạ xuống); hình nhanh thì âm thanh cũng nhanh, nghe có cảm giác bị nén nhanh và cao độ dồn lên. Đây là hành vi chuẩn của bộ lọc atempo của ffmpeg: video và âm thanh đổi tốc độ đồng bộ, cao độ theo hệ số. Nếu bạn chỉ muốn đổi hình mà giữ nguyên âm thanh, dùng Tốc độ tạo video mới, rồi dùng Trích xuất Âm thanh trên video gốc để lưu bản sao track âm thanh gốc, sau đó ghép trong app bên thứ ba.
