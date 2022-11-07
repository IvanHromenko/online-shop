import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import { Product } from '../Types/products';

export const productFetch = createAsyncThunk(
    "products/productFetch",
    async () => {
        return await (await fetch('https://api.escuelajs.co/api/v1/products'))?.json()
    }
);

const initialState: Product[] = [];
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productFetch.fulfilled, (state, action) => {
            return action.payload;
        })

    }
});

const productReducer = productSlice.reducer;
export default productReducer;