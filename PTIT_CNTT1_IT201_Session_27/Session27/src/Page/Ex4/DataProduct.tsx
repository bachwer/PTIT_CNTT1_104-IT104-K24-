
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products: Product[] = [
    { id: 1, name: "iPhone 15 Pro", price: 28990000, description: "Điện thoại Apple cao cấp, chip A17 Pro." },
    { id: 2, name: "Samsung Galaxy S24 Ultra", price: 25990000, description: "Màn hình Dynamic AMOLED 2X, camera 200MP." },
    { id: 3, name: "Xiaomi 14 Pro", price: 18990000, description: "Hiệu năng mạnh mẽ, sạc nhanh 120W." },
    { id: 4, name: "Oppo Find X6", price: 16990000, description: "Thiết kế đẹp, camera Hasselblad." },
    { id: 5, name: "Vivo X100", price: 15990000, description: "Chụp ảnh ban đêm xuất sắc, hiệu năng cao." },
    { id: 6, name: "Asus ROG Phone 8", price: 20990000, description: "Điện thoại gaming, pin trâu, màn hình 165Hz." },
    { id: 7, name: "Google Pixel 8 Pro", price: 23990000, description: "Chụp ảnh chân thực, AI xử lý thông minh." },
    { id: 8, name: "OnePlus 12", price: 17990000, description: "Sạc siêu nhanh, OxygenOS mượt mà." },
    { id: 9, name: "Realme GT 6", price: 12990000, description: "Hiệu năng mạnh, giá hợp lý." },
    { id: 10, name: "Sony Xperia 1 V", price: 25990000, description: "Màn hình 4K OLED, quay video chuyên nghiệp." },
    { id: 11, name: "Nokia X30", price: 9990000, description: "Thiết kế bền vững, pin trâu." },
    { id: 12, name: "Honor Magic 6 Pro", price: 19990000, description: "Camera AI, màn hình cong OLED." },
    { id: 13, name: "Huawei Mate 60 Pro", price: 22990000, description: "Không dùng Google nhưng cấu hình mạnh." },
    { id: 14, name: "Redmi Note 13 Pro+", price: 8990000, description: "Giá rẻ, hiệu năng ổn, camera 200MP." },
    { id: 15, name: "Motorola Edge 40 Pro", price: 16990000, description: "Màn hình 144Hz, hiệu năng Snapdragon 8 Gen 2." },
];