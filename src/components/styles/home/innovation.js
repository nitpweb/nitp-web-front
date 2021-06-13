import styled from "styled-components"

export const InnovationStyle = styled.div`
  width: 100vw;
  height: 580px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(black),
    to(#363636)
  );
  background: linear-gradient(0deg, black, #363636);
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
  margin-top: 4vh;
  margin-bottom: 4vh;
  #head {
    position: absolute;
    color: white;
    left: 10%;
    top: 18%;
    font-family: "Nunito", sans-serif;
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
  }
  #two {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    position: absolute;
    right: 0;
    top: 5%;
    width: 100px;
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
    left: 0;
    bottom: 0;
    width: 80px;
    height: auto;
  }
  .child {
    background: rgba(0, 0, 0, 0.2);
    height: 200px;
    margin: 2vw;
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
      margin-left: 2rem;
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
        background-color: white;
        overflow: hidden;
        .text {
          width: 75%;
          padding: 8px;
          font-size: 11.5px;
          font-family: "Nunito", sans-serif;
          position: relative;
          #heading {
            font-weight: 600;
            margin: 0;
            #loadmore {
              text-decoration: none;
              color: #363636;
            }
          }
          #time {
            font-weight: 600;
            margin: 0;
            padding-bottom: 5px;
            position: absolute;
            bottom: 0;
            color: #363636;
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
      background: rgba(0, 0, 0, 0.4);
      width: auto;
      height: 200px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      cursor: pointer;
      position: absolute;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      z-index: 2;
      #arrow {
        width: 28px;
        height: auto;
        -webkit-filter: invert(1);
        filter: invert(1);
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
      background: rgba(0, 0, 0, 0.4);
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
        background: linear-gradient(
          90deg,
          #c4c4c4 0%,
          rgba(196, 196, 196, 0) 100%
        );
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 480px) {
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
      width: 80%;
    }
  }
  #loadMore {
    font-family: "Nunito", sans-serif;
    position: absolute;
    color: white;
    bottom: 25%;
    right: 10%;
    text-decoration: none;
  }
`
