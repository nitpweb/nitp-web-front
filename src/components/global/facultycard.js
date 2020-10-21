import React from "react"
import newspic from "../home/img/image 2.png"
import "./css/facultycard.scss"
const Facultycard = props => {
  let faculty = []
  if (props.research != null) {
    faculty = props.research.split(",")
  }

  return (
    <>
      <div className="facultycard">
        <div className="faculty1">
          <p className="extn">Extn:{props.extn}</p>
          <div className="row fimg">
            <img src={props.image} alt="" />
            <h1>{props.name}</h1>
            <h2>{props.desg}</h2>
            <p>{props.email}</p>
          </div>
        </div>
        <div className="faculty2">
          <p>Research Interests:-</p>
          {faculty.map(item => {
            return <p>{item}</p>
          })}
        </div>
      </div>
    </>
  )
}
export default Facultycard
