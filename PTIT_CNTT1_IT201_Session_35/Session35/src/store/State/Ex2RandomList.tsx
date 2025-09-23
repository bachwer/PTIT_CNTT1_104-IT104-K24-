import {createSlice} from "@reduxjs/toolkit";


const initialState:number[] = [];

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const createList = createSlice({
    name:"ListRandom",
    initialState,
    reducers: {

        random: (state) => {
            for(let i = 0; i < getRandomInt(15); i++){
                state.push(getRandomInt(10))
            }
        },

        resetList : () => {
            return  []
        }

    }
})


export const { random, resetList } = createList.actions;
export default createList.reducer;