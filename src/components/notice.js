import React, { useEffect, useState } from "react"
import axios from "axios"
import "./global/css/cards.scss"
import Noticecard from "./home/notice"

const Notice = () => {
  const [notices, setNotices] = useState()

  useEffect(() => {
    let noticesUrl = `${process.env.GATSBY_API_URL}/api/notice/all`
    axios
      .get(noticesUrl)
      .then(res => {
        setNotices(res.data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <>
      <div className="cardpage row">
        <div className="card-details-row">
          <h1>Notices</h1>
          <div className="fac-card" data-aos="fade-up">
            {notices && notices.map(notice => {
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
                    key={notice.id}
                    attachments={notice.attachments}
                    imp={notice.important}
                    link={
                      notice.notice_link && JSON.parse(notice.notice_link).url
                        ? JSON.parse(notice.notice_link).url
                        : ""
                    }
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

export default Notice
