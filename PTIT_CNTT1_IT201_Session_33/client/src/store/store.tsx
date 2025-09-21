import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart";
import Product from "./Product.tsx";

export const store = configureStore({
    reducer: {
        Cart: cartReducer,
        Product: Product,
    },
});

// type toàn cục
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export class useAppDispatch {
}