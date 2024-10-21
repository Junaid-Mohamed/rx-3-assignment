// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import store from "./app/store.js";
import SchoolView from './features/school/SchoolView.jsx';
import ClassView from "./features/students/ClassView.jsx";
import StudentDetail from "./features/students/StudentDetail.jsx";
import StudentForm from "./features/students/StudentForm.jsx";
import StudentView from "./features/students/StudentView.jsx";
import StaffView from "./features/teachers/StaffView.jsx";
import TeacherDetail from "./features/teachers/TeacherDetail.jsx";
import TeacherForm from "./features/teachers/TeacherForm.jsx";
import TeacherView from "./features/teachers/TeacherView.jsx";




const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/students',
    element: <StudentView/>
  },
  {
    path:'/teachers',
    element: <TeacherView/>
  },
  {
    path:'/add-student',
    element: <StudentForm/>
  },
  {
    path:'/add-teacher',
    element: <TeacherForm/>
  },
  {
    path:'/teacher-details/:teacherId',
    element: <TeacherDetail/>
  },
  {
    path:'/student-details/:studentId',
    element: <StudentDetail/>
  },
  {
    path:'/school',
    element: <SchoolView/>
  },
  {
    path: '/class',
    element: <ClassView/>
  },
  {
    path: '/staff',
    element: <StaffView/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <RouterProvider router={router} />
  </Provider>
)