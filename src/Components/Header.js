import React from 'react'
import photo from './images/sumago2.jpg'
import { BiSearch } from 'react-icons/bi';

export default function Header() {
    return (
        <>
<nav className="navbar navbar-expand-lg bg-rgb(20, 20,20) mb-5">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={photo} className='img-fluid'
    width="250rem"/></a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-danger" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Industries</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Life@Sumago</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Contact Us </a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#"><BiSearch/></a>
          
        </li>
        
        
      </ul>
      
     </div>
  </div>
</nav>
        </>
      );

}
