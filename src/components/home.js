import axios from "axios"
import React from "react"
import Newscard from "./home/newscard"
import "./home/css/home.scss"
import Importantlink from "./home/importantlink"
import Notice from "./home/notice"
import Eventcard from "./home/eventcard"
import { Nitpbackimg } from "./home/nitpimg"
import { Noticelist } from "./home/noticelist"
import {Link} from "gatsby"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      notices: [],
    }
  }

  componentDidMount() {
    let eventsUrl = `http://beta.nitp.ac.in:3000/api/event/active`
    let noticesUrl = `http://beta.nitp.ac.in:3000/api/notice/active`
    axios
      .get(eventsUrl)
      .then(res => {
        const event = res.data
        this.setState({ events: event })
      })
      .catch(e => {
        console.log(e)
      })
    axios
      .get(noticesUrl)
      .then(res => {
        const notice = res.data
        this.setState({ notices: notice })
      })
      .catch(e => {
        console.log(e)
      })
  }

  render() {
    return (
      <div>
        <div>
          <div className="bgimgwrap">
            <Nitpbackimg />
          </div>
        </div>
        <div className="row tablinkcover">
          <div className="col-4 tablink">
            <a href="#notice">Notice</a>
          </div>
          <div className="col-4 tablink">
            <a href="#events">Events</a>
          </div>
          <div className="col-4 tablink">
            <a href="#news">News</a>
          </div>
        </div>
        <Importantlink />
        <div className="noticewrap" id="notice">
          <div>
            <div
              data-aos="zoom-in"
              data-aos-duration="200"
              className="notice-head"
            >
              Notice
              <Link id="notice-head-p" to="/notice">
                view all
              </Link>
            </div>
            <div className="notice-row" data-aos="fade-up">
              {this.state.notices.map(notice => {
                const newtime = new Date().getTime()

                let d = Math.round((newtime - notice.timestamp) / 3600000)
                if (d > 24) {
                  d = `${Math.round(d / 24)} days ago`
                } else if (d < 1) {
                  d = `Just now`
                } else if (d < 2) {
                  d = `${d} hour ago`
                } else {
                  d = `${d} hours ago`
                }
                if (notice.title != "") {
                  return (
                    <Notice
                      detail={notice.title}
                      time={d}
                      attachments={notice.attachments}
                    />
                  )
                }
              })}
            </div>
          </div>
          <div id="events">
            <div
              data-aos="zoom-in"
              data-aos-duration="200"
              className="event-head"
            >
              Events
              <Link id="event-head-p" to="/event">
                view all
              </Link>
            </div>
            <div className="event-row" data-aos="fade-up">
              {this.state.events.map(event => {
                const date = new Date(event.openDate)
                const day = date.getDate()
                const month = date.getMonth()
                const year = date.getFullYear()
                const cdate = new Date(event.closeDate)
                const cday = cdate.getDate()
                const cmonth = cdate.getMonth()
                const cyear = cdate.getFullYear()
                const monthname = date
                  .toLocaleString("default", { month: "short" })
                  .toUpperCase()
                if (event.title != "") {
                  return (
                    <Eventcard
                      detail={event.title}
                      time={`${day}-${month}-${year} - ${cday}-${cmonth}-${cyear}`}
                      date={day}
                      month={monthname}
                      attachments={event.attachments}
                      location={event.venue}
                    />
                  )
                }
              })}
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="200"
          className="news-head"
          id="news"
        >
          News
          <p id="news-head-p">view all</p>
        </div>

        <div className="news-row">
          <div className="news-viewbox">
            <Newscard
              head="Workshop organised"
              detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
            />
            <Newscard
              head="Workshop organised"
              detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
            />
            <Newscard
              head="Workshop organised"
              detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
            />
            <Newscard
              head="Workshop organised"
              detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
            />
            <Newscard
              head="Workshop organised"
              detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
            />
            <Newscard
              head="Workshop organised"
              detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
            />
            <Newscard
              head="Workshop organised"
              detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
            />
            <Newscard
              head="Workshop organised"
              detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
