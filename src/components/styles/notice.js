import styled from "styled-components"

export const NoticeStyle = styled.div`
  width: 90%;
  height: fit-content;
  padding: 5px 15px 5px 15px;
  background: ${props => props.theme.backgroundSecColor};
  margin-top: 10px;

  .noticecarddetail {
    font-size: 16px;
    font-family: "Source Sans Pro";
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
    display: flex;
    justify-content: flex-end;
    div {
      display: flex;
      align-items: flex-end;
      margin-left: 20px;
      padding-bottom: 10px;
      img {
        margin-right: 8px;
        height: 14px;
      }
      .notdown {
        text-decoration: none;
        position: relative;
        bottom: 0;
        margin-bottom: 5px;
        color: ${props => props.theme.primaryColor};
        font-size: 14px;
        font-weight: 600;
        text-align: right;
        font-family: "Source Sans Pro";
        line-height: 0;
      }
    }
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
  .notet {
    position: relative;
    bottom: 0;
    margin-bottom: 5px;
    color: ${props => props.theme.secondaryTextColor};
    font-size: 14px;
    font-weight: 600;
    text-align: right;
    font-family: "Source Sans Pro";
    line-height: 0;
  }
`
