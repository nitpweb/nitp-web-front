import React, { useEffect, useState } from "react"
import Table from "../../table"
import { TabPage } from "../../styles/tabpage"
import Course from "./math course array"
import Elect from "./math elective array"
import Coursedd from "./mathdd.js"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"

const Mathsyllabus = props => {
  const [course, setCourse] = useState("programmesphd")
  const [syllabus, setSyllabus] = useState(Course)

  useEffect(() => {}, [course])
  return (
    <>
      <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <TabPage>
          <div className="syllabus-page mainDiv" style={{ width: "90vw" }}>
            <div className="row rowmarl3">
              <div className="digital">
                <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
                <h2 data-aos="zoom-in-right"> -Department of Mathematics</h2>
                <div className="probutton">
                  <button
                    onClick={() => {
                      setCourse("programmesphd")
                      setSyllabus(Course)
                    }}
                    className={course == "programmesphd" ? "btnactive" : ""}
                  >
                    Course Structure (IMSc.)
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
                    Mathematics and Computing Technology (5 Years, Bachelor and
                    Master of Technology (Dual Degree))
                  </a>
                </li>
              </ul>
            )}
            {syllabus === Course && (
              <div>
                <Table style={{ width: "100%", marginTop: "20px" }}>
                  <br />
                  <tr className="syllabus-table-head">
                    <th>Course Code</th>
                    <th>Course Title</th>
                    <th>L</th>
                    <th>T</th>
                    <th>P</th>
                    <th>Total</th>
                    <th>Department</th>
                    <th>Type</th>
                  </tr>
                  {Course.map(elem => (
                    <tr className="syllabus-table-row">
                      <td>{elem.course_code}</td>
                      <td>
                        <a href={elem.url}>{elem.course_title}</a>
                      </td>
                      <td>{elem.l}</td>
                      <td>{elem.t}</td>
                      <td>{elem.p}</td>
                      <td>{elem.credits}</td>
                      <td>{elem.dept}</td>
                      <td>{elem.type}</td>
                    </tr>
                  ))}
                </Table>
                <div className="layoutrow">
                  <h1 className="rowmarl3">Electives</h1>
                </div>
                <Table style={{ width: "100%", marginTop: "20px" }}>
                  <br />
                  <tr className="syllabus-table-head">
                    <th>Course Code</th>
                    <th>Subject</th>
                    <th>L</th>
                    <th>T</th>
                    <th>P</th>
                    <th>Total</th>
                  </tr>
                  {Elect.map(elem => (
                    <tr className="syllabus-table-row">
                      <td>{elem.course_code}</td>
                      <td>
                        <a href={elem.url}>{elem.subject}</a>
                      </td>
                      <td>{elem.l}</td>
                      <td>{elem.t}</td>
                      <td>{elem.p}</td>
                      <td>{elem.credits}</td>
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
export default Mathsyllabus
