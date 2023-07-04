import styled from "styled-components"

export const FacultyProfile = styled.div`
 font-family: "Source Sans Pro";
 padding: 4rem 0;
 display: flex;
 height: max-content;
 color: ${props => props.theme.textColor};
 background: ${props => props.theme.backgroundColor};
 justify-content: flex-end;
 .faculty-img-row {
  margin-top: 3vh;
  margin-right: 3vw;
  justify-content: center;
  text-align: center;
  .facmail {
   position: absolute;
   margin-top: -70px;
   margin-left: 60px;
  }
  h3 {
   color: ${props => props.theme.textColor};
  }
  font-family: "Source Sans Pro";
  .faculty-img-wrap {
   overflow: hidden;
   width: 250px;
   height: 250px;
   border-radius: 50%;

   img {
    width: 100%;
    height: auto;
    align-self: center;
    object-fit: cover;
   }
  }
 }
 /* FOR VIEW CV POPUP START */
 .cv-btn {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background: ${props => props.theme.primaryColor};
  color: white;
  width: 60%;
  border: none;

  &:hover {
   cursor: pointer;
  }
 }
 .cv {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
 }
 .cv:target {
  visibility: visible;
  opacity: 1;
  z-index: 10;
 }

 .link-card {
  margin: 15px;
  border-radius: 5px;
  color: white;
  border: none;
  z-index: 10;
 }

 .link-card img {
  height: 25px;
  padding: 7px;
 }

 .link-icon {
  filter: invert(80%) sepia(30%) saturate(5331%) hue-rotate(357deg)
   brightness(109%) contrast(96%);
 }

 .popup {
  margin: 10vh auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  min-height: 70vh;
  min-width: 70vw;
 }

 .popup .close {
  position: absolute;
  top: 50px;
  right: 50px;
  transition: all 200ms;
  font-weight: bold;
  text-decoration: none;
  color: #ba0019;
  background-color: white;
  border: 1px solid #ba0019;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
 }
 .popup .content {
  height: 70vh;
  width: 70vw;
  overflow: hidden;
 }
 /* FOR VIEW CV POPUP END */
 .faculty-details-row {
  width: calc(100% - 320px);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 3vh;
  h1 {
   padding-left: 5%;
  }
  #dir {
   line-height: 1.5;
   letter-spacing: 1px;
   padding-right: 3vw;
   padding-top: 25px;
  }
  .fac-card {
   width: 90%;
   margin-top: 1vh;
   margin-bottom: 1vh;
   background: ${props => props.theme.backgroundSecColor};
   box-shadow: 0px 0px 18px rgba(156, 156, 156, 0.38);
   border-radius: 5px;
   padding-left: 5%;
   padding-bottom: 15px;
   font-family: "Source Sans Pro";
   list-style: disc;
   h3 {
    color: ${props => props.theme.textColor};
    font-size: ${props => props.theme.font * 1.2}rem;
   }
   p {
    max-width: 95%;
    font-size: ${props => props.theme.font * 1.1}rem;
   }
   .text-justify {
    text-align: justify;
   }
   .factable {
    overflow: hidden;
    max-width: 100%;
    table-layout: auto;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
     display: none;
    }
    p {
     max-width: inherit;
     min-width: 68px;
    }
    td {
     text-align: left;
     padding: 8px;
    }
    th {
     text-align: left;
     padding: 8px;
    }
   }
   .factable:-webkit-scrollbar {
    width: 0px;
    background: transparent;
   }
   table {
    min-width: 90%;
    table-layout: auto;
    max-width: 100%;
    border-collapse: collapse;
   }
  }
 }
 @media (max-width: 768px) {
  padding-top: 10vh;
  justify-content: space-evenly;
  .faculty-img-row {
   position: relative !important;
   left: 0 !important;
  }
  .faculty-details-row {
   width: 90%;
   align-items: center;
  }
 }
`
