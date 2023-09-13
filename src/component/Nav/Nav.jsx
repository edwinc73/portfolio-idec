import React, { useEffect } from "react"
import "../Nav/Nav.css"
import {Link, useLocation } from "react-router-dom";

export default function Nav(){
  const location = useLocation().pathname;

  const changeNavLink = () => {
    const navLinks = document.querySelectorAll("#navLink")
    navLinks.forEach(link=>{
      console.log(location , link.innerHTML)
      if((location == "/" && link.innerHTML == "home") || (`/${link.innerHTML}` == location)){
        link.classList.remove("nav-link")
        link.classList.add("active-tab")
      } else {
        link.classList.remove("active-tab")
        link.classList.add("nav-link")
      }
    })
  }

  useEffect(changeNavLink, [location])

  return(
    <>
      <nav id="nav-bar">
      <Link to="/"><div className="logo">ID: E.C</div></ Link>
        <ul id="navLinks">
          <Link to="/"><li id="navLink" className="nav-link">home</li></Link>
          <Link to="/work"><li id="navLink" className="nav-link">work</li></Link>
          <Link to="/art"><li id="navLink" className="nav-link">art</li></Link>
          <Link to="/contact"><li id="navLink" className="nav-link">contact</li></Link>
        </ul>
        <ul className="nav-contact-links">
          <a href="#"><li className="nav-icon"><i className="fa fa-github-square" aria-hidden="true"></i></li></a>
        </ul>
        <div className="nav-bg blur"></div>
      </nav>
    </>
  )
}
