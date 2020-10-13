import React from "react"
import "./css/importantlink.css"
import corona from "./img/corona.svg"
import nss from "./img/nss.svg"
import josaa from "./img/josaa.svg"
import teqip from "./img/teqip.svg"
import chanakya from "./img/chanakya.svg"
import firstyear from "./img/firstyear.svg"

const Importantlink = () => {
  return (
    <div className="link-row">
      <div className="link-col">
        <a href="http://exam.nitp.ac.in/">
          <div data-aos="zoom-in" data-aos-duration="200" className="implink">
            <img className="linkimg" src={chanakya} alt="chanakya" />
            <h3>CHANAKYA</h3>
          </div>
        </a>
        <a href="https://tcfnitp.tech/">
          <div data-aos="zoom-in" data-aos-duration="200" className="implink">
            <img className="linkimg" src={corona} alt="corona" />
            <h3>CORONA</h3>
          </div>
        </a>
        <a href="https://nss.gov.in/">
          <div data-aos="zoom-in" data-aos-duration="200" className="implink">
            <img className="linkimg" src={nss} alt="nss" />
            <h3>NSS</h3>
          </div>
        </a>
      </div>
      <div className="link-col">
        <a href="https://josaa.nic.in/webinfocms/Public/home.aspx">
          <div data-aos="zoom-in" data-aos-duration="200" className="implink">
            <img className="linkimg" src={josaa} alt="josaa" />
            <h3>JOSAA</h3>
          </div>
        </a>
        <a href="https://www.teqip.in/">
          <div data-aos="zoom-in" data-aos-duration="200" className="implink">
            <img className="linkimg" src={teqip} alt="teqip" />
            <h3>TEQIP</h3>
          </div>
        </a>
        <a href="http://www.nitp.ac.in/uploads/Orientation_Programe_2018.pdf">
          <div data-aos="zoom-in" data-aos-duration="200" className="implink">
            <img className="linkimg" src={firstyear} alt="chanakya" />
            <h3>First Year</h3>
          </div>
        </a>
      </div>
    </div>
  )
}
export default Importantlink
