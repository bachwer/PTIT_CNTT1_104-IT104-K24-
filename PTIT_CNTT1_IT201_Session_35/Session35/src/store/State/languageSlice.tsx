import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



const initialState: string = "en";

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            return state === "en" ? "vi" : "en";
        },
        setLanguage: (_state, action: PayloadAction<string>) => {
            return action.payload;
        },
    },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;