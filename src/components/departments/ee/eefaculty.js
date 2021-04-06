import axios from "axios"
import React from "react"
import "../../global/css/faculty.css"
import Facultycard from "../../global/facultycard"
import faculty from "../img/faculty.svg"

class Eefacultypage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      faculties: [],
    }
  }
  componentDidMount() {
    let facultiesUrl = `${process.env.GATSBY_API_URL}/api/faculty/ee`
    axios
      .get(facultiesUrl)
      .then(res => {
        const faculty = res.data.faculties
        this.setState({ faculties: faculty })
        console.log(this.state.faculties)
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    let domainUrl = `${process.env.GATSBY_API_URL}`

    return (
      <>
        <div style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
          <div className="dmainrow dmainrowmain">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right">Faculties</h1>
              </div>
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right">-Electrical Engineering</h1>
              </div>
            </div>
            <div className="col-6 imgcolstyle">
              <img
                data-aos="zoom-in"
                src={faculty}
                className="img-fluid"
                style={{ maxHeight: `50vh` }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="row facultyrow">
            {this.state.faculties != undefined
              ? this.state.faculties.map(faculty => {
                  return (
                    <Facultycard
                      name={faculty.name}
                      email={faculty.email}
                      extn={faculty.ext_no}
                      id={faculty.id}
                      research={faculty.research_interest}
                      image={`${domainUrl}/${faculty.imgUrl}`}
                      desg={faculty.designation}
                    />
                  )
                })
              : null}
          </div>
        </div>
      </>
    )
  }
}
export default Eefacultypage
