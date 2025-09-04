
export default function WarningTailwind() {
    return (
        <div className="relative p-4 mb-4 text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-lg">
            <strong className="font-bold">Cảnh báo</strong>
            <span className="block">Lỗi kết nối máy chủ.</span>
            <button
                className="absolute top-2 right-2 text-yellow-700 hover:text-yellow-900"
                aria-label="Close"
            >
                ✕
            </button>
        </div>
    );
}