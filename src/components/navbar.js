import React, { useEffect, useState } from "react"
import logo from "./global/img/logo512.png"
import toggle from "../assets/toggle.svg"
import { window } from "ssr-window"
import { Link } from "gatsby"
import acadicon from "./global/sideicons/acad.svg"
import administrationicon from "./global/sideicons/administration.svg"
import abouticon from "./global/sideicons/bulb.svg"
import facilityicon from "./global/sideicons/facility.svg"
import homeicon from "./global/sideicons/home.svg"
import studenticon from "./global/sideicons/student.svg"
import placementicon from "./global/sideicons/placements.svg"
import sidedropicon from "./home/img/dropdown.svg"
import { NavbarStyle } from "./styles/navbar"
import { Dropdown } from "./global/dropdown"
import Navlist from "./global/navlist"
import { Deplist, DepListr } from "./global/deplist"

const Navbar = ({ theme, changeTheme, department }) => {
  const pathname = window.location.pathname.split("/")[1]

  useEffect(() => {
    document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 80) {
        document.querySelector(".nav-col>h2").style.lineHeight = "0.2rem"
        document.querySelector(".nav-col>h4").style.lineHeight = "0.2rem"
        document.querySelector(".nav-link-row").style.backgroundColor = "black"
        document.querySelector(".logobadge>h4").style.display = "none"
        document.querySelector(".logobadge>div>img").style.maxHeight = "5vw"
        document.querySelector(".logobadge>div>img").style.borderWidth = "0px"
        document.querySelector(".logobadge").style.backgroundColor =
          "transparent"
        document.querySelector(".logobadge>div>img").style.marginTop = "15px"
        document.querySelector(".logobadge").style.paddingLeft = "0"
        document.querySelector(".mobilelogo>img").style.maxHeight = "5vh"
        document.querySelector(".logobadge").style.transition = "1s"
        document.querySelector(".logobadge>h4").style.transition = "0s"
        document.querySelector(".logobadge>div>img").style.transition = "1s"
        document.querySelector(".mobilelogo>img").style.transition = "1s"
        document.querySelector(".nav-link-row").style.opacity = "1"
        document.querySelector(".nav-col").style.paddingTop = "0.2vw"
        document.querySelector(".nav-link-row").style.height = "1.5vw"
      } else {
        document.querySelector(".nav-col>h2").style.lineHeight = "0.3rem"
        document.querySelector(".nav-col>h4").style.lineHeight = "0.3rem"
        document.querySelector(".nav-link-row").style.backgroundColor = "black"
        document.querySelector(".nav-link-row").style.height = "2vw"

        document.querySelector(".logobadge>h4").style.display = "flex"
        document.querySelector(".logobadge>div>img").style.maxHeight = "8vw"
        document.querySelector(".logobadge>div>img").style.borderWidth = "0.5vw"
        document.querySelector(".logobadge").style.backgroundColor = theme
          ? "#941b0c"
          : "#cd512f"
        document.querySelector(".logobadge>div>img").style.marginTop = "0px"
        document.querySelector(".logobadge").style.paddingLeft = "0"
        document.querySelector(".mobilelogo>img").style.maxHeight = "7vh"
        document.querySelector(".logobadge").style.transition = "1s"
        document.querySelector(".logobadge>h4").style.transition = "1s"
        document.querySelector(".logobadge>div>img").style.transition = "1s"
        document.querySelector(".mobilelogo>img").style.transition = "1s"
        document.querySelector(".nav-link-row").style.opacity = "0.8"
      }
    })
  }, [])

  return (
    <NavbarStyle>
      <div className="nav-head-row">
        <div className="col-6 start">
          <span>
            <Link to="/tenders">Tenders</Link>
          </span>
        </div>
        <div className="col-6 end">
          <button className="themebtn" onClick={() => changeTheme()}>
            <span>
              <img src={theme ? "/moon.svg" : "/sun.svg"} alt="theme" />
            </span>
          </button>
        </div>
      </div>
      <div className="row nav-title-row">
        <Link className="mobilelogo" data-aos="zoom-in" to="/">
          <img src={logo} alt="NIT PATNA" />
        </Link>
        <div className="nav-col">
          <h2>NATIONAL INSTITUTE OF TECHNOLOGY PATNA</h2>
          <h4>राष्ट्रीय प्रौद्योगिकी संस्थान पटना</h4>
        </div>
        <div className="nav-col right">
          <p>
            An Institute of National Importance under Ministry of
            Education(Shiksha Mantralaya), Government of India
          </p>
        </div>
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
          <img src={toggle} data-aos="zoom-in" alt="menu" />
        </span>
      </div>

      <div className="nav-link-row">
        <div className="col-6">
          <Link
            className="nav-link-item"
            activeClassName="nav-link-item-active"
            to="/"
          >
            <span>Home</span>
          </Link>
          <Link
            className="nav-link-item"
            activeClassName="nav-link-item-active"
            to="/about"
          >
            <Dropdown title="About Us" list={Navlist.about} />
          </Link>

          <Link
            className="nav-link-item"
            activeClassName="nav-link-item-active"
            to="/administration"
          >
            <Dropdown title="Administration" list={Navlist.admin} />
          </Link>
          <Link
            className="nav-link-item"
            activeClassName="nav-link-item-active"
            to="/academics"
          >
            <Dropdown title="Academics" list={Navlist.academics} />
          </Link>
        </div>
        <div className="col-6">
          <Dropdown title="Departments" list={Navlist.departments} />
          <Link
            className="nav-link-item"
            activeClassName="nav-link-item-active"
            to="/facilities"
          >
            <Dropdown title="Facilities" list={Navlist.facilities} />
          </Link>
          <Link
            className="nav-link-item "
            activeClassName="nav-link-item-active"
            to="/student/"
          >
            <span>Students</span>
          </Link>
          <Link
            className="nav-link-item "
            activeClassName="nav-link-item-active"
            to="/placements"
          >
            <Dropdown title="Placements" list={Navlist.placements} />
          </Link>
        </div>
      </div>
      {(DepListr[department] || Deplist[pathname]) && (
        <div className="dep-nav-row">
          <div className="col-6">
            <Link
              className="dep-nav-col dep-link-item"
              to={`/${department ? DepListr[department] : pathname}`}
            >
              {department ? department : Deplist[pathname]}
            </Link>
          </div>
          <div className="col-6">
            <Link
              to={`/${department ? DepListr[department] : pathname}/syllabus`}
              className="dep-link-item"
            >
              Syllabus
            </Link>
            <Link
              to={`/${department ? DepListr[department] : pathname}/faculty`}
              className="dep-link-item"
            >
              Faculty
            </Link>
          </div>
        </div>
      )}

      <div id="logowr1">
        <Link className="logobadge" data-aos="fade-down" to="/">
          <h4>श्रमोऽनवरत चेष्टाय</h4>
          <div id="logowr2">
            <img src={logo} alt="NIT PATNA" />
          </div>
        </Link>
      </div>

      {DepListr[department] || Deplist[pathname] ? (
        <div className="nav-sidebar">
          <div className="navsidetop">
            <Link
              className="navsidetop"
              to={`/${department ? DepListr[department] : pathname}`}
            >
              <img src={logo} alt="logo" />
              <p>{department ? department : Deplist[pathname]}</p>
            </Link>
          </div>
          <div
            className="nav-sidebar-div"
            onClick={function () {
              var z = document.querySelector("#maindropwrap")
              if (z.style.display === "none") {
                z.style.display = "block"
              } else {
                z.style.display = "none"
              }
            }}
          >
            <p className="navsidedepart">
              <span className="nav-side-link">Main Menu</span>
            </p>
          </div>
          <div id="maindropwrap">
            <Link className="nav-sidebar-div" to="/">
              <div className="navsideicondiv">
                <img src={homeicon} alt="" />
              </div>
              <p>Home</p>
            </Link>
            <div
              className="nav-sidebar-div"
              to="/about"
              onClick={function () {
                var z = document.querySelector("#aboutsidedropwrap")
                if (x.style.display === "none") {
                  x.style.display = "block"
                  z.style.display = "flex"
                } else {
                  x.style.display = "none"
                  z.style.display = "none"
                }
              }}
            >
              <div className="navsideicondiv">
                <img src={abouticon} alt="" />
              </div>
              <p>About Us</p>
            </div>
            <div id="aboutsidedropwrap">
              <div className="adminsidedrop">
                {Navlist.about.map(item => (
                  <Link
                    to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                    className="nav-sidebar-div"
                  >
                    <p>
                      <span>{item.title}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            {/* <Link className="nav-sidebar-div" to="/administration">
              <div className="navsideicondiv">
                <img src={administrationicon} alt="" />
              </div>
              <p>Administration</p>
            </Link> */}
            <div
              className="nav-sidebar-div"
              to="/administration"
              onClick={function () {
                var x = document.querySelector(".departsidedrop")
                var z = document.querySelector("#adminsidedropwrap")
                if (x.style.display === "none") {
                  x.style.display = "block"
                  z.style.display = "flex"
                } else {
                  x.style.display = "none"
                  z.style.display = "none"
                }
              }}
            >
              <div className="navsideicondiv">
                <img src={administrationicon} alt="" />
              </div>
              <p>Administration</p>
            </div>
            <div id="adminsidedropwrap">
              <div className="adminsidedrop">
                {Navlist.admin.map(item => (
                  <Link
                    to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                    className="nav-sidebar-div"
                  >
                    <p>
                      <span>{item.title}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="nav-sidebar-div"
              to="/academics"
              onClick={function () {
                var x = document.querySelector(".departsidedrop")
                var z = document.querySelector("#acadsidedropwrap")
                if (x.style.display === "none") {
                  x.style.display = "block"
                  z.style.display = "flex"
                } else {
                  x.style.display = "none"
                  z.style.display = "none"
                }
              }}
            >
              <div className="navsideicondiv">
                <img src={acadicon} alt="" />
              </div>
              <p>Academics</p>
            </div>
            <div id="acadsidedropwrap">
              <div className="departsidedrop">
                {Navlist.academics.map(item => (
                  <Link to={item.url} className="nav-sidebar-div">
                    <p>
                      <span>{item.title}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="nav-sidebar-div"
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
              <div className="navsideicondiv">
                <img src={sidedropicon} id="departdropicon" alt="" />
              </div>
              <p className="navsidedepart">
                <span>Departments</span>
              </p>
            </div>
            <div id="departsidedropwrap">
              <div className="departsidedrop">
                {Navlist.departments.map(item => (
                  <Link to={item.url} className="nav-sidebar-div">
                    <p>
                      <span>{item.title}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            {/* <div to="/facilities" className="nav-sidebar-div">
              <div className="navsideicondiv">
                <img src={facilityicon} alt="" />
              </div>
              <p>Facilities</p>
            </div> */}
            <div
              to="/facilities"
              className="nav-sidebar-div"
              onClick={function () {
                var z = document.querySelector("#facsidedropwrap")
                if (z.style.display === "none") {
                  z.style.display = "flex"
                } else {
                  z.style.display = "none"
                }
              }}
            >
              <div className="navsideicondiv">
                <img src={facilityicon} alt="" />
              </div>
              <p>Facilities</p>
            </div>
            <div id="facsidedropwrap">
              <div className="departsidedrop">
                {Navlist.facilities.map(item => (
                  <Link
                    to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                    className="nav-sidebar-div"
                  >
                    <p>
                      <span>{item.title}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/student" className="nav-sidebar-div">
              <div className="navsideicondiv">
                <img src={studenticon} alt="" />
              </div>
              <p>Students</p>
            </Link>

            <div
              to="/placements"
              className="nav-sidebar-div"
              onClick={function () {
                var z = document.querySelector("#placementsidedropwrap")
                if (z.style.display === "none") {
                  z.style.display = "flex"
                } else {
                  z.style.display = "none"
                }
              }}
            >
              <div className="navsideicondiv">
                <img src={placementicon} alt="" />
              </div>
              <p>Placements</p>
            </div>
            <div id="placementsidedropwrap">
              <div className="departsidedrop">
                {Navlist.placements.map(item => (
                  <Link
                    to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                    className="nav-sidebar-div"
                  >
                    <p>
                      <span>{item.title}</span>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            className="nav-side-link nav-sidebar-div"
            to={`/${department ? DepListr[department] : pathname}/syllabus`}
          >
            <p>Syllabus</p>
          </Link>

          <Link
            className="nav-side-link nav-sidebar-div"
            to={`/${department ? DepListr[department] : pathname}/faculty`}
          >
            <p>Faculty</p>
          </Link>
        </div>
      ) : (
        <div className="nav-sidebar">
          <div className="navsidetop">
            <Link className="navsidetop" to="/">
              <img src={logo} alt="logo" />
              <p>NIT PATNA</p>
            </Link>
          </div>
          <Link className="nav-sidebar-div" to="/">
            <div className="navsideicondiv">
              <img src={homeicon} alt="" />
            </div>
            <p>Home</p>
          </Link>
          {/* <Link className="nav-sidebar-div" to="/about">
            <div className="navsideicondiv">
              <img src={abouticon} alt="" />
            </div>
            <p>About Us</p>
          </Link> */}
          <div
            className="nav-sidebar-div"
            to="/about"
            onClick={function () {
              var z = document.querySelector("#aboutsidedropwrap")
              if (z.style.display === "none") {
                z.style.display = "flex"
              } else {
                z.style.display = "none"
              }
            }}
          >
            <div className="navsideicondiv">
              <img src={abouticon} alt="" />
            </div>
            <p>About Us</p>
          </div>
          <div id="aboutsidedropwrap">
            <div className="departsidedrop">
              {Navlist.about.map(item => (
                <Link
                  to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                  className="nav-sidebar-div"
                >
                  <p>
                    <span>{item.title}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div
            className="nav-sidebar-div"
            to="/administration"
            onClick={function () {
              var z = document.querySelector("#adminsidedropwrap")
              if (z.style.display === "none") {
                z.style.display = "flex"
              } else {
                z.style.display = "none"
              }
            }}
          >
            <div className="navsideicondiv">
              <img src={administrationicon} alt="" />
            </div>
            <p>Administration</p>
          </div>
          <div id="adminsidedropwrap">
            <div className="departsidedrop">
              {Navlist.admin.map(item => (
                <Link
                  to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                  className="nav-sidebar-div"
                >
                  <p>
                    <span>{item.title}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* <Link className="nav-sidebar-div" to="/academics">
            <div className="navsideicondiv">
              <img src={acadicon} alt="" />
            </div>
            <p>Academics</p>
          </Link> */}
          <div
            className="nav-sidebar-div"
            to="/academics"
            onClick={function () {
              var z = document.querySelector("#acadsidedropwrap")
              if (z.style.display === "none") {
                z.style.display = "flex"
              } else {
                z.style.display = "none"
              }
            }}
          >
            <div className="navsideicondiv">
              <img src={acadicon} alt="" />
            </div>
            <p>Academics</p>
          </div>
          <div id="acadsidedropwrap">
            <div className="departsidedrop">
              {Navlist.academics.map(item => (
                <Link
                  to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                  className="nav-sidebar-div"
                >
                  <p>
                    <span>{item.title}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div
            className="nav-sidebar-div"
            onClick={function () {
              var y = document.querySelector("#departdropicon")
              var z = document.querySelector("#departsidedropwrap")
              if (z.style.display === "none") {
                z.style.display = "flex"
                y.style.transform = "rotate(180deg)"
              } else {
                z.style.display = "none"
                y.style.transform = "rotate(0deg)"
              }
            }}
          >
            <div className="navsideicondiv">
              <img src={sidedropicon} id="departdropicon" alt="" />
            </div>
            <p className="navsidedepart">
              <span>Departments</span>
            </p>
          </div>
          <div id="departsidedropwrap">
            <div className="departsidedrop">
              {Navlist.departments.map(item => (
                <Link to={item.url} className="nav-sidebar-div">
                  <p>
                    <span>{item.title}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div
            to="/facilities"
            className="nav-sidebar-div"
            onClick={function () {
              var z = document.querySelector("#facsidedropwrap")
              if (z.style.display === "none") {
                z.style.display = "flex"
              } else {
                z.style.display = "none"
              }
            }}
          >
            <div className="navsideicondiv">
              <img src={facilityicon} alt="" />
            </div>
            <p>Facilities</p>
          </div>
          <div id="facsidedropwrap">
            <div className="departsidedrop">
              {Navlist.facilities.map(item => (
                <Link
                  to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                  className="nav-sidebar-div"
                >
                  <p>
                    <span>{item.title}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/student" className="nav-sidebar-div">
            <div className="navsideicondiv">
              <img src={studenticon} alt="" />
            </div>
            <p>Students</p>
          </Link>

          {/* <Link to="/placements" className="nav-sidebar-div">
            <div className="navsideicondiv">
              <img src={placementicon} alt="" />
            </div>
            <p>Placements</p>
          </Link> */}
          <div
            to="/placements"
            className="nav-sidebar-div"
            onClick={function () {
              var z = document.querySelector("#placementsidedropwrap")
              if (z.style.display === "none") {
                z.style.display = "flex"
              } else {
                z.style.display = "none"
              }
            }}
          >
            <div className="navsideicondiv">
              <img src={placementicon} alt="" />
            </div>
            <p>Placements</p>
          </div>
          <div id="placementsidedropwrap">
            <div className="departsidedrop">
              {Navlist.placements.map(item => (
                <Link
                  to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                  className="nav-sidebar-div"
                >
                  <p>
                    <span>{item.title}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </NavbarStyle>
  )
}

export default Navbar
