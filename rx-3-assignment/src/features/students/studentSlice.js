import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk("students/fetchStudents" , async()=>{
    const response = await axios("https://c829d157-5c99-4f78-ad02-70946ce04ba9-00-5vf2f5wnu0lh.sisko.replit.dev/students");
    console.log(response);
})

export const studentSlice = createSlice({
    name:'student',
    initialState: {
        students: [],
        status: 'idle',
        error: null
    },
    reducers: {

    }
})

export default studentSlice.reducer;