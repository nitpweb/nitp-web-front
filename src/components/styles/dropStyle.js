import styled from "styled-components"

export const DropStyle = styled.div`
 position: relative;
 display: inline-block;
 z-index: 100 !important;

 #right-link {
  margin-left: calc(-415px + 15vw);
 }

 .links {
  display: none;
  position: absolute;
  background-color: ${props => props.theme.bgnew};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 0;

  .content {
   display: flex;
   flex-direction: column;
   width: 190px;
   margin: 5px 0;
   height: fit-content;
   margin-left: 0.5rem !important;
   margin-right: 0.5rem !important;
   transition: all 0.5s ease-in-out;
   box-sizing: border-box;
   &:hover {
    border: 1px solid ${props => props.theme.border};
    background-color: ${props => props.theme.mainhover};
    .mainLink {
     background-color: ${props => props.theme.hovernew};
    }
   }

   .mainLink {
    text-decoration: none;
    width: auto;
    display: flex;
    padding: 7px;
    align-items: center;
    background-color: ${props => props.theme.bgmain};
    color: white;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
   }
   .sub {
    display: flex;
    flex-direction: column;
    width: 190px;
    word-wrap: break-word;
    .subLink {
     text-decoration: none;
     color: ${props => props.theme.textnew};
     font-weight: 400;
     font-size: 16px;
     padding: 0px 10px;
     line-height: 1.8;
     &:hover {
      color: ${props => props.theme.hovertext};
      font-weight: 600;
     }
    }
   }
  }
 }
 .title_main {
  background: transparent;
  border: none;
  text-decoration: none;
  color: white;
  font-family: "Source Sans Pro";
  font-size: 16px;
  font-weight: lighter;
  line-height: 1.6;
  display: flex;
  &:hover {
   color: tomato !important;
  }
  &:focus {
   color: tomato !important;
  }
 }
 &:hover .links {
  display: flex;
  opacity: 1;
  transition: 0.05s;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  z-index: 10;
  max-height: 445px;
 }
`
