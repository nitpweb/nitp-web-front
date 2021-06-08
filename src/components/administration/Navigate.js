import React from "react"
import { NavigateStyle } from "../styles/NavigateStyle"

const Navigate = ({callback,data}) => {
  return (
    <NavigateStyle>
      {data.map(item => (
        <button className="childLink" onClick={() => callback(item.data)}>
          {item.img?<img src={item.img} alt=""></img>:null}
          <p>{item.title}</p>
        </button>
      ))}

    </NavigateStyle>
  )
}

export default Navigate
