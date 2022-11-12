import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { Product } from '../Types/products';

export const fetchOneProduct = createAsyncThunk(
    "fetchOneProduct",
    async (id: number) => {
        return await (await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)).json()
    }
);

const initialState: Product[] = [];
const oneProductSlice = createSlice({
    name: "oneProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOneProduct.fulfilled, (state, action) => {
            return action.payload;
        })

    }
});

const oneProductReducer = oneProductSlice.reducer;
export default oneProductReducer;