import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import photo from './images/sumago2.jpg';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-rgb(20, 20,20) mb-5">
        <div className="container-fluid nav1">
      
          <NavLink className="navbar-brand" to="/">
            <img src={photo} className="img-fluid" width="250rem" />
          </NavLink>
          <button
            className=" navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              exact
              to="/"
              activestyle={{ color: 'white' }} // Set text color to white for non-active tabs
            >
              Home
            </NavLink>
          </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/Aboutuspage">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/Service">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/industries"
                >
                  Industries
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/Life"
                >
                  Life@Sumago
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="#">
                  <BiSearch />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
    
      </nav>
    </>
  );
}
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { BiSearch } from 'react-icons/bi';
// import photo from './images/sumago2.jpg';

// export default function Header() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg bg-rgb(20, 20,20) mb-5">
//         <div className="container-fluid">
//           <NavLink className="navbar-brand" to="/">
//             <img src={photo} className="img-fluid" width="250rem" />
//           </NavLink>
//           <button
//             className="navbar-toggler bg-light"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <NavLink
//               className="nav-link"
//               activeClassName="active"
//               exact
//               to="/"
//               activestyle={{ color: 'white' }} // Set text color to white for non-active tabs
//             >
//               Home
//             </NavLink>
//           </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" activeClassName="active" to="/about">
//                   About Us
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" activeClassName="active" to="/services">
//                   Services
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link"
//                   activeClassName="active"
//                   to="/industries"
//                 >
//                   Industries
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link"
//                   activeClassName="active"
//                   to="/life@sumago"
//                 >
//                   Life@Sumago
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link"
//                   activeClassName="active"
//                   to="/contact"
//                 >
//                   Contact Us
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" activeClassName="active" to="#">
//                   <BiSearch />
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

