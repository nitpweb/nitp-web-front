import React from "react"
import axios from "axios"
import "./global/css/facultyprofile.scss"
import Eventcard from "./home/eventcard"

class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }
  componentDidMount() {
   let eventsUrl = `http://beta.nitp.ac.in:3000/api/event`
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
        <div className="facultypage row">
          <div className="faculty-details-row">
            <h1>Events</h1>
            <div className="fac-card" data-aos="fade-up">
              {this.state.events.map(event => {
                const date = new Date(event.openDate)
                const day = date.getDate()
                const month = date.getMonth()
                const year = date.getFullYear() 
                const cdate = new Date(event.closeDate)
                const cday = cdate.getDate()
                const cmonth = cdate.getMonth()
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

export default Event
