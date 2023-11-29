import React from "react"
import { NoticeStyle } from "../styles/notice"
import downimg from "./img/download.svg"
import flag from "./img/flag.svg"
import styled, { keyframes } from "styled-components"

const blinkAnimation = keyframes`
  0% {
    color:   #941B0C;
  }
  50% {
    color: #FFF700 ;
  }
  100% {
    color:  #941B0C;
  }
`

const BlinkingText = styled.span`
 animation: ${blinkAnimation} 1.9s linear infinite;
`

const Notice = props => {
 return (
  <>
   <NoticeStyle>
    <p className="noticecarddetail">
     {props.imp === 1 ? <img id="flag" src={flag} alt="f" /> : ""}
     {props.imp === 1 ? (
      props.link ? (
       <a
        href={props.link}
        rel="noopener noreferrer"
        target="_blank"
        style={{ color: "#941b0c", fontWeight: "bold" }}
       >
        {" "}
        <BlinkingText>{props.detail}</BlinkingText>
       </a>
      ) : (
       <span style={{ color: "#941b0c", fontWeight: "bold" }}>
        {" "}
        <BlinkingText>{props.detail}</BlinkingText>
       </span>
      )
     ) : props.link ? (
      <a href={props.link} rel="noopener noreferrer" target="_blank">
       {" "}
       {props.detail}
      </a>
     ) : (
      <span>{props.detail}</span>
     )}
    </p>
    <div>
     {props.attachments.map((elem, index) => {
      if (elem.url)
       return (
        <ul key={index}>
         <img id="notdownimg" src={downimg} alt="c" />
         <a
          className="notdown"
          href={elem.url}
          target="_blank"
          rel="noopener noreferrer"
         >
          {elem.caption.length > 256
           ? elem.caption.substring(0, 256) + "..."
           : elem.caption}
         </a>
        </ul>
       )
      return null
     })}
    </div>
   </NoticeStyle>
  </>
 )
}

export default Notice
