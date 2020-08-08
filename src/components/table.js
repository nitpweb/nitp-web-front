import React from "react"
import "./global/table.css"

const Table = ({ children }) => {
  return (
    <>
      <div className="tablewrap">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Table
