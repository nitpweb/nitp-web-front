import styled from "styled-components"

export const InnovationStyle = styled.div`
 width: 100vw;
 height: 350px;
 background: ${props => props.theme.backgroundSecColor};
 ${"" /* background: rgb(240, 240, 240); */}
 /* background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(white),
    to(${props => props.theme.backgroundTerColor})
  );
  background: linear-gradient(0deg, ${props =>
  props.theme.backgroundTerColor},lightgrey, ${props =>
  props.theme.backgroundTerColor}); */
  display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-align: center;
 -ms-flex-align: center;
 align-items: center;
 -webkit-box-pack: center;
 -ms-flex-pack: center;
 justify-content: center;
 -webkit-box-orient: horizontal;
 -webkit-box-direction: normal;
 -ms-flex-direction: row;
 flex-direction: row;
 position: relative;
 margin-top: 3vh;
 margin-bottom: 2vh;
 #head {
  position: absolute;
  color: ${props => props.theme.primaryTextColor};
  left: 6%;
  top: 6%;
  font-family: "NotoSans";
  font-weight: bold;
  font-size: 30px;
  margin: 0;
 }
 #one {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  position: absolute;
  top: 0;
  left: 5%;
  width: 200px;
  filter: invert(1);
 }
 #two {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  position: absolute;
  right: 0;
  top: 5%;
  width: 100px;
  filter: invert(1);
 }
 #three {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  position: absolute;
  right: 0;
  bottom: 0;
  width: 90px;
  height: auto;
 }
 #four {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  position: absolute;
  left: 0%;
  bottom: 0%;
  width: 80px;
  height: auto;
  filter: invert(1) opacity(0.25);
 }
 .child {
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.035);
  height: 200px;
  /* margin: 2vw; */
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  /* -ms-flex-direction: row-reverse;
          flex-direction: row-reverse; */
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  .card {
   height: 200px;
   width: 300px;
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -ms-flex-direction: column;
   flex-direction: column;
   margin-right: 1rem;
   text-decoration: none;
   .part1 {
    width: 300px;
    height: 65%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    img {
     min-width: 100%;
     min-height: 100%;
     width: auto;
     height: auto;
    }
   }
   .part2 {
    width: 100%;
    height: 35%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    background-color: ${props => props.theme.backgroundColor};
    overflow: hidden;
    .text {
     width: 75%;
     padding: 8px;
     font-size: 11.5px;
     font-family: "NotoSans";
     position: relative;
     #heading {
      font-weight: 600;
      margin: 0;
      #loadmore {
       text-decoration: none;
       color: ${props => props.theme.textColor};
      }
     }
     #time {
      font-weight: 600;
      margin: 0;
      padding-bottom: 5px;
      position: absolute;
      bottom: 0;
      color: ${props => props.theme.textColor};
     }
    }
    .pic {
     width: 25%;
     display: -ms-grid;
     display: grid;
     place-items: center;
     img {
      width: 70%;
      height: 70%;
      border-radius: 50%;
     }
    }
   }
  }
  .child1 {
   background: rgba(0, 0, 0, 0.05);
   width: auto;
   height: 200px;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   justify-content: center;
   border-radius: 0.5rem;
   cursor: pointer;
   position: absolute;
   -webkit-transform: translateX(-100%);
   transform: translateX(-100%);
   z-index: 2;
   #arrow {
    width: 28px;
    height: auto;
    -webkit-filter: invert(0.5);
    filter: invert(0.5);
    padding: 5px;
   }
   &:hover {
    background: -webkit-gradient(
     linear,
     right top,
     left top,
     from(#c4c4c4),
     to(rgba(196, 196, 196, 0))
    );
    background: linear-gradient(
     -90deg,
     #c4c4c4 0%,
     rgba(196, 196, 196, 0) 100%
    );
   }
  }
  .child2 {
   background: rgba(0, 0, 0, 0.05);
   width: auto;
   height: 200px;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   justify-content: center;
   cursor: pointer;
   margin-left: 38px;
   -webkit-transform: translateX(-100%);
   transform: translateX(-100%);
   z-index: 2;
   &:hover {
    background: -webkit-gradient(
     linear,
     right top,
     left top,
     from(#c4c4c4),
     to(rgba(196, 196, 196, 0))
    );
    background: linear-gradient(90deg, #c4c4c4 0%, rgba(196, 196, 196, 0) 100%);
   }
  }
  &::-webkit-scrollbar {
   display: none;
  }
 }

 @media (max-width: 480px) {
  #three {
   filter: opacity(0.3);
  }
  .child {
   width: 95%;
  }
  .child1 {
   display: none;
  }
 }
 @media (min-width: 481px) {
  .child1 {
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
  }
  .child {
   width: 88%;
  }
 }
 #loadMore {
  font-family: "NotoSans";
  position: absolute;
  color: #121212;
  bottom: 10%;
  right: 6%;
  text-decoration: none;
  font-weight: 600;
  z-index: 5;
 }
`
