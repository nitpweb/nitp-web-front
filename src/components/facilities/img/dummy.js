import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const Dummyimg = () => {
 const data = useStaticQuery(graphql`
  query {
   main: file(relativePath: { eq: "facilities/img/dummy.png" }) {
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

export default Dummyimg
