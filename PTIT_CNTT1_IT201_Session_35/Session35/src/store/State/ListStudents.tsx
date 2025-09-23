import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


interface Students {
    id: number,
    name: string,
    favorite: boolean;
}


const initialState:Students[] = [
    {id: 1, name: "Nguyen Van A", favorite: false},
    {id: 2, name: "Nguyen Van b", favorite: false},
    {id: 3, name: "Nguyen Van CD", favorite: false},
    {id: 5, name: "Nguyen Van E", favorite: false},
]

const ChangeFavorite = createSlice({
    name: "student",
    initialState,
    reducers: {
        Favorite: (state, action: PayloadAction<number>) => {
            const user = state.find((a) => a.id === action.payload);
            if (user) {
                user.favorite = !user.favorite;
            }
        }
    }
})

export const {Favorite} = ChangeFavorite.actions;
export default ChangeFavorite.reducer;