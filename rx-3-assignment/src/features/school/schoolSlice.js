import { createSlice } from "@reduxjs/toolkit";

export const schoolSlice = createSlice({
    name:'school',
    initialState: {
        totalStudents: 0,
        avgAttendance: 0,
        avgmarks: 0,
        topPerformer: "",
        totalTeachers: 0,
        avgExperience:0,
        mostExperiencedTeacher:"",
        status: 'idle',
        error: null
    },
    reducers: {
        updateSchoolStats: (state,action)=>{
            const {totalStuds, avgAttendance, avgMarks, topper, avgExp, totalTeachers, mostExperiencedTeacher } = action.payload;
            state.totalStudents = totalStuds,
            state.avgAttendance = avgAttendance,
            state.avgmarks = avgMarks,
            state.topPerformer = topper,
            state.avgExperience = avgExp,
            state.totalTeachers = totalTeachers,
            state.mostExperiencedTeacher = mostExperiencedTeacher
        }
    }
})

export const {updateSchoolStats} = schoolSlice.actions;
export default schoolSlice.reducer;