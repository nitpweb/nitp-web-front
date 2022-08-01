import React, { useEffect, useState } from "react"
import Courseug from "./cse BTech CourseStructure"
import Coursephd from "./phd course"
import Coursepg from "./cse MTech CourseStructure"
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
    <>
    <TabPage>
          <div className="mainDiv" style={{width: "90vw"}}>
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
                </div>
              </div>
            </div>

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
                    <a href={elem.url}>{elem.coursetitle}</a>
                  </td>
                  <td>{elem.l}</td>
                  <td>{elem.t}</td>
                  <td>{elem.p}</td>
                  <td>{elem.credits}</td>
                </tr>
              ))}
            </Table>
          </div>
        </TabPage>
        
      {/* <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <div className="syllabus-page">
          <div className="layoutrow layoutrowmain syllabus-page-head">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right">Syllabus</h1>
              </div>
              <div className="row rowmarl3">
                <h2 data-aos="zoom-in-right">
                  {" "}
                  -Computer Science and Engineering
                </h2>
              </div>
            </div>
          </div>
          <Table>
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
            {Course.map(elem => (
              <tr className="syllabus-table-row">
                <td>{elem.dept}</td>
                <td>{elem.sem_elect}</td>
                <td>{elem.coursecode}</td>
                <td>
                  <a href={elem.url}>{elem.coursetitle}</a>
                </td>
                <td>{elem.l}</td>
                <td>{elem.t}</td>
                <td>{elem.p}</td>
                <td>{elem.credits}</td>
              </tr>
            ))}
          </Table>
        </div>
      </PageLayout> */}
    </>
  )
}

export default Csesyllabus
