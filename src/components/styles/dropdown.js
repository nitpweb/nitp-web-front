import styled from "styled-components";

export const DropdownStyle = styled.div`
  .dropbtn {
    background: transparent;
    border: none;
    text-decoration: none;
    color: #fff;
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
    color: #fff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: #fff;
    padding: 8px 2px;
    text-decoration: none;
    display: block;
    font-size:1vw;
    overflow: hidden;
    max-height: 1vw;
  }

  .dropdown-content a:hover {
    color: #ffe657;
    transition: 0.05s;
  }

  &:hover .dropdown-content {
    display: block;
    transition: 0.05s;
  }

  .dropdown:hover .dropbtn {
    color: #ffe657;
    transition: 0.05s;
  }
  .dropdown-content > .nav-link-item {
    font-size: 1vw;
  }
`