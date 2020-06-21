import React from "react"
import acadscholar from "./academics/img/acadscholar.svg"
import mail from "./academics/img/mail.svg"
import paper from "./academics/img/paper.svg"
import test from "./academics/img/test.svg"
import "./academics/css/academics.css"
import Acadnotice from "./academics/acadnotice"

const Academicspage = () => {
  return (
    <div className="depsection">
      <div className="dmainrow dmainrowmain">
        <div className="col-6">
          <div className="row">
            <h1>Academics</h1>
          </div>
          <div className="row">
            <h2>
              “Education is not the learning of facts, but the training of minds
              to think”
            </h2>
          </div>
          <div className="row">
            <h2 id="aut">- Albert Einstein</h2>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img src={acadscholar} className="img-fluid" loading="lazy" />
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img src={test} className="img-fluid" loading="lazy" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Admissions</h1>
          </div>
          <div className="row rowmarr3">
            <div>
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
            </div>
          </div>
        </div>
      </div>
      <div className="dmainrow">
        <div className="col-6">
          <div className="row">
            <h1>Formats</h1>
          </div>
          <div className="row">
            <div>
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
            </div>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img src={paper} className="img-fluid" loading="lazy" />
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img src={mail} className="img-fluid" loading="lazy" />
        </div>
        <div className="col-6">
          <div className="row">
            <h1>Notice</h1>
          </div>
          <div className="row rowmarr3">
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Academicspage
