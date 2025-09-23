import {createSlice} from "@reduxjs/toolkit";


const initialState = false;

const ChangeMode = createSlice({
    name: "changeMode",
    initialState,
    reducers: {
        change: (state) => {
            return !state;
        }
    }
})


export const {change} = ChangeMode.actions;
export default ChangeMode.reducer;
