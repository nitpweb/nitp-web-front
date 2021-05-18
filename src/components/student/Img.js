import React from 'react'
import "./css/slide.css"

const Img = (props) => {
    //  console.log(props.url)
    // var style={"--i":props.id};

    return (
        <>
         <span className="box"  style={{ transform: `translateX(${props.trans}px)` }} data-aos="fade"><img src={props.url} className="img" alt=""></img></span>   
        </>
    )
}

export default Img
