# Kế hoạch đổi giao diện: English Kha Master Kids (bản 2, đã đối chiếu code)

Dự án: `zietkha/Games-Kid` (HTML + CSS thuần + JavaScript thuần, lưu bằng `localStorage`, không có build).
Người chơi: học sinh lớp 1–5. Người soạn bài: giáo viên / phụ huynh.
Ngữ cảnh dùng thật: cá nhân trên máy tính/tablet/điện thoại, và **chiếu lên màn hình lớp học** (Baamboozle, AI đoán hình). Nhiều máy trường yếu.

> Ghi chú phạm vi: bản này dựa trên ảnh chụp màn hình, `README.md` và khoảng 1.000 dòng đầu của `index.html`. Chưa đọc được `styles.css`, `app.js` và phần cuối `index.html` (GitHub chặn). Vì vậy prompt kèm theo bắt AI đọc hết các file đó trước khi sửa.

---

## 0. Những gì đã sửa so với bản 1

| Chỗ sửa | Lý do |
|---|---|
| Đổi mã màu xanh dương và đỏ | Bản 1 ghi tương phản ≥ 4.5:1 nhưng chữ trắng trên `#2F80ED` chỉ đạt khoảng 3.9:1 và trên `#F0453A` khoảng 3.7:1. Đã đổi sang `#1F6FE0` (4.8:1) và `#D93025` (4.8:1) |
| Linh vật dùng **Robot Kha** thay vì cáo/gấu | Code đã có "Robot Kha" ở banner. Hai đội đã là Cáo Đỏ và Sư Tử Xanh nên không thêm nhân vật thứ ba |
| Bỏ sơ đồ "Tiếp tục bài đang học" | App chưa có dữ liệu tiến độ theo bài. Luồng thật là chọn lớp, rồi chọn trò chơi. Trang chủ vẽ lại theo luồng này |
| Bỏ đề xuất "PIN cho khu giáo viên" làm bước đầu | App không có tài khoản, PIN lưu trong trình duyệt ai cũng gỡ được. Chỉ tách bằng bố cục và tên gọi, PIN để sau |
| Sửa lỗi chính tả ở bảng nội dung ("Tài ảnh" thành "Tải ảnh") và dùng đúng chuỗi trong code | Bản 1 viết lại theo ảnh chụp nên vài chỗ không khớp code |
| Thêm mục chiếu lớp học, máy yếu, ràng buộc kỹ thuật | Bản 1 chưa nói tới |
| Màu đỏ và xanh dương dành riêng cho hai đội và đúng/sai | Bản 1 dùng đỏ cho ô game, dễ nhầm với "sai" |

---

## 1. Những gì thấy trong code

