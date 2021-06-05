import axios from "axios"
import React from "react"
import acadscholar from "./academics/img/acadscholar.svg"
import mail from "./academics/img/mail.svg"
import paper from "./academics/img/paper.svg"
import test from "./academics/img/test.svg"
import "./academics/css/academics.css"
import Acadnotice from "./academics/acadnotice"
import { Acadnoticeb } from "./academics/acadnotice"
import Floatmenu from "./academics/floatmenu"

class Academicspage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notices: [],
    }
  }
  componentDidMount() {
    let noticesUrl = `${process.env.GATSBY_API_URL}/api/notice/all`
    axios
      .get(noticesUrl)
      .then(res => {
        const notice = res.data
        this.setState({ notices: notice })
      })
      .catch(e => {
        console.log(e)
      })
  }
  render() {
    return (
      <div className="acadsection">
        <Floatmenu />
        <div className="acmainrow acmainrowmain" id="home">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Academics</h1>
            </div>
            <div className="row rowmarl3">
              <h2 data-aos="zoom-in-right">
                “Education is not the learning of facts, but the training of
                minds to think”
              </h2>
            </div>
            <div className="row rowmarl3">
              <h2 data-aos="zoom-in-right" id="aut">
                - Albert Einstein
              </h2>
            </div>
          </div>
          <div className="col-6 imgcolstyle">
            <img
              data-aos="zoom-in"
              src={acadscholar}
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div className="acmainrow acmainrow1" id="admission">
          <div className="col-6 imgcolstyle">
            <img
              data-aos="zoom-in"
              src={test}
              className="img-fluid"
              loading="lazy"
            />
          </div>
          <div className="col-6">
            <div className="row rowmarr3">
              <h1 data-aos="zoom-in-left">Admissions</h1>
            </div>
            <div className="row rowmarr3">
              <div id="acadnoticewrap">
                {this.state.notices != undefined
                  ? this.state.notices.map(notice => {
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
                          <Acadnotice
                            detail={notice.title}
                            time={d}
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
        <div className="acmainrow" id="format">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Formats</h1>
            </div>
            <div className="row rowmarl3">
              <div id="acadnoticewrap">
                {this.state.notices != undefined
                  ? this.state.notices.map(notice => {
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
                          <Acadnoticeb
                            detail={notice.title}
                            time={d}
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
            <img
              data-aos="zoom-in"
              src={paper}
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div className="acmainrow acmainrow1" id="notice">
          <div className="col-6 imgcolstyle">
            <img
              data-aos="zoom-in"
              src={mail}
              className="img-fluid"
              loading="lazy"
            />
          </div>

          <div className="col-6 imgcolstyle">
            <div className="row rowmarr3">
              <h1 data-aos="zoom-in-left">Notice</h1>
            </div>
            <div className="row rowmarr3">
              <div id="acadnoticewrap">
                {this.state.notices != undefined
                  ? this.state.notices.map(notice => {
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
                          <Acadnotice
                            detail={notice.title}
                            time={d}
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
      </div>
    )
  }
}

export default Academicspage
