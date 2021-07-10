import React from "react"
import Table from "../../table"
import Course from "./math course array"
import Elect from "./math elective array"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"

const Mathsyllabus = props => {
  return (
    <>
      <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <div className="syllabus-page">
          <div className="layoutrow layoutrowmain syllabus-page-head">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right">Syllabus</h1>
              </div>
              <div className="row rowmarl3">
                <h2 data-aos="zoom-in-right"> -Department of Mathematics</h2>
              </div>
            </div>
          </div>
          <div className="layoutrow">
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              Course Structure
            </h1>
          </div>
          <Table>
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
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              Electives
            </h1>
          </div>
          <Table>
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
      </PageLayout>
    </>
  )
}
export default Mathsyllabus
