import { useEffect, useState } from "react"
import { Link } from "gatsby"
import { FacultyCard } from "../styles/facultycard"
import React from "react"

const Facultycard = props => {
  const [research, setResearch] = useState()
  useEffect(() => {
    if (props.research != null) {
      setResearch(props.research.split(","))
    }
  }, [])

  return (
    <> 
      <FacultyCard>
        <div className="faculty1">
          {/* {props.extn != 0 ? (
            <p className="extn">
              {String(props.extn).length < 8
                ? `Extn:${props.extn}`
                : props.extn}
            </p>
          ) : null} */}
          <div className="row fimg">
            <div className="facimg">
              <img
                src={
                  props.image != undefined ? `${props.image}` : "/faculty.png"
                }
                alt=""
              />
            </div>
            <h3>{props.name}</h3>
            <h4>{props.desg}</h4>
            <p>{props.subtitle}</p>
          </div>
        </div>
        <div className="faculty2">
          {research && <p style={{fontWeight:`bold`}}>Research Interests:-</p>}
          {research && research.map(item => <p>{item}</p>)}
          <p>
            <Link to={`/profile?id=${props.email}`}>View Profile</Link>
          </p>
        </div>
      </FacultyCard>
    </>
  )
}
export default Facultycard
