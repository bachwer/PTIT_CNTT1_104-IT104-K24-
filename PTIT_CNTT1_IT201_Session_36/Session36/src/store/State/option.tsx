import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


interface optionFilter {
    search: string,
    priority: string,
    completed: boolean | null;
}


const initialState: optionFilter = {
    search:"",
    priority: "",
    completed: null,
}

const optionSet = createSlice({
    name: "Option",
    initialState,
    reducers: {
        setSearch: (state, action:PayloadAction<string>) => {
            state.search = action.payload;
        },
        setPriority: (state, action:PayloadAction<string>) => {
            state.priority = action.payload;
        },
        setCompleted: (state, action:PayloadAction<boolean | null>) => {
            state.completed = action.payload;
        }
    }
})

export const {setSearch, setPriority, setCompleted} = optionSet.actions;
export default optionSet.reducer;

