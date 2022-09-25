import Slider from "../../Slider/Slider"

import { 
  Activities,
  ActivityImages,
  Outcomes_,
  LabImages, 
  Labs,
  TimeTable,
  Achievements,
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
      With an interdisciplinary perspective at the heart of its approach, the Department of Humanities and Social Sciences at NIT Patna provides intellectual and cultural foundations for the study of human relations with society interaction and teaching towards problem solving of the nation in contemporary contexts. The department, with its diverse expertise offers students in the B Tech programme courses aimed at developing essential skills in critical thinking and writing along with the knowledge of literature, society, economic value, and philosophies of the mind and body. The department also offers doctoral programmes in humanities and social sciences especially in English, Economics, Sociology and Human Resource Management besides elective courses for the undergraduate programmes of the institute.
    </>
  )
}
export const mission = () => {
  return (
    <>
      To provide quality teaching, learning, and research in the field of Humanities and Social Sciences by creating, preserving, transmitting and utilizing  knowledge especially to engineering students so that intellectually capable and imaginatively gifted leaders can emerge in the technical education and industry.
    </>
  )
}

export const vision = () => {
  return (
    <>
      The Department aspires to be a national exemplar in undergraduate teaching and research in the humanities and social sciences. Upon completion of the program, the students will be prepared to compete, sustain and advance their communities and the world.
    </>
  )
}

// export const Outcomes = () => {
//   return (
//     <>
//       Hello
//     </>
//   )
// }

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
    <>
      Department of Humanities & Social Sciences
      <br />
      <br />
      National Institute Of Technology Patna,
      <br />
      Ashok Rajpath, Patna - 800005.
      <br />
      <br />
      Email: head.hs@nitp.ac.in
      <br />
      <br />
      Contact no: +91-9557805425
    </>
  )
}

// export const labs = () => {
//   return (
//     <>
//     <div className="col-6" style={{ textAlign: "left", fontSize: `1.1rem`,padding:`0px` }}>
//     <h2>Language Lab</h2>
//     Language Laboratory is a designated space for English language learning where students access audio-visual materials. It adapts a perfect blend of Instructor-Led-Training and Computer-Based-Training. The assessment on speaking and listening programme along with reading and writing,  listening and speaking skills to promote proficiency of language.
//     </div>
//     </>
//   )
// }

export const labs = () => {
  return (
    <>
      <div className="row rowmarl3">{Labs.title}</div>
      <div className="rowmarl3" style={{fontSize: `0.8rem`,padding:`0px` }}>{Labs.content}</div>
      <div className="col-6">
          <Slider dataSlider={LabImages} />
      </div>{" "}
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

export const achievements = () => {
  return (
    <>
      {" "}
      <div className=" row rowmarl3" style={{ fontSize: `1.2rem` }}>
        {Achievements.map((act, idx) => (
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
]
