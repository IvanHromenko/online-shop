import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import { Product } from '../Types/products';

export const productFetch = createAsyncThunk(
    "productFetch",
    async () => {
        return await (await fetch('https://api.escuelajs.co/api/v1/products'))?.json()
    }
);

const initialState: Product[] = [];
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        sortByPrice: (state) => {
            if(true){
                state.sort((a, b) => a.price > b.price ? 1: -1)
            }else{
                state.sort((a, b) => a.price < b.price ? 1: -1)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(productFetch.fulfilled, (state, action) => {
            return action.payload;
        })

    }
});

const productReducer = productSlice.reducer;
export const {sortByPrice} = productSlice.actions;
export default productReducer;