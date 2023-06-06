import React, { useEffect, useState } from "react"
import { TabPage } from "../../styles/tabpage"
import Table from "../../table"
import IntPhy from "./Phy IMSc CourseStructure"
import Coursepg from "./Phy Mtech"
import { IntPhd as PhdCourse } from "./Phy Int.Phd"
import Coursedd from "./phydd.js"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"

const Mesyllabus = props => {
 const [course, setCourse] = useState("programmesug")
 const [syllabus, setSyllabus] = useState(IntPhy)
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
     <div className="mainDiv syllabus-page" style={{ width: "90vw" }}>
      <div className="row rowmarl3">
       <div className="digital">
        <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
        <h2 data-aos="zoom-in-right"> -Physics</h2>
        <br />
        <div className="probutton">
         <button
          onClick={() => {
           setCourse("programmesug")
           setSyllabus(IntPhy)
          }}
          className={course == "programmesug" ? "btnactive" : ""}
         >
          Int. Msc.
         </button>
         <button
          onClick={() => {
           setCourse("programmespg")
           setSyllabus(Coursepg)
          }}
          className={course == "programmespg" ? "btnactive" : ""}
         >
          M.tech - Nano Technology
         </button>
         <button
          onClick={() => {
           setCourse("programmesphd")
           setSyllabus(PhdCourse)
          }}
          className={course == "programmesphd" ? "btnactive" : ""}
         >
          Int. PhD
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
          {" "}
          Material Science and Engineering (5 Years, Bachelor and Master of
          Technology (Dual Degree))
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
          <td>{elem.deptt}</td>
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
        ))}
       </Table>
      )}
     </div>
    </TabPage>
   </PageLayout>
  </>
 )
}
// <>
//   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
//     <div className="syllabus-page">
//       <div className="layoutrow layoutrowmain syllabus-page-head">
//         <div className="col-6">
//           <div className="row rowmarl3">
//             <h1 data-aos="zoom-in-right">Syllabus</h1>
//           </div>
//           <div className="row rowmarl3">
//             <h2 data-aos="zoom-in-right"> -Physics</h2>
//           </div>
//         </div>
//       </div>
//       <Table>
//         <tr className="syllabus-table-head">
//           <th>Sem/Electives</th>
//           <th>Course Code</th>
//           <th>Course Title</th>
//           <th>L</th>
//           <th>T</th>
//           <th>P</th>
//           <th>Credits</th>
//         </tr>
//         {Course.map(elem => (
//           <tr className="syllabus-table-row">
//             <td>{elem.sem_elect}</td>
//             <td>{elem.course_code}</td>
//             <td>{elem.coursetitle}</td>
//             <td>{elem.l}</td>
//             <td>{elem.t}</td>
//             <td>{elem.p}</td>
//             <td>{elem.credits}</td>
//           </tr>
//         ))}
//       </Table>
//     </div>
//   </PageLayout>
// </>
//   )
// }
export default Mesyllabus
