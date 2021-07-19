export const routeName = "arch"
export const title = "Architecture Department"
import { Labs, LabImages } from "./arch-others-data"
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
      The Department of Architecture is one of the oldest Department of the
      Institute, which was established in the year 1979. The Department offers
      undergraduate program in architecture, Post graduate program in Urban and
      Regional Planning and Doctoral program. It is committed to provide quality
      teaching and research opportunities to its student.
      <br />
      <br />
      The department is dedicated to producing intellectuals and professionals
      who are well-versed in the state-of-the-art techniques and requisite
      skills of the profession. The programme also inculcates humanist ideas,
      community values and team spirit to motivate and stimulate creativity. To
      understand these objectives, architecture is taught as a serious,
      exploratory and creative attempt that embraces both the humanities and the
      sciences.{" "}
    </>
  )
}
export const mission = () => {
  return (
    <>
      To generate intellectual capital by engaging in cutting-edge research and
      to promote academic growth by offering state-of-the-art undergraduate,
      postgraduate and doctoral programmes.
      <br />
      <br />
      To develop the department as regional center of knowledge and information
      in the field of Architecture and Planning.
      <br />
      <br />
      To identify, based on an informed perception of local, regional national
      and global needs, areas of specialization upon which the department can
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
      knowledge to create a sustainable built environment for improved quality
      of life on the earth.{" "}
    </>
  )
}

export const contact = () => {
  return (
    <>
      Department of Architecture,
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
      2370419/2370843/2371930) * 199
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
    title: "Syllabus",
    relPath: "/arch/syllabus",
    img: "/department/syllabus.svg",
  },
  {
    title: "Faculties",
    relPath: "/arch/faculty",
    img: "/department/faculty.svg",
  },
]
