import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const schoolSlice = createSlice({
    name:'school',
    initialState: {
    status: 'idle',
    error: null
    },
    reducers: {}
})

export default schoolSlice.reducer;