# 🎥 Hướng dẫn thêm Video vào Portfolio

## ✅ Đã hoàn thành:
- ✨ Tạo section Video mới giữa Projects và Contact
- ✨ Hỗ trợ YouTube, Vimeo và video file local
- ✨ Responsive design đẹp mắt
- ✨ Thêm menu "Video" vào navbar

## 🎬 Cách thêm video:

### 1. Thêm Video YouTube

Mở file: `src/app/data/profile.data.ts`

Tìm phần `videos:` và thêm/sửa video:

```typescript
videos: [
  {
    title: 'Tiêu đề video',
    description: 'Mô tả ngắn gọn',
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=VIDEO_ID',
    // HOẶC: url: 'https://youtu.be/VIDEO_ID'
  },
  // Thêm nhiều video...
]
```

**Lấy link YouTube:**
1. Vào video trên YouTube
2. Click "Share" (Chia sẻ)
3. Copy link (dạng: `https://youtu.be/xxx` hoặc `https://www.youtube.com/watch?v=xxx`)
4. Paste vào `url`

### 2. Thêm Video Vimeo

```typescript
{
  title: 'Video Vimeo',
  description: 'Mô tả',
  type: 'vimeo',
  url: 'https://vimeo.com/VIDEO_ID'
}
```

### 3. Thêm Video File Local (.mp4, .webm)

**Bước 1:** Copy file video vào thư mục:
```
public/assets/videos/
```

**Bước 2:** Thêm vào data:
```typescript
{
  title: 'Video local',
  description: 'Mô tả',
  type: 'file',
  url: 'assets/videos/my-video.mp4'
}
```

## 📝 Ví dụ hoàn chỉnh:

```typescript
videos: [
  {
    title: 'Một ngày của Khôi tại FPT',
    description: 'Review cuộc sống sinh viên Marketing',
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    title: 'Hậu trường buổi chụp ảnh',
    description: 'Behind the scenes',
    type: 'youtube', 
    url: 'https://youtu.be/dQw4w9WgXcQ'
  },
  {
    title: 'Video giới thiệu bản thân',
    description: 'Video tự quay',
    type: 'file',
    url: 'assets/videos/intro.mp4'
  }
]
```

## 🎨 Tính năng:

- ✅ Hiển thị dạng grid responsive (2 cột desktop, 1 cột mobile)
- ✅ Tỷ lệ 16:9 chuẩn cho video
- ✅ Hover effect đẹp mắt
- ✅ Tự động nhúng YouTube/Vimeo player
- ✅ Hỗ trợ controls cho video file
- ✅ Smooth scroll từ navbar

## 🔧 Tùy chỉnh:

### Xóa video:
Xóa object video trong array `videos: []`

### Ẩn section video:
Comment dòng trong `app.html`:
```html
<!-- <app-videos></app-videos> -->
```

### Thay đổi vị trí:
Di chuyển `<app-videos></app-videos>` trong file `app.html`

## 📹 Định dạng video được hỗ trợ:

- **YouTube**: Tất cả các định dạng link
- **Vimeo**: Link trực tiếp
- **File local**: .mp4, .webm, .ogg

## 💡 Tips:

- Video YouTube/Vimeo tải nhanh hơn file local
- Nên dùng YouTube cho nhiều video
- File local tốt cho 1-2 video ngắn
- Kích thước file video nên < 50MB

---

**Sau khi sửa file `profile.data.ts`, website sẽ tự động reload!** 🚀

