import React from "react"
import newspic from "../global/img/news.jpg"
import { Link } from "gatsby"
import { NewsCardStyle } from "../styles/newscard"

const Newscard = inf => {
 return (
  <NewsCardStyle>
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
     <Link
      to={`/news${inf.id ? `?id=${inf.id}` : ""}`}
      className="newscard-readmore"
     >
      Read more...
     </Link>
    </h6>
   </div>
  </NewsCardStyle>
 )
}
export default Newscard
