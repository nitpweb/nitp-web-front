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
  Labs,
  Achievements,
  Activities,
  Vision,
  Contact,
  Extras,
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
        <>
          {/* <div className="layoutrow layoutrowmain" id="home">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1 >{title}</h1>
              </div>
              {TitleDescription()}
            </div>
            <div className="col-6 imgcolstyle">
              <img
                
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
                  <h1>About</h1>
                </div>
                <div className="row">
                  <p>{About()}</p>
                </div>
              </div>
            </div>
          )}
          {view == "happening" && (
            <div className="layoutrow" id="happening">
              <div className="col-6">
                <div className="row">
                  <h1>Happenings</h1>
                </div>
                <div className="row">
                  <div id="layoutnoticewrap">
                    {notices &&
                      notices.length != 0 &&
                      notices.map(notice => {
                        if (notice.title != "") {
                          return (
                            <Notice
                              detail={notice.title}
                              time={notice.openDate}
                              attachments={notice.attachments}
                              key={notice.id}
                              attachments={notice.attachments}
                              imp={notice.important}
                              link={
                                notice.notice_link &&
                                JSON.parse(notice.notice_link).url
                                  ? JSON.parse(notice.notice_link).url
                                  : ""
                              }
                            />
                          )
                        }
                      })}
                  </div>
                </div>
              </div>
              <div className="col-6 imgcolstyle">
                <img src={pc} className="img-fluid" loading="lazy" />
              </div>
            </div>
          )}

          {view == "missionvision" && (
            <>
              <div className="layoutrow layoutrow1" id="mission">
                <div className="col-6 imgcolstyle">
                  <img src={mountain} className="img-fluid" loading="lazy" />
                </div>
                <div className="col-6">
                  <div className="row rowmarr3">
                    <h1>Mission</h1>
                  </div>
                  <div className="row rowmarr3">
                    <p>{Mission()}</p>
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
                  <img src={lens} className="img-fluid" loading="lazy" />
                </div>
              </div>
            </>
          )}
          {view == "contact" && (
            <div className="layoutrow layoutrow1" id="contact">
              <div className="col-6 imgcolstyle">
                <img src={map} className="img-fluid" loading="lazy" />
              </div>
              <div className="col-6">
                <div className="row rowmarr3">
                  <h1>Contact</h1>
                </div>
                <div className="row rowmarr3">
                  <p>{Contact()}</p>
                </div>
              </div>
            </div>
          )}

          {view == "labs" && (
            <div className="layoutrow layoutrow1 others">{Labs()}</div>
          )}
          {view == "achievements" && (
            <div className="layoutrow layoutrow1 others">{Achievements()}</div>
          )}
          {view == "activities" && (
            <div className="layoutrow layoutrow1 others">{Activities()}</div>
          )}
          {view == "others" && (
            <div className="layoutrow layoutrow1 others">{Extras()}</div>
          )}
        </>
      </div>
    </TabPage>
  )
}

export default Dephomepage
