# Kế hoạch đổi giao diện: English Kha Master

Dành cho: học sinh tiểu học lớp 1–5 (6–11 tuổi), chơi trên máy tính, tablet và điện thoại.
Người dùng thứ hai: giáo viên / phụ huynh tạo câu đố (AI Studio).

---

## 1. Giao diện hiện tại đang sai ở đâu

Nhìn ảnh chụp màn hình, các vấn đề chính là:

| Vấn đề | Biểu hiện | Vì sao là lỗi |
|---|---|---|
| Chữ quá nhỏ, quá nhạt | Mô tả, nhãn, tên tab cỡ khoảng 10–12px, màu xám xanh nhạt trên nền trắng | Trẻ 6–11 tuổi đọc chậm hơn người lớn. Chữ nhạt khó đọc ngay cả với người lớn |
| Mọi thứ là thẻ bo tròn giống nhau | Header, tiêu đề, form đều là thẻ trắng, cùng độ bo góc, cùng bóng mờ | Không có thứ tự ưu tiên. Mắt không biết nhìn vào đâu trước |
| Nền gradient pastel xanh–hồng | Nền loang màu, chữ tiêu đề đổ gradient | Đây là dấu hiệu quen thuộc của giao diện do AI sinh ra |
| Emoji làm icon | 🎨 ✨ 🎯 🚀 🎮 mỗi chỗ một kiểu, kích thước khác nhau | Không đồng nhất, nhìn rẻ tiền, hiển thị khác nhau tuỳ hệ điều hành |
| Nhãn IN HOA cỡ siêu nhỏ | "AI GAME CREATOR & VISUAL ARENA", "KIDS" | Chữ trang trí, không giúp người dùng hiểu thêm điều gì |
| Nhiều kiểu nút lẫn lộn | Nút xanh lá, nút xanh dương, nút tím gradient, nút viền trắng | Không rõ nút nào là chính |
| Trộn khu chơi và khu soạn bài | Bé đang chơi nhưng thấy form "Tạo câu đố mới" | Trẻ không cần và không hiểu phần này |
| Quá nhiều thứ ở header | Logo, 3 nút, streak, XP, âm thanh, avatar, rồi 6 tab | Trẻ bị choáng, phần chính bị đẩy xuống |
| Chữ Hoa Đầu Mỗi Từ | "Trò Chơi Tiếng Anh Tiểu Học Lớp 1 – 5", "Bảng Xếp Hạng & Điểm Danh" | Tiếng Việt viết hoa theo kiểu tiếng Anh, đọc không tự nhiên |
| Lỗi nhỏ nhưng lộ | Form đánh số "1." rồi nhảy sang "3."; viền hồng bên trái thẻ; hai nút to lơ lửng bên phải, không liên quan tới form | Nhìn vào là biết chưa ai xem lại |
| Nội dung dài dòng | "Tải ảnh hoặc chọn ảnh có sẵn, từ vựng bên dưới. AI sẽ tự động phân tích và xóa từ/chữ cái để học sinh vừa nhìn ảnh vừa điền câu chuẩn xác!" | Trẻ không đọc hết. Giáo viên cũng không cần |

---

## 2. Hướng thiết kế: "Sổ bài lớp học có sticker"

Ý tưởng: giao diện giống một cuốn vở và bảng lớp, với màu đặc, viền dày, nút nổi khối như bàn phím game. Không dùng gradient, không dùng kính mờ, không dùng bóng mờ.

Điều này hợp với trẻ em vì:
- Màu đặc, viền rõ giúp nhìn ra nút bấm ngay.
- Nút "nhấn xuống" có cảm giác vật lý, giống game thật.
- Không giống mẫu SaaS/dashboard mà AI hay sinh ra.

**Một điểm nhấn duy nhất: linh vật (mascot).** Một nhân vật do chính bạn chọn hoặc vẽ (ví dụ một chú cáo hoặc gấu tên Kha). Nhân vật này xuất hiện ở logo, màn hình chào, khi trả lời đúng/sai, khi hết bài. Mọi thứ khác giữ yên tĩnh để linh vật nổi bật.

---

## 3. Bảng màu

Dùng màu đặc, ít màu, mỗi màu có một việc.

| Tên | Mã | Dùng cho |
|---|---|---|
| Mực | `#1F2A44` | Chữ chính, viền dày quanh thẻ và nút |
| Giấy | `#F7F9FC` | Nền trang (một màu phẳng, không gradient) |
| Xanh bảng | `#17594A` | Thanh đầu trang, khu tiêu đề |
| Vàng phấn | `#FFC83D` | Nút chính "Chơi ngay", điểm XP |
| Đỏ cà chua | `#F0453A` | Streak, trả lời sai, cảnh báo |
| Xanh dương | `#2F80ED` | Nút phụ, liên kết, trạng thái đang chọn |

