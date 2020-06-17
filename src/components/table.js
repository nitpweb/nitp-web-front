import React from "react"
import { css } from "styled-components"

const Table = ({ children }) => {
  return (
    <>
      <div
        css={css`
          overflow: hidden;
          min-width: 95%;
          max-width: 90%;
          overflow-x: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none;
          display: flex;
          :-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
          }
        `}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

export default Table
