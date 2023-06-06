import React from "react"
// import video1 from "./video/demoVideo.mp4"
import logo from "./video/load.gif"
import { VideoStyle } from "./styles"
function Video() {
 return (
  <VideoStyle>
   {/* <video src={video1} width="600" height="300" controls="controls" autoplay="true" /> */}
   <img src={logo} alt="loading..." />
  </VideoStyle>
 )
}

export default Video
