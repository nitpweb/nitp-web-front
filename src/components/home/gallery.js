import React from "react"
import { Gallery } from "./styles"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const GalleryComp = () => {
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
  const Image = props => {
    return (
      <div data-aos="zoom-in" className="tempimg">
        <Img
          fluid={data.images.nodes[props.index].childImageSharp.fluid}
          style={{ height: "100%", width: "100%" }}
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
          <Image index="0" />
        </div>
        <div className="gallery-image">
          <Image index="1" />
        </div>
        <div className="gallery-image">
          <Image index="2" />
        </div>
        <div className="gallery-image">
          <Image index="3" />
        </div>
        <div className="gallery-image">
          <Image index="4" />
        </div>
        <div className="gallery-image">
          <Image index="5" />
        </div>
        <div className="gallery-image">
          <Image index="6" />
        </div>
        <div className="gallery-image">
          <Image index="7" />
          <Link to="/gallery">
            <p>See More</p>
          </Link>
        </div>
        <div className="gallery-image">
          <Image index="8" />
        </div>
        <div className="gallery-image">
          <Image index="9" />
        </div>
        <div className="gallery-image">
          <Image index="10" />
        </div>

        {/* <div className="first-div">
          <Image index="0" />
        </div>
        <div className="second-div">
          <div className="first-child-div">
            <Image index="1" />
          </div>
          <div className="second-child-div">
            <Image index="2" />
          </div>
        </div>
        < className="third-div">
          <div className="first-child-div">
            <Image index="3" />
          </div>
          <div className="second-child-div">
            <Image index="4" />
          </div>
        
        <div className="fourth-div">
          <div className="first-child-div">
            <div className="short-row-1">
              <div className="first">
                <Image index="5" />
              </div>
              <div className="second">
                <Image index="6" />
              </div>
            </div>
            <div className="short-row-2">
              <div className="third">
                <Image index="7" />
              </div>
              <div className="fourth">
                <Image index="8" />
              </div>
            </div>
          </div>
          <div className="second-child-div">
            <Image index="9" />
          </div>
        </div>
        <div className="fifth-div">
          <Image index="10" />
          <Link to="/gallery">
            <p>See More</p>
          </Link>
        </div> */}
      </Gallery>
    </div>
  )
}

export default GalleryComp
