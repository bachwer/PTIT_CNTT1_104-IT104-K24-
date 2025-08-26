import {type ChangeEvent, useState} from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    taskName: string;
    UpdateName: (name:string, input:string) => void;
}

export default function ModalU({ isOpen, onClose, taskName, UpdateName }: Props) {
    if (!isOpen) return null;
    const [text, setText] = useState<string>(taskName)

    const handle = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-bold mb-4">Cập nhật công việc</h2>

                <label className="block mb-2 font-medium">Tên công việc</label>
                <input
                    onChange={handle}
                    type="text"
                    defaultValue={text}
                    className="w-full border rounded px-3 py-2 mb-4"
                />

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
                        Hủy
                    </button>
                    <button  onClick={() => UpdateName(taskName, text)} className="px-4 py-2 bg-blue-600 text-white rounded">
                        Đồng ý
                    </button>
                </div>
            </div>
        </div>
    );
}