import React from "react"
import "./css/depnotice.css"
import downimg from "./img/download.svg"

const Depnotice = props => {
  return (
    <>
      <div className="depnoticecard">
        <p className="depcarddetail">{props.detail}</p>
        <div id="depnotdate">
          <div>
            {props.attachments.map(elem => {
              return (
                <>
                  <img id="depdownimg" src={downimg} alt="c" />
                  <a className="depdown" href={elem.url} target="blank">
                    {elem.caption}
                  </a>
                </>
              )
            })}
          </div>
          <div>
            <p className="dept">{props.time}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Depnotice
