import React from "react"
import "../homepage/Hero.css"


export default function Hero(){
  return(
    <>
      <div className="row hero-container">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="text-container">
            <div className="title">
              <h2>Hello, Im Edwin.</h2>
              <h1>Frontend Developer <br />by day,</h1>
              <h2 className="light">AI artist by night.</h2>
            </div>
            <p>LeWagon Bootcamp Alumni, specializing in frontend development and WeChat Mini Program development</p>
            <button>My Projects</button>
          </div>
        </div>
          <div className="col-6">
            <img src="../../../public/001.png" alt="Hero Image" className="hero-image" />
          </div>
      </div>
    </>
  )
}
