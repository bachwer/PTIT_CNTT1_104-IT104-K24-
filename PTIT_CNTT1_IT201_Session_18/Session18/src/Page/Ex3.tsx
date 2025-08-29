import { useState, useCallback, type FormEvent, type ChangeEvent } from "react";

export default function LoginForm() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault(); // Ngăn reload trang
            console.log("Email:", formData.email);
            console.log("Password:", formData.password);
        },
        [formData]
    );


    return (
        <div style={{ maxWidth: "300px", margin: "20px auto" }}>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}