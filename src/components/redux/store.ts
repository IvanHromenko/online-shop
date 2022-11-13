import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import oneProductReducer from "./product";
import productReducer from "./products";
import userReducer from "./users"

const store = configureStore({
    reducer: {
        productReducer,
        oneProductReducer,
        userReducer,
        cartReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;