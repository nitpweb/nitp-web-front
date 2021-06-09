import React, { useEffect, useState } from "react"
import axios from "axios"
import Noticecard from "./home/notice"
import { CardsStyle } from "./styles/cards"

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
      <CardsStyle className="row">
        <div className="card-details-row">
          <h1>Notices</h1>
          <div className="fac-card" data-aos="fade-up">
            {notices && notices.map(notice => {
              const newtime = new Date().getTime()
              if (notice.title != "") {
                return (
                  <Noticecard
                    detail={notice.title}
                    time={notice.openDate}
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
      </CardsStyle>
    </>
  )
}

export default Notice
