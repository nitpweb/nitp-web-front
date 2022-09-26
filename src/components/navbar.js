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
import Dropnew from "./global/dropnew"
import DynamicLink from "./global/dynamicurl"
import { isBrowser } from "./isBrowser"

const Navbar = ({ theme, changeTheme, department, font, changeFont }) => {
  const pathname = window.location.pathname.split("/")[1]
  const isInSession = () => {
    if (!isBrowser) {
      return
    }
    return sessionStorage.getItem("inSession")
  }
  // const [change, setChange] = useState(0)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     change === 0 ? setChange(2) : setChange(0)
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [change])

  useEffect(() => {
    document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop
      if (document.querySelector(".logobadge")) {
        if (scrolled >= 120) {
          if (screen.width > 768) {
            document.querySelector(".nav-title-row").style.display = "none"
          }
          // document.querySelector(".nav-col>span").style.lineHeight = "0.2rem"
          if (screen.width < 768) {
            document.querySelector(".nav-head-row>.start").style.display =
              "none"
          }
          document.querySelector(".nav-link-row").style.backgroundColor =
            "black"
          document.querySelector(".logobadge>h4").style.display = "none"
          document.querySelector(".logobadge>div>img").style.maxHeight = "5vw"
          document.querySelector(".logobadge>div>img").style.borderWidth = "0px"
          document.querySelector(".logobadge").style.backgroundColor =
            "transparent"
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
          if (screen.width > 768) {
            document.querySelector(".nav-title-row").style.display = "flex"
          }
          if (screen.width < 768) {
            document.querySelector(".nav-head-row>.start").style.display =
              "flex"
          }
          document.querySelector(".nav-link-row").style.backgroundColor =
            "black"
          document.querySelector(".nav-link-row").style.height = "2vw"
          document.querySelector(".logobadge>h4").style.display = "flex"
          document.querySelector(".logobadge>div>img").style.maxHeight = "8vw"
          document.querySelector(".logobadge>div>img").style.borderWidth =
            "0.5vw"
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
          document.querySelector(".nav-link-row").style.opacity = "1"
        }
      }
    })
  }, [])
  useEffect(() => {
    if (isBrowser) {
      sessionStorage.setItem("inSession", true)
    }
  })
  return (
    <NavbarStyle>
      <div className="nav-head-row">
        <div className="col-6 start" style={{ fontSize: `16px` }}>
          <span style={{ marginLeft: `8px` }}>
            <Link to="/jobsnitp">Jobs@NITP</Link>
            {` | `}
          </span>
          <span style={{ marginLeft: `8px` }}>
            <a href="https://www.eduqfix.com/PayDirect/#/student/pay/mnYv9Q6+C+3lIMqghRCwdaqVZusPrJtq2RGJrJFnKnmtz3KBqtsEFPVrZFvoPubG/3466">
              Fee Payment
            </a>
            {` | `}
          </span>
          {/* <span style={{ marginLeft: `8px` }}>
            <a href="http://www.nitp.ac.in/uploads20/Revised%20AC%202020-21.pdf">
              Academic Calendar
            </a>
            {` | `}
          </span> */}
          <span style={{ marginLeft: `8px` }}>
            <a href="http://old.nitp.ac.in/php/home.php">Old Website</a>
          </span>
        </div>
        <div className="col-6 end">
          <span>
            <a href="http://www.facebook.com/nitpatnaofficial" target="_blank">
              <img src="/facebook.png" alt="facebook" />
            </a>
          </span>
          <span>
            <a href="https://twitter.com/NITPatna1" target="_blank">
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
          <button
            className="themebtn"
            disabled={font < 0.5}
            onClick={() => changeFont(2)}
          >
            <span>A-</span>
          </button>
          <span>/</span>
          <button
            className="themebtn"
            disabled={font > 1.5}
            onClick={() => changeFont(1)}
          >
            <span>A+</span>
          </button>
          <button className="themebtn" id="theme" onClick={() => changeTheme()}>
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
        <div className="nav-col start">
          <span>
            {/* {change == 0
              ? "NATIONAL INSTITUTE OF TECHNOLOGY PATNA"
              : "राष्ट्रीय प्रौद्योगिकी संस्थान पटना"} */}
            राष्ट्रीय प्रौद्योगिकी संस्थान पटना
            <br />
            NATIONAL INSTITUTE OF TECHNOLOGY PATNA
          </span>
        </div>
        <div className="nav-col end">
          <span>
            An Institute of National Importance under Ministry of
            <br />
            Education (Shiksha Mantralaya), Government of India
          </span>
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
          <div className="nav-link-item" activeClassName="nav-link-item-active">
            <Dropnew to="/" title="Home" list={Navlist.home} />
          </div>

          <div className="nav-link-item" activeClassName="nav-link-item-active">
            <Dropnew
              to="/administration"
              title="Administration"
              list={Navlist.admin}
            />
          </div>
          <div className="nav-link-item" activeClassName="nav-link-item-active">
            <Dropnew
              to="/academics"
              title="Academics"
              list={Navlist.academics}
              idname="right-link"
            />
          </div>
          <Dropdown
            title="Departments"
            list={Navlist.departments}
            idname="rightlink"
          />
          {/* <div className="nav-link-item" activeClassName="nav-link-item-active">
            <Dropnew
              to="/"
              title="Centre of Excellence"
              list={Navlist.academics}
              idname="right-link"
            />
          </div> */}
          {/* <a
            className="nav-link-item "
            activeClassName="nav-link-item-active"
            href="/centreOfExcellence"
            // target="_blank"
          >
            <span>Centre of Excellence</span>
          </a> */}
        </div>
        <div className="col-6">
          <div className="nav-link-item" activeClassName="nav-link-item-active">
            <Dropnew to="/students" title="Students" list={Navlist.students} />
          </div>
          <div className="nav-link-item" activeClassName="nav-link-item-active">
            <Dropnew to="/" title="Faculty & Staff" list={Navlist.faculty} />
          </div>
          <div className="nav-link-item" activeClassName="nav-link-item-active">
            <Dropnew
              to="/facilities"
              title="Facilities"
              list={Navlist.facilities}
            />
          </div>

          <a
            className="nav-link-item "
            activeClassName="nav-link-item-active"
            href="https://tnp.nitp.ac.in"
            target="_blank"
          >
            <span>Placements</span>
          </a>
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
        <Link
          className="logobadge"
          data-aos={isInSession ? " " : "fade-down"}
          to="/"
        >
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
            <div
              className="nav-sidebar-div"
              to="/"
              onClick={function () {
                var z = document.querySelector("#homesidedropwrap")
                if (z.style.display === "none") {
                  z.style.display = "flex"
                } else {
                  z.style.display = "none"
                }
              }}
            >
              <div className="navsideicondiv">
                <img src={homeicon} alt="" />
              </div>
              <p>Home</p>
            </div>
            <div id="homesidedropwrap">
              <div className="adminsidedrop">
                {Navlist.home.map((item, index) => (
                  <div
                    to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                    className="mainLink"
                    key={index}
                  >
                    <p>
                      <span>{item.title}</span>
                    </p>
                    {item.sub && (
                      <div id={`sub${item.url.slice(1)}`} className="mobsub">
                        {item.sub.map((val, index) => (
                          <DynamicLink
                            key={index}
                            url={val.url}
                            data={val.data}
                            title={val.title}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

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
                {Navlist.admin.map((item, index) => (
                  <div
                    to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                    className="mainLink"
                    key={index}
                  >
                    {Navlist.admin.length != 1 && (
                      <p>
                        <span>{item.title}</span>
                      </p>
                    )}
                    {item.sub && (
                      <div id={`sub${item.url.slice(1)}`} className="mobsub">
                        {item.sub.map((val, index) => (
                          <DynamicLink
                            url={val.url}
                            data={val.data}
                            title={val.title}
                            classvalue="nav-sidebar-div"
                            key={index}
                          />
                        ))}
                      </div>
                    )}
                  </div>
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
                {Navlist.academics.map((item, index) => (
                  <div
                    key={index}
                    className="mainLink"
                    onClick={function () {
                      var z = document.querySelector(`#sub${item.id}`)
                      if (z.style.display === "none") {
                        z.style.display = "flex"
                        // document.location.href=`${item.url}${item.name ? `?tab=${item.name}` : ""}`
                      } else {
                        z.style.display = "none"
                      }
                    }}
                  >
                    <p>
                      <span>{item.title}</span>
                    </p>
                    {item.sub && (
                      <div id={`sub${item.id}`} className="mobsub">
                        {item.sub.map((val, index) => (
                          <DynamicLink
                            key={index}
                            url={val.url}
                            data={val.data}
                            title={val.title}
                          />
                        ))}
                      </div>
                    )}
                  </div>
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
                {Navlist.departments.map((val, index) => (
                  <DynamicLink
                    key={index}
                    url={val.url}
                    data={val.data}
                    title={val.title}
                    classvalue="nav-sidebar-div"
                  />
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
                {Navlist.facilities.map((item, index) => (
                  <div
                    key={index}
                    to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                    className="mainLink"
                  >
                    {Navlist.facilities.length != 1 && (
                      <p>
                        <span>{item.title}</span>
                      </p>
                    )}
                    {item.sub && (
                      <div id={`sub${item.url.slice(1)}`} className="mobsub">
                        {item.sub.map((val, index) => (
                          <DynamicLink
                            key={index}
                            url={val.url}
                            data={val.data}
                            title={val.title}
                            classvalue="nav-sidebar-div"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div
              to="/students"
              className="nav-sidebar-div"
              onClick={function () {
                var z = document.querySelector("#studsidedropwrap")
                if (z.style.display === "none") {
                  z.style.display = "flex"
                } else {
                  z.style.display = "none"
                }
              }}
            >
              <div className="navsideicondiv">
                <img src={studenticon} alt="" />
              </div>
              <p>Students</p>
            </div>
            <div id="studsidedropwrap">
              <div className="departsidedrop">
                {Navlist.students.map((item, index) => (
                  <div
                    key={index}
                    to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                    className="mainLink"
                  >
                    {Navlist.facilities.length != 1 && (
                      <p>
                        <span>{item.title}</span>
                      </p>
                    )}
                    {item.sub && (
                      <div id={`sub${item.url.slice(1)}`} className="mobsub">
                        {item.sub.map((val, index) => (
                          <DynamicLink
                            key={index}
                            url={val.url}
                            data={val.data}
                            title={val.title}
                            classvalue="nav-sidebar-div"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div
              to="/"
              className="nav-sidebar-div"
              onClick={function () {
                var z = document.querySelector("#facultysidedropwrap")
                if (z.style.display === "none") {
                  z.style.display = "flex"
                } else {
                  z.style.display = "none"
                }
              }}
            >
              <div className="navsideicondiv">
                <img src={studenticon} alt="" />
              </div>
              <p>Faculty &amp; Staff</p>
            </div>
            <div id="facultysidedropwrap">
              <div className="departsidedrop">
                {Navlist.faculty.map((item, index) => (
                  <div
                    key={index}
                    to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                    className="mainLink"
                  >
                    {Navlist.faculty.length != 1 && (
                      <p>
                        <span>{item.title}</span>
                      </p>
                    )}
                    {item.sub && (
                      <div id={`sub${item.url.slice(1)}`} className="mobsub">
                        {item.sub.map((val, index) => (
                          <DynamicLink
                            key={index}
                            url={val.url}
                            data={val.data}
                            title={val.title}
                            classvalue="nav-sidebar-div"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://tnp.nitp.ac.in"
              target="_blank"
              className="nav-sidebar-div"
            >
              <div className="navsideicondiv">
                <img src={placementicon} alt="" />
              </div>
              <p>Placements</p>
            </a>
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

          <div
            className="nav-sidebar-div"
            to="/"
            onClick={function () {
              var z = document.querySelector("#homesidedropwrap")
              if (z.style.display === "none") {
                z.style.display = "flex"
              } else {
                z.style.display = "none"
              }
            }}
          >
            <div className="navsideicondiv">
              <img src={homeicon} alt="" />
            </div>
            <p>Home</p>
          </div>
          <div id="homesidedropwrap">
            <div className="adminsidedrop">
              {Navlist.home.map((item, index) => (
                <div
                  key={index}
                  to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                  className="mainLink"
                >
                  <p>
                    <span>{item.title}</span>
                  </p>
                  {item.sub && (
                    <div id={`sub${item.url.slice(1)}`} className="mobsub">
                      {item.sub.map((val, index) => (
                        <DynamicLink
                          key={index}
                          url={val.url}
                          data={val.data}
                          title={val.title}
                        />
                      ))}
                    </div>
                  )}
                </div>
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
              {Navlist.admin.map((item, index) => (
                <div
                  key={index}
                  to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                  className="mainLink"
                >
                  {Navlist.admin.length != 1 && (
                    <p>
                      <span>{item.title}</span>
                    </p>
                  )}
                  {item.sub && (
                    <div id={`sub${item.url.slice(1)}`} className="mobsub">
                      {item.sub.map((val, index) => (
                        <DynamicLink
                          key={index}
                          url={val.url}
                          data={val.data}
                          title={val.title}
                          classvalue="nav-sidebar-div"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

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
              {Navlist.academics.map((item, index) => (
                <div
                  key={index}
                  className="mainLink"
                  onClick={function () {
                    var z = document.querySelector(`#sub${item.id}`)
                    if (z.style.display === "none") {
                      z.style.display = "flex"
                      // document.location.href=`${item.url}${item.name ? `?tab=${item.name}` : ""}`
                    } else {
                      z.style.display = "none"
                    }
                  }}
                >
                  <p>
                    <span>{item.title}</span>
                  </p>
                  {item.sub && (
                    <div id={`sub${item.id}`} className="mobsub">
                      {item.sub.map((val, index) => (
                        <DynamicLink
                          key={index}
                          url={val.url}
                          data={val.data}
                          title={val.title}
                        />
                      ))}
                    </div>
                  )}
                </div>
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
              {Navlist.departments.map((val, index) => (
                <DynamicLink
                  key={index}
                  url={val.url}
                  data={val.data}
                  title={val.title}
                  classvalue="nav-sidebar-div"
                />
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
              {Navlist.facilities.map((item, index) => (
                <div
                  key={index}
                  to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                  className="mainLink"
                >
                  {Navlist.facilities.length != 1 && (
                    <p>
                      <span>{item.title}</span>
                    </p>
                  )}
                  {item.sub && (
                    <div id={`sub${item.url.slice(1)}`} className="mobsub">
                      {item.sub.map((val, index) => (
                        <DynamicLink
                          key={index}
                          url={val.url}
                          data={val.data}
                          title={val.title}
                          classvalue="nav-sidebar-div"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            to="/students"
            className="nav-sidebar-div"
            onClick={function () {
              var z = document.querySelector("#studsidedropwrap")
              if (z.style.display === "none") {
                z.style.display = "flex"
              } else {
                z.style.display = "none"
              }
            }}
          >
            <div className="navsideicondiv">
              <img src={studenticon} alt="" />
            </div>
            <p>Students</p>
          </div>
          <div id="studsidedropwrap">
            <div className="departsidedrop">
              {Navlist.students.map((item, index) => (
                <div
                  key={index}
                  to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                  className="mainLink"
                >
                  {Navlist.students.length != 1 && (
                    <p>
                      <span>{item.title}</span>
                    </p>
                  )}
                  {item.sub && (
                    <div id={`sub${item.url.slice(1)}`} className="mobsub">
                      {item.sub.map((val, index) => (
                        <DynamicLink
                          key={index}
                          url={val.url}
                          data={val.data}
                          title={val.title}
                          classvalue="nav-sidebar-div"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            to="/"
            className="nav-sidebar-div"
            onClick={function () {
              var z = document.querySelector("#facultysidedropwrap")
              if (z.style.display === "none") {
                z.style.display = "flex"
              } else {
                z.style.display = "none"
              }
            }}
          >
            <div className="navsideicondiv">
              <img src={studenticon} alt="" />
            </div>
            <p>Faculty &amp; Staff</p>
          </div>
          <div id="facultysidedropwrap">
            <div className="departsidedrop">
              {Navlist.faculty.map((item, index) => (
                <div
                  key={index}
                  to={`${item.url}${item.name ? `?tab=${item.name}` : ""}`}
                  className="mainLink"
                >
                  {Navlist.faculty.length != 1 && (
                    <p>
                      <span>{item.title}</span>
                    </p>
                  )}
                  {item.sub && (
                    <div id={`sub${item.url.slice(1)}`} className="mobsub">
                      {item.sub.map((val, index) => (
                        <DynamicLink
                          key={index}
                          url={val.url}
                          data={val.data}
                          title={val.title}
                          classvalue="nav-sidebar-div"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://tnp.nitp.ac.in"
            target="_blank"
            className="nav-sidebar-div"
          >
            <div className="navsideicondiv">
              <img src={placementicon} alt="" />
            </div>
            <p>Placements</p>
          </a>
        </div>
      )}
    </NavbarStyle>
  )
}

export default Navbar
