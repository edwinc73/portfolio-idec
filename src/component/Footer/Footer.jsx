import React, { useEffect } from "react"
import "../Footer/Footer.css"
import {Link, useLocation } from "react-router-dom";

export default function Footer(){
  return(
    <>
      <footer>
        <div className="footer-container w-100">
          <div className="d-flex justify-content-between w-100 wrapper">
            <div className="left-col">
              <p>Designed in Figma and coded in VS code.<br />
              Built in React.js and bootstrap CSS, deployed to scalingo</p>
              <div className="footer-icons d-flex">
                <a href="#"><li className="footer-icon"><i className="fa fa-github-square" aria-hidden="true"></i></li></a>
                <a href="#"><li className="footer-icon"><i className="fa fa-github-square" aria-hidden="true"></i></li></a>
                <a href="#"><li className="footer-icon"><i className="fa fa-github-square" aria-hidden="true"></i></li></a>
              </div>
          </div>
            <div className="right-col d-flex ">
              <div className="speech-bubble">
                <img src="/speech-bubble.png" className="speech-bubble-img" alt="speech bubble bg" />
                <h3 className="text-blk bold">Fancy a chat?</h3>
                <p className="text-blk">send a message</p>
              </div>
              <img src="/profile picture.png" alt="" />
            </div>
          </div>
          <div className="footer-disclaimer">
            <p className="text-center">© 2023 Edwin Cheng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
