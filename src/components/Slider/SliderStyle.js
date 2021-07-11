import styled from "styled-components"

export const SliderStyle = styled.div`
  .container-slider {
    height: 90vh;
    max-height: 90vw;
    margin: auto 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 700px) {
    .container-slider {
      margin: 10px 0;
    }
  }
  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }
  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .active-anim {
    opacity: 1;
  }

  .btn-slide {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f1f1f1;
    border: 1px solid rgba(34, 34, 34, 0.287);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .btn-slide img {
    width: 25px;
    height: 25px;
    pointer-events: none;
  }
  .prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }

  .next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }

  .container-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid #f1f1f1;
    margin: 0 5px;
    background: #f1f1f1;
  }
  .dot.active {
    background: rgb(32, 32, 32);
  }
`
