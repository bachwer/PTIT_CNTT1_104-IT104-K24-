import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


const initialState = "";


const ValueSearch = createSlice({
    name: "Search",
    initialState,
    reducers: {
        handleModeSearch: (_state, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
})



export const {handleModeSearch} = ValueSearch.actions
export default ValueSearch.reducer;