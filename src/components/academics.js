import React from "react"
import acadscholar from "./academics/img/acadscholar.svg"
import mail from "./academics/img/mail.svg"
import paper from "./academics/img/paper.svg"
import test from "./academics/img/test.svg"
import "./academics/css/academics.css"
import Acadnotice from "./academics/acadnotice"
import { Acadnoticeb } from "./academics/acadnotice"

const Academicspage = () => {
  return (
    <div className="acadsection">
      <div className="acmainrow acmainrowmain">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Academics</h1>
          </div>
          <div className="row rowmarl3">
            <h2 data-aos="zoom-in-right">
              “Education is not the learning of facts, but the training of minds
              to think”
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
      <div className="acmainrow acmainrow1">
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
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="22 June,2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="21 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="acmainrow">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Formats</h1>
          </div>
          <div className="row rowmarl3">
            <div id="acadnoticewrap">
              <Acadnotice
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="22 June,2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnotice
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="21 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnotice
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnotice
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnotice
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnotice
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
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
      <div className="acmainrow acmainrow1">
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
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="22 June,2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="21 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
              <Acadnoticeb
                detail="Online Next-Generation Semiconductor Devices for high-end applications"
                time="20 June 2020"
                url="http://www.nitp.ac.in/uploads/Online_FDP_Nextgen_Devices.pdf"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Academicspage
