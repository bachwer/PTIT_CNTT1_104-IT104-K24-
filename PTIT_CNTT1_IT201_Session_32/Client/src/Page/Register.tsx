import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/authSlice.tsx";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(registerUser({ email, password }));
        navigate("/login", { state: { fromRegister: true } });
    };

    return (
        <div>
            <h2>Đăng ký</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Nhập email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Nhập mật khẩu..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
}