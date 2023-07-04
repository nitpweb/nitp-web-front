import React, { useState, useEffect } from "react"
import { NavigateStyle } from "../styles/NavigateStyle"
import { Link } from "gatsby"

const Navigate = ({ callback, data, tab }) => {
 const [active, setActive] = useState(1)
 useEffect(() => {
  setActive(1)
 }, [tab])
 return (
  <NavigateStyle>
   {data.map(item => {
    if (item.data) {
     return (
      <button
       className={`childLink ${
        item.data && item.data === tab && active === 1 ? "active" : ""
       }`}
       onClick={() => {
        callback(item.data)
        setActive(2)
       }}
      >
       {item.img ? <img src={item.img} className="image" alt=""></img> : null}
       <p>{item.title}</p>
      </button>
     )
    } else if (item.relPath) {
     return (
      <Link to={item.relPath} style={{ textDecoration: "none" }}>
       <button
        className={`childLink ${
         item.data && item.data === tab && active === 1 ? "active" : ""
        }`}
       >
        {item.img ? <img src={item.img} className="image" alt=""></img> : null}
        <p>{item.title}</p>
       </button>
      </Link>
     )
    }
   })}
  </NavigateStyle>
 )
}

export default Navigate
