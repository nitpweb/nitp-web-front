import styled from "styled-components"

export const FooterStyle = styled.div`
 .foot-col-4 {
  color: white;
  background: ${props => props.theme.primaryColor};
  width: 25%;
  padding-left: 1%;
  padding-bottom: 2vh;
  padding-top: 2vh;
  max-width: 95vw;
  .social-link {
   span {
    margin-right: 5%;
    a {
     img {
      height: 24px;
      width: 24px;
     }
    }
   }
  }
 }
 .foot-row {
  background: ${props => props.theme.backgroundSecColor};
  max-width: 100vw;
  font-family: "Source Sans Pro";
  display: flex;
 }

 .foot-col-8 {
  width: 75%;
  max-width: 95vw;
  display: flex;
  margin-left: 2vh;
 }

 .foot-col-4 {
  padding-top: 0.5rem;
  h1 {
   font-size: 1.2rem;
   text-rendering: optimizeLegibility;
  }
  h3 {
   font-size: 1rem;
   font-weight: 500;
   text-rendering: optimizeLegibility;
  }
 }
 .foot-col-3 {
  padding-top: 0.5rem;
  width: 33%;
  h1 {
   color: ${props => props.theme.textColor};
   font-size: 1.2rem;
   font-weight: 600;
   text-rendering: optimizeLegibility;
  }
  a {
   text-decoration: none;
   color: ${props => props.theme.primaryColor};
   line-height: 1;
   h3 {
    font-size: 1rem;
    font-weight: 500;
    text-rendering: optimizeLegibility;
   }
  }
 }

 .footsec > .foot-col-3 {
  width: 50%;
 }

 .footsec {
  display: flex;
  width: 50%;
 }
 .footdetail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.primaryTextColor};
  background-color: ${props => props.theme.backgroundColor};
  p {
   font-weight: bold;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 14px;
   font-family: "Source Sans Pro";
   letter-spacing: 0.03rem;
  }
 }

 @media (max-width: 1500px) {
  .foot-col-3 {
   h1 {
    font-size: 1.2rem;
   }
   a {
    h3 {
     font-size: 1rem;
    }
   }
  }
  .foot-col-4 {
   h1 {
    font-size: 1.2rem;
   }
   h3 {
    font-size: 1rem;
   }
  }
 }
 @media (max-width: 1000px) {
  .foot-col-3 {
   h1 {
    font-size: 1rem;
   }
   a {
    h3 {
     font-size: 0.8rem;
    }
   }
  }
  .foot-col-4 {
   h1 {
    font-size: 1rem;
   }
   h3 {
    font-size: 0.8rem;
   }
  }
 }
 @media (max-width: 768px) {
  .foot-row {
   display: flex;
   flex-direction: column;
  }
  .footdetail > p {
   font-weight: bolder;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 9px;
  }

  .foot-col-8 {
   display: block;
  }
  .foot-col-4 {
   width: 100%;
   padding-left: 5%;
   h1 {
    font-size: 1rem;
   }
   h3 {
    font-size: 0.8rem;
   }
  }

  .footsec {
   width: 100%;
   .foot-col-3 {
    width: 45%;

    h1 {
     font-size: 1rem;
    }
    a {
     font-size: 0.8rem;
    }
   }
  }

  .foot-col-8 {
   width: 100%;
  }
 }
`
