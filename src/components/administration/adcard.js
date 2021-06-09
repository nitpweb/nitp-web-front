import React from "react"
import { AdCardStyle } from "../styles/adcard"

const Adcard = props => {
  return (
      <AdCardStyle>
        <div className="row adrow adname">
          <span>{props.name}</span>
        </div>
        <div className="row adrow designation">
          <span>{props.designation}</span>
        </div>
        <div className="row type">
          <span>{props.type}</span>
        </div>
      </AdCardStyle>
  )
}

export default Adcard
