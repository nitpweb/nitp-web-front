import React from "react"
import "./css/acadnotice.css"
import downimg from "./img/download.svg"

const Acadotice = props => {
  return (
    <>
      <div className="acadnoticecard">
        <p className="acadcarddetail">{props.detail}</p>
        <div id="acadnotdate">
          <div>
            <p className="acadt">{props.time}</p>
          </div>
          <div>
            <img id="acaddownimg" src={downimg} alt="c" />
            <a className="acaddown" href={props.url}>
              Download
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Acadotice
