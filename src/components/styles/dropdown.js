import styled from "styled-components"

export const DropdownStyle = styled.div`
 #rightlink {
  margin-left: calc(-275px + 8vw);
 }
 .dropbtn {
  background: transparent;
  border: none;
  text-decoration: none;
  color: ${props => props.theme.dropText};
  font-family: "Source Sans Pro";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  display: flex;
  &:hover {
   color: tomato !important;
  }
  &:focus {
   color: tomato !important;
  }
 }

 .dropdown {
  position: relative;
  display: inline-block;
 }

 .dropdown-content {
  display: none;
  position: absolute;
  background-color: ${props => props.theme.bgnew};
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
  font-size: 16px;
  font-weight: 400;
  opacity: 1;

  a {
   display: flex;
   justify-content: center;
   padding: 5px 6px;
   text-decoration: none;
   display: block;
   font-size: 16px;
   overflow: hidden;
   /* max-height: 1.2vw; */
   color: ${props => props.theme.dropBg};
   margin: 0 !important;
   &:hover {
    color: ${props => props.theme.dropText};
    transition: 0.05s;
    font-weight: lighter;
    background-color: ${props => props.theme.dropBg};
   }
  }
 }
`
