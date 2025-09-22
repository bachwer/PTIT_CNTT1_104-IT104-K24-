import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


interface student {
    id: string,
    codeSV: string,
    fullName: string,
    age: number,
    gender: boolean,
    dateOfBirth: string,
    placeOfBirth: string,
    address: string,
}

interface TaskState {
    data: student[],
    loading: boolean,
    error: null | string,
    selected? : string,
}


const initialState: TaskState = {
    data: [],
    loading: false,
    error: null,

}


export const fetchStudent = createAsyncThunk<student[]>(
    "students/fetchStudents",
    async () => {

        const res = await axios.get("http://localhost:8080/students");
        return res.data;
    }
)

export const addStudent = createAsyncThunk<student, student>(
    "students/addStudent",
    async (student) => {
        const res = await axios.post("http://localhost:8080/students", student);
        return res.data
    }
)

export const deleteStudent = createAsyncThunk<string, string>(
    "students/deleteStudent",
    async (id:string) => {
        await axios.delete(`http://localhost:8080/students/${id}`);
        return id;
    }
)

export const updateStudent = createAsyncThunk<student, student>(
    "students/updateStudent",
    async (Student) => {
        const res = await axios.put<student>(`http://localhost:8080/students/${Student.id}`,Student)
        return res.data;
    }
)



const studentsData = createSlice({
    name: "students",
    initialState,
    reducers:{

        selectedStudent: (state, action) => {

                state.selected = action.payload;

        },
        clearSelectedStudent: (state) => {
            state.selected = undefined;
        },

    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchStudent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

            .addCase(fetchStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Fetch failed";
            })

            .addCase(addStudent.fulfilled, (state, action) =>{
                state.data.push(action.payload);
            })

            .addCase(deleteStudent.fulfilled, (state, action) => {
                state.data = state.data.filter((a) => a.id !== action.payload);
            })

            .addCase(updateStudent.fulfilled, (state, action) => {
               const index = state.data.findIndex((s) => s.id === action.payload.id);
               if( index !== -1){
                   state.data[index] = action.payload;
               }
            })
    }

})

export const {selectedStudent, clearSelectedStudent} = studentsData.actions
export default studentsData.reducer;