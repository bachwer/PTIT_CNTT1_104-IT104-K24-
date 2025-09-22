import {createSlice} from "@reduxjs/toolkit";


const initialState = false;


const changeModel = createSlice({
    name: "Modal",
    initialState,
    reducers: {
        handleMode: (state: boolean)  => {
            return !state
        }
    }
})

export const {handleMode} = changeModel.actions
export default changeModel.reducer;