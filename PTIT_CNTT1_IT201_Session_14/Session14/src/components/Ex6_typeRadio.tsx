import React, { useState,type FormEvent } from "react";

const GenderForm: React.FC = () => {
    const [gender, setGender] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert(`Giới tính bạn chọn là: ${gender}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Chọn giới tính</h2>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Nam"
                    checked={gender === "Nam"}
                    onChange={handleChange}
                />
                Nam
            </label>
            <br />

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Nữ"
                    checked={gender === "Nữ"}
                    onChange={handleChange}
                />
                Nữ
            </label>
            <br />

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Khác"
                    checked={gender === "Khác"}
                    onChange={handleChange}
                />
                Khác
            </label>
            <br />

            <button type="submit">Submit</button>
        </form>
    );
};

export default GenderForm;