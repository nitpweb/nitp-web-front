import React from "react"
import { DropStyle } from "../styles/dropStyle"
import { Link } from "gatsby"
import DynamicLink from "./dynamicurl"

const Dropnew = ({ to, title, list, idname }) => {
 const element =
  list.length == 1 ? 1 : list.length == 2 ? 2 : Math.ceil(list.length / 2)
 return (
  <DropStyle>
   <Link to={to} className="title_main">
    {title}
   </Link>
   <div className="links" style={{ width: `${element * 215}px` }} id={idname}>
    {list.map((item, index) => (
     <div className="content">
      <DynamicLink
       key={index}
       classvalue="mainLink"
       url={item.url}
       data={item.data}
       title={item.title}
      />
      {item.sub ? (
       <div className="sub">
        {item.sub.map((val, index) => (
         <DynamicLink
          key={index}
          url={val.url}
          data={val.data}
          title={val.title}
          classvalue="subLink"
         />
        ))}
       </div>
      ) : (
       ""
      )}
     </div>
    ))}
   </div>
  </DropStyle>
 )
}

export default Dropnew
