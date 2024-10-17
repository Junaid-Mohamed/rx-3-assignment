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




const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/add-student',
    element: <StudentForm/>
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <RouterProvider router={router} />
  </Provider>
)