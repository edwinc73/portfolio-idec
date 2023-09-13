import React from "react"

export default function Button(props){
  const str = props.str
  return(
    <>
      <button>{str} <img src="/cta-arrow.svg" alt="" /></button>
    </>
  )
}
