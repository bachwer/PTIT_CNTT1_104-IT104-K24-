import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Task đầy đủ (luôn có id)
export interface Task {
    id: string;
    title: string;
    type: string;
    status: boolean;
}

// Khi tạo mới thì không cần id (server sẽ tự sinh)
export type NewTask = Omit<Task, "id">;

// -------------------- ASYNC ACTIONS --------------------

// Lấy toàn bộ tasks
export const fetchTasks = createAsyncThunk<Task[]>(
    "tasks/fetchTasks",
    async () => {
        const res = await axios.get<Task[]>("http://localhost:3000/Task");
        return res.data;
    }
);

// Thêm hoặc cập nhật task
export const addTaskS = createAsyncThunk<Task, Task | NewTask>(
    "tasks/addTask",
    async (task) => {
        // Nếu task có id → check tồn tại
        if ("id" in task) {
            try {
                const check = await axios.get<Task>(`http://localhost:3000/Task/${task.id}`);

                // Nếu tồn tại → PUT (update)
                if (check.data) {
                    const res = await axios.put<Task>(
                        `http://localhost:3000/Task/${task.id}`,
                        task
                    );
                    return res.data;
                }
            } catch (err) {
                // Nếu 404 thì coi như không tồn tại → tiếp tục POST
            }
        }

        // Nếu chưa tồn tại hoặc không có id → POST (tạo mới)
        const res = await axios.post<Task>("http://localhost:3000/Task", task);
        return res.data;
    }
);

// Xoá task theo id
export const removeTaskS = createAsyncThunk<string, string>(
    "tasks/removeTask",
    async (id) => {
        await axios.delete(`http://localhost:3000/Task/${id}`);
        return id;
    }
);

// Toggle trạng thái 1 task
export const toggleStatusS = createAsyncThunk<Task, Task>(
    "tasks/toggleStatus",
    async (task) => {
        const updated = { ...task, status: !task.status };
        const res = await axios.put<Task>(
            `http://localhost:3000/Task/${task.id}`,
            updated
        );
        return res.data;
    }
);

// Xoá tất cả task
export const deleteAll = createAsyncThunk<void, void>(
    "tasks/deleteAll",
    async (_, { getState }) => {
        const state = getState() as { tasks: TaskState };
        const tasks = state.tasks.data;

        await Promise.all(
            tasks.map((task) => axios.delete(`http://localhost:3000/Task/${task.id}`))
        );
    }
);

// Đánh dấu tất cả task thành completed
export const toggleAll = createAsyncThunk<Task[], void>(
    "tasks/toggleAll",
    async (_, { getState }) => {
        const state = getState() as { tasks: TaskState };
        const tasks = state.tasks.data;

        return await Promise.all(
            tasks.map(async (task) => {
                const updated = { ...task, status: true };
                const res = await axios.put<Task>(
                    `http://localhost:3000/Task/${task.id}`,
                    updated
                );
                return res.data;
            })
        );
    }
);

// -------------------- SLICE --------------------

interface TaskState {
    data: Task[];
    loading: boolean;
    error: null | string;
}

const initialState: TaskState = {
    data: [],
    loading: false,
    error: null,
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetchTasks
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Fetch failed";
            })

            // addTaskS (POST or PUT)
            .addCase(addTaskS.fulfilled, (state, action) => {
                const idx = state.data.findIndex((a) => a.id === action.payload.id);
                if (idx !== -1) {
                    // Update nếu đã có
                    state.data[idx] = action.payload;
                } else {
                    // Add nếu chưa có
                    state.data.push(action.payload);
                }
            })

            // removeTaskS
            .addCase(removeTaskS.fulfilled, (state, action) => {
                state.data = state.data.filter((a) => a.id !== action.payload);
            })

            // toggleStatusS
            .addCase(toggleStatusS.fulfilled, (state, action) => {
                const idx = state.data.findIndex((a) => a.id === action.payload.id);
                if (idx !== -1) {
                    state.data[idx] = action.payload;
                }
            })

            // deleteAll
            .addCase(deleteAll.fulfilled, (state) => {
                state.data = [];
            })

            // toggleAll
            .addCase(toggleAll.fulfilled, (state, action) => {
                state.data = action.payload;
            });
    },
});

export default taskSlice.reducer;