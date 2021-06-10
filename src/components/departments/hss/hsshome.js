import { Activities } from "./hss-others-data"
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
      intellectual and cultural foundations for the study of human relations
      with society interaction and teaching towards problem solving of the
      nation in contemporary contexts. The Department, with its diverse
      expertise offers students in the B. Tech programme courses aimed at
      developing essential skills in critical thinking and writing along with
      the knowledge of literature, society, economic value, and philosophies of
      the mind and body. The Department also offers Doctoral programmes in
      humanities and social sciences especially in English, Economics, Sociology
      and Human resource management besides elective courses for the
      undergraduate programmes of the institute.
    </>
  )
}
export const mission = () => {
  return (
    <>
      To provide quality teaching, learning, and research in the field of
      Humanities and Social Sciences by creating,preserving,transmitting and
      utilizing knowledge especially to engineering students so that
      intellectually capable and imaginatively gifted leaders can emerge in the
      technical education and industry.
    </>
  )
}

export const vision = () => {
  return (
    <>
      The Department aspires to be a national exemplar in undergraduate teaching
      and research in the humanities and social sciences. Upon completion of the
      program, the students will be prepared to compete, sustain and advance
      their communities and the world.
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
      Contact no: +91-9934065068
    </>
  )
}

export const activities = () => {
  return (
    <>
      {" "}
      <div className="row rowmarl3 ">
        <h1 data-aos="zoom-in-right" style={{ fontSize: `3rem` }}>
          Activities
        </h1>
      </div>
      <div className="rowmarl3">{Activities.content}</div>
    </>
  )
}

export const datalist = [
  {
    title: "About",
    data: "about",
    img: "/department/about.svg",
  },
  {
    title: "Mission & Vision",
    data: "missionvision",
    img: "/department/mission.svg",
  },
  {
    title: "Happenings",
    data: "happening",
    img: "/department/activities.svg",
  },
  {
    title: "Contact",
    data: "contact",
    img: "/department/contact.svg",
  },

  {
    title: "Activities",
    data: "activities",
    img: "/department/activities.svg",
  },
]
