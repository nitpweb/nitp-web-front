import styled from "styled-components"

export const Gallery = styled.div`
  margin-left: 8vw;
  margin-right: 5vw;
  display: flex;

  height: 400px;

  .first-div {
    width: 30%;
    margin: 15px;
  }

  .second-div,
  .third-div,
  .fourth-div {
    width: 20%;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
  }
  .second-div,
  .third-div {
    margin-right: 15px;
  }

  .second-div,
  .third-div,
  .fourth-div {
    .first-child-div {
      margin-bottom: 15px;
    }
    .first-child-div,
    .second-child-div {
      height: 50%;
    }
  }
  .fourth-div .first-child-div {
    display: flex;
    flex-direction: column;
    .short-row-1,
    .short-row-2 {
      height: 50%;
      display: flex;
    }
    .short-row-1 {
      margin-bottom: 15px;
    }
    .first,
    .second,
    .third,
    .fourth {
      height: 100%;
      width: 50%;
    }
    .first,
    .third {
      margin-right: 15px;
    }
  }

  .fifth-div {
    width: 10%;
    margin: 15px;
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
    display: flex;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
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
  }
`
export const MainGallery = styled.div`
  padding: 0 1rem;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;

  .column {
    width: 25%;
    max-width: 25%;
    height: 100%;
    padding: 0 4px;
    box-sizing: border-box;

    img {
      margin-top: 8px;
      vertical-align: middle;
      width: 100%;
    }
  }
  @media screen and (max-width: 800px) {
    .column {
      flex: 50%;
      max-width: 50%;
    }
  }

  @media screen and (max-width: 600px) {
    .column {
      flex: 100%;
      max-width: 100%;
    }
  }
`
export const GallertHead = styled.h1`
  font-family: "Source Sans Pro";
  font-size: 3.5rem;
  color: #f37023;
  text-align: center;
  padding-top: 10vw;
`
