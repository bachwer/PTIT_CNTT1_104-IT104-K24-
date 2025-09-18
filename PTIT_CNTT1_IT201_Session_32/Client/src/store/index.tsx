import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import counterReducer from "./Counter";
import user from "./User.tsx"
import text from "./Text.tsx"
import darkMode from "./DarkMode.tsx";
import auth from './authSlice.tsx'
export const store = configureStore({
    reducer: {
        users: userReducer,     // quản lý danh sách user
        counter: counterReducer, // quản lý count
        user: user,
        text: text,
        auth: auth,
        darkMode: darkMode,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;