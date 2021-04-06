import React from "react"

const Incard = props => {
  // console.log(props.link1)
  return (
    <>
      <div
        className="card"
        id={props.id}
        style={{ transform: `translateX(${props.trans}px)` }}
        data-aos="fade"
      >
        <div className="part1">
          <img src={`https://drive.google.com/thumbnail?id=${props.link1}`} alt="img" />
        </div>
        <div className="part2">
          <div className="text">
            <p id="heading">{props.heading}</p>
            <p id="time">{props.date}</p>
          </div>
          <div className="pic">
            <img src={`https://drive.google.com/thumbnail?id=${props.link2}`} alt="img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Incard
