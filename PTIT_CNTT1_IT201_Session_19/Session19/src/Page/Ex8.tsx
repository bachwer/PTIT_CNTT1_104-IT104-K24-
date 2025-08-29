import { useReducer, useState } from "react";

// 1. Định nghĩa state và action
interface State {
    loading: boolean;
    success: boolean;
    error: string | null;
}

type Action =
    | { type: "LOGIN_START" }
    | { type: "LOGIN_SUCCESS" }
    | { type: "LOGIN_ERROR"; payload: string }
    | { type: "RESET" };

// 2. State khởi tạo
const initialState: State = {
    loading: false,
    success: false,
    error: null,
};

// 3. Reducer function
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "LOGIN_START":
            return { loading: true, success: false, error: null };
        case "LOGIN_SUCCESS":
            return { loading: false, success: true, error: null };
        case "LOGIN_ERROR":
            return { loading: false, success: false, error: action.payload };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

// 4. Component LoginForm
export default function LoginForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // input username & password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch({ type: "LOGIN_START" });

        // Giả lập gọi API (setTimeout 1.5s)
        setTimeout(() => {
            if (username === "admin" && password === "123") {
                dispatch({ type: "LOGIN_SUCCESS" });
            } else {
                dispatch({ type: "LOGIN_ERROR", payload: "Sai tài khoản hoặc mật khẩu!" });
            }
        }, 1500);
    };

    return (
        <div
            style={{
                maxWidth: "300px",
                margin: "50px auto",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
            }}
        >
            <h2>Đăng nhập</h2>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Tên đăng nhập</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ display: "block", width: "100%", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ display: "block", width: "100%", padding: "5px" }}
                    />
                </div>
                <button
                    type="submit"
                    disabled={state.loading}
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: state.loading ? "#aaa" : "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: state.loading ? "not-allowed" : "pointer",
                    }}
                >
                    {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
                </button>
            </form>

            <div style={{ marginTop: "15px", minHeight: "20px" }}>
                {state.success && <p style={{ color: "green" }}>Đăng nhập thành công!</p>}
                {state.error && <p style={{ color: "red" }}>{state.error}</p>}
            </div>
        </div>
    );
}