import { configureStore } from "@reduxjs/toolkit";
import Modal from './state/Modal.tsx'
import students from "./state/students.tsx"
import Search from './state/valueSreach.tsx'
import ValueBtn from "./state/ValueBtn.tsx";

export  const  store = configureStore({
    reducer: {
        Modal: Modal,
        students: students,
        Search: Search,
        ValueBtn: ValueBtn,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;