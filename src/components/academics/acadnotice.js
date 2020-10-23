import React from "react"
import "./css/acadnotice.css"
import downimg from "./img/download.svg"

const Acadnotice = props => {
  return (
    <>
      <div className="acadnoticecard">
        <p className="acadcarddetail">{props.detail}</p>
        <div id="acadnotdate">
          <div>
            {props.attachments.map(elem => {
              return (
                <>
                  <img id="acaddownimg" src={downimg} alt="c" />
                  <a className="acaddown" href={elem.url} target="blank">
                    {elem.caption}
                  </a>
                </>
              )
            })}
          </div>
          <div>
            <p className="acadt">{props.time}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export const Acadnoticeb = props => {
  return (
    <>
      <div className="acadnoticecard acadnoticecard1">
        <p className="acadcarddetail">{props.detail}</p>
        <div id="acadnotdate">
          <div>
            {props.attachments.map(elem => {
              return (
                <>
                  <img id="acaddownimg" src={downimg} alt="c" />
                  <a className="acaddown" href={elem.url} target="blank">
                    {elem.caption}
                  </a>
                </>
              )
            })}
          </div>
          <div>
            <p className="acadt">{props.time}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Acadnotice
