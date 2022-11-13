import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../Types/cart"; 

const initialState: CartItem [] = [];

const cartSlicer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            return [...state, action.payload]
        },
        deleteFromCart: (state, action: PayloadAction<number>) => {
            return state.filter((item) => item.product.id !== action.payload)
        }
    },
    extraReducers: {}
});

const cartReducer = cartSlicer.reducer;

export default cartReducer;
export const { addToCart, deleteFromCart } = cartSlicer.actions;

