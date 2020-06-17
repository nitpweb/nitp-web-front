import React from "react"
import { css } from "styled-components"
import "./css/notice.css"

const Notice = props => {
  return (
    <>
      <div className="noticecard">
        <h4>{props.detail}</h4>
        <p id="fp">{props.time}</p>
      </div>
    </>
  )
}
export default Notice
