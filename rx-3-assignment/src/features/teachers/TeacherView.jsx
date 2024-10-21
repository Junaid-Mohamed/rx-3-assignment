import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../students/student.css";
import TeacherList from "./TeacherList";
import { fetchTeachers } from "./teacherSlice";

const TeacherView = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTeachers())
    },[])
    const teacherData = useSelector((state)=> {
        // console.log(state.students);
        return state.teachers})
    // const {data, error, status} = useSelector((state)=> state.student)
    const error = useSelector((state)=> state.teachers.error);
    const status = useSelector((state)=> state.teachers.status);
    // console.log(stdData, error, status); 
    // console.log(error);

    return(
        <div>
            <Header/>
            <main className="container py-4">
            <h1 className="pb-4">Teacher View</h1>
            <Link className="add-student" to="/add-teacher" >Add Teacher</Link>
            <div className="pt-4" >{status === "loading" && <p>Loading....</p>}</div>
            {status === "error" && <p>{error}</p>}
            {status === "Success" && <TeacherList data={teacherData.teachers}/>}
            </main>
            <Footer/>
        </div>
    )
}

export default TeacherView;