import styled from "styled-components"

export const EventCardStyle = styled.div`
  width: 100%;
  padding: 5px 15px 5px 15px;
  background: ${props => props.theme.backgroundTerColor};
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
    background-color: ${props => props.theme.primaryColor};
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
        word-wrap: break-word;
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
    width: calc(100% - 77px);
    flex-direction: column;

    .eventcarddetail {
      margin-left: 5%;
      font-size: 20px;
      font-family: "Source Sans Pro";
      color: ${props => props.theme.textColor};
      a {
        text-decoration: none;
        color: ${props => props.theme.textColor};
        font-weight: 600;
        text-align: justify;
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
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        img {
          height: 16px;
        }
      }
      .efp {
        /* position: relative; */
        color: ${props => props.theme.primaryTextColor};
        font-size: 14px;
        width: max-content;
        text-align: left;
        font-family: "Source Sans Pro";
        margin-left: 5px;
        letter-spacing: -0.03rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: auto;
    .eventcarddetailsection {
      .eventcarddetail {
        font-size: 16px;
        margin-right: 5%;
        width: 75%;
        text-align: justify;
      }
    }
    .eventcardwrap {
      width: 98%;
    }
    #eventdtp {
      padding-right: 5%;
      div {
        .efp {
          font-size: 14px;
        }
      }
    }
    #eventdtp > div > img {
      height: 12px;
    }
  }
`
