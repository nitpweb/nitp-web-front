import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import { css } from "styled-components"
import "./layout.css"
import "aos/dist/aos.css"

class Layout extends React.Component {
  constructor(props) {
    super()
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.init()
      window.scroll({
        top: 2500,
        left: 0,
        behavior: "smooth",
      })

      // Scroll certain amounts from current position
      window.scrollBy({
        top: 100, // could be negative value
        left: 0,
        behavior: "smooth",
      })

      // Scroll to a certain element
      document.querySelector("#___gatsby").scrollIntoView({
        behavior: "smooth",
      })
    }
  }
  ComponentDidMount() {
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.init()
    }
    window.scroll({
      top: 500,
      left: 0,
      behavior: "smooth",
    })

    // Scroll certain amounts from current position
    window.scrollBy({
      top: 100, // could be negative value
      left: 0,
      behavior: "smooth",
    })

    // Scroll to a certain element
    document.querySelector("#___gatsby").scrollIntoView({
      behavior: "smooth",
    })
  }
  componentDidUpdate() {
    if (typeof window !== `undefined`) {
      const AOS = require("aos")
      AOS.refresh()
    }
    window.scroll({
      top: 500,
      left: 0,
      behavior: "smooth",
    })

    // Scroll certain amounts from current position
    window.scrollBy({
      top: 100, // could be negative value
      left: 0,
      behavior: "smooth",
    })

    // Scroll to a certain element
    document.querySelector("#___gatsby").scrollIntoView({
      behavior: "smooth",
    })
  }
  render() {
    const children = this.props.children
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
          <>
            <Navbar></Navbar>
            <div
              css={css`
                padding-top: 4.8vw;
              `}
            >
              <main>{children}</main>
              <Footer></Footer>
            </div>
          </>
        )}
      />
    )
  }
}
export default Layout
