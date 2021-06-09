import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import { css, ThemeProvider } from "styled-components"
import "./layout.css"
import "aos/dist/aos.css"
import { dark, light } from "./global/theme"

const Layout = props => {
  const [lightTheme, setLightTheme] = useState(true)
  
  function changeTheme() {
    setLightTheme(!lightTheme)
    localStorage.setItem("lightTheme", !lightTheme)
  }

  useEffect(() => {
    const localStorageLayout = localStorage.getItem("lightTheme")
    if (localStorageLayout) {
      setLightTheme(JSON.parse(localStorageLayout))
    }
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.init()
    }
  }, [])
  const children = props.children
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={lightTheme?light:dark}>
          <Navbar theme={lightTheme} changeTheme={changeTheme} department={props.department}></Navbar>
          <div
            css={css`
              padding-top: 4.8vw;
            `}
          >
            <main>{children}</main>
            <Footer></Footer>
          </div>
        </ThemeProvider>
      )}
    />
  )
}
export default Layout
