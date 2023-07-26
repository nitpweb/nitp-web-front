import React, { useEffect, useState } from "react"
import { TabPage } from "../styles/tabpage"
import Navigate from "../global/Navigate"
import { Link } from "gatsby"
import {
 ContactDetails,
 FacultyExchange,
 NewsAnnouncements,
} from "./InternationalAffairs"

const InternationalAffHome = ({
 routeName,
 title,
 TitleDescription,
 About,
 MoU,
 Administration,
 RCC,
 CallForProposal,
 AssociateInstitutes,
 Gallery,
 Contact,
 datalist,
}) => {
 const [view, setView] = useState("about")
 function getView(callback) {
  setView(callback)
 }

 return (
  <TabPage>
   <Navigate data={datalist} callback={getView} tab={view} />
   <div className="mainDiv">
    <>
     {view == "about" && (
      <>
       <div className="layoutrow" id="about">
        <div className="layoutabout">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
          About
         </h1>

         <div className="row">
          <p>{About()}</p>
         </div>
        </div>
       </div>
      </>
     )}

     {view == "NewsAnnouncements" && (
      <>
       <div
        className="layoutrow layoutrow1"
        style={{ position: `relative`, zIndex: 1 }}
        id="MoU"
       >
        <div className="col-6" style={{ width: `100%` }}>
         <div className="row rowmarr3">
          <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
           News & Announcements
          </h1>
         </div>
         <br />
         <div className="row">
          <p>{NewsAnnouncements()}</p>
         </div>
        </div>
       </div>
      </>
     )}
     {view == "FacultyExchange" && (
      <>
       <div className="layoutrow" id="CallForProposal">
        <div className="layoutabout">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
          Faculty Exchange
         </h1>
         <br />
        </div>
        <div className="row rowmarl3">{FacultyExchange()}</div>
       </div>
      </>
     )}
     {view == "ContactDetails" && (
      <>
       <div className="layoutrow">
        <div className="layoutabout">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
          Contact Details
         </h1>
        </div>
        <div className="row rowmarl3">{ContactDetails()}</div>
       </div>
      </>
     )}
     {view == "contact" && (
      <>
       <div className="layoutrow" id="contact">
        <div className="layoutabout">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
          Contact Details
         </h1>
        </div>
        <br />
        <div className="row rowmarl3">{Contact()}</div>
       </div>
      </>
     )}
    </>
   </div>
  </TabPage>
 )
}

export default InternationalAffHome
