import React from "react"
import { Link } from "gatsby"

const Incard = props => {
 return (
  <>
   <Link
    className="card"
    id={props.id}
    style={{ transform: `translateX(${props.trans}px)` }}
    data-aos="zoom"
    to={`/innovation${props.id ? `?id=${props.id}` : ""}`}
   >
    <div className="part1">
     <img
      src={`https://drive.google.com/thumbnail?id=${props.link1}`}
      alt="img"
     />
    </div>
    <div className="part2">
     <div className="text">
      <p id="heading">
       <Link
        id="loadmore"
        to={`/innovation${props.id ? `?id=${props.id}` : ""}`}
       >
        {props.heading.length > 50
         ? props.heading.substring(0, 50) + "..."
         : props.heading}
       </Link>
      </p>
      <p id="time">{props.date}</p>
     </div>
     {/* <div className="pic">
            <img
              src={
                props.link2 != undefined
                  ? `https://drive.google.com/thumbnail?id=${props.link2}`
                  : "/faculty.png"
              }
              alt="img"
            />
          </div> */}
    </div>
   </Link>
  </>
 )
}

export default Incard