| Vị trí | Vấn đề | Cách sửa |
|---|---|---|
| `<meta viewport>` | Có `maximum-scale=1.0, user-scalable=no`, khoá zoom | Xoá hai giá trị này. Giữ `viewport-fit=cover` |
| `.mesh-bg` + `.blob-1..4` | 4 khối màu chuyển động nền suốt thời gian chơi, nặng máy yếu, là kiểu nền "liquid glass" điển hình | Xoá hẳn khối HTML và CSS. Nền là một màu phẳng `--paper` |
| `.glass-panel`, `.glass-btn`, `.glass-input`, `.glass-select`, `.glass-textarea` | Mọi khối, nút, ô nhập đều là kính mờ, cùng một kiểu | Thay bằng thẻ / nút / ô nhập viền dày (mục 6). Bỏ `backdrop-filter` |
| Rất nhiều `style="..."` trong HTML | Gradient, màu, khoảng cách viết thẳng vào thẻ, không thể đổi giao diện từ một chỗ | Chuyển vào `styles.css`. **Giữ** các `style="display:none"` và `style="width: …%"` vì JS bật/tắt và cập nhật chúng |
| Badge `KIDS 🎈`, `🌈 Học mà Chơi — Vui Từng Giây!`, ruy-băng `⭐ MỚI ĐỘC ĐÁO`, `🔥 HOT NHẤT LỚP HỌC` | Lời quảng cáo chung chung, không giúp trẻ làm gì | Xoá |
| Hero banner + 5 chip (`hl-chip`) | 5 chip lặp lại đúng 5 thẻ trò chơi bên dưới | Xoá hero. Thay bằng dòng chào ngắn + Robot Kha |
| 5 thẻ trò chơi cùng khuôn: tag, số lượng, tên, mô tả dài, nút "… ➔" | Bộ thẻ SaaS: giống hệt nhau, nút nào cũng có mũi tên | Thẻ khác kích thước, mô tả một dòng, nút chỉ ghi "Chơi" |
| Nút gradient tím–hồng (`btn-primary` ghi đè inline) | Lệch hệ màu, khác các nút còn lại | Chỉ còn 3 loại nút (mục 6.2) |
| 6+ nút "Quay lại Trang Chủ" với `style` khác nhau ở từng màn | Lặp, không đồng nhất | Một component `.back-btn` dùng chung |
| Tab "Khám Phá Bài Học" (dashboard) và tab "Mini-Games Cá Nhân" | Ba trong bốn mini-game đã có ngay ở thẻ trên dashboard | Giai đoạn đầu chỉ đổi tên và giao diện. Gộp là tuỳ chọn (mục 12) |
| Chữ "AI" xuất hiện ở hầu hết nhãn (`AI Sinh Nhanh…`, `AI Phân Tích…`, `Trí tuệ nhân tạo AI 🪄`) | README nói AI, nhưng app chạy trong trình duyệt không có máy chủ. Nếu chỉ là mẫu câu ghép sẵn thì gọi là AI là sai | Kiểm tra `app.js`. Nếu không gọi dịch vụ AI thật thì đổi thành "Tạo tự động", "Gợi ý mẫu câu" |
| "Baamboozle" dùng làm tên chức năng | Trùng tên một trang game có sẵn | Nên đặt tên riêng, ví dụ "Lật ô đấu đội" (mục 8). Việc cuối cùng do bạn quyết |
| `#aiPlayEmptyState`: "Toàn bộ câu đố trong database đã được xóa sạch" | Nói ngôn ngữ kỹ thuật với người dùng | "Chưa có câu đố nào" + việc cần làm |
| Bảng xếp hạng có tên mẫu (Minh Khang, Bảo Trâm) và huy chương emoji kép `🥈 🐰` | Dữ liệu giả trông như thật, emoji chồng emoji | Ghi rõ "Dữ liệu mẫu" hoặc bỏ. Thay huy chương bằng số trong vòng tròn |
| Emoji làm icon giao diện (🌟 ✨ 🎁 🔥 ⚡ 🔊 🏠 🎨 🎲 🎮 🏆 ➔ ⬅️) | Không đồng nhất, đổi hình theo hệ điều hành | Một bộ icon SVG thống nhất. Emoji chỉ giữ ở nội dung từ vựng (🍎, 🐶…) |
| Chữ Hoa Đầu Mỗi Từ | Không đúng cách viết tiếng Việt | Chỉ hoa chữ đầu câu và tên riêng |
| Phông `Quicksand` + `Plus Jakarta Sans` | Hai phông phổ biến, không có cá tính | `Baloo 2` + `Lexend` (mục 4) |
| Số bước trong form tạo câu đố nhảy 1, 2, 3, 4, 5 nhưng bước 0 không đánh số, bước 4–5 chỉ hiện ở chế độ khác | Đánh số lộn xộn | Chia thành 3 bước cố định, đánh số theo thứ tự hiển thị |

---

## 2. Hướng thiết kế: "Vở bài tập có sticker"

Màu đặc, viền dày `3px`, bóng cứng (không mờ), nút nổi khối như bàn phím game. Không gradient, không kính mờ, không hạt sáng, không nền chuyển động.

Lý do hợp với dự án:
- Chiếu lên bảng lớp vẫn đọc rõ từ cuối lớp.
- Nhẹ trên máy yếu: không blur, không animation nền.
- Nút bấm nhìn là biết bấm được.
- Không giống mẫu web AI thường sinh ra.

**Điểm nhấn duy nhất: Robot Kha.** Vẽ một lần bằng SVG (hộp vuông, hai mắt, ăng-ten), có 4 nét mặt: bình thường, vui, tiếc ("thử lại nhé"), ăn mừng. Xuất hiện ở logo, dòng chào trang chủ, khung phản hồi đúng/sai, màn hình trống, ô quà bất ngờ. Mọi thứ khác giữ yên tĩnh để Robot Kha nổi bật. Hai đội giữ nguyên Cáo Đỏ và Sư Tử Xanh.

---

## 3. Bảng màu

