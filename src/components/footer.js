import React from "react"
import { Link } from "gatsby"
import { FooterStyle } from "./styles/footer"
const Footer = () => {
  return (
    <FooterStyle>
      <div className="foot-row">
        <div className="foot-col-4">
          <h1>Contact Us</h1>
          <h3>
            National Institute of Technology Patna
            <br /> Patna, Bihar (800005), India
            <br /> Phone: +91-0612-237 1715 / 237 2715
            <br />
            FAX : +91-0612-2670631 , 0612-2660480
          </h3>
        </div>
        <div className="foot-col-8">
          <div className="footsec">
            <div className="foot-col-3">
              <h1>Know Us</h1>
              <Link to="/director">
                <h3>Director’s Desk</h3>
              </Link>
              <a href="http://www.nitp.ac.in/php/howtoreach.php">
                <h3>How to Reach</h3>
              </a>
              <a href="http://www.nitp.ac.in/php/NIRF.php">
                <h3>NIRF</h3>
              </a>
              <a href="http://www.nitp.ac.in/php/rti.php">
                <h3>RTI</h3>
              </a>
              <a href="http://www.nitp.ac.in/uploads/ORG_CHART_NITP.pdf">
                <h3>Organization Chart</h3>
              </a>
            </div>
            <div className="foot-col-3">
              <h1>Important Links</h1>
              {/* <a href="http://www.nitp.ac.in/php/officeorder.php">
                <h3>BOG/FC/BWC Minutes</h3>
              </a> */}
              {/* <a href="http://www.nitp.ac.in/php/senatemins.php">
                <h3>Senate Minutes</h3>
              </a> */}
              <Link to="/acadnotice">
                <h3>Academics Notice</h3>
              </Link>
              <a href="http://www.nitp.ac.in/php/downloads/Grievance%20Cell%20Constituted%20by%20Council%20of%20NITs.pdf">
                <h3>Grievance Cell</h3>
              </a>
              <a href="http://www.nitp.ac.in/downloads/NIT_Act/Amendments_First_Statutes.pdf">
                <h3>NIT Act and Statutes</h3>
              </a>
              {/* <a href="http://www.nitp.ac.in/php/staffclaim_form.php">
                <h3>Staff Claim Form</h3>
              </a> */}
              <a href="http://beta.nitp.ac.in:81">
                <h3>Faculty Login</h3>
              </a>
              <Link to="/webteam">
                <h3>Web Team</h3>
              </Link>
              <a href="http://www.nitp.ac.in/uploads/Anti-ragging_Committee_2019.pdf">
                <h3>Anti Ragging</h3>
              </a>
              <a href="http://www.nitp.ac.in/convocation2020/">
                <h3>Convocation 2020</h3>
              </a>
            </div>
          </div>

          <div className="footsec">
            <div className="foot-col-3">
              <h1>Extra Links</h1>
              <a href="http://www.nitp.ac.in/php/img/digitalmap.jpg">
                <h3>Digital Map of NITP</h3>
              </a>
              <a href="http://www.nitp.ac.in/php/privacy.php">
                <h3>Privacy Policy</h3>
              </a>{" "}
              <a href="http://www.nitp.ac.in/uploads20/Pratibimb/NIT%20Patna%20E-Magazine.pdf">
                <h3>Magazine (Pratibimb)</h3>
              </a>{" "}
              <a href="http://corona.nitp.ac.in/Corona16/index.php">
                <h3>CORONA</h3>
              </a>
              {/* <a href="http://www.nitp.ac.in/php/refund-policy.php">
              <h3>Refund Rules</h3>
            </a> */}
              <Link to="/terms">
                <h3>Terms of Use</h3>
              </Link>
              <a href="http://www.nitp.ac.in/downloads/annual_report/Annual%20Report%20Hindi.pdf">
                <h3>Annual Reports</h3>
              </a>
            </div>
            <div className="foot-col-3">
              <h1>Useful Links</h1>

              <a href="">
                <h3>Admissions</h3>
              </a>
              <a href="http://www.nitp.ac.in/ict/index.php">
                <h3>ICT Academy</h3>
              </a>

              <a href="">
                <h3>TEQUIP</h3>
              </a>

              <a href="http://www.nitp.ac.in/php/incubation_center/index.html">
                <h3>Incubation Center</h3>
              </a>
              <a href="">
                <h3>National Service Scheme</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footdetail">
        <p>
          National Institute of Technology Patna-800005,Bihar,INDIA© 2021 NIT
          Patna
        </p>
      </div>
    </FooterStyle>
  )
}
export default Footer
