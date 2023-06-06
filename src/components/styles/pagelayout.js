import styled from "styled-components"
import book from "../departments/img/book.svg"
import faculty from "../departments/img/faculty.svg"
import web from "../global/img/web.svg"
export const PageLayout = styled.div`
 width: 100%;
 background: ${props => props.theme.backgroundColor};

 .syllabus-page {
  position: relative;
  background: linear-gradient(
    ${props =>
     props.theme.dropBg == "black"
      ? "rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)"
      : "rgba(77,77, 77, 0.7), rgba(77,77, 77, 0.7)"}
   ),
   url(${book}) no-repeat center fixed;
  background-size: 90vw 60vh;
  background-position-y: bottom;

  .layoutrow {
   padding-top: 3vh;
   padding-bottom: 3vh;
  }
  .syllabus-bullets {
   width: 100%;
  }
  .syllabus-page-head {
   padding-top: 8vh;
   padding-bottom: 3vh;

   .col-6 {
    padding-top: 0;
    padding-bottom: 0;
   }
  }
 }

 .webteam-page {
  position: relative;
  background: linear-gradient(
    ${props =>
     props.theme.dropBg == "black"
      ? "rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)"
      : "rgba(77,77, 77, 0.7), rgba(77,77, 77, 0.7)"}
   ),
   url(${web}) no-repeat center fixed;
  background-size: 90vw 60vh;
  background-position-y: bottom;
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
    white-space: nowrap;
    font-family: "Source Sans Pro";
    border: 1px solid ${props => props.theme.primaryColor};
    font-size: ${props => props.theme.font * 1.1}rem;
    &:focus {
     background-color: white;
     color: ${props => props.theme.primaryColor};
    }
   }
   &::-webkit-scrollbar {
    display: none;
   }
  }
 }

 .faculty-page {
  position: relative;
  background: linear-gradient(
    ${props =>
     props.theme.dropBg == "black"
      ? "rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)"
      : "rgba(77,77, 77, 0.7), rgba(77,77, 77, 0.7)"}
   ),
   url(${faculty}) no-repeat center fixed;
  background-size: 90vw 60vh;
  background-position-y: bottom;
 }

 .layoutrowmain {
  .col-6 {
   .row {
    h1 {
     font-weight: bold;
     color: ${props => props.theme.primaryColor};
     font-size: 2.5rem;
     line-height: 0.5;
    }
    h2 {
     color: ${props => props.theme.textColor};
     p {
      color: ${props => props.theme.textColor};
      font-size: 1.3rem;
      font-weight: 500;
     }
    }

    #aut {
     color: ${props => props.theme.textColor};
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
  padding-top: 3vh;
  align-items: center;
  font-family: "Source Sans Pro";
  .layoutrow:nth-of-type(2n + 1) {
   .col-6:nth-child(1) {
    justify-content: center;
   }
  }
  color: ${props => props.theme.textColor};
  .row-new {
   #layoutnoticewrap {
    height: 400px;
    overflow: hidden;
    min-width: 80%;
    overflow-y: scroll;
    scrollbar-width: none;
    div {
     p {
      font-size: 1rem;
     }
    }
   }
   p,
   h3 {
    color: ${props => props.theme.textColor};
   }
   p {
    font-weight: 500;
   }
   td {
    color: ${props => props.theme.textColor};
    font-weight: 600;
   }
   th {
    font-weight: 800;
    color: ${props => props.theme.primaryColor};
   }
   h1 {
    font-weight: bold;
    color: ${props => props.theme.primaryColor};
    font-size: 2.5rem;
   }
  }
  .col-6 {
   padding: 2vw;
   .row {
    #layoutnoticewrap {
     height: 400px;
     overflow: hidden;
     min-width: 80%;
     overflow-y: scroll;
     scrollbar-width: none;
     div {
      p {
       font-size: 1rem;
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

   h1 {
    color: ${props => props.theme.primaryColor};
   }
   p {
    color: ${props => props.theme.textColor};
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
    color: ${props => props.theme.primaryColor};
    font-size: 3rem;
   }
  }
 }
 #sfoot {
  justify-content: center;
  padding-bottom: 5vh;
  height: 25vh;
  padding-top: 5vh;
  #sfimg1 {
   margin-left: 5%;
   margin-right: 5%;
   height: 98%;
   max-width: 40%;
   img {
    margin-left: 5%;
    margin-right: 5%;
    height: 98%;
    max-width: 90%;
   }
  }
  #sfimg2 {
   margin-left: 5%;
   margin-right: 5%;
   height: 98%;
   max-width: 40%;
   img {
    margin-left: 5%;
    margin-right: 5%;
    height: 98%;
    max-width: 90%;
   }
  }
 }

 @media (max-width: 768px) {
  .layoutrowmain {
   margin-top: 10vh;
  }
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
  .row-new {
   padding: 3vw;
  }
 }
`