| Tên | Mã | Dùng cho | Tương phản với chữ |
|---|---|---|---|
| Mực | `#1F2A44` | Chữ chính, viền | Trên `--paper`: 14:1 |
| Giấy | `#F7F9FC` | Nền trang (một màu phẳng) | Chữ mực |
| Xanh bảng | `#17594A` | Thanh đầu trang | Chữ trắng 8:1 |
| Vàng phấn | `#FFC83D` | Nút chính, XP, ô đang chọn | Chữ mực 9:1 |
| Đỏ | `#D93025` | Đội Cáo Đỏ, sai, xoá | Chữ trắng 4.8:1 |
| Xanh dương | `#1F6FE0` | Đội Sư Tử Xanh, liên kết, focus, đang chọn | Chữ trắng 4.8:1 |
| Xanh lá | `#157A45` | Đúng, lưu, hoàn thành | Chữ trắng 5.4:1 |

Màu nhạt làm nền (luôn đi với chữ mực): `--yellow-tint #FFF1C7`, `--blue-tint #E3EEFD`, `--green-tint #DDF3E6`, `--red-tint #FDE7E5`.

Quy tắc:
- Đỏ **chỉ** dùng cho Đội Cáo Đỏ, trả lời sai và hành động xoá. Không dùng đỏ để làm màu nhận diện một trò chơi.
- Xanh dương dùng cho Đội Sư Tử Xanh, liên kết, viền focus và trạng thái đang chọn.
- Thẻ trò chơi: nền trắng, viền mực, một mảng minh hoạ tô màu nhạt (vàng, xanh lá, xanh dương, giấy). Phân biệt bằng hình minh hoạ chứ không bằng màu đậm.
- Không gradient ở bất kỳ đâu. Pháo giấy (`#confettiCanvas`) dùng đúng các màu ở bảng này.
- Không dùng chữ xám nhạt. Chữ phụ vẫn là mực, nhỏ hơn hoặc mỏng hơn, không nhạt hơn.

---

## 4. Chữ

| Vai trò | Phông | Ghi chú |
|---|---|---|
| Tiêu đề, nút, số điểm, từ vựng lớn | **Baloo 2** 700–800 | Tròn, có đủ dấu tiếng Việt |
| Nội dung, hướng dẫn, ô nhập | **Lexend** 400–500 | Thiết kế để dễ đọc |

Nhúng bằng Google Fonts (thay dòng `<link>` hiện tại). Đặt phông dự phòng `system-ui, sans-serif`.

| Loại | Cỡ |
|---|---|
| Nội dung, nhãn, ô nhập | 16–18px (không có chữ nào dưới 16px) |
| Nút | 18–20px |
| Tiêu đề màn hình | 32–40px |
| Từ vựng trong game | 48–72px |
| Chế độ chiếu lớp (màn ≥ 1280px, trong Baamboozle và Đoán hình) | Đáp án, câu hỏi, điểm: 64–96px. Nhãn phụ: ≥ 24px |

Không dùng chữ IN HOA cho nhãn nhỏ. Không tô riêng một từ trong tiêu đề. Dòng chữ dài tối đa khoảng 60 ký tự.

---

## 5. Bố cục từng màn hình

### 5.1. Header
Chỉ giữ: logo Robot Kha + tên `English Kha Master` (bỏ badge KIDS và dòng phụ) ở trái; streak, XP, nút âm thanh, avatar ở phải.
Chuyển xuống dưới trang chủ (khu "Dành cho thầy cô"): `#openAddLessonBtn` và nội dung soạn bài. `#dailyCheckinBtn` giữ ở header nhưng là nút icon có nhãn.
Header nền `--board`, chữ trắng, không kính mờ, không bóng mờ.

### 5.2. Thanh điều hướng (`.sub-nav`)
Giữ 5 tab và giữ `data-target`. Chỉ đổi tên và giao diện:

| Hiện tại | Đổi thành |
|---|---|
| Khám Phá Bài Học | Bài học |
| AI Studio (Ảnh & Mẫu Câu) | Đoán hình |
| Trò Chơi Baamboozle (Đấu Đội) | Đấu đội |
| Mini-Games Cá Nhân | Chơi một mình |
| Bảng Xếp Hạng & Điểm Danh | Xếp hạng |

Màn hình ≤ 720px: chuyển thành thanh tab cố định ở đáy màn hình, icon 28px + chữ, chừa `env(safe-area-inset-bottom)` và thêm `padding-bottom` cho `body` để không che nội dung.

