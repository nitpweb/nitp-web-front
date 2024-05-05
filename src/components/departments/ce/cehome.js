export const routeName = "ce"
export const title = "Civil Engineering"
import { Labs, Activities } from "./civil-others-data"
import React from "react"

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
export const research = () => {
 return <></>
}
export const about = () => {
 return (
  <>
   The Department of Civil Engineering is the oldest and vibrant department of
   the institute, which was established along with the inception of the
   Institute in the year 1924. The Institute was formerly known as the Bihar
   College of Engineering Patna, a constituent engineering college under Patna
   University, until 27thJan 2004. It was rechristened to National Institute of
   Technology Patna on 28th Jan 2004 as an Autonomous Institute under MHRD,
   Govt. of India.
   <br />
   <br />
   The Department of Civil Engineering is committed to provide quality teaching
   and research opportunities toits undergraduate, postgraduate and doctoral
   students. Apart from UG programme, the department also offers M. Tech and
   Doctoralprogrammes in the areas of Structural Engineering, Transportation
   Engineering, Water Resource Engineering,Environmental Engineering and
   Geotechnical Engineering. The intake strength of the Civil Engineering
   Department is 92 for undergraduate (BTech)and 112forpostgraduate (MTech).
   Presently, 25 PhD scholars are enrolled with the department for pursuing
   their doctoral researchprogram.The teaching and education is directed towards
   their successful career in International and National Industries/
   Institutions, Public and Private sectors,and enable them to qualify various
   competitive examinations such as IES, IAS, GATE examinations etc.
   <br />
   <br />
   The Department is actively involved in international and national research
   projects, and high valued consultancy works for the Government, Private
   Sector and Industries.The department also offers its expertise in various
   consultancy works and research projects fordifferent industries and
   organisations in the locale. The Department supports in upbringing of society
   and other educational institutes by providing training, workshops, technology
   transfer, capacity building, and awareness programs.
   <br />
   <br />
  </>
 )
}
export const mission = () => {
 return (
  <>
   To serve by producing excellent engineers, innovators, entrepreneurs and
   academicians for the growth of the industry and the society.
   <br />
   To develop sense of competitiveness, self-confidence, sincerity, punctuality
   and ethical values among students.
   <br />
   To undertake innovative collaborative projects with industries, government
   agencies and other organisations to cater the needs of society and solve real
   field problems.
   <br />
   To develop research and teaching potential to the fullest extent.
   <br />
   To remain a role model in the field of Civil Engineering.
  </>
 )
}

export const vision = () => {
 return (
  <>
   To serve the Nation and the world, through excellence education and advanced
   research in all the streams of Civil Engineering.{" "}
  </>
 )
}

export const contact = () => {
 return (
  <div className="img-11">
   <div>
    Department of Civil Engg.,
    <br />
    National Institute Of Technology Patna,
    <br />
    Ashok Rajpath, Patna - 800005.
    <br />
    <br />
    Email: head.ce@nitp.ac.in
    <br />
    <br />
    Extn: +91-612-(2371715/2715/2371929/
    <br />
    2370419/2370843/2371930) * 126
    <br />
    <br />
   </div>

   <div className="img img-12">
    <img
     src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1aLZr0n_58Cx0lpVxSUjY6BfJbqiVduG6"
     alt="hodImage"
    />
    <br />
    <br />
    <strong>Prof. Anshuman Singh</strong>
    <br />
    Professor & HOD
   </div>
  </div>
 )
}

export const labs = () => {
 return (
  <>
   {" "}
   <div className="row rowmarl3 ">
    {Labs[0].title}
    {Labs[0].text} {Labs[0].table}{" "}
   </div>
   {Labs.slice(1).map((lab, idx) => {
    return (
     <div className="row rowmarl3" key={idx}>
      <div className="col-6" style={{ textAlign: "left", fontSize: `1.1rem` }}>
       {lab.content}
      </div>
      <div className="col-6">{lab.image}</div>
     </div>
    )
   })}
  </>
 )
}

export const activities = () => {
 return (
  <>
   {" "}
   <div className=" row rowmarl3" style={{ fontSize: `1.2rem` }}>
    {Activities.map((lab, idx) => {
     return (
      <div className="row rowmarl3" key={idx}>
       <div className="col-6">{lab.image}</div>
       <div className="col-6" style={{ textAlign: "left", fontSize: `1.1rem` }}>
        {lab.content}
       </div>
      </div>
     )
    })}
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
  title: "Syllabus",
  relPath: "/ce/syllabus",
  // img: "/department/syllabus.svg",
 },
 {
  title: "Faculty",
  relPath: "/ce/faculty",
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
  title: "Activities",
  data: "activities",
  // img: "/department/activities.svg",
 },
 {
  title: "Mission & Vision",
  data: "missionvision",
  // img: "/department/mission.svg",
 },
]
