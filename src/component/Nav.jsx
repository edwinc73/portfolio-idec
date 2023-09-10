import React from "react"
import "../component/Nav.css"
import {Link} from "react-router-dom";



export default function Nav(){
  return(
    <>
      <nav>
      <Link to="/"><div className="logo">ID: E.C</div></ Link>
        <ul>
          <Link to="/"><li className="nav-link active-tab">Home</li></Link>
          <Link to="/work"><li className="nav-link">Work</li></Link>
          <Link to="/art"><li className="nav-link">Art</li></Link>
          <Link to="/contact"><li className="nav-link">Contact</li></Link>
        </ul>
        <ul className="nav-contact-links">
          <a href="#"><li className="nav-icon"><i className="fa fa-github-square" aria-hidden="true"></i></li></a>
        </ul>
      </nav>
    </>
  )
}
