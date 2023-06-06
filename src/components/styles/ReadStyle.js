import styled from "styled-components"

export const ReadStyle = styled.div`
 padding-top: 7.5vmax;
 display: flex;
 align-items: center;
 width: 100vw;
 height: 90vh;
 justify-content: center;
 position: relative;
 .wrapperDiv {
  width: 70vw;
  min-height: fit-content;
  height: 80vh;
  box-shadow: 0 3px 8px #9b9b9e, 0 0 2px #9b9b9e;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
   display: none;
  }
  .imgDiv {
   width: 100%;
   min-width: 100%;
   height: auto;
   object-fit: contain;
  }
  .info {
   width: 90%;
   h2 {
    text-align: center;
    font-family: "Source Sans Pro";
    color: ${props => props.theme.primaryTextColor};
    font-weight: 600;
    font-size: 1.75vmax;
   }
   p {
    font-size: 16px;
    text-align: justify;
    font-family: "Source Sans Pro";
    color: ${props => props.theme.textColor};
   }
  }
  .base {
   margin: 1rem;
   width: 90%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   flex-wrap: wrap;
   .author {
    font-style: italic;
    display: flex;
    flex-direction: column;
    min-width: 360px;
    p {
     margin: 0;
     font-family: "Source Sans Pro";
     color: ${props => props.theme.textColor};
     font-weight: 500;
    }
   }
   .download {
    display: flex;
    flex-direction: column;
    p {
     margin: 0;
     font-family: "Source Sans Pro";
     color: ${props => props.theme.textColor};
     font-weight: 500;
    }
    a {
     text-decoration: none;
     font-size: 14px;
     color: ${props => props.theme.primaryColor};
     display: flex;
     flex-direction: row;
     .notdownimg {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 1px solid ${props => props.theme.textColor};
     }
     p {
      padding: 0.5rem;
      font-weight: 600;
      font-family: "Source Sans Pro";
      color: ${props => props.theme.primaryColor};
     }
    }
   }
  }
 }
 @media (max-width: 768px) {
  .wrapperDiv {
   width: 90vw;
   .imgDiv {
    width: 300px;
    height: 200px;
   }
   .info {
    p {
     font-size: 14px;
    }
   }
   .base {
    .author {
     font-size: 14px;
     p {
      font-size: 14px;
     }
    }
   }
  }
 }
`
