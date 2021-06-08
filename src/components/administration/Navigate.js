import React from "react"
import { NavigateStyle } from "../styles/NavigateStyle"

const Navigate = ({callback,data}) => {
  return (
    <NavigateStyle>
      {data.map(item => (
        <div className="childLink" onClick={() => callback(item.data)}>
          {item.img?<img src={item.img} alt=""></img>:null}
          <p>{item.title}</p>
        </div>
      ))}

    </NavigateStyle>
  )
}

export default Navigate
