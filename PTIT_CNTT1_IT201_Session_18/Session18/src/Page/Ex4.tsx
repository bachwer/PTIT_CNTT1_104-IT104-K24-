import { useState, useCallback, type ChangeEvent } from "react";

export default function ColorPicker() {

    const [color, setColor] = useState<string>("");


    const handleChangeColor = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }, []);


    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Color Picker</h2>

            {/* Input chọn màu */}
            <input type="color" onChange={handleChangeColor} />

            {/* Hiển thị màu đã chọn */}
            <div style={{ marginTop: "20px" }}>
                {color === "" ? (
                    <p>Chưa chọn màu nào</p>
                ) : (
                    <div>
                        <p>Màu đã chọn: <strong>{color}</strong></p>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                margin: "10px auto",
                                border: "1px solid #000",
                                backgroundColor: color,
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}