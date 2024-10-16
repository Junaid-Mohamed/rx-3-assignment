// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import SchoolView from './features/school/SchoolView.jsx';
import StudentView from './features/students/StudentView.jsx';



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
    path:'/schools',
    element: <SchoolView/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)