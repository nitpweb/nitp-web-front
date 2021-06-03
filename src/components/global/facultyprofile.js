import React from "react"
import axios from "axios"
import "./css/facultyprofile.scss"
import mail from "./img/mail.svg"
import Deplayout from "../deplayout"

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
      pastReponsibility: [],
      books: [],
      journals: [],
      conferences: [],
      article: [],
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
        this.setState({
          profile: detail.profile,
          subjects: detail.subjects_teaching,
          memberships: detail.memberships,
          qualification: detail.education,
          currResponsibility: detail.curr_admin_responsibility,
          pastResponsibility: detail.past_admin_responsibility,
          books:
            detail.publications != undefined &&
            JSON.parse(detail.publications[0].publications).filter(
              x => x.type === "book"
            ),
          journals: detail.journals,
          conferences:
            detail.publications != undefined &&
            JSON.parse(detail.publications[0].publications).filter(
              x => x.type === "conference"
            ),
          article:
            detail.publications != undefined &&
            JSON.parse(detail.publications[0].publications).filter(
              x => x.type === "article"
            ),
          projects: detail.project,
          services: detail.professional_service,
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
        <Deplayout department={this.state.profile.department}>
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

              {this.state.subjects && this.state.subjects.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Subjects</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Subject Code</h4>
                        </th>
                        <th>
                          <h4>Subject Name</h4>
                        </th>
                        <th>
                          <h4>Start-Date</h4>
                        </th>
                        <th>
                          <h4>End-Date</h4>
                        </th>
                      </tr>
                      {this.state.subjects.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.code}</p>
                            </td>
                            <td>
                              <p>{item.name}</p>
                            </td>
                            <td>
                              <p>
                                {new Date(item.start).getMonth() + 1} /{" "}
                                {new Date(item.start).getFullYear()}
                              </p>
                            </td>
                            <td>
                              <p>
                                {new Date(item.end).getMonth() + 1} /{" "}
                                {new Date(item.end).getFullYear()}
                              </p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              ) : null}

              {this.state.memberships && this.state.memberships.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Memberships & Society</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Membership Id</h4>
                        </th>
                        <th>
                          <h4>Membership Society</h4>
                        </th>
                        <th>
                          <h4>Start-Date</h4>
                        </th>
                        <th>
                          <h4>End-Date</h4>
                        </th>
                      </tr>
                      {this.state.memberships.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.membership_id}</p>
                            </td>
                            <td>
                              <p>{item.membership_society}</p>
                            </td>
                            <td>
                              <p>
                                {new Date(item.start).getMonth() + 1} /{" "}
                                {new Date(item.start).getFullYear()}
                              </p>
                            </td>
                            <td>
                              <p>
                                {new Date(item.end).getMonth() + 1} /{" "}
                                {new Date(item.end).getFullYear()}
                              </p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              ) : null}

              {this.state.qualification &&
              this.state.qualification.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Educational Qualification</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Certification</h4>
                        </th>
                        <th>
                          <h4>Institute Name</h4>
                        </th>
                        <th>
                          <h4>Passing Year</h4>
                        </th>
                      </tr>
                      {this.state.qualification.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.certification}</p>
                            </td>
                            <td>
                              <p>{item.institution}</p>
                            </td>
                            <td>
                              <p>{item.passing_year}</p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              ) : null}

              {this.state.article && this.state.article.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Articles</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Title</h4>
                        </th>
                        <th>
                          <h4>Authors</h4>
                        </th>
                        <th>
                          <h4>Year</h4>
                        </th>
                        <th>
                          <h4>Citation</h4>
                        </th>
                      </tr>
                      {this.state.article.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.title}</p>
                            </td>
                            <td>
                              <p>{item.authors}</p>
                            </td>
                            <td>
                              <p>{item.year}</p>
                            </td>
                            <td>
                              <p>{item.citation_key}</p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              ) : null}

              {this.state.conferences && this.state.conferences.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Conferences</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Title</h4>
                        </th>
                        <th>
                          <h4>Authors</h4>
                        </th>
                        <th>
                          <h4>Journal Name</h4>
                        </th>
                        <th>
                          <h4>Year</h4>
                        </th>
                        <th>
                          <h4>Citation</h4>
                        </th>
                      </tr>
                      {this.state.conferences.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.title}</p>
                            </td>
                            <td>
                              <p>{item.authors}</p>
                            </td>
                            <td>
                              <p>{item.booktitle}</p>
                            </td>
                            <td>
                              <p>{item.year}</p>
                            </td>
                            <td>
                              <p>{item.citation_key}</p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              ) : null}

              {this.state.books && this.state.books.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Books</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Title</h4>
                        </th>
                        <th>
                          <h4>Authors</h4>
                        </th>
                        <th>
                          <h4>Editors</h4>
                        </th>
                        <th>
                          <h4>Publisher</h4>
                        </th>
                        <th>
                          <h4>Year</h4>
                        </th>
                        <th>
                          <h4>Citation</h4>
                        </th>
                      </tr>
                      {this.state.books.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.title}</p>
                            </td>
                            <td>
                              <p>{item.authors}</p>
                            </td>
                            <td>
                              <p>{item.editors}</p>
                            </td>
                            <td>
                              <p>{item.publisher}</p>
                            </td>
                            <td>
                              <p>{item.year}</p>
                            </td>
                            <td>
                              <p>{item.citation_key}</p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              ) : null}

              {this.state.currResponsibility &&
              this.state.currResponsibility.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Current Administrative Responsibility</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Post</h4>
                        </th>
                        <th>
                          <h4>Start-Date</h4>
                        </th>
                      </tr>
                      {this.state.currResponsibility.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.curr_responsibility}</p>
                            </td>
                            <td>
                              <p>
                                {new Date(item.start).getMonth() + 1} /{" "}
                                {new Date(item.start).getFullYear()}
                              </p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              ) : null}

              {this.state.pastResponsibility &&
              this.state.pastResponsibility.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Past Administrative Responsibility</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Post</h4>
                        </th>
                        <th>
                          <h4>Start-Date</h4>
                        </th>
                        <th>
                          <h4>End-Date</h4>
                        </th>
                      </tr>
                      {this.state.pastResponsibility.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.past_responsibility}</p>
                            </td>
                            <td>
                              <p>
                                {new Date(item.start).getMonth() + 1} /{" "}
                                {new Date(item.start).getFullYear()}
                              </p>
                            </td>
                            <td>
                              <p>
                                {new Date(item.end).getMonth() + 1} /{" "}
                                {new Date(item.end).getFullYear()}
                              </p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              ) : null}

              {this.state.workExperience &&
              this.state.workExperience.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Work Experiences</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Designation</h4>
                        </th>
                        <th>
                          <h4>Institute/Company</h4>
                        </th>
                        <th>
                          <h4>Start-Date</h4>
                        </th>
                        <th>
                          <h4>End-Date</h4>
                        </th>
                      </tr>
                      {this.state.workExperience.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.work_experiences}</p>
                            </td>
                            <td>
                              <p>{item.institute}</p>
                            </td>
                            <td>
                              <p>
                                {new Date(item.start).getMonth() + 1} /{" "}
                                {new Date(item.start).getFullYear()}
                              </p>
                            </td>
                            <td>
                              <p>
                                {new Date(item.end).getMonth() + 1} /{" "}
                                {new Date(item.end).getFullYear()}
                              </p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              ) : null}

              {this.state.services && this.state.services.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Professional Services</h3>
                  {this.state.services.map(item => {
                    return <li>{item.services}</li>
                  })}
                </div>
              ) : null}
              {/* {this.state.projects && this.state.projects.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Projects</h3>
                  {this.state.projects.map(item => {
                    return <li>{item.project}</li>
                  })}
                </div>
              ) : null} */}

              {this.state.projects && this.state.projects.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Projects</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Title</h4>
                        </th>
                        <th>
                          <h4>Sponsoring Agency</h4>
                        </th>
                        <th>
                          <h4>Amount</h4>
                        </th>
                        <th>
                          <h4>Start-Date</h4>
                        </th>
                        <th>
                          <h4>End-Date</h4>
                        </th>
                      </tr>
                      {this.state.projects.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.project}</p>
                            </td>
                            <td>
                              <p>{item.sponsor}</p>
                            </td>
                            <td>
                              <p>{item.amount}</p>
                            </td>
                            <td>
                              <p>
                                {new Date(item.start).getMonth() + 1} /{" "}
                                {new Date(item.start).getFullYear()}
                              </p>
                            </td>
                            <td>
                              <p>
                                {new Date(item.end).getMonth() + 1} /{" "}
                                {new Date(item.end).getFullYear()}
                              </p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              ) : null}

              {this.state.phdCandidates &&
              this.state.phdCandidates.length != 0 ? (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Phd Candidates</h3>
                  <div className="factable">
                    <table>
                      <tbody>
                        <tr>
                          <th>
                            <h4>Student Name</h4>
                          </th>
                          <th>
                            <h4>Thesis Topic</h4>
                          </th>
                          <th>
                            <h4>Start Year</h4>
                          </th>
                          <th>
                            <h4>Completion Year</h4>
                          </th>
                        </tr>
                        {this.state.phdCandidates.map(item => {
                          return (
                            <tr>
                              <td>
                                <p>{item.phd_student_name}</p>
                              </td>
                              <td>
                                <p>{item.thesis_topic}</p>
                              </td>
                              <td>
                                <p>{item.start_year}</p>
                              </td>
                              <td>
                                <p>{item.completion_year}</p>
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
        </Deplayout>
      </>
    )
  }
}

export default Facultyprofile
