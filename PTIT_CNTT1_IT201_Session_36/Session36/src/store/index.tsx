import { configureStore } from "@reduxjs/toolkit";
import TaskList from "./State/task.tsx"
import optionSet from "./State/option.tsx"
import Modal from "./State/Model.tsx"

export const store =configureStore({
    reducer:{
        TaskList: TaskList,
        optionSet: optionSet,
        Modal: Modal,

    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;