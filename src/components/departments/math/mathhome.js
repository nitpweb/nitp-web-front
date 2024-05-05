import React from "react"
import { Activities } from "./maths-others-data"

export const routeName = "math"
export const title = "Mathematics Department"
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
   The Department of Mathematics was established in 1924 and department offer
   several courses that support other engineering departments. Recently a new
   program Integrated M. Sc. in Mathematics is started and running successfully
   from the academic year 2015-2016. Current faculty strength of the department
   is nine and they are experienced in teaching and research in several branches
   of Mathematics. Department of Mathematics is one of the backbone of the
   Institution as it is an essential department for engineering courses up to
   Ph.D level.
  </>
 )
}
export const mission = () => {
 return (
  <>
   The Department of Mathematics will offer courses and programs of study that
   will ensure that the student learner will be able to contribute to today's
   society. The students will obtain abilities to critically assess numerical
   and graphical information; learn to formulate strategies for solving
   problems; and acknowledge the importance of being intellectually curious
   throughout their adult lives. The Department, through its faculty, will
   continue to contribute to the body of knowledge of the discipline, whether in
   traditional research, applied research, or research in the teaching of
   mathematics.
   <br />
   <br />
   The main mission of the Department of Mathematics is to offer high quality
   instruction in mathematics, statistics and the applied sciences to all
   students that it serves. The department strives to teach the main ideas and
   methods of mathematics and to build up the students reasoning and analytical
   skills. The department maintains programs and teaching practices that match
   those at most Undergraduate/Postgraduate programs at Institute. As the
   department offers core courses and in addition support other engineering
   degree programs, our mission is to make sure that these courses are taught at
   a high standard and meet the needs of those programs. For its majors, the
   department mission is to provide students with a number of degree programs
   and a wide spectrum of courses, and to offer them a rigorous training that
   enables them to pursue graduate degrees or work in jobs that require a high
   degree of mathematical skills.
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
    Department of Mathematics,
    <br />
    <br />
    National Institute Of Technology Patna,
    <br />
    Ashok Rajpath, Patna - 800005.
    <br />
    <br />
    Email: head.ma@nitp.ac.in
    <br />
    <br />
    Extn: +91-612-(2371715/2715/2371929/
    <br />
    2370419/2370843/2371930) * 117
   </div>

   <div className="img img-12">
    <img
     src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1-TK7XcNCqXlnNON5BWASENxjYXsw_ouB"
     alt="hodImage"
    />
    <br />
    <br />
    <strong>Dr. Gowrisankar S</strong>
    <br />
    Associate Professor & HOD
   </div>
  </div>
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
  relPath: "/math/syllabus",
  // img: "/department/syllabus.svg",
 },
 {
  title: "Faculty",
  relPath: "/math/faculty",
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