### 5.3. Trang chủ (`#view-dashboard`)

```
[header xanh bảng]

 (Robot Kha)  Chào Bé Siêu Nhân! Chọn lớp rồi chọn trò chơi.

 [ Lớp 1 ][ Lớp 2 ][ Lớp 3 ][ Lớp 4 ][ Lớp 5 ]     <- nút lớn, lớp đang chọn tô vàng
 Lớp 1: chữ cái, màu sắc, số đếm, động vật          Tốc độ đọc: [Chậm] [Thường]

 +------------------------------+ +----------------+
 | Lật ô đấu đội   (ô lớn)      | | Đoán hình,     |
 | Hai đội lật ô, ghi điểm.     | | điền từ        |
 | [ Chơi ]                     | | [ Chơi ]       |
 +------------------------------+ +----------------+
 +------------+ +--------------+ +----------------+
 | Thẻ từ vựng| | Trắc nghiệm  | | Xếp chữ        |
 +------------+ +--------------+ +----------------+

 Dành cho thầy cô:  Thêm bài học   Soạn câu đố
```

- Bỏ hero banner, 5 chip, hai ruy-băng, dòng gợi ý dài.
- Ô "Lật ô đấu đội" to nhất vì là hoạt động chính của lớp.
- Căn trái toàn bộ.
- Thẻ lớp (`#gradeCardsGrid`, do JS tạo) giữ nguyên cách tạo, chỉ đổi giao diện thành nút lớn có số lớp.

### 5.4. Đấu đội (`#view-baamboozle`)

```
[ Trang chủ ]                       Bộ bài: [ v ]  [Thêm bài] [Ván mới]

 +-----------------+            +------------------+
 | Đội Cáo Đỏ      |     VS     | Đội Sư Tử Xanh   |
 |      40         |            |       20         |
 | Đến lượt        |            |                  |
 | [-10]   [+10]   |            | [-10]   [+10]    |
 +-----------------+            +------------------+

 Đội Cáo Đỏ chọn một ô số                    Còn 12/16 ô
 [ 1 ][ 2 ][ 3 ][ 4 ]
 [ 5 ][ 6 ][ 7 ][ 8 ]   ...
```

- Điểm số cỡ 72–96px, đội đang có lượt: nền nhạt của đội + bóng cứng dày hơn. Đội chờ: phẳng, không bóng.
- Ô số: vuông lớn, chữ số Baloo 2. Ô đã lật tô nhạt màu đội ăn được ô đó (đỏ nhạt / xanh nhạt), ô chưa lật màu trắng.
- Popup câu hỏi (`#baamTileModal`): từ khoá cỡ 64px trở lên, bốn nút chấm điểm cùng hàng, thứ tự cố định: Xem đáp án, Sai, Sai −10, Đúng +20 (Đúng dùng xanh lá, Sai dùng trắng viền, Sai −10 dùng đỏ).
- Ô quà bất ngờ: Robot Kha ăn mừng, không dùng emoji 🎁.

### 5.5. Đoán hình (`#view-ai-studio`)
- Hai chế độ: tên mới **Chơi** và **Soạn câu đố (thầy cô)**. Mặc định Chơi. Giữ id `btnModeAiPlay`, `btnModeAiCreate`.
- Màn chơi: ảnh lớn bên trái (viền mực, bo 16px), câu hỏi làm tiêu đề trên ảnh; bên phải ô nhập, thẻ gợi ý và nút. Hàng nút cố định thứ tự: Gợi ý, Xem đáp án, Kiểm tra (nút chính vàng). Sau khi kiểm tra, nút "Tiếp" thay chỗ "Kiểm tra".
- Thanh tiến độ: thanh đặc viền mực, phần đã xong tô xanh lá.
- Khung phản hồi đúng/sai: Robot Kha đổi nét mặt + chữ + màu nhạt (xanh lá / đỏ), không chỉ dựa vào màu.
- Màn trống (`#aiPlayEmptyState`): Robot Kha, "Chưa có câu đố nào. Nhờ thầy cô thêm câu đố nhé.", nút "Soạn câu đố" và "Khôi phục bài mẫu".

