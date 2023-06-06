import { Link } from "gatsby"
import React from "react"

const DynamicLink = ({ url, data, title, classvalue }) => (
 <>
  {url[0] == "/" ? (
   <Link className={classvalue} to={`${url}${data ? `?tab=${data}` : ""}`}>
    {title}
   </Link>
  ) : (
   <a
    href={url}
    className={classvalue}
    target="_blank"
    rel="noopener noreferrer"
   >
    {title}
   </a>
  )}
 </>
)

export default DynamicLink
