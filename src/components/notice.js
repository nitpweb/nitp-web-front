import React from "react"
import axios from "axios"
import "./global/css/facultyprofile.scss"
import Noticecard from "./home/notice"

class Notice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notices: [],
    }
  }
  componentDidMount() {
    let noticesUrl = `http://beta.nitp.ac.in:3000/api/notice`
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
      <>
        <div className="facultypage row">
          <div className="faculty-details-row">
            <h1>Notices</h1>
            <div className="fac-card" data-aos="fade-up">
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
                    <Noticecard
                      detail={notice.title}
                      time={d}
                      attachments={notice.attachments}
                    />
                  )
                }
              })}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Notice
