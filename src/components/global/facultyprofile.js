import React from "react"
import axios from "axios"
import "./css/facultyprofile.scss"
import mail from "./img/mail.svg"

class Facultyprofile extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.url)
    this.state = {
      profile: [],
      subjects: [],
      memberships: [],
      qualification: [],
      currResponsibility: [],
      pastreponsibility: [],
      books: [],
      journals: [],
      conferences: [],
      projects: [],
      services: [],
      workExperience: [],
      phdCandidates: [],
    }
  }
  componentDidMount() {
    const url = this.props.url
    axios
      .get(url)
      .then(res => {
        const detail = res.data
        console.log(res)
        this.setState({
          profile: detail.profile,
          subjects: detail.subjects_teaching,
          memberships: detail.memberships,
          qualification: detail.qualification,
          currResponsibility: detail.curr_admin_responsibility,
          pastreponsibility: detail.past_admin_reponsibility,
          books: detail.books,
          journals: detail.journals,
          conferences: detail.conferences,
          projects: detail.projects,
          services: detail.services,
          workExperience: detail.work_experience,
          phdCandidates: detail.phd_candidates,
        })
      })
      .catch(e => {
        console.log(e)
      })
  }
  render() {
    return (
      <>
        <div className="facultypage row">
          <div className="faculty-img-row">
            <div className="faculty-img-wrap">
              <img
                src={
                  this.state.profile.image != undefined
                    ? `${this.state.profile.image}`
                    : "/faculty.png"
                }
                className="facultypic"
              />
            </div>
            <a href={`mailto:${this.state.profile.email}`} target="blank">
              <img src={mail} className="img-fluid facmail" />
            </a>
            <h2>{this.state.profile.name}</h2>
            <h3>{this.state.profile.designation}</h3>
          </div>

          <div className="faculty-details-row">
            <h1>Profile</h1>
            <div className="fac-card" data-aos="fade-up">
              <h3>Research Interest:-</h3>
              <p>{this.state.profile.research_interest}</p>
              <h3>Email:-</h3>
              <p>{this.state.profile.email}</p>
              <h3>Phone:-</h3>
              <p>{this.state.profile.ext_no}</p>
            </div>
            {this.state.subjects ? (
              <div className="fac-card" data-aos="fade-up">
                <h3>Subjects</h3>
                {this.state.subjects.map(item => {
                  return <li>{item.subject}</li>
                })}
              </div>
            ) : null}
            {this.state.memberships ? (
              <div className="fac-card" data-aos="fade-up">
                <h3>Memberships & Society</h3>
                <div className="factable">
                  <table>
                    <tr>
                      <td>
                        <h4>Membership</h4>
                      </td>
                      <td>
                        <h4>Membership Society</h4>
                      </td>
                    </tr>
                    {this.state.memberships.map(item => {
                      return (
                        <tr>
                          <td>
                            <li>{item.membership_id}</li>
                          </td>
                          <td>
                            <li>{item.membership_society}</li>
                          </td>
                        </tr>
                      )
                    })}
                  </table>
                </div>
              </div>
            ) : null}
            {this.state.qualification ? (
              <div className="fac-card" data-aos="fade-up">
                <h3>Educational Qualification</h3>
                <div className="factable">
                  <table>
                    <tr>
                      <td>
                        <h4>Certification</h4>
                      </td>
                      <td>
                        <h4>Institute Name</h4>
                      </td>
                      <td>
                        <h4>Passing Year</h4>
                      </td>
                    </tr>
                    {this.state.qualification.map(item => {
                      return (
                        <tr>
                          <td>
                            <li>{item.certification}</li>
                          </td>
                          <td>
                            <li>{item.institution}</li>
                          </td>
                          <td>
                            <li>{item.passing_year}</li>
                          </td>
                        </tr>
                      )
                    })}
                  </table>
                </div>
              </div>
            ) : null}
            {this.state.currResponsibility ? (
              <div className="fac-card" data-aos="fade-up">
                <h3>Current Administrative Responsibility</h3>
                {this.state.currResponsibility.map(item => {
                  return <li>{item.curr_responsibility}</li>
                })}
              </div>
            ) : null}
            {this.state.pastreponsibility ? (
              <div className="fac-card" data-aos="fade-up">
                <h3>Past Administrative Responsibility</h3>
                {this.state.pastreponsibility.map(item => {
                  return <li>{item.past_responsibility}</li>
                })}
              </div>
            ) : null}
            {this.state.workExperience ? (
              <div className="fac-card" data-aos="fade-up">
                <h3>Work Experiences</h3>
                {this.state.workExperience.map(item => {
                  return <li>{item.work_experiences}</li>
                })}
              </div>
            ) : null}
            {this.state.services ? (
              <div className="fac-card" data-aos="fade-up">
                <h3>Professional Services</h3>
                {this.state.services.map(item => {
                  return <li>{item.services}</li>
                })}
              </div>
            ) : null}
            {this.state.projects ? (
              <div className="fac-card" data-aos="fade-up">
                <h3>Projects</h3>
                {this.state.projects.map(item => {
                  return <li>{item.project}</li>
                })}
              </div>
            ) : null}
            {this.state.phdCandidates ? (
              <div className="fac-card" data-aos="fade-up">
                <h3>Phd Candidates</h3>
                <div className="factable">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <h4>Student Name</h4>
                        </td>
                        <td>
                          <h4>Thesis Topic</h4>
                        </td>
                        <td>
                          <h4>Start Year</h4>
                        </td>
                        <td>
                          <h4>Completion Year</h4>
                        </td>
                      </tr>
                      {this.state.phdCandidates.map(item => {
                        return (
                          <tr>
                            <td>
                              <li>{item.phd_student_name}</li>
                            </td>
                            <td>
                              <li>{item.thesis_topic}</li>
                            </td>
                            <td>
                              <li>{item.start_year}</li>
                            </td>
                            <td>
                              <li>{item.completion_year}</li>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </>
    )
  }
}

export default Facultyprofile