Quy tắc:
- Chữ chính trên nền sáng luôn là Mực `#1F2A44` (không dùng xám nhạt).
- Tỉ lệ tương phản chữ/nền tối thiểu 4.5:1.
- Mỗi trò chơi có một màu riêng lấy từ bảng trên (Baamboozle = xanh dương, Mini-game = vàng, v.v.) để trẻ nhận ra bằng màu.
- Không dùng gradient làm nền, làm chữ hay làm nút.

---

## 4. Chữ

Chọn font hỗ trợ đầy đủ dấu tiếng Việt (kiểm tra kỹ dấu ở, ẫ, ộ, ữ).

| Vai trò | Font (Google Fonts) | Ghi chú |
|---|---|---|
| Tiêu đề, nút, tên game | **Baloo 2** (700–800) | Tròn, vui, có tiếng Việt |
| Nội dung, hướng dẫn | **Lexend** (400–500) | Thiết kế để dễ đọc, giãn chữ rộng |

Thay thế nếu muốn: **Be Vietnam Pro** cho nội dung.

Thang cỡ chữ (không có chữ nào dưới 16px):

| Loại | Cỡ |
|---|---|
| Nội dung, nhãn | 16–18px |
| Nút | 18–20px |
| Tiêu đề trang | 32–40px |
| Từ vựng trong game | 48–72px |

Quy tắc:
- Viết hoa theo kiểu tiếng Việt: chỉ hoa chữ đầu câu. Ví dụ "Bảng xếp hạng", không phải "Bảng Xếp Hạng".
- Không dùng chữ IN HOA cho nhãn nhỏ.
- Không tô màu riêng một từ trong tiêu đề.
- Mỗi dòng nội dung tối đa khoảng 60 ký tự.

---

## 5. Bố cục

### 5.1. Tách hai khu vực

**Khu của bé** (mặc định): chỉ có chơi, điểm, phần thưởng.
**Khu giáo viên** (nút nhỏ "Dành cho giáo viên" ở góc, có thể đặt mã PIN): toàn bộ phần AI Studio, Thêm bài học, tạo câu đố.

Trẻ không bao giờ nhìn thấy form soạn bài.

### 5.2. Header gọn

Chỉ giữ:
- Trái: logo + linh vật.
- Phải: streak (số ngày), XP, nút âm thanh, avatar.

Bỏ "Thêm bài học" và "Điểm danh" khỏi header. Điểm danh chuyển thành một thẻ trên trang chủ khi có phần thưởng chưa nhận.

### 5.3. Điều hướng

- Máy tính: thanh tab ngang, tối đa 4 mục.
- Điện thoại/tablet: **thanh tab dưới đáy màn hình**, icon lớn kèm chữ.

Gộp 6 mục thành 4:

| Hiện tại | Đổi thành |
|---|---|
| Khám phá bài học | Bài học |
| Trò chơi Baamboozle (đấu đội) | Đấu đội |
| Mini-games cá nhân | Chơi một mình |
| Bảng xếp hạng & điểm danh | Xếp hạng |
| AI Studio (ảnh & mẫu câu) | Chuyển vào khu giáo viên |

### 5.4. Trang chủ của bé

Không chia thành các thẻ giống hệt nhau. Dùng các ô game có kích thước khác nhau, mỗi ô một màu:

```
+-------------------------------------------+
| [Logo+mascot]        🔥3   ⚡630   🔊  (avatar) |   <- xanh bảng
+-------------------------------------------+

  Chào Bé Siêu Nhân! Hôm nay chơi gì?

+---------------------+  +----------------+
|                     |  |  Đoán hình     |
|   TIẾP TỤC BÀI     |  |  (xanh dương)  |
|   Unit 3: Animals   |  +----------------+
|   [ Chơi tiếp ]     |  +----------------+
|      (vàng)         |  |  Đấu đội       |
+---------------------+  |  (đỏ)          |
                         +----------------+
+---------------------+  +----------------+
|  Chơi một mình      |  |  Xếp hạng      |
+---------------------+  +----------------+
```

- Ô lớn nhất là "Tiếp tục bài đang học". Đây là hành động chính.
- Mỗi ô có một hình minh hoạ riêng, không dùng chung emoji.
- Căn trái toàn bộ. Không căn giữa tiêu đề rồi căn trái nội dung.

### 5.5. Màn hình game

- Từ/hình chiếm gần hết màn hình.
- Chỉ một nút chính ở dưới cùng, rộng, cao 56px trở lên.
- Nút thoát nhỏ ở góc trái trên, có nhãn chữ "Thoát".

### 5.6. Form tạo câu đố (khu giáo viên)

