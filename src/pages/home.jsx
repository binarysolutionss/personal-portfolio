import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </>
  );
};

export default Home;