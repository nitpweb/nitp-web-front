import React from "react"
import main from "../img/main.png"
import pc from "../img/pc.svg"
import mountain from "../img/mountain.svg"
import map from "../img/map.svg"
import lens from "../img/lens.svg"
import "../css/home.css"

const Chemhomepage = () => {
  return (
    <div className="depsection">
      <div className="dmainrow dmainrowmain">
        <div className="col-6">
          <div className="row">
            <h1>Chemistry Department</h1>
          </div>
          <div className="row">
            <h2>
              “The computer was born to solve problems that did not exist
              before.”
            </h2>
          </div>
          <div className="row">
            <h2 id="aut">— Bill Gates</h2>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img src={main} className="img-fluid" loading="lazy" />
        </div>
      </div>
      <div className="dmainrow">
        <div className="depabout">
          <div className="row">
            <h1>About</h1>
          </div>
          <div className="row">
            <h3>
              The Chemistry department was established in 1924, at the same time
              the institute was founded. Until recently the department has been
              an auxiliary department with limited capacity, running a modest
              Ph.D. program and offering B. Tech. chemistry course to UG
              students. In the past 3-4 years the department has seen a lot of
              expansion, and with increasing faculty strength the number of UG
              courses offered to B. Tech students has increased. Also, the
              department's own teaching program, 5 year Integrated M.Sc. in
              Chemistry, has been started in the current academic year
              (2015-16), and research activity is gradually being expanded. The
              department has been and will remain committed to quality teaching
              and research with a conscious effort to achieve excellence.
            </h3>
          </div>
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img src={mountain} className="img-fluid" loading="lazy" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Mission</h1>
          </div>
          <div className="row rowmarr3">
            <h3>
              To develop and promote innovations in Education at all levels, and
              generate fundamental and applied knowledge by engaging in
              scientific research by adopting suitable steps.
              <br />
              <br />
              To promote academic growth by offering state-of-the-art education
              in undergraduate, postgraduate and doctoral programmes.
              <br />
              <br />
              To pursue quality research output by developing necessary and
              adequate research facilities and undertaking collaborative /
              sponsored research projects.
              <br />
              <br />
              Maintaining and enhancing the diversity of students, staff,
              faculty and curricula.
            </h3>
          </div>
        </div>
      </div>
      <div className="dmainrow">
        <div className="col-6">
          <div className="row">
            <h1>Vision</h1>
          </div>
          <div className="row rowmarr3">
            <h3>
              {" "}
              To serve the country through this institution by pursuing
              excellence in scientific and technical education and research.
              <br />
              <br />
              To make this department a center of excellence for cutting edge
              fundamental and applied research.
            </h3>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img src={lens} className="img-fluid" loading="lazy" />
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img src={map} className="img-fluid" loading="lazy" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Contact</h1>
          </div>
          <div className="row rowmarr3">
            <h3>
              Department of Chemistry,
              <br />
              <br />
              National Institute Of Technology Patna, Ashok Rajpath, Patna -
              800005.
              <br />
              <br />
              Email: head.ch@nitp.ac.in
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chemhomepage
