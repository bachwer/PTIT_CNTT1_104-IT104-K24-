import {createSlice} from "@reduxjs/toolkit";


const initialState = 0;


const CountNumber = createSlice({
    name: "Count",
    initialState,
    reducers: {
        increase : (state) => {
            return state + 1;
        },
        decrease : (state) => {
            return state + 1;
        },
        reset: (state) => {
            state = 0
            return state;
        }
    }
})

export const {increase, decrease, reset} = CountNumber.actions;
export  default CountNumber.reducer;





