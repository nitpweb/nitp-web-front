import React, { useEffect, useState } from "react"
import Table from "../../table"
import Courseug from "./Civil BTech CourseStructure"
import Coursephd from "./cephd"
import Coursepg from "./cemtech"
import Coursedd from "./cedd.js"
import { TabPage } from "../../styles/tabpage"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"

const Cesyllabus = props => {
 const [course, setCourse] = useState("programmesug")
 const [syllabus, setSyllabus] = useState(Courseug)

 useEffect(() => {}, [course])
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
     <div className="mainDiv syllabus-page" style={{ width: "90vw" }}>
      <div className="row rowmarl3">
       <div className="digital">
        <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
        <h2 data-aos="zoom-in-right"> -Civil Engineering</h2>
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
          Civil Engineering with Specialization in Construction Technology and
          Management (5 Years, Bachelor and Master of Technology (Dual Degree))
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
        {syllabus != Coursepg
         ? syllabus.map(elem => (
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
           ))
         : syllabus.map(prog =>
            prog.map(elem => (
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
            ))
           )}
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
                <h2 data-aos="zoom-in-right"> -Civil Engineering</h2>
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
          <div className="layoutrow">
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              Course Structure for M. Tech (Civil Engg.) in Structural
              Engineering
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
            {StructuralEngg.map(elem => (
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
          <div className="layoutrow">
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              Course Structure for M. Tech (Civil Engg.) in Geotechnical
              Engineering{" "}
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
            {GeoEngg.map(elem => (
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
          <div className="layoutrow">
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              Course Structure for M. Tech (Civil Engg.) in Transportation
              Engineering
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
            {TransPortEngineering.map(elem => (
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
          <div className="layoutrow">
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              Course Structure for M. Tech (Civil Engg.) in Water Resource
              Engineering
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
            {WaterRes.map(elem => (
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
          <div className="layoutrow">
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              Course Structure for M. Tech (Civil Engg.) in Environmental
              Engineering
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
            {EnvEngg.map(elem => (
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
          <div className="layoutrow">
            <h1 className="rowmarl3" data-aos="zoom-in-right">
              Course Structure for M. Tech (Civil Engg.) in River Engineering
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
            {RiverEngg.map(elem => (
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
            {Cephd.map(elem => (
              <tr className="syllabus-table-row">
                <td>{elem.type}</td>
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
      </PageLayout> */}
  </>
 )
}
export default Cesyllabus
