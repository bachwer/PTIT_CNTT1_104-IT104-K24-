import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


interface cartItem {
    id: number; name: string; price: number; qty: number
}

interface TaskState {
    data: cartItem[];
    loading: boolean;
    error: null | string;
}

const initialState: TaskState = {
    data: [],
    loading: false,
    error: null,
};



export const  fetchCart = createAsyncThunk<cartItem[]> (
    "Cart/fetchCart",
    async () => {
        const res = await axios.get("http://localhost:3000/cart");
        return res.data

    }
)

export const addCart = createAsyncThunk<cartItem, cartItem>(
    "Cart/addCart",
    async (item, { getState }) => {
        const state = getState() as { Cart: TaskState };
        const existing = state.Cart.data.find(c => c.id === item.id);

        if (existing) {
            const res = await axios.patch<cartItem>(
                `http://localhost:3000/cart/${item.id}`,
                { qty: (existing.qty || 0) + 1 }
            );
            return res.data;
        } else {
            const res = await axios.post<cartItem>("http://localhost:3000/cart", {
                ...item,
                qty: 1,
            });
            return res.data;
        }
    }
);

export const deleteCart = createAsyncThunk<number, number>(
    "Cart/deleteCart",
    async (id) => {
        await axios.delete(`http://localhost:3000/cart/${id}`);
        return id;
    }
);

const CartAction = createSlice({
    name: "Cart",
    initialState,
    reducers: {},


    extraReducers: (builder) => {
        builder

            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Fetch failed";
            })

            .addCase(addCart.fulfilled, (state, action) => {
                const existing = state.data.find(item => item.id === action.payload.id);
                if (existing) {
                    existing.qty = (existing.qty || 0) + 1;
                } else {
                    state.data.push({ ...action.payload, qty: action.payload.qty || 1 });
                }
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.data = state.data.filter(item => item.id !== action.payload);
            });




    }

})

export default CartAction.reducer;