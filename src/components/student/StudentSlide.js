import React, { useState, useEffect } from "react"
import { StudentSlideStyle } from "../styles/studentslide"
import { clubs } from "./clubs"

const StudentSlide = () => {
  const [data, setData] = useState(clubs)
  const [count, setCount] = useState(1)
  const [initial, setInitial] = useState(0)

  useEffect(() => {
    if(initial==0){
      const temp = document.getElementById(`s${count}`)
      temp.checked = true
      setInitial(1)
    }
    const interval = setInterval(() => {
      setCount(1 + (count % 7))
      const temp = document.getElementById(`s${count}`)
      temp.checked = true
      // console.log(temp.checked)
      // console.log(count)
    }, 3000)
    return () => clearInterval(interval)
  }, [count])  

  return (
    <StudentSlideStyle>
      <div
        className="row layoutrow clubsection"
        id="clubsection"
        data-aos="fade"
      >
        <div className="row rowmarl3">
          <h1
            data-aos="zoom-in-right"
            style={{ color: `white`, paddingLeft: `1rem`, margin: `0px` }}
          >
            Our Clubs
          </h1>
        </div>
        <div className="slide">
          <div
            className="move"
            onClick={() => {
              if (count === 1) {
                setCount(7)
              } else {
                setCount(count - 1)
              }
              const temp = document.getElementById(`s${count}`)
              temp.checked = true
              console.log(temp)
            }}
          >
            <i className="arrow left"></i>
          </div>
          <div id="slider">
            <input type="radio" name="slider" id="s1" onChange={() => {}} />
            <input type="radio" name="slider" id="s2" onChange={() => {}} />
            <input type="radio" name="slider" id="s3" onChange={() => {}} />
            <input type="radio" name="slider" id="s4" onChange={() => {}} />
            <input type="radio" name="slider" id="s5" onChange={() => {}} />
            <input type="radio" name="slider" id="s6" onChange={() => {}} />
            <input type="radio" name="slider" id="s7" onChange={() => {}} />

            <label htmlFor="s1" id="slide1">
              <div className="img-wrap">
                <img className="pic" src={data[1].url} alt=""></img>
              </div>
            </label>
            <label htmlFor="s2" id="slide2">
              <div className="img-wrap">
                <img className="pic" src={data[2].url} alt=""></img>
              </div>
            </label>
            <label htmlFor="s3" id="slide3">
              <div className="img-wrap">
                <img className="pic" src={data[3].url} alt=""></img>
              </div>
            </label>
            <label htmlFor="s4" id="slide4">
              <div className="img-wrap">
                <img className="pic" src={data[4].url} alt=""></img>
              </div>
            </label>
            <label htmlFor="s5" id="slide5">
              <div className="img-wrap">
                <img className="pic" src={data[5].url} alt=""></img>
              </div>
            </label>
            <label htmlFor="s6" id="slide6">
              <div className="img-wrap">
                <img className="pic" src={data[6].url} alt=""></img>
              </div>
            </label>
            <label htmlFor="s7" id="slide7">
              <div className="img-wrap">
                <img className="pic" src={data[0].url} alt=""></img>
              </div>
            </label>
          </div>
          <div
            className="move"
            onClick={() => {
              setCount(1 + (count % 7))
              const temp = document.getElementById(`s${count}`)
              temp.checked = true
              console.log(count)
            }}
          >
            <i className="arrow right"></i>
          </div>
        </div>
        <div className="info col-8">
          <div className="club" data-aos="zoom-in-right">
            <a href={data[count - 1].link}>{data[count - 1].Title}</a>
          </div>
          <p data-aos="zoom-in-left">{data[count - 1].description}</p>
        </div>
      </div>
    </StudentSlideStyle>
  )
}

export default StudentSlide
