import React from "react"
import bag from "./student/img/bag.svg"
import sac from "./student/img/sac.png"
import coronapic from "./student/img/coronapic.png"
import exchange from "./student/img/exchange.svg"
import "./student/css/student.css"
import first from "./student/img/firstyear.svg"
import antiragging from "./student/img/antiragging.svg"

const sacinfo =
  "The Student Activity Centre (SAC) was built with the vision to provide support for multiple kinds of student activities. It was initiated by the honorable Director of NIT Patna, Prof. Asok De to encourage participation in extra-curricular activities to promote overall grooming of personality of the students. Various cultural activities and indoor games are conducted in the SAC. This enormous building has numerous rooms each of which is dedicated to activities related to sports and extra-curricular activities. Student offices for the same are also hosted in the SAC. Also, many open spaces have been specifically designed in the SAC to promote community interaction. A huge stadium adjoins the SAC in which football and cricket matches are held. The administration believes that these activities will help the students to provide a dynamic edge to their performances in the professional world and build a truly multi-faceted personality."

const coronainfo =
  "The annual technical fest of NIT Patna has become one of the biggest technical fest of the country. The last edition attracted participants from over 150 institutes from across the country, thus making it the largest technical fest of Bihar and Jharkhand. Aimed at providing a platform for showcasing the best and the latest innovations in the world of technology, various events such as robotics, circuit designing, programming, presentations etc. gives the students to showcase their talent and their practical skills to use."

const studentexchange =
  " National Institute of Technology (NIT), Patna has recently signed a memorandum of understanding (MoU) with the Handong Global University, Pohang, South Korea for exchange of students, faculty and research. The first six-month exchange programme will be funded by UNICEF. The research areas in focus are urban planning, urban development, infrastructure development and electrical engineering, all of which relate most directly to Bihar’s immediate needs. South Korea is known the world over for its highly advanced monorail system which also has a low impact on traffic flow on roads under construction. Automated driverless trains are another feature of the monorail; an Indian student may want to study. Apart from the concrete advantages, exchange of students and faculty and exposure to the teaching practices in South Korea is likely to have enormous impact on engineering education as being imparted at NIT Patna in the coming days."

const Studentpage = () => {
  return (
    <div className="studentsection">
      <div className="smainrow smainrowmain">
        <div className="col-6 imgcolstyle">
          <img src={bag} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Students</h1>
          </div>
          <div className="row">
            <h2>“You have to dream before your dreams can come true.”</h2>
          </div>
          <div className="row">
            <h2 id="aut">- APJ Abdul Kalam</h2>
          </div>
        </div>
      </div>
      <div className="smainrow">
        <div className="col-6">
          <div className="row">
            <h1>Student Activity Center</h1>
          </div>
          <div className="row">
            <h3>{sacinfo}</h3>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img src={sac} className="img-fluid" />
        </div>
      </div>
      <div className="smainrow smainrow1">
        <div className="col-6 imgcolstyle">
          <img src={coronapic} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Annual Tech-Fest of NIT Patna</h1>
          </div>
          <div className="row rowmarr3">
            <h3>{coronainfo}</h3>
          </div>
        </div>
      </div>
      <div className="smainrow smainrow1">
        <div className="col-6 imgcolstyle">
          <img src={exchange} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Student Exchange Program</h1>
          </div>
          <div className="row rowmarr3">
            <h3>{studentexchange}</h3>
          </div>
        </div>
      </div>
      <div id="sfoot" className="smainrow">
        <img src={antiragging} id="sfimg1" />
        <img src={first} id="sfimg2" />
      </div>
    </div>
  )
}

export default Studentpage
