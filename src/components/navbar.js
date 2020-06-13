import React from 'react';
import './global/css/navbar.css';
import './global/css/dropdown.css';
import logo from './global/img/logo512.png';
import toggle from '../assets/toggle.svg';
import {window} from 'ssr-window';
import styled, {css} from 'styled-components';
import {Link} from 'gatsby';

  
const Li=css`
  text-decoration: none;
  color: #000;
  font-family:"Source Sans Pro";
  font-size: 20px;
  line-height: 1.6;`

const Rowlink=css`text-decoration: none;
  color: #fff;
  font-family: "Source Sans Pro";
  font-size: 20px;
  font-weight:600;
  line-height: 1.6;
  display:flex;
  margin-top:0.5vw;
   @media(max-width:1500px){
    font-size:14px;
  }
  `


const Navbar=()=>{
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector(".nav-col>h2").style.lineHeight = "0.2rem";
      document.querySelector(".nav-col>h4").style.lineHeight = "0.2rem";
      document.querySelector(".nav-row").style.height = "4vw";
      document.querySelector(".nav-link-row").style.height = "2.5vw";
      document.querySelector(".nav-link-row").style.backgroundColor = "black";
      document.querySelector(".nav-link-row").style.marginTop = "4vw";
      document.querySelector(".logobadge>h4").style.display = "none";
      document.querySelector(".logobadge>div>img").style.maxHeight = "5vw";
      document.querySelector(".logobadge>div>img").style.borderWidth = "0px";
      document.querySelector(".logobadge").style.backgroundColor = "transparent";
      document.querySelector(".logobadge>div>img").style.marginTop = "1.5vw";
      document.querySelector(".logobadge").style.paddingLeft = "0";
      document.querySelector(".mobilelogo>img").style.maxHeight = "6vh";
      document.querySelector(".logobadge").style.transition = "1s";
      document.querySelector(".logobadge>h4").style.transition = "1s";
      document.querySelector(".logobadge>div>img").style.transition = "1s";
      document.querySelector(".mobilelogo>img").style.transition = "1s";
      document.querySelector(".nav-link-row").style.opacity = "1";
      document.querySelector(".nav-col").style.paddingTop = "0.2vw";

    } else {
      document.querySelector(".nav-col>h2").style.lineHeight = "0.3rem";
      document.querySelector(".nav-col>h4").style.lineHeight = "0.3rem";
      document.querySelector(".nav-row").style.height = "4.8vw";
      document.querySelector(".nav-link-row").style.height = "3vw";
      document.querySelector(".nav-link-row").style.backgroundColor = "black";
      document.querySelector(".nav-link-row").style.marginTop = "4.8vw";
      document.querySelector(".logobadge>h4").style.display = "flex";
      document.querySelector(".logobadge>div>img").style.maxHeight = "8vw";
      document.querySelector(".logobadge>div>img").style.borderWidth = "0.5vw";
      document.querySelector(".logobadge").style.backgroundColor = "#E47F40";
      document.querySelector(".logobadge>div>img").style.marginTop = "0px";
      document.querySelector(".logobadge").style.paddingLeft = "0";
      document.querySelector(".mobilelogo>img").style.maxHeight = "8vh";
      document.querySelector(".logobadge").style.transition = "1s";
      document.querySelector(".logobadge>h4").style.transition = "1s";
      document.querySelector(".logobadge>div>img").style.transition = "1s";
      document.querySelector(".mobilelogo>img").style.transition = "1s";
      document.querySelector(".nav-link-row").style.opacity = "0.8";
      document.querySelector(".nav-col").style.paddingTop = "0.5vw";
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
          <div className="nav-link-row">
            <Link css={Rowlink} to="/">
              Home
            </Link>
            <Link css={Rowlink} to="/about">
              About Us
            </Link>
            <Link css={Rowlink} to="/administration">
              Administration
            </Link>
            <Link css={Rowlink} to="/">
              Academics
            </Link>
            <div>
            </div>
            <div className="dropdown">
              <button className="dropbtn" css={Rowlink}>Departments</button>
              <div className="dropdown-content">
                <Link css={Rowlink} to="/csehome">
                  Computer Science and Engineering
            </Link>
                <Link css={Rowlink} to="/ecehome">
                  Electronics and Communication Engineering
            </Link>
                <Link css={Rowlink} to="/eehome">
                  Electrical Engineering
            </Link>
                <Link css={Rowlink} to="/mehome">
                  Mechanical Engineering
            </Link>
                <Link css={Rowlink} to="/cehome">
                  Civil Engineering
            </Link>
                <Link css={Rowlink} to="/hsshome">
                  Humanities & Social Sciences
            </Link>
                <Link css={Rowlink} to="/archhome">
                  Architecture
            </Link>
                <Link css={Rowlink} to="/physicshome">
                  Physics
            </Link>
                <Link css={Rowlink} to="/chemhome">
                  Chemistry
            </Link>
              </div>
            </div>
            <Link css={Rowlink} to="/facilities">
              Facilities
            </Link>
            <Link css={Rowlink} to="/student/">
              Students
            </Link>
            <Link css={Rowlink} to="/">
              Placements
            </Link>
          </div>
          
          <div css={css`position:absolute;min-width:100%;display:flex;justify-content:center`}>
          <div className="logobadge">
            <h4>श्रमोऽनवरत चेष्टाय</h4>
            <div css={css`display:flex;justify-content:center`}>
                <img src={logo} alt="NIT PATNA" /></div>
            </div>
            </div>
          <span
            className="nav-toggle"
            onClick={function () {
              var x = document.querySelector(".nav-sidebar")
              if (x.style.display === "none") {
                x.style.display = "block"
              } else {
                x.style.display = "none"
              }
            }}
          >
            <img src={toggle} alt="menu" />
          </span>
          <div className="nav-sidebar">
            <div css={css`display:flex;justify-content:center;align-items:center`}>
              <img
                src={logo}
                css={`
                  height: 50px;margin:5px;
                `}
                alt="NIT PATNA"/><h4>NATIONAL INSTITUTE OF TECHNOLOGY PATNA</h4>
            </div>
            <div>
              <Link css={Li} to="/">
                Home
              </Link>
            </div>
            <div>
              <Link css={Li} to="/about">
                About Us
              </Link>
            </div>
            <div>
              <Link css={Li} to="/administration">
                Administration
              </Link>
            </div>
            <div>
              <Link css={Li} to="/">
                Academics
              </Link>
            </div>
            <div>
              <Link css={Li} to="/csehome">
                Departments
              </Link>
            </div>
            <div>
              <Link css={Li} to="/facilities">
                Facilities
              </Link>
            </div>
            <div>
              <Link css={Li} to="/student/">
                Students
              </Link>
            </div>
            
            <div>
              <Link css={Li} to="/">
                Placements
              </Link>
            </div>
          </div>
        </div>
        

      </>
    )
}

export default Navbar;