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
class Csehomepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notices: [],
    }
  }
  componentDidMount() {
    let noticesUrl = `${process.env.GATSBY_API_URL}/api/notice`
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
        <div className="dmainrow dmainrowmain" id="home">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Computer Science & Engineering</h1>
            </div>
            <div className="row rowmarl3">
              <h2 data-aos="zoom-in-right">
                “The computer was born to solve problems that did not exist
                before.”
              </h2>
            </div>
            <div className="row rowmarl3">
              <h2 data-aos="zoom-in-right" id="aut">
                — Bill Gates
              </h2>
            </div>
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
              <p data-aos="zoom-in">
                Computer Science and Engineering branch of NIT Patna offers
                courses leading to Bachelor of Technology in Computer Science
                and Engineering. The department has a very good infrastructure
                and faculty to provide excellent education.
                <br />
                <br />
                The curriculum is updated regularly to keep up with the growing
                demands and the changing trends of the software industry and
                research laboratories.
                <br />
                <br />
                The department provides a wide range of courses. The prominent
                among them includes Data Structures, Design and Analysis of
                Algorithms, System Programming, Computer Networks, Data Mining
                and Warehousing, Distributed and Parallel Computing, Mobile and
                Wireless Computing, Real-time Systems, Cryptography, Genetic
                Algorithm and Artificial Intelligence. Apart from these,
                students are also offered a wide variety of electives.
              </p>
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
                To formulate up-to-date and flexible technical programs which
                will allow our graduates to attain their maximum technical
                potential, managerial capability, be competitive in the job
                market and to emerge as a centre of excellence.
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
                To impart high quality of Under-graduate and Post-graduate
                education in all Computer related fields to increase the
                employability.
                <br />
                To develop world class professionals to meet the growing
                manpower demands and needs of the industry for economic
                development of the state and the country.
                <br />
                To conduct high standard technical research for betterment of
                the society.
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
                Department of Computer Science & Engg.,
                <br />
                National Institute Of Technology Patna,
                <br />
                Ashok Rajpath, Patna - 800005.
                <br />
                <br />
                Email: head.cs@nitp.ac.in
                <br />
                <br />
                Extn: +91-612-(2371715/2715/2371929/
                <br />
                2370419/2370843/2371930) 201
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Csehomepage
