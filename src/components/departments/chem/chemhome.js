import React from "react"
import main from "../img/main.png"
import pc from "../img/pc.svg"
import mountain from "../img/mountain.svg"
import map from "../img/map.svg"
import lens from "../img/lens.svg"
import "../css/home.css"
import Floatmenu from "../floatmenu"
import Depnotice from "../depnotice"
import axios from "axios"
class Chemhomepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notices: [],
    }
  }
  componentDidMount() {
    let noticesUrl = `http://beta.nitp.ac.in:3000/api/notice`
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
      <div className="depsection">
        <Floatmenu />
        <div className="dmainrow dmainrowmain">
          <div className="col-6">
            <div className="row">
              <h1 data-aos="zoom-in-right">Chemistry Department</h1>
            </div>
            <div className="row">
              <h2 data-aos="zoom-in-right">
                “The computer was born to solve problems that did not exist
                before.”
              </h2>
            </div>
            <div className="row">
              <h2 data-aos="zoom-in-right" id="aut">
                — Bill Gates
              </h2>
            </div>
          </div>
          <div className="col-6 imgcolstyle">
            <img src={main} className="img-fluid" loading="lazy" />
          </div>
        </div>
        <div className="dmainrow" id="about">
          <div className="depabout">
            <div className="row">
              <h1 data-aos="zoom-in">About</h1>
            </div>
            <div className="row">
              <p data-aos="zoom-in">
                The Chemistry department was established in 1924, at the same
                time the institute was founded. Until recently the department
                has been an auxiliary department with limited capacity, running
                a modest Ph.D. program and offering B. Tech. chemistry course to
                UG students. In the past 3-4 years the department has seen a lot
                of expansion, and with increasing faculty strength the number of
                UG courses offered to B. Tech students has increased. Also, the
                department's own teaching program, 5 year Integrated M.Sc. in
                Chemistry, has been started in the current academic year
                (2015-16), and research activity is gradually being expanded.
                The department has been and will remain committed to quality
                teaching and research with a conscious effort to achieve
                excellence.
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="dmainrow" id="happening">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Happenings</h1>
            </div>
            <div className="row rowmarl3">
              <div id="depnoticewrap">
                {this.state.notices.map(notice => {
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
                      <Depnotice
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
              <p data-aos="zoom-in-left">
                To develop and promote innovations in Education at all levels,
                and generate fundamental and applied knowledge by engaging in
                scientific research by adopting suitable steps.
                <br />
                <br />
                To promote academic growth by offering state-of-the-art
                education in undergraduate, postgraduate and doctoral
                programmes.
                <br />
                <br />
                To pursue quality research output by developing necessary and
                adequate research facilities and undertaking collaborative /
                sponsored research projects.
                <br />
                <br />
                Maintaining and enhancing the diversity of students, staff,
                faculty and curricula.
              </p>
            </div>
          </div>
        </div>
        <div className="dmainrow" id="vision">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Vision</h1>
            </div>
            <div className="row rowmarl3">
              <p data-aos="zoom-in-right">
                To serve the country through this institution by pursuing
                excellence in scientific and technical education and research.
                <br />
                <br />
                To make this department a center of excellence for cutting edge
                fundamental and applied research.
              </p>
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
              <p data-aos="zoom-in-left">
                Department of Chemistry,
                <br />
                <br />
                National Institute Of Technology Patna, Ashok Rajpath, Patna -
                800005.
                <br />
                <br />
                Email: head.ch@nitp.ac.in
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Chemhomepage
