import React from 'react';
import Head from 'next/head';

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
      <Head>
        <title>National Institute of Technology Patna</title>
        <link rel="/favicon.ico" />
      </Head>
      <Navbar />
      <Home/>
      <Footer />
    </div>
  )
};

export default Index;
