import React from "react"
import { DropStyle } from "../styles/dropStyle"
import { Link } from "gatsby"

const Dropnew = ({ to, title, list }) => {
  return (
    <DropStyle>
      <Link to={to} className="title_main">{title}</Link>
      <div className="links">
        {list.map(item => (
          <div className="content">
            {item.url[0] == "/" ? (
              <Link
                className="mainLink"
                to={`${item.url}${item.data ? `?tab=${item.data}` : ""}`}
              >
                {item.title}
              </Link>
            ) : (
              <a target="_blank" className="mainLink" href={item.url}>
                {item.title}
              </a>
            )}
            {item.sub ? (
              <div className="sub">
                {item.sub.map(val => (
                  <>
                    {val.url[0] == "/" ? (
                      <Link
                        className="subLink"
                        to={`${val.url}${val.data ? `?tab=${val.data}` : ""}`}
                      >
                        {val.title}
                      </Link>
                    ) : (
                      <a className="subLink" href={val.url} target="_blank">
                        {val.title}
                      </a>
                    )}
                  </>
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
