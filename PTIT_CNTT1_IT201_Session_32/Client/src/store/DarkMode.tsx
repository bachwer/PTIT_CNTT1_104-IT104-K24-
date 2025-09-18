import {createSlice} from "@reduxjs/toolkit";


const initialState = false;




const darkMode = createSlice({
    name:"darkMode",
    initialState,
    reducers:{
        changeMode: (state)=> {
            return !state
        }

    }
})

export const{changeMode} = darkMode.actions
export default darkMode.reducer;