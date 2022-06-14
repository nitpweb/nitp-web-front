import React, {useState, useEffect} from "react"
import { GallertHead } from "./styles"


import images from './images/images.json'


const Extendedgallery = () => {
  
  return (
    <>
      <GallertHead>Gallery</GallertHead>
      <div
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          flexDirection: `row`,
          padding: `2vw`,
        }}
      >
        {images.map(i => {
          return (
            <img
              src={`https://web.nitp.ac.in/gallery/images/${i}`}
              style={{
                flexGrow: 1,
                height: `${250}px`,
                maxWidth: `${500}px`,
                boxSizing: `border-box`,
                margin: `${3}px`,
                padding: `${3}px`
              }}
            />
          )
        })}
      </div>
    </>
  )
}

export default Extendedgallery
