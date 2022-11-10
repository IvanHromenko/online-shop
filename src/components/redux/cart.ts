import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProps } from "../Types/cart"; 

const initialState: CartProps [] = [];

const cartSlicer = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: {}
});

const cartReducer = cartSlicer.reducer;

export default cartReducer;

