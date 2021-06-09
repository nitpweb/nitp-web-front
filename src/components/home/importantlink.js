import React, { useEffect, useState } from "react"
import corona from "./img/corona.svg"
import nss from "./img/nss.svg"
import josaa from "./img/josaa.svg"
import teqip from "./img/teqip.svg"
import chanakya from "./img/chanakya.svg"
import firstyear from "./img/firstyear.svg"
import { ImportantLinkStyle } from "../styles/home/importantlink"

const Importantlink = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <ImportantLinkStyle
      style={{ transform: `translateY(${offsetY * -0.1}px)` }}
    >
      <div className="link-col">
        <a href="http://exam.nitp.ac.in/">
          <div className="implink">
            <img className="linkimg" src={chanakya} alt="chanakya" />
            <h3>CHANAKYA</h3>
            <div className="lead">
              <p>The student portal for all the needs of a student</p>
            </div>
          </div>
        </a>
        <a href="https://tcfnitp.tech/">
          <div className="implink">
            <img className="linkimg" src={corona} alt="corona" />
            <h3>CORONA</h3>
            <div className="lead">
              <p>
                The Annual Techno Cultutal Festivals oraganised by the students
              </p>
            </div>
          </div>
        </a>
        <a href="https://nss.gov.in/">
          <div className="implink">
            <img className="linkimg" src={nss} alt="nss" />
            <h3>NSS</h3>
            <div className="lead">
              <p>
                Aimed at developing student's personality through community
                service
              </p>
            </div>
          </div>
        </a>
        <a href="https://josaa.nic.in/webinfocms/Public/home.aspx">
          <div className="implink">
            <img className="linkimg" src={josaa} alt="josaa" />
            <h3>JOSAA</h3>
            <div className="lead">
              <p>
                A single platform for taking admission in various academic
                programs
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="link-col">
        {/* <a href="https://josaa.nic.in/webinfocms/Public/home.aspx">
          <div className="implink">
            <img className="linkimg" src={josaa} alt="josaa" />
            <h3>JOSAA</h3>
          </div>
        </a> */}
        <a href="https://www.teqip.in/">
          <div className="implink">
            <img className="linkimg" src={teqip} alt="teqip" />
            <h3>TEQIP</h3>
            <div className="lead">
              <p>
                A program to improve learning outcomes and employability of
                graduate
              </p>
            </div>
          </div>
        </a>
        <a href={/academics/}>
          <div className="implink">
            <img className="linkimg" src={firstyear} alt="chanakya" />
            <h3>Admissions</h3>
            <div className="lead">
              <p>
                For the newbies willing to take admission in upcoming sessions
              </p>
            </div>
          </div>
        </a>
      </div>
    </ImportantLinkStyle>
  )
}
export default Importantlink
