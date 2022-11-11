import React from "react"
import Slider from "../../Slider/Slider"

import {
  Achievements,
  Activity,
  ActivityImages,
  LabImages,
  Labs,
  Others,
} from "./chem-others-data"

export const routeName = "che"
export const title = "Chemistry Department"
console.log(LabImages)
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
      The Chemistry department was established in 1924, at the same time the
      institute was founded. Until recently the department has been an auxiliary
      department with limited capacity, running a modest Ph.D. program and
      offering B. Tech. chemistry course to UG students. In the past 3-4 years
      the department has seen a lot of expansion, and with increasing faculty
      strength the number of UG courses offered to B. Tech students has
      increased. Also, the department's own teaching program, 5 year Integrated
      M.Sc. in Chemistry, has been started in the current academic year
      (2015-16), and research activity is gradually being expanded. The
      department has been and will remain committed to quality teaching and
      research with a conscious effort to achieve excellence.
    </>
  )
}
export const mission = () => {
  return (
    <>
      To develop and promote innovations in Education at all levels, and
      generate fundamental and applied knowledge by engaging in scientific
      research by adopting suitable steps.
      <br />
      <br />
      To promote academic growth by offering state-of-the-art education in
      undergraduate, postgraduate and doctoral programmes.
      <br />
      <br />
      To pursue quality research output by developing necessary and adequate
      research facilities and undertaking collaborative / sponsored research
      projects.
      <br />
      <br />
      Maintaining and enhancing the diversity of students, staff, faculty and
      curricula.
    </>
  )
}

export const vision = () => {
  return (
    <>
      To serve the country through this institution by pursuing excellence in
      scientific and technical education and research.
      <br />
      <br />
      To make this department a center of excellence for cutting edge
      fundamental and applied research.
    </>
  )
}

export const contact = () => {
  return (
    <>
      Department of Chemistry,
      <br />
      <br />
      National Institute Of Technology Patna, Ashok Rajpath, Patna - 800005.
      <br />
      <br />
      Email: head.ch@nitp.ac.in
    </>
  )
}

export const labs = () => {
  return (
    <>
      <div className="row rowmarl3"
        style={{flexDirection: "column", alignItems: "center"}}
      >
        <div className="col-6"
          style={{width: "90%"}}
        >
          <Slider dataSlider={LabImages} />
        </div>{" "}
        <div className="col-6"
          style={{width: "100%"}}
        >{Labs.content}</div>
      </div>
    </>
  )
}

export const activities = () => {
  return (
    <>
      <div className="row rowmarl3">
        <Slider dataSlider={ActivityImages} showDots={true} />
      </div>
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
