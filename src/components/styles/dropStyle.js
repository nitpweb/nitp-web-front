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
    /* color: ${props => props.theme.dropText}; */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 0px 10px 10px 10px;
    flex-direction: row;

    .content {
      display: flex;
      flex-direction: column;
      margin-top: 5px;
      height: fit-content;
      margin-left: 1rem !important;
      margin-right: 1rem !important;
      &:hover {
        border: 1px solid ${props => props.theme.border};
        background-color: ${props => props.theme.mainhover};
        /* border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem; */
        .mainLink{
            background-color: ${props => props.theme.hovernew};
        }
      }

     .mainLink {
        text-decoration: none;
        min-width: 150px;
        padding: 5px;
        background-color:${props => props.theme.bgmain};
        color: white;
        text-align: center;
        font-family: "Source Sans Pro";
      }
      .sub{
          display: flex;
          flex-direction: column;
          .subLink{
              text-decoration: none;
              color: ${props => props.theme.textnew};
              font-family: "Source Sans Pro";
              font-weight: 400;
              padding: 5px 8px;
              &:hover{
                color: red;
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
