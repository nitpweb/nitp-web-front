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
class Cehomepage extends React.Component {
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
              <h1 data-aos="zoom-in-right">Civil Engineering</h1>
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
            <img
              data-aos="zoom-in"
              src={main}
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div className="dmainrow dmainrow1" id="about">
          <div className="depabout">
            <div className="row">
              <h1 data-aos="zoom-in">About</h1>
            </div>
            <div className="row">
              <p data-aos="zoom-in">
                The Department of Civil Engineering is the oldest and vibrant
                department of the institute, which was established along with
                the inception of the Institute in the year 1924. The Institute
                was formerly known as the Bihar College of Engineering Patna, a
                constituent engineering college under Patna University, until
                27thJan 2004. It was rechristened to National Institute of
                Technology Patna on 28th Jan 2004 as an Autonomous Institute
                under MHRD, Govt. of India.
                <br />
                <br />
                The Department of Civil Engineering is committed to provide
                quality teaching and research opportunities toits undergraduate,
                postgraduate and doctoral students. Apart from UG programme, the
                department also offers M. Tech and Doctoralprogrammes in the
                areas of Structural Engineering, Transportation Engineering,
                Water Resource Engineering,Environmental Engineering and
                Geotechnical Engineering. The intake strength of the Civil
                Engineering Department is 92 for undergraduate (BTech)and
                112forpostgraduate (MTech). Presently, 25 PhD scholars are
                enrolled with the department for pursuing their doctoral
                researchprogram.The teaching and education is directed towards
                their successful career in International and National
                Industries/ Institutions, Public and Private sectors,and enable
                them to qualify various competitive examinations such as IES,
                IAS, GATE examinations etc.
                <br />
                <br />
                The Department is actively involved in international and
                national research projects, and high valued consultancy works
                for the Government, Private Sector and Industries.The department
                also offers its expertise in various consultancy works and
                research projects fordifferent industries and organisations in
                the locale. The Department supports in upbringing of society and
                other educational institutes by providing training, workshops,
                technology transfer, capacity building, and awareness programs.
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
                To serve by producing excellent engineers, innovators,
                entrepreneurs and academicians for the growth of the industry
                and the society.
                <br />
                To develop sense of competitiveness, self-confidence, sincerity,
                punctuality and ethical values among students.
                <br />
                To undertake innovative collaborative projects with industries,
                government agencies and other organisations to cater the needs
                of society and solve real field problems.
                <br />
                To develop research and teaching potential to the fullest
                extent.
                <br />
                To remain a role model in the field of Civil Engineering.
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="dmainrow" id="vision">
          <div className="col-6">
            <div className="row rowmarl3">
              <h1 data-aos="zoom-in-right">Vision</h1>
            </div>
            <div className="row rowmarl3">
              <p data-aos="zoom-in-right">
                To serve the Nation and the world, through excellence education
                and advanced research in all the streams of Civil Engineering.
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
                Department of Civil Engg.,
                <br />
                <br />
                National Institute Of Technology Patna,
                <br />
                Ashok Rajpath, Patna - 800005.
                <br />
                <br />
                Email: head.ce@nitp.ac.in
                <br />
                <br />
                Extn: +91-612-(2371715/2715/2371929/
                <br />
                2370419/2370843/2371930) * 126
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cehomepage
