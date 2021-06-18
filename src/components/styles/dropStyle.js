import styled from "styled-components"

export const DropStyle = styled.div`
  position: relative;
  display: inline-block;
  .links {
    display: none;
    position: absolute;
    max-height: 75vh;
    background-color: ${props => props.theme.bgnew};
    min-height: fit-content;
    max-width: 80vw;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 0;
    flex-direction: row;

    .content {
      display: flex;
      flex-direction: column;
      width: fit-content;
      margin: 5px 0;
      height: fit-content;
      margin-left: 0.5rem !important;
      margin-right: 0.5rem !important;
      transition: all 0.5s ease-in-out;
      &:hover {
        border: 1px solid ${props => props.theme.border};
        background-color: ${props => props.theme.mainhover};
        .mainLink{
            background-color: ${props => props.theme.hovernew};
        }
      }

     .mainLink {
        text-decoration: none;
        width: auto;
        display: flex;
        padding: 7px;
        align-items: center;
        background-color:${props => props.theme.bgmain};
        color: white;
        font-size: 1vw;
        font-weight:400;
      }
      .sub{
          display: flex;
          flex-direction: column;
          width: max-content;
          .subLink{
              text-decoration: none;
              color: ${props => props.theme.textnew};
              font-weight: 400;
              font-size:0.85vw;
              padding: 0px 10px;
              line-height: 2;
              &:hover{
                color: ${props => props.theme.hovertext};
                font-weight: 600;
              }
          }
      }
    }
  }
  .title_main {
    background: transparent;
    border: none;
    text-decoration: none;
    color: white;
    font-family: "Source Sans Pro";
    font-size: 1vw;
    font-weight: 500;
    line-height: 1.6;
    display: flex;
    &:hover{
      color: white !important;
    }
  }
  &:hover .links {
    display: flex;
    opacity: 1;
    transition: 0.05s;
  }
`
