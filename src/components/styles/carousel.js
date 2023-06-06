import styled from "styled-components"

export const CarouselStyles = styled.div`
 .slideshow-container .mySlides img {
  vertical-align: middle;
  width: 100%;
  object-fit: fill;
  height: ${props => (props.type == "backGround" ? "100%" : "300px")};
 }

 /* Slideshow container */
 .slideshow-container {
  max-width: ${props => (props.type === "backGround" ? "100%" : "600px")};

  position: relative;
  margin: auto;
  width: 100%;
 }

 /* Next & previous buttons */
 .slideshow-container .prev,
 .slideshow-container .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
 }

 /* Position the "next button" to the right */
 .slideshow-container .next {
  right: 0;
  border-radius: 3px 0 0 3px;
 }

 .slideshow-container .prev,
 .slideshow-container .next {
  background-color: rgba(0, 0, 0, 0.3);
 }

 /* On hover, add a black background color with a little bit see-through */

 .slideshow-container .prev:hover,
 .slideshow-container .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
 }

 /* Caption text */
 .slideshow-container .text {
  color: #fff;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  background: rgba(0, 0, 0, 0.8);

  text-align: center;
 }

 /* The dots/bullets/indicators */
 .dots .dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
 }

 /* Fading animation */
 .fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
 }

 @-webkit-keyframes fade {
  from {
   opacity: 0.4;
  }
  to {
   opacity: 1;
  }
 }

 @keyframes fade {
  from {
   opacity: 0.4;
  }
  to {
   opacity: 1;
  }
 }

 /* On smaller screens, decrease text size */
 @media only screen and (max-width: 300px) {
  .slideshow-container .prev,
  .slideshow-container .next {
   font-size: 11px;
  }
 }

 @media only screen and (max-width: 768px) {
  .slideshow-container .mySlides img {
   width: 100%;
   height: 200px;
  }
 }

 @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .slideshow-container .text,
  .slideshow-container .prev,
  .slideshow-container .next {
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(10px);
  }
 }
`
