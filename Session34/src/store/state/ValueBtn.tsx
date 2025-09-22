import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


const initialState = "";




const valueBtn = createSlice({
    name: "valueBtn",
    initialState,
    reducers: {
        changeValue:  (_state, action: PayloadAction<string>) => {
            return action.payload
        }
    }
})

export  const {changeValue} = valueBtn.actions;
export  default valueBtn.reducer;