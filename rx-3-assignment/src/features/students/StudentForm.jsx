import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { addStudentAsync, updateStudentAsync } from "./studentSlice";

const StudentForm = () => {

    const dispatch = useDispatch();
    
const student = useLocation().state?.student;

// console.log(student);
 

    const [studentForm, setStudentForm] = useState({
        id: "",
        name:"",
        age:"",
        grade:"",
        gender:"",
        attendance: "",
        marks: ""
    })

    const [successMsg, setSuccessMsg] = useState("");
    const [errors, setErrors] = useState({});

    //  prepopulate the form only when student data changes.
    useEffect(()=>{
        if(student){
            setStudentForm({
                id: student._id || "",
                name: student.name|| "",
                age: student.age || "",
                grade: student.grade || "",
                gender: student.gender || "",
                attendance: student.attendance || "",
                marks: student.marks || ""
            });
        } else {
            setStudentForm({
                id: "",
                name: "",
                age: "",
                grade: "",
                gender: "",
                attendance: "",
                marks: ""
            });
        }
       
    },[student])

    const handleChange = (e) => {
        const {name,value} = e.target;
        setStudentForm({
            ...studentForm,
            [name]: name === "age" || name === "attendance" || name === "marks"  ?   parseInt(value): value
        })
    }

    const validateForm = () => {
        const newError = {};

        if(!studentForm.name){
            newError.name = "Name is required."
        }

        if(!studentForm.age || studentForm.age < 5 || studentForm.age > 16 ){
            newError.age = !studentForm.age ? "Age is required" : "Age must be between 5 and 16"
        }

        if(!studentForm.grade){
            newError.grade = "Grade is required."
        }

        if(!studentForm.gender) {
            newError.gender = "Gender is required."
        }

        if(studentForm.attendance && (studentForm.attendance < 0 || studentForm.attendance > 100)){
            newError.attendance = "Attendance must be between 0 and 100."
        }
        if(studentForm.marks && (studentForm.marks < 0 || studentForm.marks > 100)){
            newError.marks = "Marks must be between 0 and 100."
        }

        return newError;

    }

    const handleSubmit = (e) => {
        // e.preventDefault(); not using this as we are not submiting the form.
        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors)
        }else{
            setErrors({});
           
            if(student) {
                dispatch(updateStudentAsync(studentForm));
                setStudentForm({
                    id: "",
                    name: "",
                    age: "",
                    grade: "",
                    gender: "",
                    attendance: "",
                    marks: ""
                });
                setSuccessMsg("Student updated successfully.")
                setTimeout(()=>{
                    setSuccessMsg("");
                },2000)
            }
            else {
                dispatch(addStudentAsync(studentForm));
                setStudentForm({
                    id: "",
                    name: "",
                    age: "",
                    grade: "",
                    gender: "",
                    attendance: "",
                    marks: ""
                });
                setSuccessMsg("Student added successfully.")
                setTimeout(()=>{
                    setSuccessMsg("");
                },2000)
            }
        }
        
    }

    return(
        <>
        <Header/>
        <div className="container pt-4">
            <h1>Add Student</h1>
            <form>
            <div><input required type="text" placeholder="Name" name="name" value={studentForm.name} onChange={handleChange}/><br /><br />
            {errors.name && <p style={{color: "red"}} >{errors.name}</p> }
            </div>
            <div><input required type="number" placeholder="Age" name="age" value={studentForm.age} onChange={handleChange}/><br /><br />
            {errors.age && <p style={{color: "red"}} >{errors.age}</p> }
            </div>
            <div><input required type="text" placeholder="Grade"  name="grade" value={studentForm.grade} onChange={handleChange}/><br /><br />
            {errors.grade && <p style={{color: "red"}} >{errors.grade}</p> }
            </div>
            <div><label htmlFor="gender" >Gender</label>
            <input required type="radio" checked={studentForm.gender === "Male"} name="gender" className="gender-input" value="Male" onChange={handleChange} />Male
            <input required type="radio" checked={studentForm.gender === "Female"} name="gender" className="gender-input" value="Female" onChange={handleChange} />Female <br /><br />
            {errors.gender && <p style={{color: "red"}} >{errors.gender}</p> }
            </div>
            
            { student && (
                <>
            <div><input  type="number" placeholder="Attendance"  name="attendance" value={studentForm.attendance} onChange={handleChange}/><br /><br />
            {errors.attendance && <p style={{color: "red"}} >{errors.attendance}</p> }
            </div>
            <div><input  type="number" placeholder="Marks"  name="marks" value={studentForm.marks} onChange={handleChange}/><br /><br />
            {errors.marks && <p style={{color: "red"}} >{errors.marks}</p> }
            </div>
            </>
            )}
            
            { student ? (<button onClick={handleSubmit} type="button" className="btn btn-primary">Update</button>) : 
                (<button onClick={handleSubmit} type="button" >Add</button>) }
            {/* && (<button onClick={handleSubmit} type="button" className="btn btn-primary">Update</button>) ||
            <button onClick={handleSubmit} type="button" >Add</button>} */}
            </form>
            <div className="mt-2" style={{color: 'green'}} ><h4>{successMsg}</h4></div>
        </div>
      
        </>
    )
}

export default StudentForm;