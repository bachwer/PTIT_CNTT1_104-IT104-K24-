import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface student {
    id: string,
    name: string,
    grade: string,
    age: number
}

interface Interface {
    data: student,
    isOpen: boolean,
    title: string,
}

const initialState: Interface ={
    data: {
        id: "",
        name: "",
        grade: "",
        age: 0,
    },
    isOpen: false,
    title: ""
}


const ModalValue = createSlice({
    name: "valueModal",
    initialState,
    reducers: {
        setData: (state, action:PayloadAction<student>) => {
            state.data = action.payload;
        },
        setIsOpen: (state) => {
            state.isOpen =  !state.isOpen;
        },
        setTitle: (state, action:PayloadAction<string>) => {
            state.title = action.payload;
        }
    }
})

export const {setData, setIsOpen, setTitle} = ModalValue.actions;
export default ModalValue.reducer;