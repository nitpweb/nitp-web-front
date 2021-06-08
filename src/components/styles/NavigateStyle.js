import styled from "styled-components"

export const NavigateStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  margin: 0 0 0 3vw;
  .childLink {
    margin-top: 0;
    width: 120px;
    min-height: 50px;
    max-height: 78px;
    background-color: white;
    border: 1px solid lightgrey;
    display: grid;
    place-items: center;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
    background: white;
    cursor: pointer;
    outline: none;
    p {
      font-size: 14px;
      font-weight: 600;
      color: #cf5d31;
      text-align: center;
      transition: all 1s ease;
      text-rendering: optimizeLegibility;
      font-family: Source Sans Pro;
      margin: 0;
      padding: 0 0.2rem;
    }
    &:focus {
      background-color: #cf5d31;
      transform: scale(1.05);
      margin: 0.15rem 0;
      p {
        color: white;
      }
      object {
        color: white;
        filter: invert(100%) sepia(0%) saturate(7473%) hue-rotate(163deg)
          brightness(108%) contrast(108%);
      }
    }
    object {
      max-height: 50%;
      width: auto;
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    top: 0%;
    justify-content: center;
    margin: 0;
    .childLink {
      width: 105px;
      min-height: 35px;
      height: 35px;
      padding: 0 0.5rem;
      margin: 0.2rem 0.2rem;
      background-color: #cf5d31;
      border-radius: 2rem;
      p {
        font-size: 12px;
        color: white;
        font-weight: normal;
        padding: 0;
      }
      &:focus {
        background-color: white;
        transform: scale(1.05);
        margin: 0 0.15rem;
        p {
          color: #cf5d31;
        }
      }
      object {
        max-height: 50%;
        width: auto;
        display: none;
      }
    }
  }
`
