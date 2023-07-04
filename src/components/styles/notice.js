import styled from "styled-components"

export const NoticeStyle = styled.div`
 width: auto;
 height: fit-content;
 padding: 5px 15px 5px 15px;
 ${"" /* background: ${props => props.theme.backgroundTerColor}; */}
 margin-top: 10px;
 .noticecarddetail {
  text-align: justify;
  font-size: 16px;
  font-family: "Source Sans Pro";
  margin: 0;
  a {
   text-decoration: none;
   color: ${props => props.theme.textColor};
   font-weight: 500;
  }
 }

 #flag {
  height: 16px;
 }
 #notdate {
  justify-content: space-between;
  div {
   display: flex;
   align-items: center;
   margin-left: 20px;
   max-width: 70%;
   flex-wrap: wrap;
   justify-content: flex-end;
   img {
    margin: 3px 8px 3px auto;
    height: 14px;
   }
   .notdown {
    text-decoration: none;
    position: relative;
    bottom: 0;
    /* margin-bottom: 5px; */
    color: ${props => props.theme.primaryColor};
    font-size: 13px;
    font-weight: 600;
    text-align: right;
    font-family: "Source Sans Pro";
    line-height: 1;
   }
  }
 }

 .notdown {
  text-decoration: none;
  position: relative;
  bottom: 0;
  /* margin-bottom: 5px; */
  color: ${props => props.theme.primaryColor};
  font-size: 13px;
  font-weight: 600;
  text-align: right;
  font-family: "Source Sans Pro";
  line-height: 1;
 }

 @media (max-width: 768px) {
  .noticecard {
   #fp {
    font-size: 12px;
   }
   .noticecarddetail {
    font-size: 14px;
   }
  }
 }
 ${"" /* .notet {
    position: relative;
    bottom: 0;
    margin: 4px 0 0 0;
    color: ${props => props.theme.secondaryTextColor};
    font-size: 14px;
    font-weight: 600;
    text-align: right;
    font-family: "Source Sans Pro";
    line-height: 0;
  } */}
`
