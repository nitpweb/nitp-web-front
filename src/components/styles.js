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
    p {
      font-family: Source Sans Pro;
      position: absolute;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 19px;
      text-align: center;
      color: #fff;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`
