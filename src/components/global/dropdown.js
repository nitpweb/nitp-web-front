import { Link } from "gatsby"
import { DropdownStyle } from "../styles/dropdown"
import DynamicLink from "./dynamicurl"
import React from "react"

export const Dropdown = ({ to, title, list, idname }) => {
 return (
  <>
   <DropdownStyle className="dropdown nav-link-div">
    <Link className="dropbtn nav-link-div nav-link-item" to={to ? to : "/"}>
     {title}
    </Link>
    <div className="dropdown-content" id={idname}>
     {list.map((item, index) => (
      <>
       <DynamicLink url={item.url} data={item.data} title={item.title} />
      </>
     ))}
    </div>
   </DropdownStyle>
  </>
 )
}
