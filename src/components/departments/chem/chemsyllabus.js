import React, { useState } from "react"
import { TabPage } from "../../styles/tabpage"
import Table from "../../table"
import Courseelect from "./Chem IMSc Electives"
import CourseImsc from "./Chem IMSc CourseStructure"
import CourseUg from "./btech"
import CoursePhd from "./chem-phd"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"

const Csesyllabus = props => {
 const [course, setCourse] = useState("programmesimsc")
 const [syllabus, setSyllabus] = useState(CourseImsc)
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
     <div className="syllabus-page mainDiv">
      <div className="row rowmarl3">
       <div className="digital">
        <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
        <h2 data-aos="zoom-in-right"> -Chemistry</h2>
        <ul>
         <li>
          <a
           href="https://web.nitp.ac.in/dept/chem/Syllabus/Engg%20Chemistry%20Syllabus.pdf"
           target="_blank"
          >
           Engineering Chemistry Course for ALL Engg. Branches(B.Tech
           NewSyllabus) 2021
          </a>
         </li>
         <li>
          B. Tech. 1st year (1st and 2nd Semester) General Chemistry course (600
          students) Chemical Sciences (1CH101)
         </li>
         <li>
          B. Tech. 1st year (1st and 2nd Semester) General Chemistry Lab (600
          students) Chemical Sciences Lab (1CH102)
         </li>
         <li>
          B. Tech. 3rd and 4th Semester UG Course (600 students) Green
          Technology (CH104)
         </li>
         <li>
          B. Tech. 3rd and 4th Semester UG Course (600 students) Bio-Science
         </li>
         <li>5 year Integrated MSc Chemistry (30 students)</li>
         <li>PhD</li>
        </ul>

        <div className="probutton">
         {/* <button
                    onClick={() => {
                      setCourse("programmesug")
                      setSyllabus(CourseUg)
                    }}
                    className={course == "programmesug" ? "btnactive" : ""}
                  >
                    UG Courses
                  </button> */}
         <button
          onClick={() => {
           setCourse("programmesimsc")
           setSyllabus(CourseImsc)
          }}
          className={course == "programmesimsc" ? "btnactive" : ""}
         >
          Integrated M.Sc Courses
         </button>
         <button
          onClick={() => {
           setCourse("programmesphd")
           setSyllabus(CoursePhd)
          }}
          className={course == "programmesphd" ? "btnactive" : ""}
         >
          PhD Courses
         </button>
        </div>
       </div>
      </div>

      {course === "programmesimsc" && (
       <div>
        <div className="layoutrow">
         <h1 className="rowmarl3" data-aos="zoom-in-right">
          IMSc Course Structure
         </h1>
        </div>
        <Table>
         <tr className="syllabus-table-head">
          <th>Semester</th>
          <th>Course Code</th>
          <th>Course Title</th>
          <th>L</th>
          <th>T</th>
          <th>P</th>
          <th>Credits</th>
         </tr>
         {syllabus.map(elem => (
          <tr className="syllabus-table-row">
           <td>{elem.semester}</td>
           <td>{elem.course_code}</td>
           <td>{elem.course_title}</td>
           <td>{elem.l}</td>
           <td>{elem.t}</td>
           <td>{elem.p}</td>
           <td>{elem.credit}</td>
          </tr>
         ))}
        </Table>
        <div className="layoutrow">
         <h1 className="rowmarl3" data-aos="zoom-in-right">
          IMSc Electives
         </h1>
        </div>
        <Table>
         <tr className="syllabus-table-head">
          <th>Course Code</th>
          <th>Course Title</th>
          <th>L</th>
          <th>T</th>
          <th>P</th>
          <th>Credits</th>
         </tr>
         {Courseelect.map(elem => (
          <tr className="syllabus-table-row">
           <td>{elem.course_code}</td>
           <td>{elem.course_title}</td>
           <td>{elem.l}</td>
           <td>{elem.t}</td>
           <td>{elem.p}</td>
           <td>{elem.credits}</td>
          </tr>
         ))}
        </Table>
       </div>
      )}

      {/* {course === "programmesug" && (
                <div className="layoutrow">
                  <h1 className="rowmarl3" data-aos="zoom-in-right">
                    UG Course Structure
                  </h1>
                </div>
            )} */}
      {course === "programmesphd" && (
       <div className="layoutrow">
        <h1 className="rowmarl3" data-aos="zoom-in-right">
         PhD Course Structure
        </h1>
        <Table>
         <tr className="syllabus-table-head">
          <th>Semester</th>
          <th>Course Code</th>
          <th>Course Title</th>
          <th>L</th>
          <th>T</th>
          <th>P</th>
          <th>Credits</th>
         </tr>
         {syllabus.map(elem => (
          <tr className="syllabus-table-row">
           <td>{elem.semester}</td>
           <td>{elem.course_code}</td>
           <td>{elem.course_title}</td>
           <td>{elem.l}</td>
           <td>{elem.t}</td>
           <td>{elem.p}</td>
           <td>{elem.credit}</td>
          </tr>
         ))}
        </Table>
       </div>
      )}
     </div>
    </TabPage>
   </PageLayout>
  </>
 )
}
export default Csesyllabus
