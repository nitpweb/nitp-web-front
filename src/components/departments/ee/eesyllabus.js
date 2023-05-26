import React, { useEffect, useState } from "react"
import Table from "../../table"
import { TabPage } from "../../styles/tabpage"
import { EECourseStructure as Courseug } from "./Elec_Btech_course_structure"
import main from "../img/book.svg"
import {
  EEMtechSyllabusControl as EeMtechControl,
  EEMtechSyllabuspower as EeMtechPower,
} from "./Elec_MTECH_syllabus"
import { EEPhdCourse as Coursephd } from "./Elelc_phd"
import Coursedd from "./eedd.js"
import { PageLayout } from "../../styles/pagelayout"

const Eesyllabus = props => {
  const [course, setCourse] = useState("programmesug")
  const [syllabus, setSyllabus] = useState(Courseug)
  return (
    <>
      <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <TabPage>
          <div className="mainDiv syllabus-page" style={{ width: "90vw" }}>
            <div className="row rowmarl3">
              <div className="digital">
                <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
                <h2 data-aos="zoom-in-right"> -Electrical Engineering</h2>
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
                      setSyllabus(EeMtechControl)
                    }}
                    className={course == "programmespg1" ? "btnactive" : ""}
                  >
                    M.tech - Control Systems
                  </button>
                  <button
                    onClick={() => {
                      setCourse("programmespg2")
                      setSyllabus(EeMtechPower)
                    }}
                    className={course == "programmespg2" ? "btnactive" : ""}
                  >
                    M.tech - Power System
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

            {syllabus === Coursedd && (
              <ul>
                <li>
                  <a href="/">
                    Electrical Engineering with Specialization In Power System
                    Engineering (5 Years, Bachelor and Master of Technology
                    (Dual Degree))
                  </a>
                </li>
              </ul>
            )}
            {syllabus === Coursedd || (
              <Table style={{ width: "100%", marginTop: "20px" }}>
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
                    <td>{elem.prog}</td>
                    <td>{elem.sem}</td>
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
              </Table>
            )}
          </div>
        </TabPage>
      </PageLayout>
      {/* <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <div className="syllabus-page">
          <div className="layoutrow layoutrowmain syllabus-page-head">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right">Syllabus</h1>
              </div>
              <div className="row rowmarl3">
                <h2 data-aos="zoom-in-right"> - Electrical Engineering</h2>
              </div>
            </div>
          </div>

          <div className="layoutrow">
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              B.Tech Course Structure
            </h1>
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
                <td>{elem.deptt}</td>
                <td>{elem.sem_elect}</td>
                <td>{elem.course_code}</td>
                <td>{elem.course_title}</td>
                <td>{elem.l}</td>
                <td>{elem.t}</td>
                <td>{elem.p}</td>
                <td>{elem.credits}</td>
              </tr>
            ))}
          </Table>
          <div className="layoutrow">
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              Course Structure for M. Tech (Electrical Engineering) in Control
              System Engineering
            </h1>
          </div>
          <Table>
            <tr className="syllabus-table-head">
              <th>Prog</th>
              <th>CCMT Code</th>
              <th>Group</th>
              <th>Sem</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>L</th>
              <th>T</th>
              <th>P</th>
              <th>Credits</th>
            </tr>
            {EeMtechControl.map(elem => (
              <tr className="syllabus-table-row">
                <td>{elem.prog}</td>
                <td>{elem.ccmt}</td>
                <td>{elem.grp}</td>
                <td>{elem.sem}</td>
                <td>{elem.course_code}</td>
                <td>{elem.course_title}</td>
                <td>{elem.l}</td>
                <td>{elem.t}</td>
                <td>{elem.p}</td>
                <td>{elem.credits}</td>
              </tr>
            ))}
          </Table>
          <div className="layoutrow">
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              Course Structure for M. Tech (Electrical Engineering) in Power
              System Engineering
            </h1>
          </div>
          <Table>
            <tr className="syllabus-table-head">
              <th>Prog</th>
              <th>CCMT Code</th>
              <th>Group</th>
              <th>Sem</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>L</th>
              <th>T</th>
              <th>P</th>
              <th>Credits</th>
            </tr>
            {EeMtechPower.map(elem => (
              <tr className="syllabus-table-row">
                <td>{elem.prog}</td>
                <td>{elem.ccmt}</td>
                <td>{elem.grp}</td>
                <td>{elem.sem}</td>
                <td>{elem.course_code}</td>
                <td>{elem.course_title}</td>
                <td>{elem.l}</td>
                <td>{elem.t}</td>
                <td>{elem.p}</td>
                <td>{elem.credits}</td>
              </tr>
            ))}
          </Table>
          <div className="layoutrow">
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              PhD Course Structure
            </h1>
          </div>
          <Table>
            <tr className="syllabus-table-head">
              <th>Type</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>L</th>
              <th>T</th>
              <th>P</th>
              <th>Total</th>
            </tr>
            {EEPhdCourse.map(elem => (
              <tr className="syllabus-table-row">
                <td>{elem.type}</td>
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
      </PageLayout> */}
    </>
  )
}
export default Eesyllabus
