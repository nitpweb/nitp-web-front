import axios from "axios"
import React, { useEffect, useState } from "react"
import { TabPage } from "./styles/tabpage"
import Navigate from "./global/Navigate"
import Notice from "./home/notice"
import AcademicsList from "./academics/const"
import acadData from "./academics/acadData"
import { useQueryParam } from "use-query-params"

const Academicspage = () => {
  const [tab] = useQueryParam("tab")
  const [notices, setNotices] = useState()
  const [view, setView] = useState("admissions")

  function getView(callback) {
    setView(callback)
  }
  useEffect(() => {
    AcademicsList.forEach(x => {
      x.data === tab ? setView(tab) : ""
    })
  }, [tab])

  useEffect(() => {
    let noticesUrl = `${process.env.GATSBY_API_URL}/api/notice/academics`
    axios
      .get(noticesUrl)
      .then(res => {
        setNotices(res.data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <>
      {true && (
        <TabPage>
          <Navigate data={AcademicsList} callback={getView} tab={tab} />
          <div className="mainDiv">
            {view == "admissions" && (
              <div
                className="layoutrow layoutrow1 rowmarl3"
                id="admission"
              >
                {/* <div className="col-6 imgcolstyle">
                  <img src="/test.svg" className="img-fluid" loading="lazy" />
                </div> */}
                <div>
                  <div className="row">
                    <h1 style={{ marginBottom: `1rem`}}>
                      Admissions
                    </h1>
                  </div>
                  {acadData.Admissions.map(e => (
                    <div className="row rowmarr3 digital">
                      <div>
                        <h3>{e.title}</h3>
                        {e.data.map(item => (
                          <>
                            <a
                              href={item.link}
                              target="_blank"
                              style={{ textDecoration: `none`, padding: `5px` }}
                            >
                              <li>{item.para}</li>
                            </a>
                            <br />
                          </>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {view == "programmes" && (
              <div className="digital">
                <h3>Names of the approved programmes</h3>
                <table align="center">
                  <tbody>
                    <tr>
                      <th>S.no.</th>
                      <th>Degree/Program</th>
                      <th>Branch of specialization</th>
                      <th>Duration</th>
                    </tr>
                    <tr>
                      <td colspan="4" align="center">
                        <b>Under Graduate Programmes</b>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Bachelor of Architecture</td>
                      <td>Architecture</td>
                      <td>5 years</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td rowspan="6">Bachelor of Technology</td>
                      <td>Civil Engineering</td>
                      <td rowspan="6">4 Years</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Computer Scince &amp; Engineering</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td> Electrical Engineering</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Electronics &amp; Communication Engineering</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Information Technology</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Mechanical Engineering</td>
                    </tr>
                    <tr>
                      <td colspan="4" align="center">
                        <b>Post Graduate Programmes</b>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td rowspan="5">
                        Master of Technology <i>(Civil Engineering)</i>
                      </td>
                      <td>Water Resources Engineering</td>
                      <td rowspan="19">2 Years</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Transportation Engineering</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Structural Engineering</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Environmental Engineering</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Geotechnical Engineering</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td rowspan="2">
                        Master of Technology <i>(Electrical Engineering)</i>
                      </td>
                      <td>Control System Engineering</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Power System Engineering</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td rowspan="5">
                        Master of Technology <i>(Mechanical Engineering)</i>
                      </td>
                      <td>Thermal Engineering</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Production Engineering</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Design Engineering</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Automobile Engineering</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Renewable Energy Technology</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td rowspan="2">
                        Master of Technology{" "}
                        <i>(Computer Science &amp; Engineering)</i>
                      </td>
                      <td>Information Technology</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Computer Science &amp; Engineering</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td rowspan="2">
                        Master of Technology{" "}
                        <i>(Electronics &amp; Communication Engineering)</i>
                      </td>
                      <td>Communication Systems</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>VLSI System Design and Microelectronics</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>
                        Master in Urban &amp; Regional Planning<i>(MURP)</i>
                      </td>
                      <td>Urban and Regional Planning</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>
                        M. Tech (Computational Mathematics)<i></i>
                      </td>
                      <td>Computational Mathematics</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>
                        M. Tech (Nanoscience and Technology)<i></i>
                      </td>
                      <td>Nanoscience and Technology</td>
                    </tr>
                    <tr>
                      <td colspan="4" align="center">
                        <b>Five Years Integrated Programs</b>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        M. Sc.<i>(Chemistry)</i>
                      </td>
                      <td>Integrated M. Sc. in Chemistry</td>
                      <td rowspan="3">5 Years</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        M. Sc.<i>(Mathematics)</i>
                      </td>
                      <td>Integrated M. Sc. in Mathematics</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        M. Sc.<i>(Physics)</i>
                      </td>
                      <td>Integrated M. Sc. in Physics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {view == "format" && (
              <div className="layoutrow" id="format">
                <div className="row rowmarl3">
                  <h1>Formats</h1>
                </div>
                
                {
                  acadData.format.map(item=>(
                    item.data.map(e=>(
                      <div className="row rowmarl3 digital">
                      <p><a id="formatdown" href={e.link} style={{textDecoration:`none`,fontWeight:`bold`}} target="_blank">Download</a> {e.para}</p>
                      </div>
                  ))
                  ))
                }
                  
                <div className="row imgcolstyle backgroundimage">
                  <img src="/paper.svg" className="img-fluid" loading="lazy" />
                </div>
              </div>
            )}
            {view == "Notices" && (
              <div className="layoutrow" id="notice">
                <div className="row imgcolstyle backgroundimage">
                  <img src="/mail.svg" className="img-fluid" loading="lazy" />
                </div>

                <div className="row rowmarl3">
                  <h1>Notice</h1>
                </div>
                <div className="row rowmarl3">
                    {notices != undefined
                      ? notices.map(notice => {
                          if (notice.title != "") {
                            return (
                              <Notice
                                detail={notice.title}
                                time={notice.openDate}
                                attachments={notice.attachments}
                              />
                            )
                          }
                        })
                      : null}
                </div>
              </div>
            )}
          </div>
        </TabPage>
      )}
    </>
  )
}

export default Academicspage
