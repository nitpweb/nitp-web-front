import React from "react"
import "./global/css/table.css"

const Table = ({ children }) => {
  return (
    <>
      <div className="table-t">
        <div className="tablewrap">
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Table
