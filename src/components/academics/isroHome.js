import React, { useEffect, useState } from "react"
import { TabPage } from "../styles/tabpage"
import Navigate from "../global/Navigate"

const IsroHome = ({
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
     {/* <div className="layoutrow layoutrowmain" id="home">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1 >{title}</h1>
              </div>
              {TitleDescription()}
            </div>
            <div className="col-6 imgcolstyle">
              <img
                
                src={main}
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div> */}
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
       {/* <div className="row imgcolstyle backgroundimage">
                <img data-aos="zoom-in" src="/bulb.svg" className="img-fluid" />
              </div> */}
      </>
     )}
     
     {view == "MoU" && (
      <>
       <div
        className="layoutrow layoutrow1"
        style={{ position: `relative`, zIndex: 1 }}
        id="MoU"
       >
        <div className="col-6" style={{ width: `100%` }}>
         <div className="row rowmarr3">
          <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
           MoU Documents:
          </h1>
         </div>
         <br />
         <div className="row">
          {/* <div className="row" style={{justifyContent: "space-between"}}> */}
          {/* <div className="rowmarl3">
                      <img src={hod} alt="HOD Image" height="250"/>
                    </div> */}
          <p>{MoU()}</p>
         </div>
        </div>
       </div>
      </>
     )}

     {view == "Administration" && (
      <>
       <div
        className="layoutrow layoutrow1"
        style={{ position: `relative`, zIndex: 1 }}
        id ="Administration">
        <div className="row rowmarl3">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
          Management Commitee:
         </h1>
        </div>
        <div className="row rowmarl3" style={{paddingTop:'2rem'}}> {Administration()}</div>
        {" "}
       </div>{" "}
       {/* <div className="row imgcolstyle backgroundimage">
                <img data-aos="zoom-in" src="/labs.svg" className="img-fluid" />
              </div> */}
      </>
     )}
     {view == "RCC" && (
      <>
       <div
        className="layoutrow"
        style={{ position: `relative`, zIndex: 1 }}
        id="RCC">
        <div className="layoutabout">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>Regional Coordination Council</h1>
        </div>
        <div className="row rowmarl3">{RCC()}</div>
       </div>
       </>
     )}
     {view == "CallForProposal" && (
      <>
       <div className="layoutrow" id ="CallForProposal">
        <div className="layoutabout">
        <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
           Call For Proposal
         </h1>
         <br/>
        </div>
        <div className="row rowmarl3">{CallForProposal()}</div>
       </div>
      </>
     )}
     {view == "AssociateInstitutes" && (
      <>
       <div className="layoutrow">
        <div className="layoutabout">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
          Associate Institutes
         </h1>
        </div>
        <div className="row rowmarl3">{AssociateInstitutes()}</div>
       </div>
      </>
     )}
     {view == "Gallery" && (
      <>
       <div className="layoutrow" id = "Gallery">
        <div className="layoutabout">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
          Photo Gallery
         </h1>
        </div>
        <div className="row rowmarl3">{Gallery()}</div>
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
        <br/>
        <div className="row rowmarl3">{Contact()}</div>
       </div>
      </>
     )}
     
    </>
   </div>
  </TabPage>
 )
}

export default IsroHome;
