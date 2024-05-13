export const routeName = "arch"
export const title = "Architecture & Planning Department"
import { Labs, LabImages, Research } from "./arch-others-data"
import Slider from "../../Slider/Slider"
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
export const about = () => {
 return (
  <>
   The Department of Architecture was established in the Bihar College of
   Engineering (BCE) Patna in the year 1979 under Patna University. It was the ¬
   first time that architectural education had commenced in Bihar. When BCE
   Patna was rechristened as National Institute of Technology Patna on 28th
   January 2004, it came under the control of Ministry of Human Resource
   Development (MHRD), Government of India. The Department of Architecture and
   Planning offers programmes in Bachelor of Architecture (B.Arch.), Master of
   Urban and Regional Planning (MURP), Master of Architecture (Sustainable
   Architecture) and Ph.D. in Architecture and Planning.
   <br />
   <br />
   The B.Arch. course, apart from ful¬filling the functional requirements, leads
   towards creativity, innovation and aesthetics in the approach for design of
   buildings and its environments. The postgraduate course in Master of Urban
   and Regional Planning, which commenced from 2012-13, imparts knowledge of
   urban and regional planning, green infrastructure, environment planning,
   sustainability and energy efficient aspects in urban and regional planning.
   It emphasizes on creating new ideas and innovative concepts of physical /
   spatial planning in the present scenario. The nomenclature of Department of
   Architecture gets changed to Department of Architecture and Planning in the
   year 2020. This course is affiliated by Institute of Town Planners, India.
   <br />
   <br />
   The M.Arch. programme stated in 2019-2020, the nomenclature of this post
   graduate programme was changed to Master of Architecture (Sustainable
   Architecture) from session 2022-23. The Course content focused more on
   environmental issues related to built environment, ecology, energy conscious
   built structure, Artificial Intelligence, Building Simulation and different
   means of passive architectural methods. The Ph.D. programme started in year
   2009 with research areas in Architecture, Urban Planning, Regional Planning,
   Environmental Planning, Transport Planning, Architectural Conservation,
   Landscape, Housing, Healthcare Architecture and Construction Planning
   Management, etc.{" "}
  </>
 )
}
export const mission = () => {
 return (
  <>
   To generate intellectual capital by engaging in cutting-edge research and to
   promote academic growth by offering state-of-the-art undergraduate,
   postgraduate and doctoral programmes.
   <br />
   <br />
   To develop the department as regional center of knowledge and information in
   the field of Architecture and Planning.
   <br />
   <br />
   To identify, based on an informed perception of local, regional national and
   global needs, areas of specialization upon which the department can
   concentrate.
   <br />
   <br />
   To undertake joint initiatives which offer opportunities for long-term
   interaction with academia, industry, government and society.
   <br />
   <br />
   To develop human potential to its fullest extent so that intellectually
   capable and imaginatively gifted leaders can emerge in a range of ethical
   professions.
  </>
 )
}

export const vision = () => {
 return (
  <>
   To become a center of excellence to inspire, innovate and transform the
   knowledge to create a sustainable built environment for improved quality of
   life on the earth.{" "}
  </>
 )
}

export const contact = () => {
 return (
  <div className="img-11">
   <div>
    Department of Architecture & Planning,
    <br />
    <br />
    National Institute Of Technology Patna,
    <br />
    Ashok Rajpath, Patna - 800005.
    <br />
    <br />
    Email: head.ar@nitp.ac.in
    <br />
    <br />
    Extn: +91-612-(2371715/2715/2371929/
    <br />
    2370419/2370843/2371930) * 240/241
   </div>

   <div className="img img-12">
    <img
     src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1CKQd0i9upET-06HtxIX8OekY7pWh26Zy"
     alt="hodImage"
    />
    <br />
    <br />
    <strong>Dr.Fulena Rajak</strong>
    <br />
    Professor & HOD
   </div>
  </div>
 )
}
export const research = () => {
 return (
  <>
   {" "}
   <div className="">{Research.content}</div>
  </>
 )
}
export const labs = () => {
 return (
  <>
   {" "}
   <div className="row rowmarl3">
    {" "}
    <div className="col-6">{Labs.content}</div>
    <div className="col-6">
     <Slider dataSlider={LabImages} />
    </div>{" "}
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
  relPath: "/arch/syllabus",
  // img: "/department/syllabus.svg",
 },
 {
  title: "Faculty",
  relPath: "/arch/faculty",
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
  title: "Mission & Vision",
  data: "missionvision",
  // img: "/department/mission.svg",
 },
]
