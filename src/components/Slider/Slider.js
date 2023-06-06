import React, { useState, useEffect } from "react"
// import "./Slider.css"
import { SliderStyle } from "./SliderStyle"
import BtnSlider from "./BtnSlider"

export default function Slider({
 dataSlider,
 showDots = false,
 type = "depImages",
}) {
 const [slideIndex, setSlideIndex] = useState(1)

 useEffect(() => {
  const interval = setTimeout(() => {
   nextSlide()
  }, 5000)
  return () => {
   clearInterval(interval)
  }
 }, [slideIndex])

 const nextSlide = () => {
  if (slideIndex !== dataSlider.length) {
   setSlideIndex(slideIndex + 1)
  } else if (slideIndex === dataSlider.length) {
   setSlideIndex(1)
  }
 }

 const prevSlide = () => {
  if (slideIndex !== 1) {
   setSlideIndex(slideIndex - 1)
  } else if (slideIndex === 1) {
   setSlideIndex(dataSlider.length)
  }
 }

 const moveDot = index => {
  setSlideIndex(index)
 }

 dataSlider = [dataSlider[dataSlider.length - 1], ...dataSlider]
 return (
  <SliderStyle type={type}>
   <div className="container-slider">
    {dataSlider.map((obj, index) => {
     return (
      <div
       key={index}
       className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
      >
       {obj}
      </div>
     )
    })}
    <BtnSlider moveSlide={nextSlide} direction={"next"} />
    <BtnSlider moveSlide={prevSlide} direction={"prev"} />

    {showDots && (
     <div className="container-dots">
      {Array.from({ length: dataSlider.length }).map((item, index) => (
       <div
        onClick={() => moveDot(index + 1)}
        className={slideIndex === index + 1 ? "dot active" : "dot"}
       ></div>
      ))}
     </div>
    )}
   </div>
  </SliderStyle>
 )
}
