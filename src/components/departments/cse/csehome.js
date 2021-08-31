import React from "react"

export const routeName = "cse"
export const title = "Computer Science & Engineering"
import { Achievements, Activities, Labs } from "./cse-others-data"
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
      Computer Science and Engineering department of NIT Patna offers courses
      leading to Bachelor of Technology in Computer Science and Engineering. The
      department has a very good infrastructure and faculty to provide excellent
      education.
      <br />
      <br />
      The curriculum is updated regularly to keep up with the growing demands
      and the changing trends of the software industry and research
      laboratories.
      <br />
      <br />
      The department provides a wide range of courses. The prominent among them
      includes Data Structures, Design and Analysis of Algorithms, System
      Programming, Computer Networks, Data Mining and Warehousing, Distributed
      and Parallel Computing, Mobile and Wireless Computing, Real-time Systems,
      Cryptography, Genetic Algorithm and Artificial Intelligence. Apart from
      these, students are also offered a wide variety of electives.
    </>
  )
}
export const mission = () => {
  return (
    <>
      To formulate up-to-date and flexible technical programs which will allow
      our graduates to attain their maximum technical potential, managerial
      capability, be competitive in the job market and to emerge as a centre of
      excellence.
    </>
  )
}

export const vision = () => {
  return (
    <>
      To impart high quality of Under-graduate and Post-graduate education in
      all Computer related fields to increase the employability.
      <br />
      To develop world class professionals to meet the growing manpower demands
      and needs of the industry for economic development of the state and the
      country.
      <br />
      To conduct high standard technical research for betterment of the society.
    </>
  )
}

export const contact = () => {
  return (
    <>
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
    </>
  )
}

export const labs = () => {
  return (
    <>
      {" "}
      {Labs.map((lab, idx) => {
        return (
          <div className="row rowmarl3" key={idx}>
            <div
              className="col-6"
              style={{ textAlign: "left", fontSize: `1.1rem` }}
            >
              {lab.content}
            </div>
            <div className="col-6">{lab.image}</div>
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
    title: "Notice",
    data: "happening",
    img: "/department/activities.svg",
  },
  {
    title: "Contact",
    data: "contact",
    img: "/department/contact.svg",
  },
  {
    title: "Labs",
    data: "labs",
    img: "/department/labs.svg",
  },
  {
    title: "Achievements",
    data: "achievements",
    img: "/department/achievements.svg",
  },
  {
    title: "Activities",
    data: "activities",
    img: "/department/activities.svg",
  },
  {
    title: "Syllabus",
    relPath: "/cse/syllabus",
    img: "/department/syllabus.svg",
  },
  {
    title: "Faculties",
    relPath: "/cse/faculty",
    img: "/department/faculty.svg",
  },
]
