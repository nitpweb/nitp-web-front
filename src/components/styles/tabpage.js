import styled from "styled-components"

export const TabPage = styled.div`
  text-align: justify;
  width: 100vw;
  height: 85vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 4rem;
  text-rendering: optimizeLegibility;
  background: ${props => props.theme.backgroundColor};

  p {
    color: ${props => props.theme.textColor};
    font-weight: 500;
    font-family: "Source Sans Pro";
  }
  h1 {
    color: ${props => props.theme.primaryColor};
  }
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  table {
    font-family: "Source Sans Pro";
    border-collapse: collapse;
    table-layout: auto;
    max-width: 100%;
    color: ${props => props.theme.textColor};
  }

  .mainDiv {
    display: flex;
    width: 75vw;
    margin: 2vw 0 2vw 0;
    padding: 1rem;
    height: 85vh;
    box-shadow: -3px -3px 12px #ffffff73, 3px 3px 12px rgba(94, 104, 121, 0.288);
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: ${props => props.theme.backgroundColor};
    overflow: scroll;
    align-content: flex-start;
    -ms-overflow-style: none;
    scrollbar-width: none;
    .probutton {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      .btnactive {
        background-color: white;
        color: ${props => props.theme.primaryColor};
      }
      button {
        background-color: ${props => props.theme.primaryColor};
        border: none;
        margin-right: 5px;
        display: grid;
        place-items: center;
        color: white;
        height: 30px !important;
        width: max-content !important;
        font-family: "Source Sans Pro";
        border: 1px solid ${props => props.theme.primaryColor};
        &:focus {
          background-color: white;
          color: ${props => props.theme.primaryColor};
        }
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .digital {
      font-family: "Source Sans Pro";
      h3 {
        color: ${props => props.theme.primaryColor} !important;
        font-size: ${props => props.theme.font * 1.2}rem;
      }
      a {
        color: ${props => props.theme.textColor};
        font-size: ${props => props.theme.font * 1}rem;
      }
      p {
        font-size: ${props => props.theme.font * 1}rem;
      }
      #formatdown {
        color: ${props => props.theme.primaryColor};
      }
    }
    .layoutrowmain {
      .col-6 {
        .row {
          h1 {
            font-weight: bold;
            color: ${props => props.theme.textColor};
            font-size: ${props => parseInt(props.theme.font * 3)}rem;
          }
          h2 {
            p {
              color: ${props => props.theme.textColor};
              font-size: ${props => parseInt(props.theme.font * 1)}rem;
              font-weight: 500;
            }
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
      padding-top: 5vh;
      padding-bottom: 5vh;
      font-family: "Source Sans Pro";

      .layoutrow:nth-of-type(2n + 1) {
        .col-6:nth-child(1) {
          justify-content: center;
        }
      }
      .col-6 {
        padding: 3vw;
        .row {
          #layoutnoticewrap {
            height: 400px;
            overflow: hidden;
            min-width: 80%;
            overflow-y: scroll;
            scrollbar-width: none;
            div {
              p {
                font-size: ${props => parseInt(props.theme.font * 1)}rem;
              }
            }
          }
          p {
            color: ${props => props.theme.textColor};
            font-weight: 500;
          }
          h1 {
            font-weight: bold;
            color: ${props => props.theme.primaryColor};
            font-size: ${props => props.theme.font * 2.5}rem;
          }
        }
      }
    }
    .layoutrow.others {
      p,
      h2,
      li,
      tr {
        color: ${props => props.theme.textColor};
        font-weight: 500;
      }
      h1 {
        font-weight: bold;
        color: ${props => props.theme.primaryColor};
        font-size: ${props => props.theme.font * 2.5}rem;
      }
      .syllabus-table-head > th,
      .syllabus-table-row > td {
        font-family: "Quicksand";
        padding: 20px;
      }
      .syllabus-table-head > th {
        font-size: 1.3rem;
        color: ${props => props.theme.primaryColor};
      }
    }

    .layoutabout {
      align-items: center;
      position: relative;
      z-index: 1;
      margin-left: 8%;
      margin-right: 8%;
      .row {
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
          color: ${props => props.theme.primaryColor};
        }
        p {
          color: ${props => props.theme.textColor};
          font-size: ${props => props.theme.font * 1}rem;
          font-weight: 500;
        }
      }
    }

    .layoutfoot {
      .row {
        padding: 0vw 0vw 0vw 3vw;
        h1 {
          font-weight: bold;
          color: ${props => props.theme.primaryColor};
          font-size: 3rem;
        }
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 768px) {
    margin-top: 5.2rem;
    position: relative;
    .new{
      margin-top: 0rem !important;
    }
    .mainDiv {
      width: 80vw;
      margin-top: 2.2rem;
      overflow: scroll;
      justify-content: flex-start;
      .digital{
        width: 80vw;
        overflow-x: hidden;
      }
      .layoutrow1 {
        flex-direction: column-reverse;
      }
      .others {
        flex-direction: column;
      }
      .col-6 {
        padding: 1vw;
      }
      .layoutrow > .col-6 > div > h1 {
        font-size: ${props => props.theme.font * 1.8}rem;
      }
      .layoutrow > .col-6 > div > p {
        font-size: ${props => props.theme.font * 1}rem;
      }
    }
  }
`
