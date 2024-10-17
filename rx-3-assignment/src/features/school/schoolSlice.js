import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const schoolSlice = createSlice({
    name:'school',
    initialState: {
        totalStudents: 0,
        avgAttendance: 0,
        avgmarks: 0,
        topPerformer: "",
        status: 'idle',
        error: null
    },
    reducers: {
        updateSchoolStats: (state,action)=>{
            const {totalStuds, avgAttendance, avgMarks, topper} = action.payload;
            state.totalStudents = totalStuds,
            state.avgAttendance = avgAttendance,
            state.avgmarks = avgMarks,
            state.topPerformer = topper
        }
    }
})

export const {updateSchoolStats} = schoolSlice.actions;
export default schoolSlice.reducer;