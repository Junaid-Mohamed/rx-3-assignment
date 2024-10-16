import { data } from "jquery";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import StudentList from "./StudentList";
import { fetchStudents } from "./studentSlice";

const StudentView = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchStudents())
    },[])
    const stdData = useSelector((state)=> {
        // console.log(state.students);
        return state.students})
    // console.log(stdData);
    // const {data, error, status} = useSelector((state)=> state.student)
    const error = useSelector((state)=> state.students.error);
    const status = useSelector((state)=> state.students.status);
    // console.log(stdData, error, status); 
    console.log(error);

    return(
        <div>
            <Header/>
            <main className="container py-4">
            <h1>Student View</h1>
            <div>{status === "loading" && <p>Loading....</p>}</div>
            {status === "error" && <p>error</p>}
            {console.log(status)}
            {status === "Success" && <StudentList data={stdData.students}/>}
            </main>
            
        </div>
    )
}

export default StudentView;