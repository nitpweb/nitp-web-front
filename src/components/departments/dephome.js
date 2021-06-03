import React, { useEffect, useState } from "react"
import main from "./img/main.png"
import pc from "./img/pc.svg"
import mountain from "./img/mountain.svg"
import map from "./img/map.svg"
import lens from "./img/lens.svg"
import "./css/home.css"
import Floatmenu from "./floatmenu"
import axios from "axios"
import Notice from "../home/notice"
const Dephomepage = ({
  routeName,
  title,
  TitleDescription,
  About,
  Mission,
  Vision,
  Contact,
}) => {
  const [notices, setnotices] = useState()
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
    <div className="depsection">
      <Floatmenu />
      <div className="dmainrow dmainrowmain" id="home">
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
      </div>
      <div className="dmainrow" id="about">
        <div className="depabout">
          <div className="row">
            <h1 data-aos="zoom-in">About</h1>
          </div>
          <div className="row">
            <p data-aos="zoom-in">{About()}</p>
          </div>
        </div>
      </div>
      <div className="dmainrow" id="happening">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Happenings</h1>
          </div>
          <div className="row rowmarl3">
            <div id="depnoticewrap">
              {notices &&
                notices.length != 0 &&
                notices.map(notice => {
                  const newtime = new Date().getTime()

                  let d = Math.round((newtime - notice.timestamp) / 3600000)
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

      <div className="dmainrow dmainrow1" id="mission">
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
            <h1 data-aos="zoom-in-left">Mission</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">{Mission()}</p>
          </div>
        </div>
      </div>
      <div className="dmainrow" id="vision">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Vision</h1>
          </div>
          <div className="row rowmarl3">
            <p data-aos="zoom-in-right">{Vision()}</p>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={lens}
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      <div className="dmainrow dmainrow1" id="contact">
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
    </div>
  )
}

export default Dephomepage
