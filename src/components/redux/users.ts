import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

import {User, UserReducer} from '../Types/users';

const initialState: UserReducer = {
    users: [],
    currentUser: undefined
};

const fetchAllUsers = createAsyncThunk(
    "fetchAllUsers",
    async () => {
        const response = await axios.get("https://api.escuelajs.co/api/v1/users")
        return response.data
    }
)

const userSlice = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {},
    extraReducers: {}
});

export default userSlice.reducer;