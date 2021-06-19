import React from "react"
import { DropStyle } from "../styles/dropStyle"
import { Link } from "gatsby"

const Dropnew = ({ title, list }) => {
  return (
    <DropStyle>
      <div className="title_main">{title}</div>
      <div className="links">
        {list.map(item => (
          <div className="content">
            <Link
              className="mainLink"
              to={`${item.url}${item.data ? `?tab=${item.data}` : ""}`}
            >
              {item.title}
            </Link>
            {item.sub ? (
              <div className="sub">
                {item.sub.map(val => (
                  <Link
                    className="subLink"
                    to={`${val.url}${val.data ? `?tab=${val.data}` : ""}`}
                  >
                    {val.title}
                  </Link>
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
