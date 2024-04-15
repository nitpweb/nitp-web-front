import React, { useEffect, useState } from "react"
import Table from "../../table"
import { TabPage } from "../../styles/tabpage"
import { EECourseStructure as Courseug } from "./Elec_Btech_course_structure"
import main from "../img/book.svg"
import {
 EEMtechSyllabusControl as EeMtechControl,
 EEMtechSyllabuspower as EeMtechPower,
} from "./Elec_MTECH_syllabus"
import { EEPhdCourse as Coursephd } from "./Elelc_phd"
import Coursedd from "./eedd.js"
import { PageLayout } from "../../styles/pagelayout"
const Eesyllabus = props => {
 const [course, setCourse] = useState("programmesug")
 const [syllabus, setSyllabus] = useState(Courseug)
 return (
  <>
   <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
     <div className="mainDiv syllabus-page" style={{ width: "90vw" }}>
      <div className="row rowmarl3">
       <div className="digital">
        <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
        <h2 data-aos="zoom-in-right"> -Electrical Engineering</h2>
        <br />
        <h2> UG Program</h2>
        <ul className="rowmarl3">
         <li>
          <a href="https://drive.google.com/file/d/1A0l-C3vXUjL3qrV6dZutObFlQKiVhOuJ/view?usp=drive_link">
           B.Tech_EE_Course Structure_Batch-2021
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/1F6i7jfE9LzhGJM7M1SqbDhtDXd8dq9Dj/view?usp=drive_link ">
           B.Tech_Detailed Syllabus_Batch-2021
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/198DYWz6y1TK1lEeNX_V9eP01aNamRJtW/view?usp=drive_link ">
           B.Tech_EE_Course Structure_Batch-2022
          </a>
         </li>
         <li>
          <a href=" https://drive.google.com/file/d/1FVrOsNGJdN09TRtKnvb9_rALJy8E5Dwz/view?usp=drive_link">
           B.Tech_Detailed Syllabus_Batch-2022
          </a>
         </li>
         <li>
          <a href=" https://drive.google.com/file/d/1gDzCfUQfjaUqFNP61z3YG-R6H_8K6y89/view?usp=drive_link">
           B.Tech_EE_Course Structure_Batch-2023_Onwards
          </a>
         </li>
         <li>
          <a href=" https://drive.google.com/file/d/131yWvyK8E7ZIju7abxcT76D3NfYXHvqR/view?usp=drive_link">
           B.Tech_Detailed Syllabus_Batch-2023_Onwards
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/1R24uKKW9fxbtv6TlWzCfgIuqTydIN5ND/view?usp=drive_link ">
           Dual Degree (B.Tech + M.Tech (PSE))_Course Structure_Batch-2022
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/1PlIaW0QziCXjOoMyy425vZocUJn9geuO/view?usp=drive_link ">
           Dual Degree (B.Tech + M.Tech (PSE))_Detailed Syllabus_Batch-2022
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/1D-JX5uoJ3Vf7tENlyq0Z3AEQKAAinfBo/view?usp=drive_link">
           Dual Degree (B.Tech + M.Tech (PSE))_Course
           Structure_Batch-2023_Onwards
          </a>
         </li>
         <li>
          <a href=" https://drive.google.com/file/d/1LJHJqsRSC8-V_P3zkAxu6wn5mdyWfu7m/view?usp=drive_link">
           Dual Degree (B.Tech + M.Tech (PSE))_Detailed
           Syllabus_Batch-2023_Onwards
          </a>
         </li>
        </ul>
        <h2> PG Program </h2>
        <br />
        <ul className="rowmarl3">
         <li>
          <a href=" https://drive.google.com/file/d/1HOzQYLI-96kpv4gT9NDoKqLItHsALVzS/view?usp=drive_link">
           M.Tech- Control System Engg_and_Power System Engg_Course structure
          </a>
         </li>
         <li>
          <a href=" https://drive.google.com/file/d/1xnaep1qftT-n8RMVEyTYXk-ASqBFcLAK/view?usp=drive_link">
           M.Tech- Control System Engg_and_Power System Engg_Detailed Syllabus
          </a>
         </li>
        </ul>

        <h2> Ph.D. Program </h2>
        <br />
        <ul className="rowmarl3">
         <li>
          <a href="https://drive.google.com/file/d/1KdqphtQwIuWrC_gdYxjuAcG9TaxaUVf-/view?usp=drive_link ">
           Ph.D. in Electrical Engineering
          </a>
         </li>
        </ul>
       </div>
      </div>
     </div>
    </TabPage>
   </PageLayout>
  </>
 )
}
export default Eesyllabus

