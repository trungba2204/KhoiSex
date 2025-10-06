#!/bin/bash

# Script để copy ảnh profile vào project
# Sử dụng: ./copy-image.sh [đường-dẫn-đến-ảnh]

TARGET_DIR="/Users/quanden/Downloads/KhoiBeo/nguyen-khoi-portfolio/public/assets/images"
TARGET_FILE="$TARGET_DIR/khoi-profile.jpg"

echo "🖼️  Script Copy Ảnh Profile"
echo "=========================="
echo ""

if [ $# -eq 0 ]; then
    echo "❌ Lỗi: Bạn chưa chỉ định đường dẫn ảnh"
    echo ""
    echo "Cách sử dụng:"
    echo "  ./copy-image.sh ~/Downloads/anh-cua-toi.jpg"
    echo ""
    echo "Hoặc kéo thả file ảnh vào Terminal sau lệnh:"
    echo "  ./copy-image.sh [kéo file vào đây]"
    echo ""
    exit 1
fi

SOURCE_FILE="$1"

# Kiểm tra file có tồn tại không
if [ ! -f "$SOURCE_FILE" ]; then
    echo "❌ Lỗi: Không tìm thấy file ảnh: $SOURCE_FILE"
    exit 1
fi

# Tạo thư mục nếu chưa có
mkdir -p "$TARGET_DIR"

# Copy file
echo "📂 Copy ảnh từ: $SOURCE_FILE"
echo "📍 Đến: $TARGET_FILE"
echo ""

cp "$SOURCE_FILE" "$TARGET_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Copy ảnh thành công!"
    echo "🌐 Refresh trình duyệt http://localhost:4200 để xem ảnh"
    echo ""
    
    # Hiển thị thông tin file
    echo "📊 Thông tin ảnh:"
    ls -lh "$TARGET_FILE"
else
    echo "❌ Lỗi khi copy ảnh"
    exit 1
fi

