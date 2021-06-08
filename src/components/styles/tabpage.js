import styled from "styled-components"

export const TabPage = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
  text-rendering: optimizeLegibility;
  .mainDiv {
    display: flex;
    width: 75vw;
    margin: 2vw 0 0 0;
    padding: 1rem;
    height: 80vh;
    box-shadow: -3px -3px 12px #ffffff73, 3px 3px 12px rgba(94, 104, 121, 0.288);
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: scroll;
    align-content: flex-start;
    -ms-overflow-style: none;
    scrollbar-width: none;
    .layoutrowmain {
      .col-6 {
        .row {
          h1 {
            font-weight: bold;
            color: #2b2b2b;
            font-size: 3rem;
          }
          h2 {
            color: #656565;
          }
          #aut {
            color: #606060;
            font-weight: bold;
          }
        }
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    .layoutrow {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      width: 100%;
      padding-top: 10vh;
      padding-bottom: 10vh;
      font-family: "Source Sans Pro";
      .layoutrow:nth-of-type(2n + 1) {
        background-color: #fcfcfc;
        .col-6:nth-child(1) {
          justify-content: center;
        }
      }
      .col-6 {
        padding: 3vw;
        div {
          #layoutnoticewrap {
            height: 400px;
            overflow: hidden;
            min-width: 80%;
            overflow-y: scroll;
            scrollbar-width: none;
          }
          p {
            color: #454545;
            font-size: 1.3rem;
            font-weight: 500;
          }
          h1 {
            font-weight: bold;
            color: #2b2b2b;
            font-size: 2.5rem;
          }
        }
      }
    }

    .layoutabout {
      align-items: center;
      margin-left: 8%;
      margin-right: 8%;
      .row {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          color: #454545;
          font-size: 1.3rem;
          font-weight: 500;
        }
      }
    }

    .layoutfoot {
      .row {
        padding: 0vw 0vw 0vw 3vw;
        h1 {
          font-weight: bold;
          color: #2b2b2b;
          font-size: 3rem;
        }
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 768px) {
    margin-top: 7rem;
    .mainDiv {
      margin-top: 50px;
      width: 80vw;
      .layoutrow1 {
        flex-direction: column-reverse;
      }
      .col-6 {
        padding: 1vw;
      }
      .layoutrow > .col-6 > div > h1 {
        font-size: 1.8rem;
      }
      .layoutrow > .col-6 > div > p {
        font-size: 1rem;
      }
    }
  }
`
