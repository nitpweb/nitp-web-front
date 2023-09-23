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
import { Scholarship, tabledata } from "./student/const"
import Navigate from "./global/Navigate"
import { useQueryParam } from "use-query-params"
import woman from "./facilities/img/woman.svg"
import Notice from "./home/notice"
import Table from "./table"
import Navlist from "./global/navlist"
import acadData from "./academics/acadData"

const sacinfo =
 "The Student Activity Centre (SAC) was built with the vision to provide support for multiple kinds of student activities. It was initiated by the honorable Director of NIT Patna, Prof. Asok De to encourage participation in extra-curricular activities to promote overall grooming of personality of the students. Various cultural activities and indoor games are conducted in the SAC. This enormous building has numerous rooms each of which is dedicated to activities related to sports and extra-curricular activities. Student offices for the same are also hosted in the SAC. Also, many open spaces have been specifically designed in the SAC to promote community interaction. A huge stadium adjoins the SAC in which football and cricket matches are held. The administration believes that these activities will help the students to provide a dynamic edge to their performances in the professional world and build a truly multi-faceted personality."

const coronainfo =
 "The annual technical fest of NIT Patna has become one of the biggest technical fest of the country. The last edition attracted participants from over 150 institutes from across the country, thus making it the largest technical fest of Bihar and Jharkhand. Aimed at providing a platform for showcasing the best and the latest innovations in the world of technology, various events such as robotics, circuit designing, programming, presentations etc. gives the students to showcase their talent and their practical skills to use."

const studentexchange =
 " National Institute of Technology (NIT), Patna has recently signed a memorandum of understanding (MoU) with the Handong Global University, Pohang, South Korea for exchange of students, faculty and research. The first six-month exchange programme will be funded by UNICEF. The research areas in focus are urban planning, urban development, infrastructure development and electrical engineering, all of which relate most directly to Bihar’s immediate needs. South Korea is known the world over for its highly advanced monorail system which also has a low impact on traffic flow on roads under construction. Automated driverless trains are another feature of the monorail; an Indian student may want to study. Apart from the concrete advantages, exchange of students and faculty and exposure to the teaching practices in South Korea is likely to have enormous impact on engineering education as being imparted at NIT Patna in the coming days."

const nss = `The National Service Scheme (NSS) was launched in 1969 and is an Indian government-sponsored public service program conducted by the Department of Youth Affairs and Sports of the Government of India aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community linkage. The NSS chapter at NIT Patna follows the cardinal principle of the NSS programme which is aimed at organising events by the students themselves such that both students and teachers get a sense of involvement in the tasks of nation building through their combined participation in community service. The programme aims to inculcate social welfare in students, and to provide service to society without bias. NSS volunteers work to ensure that everyone who is needy gets help to enhance their standard of living and lead a life of dignity.`

const Ecell = `
Entrepreneurship Cell, NIT Patna is a non-profit college club run by students of NIT Patna, founded in 2013 with the objective of increasing the spirit of Entrepreneurship among students of National Institute of Technology Patna. Entrepreneurship Cell NIT Patna helps the aspiring entrepreneurs to start and grow their businesses by creating a pathway of various opportunities like interactive sessions with professionals and founders, business competitions, business quizzes and financial awareness programs. This helps foster entrepreneurial thinking, promote business knowledge and increase confidence in students. Our vision is to help students who have an idea, product and burning desire by providing convincing skills, market exposure and investors for their start-up. This cell helps students to understand the business world by actually working in a start-up.
`

