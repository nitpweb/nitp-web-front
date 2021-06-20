import styled from "styled-components"

export const FacultyProfile = styled.div`
  font-family: "Source Sans Pro";
  padding-top: 1vw;
  display: flex;
  justify-content: space-evenly;
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.backgroundColor};

  .faculty-img-row {
    margin-top: 5vh;
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
      min-width: 250px;
      border-radius: 50%;

      img {
        width: 100%;
        height: auto;
        align-self: center;
      }
    }
  }
  .faculty-details-row {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
      }
      .factable {
        overflow: hidden;
        max-width: 100%;
        overflow-x: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
          display: none;
        }
        p {
          width: 200px;
          min-width: 48px;
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
        width: 100%;
        border-collapse: collapse;
      }
    }
  }
`
