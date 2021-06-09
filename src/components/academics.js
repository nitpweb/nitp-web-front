import axios from "axios"
import React, { useEffect, useState } from "react"
import acadscholar from "./academics/img/acadscholar.svg"
import mail from "./academics/img/mail.svg"
import paper from "./academics/img/paper.svg"
import test from "./academics/img/test.svg"
import Floatmenu from "./academics/floatmenu"
import { PageLayout } from "./styles/pagelayout"
import Notice from "./home/notice"

const Academicspage = () => {
  const [notices, setNotices] = useState()

  useEffect(() => {
    let noticesUrl = `${process.env.GATSBY_API_URL}/api/notice/all`
    axios
      .get(noticesUrl)
      .then(res => {
        setNotices(res.data)
      })
      .catch(e => {
        console.log(e)
      })
  })

  return (
    <>
      {notices && (
        <PageLayout>
          <Floatmenu />
          <div className="layoutrow layoutrowmain" id="home">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1>Academics</h1>
              </div>
              <div className="row rowmarl3">
                <h2>
                  “Education is not the learning of facts, but the training of
                  minds to think”
                </h2>
              </div>
              <div className="row rowmarl3">
                <h2 id="aut">- Albert Einstein</h2>
              </div>
            </div>
            <div className="col-6 imgcolstyle">
              <img src={acadscholar} className="img-fluid" loading="lazy" />
            </div>
          </div>
          <div className="layoutrow layoutrow1" id="admission">
            <div className="col-6 imgcolstyle">
              <img src={test} className="img-fluid" loading="lazy" />
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
              <img src={paper} className="img-fluid" loading="lazy" />
            </div>
          </div>
          <div className="layoutrow layoutrow1" id="notice">
            <div className="col-6 imgcolstyle">
              <img src={mail} className="img-fluid" loading="lazy" />
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
        </PageLayout>
      )}
    </>
  )
}

export default Academicspage
