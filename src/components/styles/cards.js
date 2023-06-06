import styled from "styled-components"

export const CardsStyle = styled.div`
 font-family: "Source Sans Pro";
 padding-top: 15vh;
 display: flex;
 justify-content: space-evenly;
 background-color: ${props => props.theme.backgroundColor};

 .card-img-row {
  margin-top: 5vh;
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
  .card-img-wrap {
   overflow: hidden;
   width: 250px;
   height: 250px;
   min-width: 250px;
   border-radius: 50%;

   img {
    width: 100%;
    height: auto;
    align-self: center;
   }
  }
 }
 .card-details-row {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
   color: ${props => props.theme.textColor};
  }
  .fac-card {
   width: 90%;
   margin-top: 3vh;
   margin-bottom: 3vh;
   background: ${props => props.theme.backgroundColor};
   box-shadow: 0px 0px 18px rgba(156, 156, 156, 0.38);
   border-radius: 5px;
   padding: 0% 5%;
   padding-bottom: 15px;
   font-family: "Source Sans Pro";
   list-style: disc;
   .eventcarddetailsection,
   .noticecarddetail {
    background: ${props => props.theme.backgroundSecColor};
   }
   h3 {
    color: #2f2f2f;
   }
  }
 }
 @media (max-width: 768px) {
  .card-details-row {
   width: 100%;
   .fac-card {
    width: 98%;
    div {
     width: 90%;
    }
   }
  }
 }
`
