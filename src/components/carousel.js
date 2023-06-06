import React, { useState, useEffect, useMemo } from "react"
import { CarouselStyles } from "./styles/carousel"

const Carousel = ({ LabImages, type }) => {
 const [slideIndex, setSlideIndex] = useState(1)

 // function plusSlides(n) {
 //   let b = slideIndex + n
 //   setSlideIndex(b)
 // }
 let slides = []

 if (typeof window !== "undefined") {
  slides = document.getElementsByClassName("mySlides")
 }

 // function currentSlide(n) {
 //   showSlides((slideIndex = n))
 // }
 function showSlides(n) {
  var i

  if (n >= slides.length) {
   setSlideIndex(0)
   return
  }
  if (n < 0) {
   setSlideIndex(slides.length - 1)
   return
  }

  for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none"
  }
  if (slides[slideIndex]) slides[slideIndex].style.display = "block"

  //  slides[slideIndex - 1].style.display = "block"
  //  dots[slideIndex - 1].className += " active"
 }

 useEffect(() => {
  const nxt = setTimeout(() => {
   setSlideIndex(prevS => prevS + 1)
  }, 5000)
  return () => clearTimeout(nxt)
 })

 useEffect(() => {
  showSlides(slideIndex)
 }, [slideIndex])

 return (
  <CarouselStyles type={type}>
   <div className="slideshow-container">
    {LabImages?.map((img, idx) => (
     <div className="mySlides fade" key={idx}>
      {img}
     </div>
    ))}

    <a className="prev" onClick={() => setSlideIndex(prevS => prevS - 1)}>
     &#10094;
    </a>
    <a className="next" onClick={() => setSlideIndex(prevS => prevS + 1)}>
     &#10095;
    </a>
   </div>
  </CarouselStyles>
 )
}

export default Carousel
