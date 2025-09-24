import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


interface Task {
    id: string,
    taskName:string,
    completed: boolean,
    priority: string
}

interface taskState {
    data: Task[],
    loading: boolean,
    error: null | string,
}

const initialState:taskState = {
    data: [],
    loading: false,
    error: null,
}

export const fetchDataTask = createAsyncThunk<Task[]>(
    "Task/FetchTask",
    async () => {
         const res = await axios.get("http://localhost:3000/Task");
        return res.data;
    }
)

export const AddTask = createAsyncThunk<Task, Task>(
    "Task/AddTask",
    async (item) => {
        const res = await axios.post("http://localhost:3000/Task", item);
        return res.data;
    }
)
export const deleteTask = createAsyncThunk<string, string>(
    "Task/delete",
    async (item) => {
        await axios.delete(`http://localhost:3000/Task/${item}`);
        return item;
    }
)

export const updateTask = createAsyncThunk<Task, Task>(
    "Task/Update",
    async (item) => {
        await axios.put(`http://localhost:3000/Task/${item.id}`, item);
        return item;
    }

)



const task = createSlice({
    name: "task",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchDataTask.pending, (state) => {
                state.loading = false;
                state.error = null;
            })

            .addCase(fetchDataTask.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

            .addCase(AddTask.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })

            .addCase(deleteTask.fulfilled, (state,action) => {
                state.data = state.data.filter((a) => a.id !== action.payload);
            })

            .addCase(updateTask.fulfilled, (state,action) => {
                let taskFind  = state.data.findIndex((a) => a.id === action.payload.id);
                if(taskFind !== -1){
                   state.data[taskFind] = action.payload;
                }
            })

    }


})

export default task.reducer;