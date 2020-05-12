import React from 'react';
import './global/css/navbar.css';
import logo from './global/img/logo512.png';

const Navbar=()=>{
    return (
      <div className="nav-row">
        <div className="mobilelogo">
          <img src={logo} alt="NIT PATNA" />
        </div>
        <div className="nav-col">
          <h2>NATIONAL INSTITUTE OF TECHNOLOGY PATNA</h2>
          <h4>राष्ट्रीय प्रौद्योगिकी संस्थान, पटना</h4>
        </div>
        <div className="logobadge">
          <h4>श्रमोऽनवरत चेष्टाय</h4>
          <img src={logo} alt="NIT PATNA" />
        </div>
      </div>
    );
}

export default Navbar;