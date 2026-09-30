# Portfolio Lê Minh Hiệp

Website HTML/CSS/JavaScript tĩnh dành cho GitHub Pages, lấy cảm hứng từ bố cục portfolio học thuật của https://cfwu417.github.io/index.html. Giao diện được viết lại, không sao chép mã của trang tham khảo.

Có menu trái cố định, ảnh đại diện, ảnh nền Bách khoa, các mục giới thiệu, nghiên cứu, công bố, dự án, học vấn, kinh nghiệm, thành tích và liên hệ. Menu thu gọn trên điện thoại; hỗ trợ bàn phím, focus, reduced motion và chỉ báo mục đang đọc. Không cần npm hoặc bước build.

## Mở bản hiện tại

Mở `index.html` bằng trình duyệt. Hoặc trong thư mục repository chạy:

```sh
python3 -m http.server 8000
```

Sau đó mở `http://localhost:8000`.

## Nội dung cần bổ sung

Trang chỉ dùng thông tin đã có trong repository: họ tên, vai trò sinh viên, trường và tài khoản GitHub. Các nội dung chưa xác nhận được hiển thị rõ là đang cập nhật. Không có số liệu thành tích, bài báo hoặc kỹ năng được tạo giả.

Chỉnh nội dung trong `index.html`; các comment HTML chỉ vị trí tương ứng:

- Giới thiệu: ngành, khóa, định hướng cá nhân.
- Nghiên cứu: lĩnh vực quan tâm và câu hỏi nghiên cứu.
- Dự án: tên, mục tiêu, vai trò, công nghệ, kết quả và mã nguồn.
- Công bố: tác giả, tiêu đề, nơi xuất bản, năm và DOI; phân biệt bản thảo với bài xuất bản.
- Học vấn: ngành học, thời gian.
- Kinh nghiệm: đơn vị, vai trò, thời gian và đóng góp.
- Thành tích: tên giải, đơn vị trao, năm.
- Liên hệ: email thật; dùng liên kết `mailto:`.

Ảnh đại diện nằm ở `images/about.jpg`, ảnh nền ở `images/cover_bg_1.jpg`. Thay ảnh bằng file cùng tên hoặc chỉnh `src` trong HTML. Màu sắc và khoảng cách nằm trong `css/style.css`.

## Thêm CV

Thêm tệp `CV.pdf` vào thư mục gốc, ngang hàng với `index.html`. Thay dòng `<span class="cv-pending">CV sẽ được bổ sung</span>` trong HTML bằng:

```html
<a class="button" href="CV.pdf" download>Tải CV</a>
```

## Xuất bản trên GitHub Pages

1. Đưa các file đã sửa vào repository `le-minh-hiep/le-minh-hiep.github.io`, nhánh `main`. Đảm bảo `index.html`, `css`, `js`, `images` nằm ngay ở thư mục gốc, không nằm trong một thư mục lồng thêm.
2. Mở **Settings → Pages** của repository.
3. Trong **Build and deployment**, chọn **Source: Deploy from a branch**.
4. Chọn **Branch: main**, **Folder: /(root)**, rồi **Save**.
5. Chờ quá trình Pages hoàn tất trong **Actions**. Địa chỉ dự kiến là https://le-minh-hiep.github.io/ . Chỉ xem là đã xuất bản khi GitHub báo thành công.

`.nojekyll` cho phép phục vụ trực tiếp website tĩnh. Không cần cấu hình GitHub Actions tùy chỉnh.

Tài liệu chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Kiểm tra trước khi cập nhật

- Mở trên điện thoại và máy tính; kiểm tra menu, liên kết và ảnh.
- `node --check js/main.js` kiểm tra cú pháp JavaScript.
- Không thêm nút CV khi chưa có file tương ứng, email mẫu hay biểu mẫu gửi tin chưa có dịch vụ xử lý.

Các thư viện cũ vẫn được giữ trong repository để tránh xóa tài sản hiện có; phiên bản mới không tải chúng. `index.html` chỉ tải `css/style.css` và `js/main.js`.
