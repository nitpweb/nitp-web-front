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
class Eehomepage extends React.Component {
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
        <div className="dmainrow dmainrowmain" id="home">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Electrical Engineering</h1>
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
                The Department of Electrical Engineering was established in 1945
                under Patna University with an intake of 20 students leading to
                Bachelor of Science(Engineering) degree of four year
                duration.The four year course was later changed to five year
                integrated course in 1960 with intake of 30 students and it
                continued up to 1972. Again four year course was introduced in
                1972 with the same intake capacity of 30 students. The intake
                was increased from 30 to 40 students in 2005-06 sessions and
                further in 2006-07 the intake capacity has been increased to 60
                students.
                <br />
                <br />
                In the year 1978 AICTE approved Post Graduate (PG) course
                leading to M. Sc. (Engg) Degree in two specializations: (i)
                Power System Engineering and (ii) Control System Engineering
                with an intake capacity of 10 in each specialization.The intake
                in PG program was further increased to 18 students per
                specialization in 2004-05.The Microprocessor Laboratory and
                Power electronics laboratory were setup to meet the requirement
                of course curriculum and research activity.The advancement and
                application of electronics and microcomputer in the field of
                electrical engineering necessitated a major revision of the
                syllabus for the UG program in 1977. A course in Microprocessor
                was introduced along with many subjects in electronics leading
                to orientation required for the modem technology, such as Analog
                Electronics, Digital Electronics, Introduction to Communication
                and Digital Signal Processing.
                <br />
                <br />
                The Electrical Engineering department has well qualified
                faculty, majority of them are with Ph. D and M. Tech degree with
                specialization in the field of electrical power, control system
                and microcomputer based instrumentation & control. The
                department has well qualified panel of visiting faculty from
                academics and industry. They visit to the department at regular
                interval to deliver expert lectures and discuss recent trends in
                the field of Electrical Engg, Power system -generation,
                transmission and distribution, Thyristorised controlled
                electrical drives used in industry, microcomputer applications
                in instrumentation and control etc. In recent past, the faculty
                and students of the department have many publications in
                journals and conferences (Approx. Forty). Many books on
                different electrical engineering subjects have been authored by
                the faculties of the department. Till date the department has
                produces five Ph. Ds under Patna University. From 2009 Doctoral
                program started under NIT Act 2007 and students have been
                admitted and are continuing research.{" "}
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
            <div className="row rowmarr3 ">
              <h1 data-aos="zoom-in-left">Mission</h1>
            </div>
            <div className="row rowmarr3">
              <p data-aos="zoom-in-left">
                To create and maintain a sustainable development in
                infrastructure, academic environment human resources and
                governance.
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
                <br />
                To offer quality education for Under-Graduate, Post-Graduate and
                Doctoral programmes in electrical engineering.
                <br />
                To provide educational experiences which are stimulating and in
                accordance with the needs of the century.
                <br />
                To promote technical manpower through educative exposures like
                short term courses, workshops, seminars, interactive
                communication, etc. and thus facilitating students for
                leadership in profession and society.
                <br />
                To inculcate state-of-the-art infrastructural facilities in the
                arena of research and development and to promote Industry
                interaction.
                <br />
                To bridge the gap between industry and academia by framing
                curricula and syllabi based on industrial and societal needs so
                that students are well equipped to meet the challenges in
                education, profession and life
                <br />
                To instill moral and ethical values among the faculty and
                students
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
                Department of Electronics & Communications Engg.,
                <br />
                <br />
                National Institute Of Technology Patna,
                <br />
                Ashok Rajpath, Patna - 800005.
                <br />
                <br />
                Email: head.ec@nitp.ac.in
                <br />
                <br />
                Extn: +91-612-(2371715/2715/2371929/
                <br />
                2370419/2370843/2371930) * 177
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Eehomepage
