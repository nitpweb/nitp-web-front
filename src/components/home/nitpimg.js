import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Carousel from "./../carousel"

export const Nitpbackimg = () => {
  const data = useStaticQuery(graphql`
    query {
      nitpBackImages: allFile(
        filter: {
          relativePath: {
            in: ["home/img/bg-1.jpg", "home/img/bg-2.jpg", "home/img/nitp.png"]
          }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const images = data.nitpBackImages.nodes.map(image => (
    <Img
      fluid={image.childImageSharp.fluid}
      imgStyle={{ objectFit: "fill", maxHeight: `90vh` }}
      style={{ maxHeight: `90vh` }}
    />
  ))

  return <Carousel LabImages={images} type="backGround" />
}
