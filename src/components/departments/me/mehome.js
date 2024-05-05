import React from "react"
import { Achievements, Activities, Labs, Staff } from "./me-others-data"

import { LabImages } from "./me-others-data"
import Slider from "../../Slider/Slider"

export const routeName = "me"
export const title = "Mechanical Engineering"
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
   The Department of Mechanical Engineering was established in 1952 with B. Tech
   program during the era of Bihar College of Engineering (BCE) which is
   well-known since 1924 as the sixth oldest Engineering College in India. In
   1978, M. Tech Program was started with specializations in 'Thermal Turbo
   Machinery' and 'Refrigeration, Air Conditioning and Heat Transfer'. The Bihar
   College of Engineering was converted to National Institute of Technology
   Patna in 2004. Currently, the department offers following programs:
   <br />
   • B. Tech in Mechanical Engineering
   <br />
   • M.Tech in Mechanical Engineering with specialization in Design Engineering
   <br />
   • M.Tech in Mechanical Engineering with specialization in Thermal Engineering
   <br />
   • M.Tech in Mechanical Engineering with specialization in Production
   Engineering
   <br />
   • Dual Degree (B.Tech + M.Tech) in Mechanical Engineering with specialization
   in Manufacturing and Industrial Engineering
   <br />
   • Ph.D.
   <br />
   <br />
   Initially, B.Tech program was started with intake of 20 which has now become
   131. M.Tech program is running with a total intake of around 50 for all
   specializations and the 5 years Dual Degree (B.Tech + M.Tech) program is
   executing with an intake of 24, whereas, over 200 students are performing
   research in various fields of Mechanical Engineering in the Ph.D. program.
   Some prominent research topics in the department are Materials, solid
   mechanics, product design, manufacturing processes, thermodynamics, heat
   transfer, gas dynamics, renewable energy, surface engineering, dynamics and
   control, fluid power systems and operation management.
   <br />
   <br />
   The Department has an excellent industrial interaction and contributes to the
   industry by offering consultancy services and sponsored research projects.
   Continuously growing numbers of patents and publications in various top
   multidisciplinary journals is indication of the thriving research environment
   in the department
  </>
 )
}
export const mission = () => {
 return (
  <>
   1. To provide education that transforms young minds through rigorous teaching
   and thought process to fulfil the needs of the society and Industry.
   <br />
   2. To collaborate with leading Industry partners and other academic and
   research Institutes around the world to strengthen the education and research
   ecosystem.
   <br />
   3. To prepare students with life-long learning for their career by fostering
   in them the ethical & technical capabilities pertinent to mechanical and
   allied engineering.
  </>
 )
}

export const vision = () => {
 return (
  <>
   “To create well trained and skilled technocrats with life-long learning in
   the area of Mechanical Engineering”
  </>
 )
}

export const contact = () => {
 return (
  <div className="img-11">
   <div>
    Department of Mechanical Engg.,
    <br />
    <br />
    National Institute Of Technology Patna,
    <br />
    Ashok Rajpath, Patna - 800005.
    <br />
    Email: head.me@nitp.ac.in
    <br />
    <br />
    Phone: +91-612-(2371715/2715/2371929/
    <br />
    2370419/2370843/2371930) Extn.441
   </div>

   <div className="img img-12">
    <img
     src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1ZTd8RKh4GeeBHokdnK0q01hw2sqo9uXB"
     alt="hodImage"
    />
    <br />
    <br />
    <strong>Prof. Prakash Chandra</strong>
    <br />
    Professor & HOD
   </div>
  </div>
 )
}

export const labs = () => {
 return (
  <>
   <div className="row rowmarl3">
    <div className="col-6">
     {Labs[0].title}
     <br />
     {Labs[0].content}
    </div>
    <div className="col-6">
     <Slider dataSlider={LabImages} />
    </div>
   </div>
  </>
 )
}

export const achievements = () => {
 return (
  <>
   {" "}
   <div className="row rowmarl3">
    {Achievements.map((acht, idx) => (
     <React.Fragment key={idx}>
      <div className="row">{acht.title}</div>

      <div className="row">{acht.content}</div>
     </React.Fragment>
    ))}
   </div>
  </>
 )
}

export const activities = () => {
 return (
  <>
   {" "}
   <div className=" row rowmarl3">
    {Activities.map((act, idx) => (
     <React.Fragment key={idx}>
      <div className="row"> {act.title}</div>{" "}
      <div className="row"> {act.content}</div>
      <br />
     </React.Fragment>
    ))}
   </div>
  </>
 )
}

// export const staff = () => {
//   return (
//    <div className="img-11">
//     <div>
//     List of Non-Teaching Staff
//     </div>

//     {/* <div className="img img-12">
//      <img
//       src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1ZTd8RKh4GeeBHokdnK0q01hw2sqo9uXB"
//       alt="hodImage"
//      />
//      <br />
//      <br />
//      <strong>Prof. Prakash Chandra</strong>
//      <br />
//      Professor & HOD
//     </div> */}
//    </div>
//   )
//  }
export const research = () => {
 return <></>
}
export const staff = () => {
 return (
  <>
   {" "}
   <div className="row rowmarl3">
    {Staff.map((acht, idx) => (
     <React.Fragment key={idx}>
      <div className="row">{acht.title}</div>

      <div className="row">{acht.content}</div>
     </React.Fragment>
    ))}
   </div>
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
  title: "Vision & Mission",
  data: "missionvision",
  // img: "/department/mission.svg",
 },
 {
  title: "Syllabus",
  relPath: "/me/syllabus",
  // img: "/department/syllabus.svg",
 },
 {
  title: "Faculty",
  relPath: "/me/faculty",
  // img: "/department/faculty.svg",
 },
 {
  title: "Research Highlights",
  data: "research",
  // img: "/department/mission.svg",
 },
 {
  title: "Staff",
  data: "staff",
  // img: "/department/faculty.svg",
 },
 {
  title: "Notice",
  data: "happening",
  // img: "/department/activities.svg",
 },
 {
  title: "Contact",
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
]
