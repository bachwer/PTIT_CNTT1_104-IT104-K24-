import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type {RootState} from "../store";
import { loginUser } from "../store/authSlice";
import { useLocation } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const registeredUser = useSelector(
        (state: RootState) => state.auth.registeredUser
    );
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Nếu vừa chuyển từ Register sang thì auto điền
    useEffect(() => {
        if (location.state?.fromRegister && registeredUser) {
            setEmail(registeredUser.email);
            setPassword(registeredUser.password);
        }
    }, [location.state, registeredUser]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
        alert("Đăng nhập thành công!");
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
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
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
}