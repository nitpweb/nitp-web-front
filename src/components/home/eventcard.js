import React from "react"
import { EventCardStyle } from "../styles/eventcard"
import eventclock from "./img/eventclock.svg"
import eventlocation from "./img/eventlocation.svg"

const Eventcard = props => {
 return (
  <EventCardStyle>
   {/* <div className="eventdtdiv">
        <div id="eventmonth">
          <p>{props.month}</p>
        </div>
        <div id="eventdate">
          <p>{props.date}</p>
        </div>
      </div> */}
   <div className="eventcarddetailsection">
    <p className="eventcarddetail">
     {props.event_link !== "" ? (
      <a href={props.event_link} target="_blank" rel="noopener noreferrer">
       {props.detail}
      </a>
     ) : (
      <>{props.detail}</>
     )}
    </p>
    <div id="eventdtp">
     <div>
      <img src={eventclock} alt="c" />
      <p className="efp">{props.time}</p>
     </div>
     <div>
      <a
       target="_blank"
       href={`https://www.google.com/maps/search/${props.location},NIT Patna`}
       rel="noopener noreferrer"
      >
       <img src={eventlocation} alt="c" />
       <p className="efp">{props.location}</p>
      </a>
     </div>
    </div>
   </div>
  </EventCardStyle>
 )
}
export default Eventcard
