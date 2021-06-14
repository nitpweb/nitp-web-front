import styled from "styled-components"

export const NavbarStyle = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100vw;
  font-family: "Source Sans Pro";
  position: fixed;
  z-index: 5;
  .nav-head-row {
    height: 24px;
    background-color: ${props => props.theme.primaryColor};
    z-index: 5;
    width: 100vw;
    display: flex;
    .start {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding-left: 2vw;
      align-items: center;
      width: 50%;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
    .end {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 50%;
      padding-right: 2vw;
      span {
        margin: 0px 20px 0px 20px;
      }
      a {
        text-decoration: none;
        color: #fff;
      }
      .themebtn {
        width: 28px;
        background-color: transparent;
        margin: 0px 20px 0px 20px;
        border: 0;
      }
    }
  }
  .nav-title-row {
    background-color: ${props => props.theme.backgroundColor};
    .nav-col {
      h2,
      h4 {
        color: ${props => props.theme.textColor};
        font-family: "Source Sans Pro";
        text-rendering: optimizeLegibility;
      }
    }
    .right {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      height: fit-content;
      margin: 0;
      height: 100%;
      padding: 0;
      padding-right: 50px;
      width: 50%;
      p {
        margin: 0;
        font-family: "Nunito", sans-serif;
        width: 240px;
        font-size: 14px;
        line-height: 14px;
        color: ${props => props.theme.textColor};
      }
    }
    .mobilelogo {
      display: none;
      margin-left: 10px;
    }
    .nav-toggle {
      display: none;
    }
  }
  .nav-link-row {
    display: flex;
    width: 100vw;
    height: 2vw;
    background-color: black;
    opacity: 0.8;
    z-index: 2;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
    .col-6 {
      width: 50%;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;
      display: flex;
      .nav-link-item-active > span {
        color: #ffe657;
        border-width: 0px 0px 3px 0px;
      }
      .nav-link-item {
        text-decoration: none;
        color: #fff;
        font-family: "Source Sans Pro";
        font-size: 1vw;
        font-weight: 500;
        line-height: 1.6;
        display: flex;
        align-items: center;
        cursor: pointer;
        span:hover {
          color: #ffe657;
          transition: 0.1s ease-in-out;
        }
      }
    }
  }
  #logowr1 {
    position: absolute;
    text-decoration: none;
    min-width: 100%;
    display: flex;
    justify-content: center;
    user-select: none;
    .logobadge {
      position: relative;
      background-color: ${props => props.theme.primaryColor};
      border-radius: 0px 0px 40% 40%;
      max-height: 11vw;
      text-decoration: none;
      z-index: 5;
      h4 {
        display: flex;
        justify-content: center;
        font-family: "Mangal";
        color: white;
        margin-bottom: 0px;
        line-height: 1;
        font-weight: normal;
        font-size: 1vw;
        z-index: 5;
      }
      #logowr2 {
        display: flex;
        justify-content: center;
        img {
          max-height: 8vw;
          border: 0.5vw solid ${props => props.theme.primaryColor};
          border-radius: 50%;
          display: flex;
          box-shadow: inset 0px 40px 50px rgba(0, 0, 0, 0.25);
          z-index: 5;
        }
      }
    }
  }

  .dep-nav-row {
    display: flex;
    width: 100vw;
    background-color: #d45628;
    font-family: "Source Sans Pro";
    color: ${props => props.theme.backgroundColor};
    padding-top: 2px;
    letter-spacing: 0.2rem;
    padding-bottom: 2px;
    z-index: 1;
    .col-6 {
      width: 50%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      .dep-link-item {
        text-decoration: none;
        color: #fff;
        font-size: 0.8vw;
      }
    }
  }

  .nav-col {
    width: 42%;
    padding-left: 3vw;
    padding-top: 0.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  .nav-sidebar > .nav-sidebar-div:nth-of-type(2n + 1) {
    background-color: ${props => props.theme.backgroundSecColor};
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
    .nav-title-row {
      .right {
        display: none !important;
        p {
          display: none !important;
        }
      }
      .mobilelogo {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 10px;
        img {
          max-height: 6vh;
        }
      }
      .nav-toggle {
        display: block;
        position: relative;
        max-width: 10%;
        border: none;
        background: transparent;
        max-height: 10vh;
      }
    }
    .nav-col {
      width: 70%;
      max-width: 70vw;
      color: ${props => props.theme.backgroundColor};
      h2 {
        font-size: 10px;
      }
    }
    .nav-link-row,
    .dep-nav-row {
      display: none;
    }

    .departsidedrop > .nav-sidebar-div:nth-of-type(2n + 1) {
      background-color: ${props => props.theme.backgroundSecColor};
    }
    #mainsidedrop > .nav-sidebar-div:nth-of-type(2n + 1) {
      background-color: ${props => props.theme.backgroundSecColor};
    }
    #mainsidedrop {
      display: none;
      transition: 0.1s;
    }

    .logobadge {
      display: none;
    }
    .nav-row {
      align-items: center;
    }
  }
  @media (max-width: 500px) {
    .nav-col {
      width: 60%;
      h4 {
        font-size: 10px;
      }
      h2 {
        font-size: 10px;
      }
    }
    .nav-row {
      align-items: center;
    }
  }
  .nav-sidebar {
    display: none;
    min-height: 100vh;
    position: absolute;
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: thin;
    top: 0;
    float: right;
    z-index: 7;
    background: ${props => props.theme.backgroundColor};
    min-width: 280px;
    width: 280px;
    max-width: 90vw;
    justify-content: center;
    padding-top: 10px;
    transition: all ease-in 0.5s;
  }

  .nav-sidebar-div {
    display: flex;
    width: 280px;
    padding-left: 25px;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.textColor};
    font-family: "Source Sans Pro";
    font-size: 16px;
    line-height: 1;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .navsideicondiv {
    width: 15%;
  }
  .navsidetop {
    display: flex;
    align-items: center;
    margin-left: 5px;
    text-decoration: none;
  }
  .navsidetop > p {
    margin-left: 20px;
    font-family: "Source Sans Pro";
    font-weight: bold;
    color: ${props => props.theme.textColor};
  }
  .navsidetop > img {
    width: 50px;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  #sidedropicon {
    transition: 0.01s ease-in-out;
  }
  #departsidedropwrap,
  #adminsidedropwrap,
  #aboutsidedropwrap,
  #acadsidedropwrap,
  #facsidedropwrap,
  #placementsidedropwrap {
    display: none;
    padding-left: 0px;
  }
  .departsidedrop > .nav-sidebar-div {
    padding-left: 25px;
  }
  #mainsidedrop > .nav-sidebar-div {
    display: flex;
  }
  #maindropwrap {
    display: none;
  }
`
