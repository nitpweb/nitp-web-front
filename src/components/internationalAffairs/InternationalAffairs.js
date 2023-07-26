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
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
     <div className="syllabus-page mainDiv">
      <div className="row rowmarl3">
       <div className="digital">
        <h1 style={{ marginBottom: `1rem` }}>Events</h1>
        <div className="probutton">
         <button>Conferences</button>
         <button>Workshops</button>
         <button>Short term courses/training/internship</button>
         <button>International visit</button>
         <button>Magazine</button>
        </div>
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
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
     <div className="syllabus-page mainDiv">
      <div className="row rowmarl3">
       <div className="digital">
        <h1 style={{ marginBottom: `1rem` }}>Students Exchange</h1>
        <div className="probutton">
         <button>Outbound Students</button>
         <button>Inbound Students</button>
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
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
     <div className="syllabus-page mainDiv">
      <div className="row rowmarl3">
       <div className="digital">
        <h1 style={{ marginBottom: `1rem` }}>Gallery</h1>
        <div className="probutton">
         <button>Department Tour....</button>
         <button>Photos</button>
        </div>
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
