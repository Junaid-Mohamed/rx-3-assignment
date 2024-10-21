import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { updateSchoolStats } from "./schoolSlice";

const SchoolView = () => {

    const dispatch = useDispatch();

    const students = useSelector((state)=> state.students.students);
    const teachers = useSelector((state)=> state.teachers.teachers);

    const stats = useSelector((state)=> state.school)

    useEffect(()=>{
        if(students.length > 0 && teachers.length > 0){
            const totalStuds = students.length;
            const totalTeachers = teachers.length;
            const avgAttendance = ((students.reduce((acc,curr)=> acc + curr.attendance, 0))/totalStuds).toFixed(2);
            const avgExp = ((teachers.reduce((acc,curr)=> acc+curr.yearsOfExperience,0))/totalTeachers).toFixed(2);
            const avgMarks = ((students.reduce((acc,curr)=> acc + curr.marks, 0))/totalStuds).toFixed(2);
            const topper = students.reduce((acc,curr)=> acc.marks > curr.marks ? acc : curr, students[0]);
            const mostExperiencedTeacher = teachers.reduce((acc,curr)=> acc.yearsOfExperience > curr.yearsOfExperience ? acc : curr, teachers[0]);

            dispatch(updateSchoolStats({
                totalStuds,
                avgAttendance,
                avgMarks,
                topper,
                avgExp,
                totalTeachers,
                mostExperiencedTeacher
            }))

        }
    },[dispatch,students, teachers])

    return(
        <>
         <Header/>
         <div className="container py-4" >
            <h1>School View</h1>
            <p>Total Students: {stats.totalStudents}</p>
            <p>Average Attendance: {stats.avgAttendance}</p>
            <p>Average marks: {stats.avgmarks}</p>
            <p>Top Student: {stats.topPerformer.name}</p>
            <hr />
            <p>Total Teachers: {stats.totalTeachers}</p>
            <p>Average Experience: {stats.avgExperience}</p>
            <p>Most Experienced Teacher: {stats.mostExperiencedTeacher.name}</p>
        </div>
        </>
       
    )
}

export default SchoolView;