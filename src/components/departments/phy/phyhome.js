import React from "react"
import { Achievements, Activities } from "./phy-others-data"

export const routeName = "phy"
export const title = "Physics Departmen"
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
   The Department of Physics was established in 1924 and since then has been
   functioning as an important part of the institute. As of now, the Department
   has eight faculty members and four support staffs at different levels.
   <br />
   <br />
   At present, there are 12 students enrolled in Integrated M. Sc. And 8
   students enrolled in the Ph. D. program.
   <br />
   <br />
   The Department is mentored by Prof. K.L.Chopra ,Ex-Director,IIT Kharagpur.
  </>
 )
}
export const mission = () => {
 return (
  <>
   To train the students to be lifelong learners who will contribute to the
   creation of new knowledge, new technology, and innovation through excellence
   in research in emerging areas and disciplines.
   <br />
   <br />
   To educate students to be future leaders in science, technology, industry,
   education and other professions and succeed in a globally competitive
   environment.
   <br />
   <br />
   To create National and International collaborations for research engagement
   in strategic areas of research
   <br />
   <br />
   To create National and International collaborations for research engagement
   in strategic areas of research
  </>
 )
}

export const vision = () => {
 return (
  <>
   The vision of the Department is to achieve excellence in undergraduate and
   postgraduate education and research through a synergic combination and
   thereby lead to development of new knowledge.
  </>
 )
}
export const research = () => {
 return <></>
}

export const contact = () => {
 return (
  <div className="img-11">
   <div>
    Department of Physics,
    <br />
    <br />
    National Institute Of Technology Patna,
    <br />
    Ashok Rajpath, Patna - 800005.
    <br />
    <br />
    Email: head.ph@nitp.ac.in
    <br />
    <br />
    Extn: +91-612-(2371715/2715/2371929/
    <br />
    2370419/2370843/2371930) * 163
   </div>

   <div className="img img-12">
    <img
     src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1o2sx8d4oS7Uckisey-MyTgTA-Nn19vZu"
     alt="hodImage"
    />
    <br />
    <br />
    <strong>Dr. Dev Kumar Mahato</strong>
    <br />
    Associate Professor & HOD
   </div>
  </div>
 )
}
export const achievements = () => {
 return (
  <>
   <div className="row rowmarl3">{Achievements.content}</div>
  </>
 )
}

export const activities = () => {
 return (
  <>
   {" "}
   <div className="row rowmarl3">{Activities.content}</div>
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
  relPath: "/physics/syllabus",
  // img: "/department/syllabus.svg",
 },
 {
  title: "Faculty",
  relPath: "/physics/faculty",
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
  title: "Mission & Vision",
  data: "missionvision",
  // img: "/department/mission.svg",
 },
]
