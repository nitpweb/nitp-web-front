import styled from "styled-components"

export const SliderStyle = styled.div`
 width: 100%;
 .container-slider {
  height: ${props => (props.type === "homePageImg" ? "90vh" : "300px")};
  max-height: 65vmin;
  margin: auto 0;
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
  box-shadow: ${props =>
   props.type === "depImages" ? "" : "0 10px 20px rgba(0, 0, 0, 0.2)"};
  border-radius: ${props => (props.type === "depImages" ? "25px" : 0)};
 }
 @media (max-width: 480px) {
  .slide {
   width: 100%;
   height: 100%;
  }
 }
 @media screen and (max-width: 700px) {
  .container-slider {
   margin: 10px 0 0 0;
  }
 }
 @media (min-width: 481px) and (max-width: 1024px) {
  .slide {
   width: 100%;
   height: 100%;
  }
 }
 @media (min-width: 1025px) {
  .slide {
   width: 71%;
   height: 100%;
  }
 }
 .slide {
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;
 }
 .slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;
 }
 .active-anim {
  opacity: 1;
 }

 .btn-slide {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  &:hover {
   opacity: 1;
  }
 }

 .btn-slide img {
  width: 25px;
  height: 25px;
  pointer-events: none;
 }
 .prev {
  top: 50%;
  left: 20px;
  transform: translateY(-60%);
 }

 .next {
  top: 50%;
  right: 20px;
  transform: translateY(-60%);
 }

 .text {
  color: #fff;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 2rem;
  background: rgba(0, 0, 0, 0.8);

  text-align: center;
 }

 .container-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
 }
 .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  background: #f1f1f1;
 }
 .dot.active {
  background: rgb(32, 32, 32);
 }

 @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .text {
   -webkit-backdrop-filter: blur(10px);
   backdrop-filter: blur(10px);
  }
 }
`
