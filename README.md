# Portfolio Performance Marketing – Lê Minh Quân

Website tĩnh (HTML/CSS/JS thuần, không cần build). Song ngữ VI | EN, giao diện "Growth Dashboard".

## Cấu trúc
```
index.html          Trang chính (nội dung có cả data-vi và data-en)
assets/style.css    Giao diện (có dark mode theo hệ thống)
assets/app.js       Chuyển ngôn ngữ, biểu đồ, hiệu ứng đếm số, hiện dần khi cuộn
assets/boot.js      Bật class "js" sớm để tránh nháy giao diện
_headers            Header bảo mật + noindex cho Cloudflare Pages
robots.txt          Đang chặn công cụ tìm kiếm
docs/HANDOFF.md     Toàn bộ bối cảnh, số liệu đã xác thực, số liệu đã rút lại, việc còn thiếu
ANTIGRAVITY_PROMPT.md  Lời nhắc dán vào agent để làm tiếp
```

## Chạy thử trên máy
```
python3 -m http.server 8080
# mở http://localhost:8080
```

## Đẩy lên GitHub
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<tai-khoan>/<ten-repo>.git
git push -u origin main
```
Nên tạo repo **Private** cho đến khi công ty đồng ý công khai số liệu.

## Triển khai lên Cloudflare Pages
1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → chọn repo.
2. Framework preset: **None**. Build command: để trống. Build output directory: `/` (thư mục gốc).
3. Save and Deploy. Mỗi lần `git push` lên `main` sẽ tự triển khai lại.
Cách khác (không cần Git): `npx wrangler pages deploy . --project-name portfolio-quan`.
(Giao diện Cloudflare có thể đổi tên mục; nếu thấy Workers và Pages đã gộp, chọn tuỳ chọn static assets.)

## Trước khi công khai (checklist)
- [ ] Công ty đồng ý cho dùng tên Tomia/Thức Coffee và số liệu.
- [ ] Gỡ `<meta name="robots" content="noindex...">` trong `index.html`.
- [ ] Sửa `robots.txt` (bỏ `Disallow: /`) và bỏ dòng `X-Robots-Tag` trong `_headers`.
- [ ] Điền các khối "Đang cập nhật": Google Search Console, Thức Coffee, MOTA, ChiaSeTruong.
- [ ] Thêm ảnh chân dung (tối ưu < 150 KB, định dạng WebP) và ảnh chia sẻ OG.
- [ ] Gắn tên miền riêng (tuỳ chọn) và thêm trang vào Google Search Console.

## Quy tắc số liệu (quan trọng)
Mọi con số phải có định nghĩa, nguồn, cỡ mẫu. Các số đã bị rút lại (−82%, ÷4, ×10, "lead rác 92%") **không** được đưa lại. Chi tiết trong `docs/HANDOFF.md`.
Không đưa vào repo: tên khách hàng, tên đồng nghiệp, mức thưởng, thông tin đăng nhập, số điện thoại.
