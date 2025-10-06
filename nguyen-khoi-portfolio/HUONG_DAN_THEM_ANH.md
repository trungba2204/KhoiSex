# 🖼️ Hướng dẫn thêm ảnh profile

## ⚡ CÁCH NHANH NHẤT (Dùng script tự động)

### Bước 1: Lưu ảnh từ chat
- Click chuột phải vào ảnh trong chat
- Chọn "Save Image As..." 
- Lưu vào **Downloads** hoặc **Desktop** với tên bất kỳ

### Bước 2: Mở Terminal và chạy lệnh

```bash
cd /Users/quanden/Downloads/KhoiBeo/nguyen-khoi-portfolio

# Nếu ảnh ở Downloads:
./copy-image.sh ~/Downloads/[tên-file-ảnh].jpg

# Nếu ảnh ở Desktop:
./copy-image.sh ~/Desktop/[tên-file-ảnh].jpg

# HOẶC kéo thả file vào Terminal:
./copy-image.sh [kéo file ảnh vào đây rồi Enter]
```

### Bước 3: Refresh trình duyệt
- Mở http://localhost:4200
- Nhấn Cmd+R (Mac) hoặc Ctrl+R (Windows/Linux)
- Ảnh sẽ hiển thị! ✨

---

## 📋 CÁCH THỦ CÔNG (Nếu script không chạy)

### Bước 1: Lưu ảnh
- Lưu ảnh từ chat về máy với tên `khoi-profile.jpg`

### Bước 2: Copy ảnh
Copy ảnh vào thư mục:
```
/Users/quanden/Downloads/KhoiBeo/nguyen-khoi-portfolio/public/assets/images/
```

**Hoặc dùng Finder:**
1. Mở Finder
2. Nhấn Cmd+Shift+G
3. Paste đường dẫn: `/Users/quanden/Downloads/KhoiBeo/nguyen-khoi-portfolio/public/assets/images/`
4. Copy ảnh vào đây

### Bước 3: Đổi tên
Đảm bảo file ảnh có tên chính xác: `khoi-profile.jpg`

### Bước 4: Refresh
Refresh trình duyệt tại http://localhost:4200

---

## ✨ Tính năng ảnh

Khi ảnh hiển thị, nó sẽ có:
- ✅ Tự động crop focus vào mặt và đầu
- ✅ Border radius morphing animation đẹp mắt
- ✅ Shadow và filter tự động
- ✅ Responsive cho mobile
- ✅ Hiệu ứng gradient background

---

## 🔍 Kiểm tra ảnh đã được copy chưa

Chạy lệnh này để kiểm tra:

```bash
ls -lh /Users/quanden/Downloads/KhoiBeo/nguyen-khoi-portfolio/public/assets/images/
```

Nếu thấy file `khoi-profile.jpg` là OK! ✅

---

## ❓ Nếu vẫn không hiển thị

1. **Kiểm tra tên file**: Phải đúng `khoi-profile.jpg` (chữ thường, không dấu)
2. **Kiểm tra định dạng**: Chỉ hỗ trợ .jpg, .jpeg, .png
3. **Refresh hard**: Nhấn Cmd+Shift+R (Mac) hoặc Ctrl+Shift+R (Windows)
4. **Check console**: Mở DevTools (F12) → Console xem có lỗi gì không

---

## 📝 Ghi chú

- Hiện tại website đang hiển thị placeholder "NK" vì chưa có ảnh
- Sau khi copy ảnh đúng, nó sẽ tự động chuyển sang hiển thị ảnh thật
- Không cần restart server Angular
