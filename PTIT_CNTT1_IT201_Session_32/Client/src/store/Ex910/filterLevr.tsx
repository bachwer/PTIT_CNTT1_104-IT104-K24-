import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface LeverState {
    value: string[];
}

const initialState: LeverState = { value: [] };

const ChangeLever = createSlice({
    name: "ChangeLever",
    initialState,
    reducers: {
        Push: (state, action: PayloadAction<string>) => {
            const lever = state.value.find((a) => a === action.payload);
            if(lever){
                return;
            }
            state.value.push(action.payload);
        },
        Del : (state, action: PayloadAction<string>) => {
            state.value = state.value.filter((a) => a !== action.payload)
        },
        DelAll: (state) => {
            state.value = []
        }
    },
});

export const { Push , Del , DelAll } = ChangeLever.actions;
export default ChangeLever.reducer;