import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
    email: string;
    password: string;
}

interface AuthState {
    registeredUser: User | null;
    currentUser: User | null; // thông tin user đã login
}

const initialState: AuthState = {
    registeredUser: null,
    currentUser: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<User>) => {
            state.registeredUser = action.payload;
        },
        loginUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
        },
        logoutUser: (state) => {
            state.currentUser = null;
        },
    },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;