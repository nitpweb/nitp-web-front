import React from "react"
import newspic from "../home/img/image 2.png"
import "./css/facultycard.scss"
import { Link } from "gatsby"
class Facultycard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let faculty = []
    if (this.props.research != null) {
      faculty = this.props.research.split(",")
    }

    return (
      <>
        <div className="facultycard">
          <div className="faculty1">
            <p className="extn">Extn:{this.props.extn}</p>
            <div className="row fimg">
              <img src={this.props.image} alt="" />
              <h1>{this.props.name}</h1>
              <h2>{this.props.desg}</h2>
              <p>{this.props.email}</p>
            </div>
          </div>
          <div className="faculty2">
            <p>Research Interests:-</p>
            {faculty.map(item => {
              return <p>{item}</p>
            })}
            <p>
              <Link
                to="../facultyprofile"
                state={{
                  url: `http://beta.nitp.ac.in:3000/api/faculty/profile?id=${this.props.id}`,
                }}
              >
                View Full Profile
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
}
export default Facultycard
