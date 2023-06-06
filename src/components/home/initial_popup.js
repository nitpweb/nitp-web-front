import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Initial_popup = () => {
 var data = useStaticQuery(graphql`
  query {
   allFile(
    filter: {
     extension: { regex: "/(jpg)|(png)|(PNG)|(jpeg)/" }
     relativeDirectory: { eq: "home/popup_images" }
    }
   ) {
    edges {
     node {
      id
      base
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

 // console.log(data);

 const image_fluid =
  data.allFile.edges[Math.floor(Math.random() * data.allFile.edges.length)].node
   .childImageSharp.fluid

 return (
  <>
   <Container>
    <Popup_Image_div>
     {/* <Popup_Image src="https://bit.ly/3cH8lb5" id="ur_img" /> */}
     <Img
      fluid={image_fluid}
      imgStyle={{
       maxWidth: `70%`,
       maxHeight: `80%`,
       objectFit: `contain`,
       padding: `8px`,
      }}
      style={{ width: "100%" }}
     />
    </Popup_Image_div>
    <div>
     <p>
      <font size="+4">#harghartiranga </font>{" "}
      <font size="+4" color="blue">
       Let's hoist our national flag during 13-15th August!
      </font>
     </p>
    </div>
   </Container>
  </>
 )
}

export default Initial_popup

const Container = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 100;
 background-color: white;
 animation: fadeOutAnimation 2s ease-in-out;
 animation-fill-mode: forwards;
 animation-iteration-count: 1;
 animation-delay: 5s;
 text-align: center;
 font: bold;
 color: red;
 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;

 @keyframes fadeOutAnimation {
  0% {
   opacity: 1;
  }
  90% {
   z-index: 10;
  }
  100% {
   opacity: 0;
   z-index: -10;
  }
 }
`

const Popup_Image_div = styled.div`
 width: 100%;
 max-height: 90%;

 .gatsby-image-wrapper > picture > img,
 .gatsby-image-wrapper > img {
  max-height: 80%;
  object-fit: contain;
  margin: auto;
  left: 0;
  right: 0;
  width: 100%;
 }
`

const Popup_Image = styled.img`
 max-height: 100%;
 object-fit: contain;
`
