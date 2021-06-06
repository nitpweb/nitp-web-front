import { useEffect, useState } from "react"
import { FacultyCard } from "../styles/facultycard"

const Webcard = props => {
  const [interests, setInterests] = useState()
  useEffect(() => {
    if (props.interests != null) {
      setInterests(props.interests.split(","))
    }
  }, {})

  return (
    <>
      <FacultyCard>
        <div className="faculty1">
          {props.extn != 0 ? <p className="extn">{props.extn}</p> : null}
          <div className="row fimg">
            <div className="facimg">
              <img
                src={
                  props.image != undefined ? `${props.image}` : "/faculty.png"
                }
                alt=""
              />
            </div>
            <h2>{props.name}</h2>
            <h3>{props.desg}</h3>
            <p>{props.email}</p>
          </div>
        </div>
        <div className="faculty2">
          {interests && <p>Interests:-</p>}
          {interests && interests.map(item => <p>{item}</p>)}
          <p>
            <a href={props.url}>View Profile</a>
          </p>
        </div>
      </FacultyCard>
    </>
  )
}
export default Webcard
