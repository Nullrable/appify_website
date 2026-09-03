---
title: "Mô hình dịch: tải một lần, giữ mãi mãi"
description: "Quản lý 19 mô hình ngôn ngữ ML Kit từ một trang dành riêng. Tải một lần, xóa để lấy lại dung lượng; mô hình tồn tại khi ngoại tuyến."
date: 2026-09-03
lang: vi
slug: model-manager
icon: download
---

Mỗi cặp ngôn ngữ yêu cầu các mô hình nguồn và đích phải có trên thiết bị trước khi bản dịch có thể chạy. Các mô hình được tải xuống một lần, tồn tại qua các lần khởi động lại ứng dụng và được sử dụng lại cho mỗi bản dịch của cặp đó. Trang tải mô hình liệt kê tất cả 19 ngôn ngữ được hỗ trợ với trạng thái tải xuống của chúng và cho phép bạn tải xuống hoặc xóa từng cái.

## Tại sao có một trang dành riêng

ML Kit không tự động tải mô hình — mỗi cặp ngôn ngữ yêu cầu một lần tải xuống rõ ràng nguồn và đích của nó. Trang tải mô hình phơi bày trạng thái này và cho phép người dùng quản lý mà không cần đào sâu vào bộ nhớ của nền tảng.

Đối với hầu hết người dùng, quy trình làm việc là vô hình: chọn ngôn ngữ nguồn và đích, ứng dụng tải xuống cả hai mô hình theo yêu cầu lần đầu tiên bạn dịch, và các mô hình vẫn ở trên thiết bị cho các lần chạy ti tiế theo. Trang dành riêng dành cho người dùng muốn tải trước cho chuyến đi ngoại tuyến, xóa các ngôn ngữ họ không còn sử dụng, hoặc xem những gì đang tiêu tốn dung lượng.

## Trạng thái mô hình cho mỗi ngôn ngữ

- **Chưa tải xuống.** Nút Tải xuống được hiển thị. Nhấn để bắt đầu tải xuống.
- **Đang tải xuống.** Một spinner không xác định được hiển thị. ML Kit không phơi bày callback tiến trình, chỉ hoàn thành; spinner giải quyết thành Đã tải xuống hoặc Thất bại.
- **Đã tải xuống.** Một huy hiệu được hiển thị với nút Xóa. Nhấn để xóa mô hình và lấy lại dung lượng.
- **Thất bại.** Nút thử lại thay thế Tải xuống. Nguyên nhân phổ biến: không có mạng, di động bị chặn, ít dung lượng đĩa. Thử lại sau khi giải quyết nguyên nhân cơ bản.

## Hàng đợi tải xuống tuần tự

Nhiều yêu cầu tải xuống liên tiếp nhanh được xếp hàng, không song song. Plugin gốc của iOS không xử lý các cuộc gọi `manageModel` đồng thời một cách sạch sẽ: yêu cầu thứ hai hủy yêu cầu thứ nh. Ứng dụng tuần tự hóa các lượt tải xuống thông qua một Future duy nhất được xích lại để các yêu cầu đồng thời được giải quyết lần lượt. UI chỉ hiển thị lượt tải xuống đang hoạt động trong trạng thái không xác định; các yêu cầu trong hàng đợi đợi lượt của chúng.

## Thời gian chờ và thăm dò tải xuống

Nếu một callback tải xuống bị bỏ lỡ (quan sát thấy trên iOS trong điều kiện mạng yếu), Future tải xuống có thể bị treo. Ứng dụng tự bảo vệ mình bằng thời gian chờ 30 giây; nếu thời gian chờ kích hoạt, ứng dụng thăm dò đĩa trực tiếp qua `isModelDownloaded` để xác nhận mô hình đã thực sự hạ cánh trước khi báo cáo thành công hay thất bại.

## Chi phí lưu trữ

Mỗi mô hình ML Kit chiếm khoảng 10–50 MB trên đĩa. Tải xuống cả 19 ngôn ngữ tiêu tốn khoảng 300–600 MB. Các mô hình cho nguồn và đích của cùng một bản dịch là riêng biệt; một mô hình có thể phục vụ làm nguồn hoặc đích tùy thuộc vào vai trò người dùng đã chọn.

Xóa mô hình sẽ lấy lại dung lượng. Không có dọn dẹp tự động. Gỡ cài đặt ứng dụng sẽ xóa tất cả các mô hình đã tải xuống như một phần của gỡ cài đặt nền tảng.
