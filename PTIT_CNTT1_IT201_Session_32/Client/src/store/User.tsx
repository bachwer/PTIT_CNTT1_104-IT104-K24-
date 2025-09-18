import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id:1,
    userName: "Nguyen Van A",
    gender: "Male",
    dateBirth: "2000 - 01 -01",
    address: "HA NOI",
}

const user = createSlice({
    name: "user",
    initialState,
    reducers:{

    }
})



export default user.reducer;