import axios from "axios"
import React, { useEffect, useState } from "react"
import Facultycard from "../global/facultycard"
import faculty from "./img/faculty.svg"
import { PageLayout } from "../styles/pagelayout"
import { SearchStyle } from "../styles/SearchStyle"

const Facultypage = ({ title, url, dept }) => {
 const [faculties, setFaculties] = useState()
 const [search, setSearch] = useState("")
 const [data, setData] = useState([])
 const department = url == "faculties"
 // const department = url == "faculties" || url == "officers"

 let facultiesUrl = `${process.env.GATSBY_API_URL}/api/faculty/${url}`
 useEffect(() => {
  axios
   .get(facultiesUrl)
   .then(res => {
    const faculty = res.data
    faculty.sort((a, b) => {
     var nameA = String(a.name)
      .toUpperCase()
      .replace(/[.*+?^${}()|[\]\\' ']/g, "")
     var nameB = String(b.name)
      .toUpperCase()
      .replace(/[.*+?^${}()|[\]\\' ']/g, "")
     if (nameA < nameB) {
      return -1
     }
     if (nameA > nameB) {
      return 1
     }

     return 0
    })
    setFaculties(faculty)
    setData(faculty)
   })
   .catch(e => {
    console.log(e)
   })
 }, [])

 useEffect(() => {
  let result = faculties
  result = result?.filter(item =>
   String(item.name)
    .replace(/[.*+?^${}()|[\]\\]/g, "")
    .toLowerCase()
    .startsWith(String(search).toLowerCase())
  )
  setData(result)
 }, [search])

 const FacultyStyle = PageLayout

 return (
  <>
   <FacultyStyle style={{ marginBottom: `3vh`, marginTop: `1rem` }}>
    <div className="faculty-page">
     <div className="layoutrow">
      <div className="col-6">
       <div className="row rowmarl3">
        <h1
         data-aos="zoom-in-right"
         style={{ fontSize: `30px`, paddingTop: `1rem` }}
        >
         {title ? title : "Faculty"}
        </h1>
        {dept && (
         <div className="row">
          <h2 data-aos="zoom-in-right">{dept}</h2>
         </div>
        )}
       </div>
      </div>

      <div className="col-6">
       <div className="row">
        <SearchStyle>
         <div className="form-search">
          <input
           type="search"
           placeholder="Search"
           onChange={e => setSearch(e.target.value)}
          />
         </div>
        </SearchStyle>
       </div>
      </div>
     </div>
     <div className="row facultyrow">
      {data &&
       data.map(faculty => {
        if (faculty.designation == "Registrar") {
         return (
          <Facultycard
           name="Dr. Asit Narayan"
           // subtitle={department ? faculty.department : faculty.email}
           subtitle={null}
           email="asit.narayan@nitp.ac.in"
           // extn={faculty.ext_no}
           extn="0"
           id="asit.narayan@nitp.ac.in"
           research=""
           image={null}
           desg="Registrar"
           dept="Officers"
          />
         )
        }
       })}
      {data &&
       data.map(faculty => {
        if (faculty.designation == "Registrar") {
         return
        }
        return (
         <Facultycard
          name={faculty.name}
          // subtitle={department ? faculty.department : faculty.email}
          subtitle={department ? faculty.department : null}
          email={faculty.email}
          // extn={faculty.ext_no}
          extn={""}
          id={faculty.email}
          research={faculty.research_interest}
          image={faculty.image}
          desg={faculty.designation}
          dept={faculty.department}
         />
        )
       })}
     </div>
    </div>
   </FacultyStyle>
  </>
 )
}
export default Facultypage
