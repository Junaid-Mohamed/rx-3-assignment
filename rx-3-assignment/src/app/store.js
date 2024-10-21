import { configureStore } from "@reduxjs/toolkit";
import { schoolSlice } from "../features/school/schoolSlice";
import { studentSlice } from "../features/students/studentSlice";
import { teacherSlice } from "../features/teachers/teacherSlice";

export default configureStore({
    reducer: {
        students: studentSlice.reducer,
        school: schoolSlice.reducer,
        teachers: teacherSlice.reducer,
    }
})