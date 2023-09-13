import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

import Nav from "../src/component/Nav/Nav"
import Home from "../src/pages/homepage/Home"
import Work from "./pages/workpage/Work"
import Art from "./pages/artPage/Art"
import Contact from "../src/pages/contactPage/Contact"

function App() {

  document.addEventListener("mousemove", e => {
    const xPosition = e.clientX
    const yPosition = e.clientY
    const target = document.querySelector("#mouse-event")
    target.style.top = `${yPosition}px`
    target.style.left = `${xPosition}px`
  })

  // var prevScrollpos = window.scrollY;

  // document.addEventListener("scroll",e =>{
  //   var currentScrollPos = window.scrollY;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById("nav-bar").classList.remove("hidden");
  //   } else {
  //     document.getElementById("nav-bar").classList.add("hidden");
  //   }
  //   prevScrollpos = currentScrollPos;
  // })

  return(
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div id="mouse-event-container">
        <div id="mouse-event"></div>
      </div>
      <div className="bg"></div>
    </Router>
  )
}

export default App

// add scroll locking js
