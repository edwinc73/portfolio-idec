import React from "react"
import "../component/Nav.css"


export default function Nav(){
  return(
    <>
      <nav>
        <div className="logo">ID: E.C</div>
        <ul>
          <a href="#"><li className="nav-link active-tab">Home</li></a>
          <a href="#"><li className="nav-link">Work</li></a>
          <a href="#"><li className="nav-link">Art</li></a>
          <a href="#"><li className="nav-link">Contact</li></a>
        </ul>
        <div className="d-flex">
          <div className="">hello</div>
          <div className="">hello</div>

          <div className="">hello</div>

          <div className="">hello</div>

          <div className="">hello</div>

        </div>
        <ul className="nav-contact-links">
          <a href="#"><li className="nav-icon"><i class="fa fa-github-square" aria-hidden="true"></i></li></a>
        </ul>
      </nav>
    </>
  )
}
