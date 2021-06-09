import styled from "styled-components";

export const TableStyle = styled.div`
  .tablewrap {
    overflow: hidden;
    max-width: 90%;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    font-family: "Source Sans Pro";
  }
  .tablewrap:-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  .tablewrap > div {
    display: flexbox;
    justify-content: center;
  }
  .table-t {
    display: flex;
    justify-content: center;
  }
  .syllabus-table-head > th,
  .syllabus-table-row > td {
    font-family: "Quicksand";
    padding: 10px 0px 0px 60px;
  }
  .syllabus-table-head > th {
    font-size: 1.3rem;
    color: ${props => props.theme.primaryColor};
  }

  .syllabus-table-row > td {
    color: ${props => props.theme.textColor};
    text-align: center;
  }
`