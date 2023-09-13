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
                <img src="/001.png" alt="Hero Image" className="hero-image" />
              </div>
        </div>
      </div>
      <div className="section-container">
        <div className="stack-text-container w-100 text-center">
          <h2 className="section-title">Tech stack</h2>
          <p>I am passionate about creating amazing digital experiences as such I invest my time in learning.</p>
        </div>
        <div className="columns row">
          <div className="column">
            <div className="column-title text-center">
              <h2 className="light">Frontend</h2>
            </div>
            <div className="column-items">
              <img src="/images.png" alt="" />
              <img src="/images.png" alt="" />
              <img src="/images.png" alt="" />
              <img src="/images.png" alt="" />
              <img src="/images.png" alt="" />
              <img src="/images.png" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="column-title text-center">
              <h2 className="light">Design</h2>
            </div>
            <div className="column-items">
              <img src="/images.png" alt="" />
              <img src="/images.png" alt="" />
              <img src="/images.png" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="column-title text-center">
              <h2 className="light">General</h2>
            </div>
            <div className="column-items-2 d-flex">
              <img src="/images.png" alt="" />
              <img src="/images.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="projects d-flex justify-content-center align-items-center">
          <img src="/Mobile placeholder.png" alt="" />
          <div className="text-container">
            <h2 className="section-title">Project Showcase</h2>
            <p>Check out my projects, I have examples of wechat miniapp development and web applications.</p>
            <Button str ="My Projects" />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="row about-container">
          <div className="col-6">
            <h2 className="section-title">About me</h2>
            <p className="text-container">I’m a developer from all over the globe, currently in Shanghai. As a graduate of Le Wagon coding bootcamp. My goal is to hone my craft and create captivating user experiences that seamlessly blend functionality and aesthetics. </p>
          </div>
          <div className="col-6 history-container">
            <ul className="history">
              <h3>Brief history</h3>
              <li><p>08-2023 // Graduating from LeWagon, Shanghai</p></li>
              <li className="light"><p>03-2022 // English Teacher, Shanghai </p></li>
              <li className="light"><p>04-2021 // Industrial Designer, Hong Kong </p></li>
              <li className="light"><p>09-2020 // Graduating University, UK Newcastle </p></li>
            </ul>
          </div>
        </div>
        <div className="button-center">
          <Button str="Resume"/>
        </div>
      </div>
      <div className="section-container">
        <div className="art-container row">
          <div className="col-6">
            <img src="/art-cards.png" alt="ai-art-cards" className="home-art-cards" />
          </div>
          <div className="text-container col-6">
            <h2 className="section-title">I mess around <br />with AI art</h2>
            <p>As well as creating beautiful digital experiences, I enjoy creating awesome artwork!</p>
            <Button str="Playground" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
