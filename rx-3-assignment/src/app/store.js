import { configureStore } from "@reduxjs/toolkit";
import { schoolSlice } from "../features/school/schoolSlice";
import { studentSlice } from "../features/students/studentSlice";

export default configureStore({
    reducer: {
        students: studentSlice.reducer,
        school: schoolSlice.reducer
    }
})