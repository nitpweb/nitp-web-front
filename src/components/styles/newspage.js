import styled from "styled-components"

export const NewspageStyle = styled.div`
 display: flex;
 flex-direction: row;
 font-family: "Source Sans Pro";
 padding-top: 7vmax;
 margin-bottom: 5vw;
 flex-wrap: wrap;
 align-items: flex-start;
 justify-content: space-evenly;
 background-color: ${props => props.theme.backgroundColor};

 .head {
  h1 {
   color: ${props => props.theme.textColor};
   padding-left: 5vw;
   font-family: "Source Sans Pro";
   font-weight: 550;
   text-rendering: optimizeLegibility;
  }
 }
 .card {
  height: 200px;
  width: 300px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  box-shadow: 0 3px 8px #9b9b9e, 0 0 2px #9b9b9e;
  flex-direction: column;
  margin: 0.8rem;
  .part1 {
   width: 300px;
   height: 65%;
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   justify-content: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   overflow: hidden;
   img {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
   }
  }
  .part2 {
   width: 100%;
   height: 35%;
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: horizontal;
   -webkit-box-direction: normal;
   -ms-flex-direction: row;
   flex-direction: row;
   background-color: white;
   overflow: hidden;
   .text {
    width: 75%;
    padding: 8px;
    font-size: 11.5px;
    font-family: "Nunito", sans-serif;
    position: relative;
    #heading {
     font-weight: 600;
     margin: 0;
     #loadmore {
      text-decoration: none;
      color: #363636;
     }
    }
    #time {
     font-weight: 600;
     margin: 0;
     padding-bottom: 5px;
     position: absolute;
     bottom: 0;
     color: #363636;
    }
   }
   .pic {
    width: 25%;
    display: -ms-grid;
    display: grid;
    place-items: center;
    img {
     width: 70%;
     height: 70%;
     border-radius: 50%;
    }
   }
  }
 }
 @media (max-width: 768px) {
  .head {
   h1 {
    color: ${props => props.theme.textColor};
    padding-left: 5vw;
    font-size: 24px;
    font-family: "Source Sans Pro";
   }
  }
 }
`
