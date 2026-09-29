# Prompt: sửa toàn bộ giao diện Games-Kid

Cách dùng: đặt `UI-REDESIGN.md` vào thư mục gốc dự án, mở dự án trong công cụ AI viết code (Claude Code, Cursor…), rồi dán phần trong khung bên dưới.

---

```
Bạn là lập trình viên front-end kiêm nhà thiết kế. Hãy làm lại toàn bộ giao diện của website học tiếng Anh cho học sinh tiểu học trong thư mục này (index.html, styles.css, app.js).

NGUỒN SỰ THẬT
Đọc kỹ UI-REDESIGN.md trước. File đó quy định hướng thiết kế, bảng màu, phông chữ, bố cục từng màn hình, bảng viết lại nội dung, ràng buộc kỹ thuật và thứ tự làm. Nếu prompt này và file đó mâu thuẫn, làm theo file đó và nói cho tôi biết.

MỤC TIÊU
Giao diện hiện tại là kiểu "liquid glass": nền gradient có khối màu chuyển động, mọi thứ là thẻ kính mờ giống nhau, emoji làm icon, nhãn IN HOA nhỏ, ruy-băng quảng cáo, chữ nhỏ và nhạt. Tôi muốn thay bằng hướng "vở bài tập có sticker": màu đặc, viền mực 3px, bóng cứng, nút nổi khối, chữ lớn dễ đọc, một linh vật duy nhất là Robot Kha vẽ bằng SVG. Giao diện phải hợp với trẻ 6–11 tuổi, chiếu lên bảng lớp vẫn rõ, và chạy nhẹ trên máy yếu. Kết quả không được trông như web do AI sinh ra.

RÀNG BUỘC CỨNG (không được vi phạm)
1. Giữ HTML + CSS thuần + JavaScript thuần. Không thêm framework, thư viện UI hay bước build.
2. Giữ nguyên mọi id, mọi data-* (data-target, data-game, data-skill, data-speed), mọi tên hàm gọi trong onclick, mọi tên khoá localStorage. Không đổi logic điểm, XP, streak, lưu câu đố, phát âm, lật ô, đồng hồ.
3. Nếu đổi tên một class mà app.js có dùng (querySelector, classList, chuỗi HTML tạo động), phải sửa cả hai nơi. Ưu tiên giữ tên class cũ và viết lại kiểu dáng của nó.
4. Giữ các style="display:none" mà JS bật/tắt và style="width:...%" do JS cập nhật. Các inline style trang trí khác thì chuyển vào styles.css.
5. Mỗi lần sửa styles.css, tăng số phiên bản trong <link href="styles.css?v=..."> để trình duyệt tải lại.
6. Phải chạy được khi chạy `python -m http.server 8080` và khi mở trực tiếp index.html.
7. Không tự ý gộp hay xoá màn hình, tab hay chức năng. Phần gộp tab "Chơi một mình" là tuỳ chọn, chỉ làm khi tôi đồng ý.

HỆ THIẾT KẾ (đặt ở đầu styles.css)
:root {
  --ink:#1F2A44; --paper:#F7F9FC; --board:#17594A; --chalk:#FFC83D;
  --red:#D93025; --blue:#1F6FE0; --green:#157A45;
  --yellow-tint:#FFF1C7; --blue-tint:#E3EEFD; --green-tint:#DDF3E6; --red-tint:#FDE7E5;
  --r-s:12px; --r-m:16px; --r-l:24px;
  --font-display:"Baloo 2",system-ui,sans-serif;
  --font-body:"Lexend",system-ui,sans-serif;
}
- Nền trang là một màu phẳng --paper. Không gradient ở bất cứ đâu (nền, chữ, nút, pháo giấy).
- Thẻ: nền trắng, viền 3px --ink, bóng cứng 0 4px 0 --ink, bo 12/16/24 theo cấp bậc.
- Nút chỉ có 3 loại: chính (vàng, mỗi màn hình một nút), phụ (trắng viền mực), nguy hiểm (viền đỏ). Nút đúng/lưu/tiếp dùng xanh lá chữ trắng. Nút cao ≥ 52px, nhấn xuống có hiệu ứng translateY.
- Đỏ chỉ dùng cho Đội Cáo Đỏ, trả lời sai, hành động xoá. Xanh dương dùng cho Đội Sư Tử Xanh, liên kết, focus, trạng thái đang chọn.
- Phông: thay dòng Google Fonts hiện tại bằng Baloo 2 (700, 800) và Lexend (400, 500). Baloo 2 cho tiêu đề, nút, số điểm, từ vựng lớn. Lexend cho nội dung.
- Cỡ chữ tối thiểu 16px. Trong Đấu đội và Đoán hình ở màn ≥ 1280px: câu hỏi, đáp án, điểm 64–96px, nhãn phụ ≥ 24px.
- Vùng bấm ≥ 48x48px. Viền focus: outline 4px solid var(--blue), offset 3px.
- Tôn trọng prefers-reduced-motion.

NHỮNG THỨ PHẢI XOÁ HOẶC THAY
- <div class="mesh-bg"> với 4 blob và toàn bộ CSS/animation của chúng.
- Mọi backdrop-filter, class glass-* (giữ tên class nếu JS dùng, nhưng viết lại thành kiểu thẻ/nút/ô nhập mới).
- Badge KIDS, "Học mà Chơi — Vui Từng Giây!", ruy-băng "MỚI ĐỘC ĐÁO" và "HOT NHẤT LỚP HỌC", hero banner và 5 chip lặp lại các thẻ trò chơi.
- Mọi ký hiệu ➔ ở cuối nút.
- Nhãn IN HOA nhỏ ("AI GAME CREATOR & VISUAL ARENA", "AI Lesson Creator"…).
- Emoji làm icon giao diện. Thay bằng một bộ SVG nét đều 2.5px (nhúng dạng sprite trong index.html, không tải từ CDN). Emoji chỉ được giữ ở nội dung từ vựng (hình quả táo, con chó…) và avatar đội.
- maximum-scale=1.0 và user-scalable=no trong thẻ viewport.
- Hiệu ứng hover nâng thẻ và hiệu ứng mờ dần/trượt lên khi vào màn hình.
- Chữ Hoa Đầu Mỗi Từ: viết theo kiểu tiếng Việt (chỉ hoa chữ đầu câu và tên riêng).

ROBOT KHA
Vẽ một SVG robot hộp vuông, hai mắt, ăng-ten, bằng các màu trong hệ thiết kế, có 4 nét mặt: bình thường, vui, tiếc, ăn mừng. Đặt vào: logo header, dòng chào ở trang chủ, khung phản hồi đúng/sai trong Đoán hình, màn hình trống, ô quà bất ngờ của Đấu đội, màn hoàn thành. Thay 🚀, 🎉, 📭, 🎁 đang dùng ở các chỗ đó.

QUY TRÌNH (làm tuần tự, dừng báo cáo sau mỗi giai đoạn)

Giai đoạn 0: KIỂM KÊ, CHƯA SỬA GÌ
Đọc toàn bộ index.html, styles.css, app.js. Liệt kê cho tôi:
a) mọi id, data-*, hàm onclick mà app.js hoặc HTML phụ thuộc;
b) mọi class mà app.js dùng hoặc tạo bằng chuỗi HTML (thẻ lớp, ô số Baamboozle, dòng bảng xếp hạng, danh sách câu đố, thẻ gợi ý, chữ cái xếp chữ, hình chọn…);
c) các chuỗi tiếng Việt nằm trong app.js sẽ phải viết lại;
d) các chức năng nói là "AI" và thực tế chạy thế nào (gọi dịch vụ ngoài hay ghép mẫu sẵn), để đổi nhãn cho đúng;
e) mọi chỗ nào mâu thuẫn với UI-REDESIGN.md.
Chờ tôi xác nhận rồi mới sang giai đoạn 1.

Giai đoạn 1: nền tảng. Biến CSS, phông, xoá mesh-bg/blob/backdrop-filter, sửa viewport, dọn inline style trang trí, cập nhật ?v=.
Giai đoạn 2: thành phần dùng chung. Thẻ, 3 loại nút, ô nhập/chọn/textarea, modal (lớp phủ màu mực 60%, không blur, nút đóng 44px có aria-label, đóng bằng Esc), một component .back-btn thay cho các nút "Quay lại Trang Chủ", bộ icon SVG.
Giai đoạn 3: header và điều hướng. Gọn header, đổi tên 5 tab theo UI-REDESIGN.md, ≤ 720px chuyển thành thanh tab cố định ở đáy có safe-area.
Giai đoạn 4: trang chủ. Bỏ hero, dòng chào + Robot Kha, nút chọn lớp lớn, lưới trò chơi bất đối xứng (Lật ô đấu đội là ô lớn nhất), mô tả một dòng, nút chỉ ghi "Chơi", khu "Dành cho thầy cô" ở dưới.
Giai đoạn 5: Đấu đội, rồi Đoán hình + Soạn câu đố (form 3 bước, thẻ chọn loại câu đố lớn, nút xoá luôn hỏi xác nhận).
Giai đoạn 6: Chơi một mình (thẻ từ vựng, trắc nghiệm, nghe đoán hình, xếp chữ) và Xếp hạng (bục 2-1-3, bảng cuộn ngang trong khung riêng, ghi rõ dữ liệu mẫu).
Giai đoạn 7: trạng thái đúng/sai/hoàn thành với Robot Kha, phản hồi luôn có icon hoặc chữ chứ không chỉ màu.
Giai đoạn 8: viết lại toàn bộ nội dung theo bảng ở mục 8 của UI-REDESIGN.md, kể cả các chuỗi trong app.js. Nhãn "AI" chỉ giữ ở chức năng thực sự dùng AI.
Giai đoạn 9: kiểm tra và dọn dẹp.

SAU MỖI GIAI ĐOẠN
- Chạy thử trang. Nếu có công cụ trình duyệt thì chụp ảnh ở 1440px, 1024px và 390px. Không có lỗi trong console.
- Bấm thử đường đi chính: chọn lớp, mở thẻ từ vựng, chơi trắc nghiệm một câu, lật một ô Baamboozle, chơi một câu Đoán hình, thêm một câu đố mới, mở bảng xếp hạng. Tất cả phải chạy như trước.
- Báo cáo ngắn: đã đổi gì, file nào, chỗ nào chưa chắc, chỗ nào cần tôi quyết.

GIAI ĐOẠN 9: TỰ RÀ SOÁT TRƯỚC KHI BÁO XONG
Duyệt lần lượt danh sách ở mục 10 của UI-REDESIGN.md và báo từng mục đạt hay chưa. Ngoài ra tìm bằng lệnh và báo số lượng còn lại: "linear-gradient", "backdrop-filter", "➔", "text-transform: uppercase", chuỗi emoji trong index.html, font-size nhỏ hơn 16px, style="..." còn lại trong index.html.

NHỮNG ĐIỀU KHÔNG ĐƯỢC LÀM
- Không viết lại logic JavaScript "cho gọn". Chỉ sửa chuỗi hiển thị và phần tạo HTML khi cần đổi giao diện.
- Không thêm chức năng mới ngoài những gì UI-REDESIGN.md nêu.
- Không tự thêm ảnh, phông hay icon tải từ CDN ngoài Google Fonts.
- Không đổi tên chức năng khác với bảng nội dung. Nếu cần đặt tên mới, hỏi tôi.
- Không xoá dữ liệu người dùng trong localStorage khi thay đổi cấu trúc. Nếu có thay đổi định dạng dữ liệu, dừng lại và hỏi.
```

---

## Ghi chú cho bạn

- Nếu AI làm một lần quá nhiều, hãy nhắc: "Dừng ở giai đoạn N, báo cáo rồi mới làm tiếp".
- Quyết định bạn cần trả lời khi AI hỏi: có đổi tên "Baamboozle" thành tên riêng không; chức năng nào thực sự dùng AI; có gộp tab "Chơi một mình" không; bảng xếp hạng dùng dữ liệu mẫu hay bỏ.
- Robot Kha là SVG tự vẽ nên lần đầu có thể chưa đẹp. Cứ yêu cầu chỉnh riêng nhân vật sau khi giao diện đã ổn.
