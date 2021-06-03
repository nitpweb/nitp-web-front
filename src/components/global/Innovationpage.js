import React, { useEffect, useState } from "react"
import axios from "axios"
import "./css/newspage.scss"

const Innovationpage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    loadData()
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
  function Card(val) {
    const date = new Date(val.openDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const cdate = new Date(val.closeDate)
    const cday = cdate.getDate()
    const cmonth = cdate.getMonth() + 1
    const cyear = cdate.getFullYear()

    return (
      <div className="newscard row" id={val.id}>
        <div className="news-img-wrap">
          <img
            src={`https://drive.google.com/thumbnail?id=${link(
              val.image[0].url
            )}`}
            alt="Hello"
          ></img>
        </div>
        <div className="news-details">
          <h1>{val.title}</h1>
          <p>{val.description}</p>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="newspage row">
        <div className="head row">
          <h1>Innovation</h1>
        </div>
        {filtered.map(Card)}
      </div>
    </>
  )
}

export default Innovationpage
