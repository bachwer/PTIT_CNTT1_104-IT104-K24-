import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface UploadState {
    url: string | null;
    description: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: UploadState = {
    url: null,
    description: null,
    loading: false,
    error: null,
};

// 🔑 thunk upload
export const uploadImage = createAsyncThunk(
    "upload/image",
    async (payload: { file: File; description: string }) => {
        const formData = new FormData();
        formData.append("file", payload.file);
        formData.append("upload_preset", "demo_unsigned"); // đổi thành preset unsigned thật
        formData.append("context", `alt=${payload.description}`);

        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dvbxj8sdd/image/upload", // đổi thành cloud_name thật
            formData
        );

        return { url: res.data.secure_url, description: payload.description };
    }
);

const uploadSlice = createSlice({
    name: "upload",
    initialState,
    reducers: {
        clearUploadedData: (state) => {
            state.url = null;
            state.description = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadImage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                uploadImage.fulfilled,
                (state, action: PayloadAction<{ url: string; description: string }>) => {
                    state.loading = false;
                    state.url = action.payload.url;
                    state.description = action.payload.description;
                }
            )
            .addCase(uploadImage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Upload failed";
            });
    },
});

export const { clearUploadedData } = uploadSlice.actions;
export default uploadSlice.reducer;