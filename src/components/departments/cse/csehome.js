import React from "react"

export const routeName = "cse"
export const title = "Computer Science & Engineering"
import {
 Achievements,
 Activities,
 Labs,
 Outcomes_,
 TimeTable,
} from "./cse-others-data"
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
   The Department of Computer Science and Engineering offers courses leading to
   Bachelor of Technology in Computer Science and Engineering. The department
   has a very good infrastructure and faculty to provide excellent education.
   <br />
   The curriculum is updated regularly to keep up with the growing demands and
   the changing trends of the software industry and research laboratories.
   <br />
   The department provides a wide range of courses. The prominent among them
   includes Data Structures, Design and Analysis of Algorithms, System
   Programming, Computer Networks, Data Mining and Warehousing, Distributed and
   Parallel Computing, Mobile and Wireless Computing, Real-time Systems,
   Cryptography, Genetic Algorithm and Artificial Intelligence. Apart from
   these, students are also offered a wide variety of electives.
  </>
 )
}
export const mission = () => {
 return (
  <>
   <ul>
    <li>
     To improve employability by providing high-quality undergraduate and
     graduate education in computer-related disciplines.
    </li>
    <li>
     To develop professionals to satisfy the rising personnel demands and needs
     of industry and entrepreneurship for the state's and country's economic
     growth.
    </li>
    <li>
     To become capable in conducting high-quality technological research for the
     benefit of society.
    </li>
   </ul>
  </>
 )
}

export const vision = () => {
 return (
  <>
   <ul>
    <li>
     {" "}
     To formulate up-to-date and flexible technical programs which will allow
     our graduates to attain their maximum technical potential, managerial
     capability, be competitive in the job market and to emerge as a centre of
     excellence.
    </li>
   </ul>
  </>
 )
}
export const research = () => {
 return <></>
}

export const Outcomes = () => {
 return (
  <>
   {Outcomes_.map(row => {
    return (
     <>
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
    Department of Computer Science & Engg.,
    <br />
    National Institute Of Technology Patna,
    <br />
    Ashok Rajpath, Patna - 800005.
    <br />
    <br />
    Email: head.cs@nitp.ac.in
    <br />
    <br />
    Extn: +91-612-(2371715/2715/2371929/
    <br />
    2370419/2370843/2371930) 201
   </div>

   <div className="img img-12">
    <img
     src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1f2bFo1KIY1xF6MOmTAjM3gNYZcUySBaG"
     alt="hodImage"
    />
    <br />
    <br />
    <strong>Prof. Maheshwari Prasad Singh</strong>
    <br />
    Professor & HOD
   </div>
  </div>
 )
}

export const labs = () => {
 return (
  <>
   {Labs.map((lab, idx) => {
    return (
     <div className="row rowmarl3" key={idx}>
      <div
       className="col-6"
       style={{ textAlign: "left", fontSize: `1.1rem`, padding: `0px` }}
      >
       {lab.content}
      </div>
      <div
       className="col-6"
       style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
       }}
      >
       {lab.image}
      </div>
     </div>
    )
   })}
  </>
 )
}

export const achievements = () => {
 return (
  <>
   <div className="row rowmarl3">
    <ul>
     {Achievements.map((ach, idx) => (
      <li key={idx} style={{ fontSize: `1.2rem` }}>
       {ach}
      </li>
     ))}
    </ul>
   </div>
  </>
 )
}

export const activities = () => {
 return (
  <>
   {" "}
   <div className=" row rowmarl3" style={{ fontSize: `1.2rem` }}>
    {Activities.map((act, idx) => (
     <>
      <div className="row"> {act.title}</div>
      <div className="row"> {act.content}</div>
     </>
    ))}
   </div>
  </>
 )
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
  title: "Syllabus",
  relPath: "/cse/syllabus",
  // img: "/department/syllabus.svg",
 },
 {
  title: "Faculty",
  relPath: "/cse/faculty",
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
  title: "Contact & HOD",
  data: "contact",
  // img: "/department/contact.svg",
 },
 {
  title: "Labs",
  data: "labs",
  // img: "/department/labs.svg",
 },
 {
  title: "Achievements",
  data: "achievements",
  // img: "/department/achievements.svg",
 },
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
  title: "Mission & Vision",
  data: "missionvision",
  // img: "/department/mission.svg",
 },
]
