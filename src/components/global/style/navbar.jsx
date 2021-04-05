import styled from "styled-components"

export const Nav = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100vw;
  position: fixed;
  background-color: #f7f7f7;
  z-index: 5;
  .mobilelogo {
    display: none;
    margin-left: 10px;
  }
  .nav-col {
    width: 42%;
    padding-left: 3vw;
    padding-top: 0.5vw;
    h2 {
      margin-bottom: 0;
      font-size: 1.3vw;
      line-height: 0.3rem;
      font-family: "Source Sans Pro";
      font-weight: 900;
    }
    h4 {
      font-family: "Mangal";
      font-size: 0.9vw;
      line-height: 0.3rem;
    }
  }
  .nav-link-row {
    display: flex;
    margin-top: 4.7vw;
    width: 100vw;
    height: 2.3vw;
    padding-left: 3vw;
    background-color: black;
    opacity: 0.8;
    z-index: 2;
    position: fixed;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 1200px) {
    .nav-link-item {
      height: 28px;
      font-weight: 400;
    }
  }
  @media (max-width: 1000px) {
    .nav-link-item {
      height: 22px;
      font-weight: 300;
    }
  }
  @media (max-width: 768px) {
    align-items: center;
    .mobilelogo {
      display: block;
      padding-right: 10px;
      img {
        max-height: 6vh;
      }
    }
  }
`
