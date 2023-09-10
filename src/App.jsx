import { useState } from 'react'
import './App.css'
import Nav from "../src/component/Nav"

function App() {

  document.addEventListener("mousemove", e => {
    const xPosition = e.pageX
    const yPosition = e.pageY
    const target = document.querySelector("#mouse-event")
    target.style.top = `${yPosition}px`
    target.style.left = `${xPosition}px`
  })

  return(
    <>
      <main>
        <Nav />
      </main>
      <div id="mouse-event-container">
        <div id="mouse-event"></div>
      </div>
      <div className="bg"></div>
    </>
  )
}

export default App
