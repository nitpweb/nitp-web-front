import React from "react"
import "./css/notice.scss"
import downimg from "./img/download.svg"
import flag from "./img/flag.svg"
const Notice = props => {
  return (
    <>
      <div className="noticecard">
        <p className="noticecarddetail"><a href={props.link}>{props.imp==1?<img id="flag" src={flag} alt="f" />:""}{" "}{props.detail}</a></p>
        <div id="notdate">
          <div>
            {props.attachments.map(elem => {
              if(elem.url)
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
          <div>
            <p className="notet">{props.time}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Notice