const Unnatbharat = `
Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.
`
const firstYear = [
 {
  heading: `Welcome! 1st Year`,
  info: `This page has been created specially for First Year Students, so that they can get all important information / announcement (not exhaustive though) related to them on a single page.`,
  data0: [
   {
    title: `Student Induction Programme 2022.`,
    link: `https://web.nitp.ac.in/uploads22/UG Student Induction Programme 2022.jpg`,
   },
  ],
  data1: [
   // {
   //   title: `Class Schedule for 1st Year Students :`,
   //   link: `http://www.nitp.ac.in/uploads20/Online%20Orientation%20Programme%202020_2_30_Nov_2020.pdf`,
   // },
   // {
   //   title: `Click here for Physics :`,
   //   link: `http://www.nitp.ac.in/uploads20/Time-Table%20for%20B.%20Tech.%20students%20(Newly%20admitted)_2020_Department%20of%20Physics.pdf`,
   // },
   // {
   //   title: `Click here for Electronics Dept. :`,
   //   link: `http://www.nitp.ac.in/uploads20/1st%20Year%20Dec-March%202020-2021%20(1).pdf`,
   // },
   // {
   //   title: `Click here for ME Dept (Dept subjects). :`,
   //   link: `http://www.nitp.ac.in/uploads20/Time%20table%20ME%20department_2020-2021%20odd%20semester_modified_01-09-2020_1st%20year%20students.pdf`,
   // },
   // {
   //   title: `Click here for ME Dept. (overall):`,
   //   link: `http://www.nitp.ac.in/uploads20/Mechanical.pdf`,
   // },
   // {
   //   title: `Click here for CSE :`,
   //   link: `http://www.nitp.ac.in/uploads20/CSED_1stYear_Dec-March-2020-semester_08_12_2020.pdf`,
   // },
   // {
   //   title: `Click here for Maths. Dept. :`,
   //   link: `http://www.nitp.ac.in/uploads20/1st%20year%20time-table%20(1).pdf`,
   // },
   // {
   //   title: `Click here for Updated Civil Dept. Class Schedule :`,
   //   link: `http://www.nitp.ac.in/uploads20/1UGCE(JULY-DEC%2020).pdf`,
   // },
   // {
   //   title: `Click here for Chemistry Dept. :`,
   //   link: `http://www.nitp.ac.in/uploads20/B.%20Tech%201st%20yr%20Time%20Table_Chemistry.pdf`,
   // },
   // {
   //   title: ` Click here for HSS Dept. :`,
   //   link: `http://www.nitp.ac.in/uploads20/Time%20Table%20HSS%20July%20Dec%202020%20(BTECH%201ST%20SEM)-1.pdf`,
   // },
   // {
   //   title: `Click here for EE Dept. :`,
   //   link: `http://www.nitp.ac.in/uploads20/Routine%201st%20sem%20EE.docx`,
   // },
   // {
   //   title: `Click here for Architecture Dept. :`,
   //   link: `http://www.nitp.ac.in/uploads20/2020-07.12.2020.pdf`,
   // },
  ],
 },
]
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
    setNotices(res.data.filter(notice => notice.isVisible === 1))
   })
   .catch(e => {
    console.log(e)
   })
  Navlist.students.map(x => {
   x.sub.forEach(element => {
    tab ? (element.data === tab ? setView(tab) : "") : ""
   })
  })
 }, [tab])
 const arrdata = []
 Navlist.students.map(x => arrdata.push(...x.sub))
 return (
  <TabPage>
   <Navigate data={arrdata} callback={getView} tab={tab ? tab : "clubs"} />
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
      <div className="layoutrowmain digital">
       <StudentSlide />
      </div>
     )}
     {view == "concession" && (
      <div className="layoutrow digital">
       {acadData.relaxation.map(item => (
        <div className="row rowmarl3">
         <h1>{item.heading}</h1>
         {item.data.map(e => (
          <div>
           <h3>{e.title_main}</h3>
           <p>{e.title}</p>
           <p>
            {e.list.map(val => (
             <li>{val}</li>
            ))}
           </p>
           <h3>{e.title_end}</h3>
           <p>{e.para_end}</p>
          </div>
         ))}
        </div>
       ))}

       <div className="row rowmarl3">
        <p></p>
       </div>
      </div>
     )}
     {view == "sac" && (
      <div className="layoutrow digital" id="sac">
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
      <div className="layoutrow digital" id="tcf">
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
      <div className="layoutrow digital" id="sep">
       <div className="row imgcolstyle backgroundimage">
        <img src={exchange} className="img-fluid" loading="lazy" />
       </div>
       <div className="row rowmarl3">
        <h1>Student Exchange Program</h1>
       </div>
       <div className="row rowmarl3">
        <p>{studentexchange}</p>
       </div>
      </div>
     )}
     {view == "scholarship" && (
      <div className="layoutrow others">
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
      <div className="layoutrow digital" id="notice">
       <div className="row imgcolstyle backgroundimage">
        <img src="/mail.svg" className="img-fluid" loading="lazy" />
       </div>

       <div className="row rowmarl3">
        <h1>Fellowship Opportunities</h1>
       </div>
       <div className="row rowmarl3">
        {notices != undefined
         ? notices.map(notice => {
            if (notice.title != "") {
             return (
              <Notice
               detail={notice.title}
               time={notice.timestamp}
               attachments={notice.attachments}
              />
             )
            }
           })
         : null}
       </div>
      </div>
     )}
     {view == "nss" && (
      <div className="layoutrow digital" id="sep">
       <div className="row rowmarl3">
        <h1>National Service Scheme</h1>
       </div>
       <div className="row rowmarl3">
        <p>{nss}</p>
       </div>
       <div className="row imgcolstyle backgroundimage">
        <img src={exchange} className="img-fluid" loading="lazy" />
       </div>
      </div>
     )}
     {view == "Ecell" && (
      <div className="layoutrow digital" id="sep">
       <div className="row imgcolstyle backgroundimage">
        <img src={exchange} className="img-fluid" loading="lazy" />
       </div>
       <div className="row rowmarl3">
        <h1>Entrepreneurship Cell, NIT Patna </h1>
       </div>
       <div className="row rowmarl3">
        <div className="row">
         <h3>(Making Dreamers into Entrepreneurs)</h3>
        </div>
        <div className="row">
         <h2>Prof.-In-Charge: Dr. Om Ji Shukla</h2>
        </div>
        <h3>Email: ecell@nitp.ac.in</h3>
        <p>{Ecell}</p>
       </div>
      </div>
     )}
     {view == "Unnatbharat" && (
      <div className="layoutrow digital" id="sep">
       <div className="row imgcolstyle backgroundimage">
        <img src={exchange} className="img-fluid" loading="lazy" />
       </div>
       <div className="row rowmarl3">
        <h1>Unnat Bharat Abhiyaan </h1>
       </div>
       <div className="row rowmarl3">
        <div className="row">
         <h3>(A flagship program of Ministry of Education, GoI)</h3>
        </div>
        <div className="row">
         <h2>Regional Coordinating Institute-NIT Patna</h2>
        </div>
        <h3>Regional Coordinator: Dr. Om Ji Shukla</h3>
        <div className="row">
         <h2>Vision</h2>
        </div>
        <p>{Unnatbharat}</p>
        <div className="row">
         <h2>Mission</h2>
        </div>
        <p>
         The Mission of Unnat Bharat Abhiyan is to enable higher educational
         institutions to work with the people of rural India in identifying
         development challenges and evolving appropriate solutions for
         accelerating sustainable growth. It also aims to create a virtuous
         cycle between society and an inclusive academic system by providing
         knowledge and practices for emerging professions and to upgrade the
         capabilities of both the public and the private sectors in responding
         to the development needs of rural India.
        </p>
        <div className="row">
         <h2>Goals</h2>
        </div>
        <p>
         • To build an understanding of the development agenda within institutes
         of Higher Education and an institutional capacity and training relevant
         to national needs, especially those of rural India.<br></br>• To
         re-emphasize the need for field work, stake-holder interactions and
         design for societal objectives as the basis of higher education.
         <br></br>• To stress on rigorous reporting and useful outputs as
         central to developing new professions.<br></br>• To provide rural India
         and regional agencies with access to the professional resources of the
         institutes of higher education, especially those that have acquired
         academic excellence in the field of science, engineering and
         technology, and management.<br></br>• To improve development outcomes
         as a consequence of this research. To develop new professions and new
         processes to sustain and absorb the outcomes of research.<br></br>• To
         foster a new dialogue within the larger community on science, society
         and the environment and to develop a sense of dignity and collective
         destiny
        </p>
        <div className="row">
         <h2>As Regional Coordinating Institute </h2>
        </div>
        <p>
         The Regional Coordinating Institutions (RCIs) are identified on the
         basis of their earlier experience and infrastructural competence etc.
         Our institute is also identified as Regional Coordinating Institute in
         Bihar and we have 42 Participating Institutes (PIs) under our region.
         NIT Patna act as a nodal center for promoting and facilitate UBA
         network in the region. We are responsible for grooming the other
         participating institutions in their region in addition to carrying out
         their own village cluster activities. As RCI, we have our own login
         credential to view and review the work of PIs in their region.
         Additionally, the RCIs have a strategic role to play, they have to
         identify a challenge relevant in their region / states in collaboration
         with PIs and State government.
        </p>
        <div className="row">
         <h2>As Participating Institute</h2>
        </div>
        <p>
         As per the guidelines of Unnat Bharat Abhiyan (UBA) each participating
         institute (PI) must adopt five rural villages in their region. The role
         of participating institute is to use the simple and people friendly
         technology to uplift their socio-economic status with the use of
         available human resource and natural resource in the adopted villages.
         Our institute has also adopted the five rural villages and giving its
         best for their well-being. The details of these adopted villages are
         given below.
        </p>
        <br></br>
        <Table>
         <tr>
          <th>SL No.</th>
          <th>Adopted village</th>
          <th>District </th>
         </tr>
         {tabledata.map(item => (
          <tr>
           <td>{item.no}</td>
           <td>{item.village}</td>
           <td>{item.district}</td>
          </tr>
         ))}
        </Table>
       </div>
      </div>
     )}
     {view == "firstyear" && (
      <div className="layoutrow digital">
       {/* <a
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
              </a> */}
       {firstYear.map(e => (
        <>
         <div className="row rowmarl3 rowmarr3">
          <h1>{e.heading}</h1>
          <p>{e.info}</p>
         </div>
         {e.data0.map(i => (
          <div className="row rowmarl3 rowmarr3">
           <a
            href={i.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
             textDecoration: `none`,
             fontFamily: `Source Sans Pro`,
            }}
           >
            <h3
             style={{
              borderBottom: `1px dotted black`,
              borderTop: `1px dotted black`,
              padding: `0.5rem`,
             }}
            >
             {i.title}
            </h3>
           </a>
          </div>
         ))}
         {e.data1.map(j => (
          <div className="row rowmarl3 rowmarr3">
           <a
            href={j.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
             textDecoration: `none`,
             fontFamily: `Source Sans Pro`,
            }}
           >
            <p
             style={{
              fontWeight: `bold`,
              paddingBottom: `0.5rem`,
              margin: `0 1rem`,
             }}
            >
             → {j.title}
            </p>
           </a>
          </div>
         ))}
        </>
       ))}
      </div>
     )}
    </PageLayout>
   </div>
  </TabPage>
 )
}

export default Studentpage
