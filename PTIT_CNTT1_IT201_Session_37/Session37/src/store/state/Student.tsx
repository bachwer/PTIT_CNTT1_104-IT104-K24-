import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface student {
    id: string,
    name: string,
    grade: string,
    age: number
}

interface stateTask {
    data: student[],
    loading: boolean,
    error: null | string,
}

const initialState: stateTask = {
    data: [],
    loading: false,
    error: null,
}


export const fetchStudent = createAsyncThunk<student[]>(
    "student/fetch",
            async () => {
                const res = await axios.get("http://localhost:3000/students");
                 return res.data
            }
)

export const AddStudent = createAsyncThunk<student, student>(
    "student/add",
    async (item) => {
        await axios.post(`http://localhost:3000/students/`, item);
        return item;
    }
)




export const deleteStudent = createAsyncThunk<string, string>(
    "student/delete",
    async (item) => {
        await axios.delete(`http://localhost:3000/students/${item}`)
        return item;
    }
)


export const updateStudent = createAsyncThunk<student, student>(
    "student/Update",
    async (item) => {
        await axios.put(`http://localhost:3000/students/${item.id}`, item);
        return item;
    }
)

const studentStore = createSlice({
    name:"Students",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchStudent.pending, (state) => {
                state.loading = false;
                state.error = null;
            })

            .addCase(fetchStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

            .addCase(AddStudent.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })

            .addCase(deleteStudent.fulfilled, (state, action) => {
                state.data = state.data.filter((a) => a.id !== action.payload);
            })

            .addCase(updateStudent.fulfilled, (state, action) => {
                const index = state.data.findIndex((a) => a.id === action.payload.id);
                state.data[index] = action.payload;
            })
    }
})

export default studentStore.reducer;





