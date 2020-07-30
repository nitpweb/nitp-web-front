import React from "react"
import "./css/adcard.css"

const Adcard = props => {
  return (
    <>
      <div data-aos="zoom-in" className="adcard">
        <div className="row adrow adname">
          <span>{props.name}</span>
        </div>
        <div className="row adrow designation">
          <span>{props.designation}</span>
        </div>
        <div className="row type">
          <span>{props.type}</span>
        </div>
      </div>
    </>
  )
}

export default Adcard
