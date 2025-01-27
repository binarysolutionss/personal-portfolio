import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Information from "../components/Information";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const About = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Information />
      <Skills />
      <Footer />
    </>
  );
};

export default About;
