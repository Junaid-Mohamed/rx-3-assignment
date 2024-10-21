import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../students/student.css";
import { setFilter, setSortBy } from "./teacherSlice";

const StaffView = () => {

    const dispatch = useDispatch();
    const teachers = useSelector((state)=> state.teachers.teachers);

    const filter = useSelector((state)=> state.teachers.filter);
    const sortBy = useSelector((state)=> state.teachers.sortBy);

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    }

    const handleSortChange = (e) => {
        dispatch(setSortBy(e.target.value));
    }

    const filteredTeachers = teachers?.filter((teacher)=> filter === "all" ? teacher : teacher.gender === filter)

    const sortedTeachers = filteredTeachers?.sort((a,b)=>{
        if(sortBy === "name"){
            return a.name.localeCompare(b.name)
        } else if (sortBy === "subjectSpecialization") {
            return a.subjectSpecialization.localeCompare(b.subjectSpecialization)
        } else if( sortBy === "yearsOfExperience"){
            return b.yearsOfExperience - a.yearsOfExperience;
        }
        return 0
    });

  
    return(
        <>
        <Header/>
        <div className="container mt-3">
        <h1 className="py-2">Staff View </h1>
        <label className="filter" htmlFor="genderFilter">Filter by Gender: </label>
        <select onChange={handleFilterChange} name="genderFilter">
            <option value="all">All</option>
            <option value="male">Boys</option>
            <option value="female">Girls</option>
        </select>
        <br /><br />
        <label  className="filter" htmlFor="sortFilter">Sort by: </label>
        <select onChange={handleSortChange} name="sortFilter">
            <option value="name">Name</option>
            <option value="subjectSpecialization">Specialization Subject</option>
            <option value="yearsOfExperience">Experience</option>
        </select>
        <ul className="pt-4" > 
            {sortedTeachers?.map((teacher)=>(
                <li key={teacher._id} >{teacher.name} - {teacher.gender} - Experience: {teacher.yearsOfExperience} - Specialization Subject: {teacher.subjectSpecialization}</li>
            ))}
        </ul>
        </div> 
        <Footer/>
        </>
    )
}

export default StaffView;