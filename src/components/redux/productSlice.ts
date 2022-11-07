import {createSlice} from '@reduxjs/toolkit';

import { Product } from '../Types/products';

const initialState: Product[] = [];
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
});

const productReducer = productSlice.reducer;
export default productReducer;