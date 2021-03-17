import React from "react"
import { Gallery } from "./styles"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

// const TempImg = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       main: file(relativePath: { eq: "gallery/600911.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 800) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div data-aos="zoom-in" className="tempimg">
//       <Img fluid={data.main.childImageSharp.fluid} />
//     </div>
//   )
// }

const GalleryComp = () => {
  return (
    <div>
      <div data-aos="zoom-in" data-aos-duration="200" className="gallery-head">
        Gallery
      </div>
      <Gallery>
        <div className="first-div">
          <img src="/images/600911.jpg" />
        </div>
        <div className="second-div">
          <div className="first-child-div">
            <img src="/images/600911.jpg" />
          </div>
          <div className="second-child-div">
            <img src="/images/600911.jpg" />
          </div>
        </div>
        <div className="third-div">
          <div className="first-child-div">
            <img src="/images/600911.jpg" />
          </div>
          <div className="second-child-div">
            <img src="/images/600911.jpg" />
          </div>
        </div>{" "}
        <div className="fourth-div">
          <div className="first-child-div">
            <div className="short-row-1">
              <div className="first">
                <img src="/images/600911.jpg" />
              </div>
              <div className="second">
                <img src="/images/600911.jpg" />
              </div>
            </div>
            <div className="short-row-2">
              <div className="third">
                <img src="/images/600911.jpg" />
              </div>
              <div className="fourth">
                <img src="/images/600911.jpg" />
              </div>
            </div>
          </div>
          <div className="second-child-div">
            <img src="/images/600911.jpg" />
          </div>
        </div>
        <div className="fifth-div">
          <img src="/images/600911.jpg" />
          <p>See More</p>
        </div>
      </Gallery>
    </div>
  )
}

export default GalleryComp
