import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const Projects = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <>
      <Navbar />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Projects;