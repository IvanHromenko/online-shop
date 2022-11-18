import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../Types/cart"; 

const initialState: CartItem [] = [];

const cartSlicer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            if (state.find((product) => product.product.id === action.payload.product.id)) {
                const stateIndex = state.map(function (i) {return i.product.id}).indexOf(action.payload.product.id)
                state[stateIndex].quantity += action.payload.quantity;
            } else {
                return [...state, action.payload]
            }
            
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

