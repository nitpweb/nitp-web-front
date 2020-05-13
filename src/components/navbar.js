import React from 'react';
import './global/css/navbar.css';
import logo from './global/img/logo512.png';
import toggle from '../assets/toggle.svg';

const Navbar=()=>{
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector(".nav-col>h2").style.lineHeight = "0.3rem";
      document.querySelector(".nav-col>h4").style.lineHeight = "0.3rem";
      document.querySelector(".nav-col").style.paddingTop = "0.5vh";
      document.querySelector(".nav-row").style.height = "8vh";
      document.querySelector(".logobadge>h4").style.display = "none";
      document.querySelector(".logobadge>img").style.maxHeight= "8vh";
      document.querySelector(".logobadge>img").style.borderWidth = "0px";
      document.querySelector(".logobadge>img").style.marginTop = "4vh";
      document.querySelector(".logobadge").style.backgroundColor = "transparent";
      document.querySelector(".logobadge").style.paddingLeft = "4vh";
      document.querySelector(".mobilelogo>img").style.maxHeight = "6vh";
      document.querySelector(".logobadge").style.transition = "1s";
      document.querySelector(".logobadge>h4").style.transition = "1s";
      document.querySelector(".logobadge>img").style.transition = "1s";
      document.querySelector(".mobilelogo>img").style.transition = "1s";
      document.querySelector(".nav-link-row").style.height = "4vh";
      document.querySelector(".nav-link-row").style.marginTop = "8vh";
      document.querySelector(".nav-link-row").style.backgroundColor = "#F7DDB5";
      document.querySelector(".nav-link-row").style.opacity = "1";

    } else {
      document.querySelector(".nav-col>h2").style.lineHeight = "0.6rem";
      document.querySelector(".nav-col>h4").style.lineHeight = "0.6rem";
      document.querySelector(".nav-row").style.height = "10vh";
      document.querySelector(".nav-link-row").style.height = "7vh";
      document.querySelector(".nav-link-row").style.backgroundColor = "black";
      document.querySelector(".nav-link-row").style.marginTop = "10vh";
      document.querySelector(".logobadge>h4").style.display = "block";
      document.querySelector(".logobadge>img").style.maxHeight = "15vh";
      document.querySelector(".logobadge>img").style.maxHeight= "15vh";
      document.querySelector(".logobadge>img").style.borderWidth = "1.5vh";
      document.querySelector(".logobadge").style.backgroundColor = "#E47F40";
      document.querySelector(".logobadge>img").style.marginTop = "0px";
      document.querySelector(".logobadge").style.paddingLeft = "0";
      document.querySelector(".mobilelogo>img").style.maxHeight = "8vh";
      document.querySelector(".logobadge").style.transition = "1s";
      document.querySelector(".logobadge>h4").style.transition = "1s";
      document.querySelector(".logobadge>img").style.transition = "1s";
      document.querySelector(".mobilelogo>img").style.transition = "1s";
      document.querySelector(".nav-link-row").style.opacity = "0.5";
      document.querySelector(".nav-col").style.paddingTop = "1vh";


    }
  } 
    return (
      <>
      <div className="nav-row">
        <div className="mobilelogo">
          <img src={logo} alt="NIT PATNA" />
        </div>
        <div className="nav-col">
          <h2>NATIONAL INSTITUTE OF TECHNOLOGY PATNA</h2>
          <h4>राष्ट्रीय प्रौद्योगिकी संस्थान, पटना</h4>
        </div>
          <div className="nav-link-row"></div>

        <div className="logobadge">
          <h4>श्रमोऽनवरत चेष्टाय</h4>
          <img src={logo} alt="NIT PATNA" />
        </div>
        <button className="nav-toggle"><img src={toggle} alt="menu" /></button>
      </div>
      </>
    );
}

export default Navbar;