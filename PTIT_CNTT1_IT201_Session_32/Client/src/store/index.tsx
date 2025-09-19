import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import counterReducer from "./Counter";
import user from "./User.tsx"
import text from "./Text.tsx"
import darkMode from "./DarkMode.tsx";
import auth from './authSlice.tsx'

import ChangeLeave from "./Ex910/filterLevr.tsx"

import taskReducer from "./Ex910/AllTodo.tsx";
import DataTarget from "./Ex910/DataTarget.tsx";


import Ex9Modal from "./Ex910/Model.tsx"
export const store = configureStore({
    reducer: {
        users: userReducer,
        counter: counterReducer,
        user: user,
        text: text,
        auth: auth,
        darkMode: darkMode,
        Ex9Modal: Ex9Modal,
        tasks: taskReducer,
        ChangeLeave: ChangeLeave,
        DataTarget: DataTarget,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;