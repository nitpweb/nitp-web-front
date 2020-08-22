import React from "react"
import Table from "../../table"
import Course from "./btech"
import main from "../img/main.png"

const Ecesyllabus = props => {
  return (
    <>
      <div style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <div className="dmainrow dmainrowmain">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Syllabus</h1>
            </div>
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">
                {" "}
                -Electronics and Communication Engineering
              </h1>
            </div>
          </div>
          <div className="col-6 imgcolstyle">
            <img
              data-aos="zoom-in"
              src={main}
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <Table>
          <tr className="syllabus-table-head">
            <th>Sem/Electives</th>
            <th>Category</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>L</th>
            <th>T</th>
            <th>P</th>
            <th>Credits</th>
          </tr>
          {Course.map(elem => (
            <tr className="syllabus-table-row">
              <td>{elem.sem_elect}</td>
              <td>{elem.category}</td>
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
      </div>
    </>
  )
}
export default Ecesyllabus
