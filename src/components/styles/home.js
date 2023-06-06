import styled from "styled-components"

export const HomeStyle = styled.div`
 overflow-x: hidden;
 background-color: ${props => props.theme.backgroundColor};
 .nitpbackimg {
  width: 100%;
  max-height: 70vw;
 }
 .tablinkcover {
  display: none;
  width: 100%;
  .tablink {
   display: none;
   justify-content: center;
   align-items: center;
   width: 33%;
   box-shadow: 7px 7px 26px rgba(207, 207, 207, 0.36);
   height: 25px;
   font-family: "Source Sans Pro";
   color: ${props => props.theme.primaryTextColor};
   text-decoration: none;
   a {
    text-decoration: none;
    color: ${props => props.theme.primaryTextColor};
    font-size: 14px;
    font-weight: bold;
   }
  }
 }

 .bgimgwrap {
  overflow: hidden;
  width: 100%;
  max-height: 85vh;
  position: relative;
  /* margin-left: 5%; */
 }
 #notice-event {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
 }
 .notice-row {
  display: -ms-flexbox;
  display: flex;
  /* -ms-flex-wrap: wrap;
    flex-wrap: wrap; */
  flex-direction: column;
  width: 30vw;
  height: 160px;
  max-height: 280px;
  z-index: 1;
  justify-content: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  height: 280px;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
 }
 .notice-row::-webkit-scrollbar {
  display: none;
 }
 .event-row {
  display: -ms-flexbox;
  display: flex;
  /* -ms-flex-wrap: wrap;
    flex-wrap: wrap; */
  flex-direction: column;
  width: 30vw;
  max-height: 280px;
  z-index: 1;
  border-radius: 3px;
  justify-content: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
 }
 .event-row::-webkit-scrollbar {
  display: none;
 }
 .news-head,
 .gallery-head,
 .notice-head,
 .event-head {
  height: 52px;
  border-radius: 2px;
  z-index: 2;
  font-size: 28px;
  line-height: 35px;
  color: ${props => props.theme.primaryTextColor};
  display: flex;
  justify-content: space-between;
  font-family: "NotoSans";
  font-weight: bold;
  // padding-left: 18px;
  align-items: center;
  // padding: 2vw;
  #notice-head-p,
  #event-head-p {
   color: ${props => props.theme.textColor};
   font-size: 1rem;
   display: flex;
   text-decoration: none;
  }

  #news-head-p {
   color: ${props => props.theme.textColor};
   font-size: 1rem;
   display: flex;
   margin-left: 122px;
   text-decoration: none;
  }
 }
 .news-head {
  padding: 0 6vw 0 6.8vw;
 }

 .gallery-head {
  margin-left: 6.8vw;
  /* margin-right: 5vw; */
 }
 .gallery {
  /* margin-right: 5vw; */
  display: flex;
  height: 400px;
 }
 @media (max-width: 1024px) {
  #notice-event {
   flex-direction: column;
   display: flex;
  }
  .notice-row,
  .event-row,
  .notice-head,
  .event-head {
   padding: 0vw 5vw;
   width: calc(100% - 10vw);
  }

  .tablinkcover,
  .tablink {
   display: flex;
  }
 }
 .bgimgwrap {
  margin-top: 5vh;
 }

 .news-row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100vw;
  height: 350px;
  width: 95vw;
  z-index: -1;
  /* margin-right: 5vw; */
  /* padding-bottom: 6vh; */
  /* padding-bottom: 3vh; */
  /* margin-left: 5vw; */
  margin-left: 3vw;
  border-radius: 3px;
  display: flex;
  margin-bottom: 3vh;
  justify-content: center;
 }
 .news-viewbox::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
 }
 .news-viewbox {
  overflow: hidden;
  min-width: 95%;
  height: calc(350px + 5vh);
  max-height: calc(350px + 5vh);
  max-width: 95%;
  overflow-x: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  display: flex;
  border-radius: 5px;
  background: linear-gradient(
   270deg,
   ${props => props.theme.backgroundColor} 0%,
   rgba(255, 255, 255, 0) 6.98%
  );
 }
 @media (min-width: 768px) {
  .bgimgwrap {
   margin-top: 0;
  }
 }
`
