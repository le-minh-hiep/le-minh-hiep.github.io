# Portfolio Le Minh Hiep

Website tĩnh dành cho GitHub Pages. Không cần npm, framework hay bước build.

## Sử dụng

1. Giải nén toàn bộ gói.
2. Đưa `index.html`, thư mục `assets` và tệp `.nojekyll` vào thư mục đang dùng để xuất bản GitHub Pages. Giữ nguyên cấu trúc thư mục.
3. Nếu đây là repository `le-minh-hiep.github.io`, có thể đặt các tệp ở thư mục gốc và chọn nguồn xuất bản tương ứng trong **Settings → Pages** của GitHub.
4. Mở `index.html` để xem nhanh trên máy. Để xem qua máy chủ cục bộ, chạy `python3 -m http.server 8000` trong thư mục này, rồi mở `http://localhost:8000`.

```text
index.html
.nojekyll
assets/
  Le_Minh_Hiep_CV_FR.pdf
```

## Nội dung đã chỉnh

- Dùng email HUST và thông tin từ hai CV được cung cấp trong yêu cầu này.
- Giữ riêng dự án cảm biến cây trồng và dự án Hall encoder/RS485; không gán mạch TPS63070/BQ24075 của dự án cây trồng sang dự án động cơ.
- Bổ sung hai bài báo RIVF 2026 và CIEES 2026, giữ trạng thái **Accepted** theo tài liệu nguồn.
- Dùng CPA 3.02/4.00 và điểm học kỳ 2025.2 là 3.45/4.00.
- Tiếng Pháp dùng A2, đang học hướng tới B1 theo CV tiếng Pháp; tiếng Anh ghi B1 tự đánh giá. Không tự nhận có chứng chỉ DELF.
- Bản CV tải xuống là bản tiếng Pháp được cung cấp, sao chép nguyên nội dung. Bản CV tiếng Anh chưa được đưa vào vì vẫn còn trường người giới thiệu để trống.
- Bỏ ảnh chân dung thay thế và ảnh kho có thể khiến người đọc hiểu nhầm là ảnh dự án thực tế. Dùng chữ viết tắt tên làm hình nhận diện.

## Cập nhật sau này

- Sửa nội dung trực tiếp trong `index.html`.
- Thay `assets/Le_Minh_Hiep_CV_FR.pdf` khi có CV mới; các nút tải sẽ tự dùng tệp mới.
- Nếu đổi địa chỉ website, cập nhật `canonical` và `og:url` trong phần `<head>`.
- Khi có liên kết DOI, trang hội nghị hoặc repository dự án thật, thêm đường dẫn vào đúng bài báo/dự án.

Giao diện dùng font hệ thống và SVG nội tuyến. Không tải font, ảnh, thư viện biểu tượng hoặc script từ CDN. Nội dung đọc được khi tắt JavaScript; JavaScript chỉ bổ sung menu di động, chọn giao diện, lọc dự án, trạng thái điều hướng và sao chép email.
