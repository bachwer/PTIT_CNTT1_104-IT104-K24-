import { configureStore } from "@reduxjs/toolkit";

import Count from "./State/Ex1Count.tsx"
import RandomList from "./State/Ex2RandomList.tsx";
import ChangeMode from "./State/Ex3Dark.tsx"
import language from "./State/languageSlice.tsx"
import ChangeFavorite from "./State/ListStudents.tsx"

export const store =configureStore({
    reducer:{
        Count: Count,
        RandomList: RandomList,
        ChangeMode: ChangeMode,
        language: language,
        ChangeFavorite: ChangeFavorite,

    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;