import React, { useEffect, useState } from "react"
import notice from "./img/notice.png"
import event from "./img/event.png"
import news from "./img/news.png"
import innovation from "./img/innovation.png"
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
        <a href="#notice">
          <div className="implink">
            <img className="linkimg" src={notice} alt="corona" />
            <h3>NOTICE</h3>
            <div className="lead">
              <p>
                Collection of important notices
              </p>
            </div>
          </div>
        </a>
        <a href="#events">
          <div className="implink">
            <img className="linkimg" src={event} alt="nss" />
            <h3>EVENT</h3>
            <div className="lead">
              <p>
                List of upcoming events
              </p>
            </div>
          </div>
        </a>
        <a href="#one">
          <div className="implink">
            <img className="linkimg" src={innovation} alt="teqip" />
            <h3>Innovation</h3>
            <div className="lead">
              <p>
                Information of all the innovations
              </p>
            </div>
          </div>
        </a>
        <a href="#news">
          <div className="implink">
            <img className="linkimg" src={news} alt="josaa" />
            <h3>NEWS</h3>
            <div className="lead">
              <p>
              panorama of recent news
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

        <a href="http://exam.nitp.ac.in/">
          <div className="implink">
            <img className="linkimg" src={chanakya} alt="chanakya" />
            <h3>CHANAKYA</h3>
            <div className="lead">
              <p>The student portal for all the needs of a student</p>
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
