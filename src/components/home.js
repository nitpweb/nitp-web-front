import React from "react"
import Newscard from "./home/newscard"
import "./home/css/home.css"
import Importantlink from "./home/importantlink"
import Notice from "./home/notice"
import Eventcard from "./home/eventcard"
import { Nitpbackimg } from "./home/nitpimg"

const Home = () => {
  return (
    <div>
      <div>
        <div className="bgimgwrap">
          <Nitpbackimg />
        </div>
      </div>
      <Importantlink />
      <div className="noticewrap">
        <div>
          <div className="notice-head">
            Notice
            <p>view all</p>
          </div>
          <div className="notice-row">
            <Notice
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="2 hours ago"
            />
            <Notice
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="2 hours ago"
            />
            <Notice
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="2 hours ago"
            />
            <Notice
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="2 hours ago"
            />
            <Notice
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="2 hours ago"
            />
            <Notice
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="2 hours ago"
            />
          </div>
        </div>
        <div>
          <div className="event-head">
            Events
            <p>view all</p>
          </div>
          <div className="event-row">
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
            <Eventcard
              detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...."
              time="12DEC 15DEC 2020"
              date="15"
              month="DEC"
              location="JC BOSE HALL"
            />
          </div>
        </div>
      </div>
      <div className="news-head">
        News
        <p>view all</p>
      </div>

      <div className="news-row">
        <div className="news-viewbox">
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
          <Newscard
            head="Workshop organised"
            detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.."
          />
        </div>
      </div>
    </div>
  )
}

export default Home
