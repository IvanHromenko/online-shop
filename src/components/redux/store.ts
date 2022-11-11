import { configureStore } from "@reduxjs/toolkit";
import oneProductReducer from "./product";
import productReducer from "./products";
import userReducer from "./users"

const store = configureStore({
    reducer: {
        productReducer,
        oneProductReducer,
        userReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;