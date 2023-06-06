import styled from "styled-components"

export const NavigateStyle = styled.div`
 display: flex;
 flex-direction: column;
 position: absolute;
 top: 50%;
 left: 0%;
 transform: translateY(-50%);
 margin: 2rem 0 0 5vw;
 z-index: 2;
 max-height: 85vh;
 overflow-y: scroll;
 background: ${props => props.theme.backgroundColor};
 -ms-overflow-style: none;
 scrollbar-width: none;
 &::-webkit-scrollbar {
  display: none;
 }
 .childLink {
  margin-top: 0;
  width: 8.34vw;
  max-height: 90px;
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0.2rem 0;
  transition: all 0.3s ease;
  background: white;
  cursor: pointer;
  outline: none;
  /* overflow: hidden; */
  background-color: ${props => props.theme.backgroundSecColor};
  p {
   font-size: 16px;
   font-weight: bold;
   color: ${props => props.theme.primaryTextColor};
   text-align: center;
   transition: all 1s ease;
   text-rendering: optimizeLegibility;
   font-family: Source Sans Pro;
   margin: 0;
   padding: 0 0.2rem;
  }
  &:focus {
   background-color: ${props => props.theme.primaryColor};
   padding: 10px 0px 10px 0px;
   p {
    color: white;
   }
   .image {
    color: white;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
     brightness(200%) contrast(200%);
   }
  }

  &:hover {
   background-color: ${props => props.theme.primaryColor};
   padding: 10px 0px 10px 0px;
   p {
    color: white;
   }
   .image {
    color: white;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
     brightness(200%) contrast(200%);
   }
  }
  .image {
   max-height: 3vh;
   width: auto;
  }
 }
 .active {
  background-color: ${props => props.theme.primaryColor};
  padding: 10px 0px 10px 0px;
  p {
   color: white;
  }
  .image {
   color: white;
   filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(200%)
    contrast(200%);
  }
 }
 @media (max-width: 820px) {
  flex-direction: row;
  max-width: 90%;
  overflow-x: scroll;
  position: absolute;
  top: 2.8rem;
  background-color: transparent;
  justify-content: flex-start;
  .childLink {
   width: max-content !important;
   padding: 0 0.5rem;
   margin: 0.2rem 0.2rem;
   background-color: ${props => props.theme.primaryColor};
   border-radius: 0.5rem;
   height: 30px !important;
   p {
    font-size: 12px;
    color: white;
    width: max-content;
    font-weight: normal;
    padding: 0;
   }
   &:focus {
    background-color: white;
    transform: scale(1.05);
    margin: 0 0.15rem;
    padding: 0 0.15rem;
    p {
     color: ${props => props.theme.primaryColor};
    }
   }
   .image {
    max-height: 50%;
    width: auto;
    display: none;
   }
  }
  .active {
   background-color: white;
   margin: 0 0.15rem;
   padding: 0 0.15rem;
   p {
    color: ${props => props.theme.primaryColor};
   }
  }
 }
 @media (max-width: 1024px) {
  .childLink {
   width: 11.34vw;
  }
 }
`
