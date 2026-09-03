---
title: "Tự động phát hiện ngôn ngữ: cách ứng dụng chọn ngôn ngữ nguồn"
description: "Khi bộ chọn nguồn được đặt thành Tự động phát hiện, ứng dụng đoán ngôn ngữ nguồn cho mỗi bản dịch. Đây là cách thực hiện phỏng đoán."
date: 2026-09-03
lang: vi
slug: auto-detect-language
---

## Tự động phát hiện ngôn ngữ: cách ứng dụng chọn ngôn ngữ nguồn

Tự động phát hiện là tùy chọn đầu tiên trong bộ chọn ngôn ngữ nguồn. Việc chọn nó không có nghĩa là ứng dụng không có ý kiến về nguồn — nó có nghĩa là ứng dụng sẽ chọn một ngôn ngữ nguồn ML Kit cụ thể cho mỗi bản dịch, sử dụng gợi ý ngôn ngữ theo khối OCR (đối với ảnh) hoặc phương pháp heuristic bộ ký tự ở lớp Dart (đối với văn bản).

    ## Tại sao cho mỗi bản dịch

    Trình dịch trên thiết bị của ML Kit yêu cầu một ngôn ngữ nguồn cụ thể phải được tải xuống trước khi bản dịch có thể chạy. Tự động phát hiện không thể có nghĩa là «dịch từ bất kỳ ngôn ngữ nào»; nó phải giải quyết thành một trong 19 ngôn ngữ được hỗ trợ cho mỗi bản dịch. Ứng dụng thực hiện việc giải quyết này tự động.

    ## Cách nó hoạt động cho ảnh

    Đối với các lần chụp từ camera, công cụ OCR phát ra gợi ý ngôn ngữ theo khối cho mỗi khối được nhận dạng. Các gợi ý được tổng hợp trên trang; ngôn ngữ đa số trở thành ngôn ngữ nguồn ML Kit cho bản dịch đó.

    Các trang đơn ngữ được giải quyết gọn gàng: một trang phụ đề tiếng Hàn được giải quyết thành tiếng Hàn, một trang văn bản tiếng Pháp được giải quyết thành tiếng Pháp. Các trang có tập lệnh hỗn hợp quay về giá trị mặc định nếu không có ngôn ngữ nào chiếm ưu thế.

    Bản dịch theo khối sử dụng các gợi ý này chi tiết hơn. Một trang có tiêu đề tiếng Anh và phụ đề tiếng Nhật có thể được dịch với nguồn phù hợp theo khối, ngay cả khi ngôn ngữ đa số không rõ ràng.

    ## Cách nó hoạt động cho văn bản

    Đối với các bản dịch văn bản, ứng dụng chạy một phương pháp heuristic ở lớp Dart đếm ký tự theo lớp tập lệnh:

    - Ký tự Hán → Tiếng Trung giản thể
    - Kana → Tiếng Nhật
    - Hangul → Tiếng Hàn
    - Latinh → Tiếng Anh
    - Kirin → Tiếng Nga
    - Ả Rập → Tiếng Ả Rập

    Đầu vào hỗn hợp tuân theo lớp ký tự đa số. Đầu vào trống hoặc chỉ có khoảng trắng mặc định là tiếng Anh.

    Phương pháp heuristic nhanh (một lần quét tuyến tính trên đầu vào) và chạy trước lệnh gọi ML Kit. Ngôn ngữ nguồn được chọn sau đó được sử dụng cho yêu cầu dịch.

    ## Khi tự động phát hiện thất bại

    - **Latinh không có dấu phụ.** Một đoạn trích thuần Latinh gồm 10 ký tự có thể là tiếng Anh, tiếng Pháp, tiếng Đức, tiếng Ý, tiếng Bồ Đào Nha, tiếng Tây Ban Nha, tiếng Hà Lan, tiếng Ba Lan, tiếng Séc hoặc một số ngôn ngữ khác. Phương pháp heuristic chọn tiếng Anh làm mặc định; nếu nguồn không phải tiếng Anh, chất lượng bản dịch có thể bị ảnh hưởng. Cố định ngôn ngữ nguồn theo cách thủ công cho các đoạn trích Latinh ngắn.
    - **Kirin không cụ thể.** Kirin có thể là tiếng Nga, tiếng Ukraina hoặc một tập lệnh Slavơ khác. Ứng dụng chọn tiếng Nga.
    - **Sự mơ hồ của tập lệnh Hán.** Tiếng Trung giản thể và phồn thể chia sẻ hầu hết các ký tự của chúng. Một đoạn trích ngắn gồm các ký tự Hán không thể được giải quyết thành một mà không có ngữ cảnh dài hơn. Ứng dụng chọn tiếng Trung giản thể.

    Đối với những trường hợp này, hãy cố định ngôn ngữ nguồn theo cách thủ công từ bộ chọn.

    ## Tự động phát hiện không bao giờ im lặng

    Trang luôn có ngôn ngữ nguồn ML Kit cụ thể khi bản dịch chạy. Nếu phương pháp heuristic trả về một giá trị mặc định sai, bản dịch có thể sai; nếu nó trả về ngôn ngữ đúng, bản dịch hoạt động. Không có chế độ nào mà ứng dụng «không chọn được ngôn ngữ» — nó rơi vào giá trị mặc định và dịch.

    ## Lời khuyên thực tế

    Đối với các tài liệu dài, đơn ngữ, tự động phát hiện hoạt động. Đối với các đoạn trích ngắn hoặc trang có tập lệnh hỗn hợp, hãy cố định ngôn ngữ nguồn theo cách thủ công từ bộ chọn. Bộ chọn ghi nhớ các ngôn ngữ gần đây của bạn ở trên cùng, vì vậy việc sử dụng ngôn ngữ lần thứ hai chỉ là một lần nhấn.
