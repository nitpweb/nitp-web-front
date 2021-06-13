import React from "react"
import { Link } from "gatsby"

const Incard = props => {
  return (
    <>
      <div
        className="card"
        id={props.id}
        style={{ transform: `translateX(${props.trans}px)` }}
        data-aos="zoom"
      >
        <div className="part1">
          <img
            src={`https://drive.google.com/uc?export=view&id=${props.link1}`}
            alt="img"
          />
        </div>
        <div className="part2">
          <div className="text">
            <p id="heading">
              <Link id="loadmore" to={`/ReadMoreIn${props.id ? `?tab=${props.id}` : ""}`}>
                {props.heading}
              </Link>
            </p>
            <p id="time">{props.date}</p>
          </div>
          <div className="pic">
            <img
              src={
                props.link2 != undefined
                  ? `https://drive.google.com/thumbnail?id=${props.link2}`
                  : "/faculty.png"
              }
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Incard
