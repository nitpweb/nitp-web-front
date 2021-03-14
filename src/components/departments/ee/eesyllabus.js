import React from "react"
import Table from "../../table"
import { EECourseStructure as Course } from "./Elec_Btech_course_structure"
import main from "../img/book.svg"
import {
  EEMtechSyllabusControl as EeMtechControl,
  EEMtechSyllabuspower as EeMtechPower,
} from "./Elec_MTECH_syllabus"
import { EEPhdCourse } from "./Elelc_phd"

const Eesyllabus = props => {
  return (
    <>
      <div style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
        <div className="dmainrow dmainrowmain">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Syllabus</h1>
            </div>
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right"> - Electrical Engineering</h1>
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
        <div className="dmainrow">
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
        <div className="dmainrow">
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
    </>
  )
}
export default Eesyllabus
