import axios from "axios"
import React from "react"
import acadscholar from "./academics/img/acadscholar.svg"
import mail from "./academics/img/mail.svg"
import paper from "./academics/img/paper.svg"
import test from "./academics/img/test.svg"
import Floatmenu from "./academics/floatmenu"
import { PageLayout } from "./styles/pagelayout"
import Notice from "./home/notice"

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
      <PageLayout>
        <Floatmenu />
        <div className="layoutrow layoutrowmain" id="home">
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
        <div className="layoutrow layoutrow1" id="admission">
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
              <div id="layoutnoticewrap">
                {this.state.notices != undefined
                  ? this.state.notices.map(notice => {
                     
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
              <h1 data-aos="zoom-in-right">Formats</h1>
            </div>
            <div className="row rowmarl3">
              <div id="layoutnoticewrap">
                {this.state.notices != undefined
                  ? this.state.notices.map(notice => {
                     
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
            <img
              data-aos="zoom-in"
              src={paper}
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div className="layoutrow layoutrow1" id="notice">
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
              <div id="layoutnoticewrap">
                {this.state.notices != undefined
                  ? this.state.notices.map(notice => {
                     
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
    )
  }
}

export default Academicspage
