import React from "react"
import "./global/css/navbar.css"
import "./global/css/dropdown.css"
import logo from "./global/img/logo512.png"
import toggle from "../assets/toggle.svg"
import { window } from "ssr-window"
import { Link } from "gatsby"
import Deplist from "./global/deplist"
import acadicon from "./global/sideicons/acad.svg"
import administrationicon from "./global/sideicons/administration.svg"
import abouticon from "./global/sideicons/bulb.svg"
import facilityicon from "./global/sideicons/facility.svg"
import homeicon from "./global/sideicons/home.svg"
import studenticon from "./global/sideicons/student.svg"
import placementicon from "./global/sideicons/placements.svg"
import sidedropicon from "./home/img/dropdown.svg"

const Depnavbar = () => {
  const pathname = window.location.pathname.split("/")[1]
  window.onscroll = function () {
    scrollF()
  }
  function scrollF() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".nav-col>h2").style.lineHeight = "0.2rem"
      document.querySelector(".nav-col>h4").style.lineHeight = "0.2rem"
      document.querySelector(".nav-link-row").style.backgroundColor = "black"
      document.querySelector(".nav-link-row").style.marginTop = "4vw"
      document.querySelector(".dep-nav-row").style.marginTop = "6.3vw"
      document.querySelector(".logobadge>h4").style.display = "none"
      document.querySelector(".logobadge>div>img").style.maxHeight = "5vw"
      document.querySelector(".logobadge>div>img").style.borderWidth = "0px"
      document.querySelector(".logobadge").style.backgroundColor = "transparent"
      document.querySelector(".logobadge>div>img").style.marginTop = "1.5vw"
      document.querySelector(".logobadge").style.paddingLeft = "0"
      document.querySelector(".mobilelogo>img").style.maxHeight = "5vh"
      document.querySelector(".logobadge").style.transition = "1s"
      document.querySelector(".logobadge>h4").style.transition = "1s"
      document.querySelector(".logobadge>div>img").style.transition = "1s"
      document.querySelector(".mobilelogo>img").style.transition = "1s"
      document.querySelector(".nav-link-row").style.opacity = "1"
      document.querySelector(".nav-col").style.paddingTop = "0.2vw"
    } else {
      document.querySelector(".nav-col>h2").style.lineHeight = "0.3rem"
      document.querySelector(".nav-col>h4").style.lineHeight = "0.3rem"
      document.querySelector(".nav-link-row").style.backgroundColor = "black"
      document.querySelector(".nav-link-row").style.marginTop = "4.7vw"
      document.querySelector(".dep-nav-row").style.marginTop = "7vw"
      document.querySelector(".logobadge>h4").style.display = "flex"
      document.querySelector(".logobadge>div>img").style.maxHeight = "8vw"
      document.querySelector(".logobadge>div>img").style.borderWidth = "0.5vw"
      document.querySelector(".logobadge").style.backgroundColor = "#E47F40"
      document.querySelector(".logobadge>div>img").style.marginTop = "0px"
      document.querySelector(".logobadge").style.paddingLeft = "0"
      document.querySelector(".mobilelogo>img").style.maxHeight = "7vh"
      document.querySelector(".logobadge").style.transition = "1s"
      document.querySelector(".logobadge>h4").style.transition = "1s"
      document.querySelector(".logobadge>div>img").style.transition = "1s"
      document.querySelector(".mobilelogo>img").style.transition = "1s"
      document.querySelector(".nav-link-row").style.opacity = "0.8"
      document.querySelector(".nav-col").style.paddingTop = "0.5vw"
    }
  }
  return (
    <>
      <div className="nav-row">
        <Link className="mobilelogo" data-aos="zoom-in" to="/">
          <img src={logo} alt="NIT PATNA" />
        </Link>
        <div className="nav-col">
          <h2>NATIONAL INSTITUTE OF TECHNOLOGY PATNA</h2>
          <h4>राष्ट्रीय प्रौद्योगिकी संस्थान, पटना</h4>
        </div>

        <div className="nav-link-row">
          <Link
            className="nav-link-item nav-link-div"
            activeClassName="nav-link-item-active"
            to="/"
          >
            <span>Home</span>
          </Link>
          <Link
            className="nav-link-item nav-link-div"
            activeClassName="nav-link-item-active"
            to="/about"
          >
            <span>About Us</span>
          </Link>
          <Link
            className="nav-link-item nav-link-div"
            activeClassName="nav-link-item-active"
            to="/administration"
          >
            <span>Administration</span>
          </Link>
          <Link
            className="nav-link-item nav-link-div"
            activeClassName="nav-link-item-active"
            to="/academics"
          >
            <span>Academics</span>
          </Link>
          <div id="navblank"></div>
          <div className="dropdown nav-link-div">
            <button className="dropbtn nav-link-div nav-link-item">
              Departments
            </button>
            <div className="dropdown-content">
              <Link className="nav-link-item" to="/csehome">
                <span>Computer Science and Engineering</span>
              </Link>
              <Link className="nav-link-item" to="/ecehome">
                <span>Electronics and Communication Engineering</span>
              </Link>
              <Link className="nav-link-item" to="/eehome">
                <span>Electrical Engineering</span>
              </Link>
              <Link className="nav-link-item" to="/mehome">
                <span>Mechanical Engineering</span>
              </Link>
              <Link className="nav-link-item" to="/cehome">
                <span>Civil Engineering</span>
              </Link>
              <Link className="nav-link-item" to="/hsshome">
                <span>Humanities & Social Sciences</span>
              </Link>
              <Link className="nav-link-item" to="/archhome">
                <span>Architecture</span>
              </Link>
              <Link className="nav-link-item" to="/physicshome">
                <span>Physics</span>
              </Link>
              <Link className="nav-link-item" to="/chemhome">
                <span>Chemistry</span>
              </Link>
              <Link className="nav-link-item" to="/mathhome">
                <span>Mathematics</span>
              </Link>
            </div>
          </div>
          <Link
            className="nav-link-item nav-link-div"
            activeClassName="nav-link-item-active"
            to="/facilities"
          >
            <span>Facilities</span>
          </Link>
          <Link
            className="nav-link-item nav-link-div"
            activeClassName="nav-link-item-active"
            to="/student/"
          >
            <span>Students</span>
          </Link>
          <Link
            className="nav-link-item nav-link-div"
            activeClassName="nav-link-item-active"
            to="/placements"
          >
            <span>Placements</span>
          </Link>
        </div>
        <div className="dep-nav-row">
          <div className="dep-nav-col">{Deplist[pathname]}</div>
          <div style={{ width: `30%` }}></div>
          <div className="dep-nav-col-2">
            <Link to={`/${pathname}/syllabus`} className="dep-link-item">
              Syllabus
            </Link>
          </div>
          <div className="dep-nav-col">
            <Link to={`/${pathname}/faculty`} className="dep-link-item">
              Faculty
            </Link>
          </div>
        </div>

        <Link id="logowr1" to="/">
          <div className="logobadge" data-aos="fade-down">
            <h4>श्रमोऽनवरत चेष्टाय</h4>
            <div id="logowr2">
              <img src={logo} alt="NIT PATNA" />
            </div>
          </div>
        </Link>
        <span
          className="nav-toggle"
          onClick={function () {
            var x = document.querySelector(".nav-sidebar")
            if (x.style.display === "none") {
              x.style.display = "block"
            } else {
              x.style.display = "none"
            }
          }}
        >
          <img data-aos="zoom-in" src={toggle} alt="menu" />
        </span>
        <div className="nav-sidebar">
          <div className="navsidetop">
            <Link className="navsidetop" to="/">
              <img src={logo} alt="logo" />
              <p>{Deplist[pathname]}</p>
            </Link>
          </div>
          <div>
            <div className="navsideicondiv">
              <div className="navsideicondiv">
                <img src={homeicon} alt="" />
              </div>
            </div>
            <span
              className="navsidedepart"
              onClick={function () {
                var z = document.querySelector("#maindropwrap")
                if (z.style.display === "none") {
                  z.style.display = "block"
                } else {
                  z.style.display = "none"
                }
              }}
            >
              <span className="nav-side-link">Main Menu</span>
            </span>
          </div>
          <div id="maindropwrap" className="mainsidedrop">
            <div>
              <div className="navsideicondiv">
                <img src={abouticon} alt="" />
              </div>
              <Link className="nav-side-link" to="/about">
                About Us
              </Link>
            </div>
            <div>
              <div className="navsideicondiv">
                <img src={administrationicon} alt="" />
              </div>
              <Link className="nav-side-link" to="/administration">
                Administration
              </Link>
            </div>
            <div>
              <div className="navsideicondiv">
                <img src={acadicon} alt="" />
              </div>
              <Link className="nav-side-link" to="/academics">
                Academics
              </Link>
            </div>
            <div>
              <div className="navsideicondiv">
                <img src={sidedropicon} id="departdropicon" alt="" />
              </div>
              <span
                className="navsidedepart"
                onClick={function () {
                  var y = document.querySelector("#departdropicon")
                  var x = document.querySelector(".departsidedrop")
                  var z = document.querySelector("#departsidedropwrap")
                  if (x.style.display === "none") {
                    x.style.display = "block"
                    z.style.display = "flex"
                    y.style.transform = "rotate(180deg)"
                  } else {
                    x.style.display = "none"
                    z.style.display = "none"
                    y.style.transform = "rotate(0deg)"
                  }
                }}
              >
                <span className="nav-side-link">Departments</span>
              </span>
            </div>
            <div id="departsidedropwrap">
              <div className="departsidedrop">
                <div>
                  <Link className="nav-side-link" to="/csehome">
                    <span>Computer Science and Engineering</span>
                  </Link>
                </div>
                <div>
                  <Link className="nav-side-link" to="/ecehome">
                    <span>Electronics and Communication Engineering</span>
                  </Link>
                </div>
                <div>
                  <Link className="nav-side-link" to="/eehome">
                    <span>Electrical Engineering</span>
                  </Link>
                </div>
                <div>
                  <Link className="nav-side-link" to="/mehome">
                    <span>Mechanical Engineering</span>
                  </Link>
                </div>
                <div>
                  <Link className="nav-side-link" to="/cehome">
                    <span>Civil Engineering</span>
                  </Link>
                </div>
                <div>
                  <Link className="nav-side-link" to="/hsshome">
                    <span>Humanities & Social Sciences</span>
                  </Link>
                </div>
                <div>
                  <Link className="nav-side-link" to="/archhome">
                    <span>Architecture</span>
                  </Link>
                </div>
                <div>
                  <Link className="nav-side-link" to="/physicshome">
                    <span>Physics</span>
                  </Link>
                </div>
                <div>
                  <Link className="nav-side-link" to="/chemhome">
                    <span>Chemistry</span>
                  </Link>
                </div>
                <div>
                  <Link className="nav-side-link" to="/mathhome">
                    <span>Mathematics</span>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="navsideicondiv">
                <img src={facilityicon} alt="" />
              </div>
              <Link className="nav-side-link" to="/facilities">
                Facilities
              </Link>
            </div>
            <div>
              <div className="navsideicondiv">
                <img src={studenticon} alt="" />
              </div>
              <Link className="nav-side-link" to="/student">
                Students
              </Link>
            </div>

            <div>
              <div className="navsideicondiv">
                <img src={placementicon} alt="" />
              </div>
              <Link className="nav-side-link" to="/placements">
                Placements
              </Link>
            </div>
          </div>
          <div>
            <Link className="nav-side-link" to={`/${pathname}/syllabus`}>
              Syllabus
            </Link>
          </div>
          <div>
            <Link className="nav-side-link" to={`/${pathname}/faculty`}>
              Faculty
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Depnavbar
