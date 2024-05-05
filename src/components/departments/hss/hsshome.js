import Slider from "../../Slider/Slider"

import {
 Activities,
 ActivityImages,
 Outcomes_,
 LabImages,
 Labs,
 TimeTable,
 // Achievements,
} from "./hss-others-data"
import React from "react"

export const routeName = "hss"
export const title = "Humanities & Social Sciences"
export const titleDescription = () => {
 return (
  <>
   <div className="row rowmarl3">
    <h2 data-aos="zoom-in-right">
     “The computer was born to solve problems that did not exist before.”
    </h2>
   </div>
   <div className="row rowmarl3">
    <h2 data-aos="zoom-in-right" id="aut">
     — Bill Gates
    </h2>
   </div>
  </>
 )
}
export const about = () => {
 return (
  <>
   With an interdisciplinary perspective at the heart of its approach, the
   Department of Humanities and Social Sciences at NIT Patna provides
   intellectual and cultural foundations for the study of human relations with
   society interaction and teaching towards problem solving of the nation in
   contemporary contexts. The department, with its diverse expertise offers
   students in the B Tech programme courses aimed at developing essential skills
   in critical thinking and writing along with the knowledge of literature,
   society, economic value, and philosophies of the mind and body. The
   department also offers doctoral programmes in humanities and social sciences
   especially in English, Economics, Sociology and Human Resource Management
   besides elective courses for the undergraduate programmes of the institute.
  </>
 )
}
export const mission = () => {
 return (
  <>
   To provide quality teaching, learning, and research in the field of
   Humanities and Social Sciences by creating, preserving, transmitting and
   utilizing knowledge especially to engineering students so that intellectually
   capable and imaginatively gifted leaders can emerge in the technical
   education and industry.
  </>
 )
}

export const vision = () => {
 return (
  <>
   The Department aspires to be a national exemplar in undergraduate teaching
   and research in the humanities and social sciences. Upon completion of the
   program, the students will be prepared to compete, sustain and advance their
   communities and the world.
  </>
 )
}

export const Outcomes = () => {
 return (
  <>
   {Outcomes_.map(row => {
    return (
     <>
      <br />
      <div className="row rowmarl3">{row.title}</div>
      <div className="row rowmarl3">{row.content}</div>
     </>
    )
   })}
  </>
 )
}

export const contact = () => {
 return (
  <div className="img-11">
   <div>
    Department of Humanities & Social Sciences
    <br />
    National Institute of Technology Patna,
    <br />
    Ashok Rajpath, Patna - 800005.
    <br />
    Email: head.hs@nitp.ac.in
    <br />
    Contact no: +91-9557805425
   </div>

   <div className="img img-12">
    <img
     src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1SNizQP1nCCmog6hjxw3AwhsX0ROXQsu9"
     alt="hodImage"
    />
    <br />
    <br />
    <strong>Dr. Deepak Kumar Behera</strong>
    <br />
    Associate Professor & HOD
   </div>
  </div>
 )
}

export const labs = () => {
 return (
  <>
   <div className="row rowmarl3">{Labs.title}</div>
   <div className="row rowmarl3">
    <Slider dataSlider={LabImages} showDots={true} />
   </div>
   <div className="rowmarl3" style={{ fontSize: `0.8rem`, padding: `0px` }}>
    {Labs.content}
   </div>
   {/* <div className="col-6">
          <Slider dataSlider={LabImages} />
      </div>{" "} */}
  </>
 )
}

export const activities = () => {
 return (
  <>
   {" "}
   <div className="row rowmarl3">
    <Slider dataSlider={ActivityImages} showDots={true} />
   </div>
   <div className="rowmarl3">{Activities.content}</div>
  </>
 )
}
export const research = () => {
 return <></>
}
export const timetable = () => {
 console.log(TimeTable)
 return (
  <>
   {TimeTable.map((e, idx) => (
    <>
     <a
      href={e.link}
      key={idx}
      target="_blank"
      rel="noopener noreferrer"
      style={{
       fontSize: `1.2rem`,
       textDecoration: `none`,
       borderBottom: `1px dotted`,
       width: `fit-content`,
      }}
     >
      {e.title}
     </a>
     <br />
    </>
   ))}
  </>
 )
}

export const datalist = [
 {
  title: "About",
  data: "about",
  // img: "/department/about.svg",
 },
 {
  title: "Mission & Vision",
  data: "missionvision",
  // img: "/department/mission.svg",
 },
 {
  title: "Syllabus",
  relPath: "/hss/syllabus",
  // img: "/department/syllabus.svg",
 },
 {
  title: "Faculty",
  relPath: "/hss/faculty",
  // img: "/department/faculty.svg",
 },
 {
  title: "Research Highlights",
  data: "research",
  // img: "/department/mission.svg",
 },
 {
  title: "Notice",
  data: "happening",
  // img: "/department/activities.svg",
 },
 {
  title: "Labs",
  data: "labs",
  // img: "/department/labs.svg",
 },
 // {
 //   title: "Achievements",
 //   data: "achievements",
 //   // img: "/department/achievements.svg",
 // },
 {
  title: "Activities",
  data: "activities",
  // img: "/department/activities.svg",
 },
 {
  title: "Time Table",
  data: "timetable",
  // img: "clock.svg",
 },
 {
  title: "Contact & HOD",
  data: "contact",
  // img: "/department/contact.svg",
 },
]
