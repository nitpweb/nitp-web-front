import React from "react"
import "./global/css/faculty.css"
import Facultycard from"./global/facultycard"

const Facultypage=()=>{
    return (
      <>
        <div className="row facultyrow">
          <Facultycard />
          <Facultycard />
          <Facultycard />
          <Facultycard />
          <Facultycard />
          
        </div>
      </>
    )
}
export default Facultypage