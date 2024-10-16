import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk("students/fetchStudents" , async ()=>{
    const response = await axios.get("https://c829d157-5c99-4f78-ad02-70946ce04ba9-00-5vf2f5wnu0lh.sisko.replit.dev/students");
    // console.log(response);
    return response.data;
})

export const addStudentAsync = createAsyncThunk("students/add-student", async(studentData, {rejectWithValue}) => {
    console.log(studentData);
    // const response = await fetch("https://c829d157-5c99-4f78-ad02-70946ce04ba9-00-5vf2f5wnu0lh.sisko.replit.dev/students",{
    //     method: "POST",
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body: JSON.stringify(studentData)
    // })
    const response = await axios.post("https://c829d157-5c99-4f78-ad02-70946ce04ba9-00-5vf2f5wnu0lh.sisko.replit.dev/students", studentData);
    // const data = await response.json();
    console.log(response);
})

export const studentSlice = createSlice({
    name:'students',
    initialState: {
        students: [],
        status: 'idle',
        error: null
    },
    reducers: {
        // addStudentAsync: async (state, action) => {
        //     console.log(action.payload);
        //     // const response = await axios.post("");
        //     // console.log(response);
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStudents.pending, (state)=> {
            state.status = "loading"
        })
        builder.addCase(fetchStudents.fulfilled, (state,action)=> {
            // console.log(action.payload);
            state.status="Success"
            state.students = action.payload;
            
        })
        builder.addCase(fetchStudents.rejected, (state,action)=>{
            state.status = "error",
            // console.log(action.payload);
            console.log(action.payload);
            state.error = action.payload;
        })
    }
})

// export const  {addStudentAsync} = studentSlice.actions;
export default studentSlice.reducer;