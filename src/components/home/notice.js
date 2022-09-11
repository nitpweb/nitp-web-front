import React from "react"
import { NoticeStyle } from "../styles/notice"
import downimg from "./img/download.svg"
import flag from "./img/flag.svg"
const Notice = props => {
  // const newtime = new Date().getTime()

  // let d = Math.round((newtime - props.time) / 3600000)
  // if (d > 48) {
  //   d = new Date(props.time).toLocaleDateString()
  // } else if (d > 24) {
  //   d = `${Math.round(d / 24)} days ago`
  // } else if (d < 1) {
  //   d = `Just now`
  // } else if (d < 2) {
  //   d = `${d} hour ago`
  // } else {
  //   d = `${d} hours ago`
  // }
  return (
    <>
      <NoticeStyle>
        <p className="noticecarddetail">
          {props.imp == 1 ? <img id="flag" src={flag} alt="f" /> : ""}
          <a href={props.link} rel="noopener noreferrer" target="_blank">
            {" "}
            {props.detail}
          </a>
        </p>
        <div>
            {props.attachments.map(elem => {
              if (elem.url)
                return (
                  <ul>
                    <img id="notdownimg" src={downimg} alt="c" />
                    <a
                      className="notdown"
                      href={elem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {elem.caption.length>256 ? elem.caption.substring(0, 256) + "..." : elem.caption}
                    </a>
                  </ul>
                )
            })}
          {/* <div>
            <p className="notet">{d}</p>
          </div> */}
        </div>
      </NoticeStyle>
    </>
  )
}
export default Notice
