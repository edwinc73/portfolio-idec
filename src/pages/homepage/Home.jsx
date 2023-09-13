import React from "react"
import "../homepage/Home.css"
import Button from "../../component/Button/Button"

export default function Home(){
  return(
    <>
    <div className="wrapper">
      <div className="section-container">
        <div className="row hero no-wrapper">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div className="text-container">
                <div className="title">
                  <h2>Hello, Im Edwin.</h2>
                  <h1>Frontend Developer <br />by day,</h1>
                  <h2 className="light">AI artist by night.</h2>
                </div>
                <p>LeWagon Bootcamp Alumni, specializing in frontend development and WeChat Mini Program development</p>
                <Button str ="My Projects" />
              </div>
            </div>
              <div className="col-6 no-wrapper">
                <img src="../../../public/001.png" alt="Hero Image" className="hero-image" />
              </div>
        </div>
      </div>
      <div className="section-container">
        <div className="stack-text-container w-100 text-center">
          <h2 className="section-title">Tech stack</h2>
          <p>I am passionate about creating amazing digital experiences as such I invest my time in learning.</p>
        </div>
        <div className="columns row w-100">
          <div className="column">
            <div className="column-title text-center">
              <h2 className="light">Frontend</h2>
            </div>
            <div className="column-items">
              <img src="../../../public/images.png" alt="" />
              <img src="../../../public/images.png" alt="" />
              <img src="../../../public/images.png" alt="" />
              <img src="../../../public/images.png" alt="" />
              <img src="../../../public/images.png" alt="" />
              <img src="../../../public/images.png" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="column-title text-center">
              <h2 className="light">Design</h2>
            </div>
            <div className="column-items">
              <img src="../../../public/images.png" alt="" />
              <img src="../../../public/images.png" alt="" />
              <img src="../../../public/images.png" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="column-title text-center">
              <h2 className="light">General</h2>
            </div>
            <div className="column-items-2 d-flex">
              <img src="../../../public/images.png" alt="" />
              <img src="../../../public/images.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="projects d-flex justify-content-center align-items-center">
          <img src="../../../public/Mobile placeholder.png" alt="" />
          <div className="text-container">
            <h2>Project Showcase</h2>
            <p>Check out my projects, I have examples of wechat miniapp development and web applications.</p>
            <Button str ="My Projects" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
