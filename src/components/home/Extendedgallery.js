import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { GallertHead } from "./styles"

const Extendedgallery = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "gallery/images" } }) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const imagelength = data.images.nodes.length
  return (
    <>
      <GallertHead>Gallery</GallertHead>
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          flexDirection: `row`,
          padding: `2vw`,
        }}
      >
        {data.images.nodes.map(image => {
          return (
            <Img
              fluid={image.childImageSharp.fluid}
              style={{
                flexGrow: 1,
                width: `${image.childImageSharp.fluid.aspectRatio * 250}px`,
                boxSizing: `border-box`,
              }}
              imgStyle={{ width: `100%`, objectFit: `cover`, padding: `8px` }}
            />
          )
        })}
      </div>
    </>
  )
}

export default Extendedgallery
