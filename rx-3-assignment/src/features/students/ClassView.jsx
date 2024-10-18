import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./student.css";
import { setFilter, setSortBy } from "./studentSlice";

const ClassView = () => {

    const dispatch = useDispatch();
    const students = useSelector((state)=> state.students.students);
    console.log(students);

    const filter = useSelector((state)=> state.students.filter);
    const sortBy = useSelector((state)=> state.students.sortBy);

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    }

    const handleSortChange = (e) => {
        dispatch(setSortBy(e.target.value));
    }

    const filteredStudents = students?.filter((stud)=> filter === "all" ? stud : stud.gender === filter)

    const sortedStudents = filteredStudents?.sort((a,b)=>{
        if(sortBy === "name"){
            return a.name.localeCompare(b.name)
        } else if (sortBy === "marks") {
            return b.marks - a.marks;
        } else if( sortBy === "attendance"){
            return b.attendance - a.attendance;
        }
        return 0
    });

    console.log(sortedStudents);
    return(
        <>
        <Header/>
        <div className="container mt-3">
        <h1 className="py-2">Class View </h1>
        <label className="filter" htmlFor="genderFilter">Filter by Gender: </label>
        <select onChange={handleFilterChange} name="genderFilter">
            <option value="all">All</option>
            <option value="Male">Boys</option>
            <option value="Female">Girls</option>
        </select>
        <br /><br />
        <label  className="filter" htmlFor="sortFilter">Sort by: </label>
        <select onChange={handleSortChange} name="sortFilter">
            <option value="name">Name</option>
            <option value="marks">Marks</option>
            <option value="attendance">Attendance</option>
        </select>
        <ul className="pt-4" > 
            {sortedStudents?.map((stud)=>(
                <li>{stud.name} - {stud.gender} - Marks: {stud.marks} - Attendance: {stud.attendance}</li>
            ))}
        </ul>
        </div> 
        <Footer/>
        </>
    )
}

export default ClassView;