- Đánh số lại đúng thứ tự 1, 2, 3 (hoặc bỏ số nếu không cần).
- Chia làm 3 bước rõ: **Chọn ảnh → Nhập từ → Xem trước & lưu**.
- Hai nút "Lưu" và "Chơi thử" đặt cố định ở cuối form, không lơ lửng bên phải.
- Chọn loại câu đố bằng hai thẻ lớn có ảnh xem trước, không dùng radio nhỏ.

---

## 6. Thành phần giao diện

### 6.1. Thẻ

```css
.card {
  background: #fff;
  border: 3px solid var(--ink);
  border-radius: 16px;          /* dùng 3 mức: 12 / 16 / 24, không dùng một mức cho tất cả */
  box-shadow: 0 4px 0 var(--ink); /* bóng cứng, không mờ */
}
```

- Ô game lớn dùng bo 24px, thẻ thông tin dùng 12px. Phân cấp bằng kích thước, không chỉ bằng độ mờ.
- Bỏ viền màu bên trái thẻ, bỏ hiệu ứng kính mờ (backdrop-filter).

### 6.2. Nút

```css
.btn {
  min-height: 52px;
  padding: 0 28px;
  font: 800 20px/1 "Baloo 2", sans-serif;
  border: 3px solid var(--ink);
  border-radius: 14px;
  box-shadow: 0 5px 0 var(--ink);
  transition: transform .08s, box-shadow .08s;
}
.btn:active { transform: translateY(5px); box-shadow: 0 0 0 var(--ink); }
.btn-primary   { background: var(--chalk-yellow); color: var(--ink); }
.btn-secondary { background: #fff; color: var(--ink); }
.btn-blue      { background: var(--blue); color: #fff; }
```

Chỉ có **3 loại nút**: chính (vàng), phụ (trắng), và nhấn mạnh (xanh dương). Mỗi màn hình chỉ có một nút chính.

### 6.3. Icon

- Bỏ toàn bộ emoji dùng làm icon giao diện.
- Dùng **một bộ icon** thống nhất (Lucide hoặc Phosphor, nét dày 2.5px), hoặc tự vẽ SVG cho các mục chính.
- Emoji chỉ được dùng trong nội dung học (ví dụ hình con vật, trái cây) và phần thưởng.

### 6.4. Huy hiệu và nhãn

- Bỏ nhãn "KIDS", "AI GAME CREATOR & VISUAL ARENA".
- Streak và XP: icon + số to (24px trở lên), bỏ chữ "Ngày", "XP" nhỏ bên cạnh nếu icon đã rõ nghĩa.

### 6.5. Trạng thái đúng / sai

| Trạng thái | Cách thể hiện |
|---|---|
| Đúng | Nền xanh lá nhạt, viền xanh lá, linh vật nhảy, âm "ting", +10 XP bay lên |
| Sai | Rung nhẹ 1 lần, nền đỏ nhạt, chữ "Thử lại nhé", hiện gợi ý chữ cái đầu |
| Hoàn thành | Pháo giấy một lần, linh vật ăn mừng, nút "Chơi tiếp" |

Không chỉ dùng màu để báo đúng/sai. Luôn thêm icon hoặc chữ.

---

## 7. Chuyển động

Chuyển động chỉ để trả lời hành động của bé.

**Giữ:**
- Nút nhấn xuống khi bấm.
- Đáp án đúng nhảy lên, đáp án sai rung nhẹ.
- Số XP đếm tăng lên.
- Pháo giấy một lần khi hoàn thành bài.

**Bỏ:**
- Hiệu ứng mờ dần và trượt lên khi cuộn cho từng khối.
- Thẻ nổi lên khi rê chuột.
- Nền chuyển động, hạt lấp lánh.

Tôn trọng cài đặt của thiết bị:

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

---

## 8. Viết lại nội dung

Câu chữ ngắn, động từ rõ ràng, dùng đúng một tên cho một hành động.

