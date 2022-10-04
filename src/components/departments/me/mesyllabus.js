import React, { useEffect, useState } from "react"
import Table from "../../table"
import { TabPage } from "../../styles/tabpage"
import Courseug from "./Mech BTech CourseStructure"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"
import {
  MtechDesignEngineering as Coursepg1,
  MtechProductionEngineering as Coursepg2,
  MtechThermalEngineering as Coursepg3
} from "./Mech MTech"
import { PhdCourse } from "./Mech Phd"
import Coursedd from "./medd.js"
const Mesyllabus = props => {
  const [course, setCourse] = useState("programmesug")
  const [syllabus, setSyllabus] = useState(Courseug)

  useEffect(() => {
    
  }, [course])
  return (
    <>
    <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
          <div className="mainDiv syllabus-page" style={{width: "90vw"}}>
            <div className="row rowmarl3">
              <div className="digital">
                <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
                <h2 data-aos="zoom-in-right">
                    {" "}
                    -Mechanical Engineering
                  </h2>
                  <br />
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
                      setCourse("programmespg1")
                      setSyllabus(Coursepg1)
                    }}
                    className={course == "programmespg1" ? "btnactive" : ""}
                  >
                    M.tech - Design Engineering
                  </button>
                  <button
                    onClick={() => {
                      setCourse("programmespg2")
                      setSyllabus(Coursepg2)
                    }}
                    className={course == "programmespg2" ? "btnactive" : ""}
                  >
                    M.tech - Production Engineering
                  </button>
                  <button
                    onClick={() => {
                      setCourse("programmespg3")
                      setSyllabus(Coursepg3)
                    }}
                    className={course == "programmespg3" ? "btnactive" : ""}
                  >
                    M.tech - Thermal Engineering
                  </button>
                  <button
                    onClick={() => {
                      setCourse("programmesphd")
                      setSyllabus(PhdCourse)
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
                <li><a href="/">Mechanical Engineering with Specialization in Manufacturing and Industrial Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))</a></li>
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
                  <td>{elem.deptt}</td>
                  <td>{elem.sem_elect}</td>
                  <td>{elem.course_code}</td>
                  <td>
                    <a href={elem.url}>{elem.course_title}</a>
                  </td>
                  <td>{elem.l}</td>
                  <td>{elem.t}</td>
                  <td>{elem.p}</td>
                  <td>{elem.credits}</td>
                </tr>
              ))}
            </Table>}
          </div>
        </TabPage>
        {course === "programmesphd" && <h3 align="center">Other credit courses can be opted from PG course Section.(<a href="./mech/syllabus/PG/MTechupdtedcoursestructure_DesignEngineering_modified.pdf">Click here to select Courses.</a>)</h3>}
        </PageLayout>
        </>
  )}
  {/* return (
    <>
      <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <div className="syllabus-page">
          <div className="layoutrow layoutrowmain syllabus-page-head">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right">Syllabus</h1>
              </div>
              <div className="row rowmarl3">
                <h2 data-aos="zoom-in-right"> -Mechanical Engineering</h2>
              </div>
            </div>
          </div>
          <Table>
            <tr className="syllabus-table-head">
              <th>Deptt.</th>
              <th>Sem/Electives</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>L</th>
              <th>T</th>
              <th>P</th>
              <th>Credits</th>
              <th>Dept.</th>
            </tr>
            {Course.map(elem => (
              <tr className="syllabus-table-row">
                <td>{elem.deptt}</td>
                <td>{elem.sem_elect}</td>
                <td>{elem.course_code}</td>
                <td>{elem.course_title}</td>
                <td>{elem.l}</td>
                <td>{elem.t}</td>
                <td>{elem.p}</td>
                <td>{elem.credits}</td>
                <td>{elem.dept}</td>
              </tr>
            ))}
          </Table>
        </div>
      </PageLayout>
    </>
  ) */}
export default Mesyllabus
