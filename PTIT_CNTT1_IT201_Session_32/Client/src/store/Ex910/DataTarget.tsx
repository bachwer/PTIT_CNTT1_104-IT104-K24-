import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Task {
    id: string,
    title: string,
    type: string,
    status: boolean,
}

const initialState: Task = {
    id: "",
    title: "",
    type: "",
    status: false,
};

const DataTarget = createSlice({
    name: "dataTarget",
    initialState,
    reducers: {
        setData: (_state, action: PayloadAction<Task>) => {
            return action.payload;
        },
        DelData: () => {
            return {
                id: "",
                title: "",
                type: "",
                status: false,
            };
        },
    },
});

export const { setData, DelData } = DataTarget.actions;
export default DataTarget.reducer;