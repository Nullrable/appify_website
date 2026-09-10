---
title: "Khi nào nén ảnh có ích, và khi nào thì không"
description: "Nén là lựa chọn đúng với một số ảnh và sai với số khác. Một hướng dẫn ngắn để chọn file nào nên thu nhỏ và file nào nên giữ nguyên dung lượng gốc."
date: 2026-09-10
lang: vi
slug: compression-tradeoffs
---

## Khi nào nén ảnh có ích, và khi nào thì không

Nén trông giống dung lượng miễn phí — thu nhỏ một bức ảnh, lấy lại vài megabyte, không mất gì nhìn thấy được. Thực tế tinh tế hơn. Một số ảnh thu nhỏ gọn gàng xuống còn một phần nhỏ dung lượng mà không có khác biệt nào bạn nhìn ra; số khác mất đi chi tiết có ý nghĩa ngay từ khoảnh khắc bạn nén chúng. Biết đâu là đâu là khác biệt giữa dọn thư viện và âm thầm làm giảm chất lượng nó.

### Nén thực sự làm gì

Nén thu nhỏ một file bằng cách mô tả cùng các pixel đó với ít thông tin hơn. Ảnh có vùng mượt — bầu trời, tường, hậu cảnh mờ — nén rất mạnh vì phần lớn ảnh là đồng nhất. Ảnh có chi tiết nhỏ — lá, lông, vải có hoa văn, đám đông ở xa — nén kém gọn hơn vì mỗi pixel mang thông tin không thể tóm gọn lại.

### Ứng viên tốt cho việc nén

Ảnh chụp màn hình là thắng lợi rõ ràng. Chúng thường là file lớn (chụp màn hình độ phân giải cao) đầy vùng phẳng (giao diện, màu đặc, chữ) nén xuống còn một phần nhỏ dung lượng gốc mà không mất gì nhìn thấy được. Tài liệu chụp một lần để giữ tham khảo, ảnh panorama chụp để nhớ chứ không in lại, và bất kỳ ảnh nào bạn giữ nhưng hiếm khi phóng to cũng nén tốt.

### Ảnh nên giữ nguyên dung lượng gốc

Bất cứ thứ gì bạn định in, sẽ crop mạnh về sau, hoặc phóng to để xem chi tiết thì nên giữ ở dung lượng gốc. Ảnh chân dung mà ánh sáng trong mắt quan trọng, ảnh phong cảnh bạn sẽ xem trên màn hình lớn, và ảnh sản phẩm cần giữ sắc nét đều không phải ứng viên phù hợp. Nén là sự đánh đổi, và đây là những ảnh mà sự đánh đổi đi sai hướng.

### Chọn mục tiêu trước khi bắt đầu

Màn hình nén hữu ích nhất cho bạn chọn mục tiêu thay vì phải đoán. Một cài đặt cân bằng cho mục đích "giữ, không phóng to" thường là đủ cho ảnh hằng ngày; cài đặt nhỏ hơn phù hợp cho ảnh chụp màn hình và ảnh tham khảo; cài đặt gần giữ chất lượng gốc phù hợp cho vài ảnh cần giữ nguyên. Không có mục tiêu, bạn có xu hướng nén quá tay với ảnh muốn giữ và nén chưa đủ với ảnh ứng viên.

### Chỉ nén lại khi có ích

Một bức ảnh đã nhỏ thì thường nên để yên. Nén một ảnh 400 KB xuống 250 KB tiết kiệm chẳng bao nhiêu mà còn có thể mất đi chi tiết nhìn thấy được. Nhiệm vụ của màn hình nén là hiển thị mức tiết kiệm trước khi bạn xác nhận — khi file dự kiến nhỏ hơn đáng kể và ảnh đúng loại, hãy nén; khi không, hãy bỏ qua.

### Xử lý cục bộ, ảnh gốc giữ đến khi bạn xác nhận

Nén chạy trên thiết bị bạn bằng xử lý ảnh cục bộ. File mới được ghi vào thư viện, và ảnh gốc chỉ bị thay thế sau khi bạn xác nhận. Cho đến lúc đó, cả hai phiên bản đều sống trong thư viện, nên không có nguy cơ vô tình mất ảnh gốc.
