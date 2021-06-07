import styled from "styled-components"

export const NoticeStyle = styled.div`
  width: 90%;
  height: fit-content;
  padding: 5px 15px 5px 15px;
  background: #fafafa;
  margin-top: 10px;

  .noticecarddetail {
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-weight: 500;
    color: #4d4d4d;
  }
  a {
    text-decoration: none;
    color: #4d4d4d;
    font-weight: 500;
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
        color: #cd5a2f;
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
    color: #7b7b7b;
    font-size: 14px;
    font-weight: 600;
    text-align: right;
    font-family: "Source Sans Pro";
    line-height: 0;
  }
`
