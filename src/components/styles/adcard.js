import styled from "styled-components"

export const AdCardStyle = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border-radius: 10px;
 width: 300px;
 height: 150px;
 overflow: hidden;
 box-shadow: 5px 10px 19px rgba(193, 104, 0, 0.25);
 box-shadow: 5px 10px 19px rgba(193, 104, 0, 0.25) unset;
 background: ${props => props.theme.backgroundSecColor};
 position: relative;
 margin: 1rem;
 text-align: center;

 .type {
  display: flex;
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
  justify-self: flex-end;
  justify-content: flex-end;
  width: 90%;
  span {
   color: ${props => props.theme.primaryColor};
   font-weight: bold;
   font-family: "Source Sans Pro";
  }
 }
 .adcardrow {
  display: flex;
  width: 94%;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
 }
 .adcardname {
  span {
   line-height: 1.2;
   font-weight: bold;
   font-family: "Source Sans Pro";
   color: ${props => props.theme.textColor};
  }
 }
 .designation {
  span {
   line-height: 1.3;
   font-family: "Source Sans Pro";
   color: ${props => props.theme.secondaryTextColor};
  }
 }
`
