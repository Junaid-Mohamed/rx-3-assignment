// import { Link } from "react-router-dom";

// const Header = () => {
//     return(
//         <header className="bg-light" >
//             <nav className="navbar navbar-expand-lg">
//             <div className="container">
//                 <Link className="navbar-brand fs-2" to="/" >School Management App</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-targer="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
//                     <span className="navbar-toggle-icon" ></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <Link className="nav-link active" to="/" >Students</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/classes" >Classes</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/school" >School</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             </nav>
//         </header>
//     )
// }

// export default Header;

import { Link } from 'react-router-dom';

const Header = ()=>{
  
  return(
    <header className='bg-light'>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand fs-2" to="/">School Management App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Students</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/classes">Classes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/school">School</Link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;