import React from "react";
import Preloader from "./Preloader";
import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({ children}) => {
  
  
  return (
    <div>
      <div className="page-wrapper">
        {/* Preloader here */}
        <Preloader />

        {/* Header */}
        <Header />

        {children}

        {/* Footer here */}
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
