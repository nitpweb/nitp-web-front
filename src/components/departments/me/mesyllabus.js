import React from "react"
import Table from "../../table"
import Course from "./Mech BTech CourseStructure"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"

const Mesyllabus = props => {
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
  )
}
export default Mesyllabus