// import React, { useEffect, useState } from "react"
// import Table from "../../table"
// import { TabPage } from "../../styles/tabpage"
// import { EECourseStructure as Courseug } from "./Elec_Btech_course_structure"
// import main from "../img/book.svg"
// import {
//  EEMtechSyllabusControl as EeMtechControl,
//  EEMtechSyllabuspower as EeMtechPower,
// } from "./Elec_MTECH_syllabus"
// import { EEPhdCourse as Coursephd } from "./Elelc_phd"
// import Coursedd from "./eedd.js"
// import { PageLayout } from "../../styles/pagelayout"

// const Eesyllabus = props => {
//  const [course, setCourse] = useState("programmesug")
//  const [syllabus, setSyllabus] = useState(Courseug)
//  return (
//   <>
//    <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
//     <TabPage>
//      <div className="mainDiv syllabus-page" style={{ width: "90vw" }}>
//       <div className="row rowmarl3">
//        <div className="digital">
//         {/* <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
//         <h2 data-aos="zoom-in-right"> -Electrical Engineering</h2>
//         <br /> */}
//         <div className="probutton">
//          <button
//           onClick={() => {
//            setCourse("programmesug")
//            setSyllabus(Courseug)
//           }}
//           className={course == "programmesug" ? "btnactive" : ""}
//          >
//           UG Program
//          </button>
//          <button
//           onClick={() => {
//            setCourse("programmespg1")
//            setSyllabus(EeMtechControl)
//           }}
//           className={course == "programmespg1" ? "btnactive" : ""}
//          >
//           PG Program
//          </button>
//          {/* <button
//           onClick={() => {
//            setCourse("programmespg2")
//            setSyllabus(EeMtechPower)
//           }}
//           className={course == "programmespg2" ? "btnactive" : ""}
//          >
//           M.tech - Power System
//          </button> */}
//          <button
//           onClick={() => {
//            setCourse("programmesphd")
//            setSyllabus(Coursephd)
//           }}
//           className={course == "programmesphd" ? "btnactive" : ""}
//          >
//           PhD Program
//          </button>
//          {/* <button
//           onClick={() => {
//            setCourse("programmesdd")
//            setSyllabus(Coursedd)
//           }}
//           className={course == "programmesdd" ? "btnactive" : ""}
//          >
//           Dual Degree
//          </button> */}
//         </div>
//        </div>
//       </div>

//      {/* {syllabus === Courseug && (
//        <ul>
//        <p>
//          <a href="/">
//           <h3>UG Program
//           B.Tech. in Electrical Engineering
//           </h3>
//           <ul className="rowmarl3">
//           <li>
//           <a href="">
//           B.Tech_EE_Course Structure_Batch-2021
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           B.Tech_Detailed Syllabus_Batch-2021
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           	B.Tech_EE_Course Structure_Batch-2022
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           	B.Tech_Detailed Syllabus_Batch-2022
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           B.Tech_EE_Course Structure_Batch-2023_Onwards
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           B.Tech_Detailed Syllabus_Batch-2023_Onwards
//           </a>
//          </li>
//           </ul>

//           <h3>UG Program
//           B.Tech. in Electrical Engineering
//           </h3>
//           <ul className="rowmarl3">
//           <li>
//           <a href=" ">
//           	Dual Degree (B.Tech + M.Tech (PSE))_Course Structure_Batch-2022
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           	Dual Degree (B.Tech + M.Tech (PSE))_Detailed Syllabus_Batch-2022
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           Dual Degree (B.Tech + M.Tech (PSE))_Course Structure_Batch-2023_Onwards
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           Dual Degree (B.Tech + M.Tech (PSE))_Detailed Syllabus_Batch-2023_Onwards
//           </a>
//          </li>
//           </ul>
//          </a>
//          </p>
//        </ul>

//       )
//       } */}

//       {/* {syllabus === EeMtechControl&& (
//        <ul>
//        <p>
//          <a href="/">
//           <h3>UG Program
//           B.Tech. in Electrical Engineering
//           </h3>
//           <ul className="rowmarl3">
//           <li>
//           <a href="">
//           B.Tech_EE_Course Structure_Batch-2021
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           B.Tech_Detailed Syllabus_Batch-2021
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           	B.Tech_EE_Course Structure_Batch-2022
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           	B.Tech_Detailed Syllabus_Batch-2022
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           B.Tech_EE_Course Structure_Batch-2023_Onwards
//           </a>
//          </li>
//          <li>
//           <a href=" ">
//           B.Tech_Detailed Syllabus_Batch-2023_Onwards
//           </a>
//          </li>
//           </ul>

//          </a>
//          </p>
//        </ul>
//       )
//       } */}

