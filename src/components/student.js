import React from "react"
import styled, { css } from "styled-components"
import bag from "./student/img/bag.svg"
import sac from "./student/img/sac.png"
import coronapic from "./student/img/coronapic.png"
import exchange from "./student/img/exchange.svg"
import "./student/css/student.css"
import first from "./student/img/firstyear.svg"
import antiragging from "./student/img/antiragging.svg"

const Imgstyle = css`
  display: flexbox;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const sacinfo =
  "The Student Activity Centre (SAC) was built with the vision to provide support for multiple kinds of student activities. It was initiated by the honorable Director of NIT Patna, Prof. Asok De to encourage participation in extra-curricular activities to promote overall grooming of personality of the students. Various cultural activities and indoor games are conducted in the SAC. This enormous building has numerous rooms each of which is dedicated to activities related to sports and extra-curricular activities. Student offices for the same are also hosted in the SAC. Also, many open spaces have been specifically designed in the SAC to promote community interaction. A huge stadium adjoins the SAC in which football and cricket matches are held. The administration believes that these activities will help the students to provide a dynamic edge to their performances in the professional world and build a truly multi-faceted personality."

const coronainfo =
  "The annual technical fest of NIT Patna has become one of the biggest technical fest of the country. The last edition attracted participants from over 150 institutes from across the country, thus making it the largest technical fest of Bihar and Jharkhand. Aimed at providing a platform for showcasing the best and the latest innovations in the world of technology, various events such as robotics, circuit designing, programming, presentations etc. gives the students to showcase their talent and their practical skills to use."

const studentexchange =
  " National Institute of Technology (NIT), Patna has recently signed a memorandum of understanding (MoU) with the Handong Global University, Pohang, South Korea for exchange of students, faculty and research. The first six-month exchange programme will be funded by UNICEF. The research areas in focus are urban planning, urban development, infrastructure development and electrical engineering, all of which relate most directly to Bihar’s immediate needs. South Korea is known the world over for its highly advanced monorail system which also has a low impact on traffic flow on roads under construction. Automated driverless trains are another feature of the monorail; an Indian student may want to study. Apart from the concrete advantages, exchange of students and faculty and exposure to the teaching practices in South Korea is likely to have enormous impact on engineering education as being imparted at NIT Patna in the coming days."

const Studentpage = () => {
  return (
    <div className="studentsection">
      <div className="smainrow">
        <div css={Imgstyle} className="col-6">
          <img
            src={bag}
            css={css`
              max-width: 100%;
              height: auto;
            `}
          />
        </div>
        <div
          css={css`
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
          className="col-6"
        >
          <div className="row">
            <h1
              css={css`
                font-weight: bold;
                color: #161616;
                font-size: 3rem;
              `}
            >
              Students
            </h1>
          </div>
          <div className="row">
            <h2
              css={css`
                color: #656565;
              `}
            >
              “You have to dream before your dreams can come true.”
            </h2>
          </div>
          <div className="row">
            <h2
              css={css`
                color: #606060;
                font-weight: bold;
              `}
            >
              - APJ Abdul Kalam
            </h2>
          </div>
        </div>
      </div>
      <div
        className="smainrow"
        css={css`
          @media (max-width: 768px) {
            flex-direction: column;
          }
        `}
      >
        <div
          css={css`
            align-items: center;
          `}
          className="col-6"
        >
          <div className="row">
            <h1>Student Activity Center</h1>
          </div>
          <div className="row">
            <h3>{sacinfo}</h3>
          </div>
        </div>
        <div css={Imgstyle} className="col-6">
          <img
            src={sac}
            css={css`
              max-width: 100%;
              height: auto;
            `}
          />
        </div>
      </div>
      <div className="smainrow">
        <div className="col-6" css={Imgstyle}>
          <img
            src={coronapic}
            css={css`
              width: 80%;
              height: auto;
              margin-left: 10%;
            `}
          />
        </div>
        <div
          css={css`
            align-items: center;
          `}
          className="col-6"
        >
          <div className="row">
            <h1>Annual Tech-Fest of NIT Patna</h1>
          </div>
          <div
            className="row"
            css={css`
              margin-right: 3vw;
            `}
          >
            <h3>{coronainfo}</h3>
          </div>
        </div>
      </div>
      <div className="smainrow">
        <div css={Imgstyle} className="col-6">
          <img
            src={exchange}
            css={css`
              max-width: 100%;
              height: auto;
            `}
          />
        </div>
        <div
          css={css`
            align-items: center;
          `}
          className="col-6"
        >
          <div className="row">
            <h1>Student Exchange Program</h1>
          </div>
          <div
            className="row"
            css={css`
              margin-right: 3vw;
            `}
          >
            <h3>{studentexchange}</h3>
          </div>
        </div>
      </div>
      <div id="sfoot" className="smainrow">
        <img
          src={antiragging}
          css={css`
            margin-left: 5%;
            margin-right: 5%;
            height: 98%;
            max-width: 40%;
          `}
        />
        <img
          src={first}
          css={css`
            margin-left: 5%;
            margin-right: 5%;
            height: 98%;
            max-width: 40%;
          `}
        />
      </div>
    </div>
  )
}

export default Studentpage
