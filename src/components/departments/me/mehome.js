import React from "react"
import { Achievements, Activities, Labs } from "./me-others-data"

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
      Bihar College of Engineering (BCE) was established in 1924 and it is the
      sixth oldest Engineering College in India. The Department of Mechanical
      Engineering was established in 1952 and the M.Tech Program was started in
      1978. BCE was converted to National Institute of Technology Patna in 2004
      Initially B.Tech. Program in Mechanical Engineering started with intake of
      20, which has now become 125. Presently, the department is also having PhD
      programmes with total of more than 100 students.
    </>
  )
}
export const mission = () => {
  return (
    <>
      To provide a high-quality educational experience for undergraduate and
      graduate students that enables them to become leaders in their chosen
      professions and to make them globally competitive mechanical engineers.
      <br />
      To create, explore, and develop innovations in engineering and science
      through undergraduate and graduate research. To develop linkages with
      world class R&D organizations and educational institutions in India and
      abroad for excellence in teaching, research and consultancy practices.
    </>
  )
}

export const vision = () => {
  return (
    <>
      To contribute to the society through excellence in scientific and
      technical education and research
      <br />
      <br />
      To contribute the country by providing globally competent Mechanical
      Engineers capable of working in an inter-disciplinary environment which
      foster spirits of innovation, entrepreneurship and leadership.
      <br />
      <br />
      To support industry for growth, being the valuable resource for them, and
      remain a role model for others in the field of Mechanical Engineering.
    </>
  )
}

export const contact = () => {
  return (
    <>
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
      Extn: +91-612-(2371715/2715/2371929/
      <br />
      2370419/2370843/2371930) * 441
    </>
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

export const datalist = [
  {
    title: "About",
    data: "about",
    // img: "/department/about.svg",
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
    title: "Mission & Vision",
    data: "missionvision",
    // img: "/department/mission.svg",
  }
]
