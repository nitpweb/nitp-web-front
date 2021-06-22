import { Link } from "gatsby"
import { DropdownStyle } from "../styles/dropdown"
import DynamicLink from "./dynamicurl"

export const Dropdown = ({ title, list }) => {
  return (
    <>
      <DropdownStyle className="dropdown nav-link-div">
        <button className="dropbtn nav-link-div nav-link-item">{title}</button>
        <div className="dropdown-content">
          {list.map(item => (
            <>
              <DynamicLink url={item.url} data={item.data} title={item.title} />
            </>
          ))}
        </div>
      </DropdownStyle>
    </>
  )
}
