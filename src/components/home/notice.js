import React from "react"
import "./css/notice.css"
import downimg from "./img/download.svg"
const Notice = props => {
  return (
    <>
      <div className="noticecard">
        <p className="noticecarddetail">{props.detail}</p>
        <div id="notdate">
          <div>
            <p className="notet">{props.time}</p>
          </div>
          <div>
            {props.attachments.map(elem => {
              return (
                <>
                  <img id="notdownimg" src={downimg} alt="c" />
                  <a className="notdown" href={elem.url} target="blank">
                    {elem.caption}
                  </a>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default Notice
