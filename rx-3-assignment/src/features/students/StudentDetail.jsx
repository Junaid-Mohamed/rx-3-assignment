import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "../../App.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./student.css";
import { deleteStudentAsync } from "./studentSlice";

const StudentDetail = () => {

    const {studentId} = useParams();
    // console.log(studentId);

    const student = useSelector((state)=> state.students.students.find((stud)=> stud._id === studentId));
    

    const disptach = useDispatch();

    return(
        <>
        <Header/>
        <div className="container pt-4">
            { student && <div>
            <h1>Student Details</h1>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            {student.attendance && <p>Attendance: {student.attendance}</p>}
            {student.marks && <p>Marks: {student.marks}</p>}
            <button  className="btn btn-warning"> <Link to="/add-student" state={{student}} >Edit Details</Link></button><button className="btn btn-danger delete-btn" onClick={()=> disptach(deleteStudentAsync(student._id))} >Delete</button> 
            </div>
            }
        </div>
        <Footer/>
        </>
    )
}
export default StudentDetail;