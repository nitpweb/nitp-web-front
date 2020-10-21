import React from "react"
import Table from "../../table"
import Course from "./Civil BTech CourseStructure"
import Cephd from "./cephd"
import Cemtech from "./cemtech"
import main from "../img/book.svg"

const Cesyllabus = props => {
  return (
    <>
      <div style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <div className="dmainrow dmainrowmain">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Syllabus</h1>
            </div>
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right"> -Civil Engineering</h1>
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
        <div className="dmainrow">
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
            <th>Total</th>
          </tr>
          {Course.map(elem => (
            <tr className="syllabus-table-row">
              <td>{elem.dept}</td>
              <td>{elem.sem_elective}</td>
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
        <div className="dmainrow">
          <h1 className="rowmarl3" data-aos="zoom-in-right">
            M.Tech Course Structure
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
            <th>Total</th>
          </tr>
          {Cemtech.map(elem => (
            <tr className="syllabus-table-row">
              <td>{elem.prog}</td>
              <td>{elem.ccmt}</td>
              <td>{elem.grp}</td>
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
        <div className="dmainrow">
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
          {Cephd.map(elem => (
            <tr className="syllabus-table-row">
              <td>{elem.type}</td>
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
    </>
  )
}
export default Cesyllabus
