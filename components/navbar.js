import React from 'react';
import logo from '../assets/logo512.png';
import { window, document } from 'ssr-window';
import 'next-images';

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
          <span className="nav-toggle" onClick={function(){
            var x = document.querySelector(".nav-sidebar");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }}><svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d)">
                <rect x="13" y="13" width="36" height="36" rx="4" fill="white" />
              </g>
              <line x1="20" y1="22.5" x2="42" y2="22.5" stroke="#E47F40" />
              <line x1="20" y1="30.5" x2="42" y2="30.5" stroke="#DB713A" />
              <line x1="20" y1="38.5" x2="42" y2="38.5" stroke="#CE5B30" />
              <defs>
                <filter id="filter0_d" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="6.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
              </defs>
            </svg>
</span>
        <div className="nav-sidebar"></div>
      </div>
      </>
    );
}

export default Navbar;