### 5.6. Soạn câu đố (`#aiStudioCreateMode`)
- Ba bước cố định, đánh số theo đúng thứ tự thấy trên màn hình: **1 Ảnh, 2 Từ và câu hỏi, 3 Xem trước và lưu**.
- Chọn loại câu đố bằng hai thẻ lớn có hình xem trước (giữ radio thật ẩn bên trong để JS đọc được).
- Ô nhập cao ≥ 48px, nhãn nằm phía trên ô, không dùng placeholder làm nhãn.
- Nút "Lưu và tạo câu mới" và "Chơi từ đầu" nằm cố định dưới form. Nút nguy hiểm ("Xoá tất cả") viền đỏ, luôn hỏi xác nhận.
- Ngân hàng câu đố bên phải: mỗi dòng có hình nhỏ, từ, nút xoá 44px.

### 5.7. Chơi một mình (`#view-games`)
- **Thẻ từ vựng**: thẻ lớn viền mực, mặt trước: hình + từ 64px + phiên âm; mặt sau: nghĩa + câu ví dụ + nút nghe. Bỏ icon ✨ 📖 ở góc thẻ. Giữ hiệu ứng lật 3D vì đó là hành động của bé.
- **Trắc nghiệm**: 4 đáp án dạng nút lớn 2×2 có ký hiệu A B C D. Đồng hồ là thanh chạy ngắn dần, 5 giây cuối chuyển đỏ. Đúng: nền xanh lá nhạt + dấu tích. Sai: nền đỏ nhạt + dấu chéo + rung một lần.
- **Nghe đoán hình**: nút loa 96px ở giữa, 4 hình chọn 2×2.
- **Xếp chữ**: chữ cái là ô vuông ≥ 56px như quân cờ chữ; ô đáp án là khung nét đứt.

### 5.8. Xếp hạng (`#view-leaderboard`)
- Bục top 3 dạng khối: hạng 2 – 1 – 3, chiều cao khác nhau, viền mực. Thay huy chương emoji bằng số trong vòng tròn, vương miện bằng SVG.
- Bảng: bọc trong khung `overflow-x: auto`, hàng của bé tô `--yellow-tint`, tiêu đề cột cố định. Chữ ≥ 16px.
- Dữ liệu mẫu phải ghi rõ "Dữ liệu mẫu" hoặc bỏ đi.

### 5.9. Hộp thoại (modal)
Lớp phủ màu mực 60%, không blur. Thẻ hộp thoại viền 3px, nút đóng 44px có nhãn `aria-label="Đóng"`. Trả focus về nút đã mở khi đóng. Bấm Esc để đóng (nếu JS chưa có thì thêm).

---

## 6. Thành phần

### 6.1. Thẻ
```css
.card {
  background: #fff;
  border: 3px solid var(--ink);
  border-radius: var(--r-m);      /* 12 / 16 / 24: dùng theo cấp bậc, không dùng một mức cho tất cả */
  box-shadow: 0 4px 0 var(--ink);
}
```
Thẻ chính (ô trò chơi lớn, khung game) dùng `--r-l`. Thẻ thông tin nhỏ dùng `--r-s`. Không bóng mờ, không `backdrop-filter`.

### 6.2. Nút: chỉ 3 loại
```css
.btn {
  min-height: 52px; padding: 0 28px;
  font: 800 20px/1 var(--font-display);
  border: 3px solid var(--ink); border-radius: 14px;
  box-shadow: 0 5px 0 var(--ink);
  transition: transform .08s, box-shadow .08s;
}
.btn:active { transform: translateY(5px); box-shadow: 0 0 0 var(--ink); }
.btn-primary   { background: var(--chalk); color: var(--ink); }   /* mỗi màn chỉ một nút chính */
.btn-secondary { background: #fff; color: var(--ink); }
.btn-danger    { background: #fff; color: var(--red); border-color: var(--red); box-shadow: 0 5px 0 var(--red); }
```
Nút "đúng / lưu / tiếp" dùng `--green` với chữ trắng. Nút trong các thẻ đội dùng màu đội. Không có nút gradient.

### 6.3. Ô nhập
Cao ≥ 48px, viền 3px mực, nền trắng, chữ 18px. Khi focus: viền `--blue` + `outline: 4px solid var(--blue-tint)`.

### 6.4. Icon
Một bộ SVG nét đều 2.5px (Lucide hoặc Phosphor), nhúng dạng sprite trong `index.html` để chạy được khi mở file trực tiếp. Không dùng emoji làm icon giao diện.

