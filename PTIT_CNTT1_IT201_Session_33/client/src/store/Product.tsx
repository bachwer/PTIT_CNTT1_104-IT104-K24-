import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
    id: number;
    name: string;
    price: number;
    quantity?: number;
}



interface TaskState {
    data: Product[];
    loading: boolean;
    error: null | string;
}

const initialState: TaskState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchProduct = createAsyncThunk<Product[]> (
    "Product/fetchProduct",
    async () => {
        const res = await axios.get("http://localhost:3000/product");
        return res.data
    }
)
const Product = createSlice({
    name: "product",
    initialState,
    reducers: {
        changeQty: (state, action: { payload: { id: number; quantity: number } }) => {
            const product = state.data.find(p => p.id === action.payload.id);
            if (product) {
                product.quantity = action.payload.quantity;
            }
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProduct.fulfilled,(state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

    }
});

export const { changeQty } = Product.actions;

export default Product.reducer;