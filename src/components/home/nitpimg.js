import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
// import Carousel from "./../carousel"
import Slider from "../Slider/Slider"

export const Nitpbackimg = () => {
  const data = useStaticQuery(graphql`
    query {
      nitpBackImages: allFile(
        filter: {
          relativePath: {
            in: [
              "home/img/bg-1.jpg"
              "home/img/bg-3.jpg"
              "home/img/bg-2.jpg"
              "home/img/sac.jpeg"
              "home/img/nitp.png"
            ]
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
      imgStyle={{
        objectFit: "cover",
        maxHeight: `90vh`,
        objectPosition: "center",
      }}
      style={{ maxHeight: `90vw`, height: `100%` }}
    />
  ))

  return <Slider dataSlider={images} type={"homePageImg"} />
}