### 6.5. Trạng thái

| Trạng thái | Cách thể hiện |
|---|---|
| Đúng | Nền xanh lá nhạt, viền xanh lá, dấu tích, Robot Kha vui, "+10 XP" bay lên, âm báo |
| Sai | Rung nhẹ một lần, nền đỏ nhạt, dấu chéo, "Thử lại nhé", Robot Kha tiếc |
| Hoàn thành | Pháo giấy một lần (`#confettiCanvas`), Robot Kha ăn mừng |
| Đang chọn | Nền vàng nhạt + viền xanh dương |
| Vô hiệu | Nền giấy, chữ mực nhạt 60%, không bóng |

Không chỉ dùng màu để báo trạng thái: luôn kèm icon hoặc chữ.

---

## 7. Chuyển động

Chỉ để phản hồi hành động của bé.

**Giữ:** nút nhấn xuống; lật thẻ 3D; đáp án đúng nhảy lên, sai rung một lần; số XP đếm lên; pháo giấy một lần khi xong bài.
**Bỏ:** 4 khối `blob` chuyển động nền; hiệu ứng mờ dần/trượt lên khi vào màn; thẻ nổi lên khi rê chuột; hạt lấp lánh; mọi hiệu ứng tự chạy lặp mãi.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

---

## 8. Viết lại nội dung

Dùng động từ rõ ràng, một hành động một tên gọi. Sửa cả trong `index.html` lẫn các chuỗi JS tạo ra giao diện (dashboard, ô số, bảng xếp hạng, danh sách câu đố).

### Chung
| Hiện tại | Đổi thành |
|---|---|
| English Kha Master `KIDS 🎈` / Trò Chơi Tiếng Anh Tiểu Học Lớp 1 – 5 | English Kha Master / Tiếng Anh lớp 1–5 |
| Thêm Bài Học | Thêm bài học (đặt ở khu "Dành cho thầy cô") |
| Điểm Danh | Điểm danh |
| Chọn Khối Lớp Của Bé Để Khám Phá! | Chọn lớp của bé |
| 🎒 Chọn Khối Lớp Học: | Chọn lớp |
| Bài Học & Trò Chơi Lớp 1 / Chủ đề: … | Lớp 1: chữ cái, màu sắc, số đếm, động vật |
| Tốc độ đọc mẫu: Chậm dễ nghe 🐢 / Tự nhiên 🐰 | Tốc độ đọc: Chậm / Thường |
| Quay lại Trang Chủ / Về Trang Chủ | Trang chủ (icon mũi tên quay lại) |
| Dòng chào Robot Kha "Bé ơi, hôm nay sẵn sàng…" | "Chào bé! Hôm nay mình chơi gì?" |

### Thẻ trò chơi (nút nào cũng chỉ ghi "Chơi")
| Hiện tại | Đổi thành |
|---|---|
| Đoán Hình & Điền Mẫu Câu AI + mô tả 2 dòng | Đoán hình, điền từ: "Nhìn ảnh, gõ từ còn thiếu." |
| Trò Chơi Baamboozle Lật Ô Số | Lật ô đấu đội: "Hai đội lật ô, trả lời để ghi điểm." |
| Flashcard 3D & Mẫu Câu | Thẻ từ vựng: "Lật thẻ, xem nghĩa, nghe đọc." |
| Đố Vui Trắc Nghiệm Tốc Độ | Trắc nghiệm: "Chọn đáp án đúng trong 15 giây." |
| Xếp Chữ & Nghe Đoán Hình | Xếp chữ: "Sắp xếp chữ cái thành từ." |
| ⭐ MỚI ĐỘC ĐÁO, 🔥 HOT NHẤT LỚP HỌC, "16 ô số bí ẩn", "Ghép từ logic" | Xoá |

### Đấu đội
| Hiện tại | Đổi thành |
|---|---|
| Đấu Trường Baamboozle Lật Ô Số Bí Mật + mô tả | Lật ô đấu đội |
| Tạo Bài Mới / Chơi Ván Mới | Thêm bài / Ván mới |
| Đến Lượt! 🎯 / Chờ Lượt ⏳ | Đến lượt / Chờ |
| Lượt của: Đội Cáo Đỏ 🦊 — Hãy chọn 1 ô số! | Đội Cáo Đỏ chọn một ô số |
| Còn lại: 16 / 16 ô | Còn 16/16 ô |
| Câu tiếng Anh / Từ khóa: (nhãn) | Xoá nhãn |
| Nghe Phát Âm Tiếng Anh | Nghe |
| Kiểm Tra Đáp Án Ngay! | Kiểm tra |
| Sai (0đ) / Sai Trừ (-10đ) / Đúng (+20đ) | Sai / Sai −10 / Đúng +20 |
| 🎉 CHÍNH XÁC TUYỆT VỜI! (+20 ĐIỂM) | Đúng rồi! +20 điểm |
| Nhận Quà & Đổi Lượt ➔ | Nhận và đổi lượt |

