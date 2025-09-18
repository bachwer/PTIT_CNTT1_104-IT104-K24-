import {createSlice} from "@reduxjs/toolkit";


const initialState = "Rikkei Academy";



const ChangeStatus = createSlice({
    name:"Name",
    initialState,
    reducers:{
        changeStatus: (state) => {
            return state === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy";
        }
    }
})

export const {changeStatus} = ChangeStatus.actions;
export default ChangeStatus.reducer;