import { configureStore } from "@reduxjs/toolkit";
import student from "./state/Student.tsx";
import ModalValue from "./state/ModalValue.tsx";
import Control from "./state/ControlFilter.tsx"
import ControlFilter from "./state/ControlFilter.tsx";
export const store =configureStore({
    reducer:{
        Control: Control,
        student: student,
        ModalValue: ModalValue,
        ControlFilter: ControlFilter,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;