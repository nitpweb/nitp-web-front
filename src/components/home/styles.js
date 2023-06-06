import styled from "styled-components"

export const Gallery = styled.div`
 margin-left: 6.8vw;
 margin-right: 5vw;
 margin-top: 1vw;
 margin-bottom: 2vw;
 display: grid;
 grid-template-columns: repeat(10, 1fr);
 grid-template-rows: repeat(4, 100px);
 column-gap: 1em;
 row-gap: 1em;
 * {
  box-sizing: border-box;
 }

 height: 100%;

 div.gallery-image:nth-child(1) {
  grid-column: 1/4;
  grid-row: 1/5;
 }

 div.gallery-image:nth-child(2) {
  grid-column: 4/6;
  grid-row: 1/3;
 }

 div.gallery-image:nth-child(3) {
  grid-column: 4/6;
  grid-row: 3/5;
 }

 div.gallery-image:nth-child(4) {
  grid-column: 6/8;
  grid-row: 1/3;
 }

 div.gallery-image:nth-child(5) {
  grid-column: 6/8;
  grid-row: 3/5;
 }

 div.gallery-image:nth-child(11) {
  grid-column: 8/10;
  grid-row: 3/5;
 }

 div.gallery-image:nth-child(8) {
  grid-row: 1/5;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
   filter: blur(30px);
  }
  a {
   font-family: Source Sans Pro;
   position: absolute;
   font-style: normal;
   font-weight: 600;
   font-size: 15px;
   line-height: 19px;
   padding: 10px;
   text-align: center;
   color: #fff;
  }
 }

 .tempimg {
  width: 100%;
  height: 100%;
 }

 @media only screen and (max-width: 768px) {
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, 70px);

  /* Inline #3 | http://localhost:8000/#news */

  .bftgfp div.gallery-image:nth-child(11) {
   display: none;
  }

  div.gallery-image:nth-child(6) {
   display: none;
  }

  div.gallery-image:nth-child(7) {
   display: none;
  }

  div.gallery-image:nth-child(9) {
   display: none;
  }

  div.gallery-image:nth-child(10) {
   display: none;
  }

  div.gallery-image:nth-child(11) {
   display: none;
  }

  div.gallery-image:nth-child(8) {
   grid-column: 8/10;
  }
 }

 @media only screen and (max-width: 480px) {
  div.gallery-image:nth-child(4) {
   display: none;
  }

  div.gallery-image:nth-child(5) {
   display: none;
  }

  height: 500px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);

  div.gallery-image:nth-child(8) {
   grid-row: 6/8;
   grid-column: 1/5;
  }

  div.gallery-image:nth-child(1) {
   grid-column: 1/5;
   grid-row: 1/4;
  }

  div.gallery-image:nth-child(2) {
   grid-column: 1/3;
   grid-row: 4/6;
  }

  div.gallery-image:nth-child(3) {
   grid-column: 3/5;
   grid-row: 4/6;
  }
 }

 /* @media only screen and (max-width: 768px) {
    height: 250px;
  }
  @media only screen and (max-width: 426px) {
    height: 100%;
    flex-direction: column;
    .first-div {
      margin-left: 0;
      width: 100%;
    }
    .second-div {
      flex-direction: row;
      width: 100%;
      margin-bottom: 15px;
      .first-child-div,
      .second-child-div {
        width: 50%;
        height: 100%;
      }
      .first-child-div {
        margin-right: 15px;
        margin-top: 0;
      }
    }
    .third-div,
    .fourth-div {
      display: none;
    }
    .fifth-div {
      width: 100%;
      margin-left: 0;
      margin-top: 0;
      height: 100px;
    }
  } */
`

// export const MainGallery = styled.div`
//   padding: 0 1rem;
//   padding-top: 50px;
//   display: flex;
//   flex-wrap: wrap;

//   .column {
//     width: 25%;
//     max-width: 25%;
//     height: 100%;
//     padding: 0 4px;
//     box-sizing: border-box;

//     img {
//       margin-top: 8px;
//       vertical-align: middle;
//       width: 100%;
//     }
//   }
//   @media screen and (max-width: 800px) {
//     .column {
//       flex: 50%;
//       max-width: 50%;
//     }
//   }

//   @media screen and (max-width: 600px) {
//     .column {
//       flex: 100%;
//       max-width: 100%;
//     }
//   }
// `

export const GallertHead = styled.h1`
 font-family: "Source Sans Pro";
 font-size: 3.5rem;
 color: #f37023;
 text-align: center;
 padding-top: 10vw;
`
export const VideoStyle = styled.div`
 text-align: center;
 padding-bottom: 2vw;
`