//       {/* {syllabus === Coursedd && (
//        <ul>
//         <li>
//          <a href="/">
//           Electrical Engineering with Specialization In Power System Engineering
//           (5 Years, Bachelor and Master of Technology (Dual Degree))
//          </a>
//         </li>
//        </ul>
//       )} */}
//       {/* {syllabus === Coursedd || (
//        <Table style={{ width: "100%", marginTop: "20px" }}>
//         <br />
//         <tr className="syllabus-table-head">
//          <th>Dept.</th>
//          <th>Sem/Electives</th>
//          <th>Course Code</th>
//          <th>Course Title</th>
//          <th>L</th>
//          <th>T</th>
//          <th>P</th>
//          <th>Credits</th>
//         </tr>
//         {syllabus.map(elem => (
//          <tr className="syllabus-table-row">
//           <td>{elem.prog}</td>
//           <td>{elem.sem}</td>
//           <td>{elem.course_code}</td>
//           <td>
//            <a href={elem.url}>{elem.course_title}</a>
//           </td>
//           <td>{elem.l}</td>
//           <td>{elem.t}</td>
//           <td>{elem.p}</td>
//           <td>{elem.credits}</td>
//          </tr>
//         ))}
//        </Table>
//       )} */}
//      </div>
//     </TabPage>
//    </PageLayout>
//    {/* <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
//         <div className="syllabus-page">
//           <div className="layoutrow layoutrowmain syllabus-page-head">
//             <div className="col-6">
//               <div className="row rowmarl3">
//                 <h1 data-aos="zoom-in-right">Syllabus</h1>
//               </div>
//               <div className="row rowmarl3">
//                 <h2 data-aos="zoom-in-right"> - Electrical Engineering</h2>
//               </div>
//             </div>
//           </div>

//           <div className="layoutrow">
//             <h1 className="rowmarl3" data-aos="zoom-in-right">
//               B.Tech Course Structure
//             </h1>
//           </div>
//           <Table>
//             <tr className="syllabus-table-head">
//               <th>Dept.</th>
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
//                 <td>{elem.deptt}</td>
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
//           <div className="layoutrow">
//             <h1 className="rowmarl3" data-aos="zoom-in-right">
//               Course Structure for M. Tech (Electrical Engineering) in Control
//               System Engineering
//             </h1>
//           </div>
//           <Table>
//             <tr className="syllabus-table-head">
//               <th>Prog</th>
//               <th>CCMT Code</th>
//               <th>Group</th>
//               <th>Sem</th>
//               <th>Course Code</th>
//               <th>Course Title</th>
//               <th>L</th>
//               <th>T</th>
//               <th>P</th>
//               <th>Credits</th>
//             </tr>
//             {EeMtechControl.map(elem => (
//               <tr className="syllabus-table-row">
//                 <td>{elem.prog}</td>
//                 <td>{elem.ccmt}</td>
//                 <td>{elem.grp}</td>
//                 <td>{elem.sem}</td>
//                 <td>{elem.course_code}</td>
//                 <td>{elem.course_title}</td>
//                 <td>{elem.l}</td>
//                 <td>{elem.t}</td>
//                 <td>{elem.p}</td>
//                 <td>{elem.credits}</td>
//               </tr>
//             ))}
//           </Table>
//           <div className="layoutrow">
//             <h1 className="rowmarl3" data-aos="zoom-in-right">
//               Course Structure for M. Tech (Electrical Engineering) in Power
//               System Engineering
//             </h1>
//           </div>
//           <Table>
//             <tr className="syllabus-table-head">
//               <th>Prog</th>
//               <th>CCMT Code</th>
//               <th>Group</th>
//               <th>Sem</th>
//               <th>Course Code</th>
//               <th>Course Title</th>
//               <th>L</th>
//               <th>T</th>
//               <th>P</th>
//               <th>Credits</th>
//             </tr>
//             {EeMtechPower.map(elem => (
//               <tr className="syllabus-table-row">
//                 <td>{elem.prog}</td>
//                 <td>{elem.ccmt}</td>
//                 <td>{elem.grp}</td>
//                 <td>{elem.sem}</td>
//                 <td>{elem.course_code}</td>
//                 <td>{elem.course_title}</td>
//                 <td>{elem.l}</td>
//                 <td>{elem.t}</td>
//                 <td>{elem.p}</td>
//                 <td>{elem.credits}</td>
//               </tr>
//             ))}
//           </Table>
//           <div className="layoutrow">
//             <h1 className="rowmarl3" data-aos="zoom-in-right">
//               PhD Course Structure
//             </h1>
//           </div>
//           <Table>
//             <tr className="syllabus-table-head">
//               <th>Type</th>
//               <th>Course Code</th>
//               <th>Course Title</th>
//               <th>L</th>
//               <th>T</th>
//               <th>P</th>
//               <th>Total</th>
//             </tr>
//             {EEPhdCourse.map(elem => (
//               <tr className="syllabus-table-row">
//                 <td>{elem.type}</td>
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
//       </PageLayout> */}
//   </>
//  )
// }
// export default Eesyllabus
