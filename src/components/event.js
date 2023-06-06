import React from "react"
import axios from "axios"
import Eventcard from "./home/eventcard"
import { CardsStyle } from "./styles/cards"

class Event extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   events: [],
  }
 }
 componentDidMount() {
  let eventsUrl = `${process.env.GATSBY_API_URL}/api/events/all`
  axios
   .get(eventsUrl)
   .then(res => {
    const event = res.data
    this.setState({ events: event })
   })
   .catch(e => {
    console.log(e)
   })
 }
 render() {
  return (
   <>
    <CardsStyle className="row">
     <div className="card-details-row">
      <h1>Events</h1>
      <div className="fac-card" data-aos="fade-up">
       {this.state.events.map(event => {
        const date = new Date(event.eventStartDate)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const cdate = new Date(event.eventEndDate)
        const cday = cdate.getDate()
        const cmonth = cdate.getMonth() + 1
        const cyear = cdate.getFullYear()
        const monthname = date
         .toLocaleString("default", { month: "short" })
         .toUpperCase()
        if (event.title != "") {
         return (
          <Eventcard
           detail={event.title}
           time={`${day}-${month}-${year} - ${cday}-${cmonth}-${cyear}`}
           date={day}
           month={monthname}
           attachments={event.attachments}
           location={event.venue}
           event_link={
            (event.event_link && JSON.parse(event.event_link).url) || ""
           }
           link={event.attachments.length != 0 ? event.attachments[0].url : ""}
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
}

export default Event
