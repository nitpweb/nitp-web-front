import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { MainGallery, GallertHead } from "./styles"

const Extendedgallery = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "home/images" } }) {
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
      <MainGallery>
        <div className="column">
          {data.images.nodes.slice(0, imagelength / 4).map(image => {
            return (
              <div data-aos="zoom-in">
                <Img
                  fluid={image.childImageSharp.fluid}
                  imgStyle={{ verticalAlign: `middle`, width: `100%` }}
                />
              </div>
            )
          })}
        </div>
        <div className="column">
          {data.images.nodes
            .slice(imagelength / 4, imagelength / 2)
            .map(image => {
              return (
                <div data-aos="zoom-in">
                  <Img
                    fluid={image.childImageSharp.fluid}
                    imgStyle={{ verticalAlign: `middle`, width: `100%` }}
                  />
                </div>
              )
            })}
        </div>
        <div className="column">
          {data.images.nodes
            .slice(imagelength / 2, (imagelength * 3) / 4)
            .map(image => {
              return (
                <div data-aos="zoom-in">
                  <Img
                    fluid={image.childImageSharp.fluid}
                    imgStyle={{ verticalAlign: `middle`, width: `100%` }}
                  />
                </div>
              )
            })}
        </div>
        <div className="column">
          {data.images.nodes
            .slice((imagelength * 3) / 4, imagelength)
            .map(image => {
              return (
                <Img
                  fluid={image.childImageSharp.fluid}
                  imgStyle={{ verticalAlign: `middle`, width: `100%` }}
                />
              )
            })}
        </div>
      </MainGallery>
    </>
    //  <div>
    //    <h1>You hit the gallery component</h1>
    // {data.images.nodes.map(image => {
    //   return <Img fluid={image.childImageSharp.fluid} />
    // })}
    //  </div>
  )
}

export default Extendedgallery
