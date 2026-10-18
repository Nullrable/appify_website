---
title: "Chuyển đổi định dạng âm thanh - MP3, WAV, M4A, AAC, FLAC, OGG, Opus, AIFF, AMR, CAF sang MP3 / WAV / FLAC / OGG"
description: "Chuyển đổi qua lại giữa MP3, WAV, M4A, AAC, FLAC, OGG, Opus, AIFF, AMR, CAF, xuất ra MP3, WAV, FLAC hoặc OGG với bitrate tùy chọn. Bản gốc giữ nguyên đến khi xác nhận xuất."
date: 2026-10-18
lang: vi
slug: convert
---

## Chuyển đổi định dạng âm thanh

Bản ghi rơi vào định dạng không đúng — cần MP3 thì lại có FLAC, cần WAV master thì chỉ có M4A. Bộ chuyển đổi ghi lại tệp theo đúng container và bitrate bạn chọn, mà không động đến bản gốc.

## Định dạng đầu vào (10)

Bộ chuyển đổi nhận một trong 10 định dạng âm thanh đầu vào sau. Dù là nguồn lossless, lossy, hay trích từ video, quy trình đều giống nhau:

| Định dạng | Khi nào dùng |
|---|---|
| **MP3** | Máy nghe nhạc phổ thông, hệ thống trên ô tô, tệp đính kèm email. Lựa chọn mặc định. |
| **WAV** | Master không nén, lý tưởng để mix, lưu trữ hoặc biên tập lại. |
| **M4A** | Phiên bản container của AAC, phổ biến trong hệ sinh thái Apple. |
| **AAC** | Mặc định của hệ sinh thái Apple, chi tiết tốt ở dung lượng nhỏ. |
| **FLAC** | Nén không mất dữ liệu, khoảng một nửa dung lượng WAV. |
| **OGG** | Container mã nguồn mở, được một số trình phát chuyên nghiệp ưa chuộng. |
| **Opus** | Codec độ trễ thấp hiện đại, phổ biến trong họp thoại và podcast. |
| **AIFF** | Mặc định của hệ sinh thái macOS / Logic, không nén. |
| **AMR** | Định dạng ghi âm cuộc gọi di động đời đầu, tiêu chuẩn 3GPP. |
| **CAF** | Container Apple Core Audio, lý tưởng để xử lý hậu kỳ trên iOS. |

## Định dạng đầu ra (4)

Kết quả xuất chỉ có thể rơi vào một trong 4 container sau:

| Định dạng | Khi nào dùng |
|---|---|
| **MP3** | Mặc định phổ thông, hầu như mọi thiết bị và trình phát đều nhận. |
| **WAV** | Master không nén, lý tưởng để biên tập hoặc lưu trữ. |
| **FLAC** | Nén không mất dữ liệu, khoảng một nửa dung lượng WAV. |
| **OGG** | Container mã nguồn mở, được một số thiết bị chuyên nghiệp ưa chuộng. |

## Chọn bitrate

Với MP3 và OGG, hãy chọn bitrate trước khi xuất. Một số mốc phổ biến:

- **128 kbps** - giọng nói, podcast, khi dung lượng quan trọng hơn chi tiết
- **192 kbps** - lựa chọn giữa cho việc nghe nhạc hằng ngày
- **256 kbps** - gần như không phân biệt được với lossless với đa số người nghe
- **320 kbps** - trần của MP3, dành cho khoảnh khắc từng kilobit đều có ý nghĩa

WAV và FLAC là bit-perfect, đầu ra khớp đầu vào ở cấp byte.

## Xử lý hàng loạt

Thêm vào bao nhiêu tệp cũng được. Hàng đợi chạy theo thứ tự, và một lựa chọn bitrate/định dạng áp dụng cho cả lô. Hàng đợi dài vẫn chạy nền; bạn có thể đóng ứng dụng rồi quay lại kiểm tra tiến độ.

## Bản gốc được giữ nguyên

Tệp nguồn không bao giờ bị ghi đè. Tệp mới trước hết được ghi vào sandbox của ứng dụng, đặt tên theo tệp nguồn kèm đuôi mới. Chỉ sau khi bạn xác nhận kết quả xuất, ứng dụng mới gợi ý "Lưu vào Tệp" — bản gốc vẫn ở nguyên chỗ cũ.

## Hoàn toàn tại thiết bị

Giải mã, mã hóa lại và ghi tệp đều chạy trên iPhone. Không tải lên, không đi qua máy chủ, không chờ vòng mạng — kể cả chế độ máy bay vẫn chạy ổn.
