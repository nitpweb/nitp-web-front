import axios from "axios"
import React from "react"
import Newscard from "./home/newscard"
import "./home/css/home.css"
import Importantlink from "./home/importantlink"
import Notice from "./home/notice"
import Eventcard from "./home/eventcard"
import { Nitpbackimg } from "./home/nitpimg"
import { Noticelist } from "./home/noticelist"
import { graphql, useStaticQuery } from "gatsby"

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       events: [],
       notices: [],
     }
  }
 

  
  componentDidMount(){
    let eventsUrl=`https://nitpadmin.herokuapp.com/api/event`;
    let noticesUrl = `https://nitpadmin.herokuapp.com/api/notice`;
    axios.get(eventsUrl).then(res=>
    {
      const event=res.data;
      this.setState({events:event});
      console.log(event)
    }).catch(e=>{console.log(e)});
    axios
      .get(noticesUrl)
      .then(res => {
        const notice = res.data
        this.setState({ notices: notice })
        console.log(notice);
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
              <p>view all</p>
            </div>
            <div className="notice-row" data-aos="fade-up">
              {this.state.notices.map((notice) => {
                const newtime = new Date().getTime()

                const d = new Date(newtime - notice.timestamp).getHours()
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
              <p>view all</p>
            </div>
            <div className="event-row" data-aos="fade-up">
              {this.state.events.map((event) => {
                const date = new Date(event.timestamp)
                const day = date.getDate()
                const month = date.getMonth()
                const year = date.getFullYear()
                const monthname = date
                  .toLocaleString("default", { month: "short" })
                  .toUpperCase()
                if (event.title != "") {
                  return (
                    <Eventcard
                      detail={event.title}
                      time={`${day}-${month}-${year}`}
                      date={day}
                      month={monthname}
                      attachments={event.attachments}
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
}

export default Home
