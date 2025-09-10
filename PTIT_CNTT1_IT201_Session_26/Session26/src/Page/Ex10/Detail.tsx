// src/pages/ProductDetail.tsx
import { Link, useSearchParams} from "react-router-dom";
import { products } from "./Product.tsx";

export default function ProductDetail() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");





    const productId = id ? parseInt(id) : 0;



    const product = products.find((p) => p.id === productId);

    if (!product) {
        return (
            <div className="p-6">
                <h1 className="text-xl font-semibold mb-4">Không tìm thấy sản phẩm</h1>
                <Link to="/" className="text-blue-600 underline">← Quay lại danh sách</Link>
            </div>
        );
    }

    const formatVND = (n: number) =>
        n.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Link to="/ListProduct" className="text-blue-600 underline">← Quay lại danh sách</Link>

            <div className="mt-5 grid md:grid-cols-2 gap-6 items-start">
                <img
                    src={product.imageLink}
                    alt={product.name}
                    className="w-full rounded-lg border"
                />

                <div className="space-y-3">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <p className="text-xl font-semibold text-rose-600">
                        {formatVND(product.price)}
                    </p>

                    <div className="text-sm text-gray-600">
                        <p><strong>ID:</strong> {product.id}</p>
                        {/* Thêm thông số kỹ thuật khác ở đây nếu cần */}
                    </div>

                    <button
                        className="mt-2 rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-500"
                        onClick={() => alert("Đã thêm vào giỏ hàng (demo)")}
                    >
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    );
}