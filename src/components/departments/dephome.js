import React, { useEffect, useState } from "react"
import main from "./img/main.png"
import pc from "./img/pc.svg"
import mountain from "./img/mountain.svg"
import map from "./img/map.svg"
import lens from "./img/lens.svg"
import axios from "axios"
import Notice from "../home/notice"
import { PageLayout } from "../styles/pagelayout"
import { TabPage } from "../styles/tabpage"
import Navigate from "../global/Navigate"
const Dephomepage = ({
  routeName,
  title,
  TitleDescription,
  About,
  Mission,
  Vision,
  Contact,
  datalist,
}) => {
  const [notices, setnotices] = useState()
  const [view, setView] = useState("about")
  function getView(callback) {
    setView(callback)
  }
  let noticesUrl = `${process.env.GATSBY_API_URL}/api/notice/${routeName}`
  useEffect(
    () => {
      axios
        .get(noticesUrl)
        .then(res => {
          const notice = res.data
          setnotices(notice)
        })
        .catch(e => {
          console.log(e)
        })
    },
    { notices }
  )
  return (
    <TabPage>
      <Navigate data={datalist} callback={getView} />
      <div className="mainDiv">
        <PageLayout>
          {/* <div className="layoutrow layoutrowmain" id="home">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right">{title}</h1>
              </div>
              {TitleDescription()}
            </div>
            <div className="col-6 imgcolstyle">
              <img
                data-aos="zoom-in"
                src={main}
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div> */}
          {view == "about" && (
            <div className="layoutrow" id="about">
              <div className="layoutabout">
                <div className="row">
                  <h1 data-aos="zoom-in">About</h1>
                </div>
                <div className="row">
                  <p data-aos="zoom-in">{About()}</p>
                </div>
              </div>
            </div>
          )}
          {view == "happening" && (
            <div className="layoutrow" id="happening">
              <div className="col-6">
                <div className="row">
                  <h1 data-aos="zoom-in-right">Happenings</h1>
                </div>
                <div className="row">
                  <div id="layoutnoticewrap">
                    {notices &&
                      notices.length != 0 &&
                      notices.map(notice => {
                        const newtime = new Date().getTime()

                        let d = Math.round(
                          (newtime - notice.openDate) / 3600000
                        )
                        if (d > 24) {
                          d = `${Math.round(d / 24)} days ago`
                        } else if (d < 1) {
                          d = `Just now`
                        } else if (d < 2) {
                          d = `${d} hour ago`
                        } else {
                          d = `${d} hours ago`
                        }
                        if (notice.title != "") {
                          return (
                            <Notice
                              detail={notice.title}
                              time={d}
                              attachments={notice.attachments}
                            />
                          )
                        }
                      })}
                  </div>
                </div>
              </div>
              <div className="col-6 imgcolstyle">
                <img
                  data-aos="zoom-in"
                  src={pc}
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {view == "missionvision" && (
            <>
              <div className="layoutrow layoutrow1" id="mission">
                <div className="col-6 imgcolstyle">
                  <img
                    data-aos="zoom-in"
                    src={mountain}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="col-6">
                  <div className="row rowmarr3">
                    <h1 >Mission</h1>
                  </div>
                  <div className="row rowmarr3">
                    <p >{Mission()}</p>
                  </div>
                </div>
              </div>
              <div className="layoutrow" id="vision">
                <div className="col-6">
                  <div className="row rowmarl3">
                    <h1>Vision</h1>
                  </div>
                  <div className="row rowmarl3">
                    <p>{Vision()}</p>
                  </div>
                </div>
                <div className="col-6 imgcolstyle">
                  <img
                    src={lens}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
            </>
          )}
          {view == "contact" && (
            <div className="layoutrow layoutrow1" id="contact">
              <div className="col-6 imgcolstyle">
                <img
                  data-aos="zoom-in"
                  src={map}
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="col-6">
                <div className="row rowmarr3">
                  <h1 data-aos="zoom-in-left">Contact</h1>
                </div>
                <div className="row rowmarr3">
                  <p data-aos="zoom-in-left">{Contact()}</p>
                </div>
              </div>
            </div>
          )}
        </PageLayout>
      </div>
    </TabPage>
  )
}

export default Dephomepage
