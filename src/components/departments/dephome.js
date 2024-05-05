import React, { useEffect, useState } from "react"
import main from "./img/main.png"
import pc from "./img/pc.svg"
import mountain from "./img/mountain.svg"
import map from "./img/map.svg"
import lens from "./img/lens.svg"
import axios from "axios"
import Notice from "../home/notice"
import { PageLayout } from "../styles/pagelayout"
import { TabPage } from "../styles/tabpage"
import Navigate from "../global/Navigate"
import { uselink } from "./ee/eehome"

const Dephomepage = ({
 routeName,
 title,
 TitleDescription,
 About,
 Mission,
 Labs,
 Outcomes,
 Achievements,
 Activities,
 Vision,
 Contact,
 Staff,
 Extras,
 TimeTable,
 datalist,
 Research,
}) => {
 const [notices, setnotices] = useState()
 const [view, setView] = useState("about")
 // const [hod, setHod] = useState()
 function getView(callback) {
  setView(callback)
 }
 let noticesUrl = `${process.env.GATSBY_API_URL}/api/notice/${routeName}`
 // const hodurl = `${process.env.GATSBY_API_URL}/api/faculty/rk_nitp@nitp.ac.in`
 useEffect(
  () => {
   axios
    .get(noticesUrl)
    .then(res => {
     setnotices(res.data.filter(notice => notice.isVisible === 1))
    })
    .catch(e => {
     console.log(e)
    })
  },
  { notices }
 )

 // useEffect(()=>{
 //   axios.get(hodurl).then(res=>{
 //     setHod(res.data.profile.image)
 //   }).catch(e=>{
 //     console.log(e)
 //   })
 // }, [hodurl])
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
     {view == "happening" && (
      <>
       <div className="layoutrow" id="happening">
        <div className="row rowmarl3">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
          Notice
         </h1>
        </div>
        <div className="row rowmarl3 notice">
         {notices &&
          notices.length != 0 &&
          notices.map(notice => {
           if (notice.title != "") {
            return (
             <Notice
              detail={notice.title}
              time={notice.timestamp}
              attachments={notice.attachments}
              key={notice.id}
              imp={notice.important}
              link={
               notice.notice_link && JSON.parse(notice.notice_link).url
                ? JSON.parse(notice.notice_link).url
                : ""
              }
             />
            )
           }
          })}
        </div>
       </div>{" "}
       {/* <div className="row imgcolstyle backgroundimage">
                <img data-aos="zoom-in" src={pc} className="img-fluid" />
              </div> */}
      </>
     )}

     {view == "missionvision" && (
      <>
       <div className="layoutrow" id="vision" style={{ paddingBottom: `0` }}>
        <div className="row">
         <div className="row rowmarl3 rowmarr3">
          <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
           Vision
          </h1>
         </div>
         <div className="row rowmarl3 rowmarr3">
          <p>{Vision()}</p>
         </div>
        </div>
       </div>
       <div className="layoutrow" id="mission" style={{ paddingBottom: `0` }}>
        <div className="row">
         <div className="row rowmarl3 rowmarr3">
          <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
           Mission
          </h1>
         </div>
         <div className="row rowmarl3 rowmarr3">
          <p>{Mission()}</p>
         </div>
        </div>
       </div>

       {Outcomes && (
        <div className="layoutrow" id="Outcomes">
         <div className="row rowmarr3">{Outcomes()}</div>
        </div>
       )}

       {/* <div className="row imgcolstyle backgroundimage">
                <img
                  data-aos="zoom-in"
                  src="/mission.svg"
                  className="img-fluid"
                />
              </div> */}
      </>
     )}
     {view == "contact" && (
      <>
       <div
        className="layoutrow layoutrow1"
        style={{ position: `relative`, zIndex: 1 }}
        id="contact"
       >
        <div className="col-6" style={{ width: `100%` }}>
         <div className="row rowmarr3">
          <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
           Contact
          </h1>
         </div>
         <br />
         <div className="row rowmarr3">
          {/* <div className="row" style={{justifyContent: "space-between"}}> */}
          {/* <div className="rowmarl3">
                      <img src={hod} alt="HOD Image" height="250"/>
                    </div> */}
          <p>{Contact()}</p>
         </div>
        </div>
       </div>
       {/* <div className="row imgcolstyle backgroundimage">
                <img data-aos="zoom-in" src={map} className="img-fluid" />
              </div> */}
      </>
     )}
     {view == "research" && (
      <>
       <div
        className="layoutrow layoutrow1"
        style={{ position: `relative`, zIndex: 1 }}
        id="contact"
       >
        <div className="col-6" style={{ width: `100%` }}>
         <div className="row rowmarr3">
          <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
           Research Highlights
          </h1>
         </div>
         <br />
         {/* <div className="row rowmarr3"> */}
         {/* <div className="row" style={{justifyContent: "space-between"}}> */}
         {/* <div className="rowmarl3">
                      <img src={hod} alt="HOD Image" height="250"/>
                    </div> */}
         <p>{Research()}</p>
         {/* </div> */}
        </div>
       </div>
       {/* <div className="row imgcolstyle backgroundimage">
                <img data-aos="zoom-in" src={map} className="img-fluid" />
              </div> */}
      </>
     )}
     {view == "staff" && (
      <>
       <div
        className="layoutrow layoutrow1"
        style={{ position: `relative`, zIndex: 1 }}
        id="contact"
       >
        <div className="col-6" style={{ width: `100%` }}>
         <div className="row rowmarr3">
          <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
           List of Non-Teaching Staff
          </h1>
         </div>
         <br />
         <div className="row rowmarr3">
          {/* <div className="row" style={{justifyContent: "space-between"}}> */}
          {/* <div className="rowmarl3">
                      <img src={hod} alt="HOD Image" height="250"/>
                    </div> */}
          <p>{Staff()}</p>
         </div>
        </div>
       </div>
       {/* <div className="row imgcolstyle backgroundimage">
                <img data-aos="zoom-in" src={map} className="img-fluid" />
              </div> */}
      </>
     )}
     {view == "uselink" && (
      <>
       <div className="layoutrow" id="about">
        <div className="layoutabout">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
          Useful Links
         </h1>

         <div className="row">
          <p>{uselink()}</p>
         </div>
        </div>
       </div>
       {/* <div className="row imgcolstyle backgroundimage">
                <img data-aos="zoom-in" src="/bulb.svg" className="img-fluid" />
              </div> */}
      </>
     )}

     {view == "labs" && (
      <>
       <div
        className="layoutrow layoutrow1 others"
        style={{ position: `relative`, zIndex: 1 }}
       >
        <div className="row rowmarl3">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
          Labs
         </h1>
        </div>
        {Labs()}{" "}
       </div>{" "}
       {/* <div className="row imgcolstyle backgroundimage">
                <img data-aos="zoom-in" src="/labs.svg" className="img-fluid" />
              </div> */}
      </>
     )}
     {view == "achievements" && (
      <>
       <div
        className="layoutrow layoutrow1 others"
        style={{ position: `relative`, zIndex: 1 }}
       >
        <div className="row rowmarl3 rowmarr3">
         <h1 data-aos="zoom-in">Achievements</h1>
        </div>
        {Achievements()}
       </div>
       {/* <div className="row imgcolstyle backgroundimage">
                <img
                  data-aos="zoom-in"
                  src="/achievements.svg"
                  className="img-fluid"
                />
              </div> */}
      </>
     )}
     {view == "activities" && (
      <>
       <div className="layoutrow">
        <div className="row rowmarl3 rowmarr3">
         <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
          Activities
         </h1>
        </div>
        <div className="row rowmarr3">{Activities()}</div>
       </div>

       {/* <div className="row imgcolstyle backgroundimage">
                <img
                  data-aos="zoom-in"
                  src="/activities.svg"
                  className="img-fluid"
                />
              </div> */}
      </>
     )}
     {view == "others" && (
      <div className="layoutrow layoutrow1 others">
       <div className="row rowmarl3">
        <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
         More Info
        </h1>
       </div>
       {Extras()}
       {/* <div className="row imgcolstyle backgroundimage">
                <img data-aos="zoom-in" src="/labs.svg" className="img-fluid" />
              </div> */}
      </div>
     )}
     {view == "timetable" && (
      <div className="layoutrow">
       <div
        className="row rowmarl3 digital"
        style={{ display: `flex`, flexDirection: `column` }}
       >
        <h1
         data-aos="zoom-in"
         style={{ fontSize: `3rem`, paddingBottom: `5px` }}
        >
         Time Table
        </h1>
        {TimeTable()}
       </div>
      </div>
     )}
    </>
   </div>
  </TabPage>
 )
}

export default Dephomepage
