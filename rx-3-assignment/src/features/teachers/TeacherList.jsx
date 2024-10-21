import { Link } from "react-router-dom";

const TeacherList = ({data}) =>{
    return(<main>
        <h2>Teacher List</h2>
        <ul>
            {data.map((teacher)=>(
                <Link key={teacher._id} to={`/teacher-details/${teacher._id}`} ><li>{teacher.name} (Age:{teacher.age})</li></Link> 
            ))}
        </ul>
    </main>)
}

export default TeacherList; 