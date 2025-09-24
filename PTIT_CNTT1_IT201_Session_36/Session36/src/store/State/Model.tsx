import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface Task {
    id: string,
    taskName:string,
    completed: boolean,
    priority: string
}



interface valueModal {
    data: Task,
    isOpen: boolean
}
const initialState:valueModal = {
    data: {
        id: "",
        taskName: "",
        completed: false,
        priority: "",
    },
    isOpen: false,
};


const Modal = createSlice({
    name:"Modal",
    initialState,
    reducers: {
        changeModal: (state) => {
            state.isOpen = !state.isOpen
            return state;
        },
        setDataToEdit: (state, action:PayloadAction<Task>) => {
                state.data = action.payload
                return state;
        }
    }
})

export const {changeModal, setDataToEdit} = Modal.actions;
export default Modal.reducer;
