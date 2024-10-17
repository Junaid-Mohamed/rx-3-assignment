import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { updateSchoolStats } from "./schoolSlice";

const SchoolView = () => {

    const dispatch = useDispatch();

    const students = useSelector((state)=> state.students.students);
    const state = useSelector((state)=> state.school)
    const stats = useSelector((state)=> state.school)

    useEffect(()=>{
        if(students.length > 0){
            const totalStuds = students.length;
            const avgAttendance = ((students.reduce((acc,curr)=> acc + curr.attendance, 0))/totalStuds).toFixed(2);
            const avgMarks = ((students.reduce((acc,curr)=> acc + curr.marks, 0))/totalStuds).toFixed(2);
            const topper = students.reduce((acc,curr)=> acc.marks > curr.marks ? acc : curr, students[0]);
            console.log(totalStuds,avgAttendance,avgMarks,topper);
            dispatch(updateSchoolStats({
                totalStuds,
                avgAttendance,
                avgMarks,
                topper
            }))

        }
    },[dispatch,students])

    return(
        <>
         <Header/>
         <div className="container py-4" >
            <h1>School View</h1>
            <p>Total Students: {stats.totalStudents}</p>
            <p>Average Attendance: {stats.avgAttendance}</p>
            <p>Average marks: {stats.avgmarks}</p>
            <p>Top Student: {stats.topPerformer.name}</p>
        </div>
        </>
       
    )
}

export default SchoolView;