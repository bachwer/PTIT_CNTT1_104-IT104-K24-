import {createSlice} from  "@reduxjs/toolkit";

interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
};

const userSlice = createSlice({
    name: "Count",
    initialState,
    reducers: {
        increate: (state ) => {
            state.count += 1;
        },

        decrease: (state ) => {
            state.count += 1;
        },
        random: (state) => {
            state.count = Math.random()
        }


    }
})

export const {increate, decrease, random} = userSlice.actions;
export default userSlice.reducer;

export class Counter {
}