import styled from "styled-components"

export const ImportantLinkStyle = styled.div`
 scroll-behavior: smooth;
 display: -ms-flexbox;
 display: flex;
 flex-direction: column;
 text-rendering: optimizeLegibility;
 max-width: 100%;
 margin-top: -4vw;
 margin-bottom: 1vh;
 .link-col {
  position: relative;
  width: 100vw;
  display: flex;
  height: 100%;
  justify-content: center;
  a {
   text-decoration: none;

   .implink {
    width: 10vmax;
    height: 6vmax;
    background: ${props => props.theme.backgroundSecColor};
    /* border-radius:5px; */
    /* margin-left: 1vw; */
    border: 0.5px solid #c5c5c5;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    color: #696969;
    overflow: hidden;
    /* filter: grayscale(100%); */
    .linkimg {
     margin-top: 5%;
     width: 25%;
     max-width: 70%;
    }
    .lead {
     max-width: 95%;
     height: 54px;
     text-align: center;
     font-weight: 600;
     p {
      margin: 0;
      color: ${props => props.theme.primaryColor};
      font-size: 0.7vmax;
      word-wrap: break-word;
      padding: 0 0.5rem 0 0.5rem;
      font-family: NotoSans;
     }
    }
    h3 {
     font-size: 1.4vmax;
     color: ${props => props.theme.primaryColor};
     font-family: Source Sans Pro;
     font-weight: bold;
     /* margin: 0px; */
    }
   }
  }
  .implink:hover {
   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
   filter: grayscale(0%);
   background: ${props => props.theme.primaryColor};
   h3 {
    color: ${props => props.theme.backgroundColor};
   }
   .linkimg {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
     brightness(200%) contrast(200%);
   }

   .lead {
    p {
     color: ${props => props.theme.backgroundColor};
    }
   }
  }
 }

 @media (max-width: 768px) {
  .link-col {
   width: 100%;
   .implink {
    width: 8vmax !important;
    height: 6vmax !important;
    .linkimg {
     margin-top: 5% !important;
     width: 25% !important;
     max-width: 70% !important;
    }
    .lead p {
     display: none;
    }
    h3 {
     font-size: 1vmax !important;
    }
   }
  }
 }
`
