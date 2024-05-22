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
      <br /> Phone: +91-0612-237 2715
      <br />
      FAX : +91-0612-2660480
      <br />
      Academic section: acad.help@nitp.ac.in
      <br />
      Exam department: exam.help@nitp.ac.in
      <br />
      Mis section: mis.help@nitp.ac.in
      <br />
     </h3>
     <div className="social-link">
      <span>
       <a
        href="https://www.facebook.com/story.php?story_fbid=704954328428607&id=100067421393593&mibextid=K8Wfd2"
        target="_blank"
       >
        <img src="/facebook.png" alt="facebook" />
       </a>
      </span>
      <span>
       <a
        href="https://twitter.com/nitpatna1/status/1749690769500430475?s=48"
        target="_blank"
       >
        <img src="/twitter.svg" alt="twitter" />
       </a>
      </span>
      <span>
       <a
        href="https://www.linkedin.com/school/national-institute-of-technology-patna/"
        target="_blank"
       >
        <img src="/linkedin.svg" alt="linkedin" />
       </a>
      </span>
      <span>
       <a href="https://goo.gl/maps/srZ6whpfDGqg85sp6" target="_blank">
        <img src="/location.png" alt="location" />
       </a>
      </span>
     </div>
    </div>
    <div className="foot-col-8">
     <div className="footsec">
      <div className="foot-col-3">
       <h1>Know Us</h1>
       <Link to="/administration?tab=director">
        <h3>Director’s Desk</h3>
       </Link>

       <Link to="/nirf">
        <h3>NIRF</h3>
       </Link>
       <Link to="/RTI" target="_blank">
        <h3>RTI</h3>
       </Link>
       <Link to="/newcampus" target="_blank">
        <h3>New Campus</h3>
       </Link>
       <a
        href="http://www.nitp.ac.in/uploads/ORG_CHART_NITP.pdf"
        target="_blank"
       >
        <h3>Organization Chart</h3>
       </a>
       <Link to="/webteam">
        <h3>Web Team</h3>
       </Link>
      </div>
      <div className="foot-col-3">
       <h1>Other Links</h1>
       <Link to="/bwcminutes">
        <h3>BOG/FC/BWC Minutes</h3>
       </Link>
       <Link to="/senateminutes">
        <h3>Senate Minutes</h3>
       </Link>
       <Link to="/acadnotice">
        <h3>Academics Notice</h3>
       </Link>
       {/* <a
        href="http://www.nitp.ac.in/php/downloads/Grievance%20Cell%20Constituted%20by%20Council%20of%20NITs.pdf"
        target="_blank"
       > */}
       <Link to="/grievance">
        <h3>SC/ST Grievance Cell</h3>
       </Link>
       <Link to="/nit_act">
        <h3>NIT Act and Statutes</h3>
       </Link>

       {/* <a href="http://www.nitp.ac.in/convocation2020/">
                <h3>Convocation 2020</h3>
              </a> */}

       <a href="/convocation">
        <h3>Convocation 2021</h3>
       </a>
       <Link to="https://drive.google.com/file/d/1EdgaqKGB0zlB1LUmypjpnV9QAkXmpjBu/view">
        <h3>Sexual Harassment of Women at Work place</h3>
       </Link>
      </div>
     </div>

     <div className="footsec">
      <div className="foot-col-3">
       <h1>Extra Links</h1>
       <Link to="/magazine">
        <h3>Magazine (Vol. 4)</h3>
       </Link>
       <a href="http://www.nitp.ac.in/php/img/digitalmap.jpg" target="_blank">
        <h3>Digital Map of NITP</h3>
       </a>
       <a href="http://www.nitp.ac.in/php/privacy.php" target="_blank">
        <h3>Privacy Policy</h3>
       </a>
       <Link to="/terms">
        <h3>Terms of Use</h3>
       </Link>
       <Link to="/annualreports">
        <h3>Annual Reports</h3>
       </Link>
       <Link to="/sitemap">
        <h3>Site Map</h3>
       </Link>
      </div>
      <div className="foot-col-3">
       <h1>Useful Links</h1>
       <a
        href="https://www.google.com/maps/place/National+Institute+of+Technology+Patna/@25.6207241,85.170702,17z/data=!3m1!4b1!4m5!3m4!1s0x39ed58dce6732867:0x4059f39a1ac82f06!8m2!3d25.6207241!4d85.1728907"
        target="_blank"
       >
        <h3>How to Reach</h3>
       </a>
       <a
        href="http://www.nitp.ac.in/uploads/Anti-ragging_Committee_2019.pdf"
        target="_blank"
       >
        <h3>Anti Ragging</h3>
       </a>
       <a href="https://web.nitp.ac.in/ict/" target="_blank">
        <h3>ICT Academy</h3>
       </a>
       <a href="/students?tab=nss">
        <h3>National Service Scheme</h3>
       </a>

       <Link to="/tenders">Tenders</Link>
       <a
        // href="https://web.nitp.ac.in/uploads22/Academic_cal._Even_2022_23.pdf"
        href="https://drive.google.com/file/d/1tVgQSygS8GRTZIglbVWVClasegdd6BCi/view?usp=sharing"
        target="_blank"
       >
        <h3>Academic Calendar</h3>
       </a>
      </div>
     </div>
    </div>
   </div>
   <div className="footdetail">
    <p>
     National Institute of Technology Patna-800005, Bihar, INDIA ©
     {new Date().getFullYear()} NIT Patna
    </p>
   </div>
  </FooterStyle>
 )
}
export default Footer
