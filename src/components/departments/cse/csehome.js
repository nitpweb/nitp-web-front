import React from "react"
import main from "../img/main.png"
import pc from "../img/pc.svg"
import mountain from "../img/mountain.svg"
import map from "../img/map.svg"
import lens from "../img/lens.svg"
import "../css/home.css"

const Csehomepage = () => {
  return (
    <div className="depsection">
      <div className="dmainrow dmainrowmain">
        <div className="col-6">
          <div className="row">
            <h1>Computer Science & Engineering</h1>
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
          <img src={main} className="img-fluid" />
        </div>
      </div>
      <div className="dmainrow">
        <div className="depabout">
          <div className="row">
            <h1>About</h1>
          </div>
          <div className="row">
            <h3>
              Computer Science and Engineering branch of NIT Patna offers
              courses leading to Bachelor of Technology in Computer Science and
              Engineering. The department has a very good infrastructure and
              faculty to provide excellent education.
              <br />
              <br />
              The curriculum is updated regularly to keep up with the growing
              demands and the changing trends of the software industry and
              research laboratories.
              <br />
              <br />
              The department provides a wide range of courses. The prominent
              among them includes Data Structures, Design and Analysis of
              Algorithms, System Programming, Computer Networks, Data Mining and
              Warehousing, Distributed and Parallel Computing, Mobile and
              Wireless Computing, Real-time Systems, Cryptography, Genetic
              Algorithm and Artificial Intelligence. Apart from these, students
              are also offered a wide variety of electives.
            </h3>
          </div>
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img src={mountain} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Mission</h1>
          </div>
          <div className="row rowmarr3">
            <h3>
              To formulate up-to-date and flexible technical programs which will
              allow our graduates to attain their maximum technical potential,
              managerial capability, be competitive in the job market and to
              emerge as a centre of excellence.
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
              To impart high quality of Under-graduate and Post-graduate
              education in all Computer related fields to increase the
              employability.
              <br />
              To develop world class professionals to meet the growing manpower
              demands and needs of the industry for economic development of the
              state and the country.
              <br />
              To conduct high standard technical research for betterment of the
              society.
            </h3>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img src={lens} className="img-fluid" />
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img src={map} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Contact</h1>
          </div>
          <div className="row rowmarr3">
            <h3>
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
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Csehomepage