| Hiện tại | Đổi thành |
|---|---|
| English Kha Master — Trò Chơi Tiếng Anh Tiểu Học Lớp 1 – 5 | English Kha Master (bỏ dòng phụ, hoặc "Tiếng Anh lớp 1–5") |
| AI Đoán Hình & Điền Mẫu Câu Tiếng Anh | Đoán hình, điền từ |
| Tải ảnh hoặc chọn ảnh có sẵn, từ vựng bên dưới. AI sẽ tự động phân tích… | Nhìn hình, gõ từ còn thiếu. |
| Bắt Đầu Chơi Từ Đầu → | Chơi ngay |
| Lưu Câu Đố (Tiếp tục tạo câu khác) | Lưu và tạo câu mới |
| Quay lại Trang Chủ | Trang chủ (kèm icon mũi tên quay lại) |
| Chơi Thử Thách | Chơi thử |
| AI Sinh Nhanh Bộ Câu Hỏi Mẫu | Tạo câu hỏi mẫu |
| Tài ảnh từ máy tính / Dán link ảnh online (https://...) | Chọn ảnh từ máy / Dán link ảnh |
| Ví dụ: School, Doctor, Beach… | Từ tiếng Anh (ví dụ: school) |
| Nghĩa TV: Trường học (tuỳ chọn) | Nghĩa tiếng Việt (không bắt buộc) |
| Mẫu Câu Khuyết Từ Với AI | Câu điền từ (AI viết giúp) |
| Bé Siêu Nhân | Tên của bé (do bé tự đặt) |

Lỗi và trạng thái trống cần chỉ rõ việc phải làm:
- Chưa có ảnh: "Chọn một ảnh để bắt đầu."
- Ảnh tải lỗi: "Không tải được ảnh này. Thử ảnh khác hoặc dán link mới."
- Chưa có bài: "Chưa có bài nào. Nhờ thầy cô thêm bài nhé."

---

## 9. Khả năng truy cập và thiết bị

- Vùng bấm tối thiểu **48×48px**, khoảng cách giữa các nút tối thiểu 8px.
- Có viền focus rõ khi dùng bàn phím: `outline: 4px solid var(--blue); outline-offset: 3px;`
- Nút âm thanh có nhãn chữ khi rê chuột / đọc màn hình (`aria-label`).
- Mọi hình ảnh có `alt` bằng từ tiếng Anh, để trình đọc màn hình đọc được.
- Chạy tốt từ 360px chiều rộng. Bảng và nội dung rộng cuộn trong khung riêng, không làm cả trang cuộn ngang.
- Cho phép bé nghe phát âm từ ở mọi chỗ có từ vựng (nút loa lớn cạnh từ).

---

## 10. Danh sách kiểm tra để tránh "AI slop"

Trước khi coi là xong, tự hỏi từng mục:

- [ ] Có gradient làm nền, chữ hoặc nút không? → bỏ.
- [ ] Có nhãn IN HOA nhỏ phía trên tiêu đề không? → bỏ.
- [ ] Có mũi tên "→" gắn sau mọi nút không? → bỏ.
- [ ] Mọi khối có cùng bo góc, cùng bóng mờ không? → đổi theo cấp bậc.
- [ ] Có thẻ nào chỉ để trang trí, không chứa nội dung không? → bỏ.
- [ ] Có dòng chữ nào giải thích công nghệ ("AI sẽ tự động phân tích…") thay vì nói việc bé làm không? → viết lại.
- [ ] Có emoji làm icon giao diện không? → thay bộ icon thống nhất.
- [ ] Có chữ nào dưới 16px không? → tăng.
- [ ] Có Hiệu Ứng Hover Trên Mọi Thẻ hoặc hiệu ứng xuất hiện khi cuộn không? → bỏ.
- [ ] Tiêu đề có tô màu riêng một từ không? → bỏ.
- [ ] Có đánh số, viền, đường kẻ chỉ để trang trí không? → bỏ.
- [ ] Nếu che logo đi, người lạ có nhận ra đây là trang dành cho trẻ em Việt Nam học tiếng Anh không? → nếu không, thêm linh vật và nội dung riêng.

---

## 11. Thứ tự làm (từ dễ đến khó)

1. **Đổi token**: khai báo biến CSS cho màu, font, bo góc, bóng. Xoá gradient và backdrop-filter.
2. **Đổi font và cỡ chữ**: Baloo 2 + Lexend, nâng tối thiểu 16px, sửa lại cách viết hoa tiếng Việt.
3. **Làm lại nút và thẻ** theo mục 6.
4. **Thay emoji bằng bộ icon** thống nhất.
5. **Gọn header, gộp tab, thêm thanh tab dưới đáy** cho điện thoại.
6. **Tách khu giáo viên** khỏi khu của bé.
7. **Làm lại trang chủ** theo mục 5.4.
8. **Thêm linh vật** và trạng thái đúng / sai / hoàn thành.
9. **Viết lại nội dung** theo mục 8.
10. **Kiểm tra** trên điện thoại 360px, bàn phím, và với 2–3 bé thật. Quan sát bé bấm vào đâu đầu tiên và bé có đọc được chữ không.

---

## 12. Câu lệnh gợi ý để đưa cho AI viết code

> Viết lại giao diện của trang web học tiếng Anh cho trẻ lớp 1–5 theo file UI-REDESIGN.md. Giữ nguyên logic JavaScript hiện có, chỉ đổi HTML/CSS. Dùng biến CSS cho màu, font Baloo 2 và Lexend, nút và thẻ có viền dày 3px màu #1F2A44 và bóng cứng, không dùng gradient, không dùng emoji làm icon giao diện, không có chữ nào dưới 16px. Tách phần AI Studio thành khu giáo viên riêng. Làm từng bước theo mục 11 và cho tôi xem kết quả sau mỗi bước.
