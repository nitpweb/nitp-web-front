import React from "react"
import Slider from "../../Slider/Slider"
import "./CheStyle.css"

import {
 Achievements,
 Activity,
 //  ActivityImages,
 LabImages1,
 LabImages2,
 LabImages3,
 Labs,
 Others,
} from "./chem-others-data"

export const routeName = "che"
export const title = "Chemistry Department"
console.log(LabImages1)
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
   <br></br>
   The Chemistry department was established in 1924, at the same time the
   institute was founded. The Department has expanded significantly since 2014
   and offers several compulsory and elective courses to B.Tech. and B.Arch.
   students of the Institute in 1st, 2nd and 3rd years of the UG and UG-PG dual
   degree programs. The department has offered a UG-PG 5-year Integrated M.Sc.
   in Chemistry degree from 2015 where the curriculum offers students an
   excellent theoretical foundation in both traditional as well as contemporary
   areas of chemistry along with extensive hands on training in experiments.
   Several of the pass out students have cleared GATE and NET examinations and
   have pursued higher studies in Institutes of repute like IITs, NIT and IISER.
   Some of the students have received placements through Institute T&P in
   teaching institutes, banks and IT companies. From the academic session of
   2023, the department has started a 5-year UG-PG program - B. Tech.-M. Tech.
   dual degree in Chemical Technology. The expected outcome of the curriculum is
   to promote R&D in Chemistry with technological advancements and equip
   students to contribute effectively for the enhancement of both industry and
   academia in the country. <br></br>
   <br></br>
   The department has an active Ph.D. program since 2010 where the number of
   research scholars have been steadily rising with new admission every
   semester. To promote the ongoing and future research activities, DST has
   recently granted research funds under FIST programme with a total grant
   amount of Rs. 220 Lakhs for the period of 2023 – 2028. Currently, the
   department has 26 full-time Ph.D. students and 19 part-time Ph.D. students.
   With the increase in motivated researchers, the research output in terms of
   both quality and quantity has escalated in the recent years. The department
   has 8 regular faculty members who are PIs of independent research groups and
   focus on different areas of chemistry like synthetic glycochemistry,
   supramolecular chemistry, graphene chemistry, hetereocycles, nanomaterials,
   spectroscopy, co-ordination complexes. Capital fund received from Institute,
   TEQIP and externally funded projects have facilitated in installation of
   advanced small equipment necessary to execute day to day research work. The
   research groups are also collaborating within the department as well as with
   other Institutions to encourage inter-disciplinary work. Collaborative work
   with faculty/scientists in IIT Patna, CSIR-NML, IIT Gandhinagar, CSIR-CSIO,
   NIPER Hajipur, IACS Kolkata, NIT Rourkela, Algappa University Karaikudi is
   currently under way to carry out characterization work, theoretical study,
   and extend the application of synthesized products. The research facilities
   in the department are frequently extended to students from Civil Engg.,
   Mechanical Engg., Physics departments to enable their UG and PG thesis works.
   Further, UG and PG students from nearby Universities/Institutions like
   Mahatma Gandhi Central University Motihari, Central University South Bihar
   Gaya, NIPER Hajipur, Patna University have visited our department for
   carrying out research work mandatory in their curricula.<br></br>
   <br></br>
   The department has been and will remain committed to quality teaching and
   research with a conscious effort to achieve excellence.
  </>
 )
}
export const mission = () => {
 return (
  <>
   <ul>
    <li>
     To develop and promote innovations in Education at all levels, and generate
     fundamental and applied knowledge by engaging in scientific research by
     adopting suitable steps.
    </li>
    <li>
     To promote academic growth by offering state-of-the-art education in
     undergraduate, postgraduate and doctoral programmes.
    </li>
    <li>
     To pursue quality research output by developing necessary and adequate
     research facilities and undertaking collaborative / sponsored research
     projects.
    </li>
    <li>
     Maintaining and enhancing the diversity of students, staff, faculty and
     curricula.
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
     To serve the country through this institution by pursuing excellence in
     scientific and technical education and research.
    </li>

    <li>
     To make this department a center of excellence for cutting edge fundamental
     and applied research.
    </li>
   </ul>
  </>
 )
}

export const contact = () => {
 return (
  <div className="img-11">
   <div>
    Department of Chemistry,
    <br />
    <br />
    National Institute Of Technology Patna, Ashok Rajpath, Patna - 800005.
    <br />
    <br />
    Email: head.ch@nitp.ac.in
   </div>

   <div className="img img-12">
    <img
     src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1JDx-0LS5pxsMcYpcyAFBbq3If3Kfubcg"
     alt="hodImage"
    />
    <br />
    <br />
    <strong>Dr. Subrata Das</strong>
    <br />
    Associate Professor & HOD
   </div>
  </div>
 )
}
export const research = () => {
 return <></>
}
export const labs = () => {
 return (
  <>
   <div
    className="row rowmarl3"
    style={{ flexDirection: "column", alignItems: "center" }}
   >
    <div className="Headg">Teaching Lab</div>
    <div className="col-6" style={{ width: "90%" }}>
     <Slider dataSlider={LabImages1} showDots={true} />
    </div>{" "}
    <div className="Headg">Instrumental Lab</div>
    <div className="col-6" style={{ width: "90%" }}>
     <Slider dataSlider={LabImages2} showDots={true} />
    </div>{" "}
    <div className="Headg">Research Lab</div>
    <div className="col-6" style={{ width: "90%" }}>
     <Slider dataSlider={LabImages3} showDots={true} />
    </div>{" "}
    <div className="col-6" style={{ width: "100%" }}>
     {Labs.content}
    </div>
   </div>
  </>
 )
}

export const activities = () => {
 return (
  <>
   {/* <div className="row rowmarl3">
    <Slider dataSlider={ActivityImages} showDots={true} />
   </div> */}
   <div className="row rowmarl3">{Activity.content}</div>
  </>
 )
}

export const achievements = () => {
 return (
  <>
   {" "}
   <div className="row rowmarl3">{Achievements.content}</div>
  </>
 )
}

export const others = () => {
 return (
  <>
   {" "}
   <div className="row rowmarl3">{Others.content}</div>
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
  relPath: "/chem/syllabus",
  // img: "/department/syllabus.svg",
 },
 {
  title: "Faculty",
  relPath: "/chem/faculty",
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
  title: "More Info",
  data: "others",
  // img: "/department/labs.svg",
 },
 {
  title: "Mission & Vision",
  data: "missionvision",
  // img: "/department/mission.svg",
 },
]
