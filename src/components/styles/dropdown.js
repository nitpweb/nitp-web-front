import styled from "styled-components";

export const DropdownStyle = styled.div`
  .dropbtn {
    background: transparent;
    border: none;
    text-decoration: none;
    color: ${props => props.theme.textColor};
    font-family: "Source Sans Pro";
    font-size: 1vw;
    font-weight: 500;
    line-height: 1.6;
    display: flex;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: black;
    min-width: max-content;
    color: ${props => props.theme.textColor};
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 0px 10px 10px 10px;
  }

  &:hover .dropdown-content {
    display: block;
    opacity: 1;
    transition: 0.05s;
  }

  .dropdown:hover .dropbtn {
    color: ${props => props.theme.primaryColor};
    transition: 0.05s;
  }
  .dropdown-content {
    font-size: 1vw;
    opacity: 1;

    a {
      padding: 8px;
      text-decoration: none;
      display: block;
      font-size: 1vw;
      overflow: hidden;
      max-height: 1vw;
      border-bottom: 1px solid white;
      color: white;
      &:hover {
        color: yellow;
        transition: 0.05s;
        font-weight:600;
      }
    }
  }
`