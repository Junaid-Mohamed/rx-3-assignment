import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchTeachers = createAsyncThunk("teachers/fetchTeachers", async (_, {rejectWithValue})=>{
    try{
     
        const response = await axios.get("https://rx-3-assignment-be.vercel.app/teachers");
        return response.data;
    }catch(error){
        return rejectWithValue(error);
    }
})

export const addTeacherAsync = createAsyncThunk("teachers/add-teacher", async(teacherToAdd, {rejectWithValue})=> {
    try{
        const response = await axios.post("https://rx-3-assignment-be.vercel.app/teachers", teacherToAdd);
        return response.data;
    }catch(error){
        return rejectWithValue(error);
    }
})

export const updateTeacherAsync = createAsyncThunk("teachers/update-teacher", async(teacherToUpdate,{rejectWithValue})=>{
    try{
        const response = await axios.put(`https://rx-3-assignment-be.vercel.app/teachers/${teacherToUpdate.id}`,teacherToUpdate);
        return response.data;
    }catch(error){  
        return rejectWithValue(error);
    }
})

export const deleteTeacherAsync = createAsyncThunk("teachers/delete-teacher", async(teacherId, {rejectWithValue})=> {
    try{
        console.log(teacherId);
        const respone = await axios.delete(`https://rx-3-assignment-be.vercel.app/teachers/${teacherId}`);
        return respone.data;
    }catch(error){
        return rejectWithValue(error);
    }
})

export const teacherSlice = createSlice({
    name:'teachers',
    initialState:{
        teachers: [],
        status: 'idle',
        error: null,
        filter:"all",
        sortBy:"name"
    },
    reducers:{
        setFilter: (state,action) => {
            state.filter = action.payload
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchTeachers.pending, (state)=>{
            state.status = "loading..."
        })
        builder.addCase(fetchTeachers.fulfilled, (state, action)=> {

            state.status = "Success";
            state.teachers = action.payload
        })
        builder.addCase(fetchTeachers.rejected, (state,action)=>{
            state.status = "error";
            state.error = action.payload;
        })

        //  for teachers/add-teacher
        builder.addCase(addTeacherAsync.pending, (state)=> {
            state.status = "loading"
        })
        builder.addCase(addTeacherAsync.fulfilled, (state,action)=> {
            state.status="Success",
            state.teachers.push(action.payload);
        })
        builder.addCase(addTeacherAsync.rejected, (state, action)=> {
            state.status = 'rejected'
            state.error = action.payload;
        })

        //  for teachers/update-teacher
        builder.addCase(updateTeacherAsync.pending, (state)=> {
            state.status = "loading"
        })
        builder.addCase(updateTeacherAsync.fulfilled, (state,action)=> {
            state.status="Success";
            // find the index and upate the array with updated-student value
            const index = state.teachers.findIndex((teacher)=> teacher.id === action.payload._id);
            if(index !== -1){
                state.teachers[index] = action.payload;
            }
        })
        builder.addCase(updateTeacherAsync.rejected, (state, action)=> {
            state.status = 'rejected';
            state.error = action.payload
        })

         //  for teachers/delete-student
         builder.addCase(deleteTeacherAsync.pending, (state)=> {
            state.status = 'loading..'
        })
        builder.addCase(deleteTeacherAsync.fulfilled, (state, action)=> {
            state.status = "Success";
            state.teachers = state.teachers.filter((teacher)=> teacher.id === action.payload._id);
        })
        builder.addCase(deleteTeacherAsync.rejected,(state,action)=>{
            state.status = "error";
            state.error = action.payload;
        })
    }
})

export const  {setSortBy, setFilter} = teacherSlice.actions;
export default teacherSlice.reducer;

