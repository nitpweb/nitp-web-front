import React from "react"
import newspic from "../home/img/image 2.png"
import "./css/facultycard.scss"
const Facultycard=()=>{
return (
  <>
    <div className="facultycard">
      <div className="faculty1">
        <p className="extn">Extn:225</p>
        <div className="row fimg">
          <img src={newspic} alt="" />
          <h1>Abhay Kumar</h1>
          <h2>Assistant Professor</h2>
          <p>abhay.kumar@nitp.ac.in</p>
        </div>
      </div>
      <div className="faculty2">
        <p>Computer</p>
        <p>IOT</p>
        <p>AI</p>
        <p>ML</p>
      </div>
    </div>
  </>
)
}
export default Facultycard