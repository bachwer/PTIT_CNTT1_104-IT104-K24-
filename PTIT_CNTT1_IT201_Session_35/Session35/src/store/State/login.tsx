import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    userName: string;
    email: string;
    password: string;
}

interface AuthState {
    currentUser: User | null;
}

const initialState: AuthState = {
    currentUser: null,
};


export const users: User[] = [
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

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;