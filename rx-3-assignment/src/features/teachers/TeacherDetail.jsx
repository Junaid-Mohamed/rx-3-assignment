import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../../App.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../students/student.css";
import { deleteTeacherAsync, updateTeacherAsync } from "./teacherSlice";


const TeacherDetail = () => {

    const {teacherId} = useParams();
    // console.log(studentId);

    const teacher = useSelector((state)=> state.teachers.teachers.find((teacher)=> teacher._id === teacherId));
    

    const disptach = useDispatch();

    return(
        <>
        <Header/>
        <div className="container pt-4">
            { teacher && <div>
            <h1>Teacher Details</h1>
            <p>Name: {teacher.name}</p>
            <p>Age: {teacher.age}</p>
            <p>Grade Assigned: {teacher.gradeAssigned}</p>
            
            {teacher.yearsOfExperience && <p>Experience: {teacher.yearsOfExperience}</p>}
            {teacher.subjectSpecialization &&<p>Subject Specialization: {teacher.subjectSpecialization}</p>}
            <button  className="btn btn-warning"> <Link to="/add-teacher" state={{teacher}} >Edit Details</Link></button><button className="btn btn-danger delete-btn" onClick={()=> disptach(deleteTeacherAsync(teacher._id))} >Delete</button> 
            </div>
            }
        </div>
        <Footer/>
        </>
    )
}
// to={{pathname:'/add-student', state: {student}}}
export default TeacherDetail;