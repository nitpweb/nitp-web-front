import React from 'react';
import "./css/main.css";
import Union1 from "./img/Union1.svg";
import Union from "./img/Union.svg";
import Group444 from "./img/Group444.svg";
import Group445 from "./img/Group445.svg";
import Arrow from "./img/Arrow.png"
import Incard from './InCard';

const Innovation = () => {

    function scroll() {  
        console.log("hello");
      }

    return (
        <>
        <div className="innovation">
        <p id="head">Innovation</p>
        <img src={Union1} id="one"/>
        <img src={Union} id="two"/>
        <img src={Group445} id="three"/>
        <img src={Group444} id="four"/>
        <div className="child">
        <Incard/>
        <Incard/>
        <Incard/>
        <Incard/>
        <Incard/>
        <Incard/>
        <div className="child1" onClick={scroll}>
        <img id="arrow" src={Arrow}/>
        </div>
        </div>
        </div>
        </>
    );
};

export default Innovation;