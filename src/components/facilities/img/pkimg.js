import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const PKImg = () => {
 const data = useStaticQuery(graphql`
  query {
   main: file(relativePath: { eq: "facilities/img/prabhat-kumar.png" }) {
    childImageSharp {
     fluid(maxWidth: 2000) {
      ...GatsbyImageSharpFluid
     }
    }
   }
  }
 `)
 return (
  <div data-aos="zoom-in" className="imgwrap">
   <Img fluid={data.main.childImageSharp.fluid} />
  </div>
 )
}

export default PKImg
