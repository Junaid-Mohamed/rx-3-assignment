import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk("students/fetchStudents" , async (_,{rejectWithValue})=>{
   try{
    const response = await axios.get("https://rx-3-assignment-be.vercel.app/students");
    // console.log(response);
    return response.data;
   }catch(error){
    return rejectWithValue(error.message);
   }
    
})

export const addStudentAsync = createAsyncThunk("students/add-student", async(studentData, {rejectWithValue}) => {
    try{
        const response = await axios.post("https://rx-3-assignment-be.vercel.app/students", studentData);
    
        return response.data;
    }catch(error){
        // console.log(error.message);
        return rejectWithValue(error.message);
    }
})

export const updateStudentAsync = createAsyncThunk("students/update-student", async(studentData, {rejectWithValue})=> {
    try{
        console.log(studentData);
        const response = await axios.put(`https://rx-3-assignment-be.vercel.app/students/${studentData.id}`, studentData);
       
        return response.data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const deleteStudentAsync = createAsyncThunk("students/delete-student", async (studentId, {rejectWithValue})=> {
    try{
        console.log(studentId);
        const response = await axios.delete(`https://rx-3-assignment-be.vercel.app/students/${studentId}`);
        console.log(response);
        return response.data;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

export const studentSlice = createSlice({
    name:'students',
    initialState: {
        students: [],
        filter:"all",
        sortBy: "name",
        status: 'idle',
        error: null
    },
    reducers: {

        setFilter: (state,action) => {
            state.filter = action.payload
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchStudents.pending, (state)=> {
            state.status = "loading"
        })
        builder.addCase(fetchStudents.fulfilled, (state,action)=> {
            // console.log(action.payload);
            state.status="Success"
            state.students = action.payload;
            // console.log("Fetched students", state.students);debugging
            
        })
        builder.addCase(fetchStudents.rejected, (state,action)=>{
            state.status = "error",
            // console.log(action.payload);
            console.log(action.payload);
            state.error = action.payload;
        })

        // for students/add-student
        builder.addCase(addStudentAsync.pending, (state)=> {
            state.status = "loading"
        })
        builder.addCase(addStudentAsync.fulfilled, (state,action)=> {
            state.status="Success",
            state.students.push(action.payload);
            // console.log(state);
            // console.log(action.payload);
        })
        builder.addCase(addStudentAsync.rejected, (state, action)=> {
            state.status = 'rejected'
            state.error = action.payload;
        })

         // for students/update-student
         builder.addCase(updateStudentAsync.pending, (state)=> {
            state.status = "loading"
        })
        builder.addCase(updateStudentAsync.fulfilled, (state,action)=> {
            state.status="Success";
            // find the index and upate the array with updated-student value
            const index = state.students.findIndex((stud)=> stud.id === action.payload._id);
            if(index !== -1){
                state.students[index] = action.payload;
            }
        })
        builder.addCase(updateStudentAsync.rejected, (state, action)=> {
            state.status = 'rejected';
            state.error = action.payload
        })

        //  for students/delete-student
        builder.addCase(deleteStudentAsync.pending, (state)=> {
            state.status = 'loading..'
        })
        builder.addCase(deleteStudentAsync.fulfilled, (state, action)=> {
            state.status = "Success";
            state.students = state.students.filter((stud)=> stud.id === action.payload._id);
        })
        builder.addCase(deleteStudentAsync.rejected,(state,action)=>{
            state.status = "error";
            state.error = action.payload;
        })
    }
})

export const  {setSortBy, setFilter} = studentSlice.actions;
export default studentSlice.reducer;