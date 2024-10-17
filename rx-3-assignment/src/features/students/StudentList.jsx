import { Link } from "react-router-dom";

const StudentList = ({data}) =>{
    return(<main>
        <h2>Student List</h2>
        <ul>
            {data.map((std, index)=>(
                <Link key={std._id} to={`/student-details/${std._id}`} ><li>{std.name} (Age:{std.age})</li></Link> 
            ))}
        </ul>
    </main>)
}

export default StudentList; 