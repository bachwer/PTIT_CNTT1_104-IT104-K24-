import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


interface ControlValue{
    search: string,
    grade: string,
    sort: string,
}



const initialState:ControlValue = {
    search: "",
    grade: "",
    sort: "",
}


const control = createSlice({
    name: "Control",
    initialState,
    reducers:{
        setSearch: (state, action:PayloadAction<string>) => {
            state.search = action.payload
        },
        setGrade: (state, action:PayloadAction<string>) => {
            state.grade = action.payload
        },
        setSort: (state, action:PayloadAction<string>) => {
            state.sort = action.payload
        }
    }
})

export const {setSearch, setGrade, setSort} = control.actions
export default control.reducer;