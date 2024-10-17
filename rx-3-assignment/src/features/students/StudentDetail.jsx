import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./student.css";

const StudentDetail = () => {

    const {studentId} = useParams();
    // console.log(studentId);

    const student = useSelector((state)=> state.students.students.find((stud)=> stud._id === studentId));
    console.log(student);

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
            <button  className="btn btn-warning"> <Link to={``}>Edit Details</Link></button><button className="btn btn-danger delete-btn" >Delete</button> 
            </div>
            }
        </div>
        </>
    )
}

export default StudentDetail;