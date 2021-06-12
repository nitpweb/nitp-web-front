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
    background-color: ${props => props.theme.backgroundSecColor};
    min-width: max-content;
    color: ${props => props.theme.textColor};
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 0px 5px 0px 5px;
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
    font-size: 0.8vw;
    opacity: 1;

    a {
      color: ${props => props.theme.textColor};
      padding: 8px 2px;
      text-decoration: none;
      display: block;
      font-size: 0.8vw;
      overflow: hidden;
      max-height: 0.8vw;
      &:hover {
        color: ${props => props.theme.primaryColor};
        transition: 0.05s;
      }
    }
  }
`