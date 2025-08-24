import React, {type ChangeEvent, useState} from "react";
import "./ModalPopup.css";
import type {user} from "./Ex5_Parent";

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    data?: user | null
    onSubmit: (data: user) => void;
    text:string;
}




const ModalPopup: React.FC<ModalProps> = ({isOpen, onClose, data, onSubmit, text}) => {
    if (!isOpen) return null;
        const [formData, setData] = useState<user>({
            id: data?.id ?? "",
            name: data?.name ?? "",
            date: data?.date ?? "",
            email: data?.email ?? "",
            status: data?.status ?? false,
        })


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
       const {name, value} = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>Modal</h3>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Mã Sinh Viên</label>
                        <input

                            type="text"
                            placeholder="Nhập mã sinh viên"
                            value={formData?.id ?? ""}
                            name={'id'}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="form-group">
                        <label>Tên Sinh Viên</label>
                        <input
                            type="text"
                            placeholder="Nhập tên sinh viên"
                            value={formData?.name ?? ""}
                            name={'name'}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="form-group">
                        <label>Ngày Sinh</label>
                        <input
                            type="date"
                            value={formData.date ? formData.date : ""}   // phải là YYYY-MM-DD
                            name="date"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Nhập email"
                            value={formData?.email ?? ""}
                            name={'email'}
                            onChange={handleChange}

                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={onClose}>Đóng</button>
                    <button onClick={() => {onSubmit(formData)}}>{text}</button>
                </div>
            </div>
        </div>
    );
};

export default ModalPopup;