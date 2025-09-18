import { createSlice } from "@reduxjs/toolkit";


interface User {
    id: number,
    userName: string,
    gender: string,
    dateBirth:string,
    address: string,
}

const initialState: User[] = [
    {
        id:1,
        userName: "Nguyen Van A",
        gender: "Male",
        dateBirth: "2000 - 01 -01",
        address: "HA NOI",
    },
    {
        id:2,
        userName: "Nguyen Van B",
        gender: "Male",
        dateBirth: "2000 - 01 -01",
        address: "HA NOI",
    },
    {
        id:3,
        userName: "Nguyen Van C",
        gender: "Male",
        dateBirth: "2000 - 01 -01",
        address: "HA NOI",
    },

]



const userSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        addUser: (state,action) => {
            state.push(action.payload);
        },
        removeUser: (state, action) => {
            return state.filter((u) => u.id !== action.payload);
        }
    }
})


export const {addUser, removeUser} = userSlice.actions


export default userSlice.reducer;