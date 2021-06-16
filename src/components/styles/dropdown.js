import styled from "styled-components";

export const DropdownStyle = styled.div`
  .dropbtn {
    background: transparent;
    border: none;
    text-decoration: none;
    color: ${props => props.theme.dropText};
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
    background-color: ${props => props.theme.dropColor};
    min-width: 175px;
    color: ${props => props.theme.dropText};
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
      display: flex;
      justify-content: center;
      padding: 8px;
      text-decoration: none;
      display: block;
      font-size: 14px;
      overflow: hidden;
      /* max-height: 1.2vw; */
      color: ${props=>props.theme.dropBg};
      margin: 0 !important;
      &:hover {
        color:${props=>props.theme.dropText};
        transition: 0.05s;
        font-weight:600;
        background-color:${props=>props.theme.dropBg};
      }
    }
  }
`