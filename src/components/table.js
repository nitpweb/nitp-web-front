import React from "react"
import { TableStyle } from "./styles/table"

const Table = ({ children }) => {
  return (
    <TableStyle>
      <div className="table-t">
        <div className="tablewrap">
          <div>{children}</div>
        </div>
      </div>
    </TableStyle>
  )
}

export default Table
