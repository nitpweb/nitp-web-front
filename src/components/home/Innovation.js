import React, { useEffect, useState } from "react"
import Union1 from "./img/Union1.svg"
import Union from "./img/Union.svg"
import Group444 from "./img/Group444.svg"
import Group445 from "./img/Group445.svg"
import Arrow from "./img/Arrow.svg"
import InCard from "./InCard"
import axios from "axios"
import { Link } from "gatsby"
import { InnovationStyle } from "../styles/home/innovation"

const Innovation = () => {
 const [data, setData] = useState([])
 const [x, setX] = useState(0)

 useEffect(() => {
  loadData()
  setX(0.1)
 }, [])
 const loadData = () => {
  const url = `${process.env.GATSBY_API_URL}/api/innovation/all`
  axios
   .get(url)
   .then(res => setData([...res.data]))
   .catch(e => {
    console.log(e)
   })
 }
 const filtered = data.filter(function (el) {
  return el.image.length != 0
 })
 const link = k => {
  k = k.substr(0, k.length - 18)
  k = k.substr(32, k.length)
  return k
 }
 useEffect(() => {
  const interval = setInterval(() => {
   x > filtered.length * -300 + 900 ? setX(x - 300) : setX(0)
  }, 3000)
  return () => clearInterval(interval)
 }, [x])

 function Card(val, index) {
  const date = new Date(val.timestamp)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const cdate = new Date(val.closeDate)
  const cday = cdate.getDate()
  const cmonth = cdate.getMonth() + 1
  const cyear = cdate.getFullYear()

  return (
   <InCard
    link1={link(val.image[0].url)}
    link2={val.image[1] ? link(val.image[1].url) : null}
    heading={`${val.title.slice(0, 72)}`}
    date={`${day}/${month}/${year}`}
    key={index}
    trans={x}
    id={val.id}
   />
  )
 }
 return (
  <>
   <InnovationStyle>
    <p id="head">Research & Innovation</p>
    <Link id="loadMore" to="/innovation">
     View all
    </Link>
    <img src={Union1} id="one" />
    <img src={Union} id="two" />
    <img src={Group445} id="three" />
    <img src={Group444} id="four" />
    <div className="child">
     {x < 0 ? (
      <div
       className="child1 child2"
       onClick={() => {
        x < 0 ? setX(x + 300) : setX(filtered.length * -300 + 900)
       }}
      >
       <img id="arrow" src={Arrow} style={{ transform: "rotate(180deg)" }} />
      </div>
     ) : null}
     {filtered.map(Card)}
     <div
      className="child1"
      style={{ left: "94%" }}
      onClick={() => {
       x > filtered.length * -300 + 900 ? setX(x - 300) : setX(0)
      }}
     >
      <img id="arrow" src={Arrow} />
     </div>
    </div>
   </InnovationStyle>
  </>
 )
}

export default Innovation
