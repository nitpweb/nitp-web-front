import React, { useEffect, useState } from "react"
import notice from "./img/notice.png"
import { Link } from "gatsby"
import event from "./img/event.png"
import news from "./img/news.png"
import airplane from "./img/airplane.png"
import chanakya from "./img/chanakya.svg"
import firstyear from "./img/firstyear.svg"
import startup from "./img/startup.svg"
import highlight from "./img/highlight.svg"
import magazine from "./img/magazine.svg"
import alumni from "./img/alumni.svg"
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
  <ImportantLinkStyle style={{ transform: `translateY(${offsetY * -0.05}px)` }}>
   <div className="link-col">
    {/* <a href="#notice">
          <div className="implink">
            <img className="linkimg" src={notice} alt="corona" />
            <h3>NOTICE</h3>

          </div>
        </a> */}
    {/* <a href="#events">
          <div className="implink">
            <img className="linkimg" src={event} alt="nss" />
            <h3>EVENT</h3>
            
          </div>
        </a> */}
    {/* <a href=" ">
          <div className="implink">
            <img className="linkimg" src={notice} alt="teqip" />
            <h3>LATEST EVENTS</h3>
      
          </div>
        </a> */}
    <a href="https://alumini-nitp.vercel.app/">
     <div className="implink">
      <img className="linkimg" src={alumni} alt="alumni" />
      <h3>ALUMNI</h3>
     </div>
    </a>
    <a href="/internationalAffairs">
     <div className="implink">
      <img className="linkimg" src={airplane} alt="teqip" />
      {/* <Link
       href="/internationalAffairs"
       style={{ fontSize: "0.7rem", paddingBottom: "5px" }}
      > */}
      <h3>INTL . AFFAIRS</h3>
      {/* </Link> */}
      {/* <div className="lead">
              <p>Information of all the innovations</p>
            </div> */}
     </div>
    </a>
    <a href="https://www.nitp.ac.in/jobsnitp">
     <div className="implink">
      <img className="linkimg" src={highlight} alt="josaa" />
      <h3>RECRUITMENT</h3>
      {/* <div className="lead">
              <p>panorama of recent news</p>
            </div> */}
     </div>
    </a>{" "}
    {/* <a href="http://exam.nitp.ac.in/">
          <div className="implink">
            <img className="linkimg" src={chanakya} alt="Academic Portal" />
            <h3>Academic Portal</h3>
            
          </div>
        </a> */}
    {/* <a href="http://www.nitp.ac.in/php/incubation_center/index.html">
          <div className="implink">
            <img className="linkimg" src={startup} alt="teqip" />
            <h3>STARTUPS</h3>
      
          </div>
        </a> */}
    <a href={/academics/}>
     <div className="implink">
      <img className="linkimg" src={firstyear} alt="admissions" />
      <h3>ADMISSIONS</h3>
      {/* <div className="lead">
              <p>
                For the newbies willing to take admission in upcoming sessions
              </p>
            </div> */}
     </div>
    </a>
    <a href="/magazine">
     <div className="implink">
      <img className="linkimg" src={magazine} alt="magazine" />
      <h3>MAGAZINE</h3>
     </div>
    </a>
   </div>
   {/* <div className="link-col">
        <a href="https://josaa.nic.in/webinfocms/Public/home.aspx">
          <div className="implink">
            <img className="linkimg" src={josaa} alt="josaa" />
            <h3>JOSAA</h3>
          </div>
        </a>
      </div> */}
  </ImportantLinkStyle>
 )
}
export default Importantlink
