import axios from "axios"
import React, { useEffect, useState } from "react"
import { TabPage } from "./styles/tabpage"
import Navigate from "./global/Navigate"
import Notice from "./home/notice"
import AcademicsList from "./academics/const"
import { useQueryParam} from "use-query-params"

const Academicspage = () => {
  const [tab] = useQueryParam("tab")
  const [notices, setNotices] = useState()
 const [view, setView] = useState("admission")

 function getView(callback) {
   setView(callback)
 }
 useEffect(() => {
  AcademicsList.forEach(x => {
    x.title === tab ? setView(tab) : ""
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
  },[])

  return (
    <>
      {notices && (
        <TabPage>
          <Navigate data={AcademicsList} callback={getView} tab={tab}/>
          <div className="mainDiv">
            {/* <div className="layoutrow layoutrowmain" id="home">
                <div className="col-6">
                  <div className="row rowmarl3">
                    <h1>Academics</h1>
                  </div>
                  <div className="row rowmarl3">
                    <h2>
                      “Education is not the learning of facts, but the training
                      of minds to think”
                    </h2>
                  </div>
                  <div className="row rowmarl3">
                    <h2 id="aut">- Albert Einstein</h2>
                  </div>
                </div>
                <div className="col-6 imgcolstyle">
                  <img src="/acadscholar.svg" className="img-fluid" loading="lazy" />
                </div>
              </div> */}
            {view == "Admissions" && (
              <div className="layoutrow layoutrow1" id="admission">
                <div className="col-6 imgcolstyle">
                  <img src="/test.svg" className="img-fluid" loading="lazy" />
                </div>
                <div className="col-6">
                  <div className="row rowmarr3">
                    <h1>Admissions</h1>
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
            {view == "Format" && (
              <div className="layoutrow" id="format">
                <div className="col-6">
                  <div className="row rowmarl3">
                    <h1>Formats</h1>
                  </div>
                  <div className="row rowmarl3">
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
                <div className="col-6 imgcolstyle">
                  <img src="/paper.svg" className="img-fluid" loading="lazy" />
                </div>
              </div>
            )}
            {view == "Notices" && (
              <div className="layoutrow layoutrow1" id="notice">
                <div className="col-6 imgcolstyle">
                  <img src="/mail.svg" className="img-fluid" loading="lazy" />
                </div>

                <div className="col-6 imgcolstyle">
                  <div className="row rowmarr3">
                    <h1>Notice</h1>
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
          </div>
        </TabPage>
      )}
    </>
  )
}

export default Academicspage
