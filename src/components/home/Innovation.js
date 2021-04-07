import React, { useEffect, useState } from "react"
import "./css/main.css"
import Union1 from "./img/Union1.svg"
import Union from "./img/Union.svg"
import Group444 from "./img/Group444.svg"
import Group445 from "./img/Group445.svg"
import Arrow from "./img/Arrow.svg"
import InCard from "./InCard"
import axios from "axios"

const Innovation = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => {
    const url = `${process.env.GATSBY_API_URL}/api/innovation`
    axios
      .get(url)
      .then(res => setData([...res.data]))
      .catch(e => {
        console.log(e)
      })

  }

  const link = (k) => {
    k = k.substr(0, k.length - 18);
    k = k.substr(32, k.length);
    return (k);
  }

  const [x, setX] = useState(0);

  function Card(val, index) {
    const date = new Date(val.openDate)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const cdate = new Date(val.closeDate)
    const cday = cdate.getDate()
    const cmonth = cdate.getMonth() + 1
    const cyear = cdate.getFullYear()
    if (val.attachments[0] && val.attachments[1]){
      return (
        <InCard
          link1={link(val.attachments[0].url)}
          link2={link(val.attachments[1].url)}
          heading={val.title}
          date={`${day}-${month}-${year} | ${cday}-${cmonth}-${cyear}`}
          key={index}
          trans={x}
        />
      )}
  }
  return (
    <>
      <div className="innovation">
        <p id="head">Innovation</p>
        <img src={Union1} id="one" />
        <img src={Union} id="two" />
        <img src={Group445} id="three" />
        <img src={Group444} id="four" />
        <div className="child">
          {x < 0 ? (
            <div
              className="child1 child2"
              onClick={() => {
                x < 0 ? setX(x + 300) : setX((data.length-5) * -300 + 900)
              }}
            >
              <img id="arrow" src={Arrow} style={{ rotate: "180deg" }} />
            </div>
          ) : null}
          {data.map(Card)}
          <div
            className="child1"
            style={{ left: "90%" }}
            onClick={() => {
              x > (data.length-5) * -300 + 900 ? setX(x - 300) : setX(0)
            }}
          >
            <img id="arrow" src={Arrow} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Innovation
