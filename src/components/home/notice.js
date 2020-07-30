import React from "react"
import "./css/notice.css"

const Notice = props => {
  return (
    <>
      <div data-aos="fade-up" className="noticecard">
        <p className="noticecarddetail">{props.detail}</p>
        <p id="fp">{props.time}</p>
      </div>
    </>
  )
}
export default Notice
