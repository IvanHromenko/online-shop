import { configureStore } from "@reduxjs/toolkit";
import oneProductReducer from "./product";
import productReducer from "./products";

const store = configureStore({
    reducer: {
        productReducer,
        oneProductReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;