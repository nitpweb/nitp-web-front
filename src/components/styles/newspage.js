import styled from "styled-components"

export const NewspageStyle = styled.div`
  font-family: "Source Sans Pro";
  padding-top: 10vw;
  justify-content: space-evenly;
  background-color: ${props => props.theme.backgroundColor};

  .head {
    padding-left: 5vw;
    h1 {
      color: ${props => props.theme.textColor};
    }
  }
  .newscard {
    width: 80%;
    padding-top: 2vh;
    margin-top: 3vh;
    margin-bottom: 3vh;
    background: ${props => props.theme.backgroundSecColor};
    box-shadow: 0px 0px 18px rgba(156, 156, 156, 0.38);
    border-radius: 5px;
    padding-bottom: 15px;
    font-family: "Source Sans Pro";
    list-style: disc;
    display: flex;
    justify-content: space-around;
    margin-top: 5vh;
    .news-img-wrap {
      overflow: hidden;
      width: 250px;
      height: 250px;
      min-width: 250px;
      border-radius: 5px;
      img {
        width: 100%;
        height: 100%;
        align-self: center;
        object-fit: contain;
      }
    }
    .news-details {
      margin: 10px;
      max-width: 80%;
      h1 {
        color: ${props => props.theme.textColor};
      }
      p {
        color: ${props => props.theme.textColor};
      }
    }
  }
  h3 {
    color: ${props => props.theme.textColor};
  }
  font-family: "Source Sans Pro";
`
