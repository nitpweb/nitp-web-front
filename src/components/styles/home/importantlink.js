import styled from "styled-components"

export const ImportantLinkStyle = styled.div`
  scroll-behavior: smooth;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  text-rendering: optimizeLegibility;
  max-width: 100%;
  margin-top: -5vw;
  margin-bottom: 5vh;

  .link-col {
    position: relative;
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    a {
      text-decoration: none;
      .implink:hover {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
        filter: grayscale(0%);
      }
      .implink {
        width: 18vw;
        height: 18vw;
        background: #ffffff;
        /* border-radius:5px; */
        /* margin-left: 1vw; */
        border: 0.5px solid #c5c5c5;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #696969;
        filter: grayscale(100%);
        .linkimg {
          margin-top: 10%;
          height: 25%;
          max-width: 70%;
        }
        .lead {
          max-width: 95%;
          height: 54px;
          text-align: center;
          font-weight: 600;
          p {
            margin: 0;
            color: #808080;
            font-size: 10px;
            word-wrap: break-word;
            padding: 0 0.5rem 0 0.5rem;
            font-family: Source Sans Pro;
          }
          
        }
        h3 {
          font-size: 1.75vw;
          color: #353535;
          font-family: Source Sans Pro;
          font-weight: bold;
          margin: 15px 0;
        }
      }
    }
    .implink:hover>.lead>p{
      color: salmon;
    }
  }

  @media (max-width: 768px) {
    .link-col {
      width: 100%;
      .implink {
        width: 20vw;
        height: 20vw;
        .lead p {
          display: none;
        }
      }
    }
  }
`
