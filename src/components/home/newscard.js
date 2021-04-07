import React from "react"
import "./css/newscard.scss"
import newspic from "../global/img/news.jpg"
import { Link } from "gatsby"

const Newscard = inf => {
  return (
    <div data-aos="flip-left" className="newscard-box">
      <div className="news-img-wrap">
        <img
          src={`https://drive.google.com/thumbnail?id=${inf.url}`}
          alt="Hello"
          className="card-img"
          loading="lazy"
        ></img>
      </div>
      <div className="news-read">{inf.time}</div>
      <div className="newscard-head">
        <h4>{inf.head}</h4>
        <h6>
          {inf.detail}
          <Link to="/news" className="newscard-readmore">
            {" "}
            Read more..
          </Link>
        </h6>
      </div>
    </div>
  )
}
export default Newscard
