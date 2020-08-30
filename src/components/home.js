import React from "react"
import Newscard from "./home/newscard"
import "./home/css/home.css"
import Importantlink from "./home/importantlink"
import Notice from "./home/notice"
import Eventcard from "./home/eventcard"
import { Nitpbackimg } from "./home/nitpimg"
import { Noticelist } from "./home/noticelist"
import { graphql, useStaticQuery } from "gatsby"

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      allUndefinedEventActive {
        edges {
          node {
            attachments {
              caption
              url
            }
            timestamp
            title
            id
          }
        }
      }
      allUndefinedNoticeActive {
        edges {
          node {
            id
            timestamp
            title
            attachments {
              caption
              url
            }
          }
        }
      }
    }
  `)

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
            <p>view all</p>
          </div>
          <div className="notice-row" data-aos="fade-up">
            {data.allUndefinedNoticeActive.edges.map((notice, i) => {
              const item = notice.node
              const newtime = new Date().getTime()

              const d = new Date(newtime - item.timestamp).getHours()
              return (
                <Notice
                  detail={item.title}
                  time={d}
                  attachments={item.attachments}
                />
              )
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
            <p>view all</p>
          </div>
          <div className="event-row" data-aos="fade-up">
            {data.allUndefinedEventActive.edges.map((event, i) => {
              const item = event.node
              const date = new Date(item.timestamp)
              const day = date.getDate()
              const month = date.getMonth()
              const year = date.getFullYear()
              const monthname = date
                .toLocaleString("default", { month: "short" })
                .toUpperCase()
              return (
                <Eventcard
                  detail={item.title}
                  time={`${day}-${month}-${year}`}
                  date={day}
                  month={monthname}
                  attachments={item.attachments}
                />
              )
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
        <p>view all</p>
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

export default Home
