import React, { useEffect, useState } from "react"
import axios from "axios"
import { NewspageStyle } from "../styles/newspage"
import InCard from "../home/InCard"

const Innovationpage = () => {
 const [data, setData] = useState([])

 useEffect(() => {
  const url = `${process.env.GATSBY_API_URL}/api/innovation/all`
  axios
   .get(url)
   .then(res => setData(res.data))
   .catch(e => {
    console.log(e)
   })
 }, [])

 const filtered = data.filter(function (el) {
  return el.image.length != 0
 })
 const link = k => {
  k = k.substr(0, k.length - 18)
  k = k.substr(32, k.length)
  return k
 }
 function Card(val) {
  const date = new Date(val.timestamp)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const cdate = new Date(val.closeDate)
  return (
   <InCard
    link1={link(val.image[0].url)}
    link2={val.image[1] ? link(val.image[1].url) : null}
    heading={`${val.title.slice(0, 72)}`}
    date={`${day}/${month}/${year}`}
    key={val.id}
   />
  )
 }
 return (
  <>
   <NewspageStyle className="newspage row">
    <div className="head row">
     <h1>Innovation</h1>
    </div>
    {filtered.map(Card)}
   </NewspageStyle>
  </>
 )
}

export default Innovationpage
