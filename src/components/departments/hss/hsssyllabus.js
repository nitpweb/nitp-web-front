// import React from "react"
// import Table from "../../table"
// import Course from "./hssCourseStructure"
// import main from "../img/book.svg"
// import { PageLayout } from "../../styles/pagelayout"

// const Mesyllabus = props => {
//   return (
//     <>
//       <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
//         <div className="syllabus-page">
//           <div className="layoutrow layoutrowmain syllabus-page-head">
//             <div className="col-6">
//               <div className="row rowmarl3">
//                 <h1 data-aos="zoom-in-right">Syllabus</h1>
//               </div>
//               <div className="row rowmarl3">
//                 <h2 data-aos="zoom-in-right">
//                   {" "}
//                   -Humanitites & Social Sciences
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <Table>
//             <tr className="syllabus-table-head">
//               <th>Deptt.</th>
//               <th>Sem/Electives</th>
//               <th>Course Code</th>
//               <th>Course Title</th>
//               <th>L</th>
//               <th>T</th>
//               <th>P</th>
//               <th>Credits</th>
//             </tr>
//             {Course.map(elem => (
//               <tr className="syllabus-table-row">
//                 <td>{elem.dept}</td>
//                 <td>{elem.sem_elect}</td>
//                 <td>{elem.course_code}</td>
//                 <td>{elem.course_title}</td>
//                 <td>{elem.l}</td>
//                 <td>{elem.t}</td>
//                 <td>{elem.p}</td>
//                 <td>{elem.credits}</td>
//               </tr>
//             ))}
//           </Table>
//         </div>
//       </PageLayout>
//     </>
//   )
// }
// export default Mesyllabus
import React, { useEffect, useState } from "react"
import Courseug from "./hss BTech CourseStructure"
import Coursephd from "./phd course"
import Coursepg from "./hss MTech CourseStructure"
import Courseug_nep21 from "./hss Btech NEP21"
import Coursedd from "./hssdd.js"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"

import { TabPage } from "../../styles/tabpage"
import Table from "../../table"

const Hsssyllabus = props => {
 const [course, setCourse] = useState("programmesug")
 const [syllabus, setSyllabus] = useState(Courseug)

 useEffect(() => {}, [course])

 return (
  <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
   <TabPage>
    <div className="mainDiv syllabus-page" style={{ width: "90vw" }}>
     <div className="row rowmarl3">
      <div className="digital">
       <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
       <h2 data-aos="zoom-in-right"> -Humanities and Social Sciences</h2>
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
          setCourse("programmesugnep21")
          setSyllabus(Courseug_nep21)
         }}
         className={course == "programmesugnep21" ? "btnactive" : ""}
        >
         UG Courses-2021
        </button>
        <button
         onClick={() => {
          setCourse("programmespg")
          setSyllabus(Coursepg)
         }}
         className={course == "programmespg" ? "btnactive" : ""}
        >
         PG Courses
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

     {
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
         <td>{elem.dept}</td>
         <td>{elem.sem_elect}</td>
         <td>{elem.coursecode}</td>
         <td>
          <a href={elem.url} target="_blank" rel="noopener noreferrer">
           {elem.coursetitle}
          </a>
         </td>
         <td>{elem.l}</td>
         <td>{elem.t}</td>
         <td>{elem.p}</td>
         <td>{elem.credits}</td>
        </tr>
       ))}
      </Table>
     }
    </div>
   </TabPage>
  </PageLayout>
 )
}

export default Hsssyllabus
