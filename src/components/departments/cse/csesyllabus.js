import React, { useEffect, useState } from "react"
import Courseug from "./cse BTech CourseStructure"
import Coursephd from "./phd course"
import Coursepg from "./cse MTech CourseStructure"
import Courseug_nep21 from "./cse Btech NEP21"
import Coursedd from "./csedd.js"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"

import { TabPage } from "../../styles/tabpage"
import Table from "../../table"

const Csesyllabus = props => {
    const [course, setCourse] = useState("programmesug")
  const [syllabus, setSyllabus] = useState(Courseug)

  useEffect(() => {
    
  }, [course])
  
  return (
    <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
          <div className="mainDiv syllabus-page" style={{width: "90vw"}}>
            <div className="row rowmarl3">
              <div className="digital">
                <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
                <h2 data-aos="zoom-in-right">
                    {" "}
                    -Computer Science and Engineering
                  </h2>
                <div className="probutton">
                  <button
                    onClick={() => {
                      setCourse("programmesug")
                      setSyllabus(Courseug)
                    }}
                    className={course == "programmesug" ? "btnactive" : ""}
                  >
                    UG Courses
                  </button>
                  <button
                    onClick={() => {
                      setCourse("programmesugnep21")
                      setSyllabus(Courseug_nep21)
                    }}
                    className={course == "programmesugnep21" ? "btnactive" : ""}
                  >
                    UG Courses-2021
                  </button>
                  <button
                    onClick={() => {
                      setCourse("programmespg")
                      setSyllabus(Coursepg)
                    }}
                    className={course == "programmespg" ? "btnactive" : ""}
                  >
                    PG (M.tech/MURP) Courses
                  </button>
                  <button
                    onClick={() => {
                      setCourse("programmesphd")
                      setSyllabus(Coursephd)
                    }}
                    className={course == "programmesphd" ? "btnactive" : ""}
                  >
                    PhD Courses
                  </button>
                  <button
                    onClick={() => {
                      setCourse("programmesdd")
                      setSyllabus(Coursedd)
                    }}
                    className={course == "programmesdd" ? "btnactive" : ""}
                  >
                    Dual Degree
                  </button>
                </div>
              </div>
            </div>

            
            {
              (syllabus === Coursedd) &&
              <ul>
                <li><a href="https://web.nitp.ac.in/uploads22/DataScienceCombinedSep22.pdf" target="_blank">Computer Science and Engineering with Specialization in Data Science (5 Years, Bachelor and Master of Technology (Dual Degree))</a></li>
                <li><a href="https://web.nitp.ac.in/uploads22/CyberSecurityCombinedSep2022.pdf" target="_blank">Computer Science and Engineering with Specialization in Cyber Security (5 Years, Bachelor and Master of Technology (Dual Degree))</a></li>
              </ul>
            }
            {
              (syllabus === Coursedd) || 
            <Table style={{width:"100%", marginTop:"20px"}}>
              <br />
              <tr className="syllabus-table-head">
                <th>Dept.</th>
                <th>Sem/Electives</th>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>L</th>
                <th>T</th>
                <th>P</th>
                <th>Credits</th>
              </tr>
              {syllabus.map(elem => (
                <tr className="syllabus-table-row">
                  <td>{elem.dept}</td>
                  <td>{elem.sem_elect}</td>
                  <td>{elem.coursecode}</td>
                  <td>
                    <a href={elem.url} target="_blank">{elem.coursetitle}</a>
                  </td>
                  <td>{elem.l}</td>
                  <td>{elem.t}</td>
                  <td>{elem.p}</td>
                  <td>{elem.credits}</td>
                </tr>
              ))}
            </Table>
            }
          </div>
        </TabPage>
    </PageLayout>
  )
}

export default Csesyllabus
