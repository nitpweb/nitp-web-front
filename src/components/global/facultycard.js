import { useEffect, useState } from "react"
import { Link } from "gatsby"
import { FacultyCard } from "../styles/facultycard"

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
          {props.extn != 0 ? (
            <p className="extn">{String(props.extn).length<8?`Extn:${props.extn}`:props.extn}</p>
          ) : null}
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
            <p>{props.subtitle}</p>
          </div>
        </div>
        <div className="faculty2">
          {research && <p>Research Interests:-</p>}
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
