import { createSlice, type PayloadAction, configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// ---------------- Gom tất cả vào 1 function ----------------
export default function LoginHomeApp() {
    // ==== Redux Slice ====
    interface User {
        id: number;
        userName: string;
        email: string;
        password: string;
    }

    interface AuthState {
        currentUser: User | null;
    }

    const initialState: AuthState = { currentUser: null };

    const users: User[] = [
        { id: 1, userName: "wer", email: "wer@gmail.com", password: "123456" },
        { id: 2, userName: "admin", email: "admin@gmail.com", password: "admin" },
    ];

    const authSlice = createSlice({
        name: "auth",
        initialState,
        reducers: {
            login: (state, action: PayloadAction<User>) => {
                state.currentUser = action.payload;
            },
            logout: (state) => {
                state.currentUser = null;
            },
        },
    });

    const { login, logout } = authSlice.actions;
    const store = configureStore({ reducer: { auth: authSlice.reducer } });
    type RootState = ReturnType<typeof store.getState>;
    type AppDispatch = typeof store.dispatch;

    // ==== Component Login ====
    function LoginForm() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const dispatch = useDispatch<AppDispatch>();
        const user = useSelector((state: RootState) => state.auth.currentUser);

        const handleLogin = () => {
            const found = users.find((u) => u.email === email && u.password === password);
            if (found) {
                dispatch(login(found));
            } else {
                alert("Sai email hoặc mật khẩu!");
            }
        };

        if (user) {
            return <Home />;
        }

        return (
            <div style={{ margin: "20px" }}>
                <h2>Đăng nhập</h2>
                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ display: "block", margin: "5px 0" }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: "block", margin: "5px 0" }}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }

    // ==== Component Home ====
    function Home() {
        const user = useSelector((state: RootState) => state.auth.currentUser);
        const dispatch = useDispatch<AppDispatch>();

        return (
            <div style={{ margin: "20px" }}>
                <h2>Xin chào, {user?.userName} 👋</h2>
                <p>Email: {user?.email}</p>
                <button onClick={() => dispatch(logout())}>Đăng xuất</button>
            </div>
        );
    }

    // ==== Root App ====
    return (
        <Provider store={store}>
            <LoginForm />
        </Provider>
    );
}