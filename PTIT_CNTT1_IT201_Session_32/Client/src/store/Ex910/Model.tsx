import {createSlice} from "@reduxjs/toolkit";



const initialState = false


const ChangeModal = createSlice({
    name:"Modal",
    initialState,
    reducers: {
        handelMode: (state:boolean) => {
            return !state
        }
    }
})

export const {handelMode} = ChangeModal.actions;
export default ChangeModal.reducer;


