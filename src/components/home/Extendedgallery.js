import React from "react"
import { GallertHead } from "./styles"
import Img from "gatsby-image"
import images from "./images/images.json"
import { graphql, useStaticQuery } from "gatsby"

const Extendedgallery = () => {
 const data = useStaticQuery(graphql`
  query {
   allGalleryImage {
    nodes {
     featuredImg {
      childImageSharp {
       fluid(maxWidth: 1920) {
        ...GatsbyImageSharpFluid
       }
      }
     }
    }
   }
  }
 `)
 const imgNodes = data.allGalleryImage.nodes
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
    {imgNodes?.map(image => {
     return (
      <Img
       fluid={image.featuredImg.childImageSharp.fluid}
       style={{
        flexGrow: 1,
        width: `${image.featuredImg.childImageSharp.fluid.aspectRatio * 280}px`,
        boxSizing: `border-box`,
       }}
       imgStyle={{ width: `100%`, objectFit: `cover`, padding: `8px` }}
      />
     )
    })}
    <div style={{ flex: "1 1 " }}></div>
   </div>
  </>
 )
}
export default Extendedgallery
