import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { addTeacherAsync, updateTeacherAsync } from "./teacherSlice";

const TeacherForm = () => {

    const dispatch = useDispatch();
    
const teacher = useLocation().state?.teacher;

// console.log(student);
 

    const [teacherForm, setTeacherForm] = useState({
        id: "",
        name:"",
        age:"",
        subjectSpecialization:"",
        gender:"",
        yearsOfExperience: "",
        gradeAssigned: ""
    })

    const [successMsg, setSuccessMsg] = useState("");
    const [errors, setErrors] = useState({});

    //  prepopulate the form only when teacher data changes.
    useEffect(()=>{
        if(teacher){
            setTeacherForm({
                id: teacher._id || "",
                name: teacher.name|| "",
                age: teacher.age || "",
                subjectSpecialization: teacher.subjectSpecialization || "",
                gender: teacher.gender || "",
                yearsOfExperience: teacher.yearsOfExperience || "",
                gradeAssigned: teacher.gradeAssigned || ""
            });
        } else {
            setTeacherForm({
                id: "",
                name:"",
                age:"",
                subjectSpecialization:"",
                gender:"",
                yearsOfExperience: "",
                gradeAssigned: ""
            });
        }
       
    },[teacher])

    const handleChange = (e) => {
        const {name,value} = e.target;
        setTeacherForm({
            ...teacherForm,
            [name]: name === "age" || name === "yearsOfExperience" ?   parseInt(value): value
        })
    }

    const validateForm = () => {
        const newError = {};

        if(!teacherForm.name){
            newError.name = "Name is required."
        }

        if(!teacherForm.age || teacherForm.age < 20 || teacherForm.age > 55 ){
            newError.age = !studentForm.age ? "Age is required" : "Age must be between 20 and 55"
        }

        if(!teacherForm.gender) {
            newError.gender = "Gender is required."
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
           
            if(teacher) {
                dispatch(updateTeacherAsync(teacherForm));
                setTeacherForm({
                    id: "",
                    name:"",
                    age:"",
                    subjectSpecialization:"",
                    gender:"",
                    yearsOfExperience: "",
                    gradeAssigned: ""
                });
                setSuccessMsg("Teacher updated successfully.")
                setTimeout(()=>{
                    setSuccessMsg("");
                },2000)
            }
            else {
                dispatch(addTeacherAsync(teacherForm));
                setTeacherForm({
                    id: "",
                    name:"",
                    age:"",
                    subjectSpecialization:"",
                    gender:"",
                    yearsOfExperience: "",
                    gradeAssigned: ""
                });
                setSuccessMsg("Teacher added successfully.")
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
            <h1>Add Teacher</h1>
            <form>
            <div><input required type="text" placeholder="Name" name="name" value={teacherForm.name} onChange={handleChange}/><br /><br />
            {errors.name && <p style={{color: "red"}} >{errors.name}</p> }
            </div>
            <div><input required type="number" placeholder="Age" name="age" value={teacherForm.age} onChange={handleChange}/><br /><br />
            {errors.age && <p style={{color: "red"}} >{errors.age}</p> }
            </div>
            <div><input required type="text" placeholder="Grade Assigned"  name="gradeAssigned" value={teacherForm.gradeAssigned} onChange={handleChange}/><br /><br />
            </div>
            <div><label htmlFor="gender" >Gender</label>
            <input required type="radio" checked={teacherForm.gender === "male"} name="gender" className="gender-input" value="male" onChange={handleChange} />Male
            <input required type="radio" checked={teacherForm.gender === "female"} name="gender" className="gender-input" value="female" onChange={handleChange} />Female <br /><br />
            {errors.gender && <p style={{color: "red"}} >{errors.gender}</p> }
            </div>
            
            { teacher && (
                <>
            <div><input  type="number" placeholder="Experience"  name="yearsOfExperience" value={teacherForm.yearsOfExperience} onChange={handleChange}/><br /><br />
            </div>
            <div><input  type="string" placeholder="Subject Specialization"  name="subjectSpecialization" value={teacherForm.subjectSpecialization} onChange={handleChange}/><br /><br />
            </div>
            </>
            )}
            
            { teacher ? (<button onClick={handleSubmit} type="button" className="btn btn-primary">Update</button>) : 
                (<button onClick={handleSubmit} type="button" >Add</button>) }
            {/* && (<button onClick={handleSubmit} type="button" className="btn btn-primary">Update</button>) ||
            <button onClick={handleSubmit} type="button" >Add</button>} */}
            </form>
            <div className="mt-2" style={{color: 'green'}} ><h4>{successMsg}</h4></div>
        </div>
      
        </>
    )
}

export default TeacherForm;