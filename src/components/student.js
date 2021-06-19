import React, { useState, useEffect } from "react"
import bag from "./student/img/bag.svg"
import axios from "axios"
import exchange from "./student/img/exchange.svg"
import first from "./student/img/firstyear.svg"
import antiragging from "./student/img/antiragging.svg"
import Coronapic from "./student/img/coronapic"
import Sacimg from "./student/img/sacpic"
import Floatmenu from "./student/floatmenu"
import StudentSlide from "./student/StudentSlide"
import { PageLayout } from "./styles/pagelayout"
import { TabPage } from "./styles/tabpage"
import { StudentList, Scholarship } from "./student/const"
import Navigate from "./global/Navigate"
import { useQueryParam } from "use-query-params"
import woman from "./facilities/img/woman.svg"
import Notice from "./home/notice"
import Table from "./table"

const sacinfo =
  "The Student Activity Centre (SAC) was built with the vision to provide support for multiple kinds of student activities. It was initiated by the honorable Director of NIT Patna, Prof. Asok De to encourage participation in extra-curricular activities to promote overall grooming of personality of the students. Various cultural activities and indoor games are conducted in the SAC. This enormous building has numerous rooms each of which is dedicated to activities related to sports and extra-curricular activities. Student offices for the same are also hosted in the SAC. Also, many open spaces have been specifically designed in the SAC to promote community interaction. A huge stadium adjoins the SAC in which football and cricket matches are held. The administration believes that these activities will help the students to provide a dynamic edge to their performances in the professional world and build a truly multi-faceted personality."

const coronainfo =
  "The annual technical fest of NIT Patna has become one of the biggest technical fest of the country. The last edition attracted participants from over 150 institutes from across the country, thus making it the largest technical fest of Bihar and Jharkhand. Aimed at providing a platform for showcasing the best and the latest innovations in the world of technology, various events such as robotics, circuit designing, programming, presentations etc. gives the students to showcase their talent and their practical skills to use."

const studentexchange =
  " National Institute of Technology (NIT), Patna has recently signed a memorandum of understanding (MoU) with the Handong Global University, Pohang, South Korea for exchange of students, faculty and research. The first six-month exchange programme will be funded by UNICEF. The research areas in focus are urban planning, urban development, infrastructure development and electrical engineering, all of which relate most directly to Bihar’s immediate needs. South Korea is known the world over for its highly advanced monorail system which also has a low impact on traffic flow on roads under construction. Automated driverless trains are another feature of the monorail; an Indian student may want to study. Apart from the concrete advantages, exchange of students and faculty and exposure to the teaching practices in South Korea is likely to have enormous impact on engineering education as being imparted at NIT Patna in the coming days."

