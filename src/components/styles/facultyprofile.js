import styled from "styled-components"

export const FacultyProfile = styled.div`
  font-family: "Source Sans Pro";
  padding:4rem 0;
  display: flex;
  height: max-content;
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.backgroundColor};
  justify-content: flex-end;
  .faculty-img-row {
    margin-top: 3vh;
    position: fixed;
    left: 2%;
    justify-content: center; 
    text-align: center;
    .facmail {
      position: absolute;
      margin-top: -70px;
      margin-left: 60px;
    }
    h3 {
      color: ${props => props.theme.textColor};
    }
    font-family: "Source Sans Pro";
    .faculty-img-wrap {
      overflow: hidden;
      width: 250px;
      height: 250px;
      border-radius: 50%;

      img {
        width: 100%;
        height: auto;
        align-self: center;
        object-fit: cover;
      }
    }
  }
  .faculty-details-row {
    width: calc(100% - 320px);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    h1{
      padding-left: 5%;
    }
    #dir {
      line-height: 1.5;
      letter-spacing: 1px;
      padding-right: 3vw;
      padding-top: 25px;
    }
    .fac-card {
      width: 90%;
      margin-top: 3vh;
      margin-bottom: 3vh;
      background: ${props => props.theme.backgroundSecColor};
      box-shadow: 0px 0px 18px rgba(156, 156, 156, 0.38);
      border-radius: 5px;
      padding-left: 5%;
      padding-bottom: 15px;
      font-family: "Source Sans Pro";
      list-style: disc;
      h3 {
        color: ${props => props.theme.textColor};
      }
      p {
        max-width: 95%;
        font-size: ${props => parseInt(props.theme.font * 1)}rem;
      }
      .factable {
        overflow: hidden;
        max-width: 100%;
        table-layout: auto;
        overflow-x: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
          display: none;
        }
        p {
          max-width: inherit;
          min-width: 68px;
        }
        td {
          text-align: left;
          padding: 8px;
        }
        th {
          text-align: left;
          padding: 8px;
        }
      }
      .factable:-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
      table {
        min-width: 90%;
        table-layout: auto;
        max-width: 100%;
        border-collapse: collapse;
      }
    }
  }
  @media (max-width: 768px) {
    padding-top: 10vh;
    justify-content: space-evenly;
    .faculty-img-row {
      position: relative !important;
      left:0 !important;
    }
    .faculty-details-row {
      width: 90%;
      align-items: center;
    }
  }
`
