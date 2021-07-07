import React from "react"
import Table from "../../table"
import Course from "./cse BTech CourseStructure"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"

const Csesyllabus = props => {
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
                <h1 data-aos="zoom-in-right">
                  {" "}
                  -Computer Science and Engineering
                </h1>
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
                <td>{elem.coursetitle}</td>
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
export default Csesyllabus
