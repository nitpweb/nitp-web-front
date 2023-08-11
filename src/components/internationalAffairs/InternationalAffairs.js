import React, { useState } from "react"
import { TabPage } from "../styles/tabpage"
import Table from "../table"
import { PageLayout } from "../styles/pagelayout"

export const routeName = "internationalAffairs"
export const title = "International Affairs"

export const titleDescription = () => {
 return (
  <>
   <div className="row rowmarl3">
    <h2 data-aos="zoom-in-right">Welcome to International Affairs,NIT Patna</h2>
   </div>
  </>
 )
}
export const about = () => {
 return (
  <>
   <b>
    {" "}
    National Institute of Technology Patna (Institute of National Importance) is
    the 18th National Institute of Technology created by the Ministry of
    Education, Government of India after rechristening the erstwhile Bihar
    College of Engineering Patna on 28. 01. 2004. The institute is well
    recognised in the field of engineering education and research. NIT Patna has
    been ranked 56 by National Institutional Ranking Framework (NIRF),
    Government of India, Ranking 2023 in engineering category. It currently has
    about 6000 students and 500 teaching and non-teaching staff. NIT Patna will
    soon set up its additional campus almost 30 km from the state capital, Patna
    at Bihta. The master plan has been prepared for 6,600 students. The approved
    detailed project report (DPR) envisages a campus to cater to 2,415 students
    (B. Tech, M. Tech, MSc, and Ph.D.), 250 faculty members, and 350
    non-teaching staff members in the first phase. Research and academic
    programmes (bachelor's, master's and doctoral) at NIT Patna are driven by a
    well-known faculty, many of whom are reputed for their research
    contributions internationally.
    <br />
    Members of the faculty of the institute have won many prestigious awards and
    recognitions, including the word ranking of top 2% scientist given by
    Stanford University, USA, Royal Society fellowships and awards, AD
    Scientific Index etc. At present the Institute has seven disciplines viz.
    Architecture and planning, Civil Engg., Compute Science & Engg., Electrical
    Engg., Electronics & Communication Engg., Mechanical Engg., Physics and
    Mathematics and well established departments of Humanities and Social
    Science. The Institute alumni have distinguished themselves through their
    achievements in and contributions to leading researchers, industry,
    academics, business, government and social domains. Located at on the south
    bank of holy river Ganges behind Gandhi Ghat, one of the most important and
    reverential place of Patna. The Gandhi Ghat is associated with the immersion
    of ashes of father of the Nation Mahatma Gandhi in the river Ganges. The
    campus has a picturesque river view with historic building presenting a
    spectacle of architectural delight and natural beauty. <br />
    Refer the link for more detail:{" "}
    <a href="https://www.nitp.ac.in/" style={{ color: "blue" }}>
     https://www.nitp.ac.in/
    </a>
   </b>
  </>
 )
}
export const Events = () => {
 const [course, setCourse] = useState("conference")
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
     <div className="syllabus-page mainDiv">
      <div className="row rowmarl3">
       <div className="digital">
        <h1 style={{ marginBottom: `1rem` }}>Events</h1>
        <div className="probutton">
         <button
          onClick={() => {
           setCourse("conference")
          }}
          className={course == "conference" ? "btnactive" : ""}
         >
          Conferences
         </button>
         <button
          onClick={() => {
           setCourse("workshop")
          }}
          className={course == "workshop" ? "btnactive" : ""}
         >
          Workshops
         </button>
         <button
          onClick={() => {
           setCourse("intern")
          }}
          className={course == "intern" ? "btnactive" : ""}
         >
          Short term courses/training/internship
         </button>
         <button
          onClick={() => {
           setCourse("visit")
          }}
          className={course == "visit" ? "btnactive" : ""}
         >
          International visit
         </button>
         <button
          onClick={() => {
           setCourse("magazine")
          }}
          className={course == "magazine" ? "btnactive" : ""}
         >
          Magazine
         </button>
        </div>
        {course === "visit" && (
         <>
          <div className="layoutrow layoutrow1 digital">
           <div className="col-6 imgcolstyle">
            <img
             src="https://web.nitp.ac.in/intl-affair/faculty-visit.jpg"
             style={{ border: "2px solid #333" }}
            ></img>
            <h1
             style={{
              fontSize: "1.5rem",
              paddingTop: "10px",
              fontWeight: "bold",
             }}
            >
             {" "}
             Visit to University Of Leicester, UK
            </h1>
           </div>
           <div className="col-6">
            <div className="row rowmarr3" style={{ fontSize: "1.25rem" }}>
             <p>
              <span style={{ fontWeight: "bold" }}>
               Dr. Amit Kumar Singh and Dr. Jyoti Prakash Singh visited
               University of Leicester, UK{" "}
              </span>{" "}
              as a part of an International Exchanges award for overseas travel
              between collaborators in the UK and India funded by Royal Society,
              UK,{" "}
              <span style={{ fontWeight: "bold" }}>
               from May 31, 2023, to June 6, 2023.{" "}
              </span>
             </p>
            </div>
           </div>
          </div>
         </>
        )}
        {course === "magazine" && (
         <>
          <div className="layoutrow">
           <h1 className="rowmarl3" data-aos="zoom-in-right">
            Pratibimb(NITP Magazine)
           </h1>
          </div>
          <div className="syllabus-bullets">
           <ul className="rowmarl3">
            <li>
             <a
              href="https://drive.google.com/file/d/1v94mM-W9xegDIJ3ZOjTznL2FgioDSCaq/view?usp=sharing"
              style={{ color: "blue" }}
             >
              Click here to download English version.
             </a>
            </li>
           </ul>
          </div>
         </>
        )}
       </div>
      </div>
     </div>
    </TabPage>
   </PageLayout>
  </>
 )
}