### Đoán hình và soạn câu đố
| Hiện tại | Đổi thành |
|---|---|
| AI Đoán Hình & Điền Mẫu Câu Tiếng Anh + mô tả dài | Đoán hình, điền từ: "Nhìn ảnh, gõ từ còn thiếu." |
| ✨ AI Game Creator & Visual Arena | Xoá |
| Chơi Thử Thách / AI Studio Tạo Game | Chơi / Soạn câu đố (thầy cô) |
| Ảnh Thử Thách, 🔍 Quan sát hình ảnh và điền… | Xoá (ảnh và ô nhập đã đủ rõ) |
| Gõ từ đáp án hoặc bấm chọn thẻ từ bên dưới... | Gõ đáp án hoặc chọn thẻ bên dưới |
| Thẻ từ vựng gợi ý (Bấm để chọn nhanh): | Gợi ý |
| Kiểm Tra (Check) / Tiếp Tục ➔ | Kiểm tra / Tiếp |
| Chuỗi Đúng / Điểm | Liên tiếp / Điểm |
| Chính xác tuyệt vời! | Đúng rồi! |
| Chưa Có Câu Đố Nào Được Tạo + "…trong database đã được xóa sạch…" | Chưa có câu đố nào. Nhờ thầy cô thêm câu đố nhé. |
| Tạo Câu Đố Mới Nhanh Chóng | Tạo câu đố mới |
| AI Sinh Nhanh Bộ Câu Hỏi Mẫu | Tạo bộ câu mẫu (đổi "AI" nếu không dùng AI thật) |
| 1. Thêm Ảnh Minh Họa Cho Từ Vựng: | 1. Chọn ảnh |
| Tải ảnh từ máy tính / Dán link ảnh online (https://...) | Chọn ảnh từ máy / Dán link ảnh |
| 3. Từ Vựng Đáp Án Đúng (Tiếng Anh): | Từ tiếng Anh |
| Nghĩa TV: Trường học (tuỳ chọn) | Nghĩa tiếng Việt (không bắt buộc) |
| Lưu Câu Đố (Tiếp tục tạo câu khác) | Lưu và tạo câu mới |
| Bắt Đầu Chơi Từ Đầu ➔ | Chơi từ đầu |
| Lược bỏ hết bài / Khôi phục mẫu | Xoá tất cả / Khôi phục bài mẫu |

### Xếp hạng và hộp thoại
| Hiện tại | Đổi thành |
|---|---|
| Bảng Vàng Vinh Danh Học Sinh Xuất Sắc + mô tả dài | Xếp hạng: "Xếp theo thời gian học, số bài xong và số ngày học liên tục." |
| Bé Siêu Nhân (Bạn) | Bạn |
| ✨ AI Lesson Creator (nhãn) | Xoá |
| Thêm Bài Học & Mẫu Câu Mới + mô tả | Thêm bài học |
| Tạo Trò Chơi Baamboozle Ngay! | Lưu bài học |
| Hủy Bỏ | Huỷ |

Lỗi và trạng thái trống phải chỉ rõ việc cần làm, ví dụ: "Chưa có ảnh. Chọn một ảnh để bắt đầu." / "Không tải được ảnh này. Thử ảnh khác hoặc dán link mới."

---

## 9. Truy cập và thiết bị

- Vùng bấm ≥ 48×48px, cách nhau ≥ 8px.
- Viền focus rõ: `outline: 4px solid var(--blue); outline-offset: 3px;`.
- Mọi nút chỉ có icon phải có `aria-label`. Ảnh có `alt` bằng từ tiếng Anh.
- Cho phép zoom (đã bỏ khoá ở mục 1).
- Chạy tốt từ 360px. Bảng và nội dung rộng cuộn trong khung riêng, không làm cả trang cuộn ngang.
- Có nút nghe (loa lớn) ở mọi nơi có từ vựng. Giữ Web Speech API.
- Tôn trọng `prefers-reduced-motion`.

---

## 10. Danh sách kiểm tra "AI slop"

- [ ] Còn gradient nào (nền, chữ, nút) không? Bỏ.
- [ ] Còn nhãn IN HOA nhỏ phía trên tiêu đề không? Bỏ.
- [ ] Còn mũi tên ➔ ở cuối nút không? Bỏ.
- [ ] Mọi khối vẫn cùng một độ bo, cùng một bóng? Phân cấp lại.
- [ ] Còn thẻ chỉ để trang trí không? Bỏ.
- [ ] Còn câu quảng cáo ("HOT NHẤT", "MỚI ĐỘC ĐÁO", "Vui Từng Giây") không? Bỏ.
- [ ] Còn mô tả kỹ thuật ("AI sẽ tự động phân tích…", "database") không? Viết lại thành việc bé làm.
- [ ] Còn "AI" trên chức năng không phải AI thật không? Đổi tên.
- [ ] Còn emoji làm icon giao diện không? Thay bằng SVG.
- [ ] Còn chữ dưới 16px không? Tăng.
- [ ] Còn nền chuyển động, kính mờ, hiệu ứng hover mọi thẻ không? Bỏ.
- [ ] Còn tiêu đề tô màu riêng một từ không? Bỏ.
- [ ] Còn Chữ Hoa Đầu Mỗi Từ không? Sửa.
- [ ] Che logo đi, có nhận ra đây là game tiếng Anh cho trẻ tiểu học Việt Nam không? Nếu không, Robot Kha và nội dung chưa đủ riêng.

---

## 11. Ràng buộc kỹ thuật (không được phá)

- Giữ cấu trúc: `index.html`, `styles.css`, `app.js`. Không thêm framework, không thêm bước build.
- Giữ nguyên **mọi `id`**, mọi `data-*` (`data-target`, `data-game`, `data-skill`, `data-speed`), tên hàm trong `onclick="..."` và tên khoá `localStorage`.
- Không đổi logic điểm, XP, streak, lưu câu đố, phát âm.
- Nếu đổi tên class mà `app.js` dùng (`querySelector`, `classList`, chuỗi HTML tạo động) thì phải sửa cả hai nơi. Cách an toàn: giữ tên class cũ, viết lại kiểu dáng của nó.
- Các `style="display:none"` mà JS bật/tắt và `style="width:…%"` do JS cập nhật thì giữ nguyên.
- Mỗi lần sửa `styles.css`, tăng số ở `styles.css?v=…` trong `index.html` để trình duyệt tải lại.
- Phải chạy được khi mở trực tiếp `index.html` và qua `python -m http.server 8080`.

---

## 12. Thứ tự làm

1. **Đọc và kiểm kê** (chưa sửa): liệt kê id, class, `data-*`, hàm `onclick`, các chuỗi HTML tạo trong `app.js`.
2. **Nền tảng**: biến CSS (mục 3, 4, 6), xoá `.mesh-bg`/blob, bỏ `backdrop-filter`, sửa viewport, đổi phông.
3. **Thành phần**: thẻ, 3 loại nút, ô nhập, modal, `.back-btn` dùng chung, icon SVG.
4. **Header và điều hướng**: gọn header, đổi tên tab, thanh tab đáy trên điện thoại.
5. **Trang chủ**: bỏ hero, dòng chào + Robot Kha, nút lớp, lưới trò chơi bất đối xứng, khu "Dành cho thầy cô".
6. **Đấu đội**, sau đó **Đoán hình + Soạn câu đố**.
7. **Chơi một mình** (4 game) và **Xếp hạng**.
8. **Robot Kha** và trạng thái đúng/sai/hoàn thành.
9. **Viết lại nội dung** (mục 8), kể cả các chuỗi trong `app.js`.
10. **Kiểm tra**: 1440px, 1024px, 390px; bàn phím; không có lỗi console; chơi thử một vòng mỗi game; nhờ 2–3 bé dùng thử.

**Tuỳ chọn, chỉ làm khi bạn đồng ý:** gộp tab "Chơi một mình" với thẻ trên trang chủ để không có hai đường vào cùng một game; thêm mã PIN cho phần soạn bài (chỉ để tránh bấm nhầm, không phải bảo mật).
