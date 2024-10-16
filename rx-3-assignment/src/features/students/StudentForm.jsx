import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import { addStudentAsync } from "./studentSlice";

const StudentForm = () => {

    const dispatch = useDispatch();
    

    const [studentForm, setStudentForm] = useState({
        name:"",
        age:"",
        grade:"",
        gender:""
    })

    const [errors, setErros] = useState({});

    const handleChange = (e) => {
        const {name,value} = e.target;
        setStudentForm({
            ...studentForm,
            [name]: name === "age"? parseInt(value): value
        })
    }

    const validateForm = () => {
        const newError = {};

        if(!studentForm.name){
            newError.name = "Name is required."
        }

        if(!studentForm.age || studentForm.age < 5 || studentForm.age > 17 ){
            newError.age = !studentForm.age ? "Age is required" : "Age must be between 5 and 16"
        }

        if(!studentForm.grade){
            newError.grade = "Grade is required."
        }

        if(!studentForm.gender) {
            newError.gender = "Gender is required."
        }

        return newError;

    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0){
            setErros(formErrors)
        }else{
            setErros({});
            console.log(studentForm);
            dispatch(addStudentAsync(studentForm))
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
            <input required type="radio" name="gender" value="male" onChange={handleChange} />Male
            <input required type="radio" name="gender" value="female" onChange={handleChange} />Female <br /><br />
            {errors.gender && <p style={{color: "red"}} >{errors.gender}</p> }
            </div>
            <button onClick={handleSubmit} type="button" >Add</button>
            </form>
        </div>
        </>
    )
}

// todo 
//  attendance and marks to be added if editing an existing student.


export default StudentForm;