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
import StudentForm from "./features/students/StudentForm.jsx";
import StudentView from './features/students/StudentView.jsx';



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
    path:'/schools',
    element: <SchoolView/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <RouterProvider router={router} />
  </Provider>
)