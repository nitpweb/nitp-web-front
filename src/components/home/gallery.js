import React from "react"
import { Gallery } from "./styles"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const TempImg = () => {
  const data = useStaticQuery(graphql`
    query {
      main: file(relativePath: { eq: "home/images/600911.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div data-aos="zoom-in" className="tempimg">
      <Img
        style={{ width: `100%`, height: `100%` }}
        fluid={data.main.childImageSharp.fluid}
        imgStyle={{ width: `100%`, height: `100%`, objectFit: "fill" }}
      />
    </div>
  )
}

const GalleryComp = () => {
  return (
    <div>
      <div data-aos="zoom-in" data-aos-duration="200" className="gallery-head">
        Gallery
      </div>
      <Gallery>
        <div className="first-div">
          <TempImg />
        </div>
        <div className="second-div">
          <div className="first-child-div">
            <TempImg />
          </div>
          <div className="second-child-div">
            <TempImg />
          </div>
        </div>
        <div className="third-div">
          <div className="first-child-div">
            <TempImg />
          </div>
          <div className="second-child-div">
            <TempImg />
          </div>
        </div>{" "}
        <div className="fourth-div">
          <div className="first-child-div">
            <div className="short-row-1">
              <div className="first">
                <TempImg />
              </div>
              <div className="second">
                <TempImg />
              </div>
            </div>
            <div className="short-row-2">
              <div className="third">
                <TempImg />
              </div>
              <div className="fourth">
                <TempImg />
              </div>
            </div>
          </div>
          <div className="second-child-div">
            <TempImg />
          </div>
        </div>
        <div className="fifth-div">
          <TempImg />
          <Link to="/gallery">
            <p>See More</p>
          </Link>
        </div>
      </Gallery>
    </div>
  )
}

export default GalleryComp