export const NewsAnnouncements = () => {
 return <p>News And Announcements</p>
}

export const Partnership = () => {
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
     <div className="syllabus-page mainDiv">
      <div className="row rowmarl3">
       <div className="digital">
        <h1 style={{ marginBottom: `1rem` }}>Partnerships</h1>
        <div className="probutton">
         <button>Ongoing MoUs</button>
         <button>Pre-approved</button>
         <button>Past MoUs</button>
         <button>Joint academic and research activities</button>
        </div>
       </div>
      </div>
     </div>
    </TabPage>
   </PageLayout>
  </>
 )
}
export const StudentExchange = () => {
 const [course, setCourse] = useState("outbound")
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
     <div className="syllabus-page mainDiv">
      <div className="row rowmarl3">
       <div className="digital">
        <h1 style={{ marginBottom: `1rem` }}>Students Exchange</h1>
        <div className="probutton">
         <button
          onClick={() => {
           setCourse("outbound")
          }}
          className={course == "outbound" ? "btnactive" : ""}
         >
          Outbound Students
         </button>
         <button
          onClick={() => {
           setCourse("inbound")
          }}
          className={course == "inbound" ? "btnactive" : ""}
         >
          Inbound Students
         </button>
         {course === "inbound" && <></>}
         {course === "outbound" && <></>}
        </div>
       </div>
      </div>
     </div>
    </TabPage>
   </PageLayout>
  </>
 )
}

export const FacultyExchange = () => {
 return <div style={{ paddingTop: "2rem" }}></div>
}
export const Gallery = () => {
 const [course, setCourse] = useState("department")
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
     <div className="syllabus-page mainDiv">
      <div className="row rowmarl3">
       <div className="digital">
        <h1 style={{ marginBottom: `1rem` }}>Gallery</h1>
        <div className="probutton">
         <button
          onClick={() => setCourse("department")}
          className={course == "department" ? "btnactive" : ""}
         >
          Department Tour....
         </button>
         <button
          onClick={() => setCourse("photos")}
          className={course === "photos" ? "btnactive" : ""}
         >
          Photos
         </button>
        </div>
        {course === "department" && (
         <>
          <div className="layoutrow layoutrow1 digital">
           <div className="col-6 imgcolstyle">
            <img
             src="https://web.nitp.ac.in/intl-affair/ece-dep.jpg"
             style={{ border: "2px solid #333" }}
            ></img>
           </div>
           <div className="col-6 imgcolstyle">
            <img
             src="https://web.nitp.ac.in/intl-affair/electrical-dep.jpg"
             style={{ border: "2px solid #333", height: "246px" }}
            ></img>
           </div>
          </div>
          <div className="layoutrow layoutrow1 digital">
           <div className="col-6 imgcolstyle">
            <img
             src="https://web.nitp.ac.in/intl-affair/mech-dep.jpg"
             style={{ border: "2px solid #333" }}
            ></img>
           </div>
          </div>
         </>
        )}
        {course === "photos" && <></>}
       </div>
      </div>
     </div>
    </TabPage>
   </PageLayout>
  </>
 )
}

export const ContactDetails = () => {
 return (
  <div className="img-11">
   <div style={{ marginTop: "15px" }}>
    <p>
     <b>Dr. Amit Kumar Singh</b>
     <br />
     Professor-in-Charge, International Affairs
     <br />
     Associate Professor
     <br />
     Department of Computer Science & Engineering
     <br />
     National Institute of Technology Patna
     <br />
     Ashok Rajpath, Patna, Bihar, 800005, India
     <br />
     Official Email: <br />
     amit.singh@nitp.ac.in,
     <br /> amit_245singh@yahoo.com
     <br />
     <br />
     Tel: (+91) 612-2371715 extn. 225
    </p>
    <br />
   </div>

   <div className="img img-12">
    <img
     src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1v2jlADs0iPttRin4thdy38Dge9g-ibB3"
     alt="PI-Image"
     style={{ border: "2px #333 solid" }}
    />
    <br />
    <br />
    <strong>Dr. Amit Kumar Singh</strong>
    <br />
    Professor-in-Charge, International Affairs
   </div>
  </div>
 )
}
export const datalist = [
 {
  title: "Home",
  data: "about",
 },
 {
  title: "Announcements",
  data: "NewsAnnouncements",
 },
 {
  title: "Partnership",
  relPath: "/internationalAffairs/partnership",
 },
 {
  title: "Student Exchange",
  relPath: "/internationalAffairs/studentexchange",
 },
 {
  title: `Faculty Exchange`,
  data: "FacultyExchange",
 },
 {
  title: "Contact Details",
  data: "ContactDetails",
 },
 {
  title: "Gallery",
  relPath: "/internationalAffairs/gallery",
 },
 {
  title: "Events",
  relPath: "/internationalAffairs/events",
 },
]
