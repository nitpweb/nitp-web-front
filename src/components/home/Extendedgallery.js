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

  return (
    <>
      <GallertHead>Gallery</GallertHead>
      <MainGallery>
        <div className="column">
          {data.images.nodes.slice(0, 7).map(image => {
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
          {data.images.nodes.slice(7, 13).map(image => {
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
          {data.images.nodes.slice(13, 19).map(image => {
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
          {data.images.nodes.slice(19, 25).map(image => {
            return (
              <Img
                fluid={image.childImageSharp.fluid}
                imgStyle={{ verticalAlign: `middle`, width: `100%` }}
              />
            )
          })}
        </div>
        <div className="column">
          {data.images.nodes.slice(25, 32).map(image => {
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
          {data.images.nodes.slice(32, 39).map(image => {
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
