import styled from "styled-components";

export const EventCardStyle = styled.div`
    width: 93%;
    padding: 5px 15px 5px 15px;
    background: #fafafa;
    border-radius: 5px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    height: fit-content;
    .eventdtdiv {
      width: 77px;
      height: 80px;
      min-width: 77px;
      max-height: 80px;
      border-radius: 2px;
      max-width: 77px;
      background-color: #ff9350;
      #eventdate {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        p {
          position: relative;
          color: #fff;
          font-size: 36px;
          line-height: 0;
          font-family: "Source Sans Pro";
          font-weight: bold;
        }
      }

      #eventmonth {
        display: flex;
        justify-content: center;
        height: 20px;
        p {
          line-height: 0.1;
          color: #ffffff;
          font-family: "Source Sans Pro";
          position: relative;
          z-index: 2;
        }
      }
    }
  .eventcarddetailsection {
    width: 93%;
    .eventcarddetail {
      margin-left: 5%;
      font-size: 16px;
      font-family: "Source Sans Pro";
      color: #4d4d4d;
      a {
        text-decoration: none;
        color: #cd5a2f;
        font-weight: 600;
      }
    }
  }

  #eventdtp {
    display: flex;
    justify-content: flex-end;
    div {
      display: flex;
      align-items: center;
      margin-left: 20px;
      img {
        height: 16px;
      }
      .efp {
        position: relative;
        color: #7b7b7b;
        font-size: 14px;
        width: max-content;
        text-align: right;
        font-family: "Source Sans Pro";
        margin-left: 5px;
      }
    }
  }

  @media (max-width: 768px) {
    .eventcarddetailsection {
      .eventcarddetail {
        font-size: 14px;
      }
    }
    .eventcardwrap {
      width: 98%;
    }
    #eventdtp {
      div {
        .efp {
          font-size: 12px;
        }
      }
    }
    #eventdtp > div > img {
      height: 12px;
    }
  }
`