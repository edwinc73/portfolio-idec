import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

import Nav from "../src/component/Nav"
import Home from "../src/component/homepage/Home"
import Work from "../src/component/workpage/Work"
import Art from "../src/component/artPage/Art"
import Contact from "../src/component/contactPage/Contact"

function App() {

  document.addEventListener("mousemove", e => {
    const xPosition = e.pageX
    const yPosition = e.pageY
    const target = document.querySelector("#mouse-event")
    target.style.top = `${yPosition}px`
    target.style.left = `${xPosition}px`
  })

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
