import React from "react"
import float from "../global/img/float.svg"
import "../global/css/float.css"
const Floatmenu = () => (
 <>
  <div className="float">
   <div id="float-menu">
    <div className="float-card">
     <a href="#home">
      <h3>Home</h3>
     </a>
    </div>
    <div className="float-card">
     <a href="#cc">
      <h3>Computer Center</h3>
     </a>
    </div>
    <div className="float-card">
     <a href="#lib">
      <h3>Library</h3>
     </a>
    </div>
    <div className="float-card">
     <a href="#med">
      <h3>Medical Facilities</h3>
     </a>
    </div>
    <div className="float-card">
     <a href="#sport">
      <h3>Sport Facilities</h3>
     </a>
    </div>
    <div className="float-card">
     <a href="#hostel">
      <h3>Hostel & Mess</h3>
     </a>
    </div>
    <div className="float-card">
     <a href="#lab">
      <h3>Laboratories</h3>
     </a>
    </div>
    {/* <div className="float-card">
     <a href="#wifi">
      <h3>Wifi</h3>
     </a>
    </div> */}
    <div className="float-card">
     <a href="#bank">
      <h3>Bank</h3>
     </a>
    </div>
    <div className="float-card">
     <a href="#security">
      <h3>Security</h3>
     </a>
    </div>
    <div className="float-card">
     <a href="#wc">
      <h3>Woman Cell</h3>
     </a>
    </div>
    <div className="float-card">
     <a href="#electric">
      <h3>EMU</h3>
     </a>
    </div>
   </div>
   <img
    src={float}
    id="floatimg"
    alt=""
    onMouseOver={function () {
     var x = document.querySelector("#float-menu")
     var y = document.querySelector("#floatimg")
     if (x.style.display === "none") {
      x.style.display = "block"
      y.style.transform = "rotate(180deg)"
      y.style.transition = "0.5s"
      x.style.transition = "1.2s"
     } else {
      x.style.display = "none"
      y.style.transform = "rotate(0deg)"
      x.style.transition = "1.2s"
      y.style.transition = "0.5s"
     }
    }}
   />
  </div>
 </>
)
export default Floatmenu
