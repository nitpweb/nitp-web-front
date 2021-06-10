import React from "react"
import { NavigateStyle } from "../styles/NavigateStyle"

const Navigate = ({callback,data,tab}) => {
  console.log(tab===data[2].title);
  return (
    <NavigateStyle>
      {data.map(item => (
        <button className={`childLink ${item.title===tab?"active":""}`} onClick={() => callback(item.data)}>
          {item.img ? (
            <img src={item.img} className="image" alt=""></img>
          ) : null}
          <p>{item.title}</p>
        </button>
      ))}
    </NavigateStyle>
  )
}

export default Navigate
