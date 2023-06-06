import styled from "styled-components"

export const StudentSlideStyle = styled.div`
 .clubsection {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background: linear-gradient(
   #1f1b24 42%,
   ${props => props.theme.backgroundColor} 42%,
   ${props => props.theme.backgroundColor} 100%
  );
  min-height: 60vh;
  padding: 0px !important;
 }
 .club {
  width: 100%;
  display: flex;
  justify-content: center;
  transition: transform 0.2s;
 }
 .club:hover {
  transform: scale(1.2);
 }
 .club a {
  text-decoration: none;
  color: ${props => props.theme.textColor};
  font-size: 24px;
  width: 100%;
  text-transform: capitalize;
  text-align: center;
  font-family: "NotoSans";
  font-weight: bolder;
  padding-top: 1.5rem;
 }
 #slider {
  position: relative;
  min-width: 350px;
  width: 25vw;
  height: 250px;
  /* margin: 30px; */
  perspective: 2000px;
  transform-style: preserve-3d;
 }

 input[type="radio"] {
  display: none;
 }

 input[type="radio"]:nth-child(10) {
  margin-right: 0px;
 }

 input[type="radio"]:checked {
  opacity: 1;
 }

 .pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
 }
 #slider label {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  color: white;
  font-size: 70px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 400ms ease;
 }

 #s1:checked ~ #slide1,
 #s2:checked ~ #slide2,
 #s3:checked ~ #slide3,
 #s4:checked ~ #slide4,
 #s5:checked ~ #slide5,
 #s6:checked ~ #slide6,
 #s7:checked ~ #slide7,
 #s8:checked ~ #slide8,
 #s9:checked ~ #slide9,
 #s10:checked ~ #slide10,
 #s11:checked ~ #slide11 {
  /* box-shadow: 0 13px 26px rgba(0,0,0, 0.3), 0 12px 6px rgba(0,0,0, 0.2); */
  transform: translate3d(0%, 0, 0px);
 }
 #s1:checked ~ #slide2,
 #s2:checked ~ #slide3,
 #s3:checked ~ #slide4,
 #s4:checked ~ #slide5,
 #s5:checked ~ #slide6,
 #s6:checked ~ #slide7,
 #s7:checked ~ #slide8,
 #s8:checked ~ #slide9,
 #s9:checked ~ #slide10,
 #s10:checked ~ #slide11,
 #s11:checked ~ #slide1 {
  /* box-shadow: 0 13px 26px rgba(0,0,0, 0.3), 0 12px 6px rgba(0,0,0, 0.2); */
  transform: translate3d(30%, 0, -150px);
 }
 #s1:checked ~ #slide3,
 #s2:checked ~ #slide4,
 #s3:checked ~ #slide5,
 #s4:checked ~ #slide6,
 #s5:checked ~ #slide7,
 #s6:checked ~ #slide8,
 #s7:checked ~ #slide9,
 #s8:checked ~ #slide10,
 #s9:checked ~ #slide11,
 #s10:checked ~ #slide1,
 #s11:checked ~ #slide2 {
  /* box-shadow: 0 13px 26px rgba(0,0,0, 0.3), 0 12px 6px rgba(0,0,0, 0.2); */
  transform: translate3d(60%, 0, -350px);
 }
 #s1:checked ~ #slide4,
 #s2:checked ~ #slide5,
 #s3:checked ~ #slide6,
 #s4:checked ~ #slide7,
 #s5:checked ~ #slide8,
 #s6:checked ~ #slide9,
 #s7:checked ~ #slide10,
 #s8:checked ~ #slide11,
 #s9:checked ~ #slide1,
 #s10:checked ~ #slide2,
 #s11:checked ~ #slide3 {
  /* box-shadow: 0 13px 26px rgba(0,0,0, 0.3), 0 12px 6px rgba(0,0,0, 0.2); */
  transform: translate3d(90%, 0, -500px);
 }
 #s1:checked ~ #slide5,
 #s2:checked ~ #slide6,
 #s3:checked ~ #slide7,
 #s4:checked ~ #slide8,
 #s5:checked ~ #slide9,
 #s6:checked ~ #slide10,
 #s7:checked ~ #slide11,
 #s8:checked ~ #slide1,
 #s9:checked ~ #slide2,
 #s10:checked ~ #slide3,
 #s11:checked ~ #slide4 {
  /* box-shadow: 0 13px 26px rgba(0,0,0, 0.3), 0 12px 6px rgba(0,0,0, 0.2); */
  transform: translate3d(-90%, 0, -500px);
 }
 #s1:checked ~ #slide6,
 #s2:checked ~ #slide7,
 #s3:checked ~ #slide8,
 #s4:checked ~ #slide9,
 #s5:checked ~ #slide10,
 #s6:checked ~ #slide11,
 #s7:checked ~ #slide1,
 #s8:checked ~ #slide2,
 #s9:checked ~ #slide3,
 #s10:checked ~ #slide4,
 #s11:checked ~ #slide5 {
  /* box-shadow: 0 13px 26px rgba(0,0,0, 0.3), 0 12px 6px rgba(0,0,0, 0.2); */
  transform: translate3d(-60%, 0, -350px);
 }
 #s1:checked ~ #slide7,
 #s2:checked ~ #slide8,
 #s3:checked ~ #slide9,
 #s4:checked ~ #slide10,
 #s5:checked ~ #slide11,
 #s6:checked ~ #slide1,
 #s7:checked ~ #slide2,
 #s8:checked ~ #slide3,
 #s9:checked ~ #slide4,
 #s10:checked ~ #slide5,
 #s11:checked ~ #slide6 {
  /* box-shadow: 0 13px 26px rgba(0,0,0, 0.3), 0 12px 6px rgba(0,0,0, 0.2); */
  transform: translate3d(-30%, 0, -150px);
 }
 #s1:checked ~ #slide8,
 #s2:checked ~ #slide9,
 #s3:checked ~ #slide10,
 #s4:checked ~ #slide11,
 #s5:checked ~ #slide1,
 #s6:checked ~ #slide2,
 #s7:checked ~ #slide3,
 #s8:checked ~ #slide4,
 #s9:checked ~ #slide5,
 #s10:checked ~ #slide6,
 #s11:checked ~ #slide7 {
  /* box-shadow: 0 13px 26px rgba(0,0,0, 0.3), 0 12px 6px rgba(0,0,0, 0.2); */
  transform: translate3d(0%, 0, -150px);
 }
 .slide {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  overflow: hidden;
  height: 250px;
 }

 .img-wrap {
  min-width: 350px;
  height: 100%;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  background-color: #1f1b24;
  overflow: hidden;
 }

 .right {
  border-left: solid black;
  border-right: solid white;
  border-top: solid black;
  border-bottom: solid black;
  border-width: 0 8px 8px 0;
  display: inline-block;
  padding: 8px;
  transform: rotate(135deg) scale(-1);
  -webkit-transform: rotate(135deg) scale(-1);
 }

 .left {
  border-left: solid black;
  border-right: solid black;
  border-top: solid black;
  border-bottom: solid white;
  border-width: 0 8px 8px 0;
  display: inline-block;
  padding: 8px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
 }
 .clubsection .move {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
 }
 .clubsection .move:hover {
  transform: scale(0.9);
  background-color: rgba(235, 231, 231, 0.5);
 }
 .info {
  padding-left: 8%;
  padding-right: 8%;
  text-align: justify;
  font-family: "Source Sans Pro";
  color: ${props => props.theme.textColor};
  max-width: 1200px;
  height: 160px;
 }

 @media (max-width: 480px) {
  .info {
   font-size: 16px;
  }
  .arrow {
   display: none;
  }
  .img-wrap {
   min-width: 70%;
   width: 70%;
   height: 200px;
  }
 }

 @media (min-width: 481px) {
  .info {
   font-size: 21px;
  }
 }
`
