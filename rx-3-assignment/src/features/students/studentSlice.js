import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk("students/fetchStudents" , async ()=>{
    const response = await axios.get("https://c829d157-5c99-4f78-ad02-70946ce04ba9-00-5vf2f5wnu0lh.sisko.replit.dev/students");
    // console.log(response);
    return response.data;
})

export const addStudentAsync = createAsyncThunk("students/add-student", async(studentData, {rejectWithValue}) => {
    try{
        const response = await axios.post("https://c829d157-5c99-4f78-ad02-70946ce04ba9-00-5vf2f5wnu0lh.sisko.replit.dev/students", studentData);
        console.log(response);
        return response.data;
    }catch(error){
        // console.log(error.message);
        rejectWithValue(error.message);
    }
})

export const updateStudentAsync = createAsyncThunk("students/update-student", async(studentData, {rejectWithValue})=> {
    try{
        console.log(studentData);
        const response = await axios.put(`https://c829d157-5c99-4f78-ad02-70946ce04ba9-00-5vf2f5wnu0lh.sisko.replit.dev/students/${studentData.id}`, studentData);
        console.log(response);
        return response.data;
    }catch(error){
        rejectWithValue(error.message);
    }
})

export const studentSlice = createSlice({
    name:'students',
    initialState: {
        students: [],
        status: 'idle',
        error: null
    },
    reducers: {},
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

        // for students/add-student
        builder.addCase(addStudentAsync.pending, (state)=> {
            state.status = "loaading"
        })
        builder.addCase(addStudentAsync.fulfilled, (state,action)=> {
            state.status="Success",
            state.students.push(action.payload);
            // console.log(state);
            // console.log(action.payload);
        })
        builder.addCase(addStudentAsync.rejected, (state, action)=> {
            state.status = 'rejected'
        })

         // for students/update-student
         builder.addCase(updateStudentAsync.pending, (state)=> {
            state.status = "loaading"
        })
        builder.addCase(updateStudentAsync.fulfilled, (state,action)=> {
            state.status="Success";
            // find the index and upate the array with updated-student value
            const index = state.students.findIndex((stud)=> stud.id === action.payload._id);
            if(index !== -1){
                state.students[index] = action.payload;
                console.log(state.students);
                console.log(state);
            }
        })
        builder.addCase(updateStudentAsync.rejected, (state, action)=> {
            state.status = 'rejected';

        })
    }
})

// export const  {addStudentAsync} = studentSlice.actions;
export default studentSlice.reducer;