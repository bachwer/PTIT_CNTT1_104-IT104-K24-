import React, { useState } from "react";
import {useNavigate} from "react-router-dom";



const data = [
    {id:1, email:"user@gmail.com", pass: "user123", role: ""},
    {id:2, email:"user1@gmail.com", pass: "user123", role: ""}

];





export default function LoginForm() {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "",
    });
    const [text, setText] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();



        const [dataFind] = data.filter((a) => a.email === form.email);

        if (!dataFind){
            console.log("sai");
            setText("Sai Mật Khẩu hoặc email");
            return
        }

        console.log("Dữ liệu đăng nhập:", dataFind);

        if (dataFind.pass !== form.password){
            console.log("sai");
            setText("Sai Mật Khẩu hoặc email");
            return
        }


        handle(form.email, form.role);

        setText("");


    };

    const handle = (email:string,  role:string) => {
        const Auth = true;

        navigate("/AccountEx6", {
            state: {Auth, email, role}
        })
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-96 gap-3 p-6 border rounded-lg shadow-md"
            >
                <h2 className="text-xl font-bold text-center">Đăng nhập</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Nhập email"
                    value={form.email}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu"
                    value={form.password}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                >
                    <option value="">-- Chọn quyền --</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>

                {text !== "" && (
                    <p className={"text-red-500"}>{text}</p>
                )
                }

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >

                    Đăng nhập
                </button>
            </form>
        </div>
    );
}