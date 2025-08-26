interface Props {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (name:string) => void;
    taskName: string;
}

export default function ConfirmDelete({ isOpen, onClose, onConfirm, taskName }: Props) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg w-[400px] shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold mb-4">Xác nhận</h2>
                <p className="mb-6 text-gray-700">
                    <span className="text-red-500 font-bold">!</span>{" "}
                    Bạn có xác nhận xóa công việc <b>{taskName}</b> không?
                </p>

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
                        Hủy
                    </button>
                    <button
                        onClick={() => {
                            onConfirm(taskName);
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Đồng ý
                    </button>
                </div>
            </div>
        </div>
    );
}