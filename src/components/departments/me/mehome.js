import React from "react"
import main from "../img/main.png"
import mountain from "../img/mountain.svg"
import map from "../img/map.svg"
import lens from "../img/lens.svg"
import "../css/home.css"
import Floatmenu from "../floatmenu"
import Depnotice from "../depnotice"
import axios from "axios"
import pc from "../img/pc.svg"

class Mehomepage extends React.Component {
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
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Mechanical Engineering</h1>
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
                Bihar College of Engineering (BCE) was established in 1924 and
                it is the sixth oldest Engineering College in India. The
                Department of Mechanical Engineering was established in 1952 and
                the M.Tech Program was started in 1978. BCE was converted to
                National Institute of Technology Patna in 2004 Initially B.Tech.
                Program in Mechanical Engineering started with intake of 20,
                which has now become 125. Presently, the department is also
                having PhD programmes with total of more than 100 students.{" "}
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
                To provide a high-quality educational experience for
                undergraduate and graduate students that enables them to become
                leaders in their chosen professions and to make them globally
                competitive mechanical engineers.
                <br />
                To create, explore, and develop innovations in engineering and
                science through undergraduate and graduate research. To develop
                linkages with world class R&D organizations and educational
                institutions in India and abroad for excellence in teaching,
                research and consultancy practices.
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
                To contribute to the society through excellence in scientific
                and technical education and research
                <br />
                <br />
                To contribute the country by providing globally competent
                Mechanical Engineers capable of working in an inter-disciplinary
                environment which foster spirits of innovation, entrepreneurship
                and leadership.
                <br />
                <br />
                To support industry for growth, being the valuable resource for
                them, and remain a role model for others in the field of
                Mechanical Engineering.
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
                Department of Mechanical Engg.,
                <br />
                <br />
                National Institute Of Technology Patna,
                <br />
                Ashok Rajpath, Patna - 800005.
                <br />
                Email: head.me@nitp.ac.in
                <br />
                <br />
                Extn: +91-612-(2371715/2715/2371929/
                <br />
                2370419/2370843/2371930) * 441
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Mehomepage
