# Tóm tắt: Audit & Roadmap — English Master Web (bản gốc)

## 1. Vấn đề bảo mật nghiêm trọng
- Mật khẩu lưu dạng plaintext trong localStorage → phải chuyển hoàn toàn sang Firebase Authentication.
- Trang admin chỉ bảo vệ bằng mã PIN cứng trong JS (ai xem source cũng thấy) → cần gate bằng Firebase Auth + kiểm tra role ở phía server (Firestore Rules/Custom Claims).
- Toàn bộ dữ liệu (user, XP, streak, bài học) sống trong localStorage, Firebase chỉ là tùy chọn → phải biến Firestore thành nguồn dữ liệu chính, localStorage chỉ dùng cho UI preference không nhạy cảm.
- API key Gemini bị lộ qua đường gọi trực tiếp từ trình duyệt → xoá hoàn toàn, chỉ gọi qua `/api/generate-lesson` (key nằm ở biến môi trường server).

## 2. Kiến trúc: tách User App / Admin Console / Hạ tầng
- **Layer 1 (User):** chỉ chứa những gì một học viên được thấy/sửa về chính mình (bài học, flashcard, quiz, XP, hồ sơ...).
- **Layer 2 (Admin):** chỉ vào được khi role Firestore = "admin"; thống kê tổng, toggle bảo trì, quản lý tài khoản. Không chứa API key hay config Firebase.
- **Layer 3 (Hạ tầng):** biến môi trường server, Firestore Security Rules — không tồn tại trong JS chạy ở trình duyệt.

## 3. Định hướng UI/UX
Hệ thống giao diện "liquid glass" trắng-xanh dương, đồng nhất giữa toast, modal, tab chuyển động.

## 4. Các khoảng trống sản phẩm (so với Duolingo/Quizlet/Khan Academy)
Bao gồm nhiều đề xuất mở rộng: hệ thống XP/streak/badge, chatbot AI hỗ trợ học viên (kèm kênh nhắn tin riêng với admin), leaderboard, thư viện ảnh minh hoạ, sinh bài học bằng AI có trợ lý ở trang admin, popup chào mừng/đăng ký, chọn khối lớp (IELTS hoặc Tiểu học lớp 1–5) với thẻ kỹ năng riêng.

## 5. Các phần kỹ thuật bổ sung
- **Routing:** hệ thống URL dạng `#/lesson/:id`, `#/tieuhoc/lop:grade/:skill`... cho phép chia sẻ link trực tiếp đến từng bài/tab, có hàng đợi xử lý khi Firestore load bất đồng bộ.
- **Bảo mật mật khẩu:** thanh đo độ mạnh mật khẩu theo thời gian thực (4 mức), modal bắt buộc đổi mật khẩu khi admin cấp mật khẩu tạm, cài đặt bảo mật tự phục vụ trong hồ sơ.
- **Luyện phát âm:** dùng Web Speech API để ghi âm, so khớp với từ/câu mẫu bằng thuật toán Levenshtein, chấm điểm và thưởng XP (≥80% = xuất sắc, có confetti); phát âm mẫu bằng `speechSynthesis`.

---

*Đây là bản tóm tắt để tham khảo nhanh — bản gốc đầy đủ (563+ dòng, chi tiết từng schema Firestore, từng đoạn code) vẫn được giữ nguyên trong file bạn đã upload.*
