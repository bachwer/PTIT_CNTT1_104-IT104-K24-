import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
                🚫 Trang bạn tìm không tồn tại.
            </h1>

            <div className="flex gap-4">

                <button
                    onClick={() => navigate("/")}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Về trang chủ
                </button>


                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Quay lại
                </button>
            </div>
        </div>
    );
}