const nss = `The National Service Scheme (NSS) was launched in 1969 and is an Indian government-sponsored public service program conducted by the Department of Youth Affairs and Sports of the Government of India aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community linkage. The NSS chapter at NIT Patna follows the cardinal principle of the NSS programme which is aimed at organising events by the students themselves such that both students and teachers get a sense of involvement in the tasks of nation building through their combined participation in community service. The programme aims to inculcate social welfare in students, and to provide service to society without bias. NSS volunteers work to ensure that everyone who is needy gets help to enhance their standard of living and lead a life of dignity.`
const Studentpage = () => {
  const [tab] = useQueryParam("tab")
  const [view, setView] = useState("clubs")
  const [notices, setNotices] = useState()
  function getView(callback) {
    setView(callback)
  }
  useEffect(() => {
    let noticesUrl = `${process.env.GATSBY_API_URL}/api/notice/jrfsrf`
    axios
      .get(noticesUrl)
      .then(res => {
        setNotices(res.data)
      })
      .catch(e => {
        console.log(e)
      })
    StudentList.forEach(x => {
      x.title === tab ? setView(tab) : ""
    })
  }, [tab])

  return (
    <TabPage>
      <Navigate data={StudentList} callback={getView} tab={tab} />
      <div className="mainDiv">
        <PageLayout>
          {/* <div className="layoutrow layoutrowmain" id="home">
            <div className="col-6 imgcolstyle">
              <img
                
                src={bag}
                className="img-fluid"
                loading="lazy"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <h1 >Students</h1>
              </div>
              <div className="row">
                <h2 >
                  “You have to dream before your dreams can come true.”
                </h2>
              </div>
              <div className="row">
                <h2  id="aut">
                  - APJ Abdul Kalam
                </h2>
              </div>
            </div>
          </div> */}
          {view == "clubs" && (
            <div className="layoutrowmain">
              <StudentSlide />
            </div>
          )}
          {view == "sac" && (
            <div className="layoutrow" id="sac">
              <div className="col-6">
                <div className="row rowmarl3">
                  <h1>Student Activity Center</h1>
                </div>
                <div className="row rowmarl3">
                  <p>{sacinfo}</p>
                </div>
              </div>
              <div className="col-6 imgcolstyle">
                <Sacimg />
              </div>
            </div>
          )}
          {view == "corona" && (
            <div className="layoutrow layoutrow1" id="tcf">
              <div className="col-6 imgcolstyle">
                <Coronapic />
              </div>
              <div className="col-6">
                <div className="row rowmarr3">
                  <h1>Annual Tech-Fest of NIT Patna</h1>
                </div>
                <div className="row rowmarr3">
                  <p>{coronainfo}</p>
                </div>
              </div>
            </div>
          )}
          {view == "studentexchange" && (
            <div className="layoutrow layoutrow1" id="sep">
              <div className="col-6 imgcolstyle">
                <img src={exchange} className="img-fluid" loading="lazy" />
              </div>
              <div className="col-6">
                <div className="row rowmarr3">
                  <h1>Student Exchange Program</h1>
                </div>
                <div className="row rowmarr3">
                  <p>{studentexchange}</p>
                </div>
              </div>
            </div>
          )}
          {view == "scholarship" && (
            <div className="layoutrow layoutrow1 others">
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in" style={{ fontSize: `3rem` }}>
                  Scholarships
                </h1>
              </div>
              
              <Table>
                <tr>
                  <th>SL No.</th>
                  <th>Scholarship/Stipends</th>
                  <th>Awarding Authority</th>
                  <th>Amount</th>
                </tr>
                {Scholarship.map(item => (
                  <tr>
                    <td>{item.no}</td>
                    <td>{item.scholarship}</td>
                    <td>{item.authority}</td>
                    <td>₹{item.amount}</td>
                  </tr>
                ))}
              </Table>
            </div>
          )}
          {view == "fellowship" && (
            <div className="layoutrow layoutrow1" id="notice">
              <div className="col-6 imgcolstyle">
                <img src="/mail.svg" className="img-fluid" loading="lazy" />
              </div>

              <div className="col-6 imgcolstyle">
                <div className="row rowmarr3">
                  <h1>Fellowship Opportunities</h1>
                </div>
                <div className="row rowmarr3">
                  <div id="layoutnoticewrap">
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
              </div>
            </div>
          )}
          {view == "nss" && (
            <div className="layoutrow" id="sep">
              <div className="col-6">
                <div className="row rowmarr3">
                  <h1>National Service Scheme</h1>
                </div>
                <div className="row rowmarr3">
                  <p>{nss}</p>
                </div>
              </div>
              <div className="col-6 imgcolstyle">
                <img src={exchange} className="img-fluid" loading="lazy" />
              </div>
            </div>
          )}
          {view == "firstyear" && (
            <div id="sfoot" className="layoutrow">
              <a
                id="sfimg1"
                href="http://www.nitp.ac.in/uploads/Anti-ragging_Committee_2019.pdf"
              >
                <img src={antiragging} loading="lazy" />
              </a>
              <a
                id="sfimg2"
                href="http://www.nitp.ac.in/uploads/Orientation_Programe_2018.pdf"
              >
                <img src={first} loading="lazy" />
              </a>
            </div>
          )}
        </PageLayout>
      </div>
    </TabPage>
  )
}

export default Studentpage
