import React, { useEffect, useState } from "react"
import Table from "../../table"
import { TabPage } from "../../styles/tabpage"
import Courseug from "./Mech BTech CourseStructure"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"
import {
 MtechDesignEngineering as Coursepg1,
 MtechProductionEngineering as Coursepg2,
 MtechThermalEngineering as Coursepg3,
} from "./Mech MTech"
import { PhdCourse } from "./Mech Phd"
import Coursedd from "./medd.js"
const Mesyllabus = props => {
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
        <h2 data-aos="zoom-in-right"> -Mechanical Engineering</h2>
        <ul className="rowmarl3">
         <li>
          <a href="https://docs.google.com/document/d/1pxbOvI1TdzjxQuFC5EHvV6aUoif3-bqR/edit?usp=sharing&ouid=110446457812712094222&rtpof=true&sd=true">
           B.Tech_Course_Structure_2021 - (2024 April update)
          </a>
         </li>
         <li>
          <a href="https://docs.google.com/document/d/1FraVT4Es8O1UgdmTafqyKd8NLzeTweE5/edit?usp=drive_link&ouid=110446457812712094222&rtpof=true&sd=true">
           B.Tech_Course_Structure_2022 onwards - (2024 April update)
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/1s42tWWitU86Ezu2bGOTmPrnkDnhrERWJ/view?usp=sharing">
           B.Tech_Detailed Syllabus_3rd Semester Onwards.
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/1L80sZVY6WqN4UNIq0TKYMNq20RLHbi3-/view?usp=sharing">
           B.Tech 1st Year Even Semester Syllabus
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/1ikNuJvwpozLSPVLNR_Rpaa-VqJZpu9Yu/view?usp=sharing">
           B.Tech 1st Year Odd Semester Syllabus
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/1xUykTxPcv-mk2y3-sSXRt7BLczMZ_vVe/view?usp=sharing">
           Dual Degree (B.Tech + M.Tech) _ Course Structure _ 2022 Onwards.
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/10a4fvU12B-ZD7e6qkrHkKHrl_1Y180kc/view?usp=sharing">
           Dual Degree ( B.Tech + M.Tech) _ Detailed Syllabus _ 3rd Semester
           Onwards.
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/1_B0-MakBnJ2vTNKZHsiD8hKM0aZ2c4E-/view?usp=sharing">
           M.Tech _ Course Structure _ All Specializations.
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/1DeGz_0NB4AteNBmTYEJxSueZaXlONqXq/view?usp=sharing">
           M.Tech _ Detailed Syllabus _ All Specializations.
          </a>
         </li>
         <li>
          <a href="https://drive.google.com/file/d/1tov1rQO4_fA65l_IcjMMN-_4cyLA3nCk/view?usp=sharing">
           PHD.
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
export default Mesyllabus
