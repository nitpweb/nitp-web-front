import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export const Nitpbackimg = () => {
  const data = useStaticQuery(graphql`
    query {
      nitpBackImage: file(relativePath: { eq: "home/img/nitp.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.nitpBackImage.childImageSharp.fluid} />
}
