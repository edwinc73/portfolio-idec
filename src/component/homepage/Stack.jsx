import React from "react"
import "../homepage/Stack.css"


export default function Stack(){
  return(
    <>
      <div className="stack-text-container text-center wrapper">
        <h2 className="section-title">Tech stack</h2>
        <p>I am passionate about creating amazing digital experiences as such I invest my time in learning.</p>
      </div>
      <div className="columns row">
        <div className="column col-4">
          <div className="column-title text-center">

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
      </div>
    </>
  )
}
