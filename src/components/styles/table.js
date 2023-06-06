import styled from "styled-components"

export const TableStyle = styled.div`
 .table-t {
  display: flex;
  justify-content: center;
  .tablewrap {
   overflow: hidden;
   max-width: 90%;
   overflow-x: scroll;
   scrollbar-width: none;
   -ms-overflow-style: none;
   font-family: "Source Sans Pro";
   div {
    display: flexbox;
    justify-content: center;
    table {
     tr {
      th {
       padding: 10px 0px 0px 60px;
       font-size: 1.3rem;
       color: ${props => props.theme.primaryColor};
      }
      td {
       color: ${props => props.theme.textColor};
       text-align: center;
       padding: 10px 0px 0px 60px;
      }
     }
    }
   }
   &:-webkit-scrollbar {
    width: 0px;
    background: transparent;
   }
  }
 }
`
