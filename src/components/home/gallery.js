import React from "react"
import { Gallery } from "./styles"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import images from "./images/images.json"

const GalleryComp = () => {
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

 const Image = props => {
  return (
   <div data-aos="zoom-in" className="tempimg">
    <Img
     fluid={imgNodes[props.index].featuredImg.childImageSharp.fluid}
     style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
     imgStyle={{ objectFit: "fill" }}
    />
   </div>
  )
 }

 return (
  <div>
   <div data-aos="zoom-in" data-aos-duration="200" className="gallery-head">
    Gallery
   </div>
   <Gallery>
    <div className="gallery-image">
     <Image index={2} />
    </div>
    <div className="gallery-image">
     <Image index={4} />
    </div>
    <div className="gallery-image">
     <Image index={9} />
    </div>
    <div className="gallery-image">
     <Image index={5} />
    </div>
    <div className="gallery-image">
     <Image index={6} />
    </div>
    <div className="gallery-image">
     <Image index={7} />
    </div>
    <div className="gallery-image">
     <Image index={8} />
    </div>
    <div className="gallery-image">
     <Image index={9} />
     <Link to="/gallery">
      <p>See More</p>
     </Link>
    </div>
    <div className="gallery-image">
     <Image index={11} />
    </div>
    <div className="gallery-image">
     <Image index={12} />
    </div>
    <div className="gallery-image">
     <Image index={13} />
    </div>
   </Gallery>
  </div>
 )
}

export default GalleryComp
