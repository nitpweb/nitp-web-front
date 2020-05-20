import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Home from '../components/home';


export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <Navbar />
      <Home/>
      <Footer />
    </div>
  )
};

export default Index;
