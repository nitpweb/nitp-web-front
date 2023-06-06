import React from "react"
import { AdCardStyle } from "../styles/adcard"

const Adcard = props => {
 return (
  <AdCardStyle>
   <div className="adcardrow adcardname">
    <span>{props.name}</span>
   </div>
   <div className="adcardrow designation">
    <span>{props.designation}</span>
   </div>
   <div className="type">
    <span>{props.type}</span>
   </div>
  </AdCardStyle>
 )
}

export default Adcard
